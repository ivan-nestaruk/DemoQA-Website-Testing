const Page = require('./page');
const selectors = {
  whatTabItem: '#demo-tab-what',
  whatTabContaiter: '#demo-tabpane-what',
  originTabItem: '#demo-tab-origin',
  originTabContainer: '#demo-tabpane-origin',
  useTabItem: '#demo-tab-use',
  useTabContainer: '#demo-tabpane-use',
};

class TabsPage extends Page {
  get whatTabItem() { return $(selectors.whatTabItem); }

  get whatTabContaiter() { return $(selectors.whatTabContaiter); }
  
  get originTabItem() { return $(selectors.originTabItem); }

  get originTabContainer() { return $(selectors.originTabContainer); }

  get useTabItem() { return $(selectors.useTabItem); }

  get useTabContainer() { return $(selectors.useTabContainer); }
}

module.exports = new TabsPage();