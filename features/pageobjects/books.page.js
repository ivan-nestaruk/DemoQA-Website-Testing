const Page = require('./page');
const selectors = {
  book: '//span[contains(@id,"see-book")]/a',
  actualISBN: '#userName-value',
  searchInput: '#searchBox',
  booksItem: (text) => `.//span[contains(@class, "mr-2") and .//text()="${text}"]//a`,
  subTitleLabel: (bookSubTitle) => `.//label[contains(@class, "form-label") and .//text()="${bookSubTitle}"]`,
};

class BooksPage extends Page {
  get allBooks() { return $$(selectors.book); }

  get actualISBN() { return $(selectors.actualISBN); }

  get searchInput() { return $(selectors.searchInput); }

  booksItem(text) { return $(selectors.booksItem(text)); }

  subTitleLabel(bookSubTitle) { return $(selectors.subTitleLabel(bookSubTitle)); }

  getAllBooksTitles() {
    const elements = this.allBooks.map(e => e.getText());
    return elements ;
  }
}

module.exports = new BooksPage();