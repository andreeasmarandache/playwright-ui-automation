import { test, expect } from '@playwright/test';

test('Testaurant - opens app', async ({ page }) => {
  await page.goto('https://apps.qualiadept.eu/testaurant/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveURL(/apps\.qualiadept\.eu\/testaurant/);
  await expect(page.getByRole('heading').first()).toBeVisible();
});
