const Page = require('./page');
const selectors = {
  submoduleItem: (text) => `.//li[contains(@class, "btn btn-light") and .//text()="${text}"]`,
};

class CommonSubmodulePage extends Page {
  submoduleItem(text) { return $(selectors.submoduleItem(text)); }
}

module.exports = new CommonSubmodulePage();