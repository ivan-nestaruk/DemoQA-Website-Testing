const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const elementsPage = require('../pageobjects/elements.page');

Then(/^I should see the Elements module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/elements');
});

Given(/^I am on the Elements module page$/, async () => {
    await elementsPage.open('https://demoqa.com/elements');
});

Then(/^I should see the Text Box submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/text-box');
});

When(/^I fill in the "(.*)" field with "(.*)"$/, async (fieldName, value) => {
    await elementsPage.fieldName(fieldName).setValue(value);
});

When(/^I click the Submit button$/, async () => {
    await elementsPage.submitBtn.waitForClickable();
    await elementsPage.submitBtn.scrollIntoView();
    await elementsPage.submitBtn.click();
});

Then(/^I should verify the Summary text field contains "(.*)": "(.*)"$/, async (fieldName, value) => {
    expect(await elementsPage.summaryField.getText()).to.include(value);
});

Then(/^I should see the Buttons submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/buttons');
});

When(/^I double-click on the Double Click Me button$/, async () => {
    await elementsPage.dblClickBtn.doubleClick();
});

Then(/^I should see a message: "(.*)"$/, async (message) => {
    expect(await elementsPage.textMessage.getText()).to.include(message);
});

When(/^I right-click on the Right Click Me button$/, async () => {
    await elementsPage.rClickBtn.click({ button: 'right' });
});

When(/^I click on the Click Me button$/, async () => {
    await elementsPage.dynClickBtn.click();
});
