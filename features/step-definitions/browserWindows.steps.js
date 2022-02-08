const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const browserWindowsPage = require('../pageobjects/browserWindows.page');

Then(/^I should see the Browser Windows submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/browser-windows');
});

When(/^I click the New Tab button$/, async () => {
    await browserWindowsPage.newTabBtn.click();
    await browser.switchWindow('https://demoqa.com/sample');
});

Then(/^I should see the "(.*)" text on the new browser tab$/, async (newTabSample) => {
    expect(await browserWindowsPage.newTab.getText()).is.equal(newTabSample);
});

When(/^I click the New Window button$/, async () => {
    await browser.switchWindow('https://demoqa.com/browser-windows');
    await browserWindowsPage.newWindowBtn.click();
    await browser.switchWindow('https://demoqa.com/sample');
});

Then(/^I should see the "(.*)" text on the new browser window$/, async (newWindowSample) => {
    expect(await browserWindowsPage.newTab.getText()).is.equal(newWindowSample);
});

