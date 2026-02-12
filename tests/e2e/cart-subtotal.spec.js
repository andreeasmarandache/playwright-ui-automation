import { test, expect } from '../fixtures/baseTest.js';

test.describe('@regression', () => {
  test('Cart subtotal equals Carbonara price after adding one item', async ({ homePage }) => {
    // 1) Search
    await homePage.menu.searchFor('Pasta');

    // 2) Asigurăm că item-ul e vizibil și îl adăugăm
    await expect(homePage.menu.carbonaraHeading).toBeVisible();
    await homePage.menu.addCarbonaraToCart();

    // 3) Luăm prețul Carbonara din zona de menu (RON ... lângă item)
    // Codegen a folosit: page.locator('#menu').getByText('RON')
    // Noi facem asta mai specific: în card-ul Carbonara, căutăm un text cu RON
    const carbonaraPriceLocator = homePage.menu.carbonaraCard.getByText(/RON\s*\d+(\.\d{2})?/);
    await expect(carbonaraPriceLocator).toBeVisible();

    const carbonaraPriceTextRaw = await carbonaraPriceLocator.first().innerText();
    const carbonaraPrice = carbonaraPriceTextRaw.match(/RON\s*\d+(\.\d{2})?/)[0].replace(/\s+/g, ' ');

    // 4) Subtotal din cart/quote
    const subtotal = await homePage.cart.getSubtotalAmount();

    // 5) Assert: subtotal == price (primul item adăugat)
    expect(subtotal).toBeTruthy();
    expect(carbonaraPrice).toBeTruthy();
    expect(subtotal).toBe(carbonaraPrice);
  });
});
