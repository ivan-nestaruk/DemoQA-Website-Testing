const Page = require('./page');
const selectors = {
  fieldName: (fieldName) => `.//div[contains(@id, "wrapper") and .//text()="${fieldName}"]//input | .//div[contains(@id, "wrapper") and .//text()="${fieldName}"]//textarea`,
  submitBtn: '#submit',
  summaryField: '#output',
  dblClickBtn: '#doubleClickBtn',
  rClickBtn: '#rightClickBtn',
  dynClickBtn: '//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[3]/button',
  textMessage: '//*[@id="app"]/div/div/div[2]/div[2]/div[1]',
};

class ElementsPage extends Page {
  fieldName(fieldName) { return $(selectors.fieldName(fieldName)); }
  
  get submitBtn() { return $(selectors.submitBtn); }

  get summaryField() { return $(selectors.summaryField); }

  async open() { await super.open('https://demoqa.com/elements'); }

  get dblClickBtn() { return $(selectors.dblClickBtn); }

  get rClickBtn() { return $(selectors.rClickBtn); }

  get dynClickBtn() { return $(selectors.dynClickBtn); }

  get textMessage() { return $(selectors.textMessage); }
}

module.exports = new ElementsPage();