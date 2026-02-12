import { test as base, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage.js';

export const test = base.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.openHome();
    await use(homePage);
  },
});

export { expect };
