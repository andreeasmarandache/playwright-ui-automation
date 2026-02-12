import { test, expect } from '../fixtures/baseTest.js';

test('Menu search - finds Carbonara Pasta', async ({ homePage }) => {
  await homePage.searchFor('Pasta');
  await expect(homePage.carbonaraHeading).toBeVisible();
});


