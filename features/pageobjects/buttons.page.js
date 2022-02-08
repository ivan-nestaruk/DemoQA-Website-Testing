const Page = require('./page');
const selectors = {
    dblClickBtn: '#doubleClickBtn',
    rClickBtn: '#rightClickBtn',
    dynClickBtn: '//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[3]/button',
    dblClickMessage: '#doubleClickMessage',
    rClickMessage: '#rightClickMessage',
    dynClickMessage: '#dynamicClickMessage',
}

class ButtonsPage extends Page {
  get dblClickBtn() { return $(selectors.dblClickBtn); }

  get rClickBtn() { return $(selectors.rClickBtn); }

  get dynClickBtn() { return $(selectors.dynClickBtn); }

  get dblClickMessage() { return $(selectors.dblClickMessage); }

  get rClickMessage() { return $(selectors.rClickMessage); }

  get dynClickMessage() { return $(selectors.dynClickMessage); }
}

module.exports = new ButtonsPage();