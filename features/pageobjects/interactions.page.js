const Page = require('./page');
const selectors = {
  selectableItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[5]/div/ul/li[2]',
};

class InteractionsPage extends Page {
  get selectableItem() { return $(selectors.selectableItem); }
}

module.exports = new InteractionsPage();