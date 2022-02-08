const Page = require('./page');
const selectors = {
  listTabItem: '#demo-tab-list',
  listTabContainer: '#demo-tabpane-list',
  gridTabItem: '#demo-tab-grid',
  gridTabContainer: '#demo-tabpane-grid',
  listItem_1: '#verticalListContainer li:nth-child(1)',
  listItem_2: '#verticalListContainer li:nth-child(2)',
  listItem_3: '#verticalListContainer li:nth-child(3)',
  listItem_4: '#verticalListContainer li:nth-child(4)',
  gridItemOne: '#row1 li:nth-child(1)',
  gridItemTwo: '#row1 li:nth-child(2)',
  gridItemThree: '#row1 li:nth-child(3)',
  gridItemFour: '#row2 li:nth-child(1)',
  gridItemFive: '#row2 li:nth-child(2)',
  gridItemSix: '#row2 li:nth-child(3)',
  gridItemSeven: '#row3 li:nth-child(1)',
  gridItemEight: '#row3 li:nth-child(2)',
  gridItemNine: '#row3 li:nth-child(3)',
};

class SelectablePage extends Page {
  get listTabItem() { return $(selectors.listTabItem); }

  get listTabContainer() { return $(selectors.listTabContainer); }

  get gridTabItem() { return $(selectors.gridTabItem); }

  get gridTabContainer() { return $(selectors.gridTabContainer); }

  get listItem_1() { return $(selectors.listItem_1); }

  get listItem_2() { return $(selectors.listItem_2); }

  get listItem_3() { return $(selectors.listItem_3); }

  get listItem_4() { return $(selectors.listItem_4); }

  get gridItemOne() { return $(selectors.gridItemOne); }

  get gridItemTwo() { return $(selectors.gridItemTwo); }

  get gridItemThree() { return $(selectors.gridItemThree); }

  get gridItemFour() { return $(selectors.gridItemFour); }

  get gridItemFive() { return $(selectors.gridItemFive); }

  get gridItemSix() { return $(selectors.gridItemSix); }

  get gridItemSeven() { return $(selectors.gridItemSeven); }

  get gridItemEight() { return $(selectors.gridItemEight); }

  get gridItemNine() { return $(selectors.gridItemNine); }
}

module.exports = new SelectablePage();