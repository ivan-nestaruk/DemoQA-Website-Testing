const Page = require('./page');
const selectors = {
  textBoxItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/ul/li[1]',
  buttonsItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/ul/li[5]',
};

class ElementsPage extends Page {
  get textBoxItem() { return $(selectors.textBoxItem); }

  get buttonsItem() { return $(selectors.buttonsItem); }

  async open() { await super.open('https://demoqa.com/elements'); }
}

module.exports = new ElementsPage();