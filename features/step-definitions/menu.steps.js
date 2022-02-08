const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const menuPage = require('../pageobjects/menu.page');

Then(/^I should see the Menu submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/menu');
});

When(/^I click the Main Item 1$/, async () => {
    await menuPage.mainItem_1.click();
});

Then(/^I should see the Menu page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/menu#');
});

When(/^I click the Main Item 2$/, async () => {
    await menuPage.mainItem_2.click();
});

When(/^I click the Main Item 3$/, async () => {
    await menuPage.mainItem_3.click();
});

When(/^I click the Sub Item 1$/, async () => {
    await menuPage.mainItem_2.moveTo();
    await menuPage.subItem_1.waitForDisplayed();
    await menuPage.subItem_1.click();
});

When(/^I click the Sub Item 2$/, async () => {
    await menuPage.mainItem_2.moveTo();
    await menuPage.subItem_2.waitForDisplayed();
    await menuPage.subItem_2.click();
});

When(/^I click the Sub Sub List$/, async () => {
    await menuPage.mainItem_2.moveTo();
    await menuPage.subSubList.waitForDisplayed();
    await menuPage.subSubList.click();
});

When(/^I click the Sub Sub Item 1$/, async () => {
    await menuPage.mainItem_2.moveTo();
    await menuPage.subSubList.waitForDisplayed();
    await menuPage.subSubList.moveTo();
    await menuPage.subSubItem_1.waitForDisplayed();
    await menuPage.subSubItem_1.click();
});

When(/^I click the Sub Sub Item 2$/, async () => {
    await menuPage.mainItem_2.moveTo();
    await menuPage.subSubList.waitForDisplayed();
    await menuPage.subSubList.moveTo();
    await menuPage.subSubItem_2.waitForDisplayed();
    await menuPage.subSubItem_2.click();
});
