const Page = require('./page');
const selectors = {
    logoBtn: 'a[href*="https://demoqa.com"]',
    cardItem:(text) => `.//div[contains(@class, "card mt-4 top-card") and .//text()="${text}"]`
}

class HomePage extends Page {
  get logoBtn() { return $(selectors.logoBtn); }

  cardItem(text) { return $(selectors.cardItem(text)); }
  
  async open() { await super.open('https://demoqa.com'); }
}

module.exports = new HomePage();