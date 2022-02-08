const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const widgetsPage = require('../pageobjects/widgets.page');

Then(/^I should see the Widgets module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/widgets');
});

When(/^I click on the Tabs item$/, async () => {
    await widgetsPage.tabsItem.waitForDisplayed();
    await widgetsPage.tabsItem.scrollIntoView();
    await widgetsPage.tabsItem.click();
});

Given(/^I am on the Widgets module page$/, async () => {
    await widgetsPage.open('https://demoqa.com/widgets');
});

When(/^I click on the Menu submodule page$/, async () => {
    await widgetsPage.menuItem.waitForDisplayed();
    await widgetsPage.menuItem.scrollIntoView();
    await widgetsPage.menuItem.click();
});
