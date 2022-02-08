const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const textBoxPage = require('../pageobjects/textBox.page');

Then(/^I should see the Text Box submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/text-box');
});

When(/^I fill in the Full Name field with "(.*)"$/, async (userName) => {
    await textBoxPage.userNameField.setValue(userName);
});

When(/^I fill in the Email field with "(.*)"$/, async (userEmail) => {
    await textBoxPage.userEmailField.setValue(userEmail);
});

When(/^I fill in the Current Address field with "(.*)"$/, async (currentAddress) => {
    await textBoxPage.currentAddressField.setValue(currentAddress);
});

When(/^I fill in the Permanent Address field with "(.*)"$/, async (permanentAddress) => {
    await textBoxPage.permanentAddressField.setValue(permanentAddress);
});

When(/^I click the Submit button$/, async () => {
    await textBoxPage.submitBtn.waitForClickable();
    await textBoxPage.submitBtn.click();
});

Then(/^I should verify the Summary text field contains Full Name: "(.*)"$/, async (userName) => {
    expect(await textBoxPage.summaryField.getText()).to.include(userName);
});

Then(/^I should verify the Summary text field contains Email: "(.*)"$/, async (userEmail) => {
    expect(await textBoxPage.summaryField.getText()).to.include(userEmail);
});

Then(/^I should verify the Summary text field contains Current Address: "(.*)"$/, async (currentAddress) => {
    expect(await textBoxPage.summaryField.getText()).to.include(currentAddress);
});

Then(/^I should verify the Summary text field contains Permanent Address: "(.*)"$/, async (permanentAddress) => {
    expect(await textBoxPage.summaryField.getText()).to.include(permanentAddress);
});
