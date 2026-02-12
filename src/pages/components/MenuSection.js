export class MenuSection {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.searchInput = page.getByRole('textbox', { name: 'Search menu' });
    this.carbonaraHeading = page.getByRole('heading', { name: 'Carbonara Pasta' });
    this.carbonaraCard = page.locator('#menu').locator('div', { has: this.carbonaraHeading });
    this.addToCartButton = this.carbonaraCard.getByRole('button', { name: 'Add' });
  }

  async searchFor(text) {
    await this.searchInput.waitFor({ state: 'visible' });
    await this.searchInput.click();
    await this.searchInput.fill('');
    await this.searchInput.type(text, { delay: 30 });
    await this.searchInput.press('Enter');
  }

  async addCarbonaraToCart() {
    await this.carbonaraHeading.waitFor({ state: 'visible' });
    await this.addToCartButton.click();
}

}
