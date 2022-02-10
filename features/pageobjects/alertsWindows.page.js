const Page = require('./page');
const selectors = {
  newTabBtn: '#tabButton',
  newWindowBtn: '#windowButton',
  newWindowMessageBtn: '#messageWindowButton',
  newTab: '#sampleHeading',
  newWindowMessage: 'body',
  modal: (kind) => `.//div[contains(@id, "example-modal-sizes-title") and .//text()="${kind}"]`,
  smallModalBtn: '#showSmallModal',
  largeModalBtn: '#showLargeModal',
  smallModalWindow: '#example-modal-sizes-title-sm',
  largeModalWindow: '#example-modal-sizes-title-lg',
  closeSmallModalBtn: '#closeSmallModal',
};

class AlertsWindowsPage extends Page {
  async open() { await super.open('https://demoqa.com/alertsWindows'); }

  get newTabBtn() { return $(selectors.newTabBtn); }

  get newWindowBtn() { return $(selectors.newWindowBtn); }

  get newWindowMessageBtn() { return $(selectors.newWindowMessageBtn); }

  get newTab() { return $(selectors.newTab); }

  get newWindowMessage() { return $(selectors.newWindowMessage); }

  modal(kind) { return $(selectors.modal(kind)); }

  get smallModalBtn() { return $(selectors.smallModalBtn); }

  get largeModalBtn() { return $(selectors.largeModalBtn); }

  get smallModalWindow() { return $(selectors.smallModalWindow); }

  get largeModalWindow() { return $(selectors.largeModalWindow); }

  get closeSmallModalBtn() { return $(selectors.closeSmallModalBtn); }
}

module.exports = new AlertsWindowsPage();