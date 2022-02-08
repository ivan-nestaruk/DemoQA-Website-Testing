const Page = require('./page');
const selectors = {
  browserWindowsItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[3]/div/ul/li[1]',
  modalDialogsItem: '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[3]/div/ul/li[5]',
};

class AlertsWindowsPage extends Page {
  get browserWindowsItem() { return $(selectors.browserWindowsItem); }

  get modalDialogsItem() { return $(selectors.modalDialogsItem); }

  async open() { await super.open('https://demoqa.com/alertsWindows'); }
}

module.exports = new AlertsWindowsPage();