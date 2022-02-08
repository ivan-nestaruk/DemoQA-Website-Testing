const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const interactionsPage = require('../pageobjects/interactions.page');

Then(/^I should see the Interactions module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/interaction');
});

When(/^I click on the Selectable item$/, async () => {
    await interactionsPage.selectableItem.waitForDisplayed();
    await interactionsPage.selectableItem.scrollIntoView();
    await interactionsPage.selectableItem.click();
});