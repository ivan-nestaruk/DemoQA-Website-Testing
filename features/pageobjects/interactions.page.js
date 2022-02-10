const Page = require('./page');
const selectors = {
  listTabItem: '#demo-tab-list',
  listTabContainer: '#demo-tabpane-list',
  gridTabItem: '#demo-tab-grid',
  gridTabContainer: '#demo-tabpane-grid',
  numberOfItem: (text) => `.//li[contains(@class, "list-group-item") and .//text()="${text}"]`,
  numberOfItemActive: (text) => `.//li[contains(@class, "list-group-item active") and .//text()="${text}"]`,
};

class InteractionsPage extends Page {
  get listTabItem() { return $(selectors.listTabItem); }

  get listTabContainer() { return $(selectors.listTabContainer); }

  get gridTabItem() { return $(selectors.gridTabItem); }

  get gridTabContainer() { return $(selectors.gridTabContainer); }

  numberOfItem(text) { return $(selectors.numberOfItem(text)); }

  numberOfItemActive(text) { return $(selectors.numberOfItemActive(text)); }
}

module.exports = new InteractionsPage();