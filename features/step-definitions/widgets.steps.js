const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const widgetsPage = require('../pageobjects/widgets.page');

Then(/^I should see the Widgets module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/widgets');
});

Given(/^I am on the Widgets module page$/, async () => {
    await widgetsPage.open('https://demoqa.com/widgets');
});

Then(/^I should see the Tabs submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/tabs');
});

When(/^I click on the What tab$/, async () => {
    await widgetsPage.whatTabItem.click();
    await widgetsPage.whatTabContaiter.waitForDisplayed();
});

Then(/^I should see the What's tab information that includes the text "(.*)"$/, async (whatText) => {
    expect(await widgetsPage.whatTabContaiter.getText()).to.include(whatText);
});

When(/^I click on the Origin tab$/, async () => {
    await widgetsPage.originTabItem.click();
    await widgetsPage.originTabContainer.waitForDisplayed();
});

Then(/^I should see the Origin's tab information that includes the text "(.*)"$/, async (originText) => {
    expect(await widgetsPage.originTabContainer.getText()).to.include(originText);
});

When(/^I click on the Use tab$/, async () => {
    await widgetsPage.useTabItem.click();
    await widgetsPage.useTabContainer.waitForDisplayed();
});

Then(/^I should see the Use's tab information that includes the text "(.*)"$/, async (useText) => {
    expect(await widgetsPage.useTabContainer.getText()).to.include(useText);
});

Then(/^I should see the Menu submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/menu');
});

When(/^I click the Main Item 1$/, async () => {
    await widgetsPage.mainItem_1.click();
});

Then(/^I should see the Menu page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/menu#');
});

When(/^I click the Main Item 2$/, async () => {
    await widgetsPage.mainItem_2.click();
});

When(/^I click the Main Item 3$/, async () => {
    await widgetsPage.mainItem_3.click();
});

When(/^I click the Sub Item 1$/, async () => {
    await widgetsPage.mainItem_2.moveTo();
    await widgetsPage.subItem_1.waitForDisplayed();
    await widgetsPage.subItem_1.click();
});

When(/^I click the Sub Item 2$/, async () => {
    await widgetsPage.mainItem_2.moveTo();
    await widgetsPage.subItem_2.waitForDisplayed();
    await widgetsPage.subItem_2.click();
});

When(/^I click the Sub Sub List$/, async () => {
    await widgetsPage.mainItem_2.moveTo();
    await widgetsPage.subSubList.waitForDisplayed();
    await widgetsPage.subSubList.click();
});

When(/^I click the Sub Sub Item 1$/, async () => {
    await widgetsPage.mainItem_2.moveTo();
    await widgetsPage.subSubList.waitForDisplayed();
    await widgetsPage.subSubList.moveTo();
    await widgetsPage.subSubItem_1.waitForDisplayed();
    await widgetsPage.subSubItem_1.click();
});

When(/^I click the Sub Sub Item 2$/, async () => {
    await widgetsPage.mainItem_2.moveTo();
    await widgetsPage.subSubList.waitForDisplayed();
    await widgetsPage.subSubList.moveTo();
    await widgetsPage.subSubItem_2.waitForDisplayed();
    await widgetsPage.subSubItem_2.click();
});