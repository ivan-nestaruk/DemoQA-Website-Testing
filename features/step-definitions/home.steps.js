const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the Home page$/, async () => {
    await homePage.open('https://demoqa.com');
});

When(/^I click on logo-button ToolsQA$/, async () => {
    await homePage.logoBtn.click();
});

Then(/^I should see the Elements item$/, async () => {
    expect(await homePage.elementsItem.isDisplayed()).is.equal(true);
});

Then(/^I should see the Forms item$/, async () => {
    expect(await homePage.formsItem.isDisplayed()).is.equal(true);
});

Then(/^I should see the Alerts, Frame and Windows item$/, async () => {
    expect(await homePage.alertsWindowsItem.isDisplayed()).is.equal(true);
});

Then(/^I should see the Widgets item$/, async () => {
    expect(await homePage.widgetsItem.isDisplayed()).is.equal(true);
});

Then(/^I should see the Interactions item$/, async () => {
    expect(await homePage.interactionsItem.isDisplayed()).is.equal(true);
});

Then(/^I should see the Book Store Application item$/, async () => {
    expect(await homePage.booksItem.isDisplayed()).is.equal(true);
});

When(/^I click on the Elements item$/, async () => {
    await homePage.elementsItem.waitForDisplayed();
    await homePage.elementsItem.click();
});

When(/^I click on the Forms item$/, async () => {
    await homePage.formsItem.waitForDisplayed();
    await homePage.formsItem.click();
});

When(/^I click on the Alerts, Frame, and Windows item$/, async () => {
    await homePage.alertsWindowsItem.waitForDisplayed();
    await homePage.alertsWindowsItem.click();
});

When(/^I click on the Widgets item$/, async () => {
    await homePage.widgetsItem.waitForDisplayed();
    await homePage.widgetsItem.click();
});

When(/^I click on the Interactions item$/, async () => {
    await homePage.interactionsItem.waitForDisplayed();
    await homePage.interactionsItem.click();
});

When(/^I click on the Book Store Application item$/, async () => {
    await homePage.booksItem.waitForDisplayed();
    await homePage.booksItem.scrollIntoView();
    await homePage.booksItem.click();
});