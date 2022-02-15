const { When, Then } = require('@wdio/cucumber-framework');
const {expect, assert} = require('chai');
const booksPage = require('../pageobjects/books.page');

When(/^I click on the "(.*)" book item$/, async (text) => {
    await booksPage.booksItem(text).waitForDisplayed();
    await booksPage.booksItem(text).scrollIntoView();
    await booksPage.booksItem(text).click();
});

Then(/^I expect ISBN matches pattern "(.*)" on page$/, async (regex) => {
    const actualISBN = await booksPage.actualISBN.getText();
    const pattern = new RegExp(regex);
    const isMatch = pattern.test(actualISBN);
    expect(isMatch).is.equal(true);
  });

  When(/^I fill in the search field with "(.*)"$/, async (text) => {
    await booksPage.searchInput.waitForDisplayed();
    await booksPage.searchInput.setValue(text);
});

Then(/^Then I expect the following books are displayed$/, async () => {
    const expected = [].concat(...table.rows());
    assert(booksPage.book[0], booksPage.book[1], booksPage.book[2], booksPage.book[3], [message])
});