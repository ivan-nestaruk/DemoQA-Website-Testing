const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const alertsWindowsPage = require('../pageobjects/alertsWindows.page');

Then(/^I should see the Alerts, Frame, and Windows module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/alertsWindows');
});

When(/^I click on the Browser Windows item$/, async () => {
    await alertsWindowsPage.browserWindowsItem.click();
});

Given(/^I am on the Alerts, Frame, and Windows module page$/, async () => {
    await alertsWindowsPage.open('https://demoqa.com/alertsWindows');
});

When(/^I click the Modal Dialog item$/, async () => {
    await alertsWindowsPage.modalDialogsItem.waitForDisplayed();
    await alertsWindowsPage.modalDialogsItem.scrollIntoView();
    await alertsWindowsPage.modalDialogsItem.click();
});