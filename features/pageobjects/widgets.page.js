const Page = require('./page');
const selectors = {
  menuItem: (menuItemName) => `.//a[contains(@href, "#") and .//text()="${menuItemName}"]`,
};

class WidgetsPage extends Page {
  menuItem(menuItemName) { return $(selectors.menuItem(menuItemName)); }
}

module.exports = new WidgetsPage();