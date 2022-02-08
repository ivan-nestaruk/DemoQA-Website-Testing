const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const formsPage = require('../pageobjects/forms.page');

Then(/^I should see the Forms module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/forms');
});

When(/^I click on the Practice Form item$/, async () => {
    await formsPage.practiceFormItem.click();
});

Then(/^I should see the Practice Form submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/automation-practice-form');
});
