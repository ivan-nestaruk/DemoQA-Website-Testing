const Page = require('./page');
const selectors = {
  newTab: '#sampleHeading',
  modal: (kind) => `.//div[contains(@id, "example-modal-sizes-title") and .//text()="${kind}"]`,
};

class AlertsWindowsPage extends Page {
  get newTab() { return $(selectors.newTab); }

  modal(kind) { return $(selectors.modal(kind)); }
}

module.exports = new AlertsWindowsPage();