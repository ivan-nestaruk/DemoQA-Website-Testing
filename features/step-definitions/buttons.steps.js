const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const buttonsPage = require('../pageobjects/buttons.page');

Then(/^I should see the Buttons submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/buttons');
});

When(/^I double-click on the Double Click Me button$/, async () => {
    await buttonsPage.dblClickBtn.doubleClick();
});

Then(/^I should see a text message_1: "(.*)"$/, async (message_1) => {
    expect(await buttonsPage.dblClickMessage.getText()).is.equal(message_1);
});

When(/^I right-click on the Right Click Me button$/, async () => {
    await buttonsPage.rClickBtn.click({ button: 'right' });
});

Then(/^I should see a text message_2: "(.*)"$/, async (message_2) => {
    expect(await buttonsPage.rClickMessage.getText()).is.equal(message_2);
});

When(/^I click on the Click Me button$/, async () => {
    await buttonsPage.dynClickBtn.click();
});

Then(/^I should see a text message_3: "(.*)"$/, async (message_3) => {
    expect(await buttonsPage.dynClickMessage.getText()).is.equal(message_3);
});