// @ts-check
import { defineConfig, devices } from '@playwright/test';

const isGitHubActions = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'https://apps.qualiadept.eu/testaurant/',
    trace: isGitHubActions ? 'on-first-retry' : 'off',
    ignoreHTTPSErrors: true,

    // ❗ video/screenshot doar în CI
    screenshot: isGitHubActions ? 'only-on-failure' : 'off',
    video: isGitHubActions ? 'retain-on-failure' : 'off',
  },

  timeout: process.env.GITHUB_ACTIONS ? 60000 : 30000,
  expect: {
    timeout: 10000,
},

  projects: isGitHubActions
    ? [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
    : [{ name: 'chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome' } }],
});


