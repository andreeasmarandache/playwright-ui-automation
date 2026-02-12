import { BasePage } from './BasePage.js';
import { MenuSection } from './components/MenuSection.js';
import { CartSection } from './components/CartSection.js';

export class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    this.pageHeading = page.getByRole('heading', { name: 'Testaurant' });

    // ✅ sections (în loc să ținem totul aici)
    this.menu = new MenuSection(page);
    this.cart = new CartSection(page);
  }

  async openHome() {
    await this.page.goto('https://apps.qualiadept.eu/testaurant/', {
      waitUntil: 'domcontentloaded',
    });

    // ✅ anchor robust în CI (păstrăm fix ce aveai)
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('body');

    if (!process.env.GITHUB_ACTIONS) {
      await this.pageHeading.waitFor({ state: 'visible' });
    }
  }
}
