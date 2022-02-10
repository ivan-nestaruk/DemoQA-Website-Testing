const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const interactionsPage = require('../pageobjects/interactions.page');

Then(/^I should see the Interactions module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/interaction');
});

Then(/^I should see the Selectable submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/selectable');
});

When(/^I click on the List tab$/, async () => {
    await interactionsPage.listTabItem.click();
}); 

Then(/^I should see the List tab items$/, async () => {
    expect(await interactionsPage.listTabContainer.isDisplayed()).is.equal(true);
});

When(/^I click on the Grid tab$/, async () => {
    await interactionsPage.gridTabItem.click();
}); 

Then(/^I should see the Grid tab items$/, async () => {
    expect(await interactionsPage.gridTabContainer.isDisplayed()).is.equal(true);
});

When(/^I click the "(.*)" item to select$/, async (text) => {
    await interactionsPage.numberOfItem(text).click();
}); 

When(/^I click the "(.*)" item to unselect$/, async (text) => {
    await interactionsPage.numberOfItemActive(text).click();
}); 

Then(/^I should see that the "(.*)" item is selected$/, async (textActive) => {
    expect(await interactionsPage.numberOfItemActive(textActive).getAttribute('class')).to.include('active');
});

Then(/^I should see that the "(.*)" item is unselected$/, async (text) => {
    expect(await interactionsPage.numberOfItem(text).getAttribute('class')).does.not.include('active');
});