const Page = require('./page');
const selectors = {
  practiceFormItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[2]/div/ul/li',
};

class FormsPage extends Page {
  get practiceFormItem() { return $(selectors.practiceFormItem); }

  async open() { await super.open('https://demoqa.com/forms'); }
}

module.exports = new FormsPage();