const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the Home page$/, async () => {
    await homePage.open('https://demoqa.com');
});

When(/^I click on logo-button ToolsQA$/, async () => {
    await homePage.logoBtn.click();
});

Then(/^I should see the "(.*)" item$/, async (text) => {
    expect(await homePage.cardItem(text).isDisplayed()).is.equal(true);
});

When(/^I click on the "(.*)" item$/, async (text) => {
    await homePage.cardItem(text).waitForDisplayed();
    await homePage.cardItem(text).click();
});
