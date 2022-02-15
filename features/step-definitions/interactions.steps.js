const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const interactionsPage = require('../pageobjects/interactions.page');

When(/^I click the "(.*)" item$/, async (text) => {
    await interactionsPage.numberOfItem(text).click();
}); 

Then(/^I should see that the "(.*)" item is selected$/, async (text) => {
    expect(await interactionsPage.numberOfItem(text).getAttribute('class')).to.include('active');
});

Then(/^I should see that the "(.*)" item is unselected$/, async (text) => {
    expect(await interactionsPage.numberOfItem(text).getAttribute('class')).does.not.include('active');
});