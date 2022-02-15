const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const elementsPage = require('../pageobjects/elements.page');

When(/^I fill in the "(.*)" field with "(.*)"$/, async (fieldName, value) => {
    await elementsPage.fieldName(fieldName).setValue(value);
});

Then(/^I should verify the Summary text field contains: "(.*)"$/, async (value) => {
    expect(await elementsPage.summaryField.getText()).to.include(value);
});

Then(/^I should see a message: "(.*)"$/, async (message) => {
    expect(await elementsPage.textMessage.getText()).to.include(message);
});

