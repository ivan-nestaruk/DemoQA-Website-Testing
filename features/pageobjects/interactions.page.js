const Page = require('./page');
const selectors = {
  numberOfItem: (text) => `.//li[contains(@class, "list-group-item") and .//text()="${text}"]`,
};

class InteractionsPage extends Page {
  numberOfItem(text) { return $(selectors.numberOfItem(text)); }
}

module.exports = new InteractionsPage();