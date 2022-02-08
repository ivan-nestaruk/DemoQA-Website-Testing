const Page = require('./page');
const selectors = {
    logoBtn: 'a[href*="https://demoqa.com"]',
    elementsItem: 'div.home-body > div > div:nth-child(1)',
    formsItem: 'div.home-body > div > div:nth-child(2)',
    alertsWindowsItem: 'div.home-body > div > div:nth-child(3)',
    widgetsItem: 'div.home-body > div > div:nth-child(4)',
    interactionsItem: 'div.home-body > div > div:nth-child(5)',
    booksItem: 'div.home-body > div > div:nth-child(6)',
}

class HomePage extends Page {
  get logoBtn() { return $(selectors.logoBtn); }

  get elementsItem() { return $(selectors.elementsItem); }

  get formsItem() { return $(selectors.formsItem); }

  get alertsWindowsItem() { return $(selectors.alertsWindowsItem); }

  get widgetsItem() { return $(selectors.widgetsItem); }

  get interactionsItem() { return $(selectors.interactionsItem); }

  get booksItem() { return $(selectors.booksItem); }

  async open() { await super.open('https://demoqa.com'); }
}

module.exports = new HomePage();