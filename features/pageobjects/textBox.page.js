const Page = require('./page');
const selectors = {
    userNameField: '#userName',
    userEmailField: '#userEmail',
    currentAddressField: '#currentAddress',
    permanentAddressField: '#permanentAddress',
    submitBtn: '#submit',
    summaryField: '#output',
}

class TextBoxPage extends Page {
  get userNameField() { return $(selectors.userNameField); }

  get userEmailField() { return $(selectors.userEmailField); }

  get currentAddressField() { return $(selectors.currentAddressField); }

  get permanentAddressField() { return $(selectors.permanentAddressField); }

  get submitBtn() { return $(selectors.submitBtn); }

  get summaryField() { return $(selectors.summaryField); }
}

module.exports = new TextBoxPage();