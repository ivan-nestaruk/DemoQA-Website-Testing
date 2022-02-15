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

Then(/^Then I expect the following books are displayed$/, async (table) => {
    const expected = [].concat(...table.rows());
    const actual = await booksPage.getAllBooksTitles();
    assert.sameMembers(await actual, expected, `expected :\n${expected.sort()} actual :\n${actual.sort()}\n`);
});

When(/^I open the (.*) book$/, async (bookTitle) => {
    await booksPage.booksItem(bookTitle).waitForDisplayed();
    await booksPage.booksItem(bookTitle).scrollIntoView();
    await booksPage.booksItem(bookTitle).click();
});

Then(/^I should verify that its Sub Title contains (.*)$/, async (bookSubTitle) => {
    expect(await booksPage.subTitleLabel(bookSubTitle).isDisplayed()).is.equal(true);
});