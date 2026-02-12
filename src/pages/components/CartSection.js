export class CartSection {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.quote = page.locator('#quote');
    this.subtotalLine = this.quote.getByText('Subtotal', { exact: false });
    this.ronAmounts = this.quote.getByText(/RON\s*\d+(\.\d{2})?/);
  }

  async getSubtotalText() {
    const text = await this.subtotalLine.innerText();
    return text;
  }

  extractRonAmount(text) {
    const match = text.match(/RON\s*\d+(\.\d{2})?/);
    return match ? match[0].replace(/\s+/g, ' ') : null;
  }
    async getSubtotalAmount() {
    const line = await this.getSubtotalText();
    return this.extractRonAmount(line);
  }
}
