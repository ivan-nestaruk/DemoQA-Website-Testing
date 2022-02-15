const Page = require('./page');
const selectors = {
  tabContainer: './/div[contains(@class, "active")]',
  mainHeader: (header) => `.//div[contains(@class, "main-header") and .//text()="${header}"]`,
  submoduleItem: (text) => `.//li[contains(@class, "btn btn-light") and .//text()="${text}"]`,
  button: (buttonName) => `.//button[contains(@class, "btn") and .//text()="${buttonName}"]`,
  tab: (tabName) => `.//a[contains(@id, "demo-tab") and .//text()="${tabName}"]`,
};

class CommonSubmodulePage extends Page {
  get tabContainer() { return $(selectors.tabContainer); }
  
  mainHeader(header) { return $(selectors.mainHeader(header)); }

  submoduleItem(text) { return $(selectors.submoduleItem(text)); }

  button(buttonName) { return $(selectors.button(buttonName)); }

  tab(tabName) { return $(selectors.tab(tabName)); }
}

module.exports = new CommonSubmodulePage();