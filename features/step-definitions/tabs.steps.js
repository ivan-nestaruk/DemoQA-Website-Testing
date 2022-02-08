const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const tabsPage = require('../pageobjects/tabs.page');

Then(/^I should see the Tabs submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/tabs');
});

When(/^I click on the What tab$/, async () => {
    await tabsPage.whatTabItem.click();
    await tabsPage.whatTabContaiter.waitForDisplayed();
});

Then(/^I should see the What's tab information that includes the text "(.*)"$/, async (whatText) => {
    expect(await tabsPage.whatTabContaiter.getText()).to.include(whatText);
});

When(/^I click on the Origin tab$/, async () => {
    await tabsPage.originTabItem.click();
    await tabsPage.originTabContainer.waitForDisplayed();
});

Then(/^I should see the Origin's tab information that includes the text "(.*)"$/, async (originText) => {
    expect(await tabsPage.originTabContainer.getText()).to.include(originText);
});

When(/^I click on the Use tab$/, async () => {
    await tabsPage.useTabItem.click();
    await tabsPage.useTabContainer.waitForDisplayed();
});

Then(/^I should see the Use's tab information that includes the text "(.*)"$/, async (useText) => {
    expect(await tabsPage.useTabContainer.getText()).to.include(useText);
});


