const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const elementsPage = require('../pageobjects/elements.page');

Then(/^I should see the Elements module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/elements');
});

When(/^I click on the Text Box item$/, async () => {
    await elementsPage.textBoxItem.waitForDisplayed();
    await elementsPage.textBoxItem.click();
});

Given(/^I am on the Elements module page$/, async () => {
    await elementsPage.open('https://demoqa.com/elements');
});

When(/^I click on the Buttons item$/, async () => {
    await elementsPage.buttonsItem.waitForDisplayed();
    await elementsPage.buttonsItem.click();
});