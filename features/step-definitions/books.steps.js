const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const booksPage = require('../pageobjects/books.page');

Then(/^I should see the Book Store Application module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/books');
});

Then(/^I should see the Book Store items$/, async () => {
    await booksPage.bookStoreItemContainer.waitForDisplayed();
    expect(await booksPage.bookStoreItemContainer.isDisplayed()).is.equal(true);
});

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