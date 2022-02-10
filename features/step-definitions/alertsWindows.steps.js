const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const alertsWindowsPage = require('../pageobjects/alertsWindows.page');

Then(/^I should see the Alerts, Frame, and Windows module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/alertsWindows');
});

Given(/^I am on the Alerts, Frame, and Windows module page$/, async () => {
    await alertsWindowsPage.open('https://demoqa.com/alertsWindows');
});

Then(/^I should see the Browser Windows submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/browser-windows');
});

When(/^I click the New Tab button$/, async () => {
    await alertsWindowsPage.newTabBtn.click();
    await browser.switchWindow('https://demoqa.com/sample');
});

Then(/^I should see the "(.*)" text on the new browser "(.*)"$/, async (message, kindOfWidget) => {
    expect(await alertsWindowsPage.newTab.getText()).is.equal(message);
});

When(/^I click the New Window button$/, async () => {
    await browser.switchWindow('https://demoqa.com/browser-windows');
    await alertsWindowsPage.newWindowBtn.click();
    await browser.switchWindow('https://demoqa.com/sample');
});

Then(/^I should see the Modal Dialogs submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/modal-dialogs');
});

When(/^I click the Small modal button$/, async () => {
    await alertsWindowsPage.smallModalBtn.click();
    await alertsWindowsPage.smallModalWindow.waitForDisplayed();
});

Then(/^I should see the title of the "(.*)" dialog "(.*)"$/, async (kind, title) => {
    expect(await alertsWindowsPage.modal(kind).getText()).is.equal(title);
});

When(/^I click the Large modal button$/, async () => {
    await alertsWindowsPage.closeSmallModalBtn.click();
    await alertsWindowsPage.largeModalBtn.click();
    await alertsWindowsPage.largeModalWindow.waitForDisplayed();
});