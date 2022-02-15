const Page = require('./page');
const selectors = {
  summaryField: '#output',
  textMessage: '//*[@id="app"]/div/div/div[2]/div[2]/div[1]',
  fieldName: (fieldName) => `.//div[contains(@id, "wrapper") and .//text()="${fieldName}"]//input | .//div[contains(@id, "wrapper") and .//text()="${fieldName}"]//textarea`,
};

class ElementsPage extends Page {
  get summaryField() { return $(selectors.summaryField); }

  get textMessage() { return $(selectors.textMessage); }

  fieldName(fieldName) { return $(selectors.fieldName(fieldName)); }
}

module.exports = new ElementsPage();