const Page = require('./page');
const selectors = {
  bookStoreItemContainer: '//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]',
  bookItem_4: 'a[href*="/books?book=9781449365035"]',
  actualISBN: '#userName-value',
};

class BookStorePage extends Page {
  get bookStoreItemContainer() { return $(selectors.bookStoreItemContainer); }

  get bookItem_4() { return $(selectors.bookItem_4); }

  get actualISBN() { return $(selectors.actualISBN); }
}

module.exports = new BookStorePage();