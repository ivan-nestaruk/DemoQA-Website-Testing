const Page = require('./page');
const selectors = {
  bookStoreItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[6]/div/ul/li[2]',
};

class BooksPage extends Page {
  get bookStoreItem() { return $(selectors.bookStoreItem); }
}

module.exports = new BooksPage();