const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const widgetsPage = require('../pageobjects/widgets.page');

When(/^I hover on the "(.*)" menu item$/, async (menuItemName) => {
    await widgetsPage.menuItem(menuItemName).moveTo();
});

When(/^I click on the "(.*)" menu item$/, async (menuItemName) => {
    await widgetsPage.menuItem(menuItemName).waitForDisplayed();
    await widgetsPage.menuItem(menuItemName).click();
});

Then(/^I should see the page with URL "(.*)"$/, async (url) => {
    expect(await browser.getUrl()).is.equal(url);
});