const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const bookStorePage = require('../pageobjects/bookStore.page');

Then(/^I should see the Book Store items$/, async () => {
    await bookStorePage.bookStoreItemContainer.waitForDisplayed();
    expect(await bookStorePage.bookStoreItemContainer.isDisplayed()).is.equal(true);
});

When(/^I click on the Book_4 item$/, async () => {
    await bookStorePage.bookItem_4.waitForDisplayed();
    await bookStorePage.bookItem_4.scrollIntoView();
    await bookStorePage.bookItem_4.click();
});

Then(/^I expect ISBN matches pattern "(.*)" on page$/, async (regex) => {
    const actualISBN = await bookStorePage.actualISBN.getText();
    const pattern = new RegExp(regex);
    const isMatch = pattern.test(actualISBN);
    expect(isMatch).is.equal(true);
  });