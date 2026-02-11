import { test, expect } from '@playwright/test';

test('Testaurant - opens app', async ({ page }) => {
  await page.goto('https://apps.qualiadept.eu/testaurant/', {
    waitUntil: 'domcontentloaded',
  });

  // Verifică că pagina e încărcată și suntem pe domeniul corect
  await expect(page).toHaveURL(/apps\.qualiadept\.eu\/testaurant/);

  // Verificare "stabilă": există cel puțin un H1/heading pe pagină
  const firstHeading = page.getByRole('heading').first();
  await expect(firstHeading).toBeVisible();
});

