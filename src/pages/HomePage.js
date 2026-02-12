import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    this.pageHeading = page.getByRole('heading', { name: 'Testaurant' });
    this.searchInput = page.getByRole('textbox', { name: 'Search menu' });
    this.carbonaraHeading = page.getByRole('heading', { name: 'Carbonara Pasta' });
  }

  async openHome() {
  await this.open('https://apps.qualiadept.eu/testaurant/');
  await this.pageHeading.waitFor({ state: 'visible' });
}


  async searchFor(text) {
    await this.searchInput.waitFor({ state: 'visible' });
    await this.searchInput.click();
    await this.searchInput.fill('');
    await this.searchInput.type(text, { delay: 30 });
    await this.searchInput.press('Enter');
  }
}
