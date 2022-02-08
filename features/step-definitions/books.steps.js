const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const booksPage = require('../pageobjects/books.page');

Then(/^I should see the Book Store Application module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/books');
});

When(/^I click on the Book Store item$/, async () => {
    await booksPage.bookStoreItem.waitForDisplayed();
    await booksPage.bookStoreItem.scrollIntoView();
    await booksPage.bookStoreItem.click();
});