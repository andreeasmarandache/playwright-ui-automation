import { test, expect } from '../fixtures/baseTest.js';

test('Menu search - finds Carbonara Pasta', async ({ homePage }) => {
  await homePage.menu.searchFor('Pasta');
await expect(homePage.menu.carbonaraHeading).toBeVisible();
});


