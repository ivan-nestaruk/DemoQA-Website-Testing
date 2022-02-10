const Page = require('./page');
const selectors = {
  whatTabItem: '#demo-tab-what',
  whatTabContaiter: '#demo-tabpane-what',
  originTabItem: '#demo-tab-origin',
  originTabContainer: '#demo-tabpane-origin',
  useTabItem: '#demo-tab-use',
  useTabContainer: '#demo-tabpane-use',
  mainItem_1: '#nav > li:nth-child(1)',
  mainItem_2: '#nav > li:nth-child(2)',
  mainItem_3: '#nav > li:nth-child(3)',
  subItem_1: '#nav > li:nth-child(2) > ul > li:nth-child(1)',
  subItem_2: '#nav > li:nth-child(2) > ul > li:nth-child(2)',
  subSubList: '#nav > li:nth-child(2) > ul > li:nth-child(3)',
  subSubItem_1: '#nav > li:nth-child(2) > ul > li:nth-child(3) > ul > li:nth-child(1)',
  subSubItem_2: '#nav > li:nth-child(2) > ul > li:nth-child(3) > ul > li:nth-child(2)',
};

class WidgetsPage extends Page {
  async open() { await super.open('https://demoqa.com/widgets'); }

  get whatTabItem() { return $(selectors.whatTabItem); }

  get whatTabContaiter() { return $(selectors.whatTabContaiter); }
  
  get originTabItem() { return $(selectors.originTabItem); }

  get originTabContainer() { return $(selectors.originTabContainer); }

  get useTabItem() { return $(selectors.useTabItem); }

  get useTabContainer() { return $(selectors.useTabContainer); }

  get mainItem_1() { return $(selectors.mainItem_1); }

  get mainItem_2() { return $(selectors.mainItem_2); }

  get mainItem_3() { return $(selectors.mainItem_3); }

  get subItem_1() { return $(selectors.subItem_1); }

  get subItem_2() { return $(selectors.subItem_2); }

  get subSubList() { return $(selectors.subSubList); }

  get subSubItem_1() { return $(selectors.subSubItem_1); }

  get subSubItem_2() { return $(selectors.subSubItem_2); }
}

module.exports = new WidgetsPage();