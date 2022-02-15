const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const alertsWindowsPage = require('../pageobjects/alertsWindows.page');

Then(/^I should see the "(.*)" text on the new browser item$/, async (message) => {
    expect(await alertsWindowsPage.newTab.getText()).is.equal(message);
});

Then(/^I should see the title of the "(.*)" dialog$/, async (kind) => {
    await alertsWindowsPage.modal(kind).waitForDisplayed();
    expect(await alertsWindowsPage.modal(kind).isDisplayed()).is.equal(true);
});

When(/^I switch the tab or the window with URL "(.*)"$/, async (url) => {
    await browser.switchWindow(url);
});

Then(/^I should see the tab or the window with URL "(.*)"$/, async (url) => {
    expect(await browser.getUrl()).is.equal(url);
});