const Page = require('./page');
const selectors = {
  tabsItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[4]/div/ul/li[6]',
  menuItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[4]/div/ul/li[8]',
};

class WidgetsPage extends Page {
  get tabsItem() { return $(selectors.tabsItem); }

  get menuItem() { return $(selectors.menuItem); }

  async open() { await super.open('https://demoqa.com/widgets'); }
}

module.exports = new WidgetsPage();