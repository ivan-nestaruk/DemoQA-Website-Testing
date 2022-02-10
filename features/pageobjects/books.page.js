const Page = require('./page');
const selectors = {
  bookStoreItemContainer: '//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]',
  booksItem: (text) => `.//span[contains(@class, "mr-2") and .//text()="${text}"]//a`,
  actualISBN: '#userName-value',
};

class BooksPage extends Page {
  get bookStoreItemContainer() { return $(selectors.bookStoreItemContainer); }

  booksItem(text) { return $(selectors.booksItem(text)); }

  get actualISBN() { return $(selectors.actualISBN); }
}

module.exports = new BooksPage();