const Page = require('./page');
const selectors = {
  book: '//span[contains(@id,"see-book")]',
  actualISBN: '#userName-value',
  searchInput: '#searchBox',
  booksItem: (text) => `.//span[contains(@class, "mr-2") and .//text()="${text}"]//a`,
};

class BooksPage extends Page {
  get book() { return $$(selectors.book); }

  get actualISBN() { return $(selectors.actualISBN); }

  get searchInput() { return $(selectors.searchInput); }

  booksItem(text) { return $(selectors.booksItem(text)); }
}

module.exports = new BooksPage();