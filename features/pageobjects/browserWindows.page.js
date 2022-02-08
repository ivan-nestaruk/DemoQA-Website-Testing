const Page = require('./page');
const selectors = {
  newTabBtn: '#tabButton',
  newWindowBtn: '#windowButton',
  newWindowMessageBtn: '#messageWindowButton',
  newTab: '#sampleHeading',
  newWindowMessage: 'body',
};

class BrowserWindowsPage extends Page {
  get newTabBtn() { return $(selectors.newTabBtn); }

  get newWindowBtn() { return $(selectors.newWindowBtn); }

  get newWindowMessageBtn() { return $(selectors.newWindowMessageBtn); }

  get newTab() { return $(selectors.newTab); }

  get newWindowMessage() { return $(selectors.newWindowMessage); }
}

module.exports = new BrowserWindowsPage();