const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const modalDialogWindowPage = require('../pageobjects/modalDialogWindow.page');

Then(/^I should see the Modal Dialog submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/modal-dialogs');
});

When(/^I click the Small modal button$/, async () => {
    await modalDialogWindowPage.smallModalBtn.click();
    await modalDialogWindowPage.smallModalWindow.waitForDisplayed();
});

Then(/^I should see the title of the small modal dialog "(.*)"$/, async (smallTitle) => {
    expect(await modalDialogWindowPage.smallModalWindow.getText()).is.equal(smallTitle);
});

When(/^I click the Large modal button$/, async () => {
    await modalDialogWindowPage.closeSmallModalBtn.click();
    await modalDialogWindowPage.largeModalBtn.click();
    await modalDialogWindowPage.largeModalWindow.waitForDisplayed();
});

Then(/^I should see the title of the large modal dialog "(.*)"$/, async (largeTitle) => {
    expect(await modalDialogWindowPage.largeModalWindow.getText()).is.equal(largeTitle);
});