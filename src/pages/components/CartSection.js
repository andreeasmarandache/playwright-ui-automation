export class CartSection {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartHeading = page.getByRole('heading', { name: 'Cart' });
  }

  itemByName(name) {
    return this.page.getByText(name);
  }
}
