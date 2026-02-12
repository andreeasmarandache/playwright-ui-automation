import { test, expect } from '@playwright/test';

test('Testaurant - opens app', async ({ page }) => {
  await page.goto('https://apps.qualiadept.eu/testaurant/', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveURL(/apps\.qualiadept\.eu\/testaurant/);

  // ✅ assert stabil: există <body> și pagina nu e goală
  await expect(page.locator('body')).toBeVisible();
});

