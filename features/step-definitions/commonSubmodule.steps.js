const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const commonSubmodulePage = require('../pageobjects/commonSubmodule.page');

When(/^I click on the "(.*)" submodule item$/, async (text) => {
    await commonSubmodulePage.submoduleItem(text).waitForDisplayed();
    await commonSubmodulePage.submoduleItem(text).scrollIntoView();
    await commonSubmodulePage.submoduleItem(text).click();
});

Then(/^I should see the "(.*)" item page$/, async (header) => {
    expect(await commonSubmodulePage.mainHeader(header).isDisplayed()).is.equal(true);
}); 

When(/^I click the "(.*)" button$/, async (buttonName) => {
    if (buttonName == "Double Click Me") {
        await commonSubmodulePage.button(buttonName).waitForDisplayed();
        await commonSubmodulePage.button(buttonName).scrollIntoView();
        await commonSubmodulePage.button(buttonName).doubleClick();
    } else if (buttonName == "Right Click Me") {
        await commonSubmodulePage.button(buttonName).waitForDisplayed();
        await commonSubmodulePage.button(buttonName).scrollIntoView();
        await commonSubmodulePage.button(buttonName).click({ button: 'right' });
    } else {
        await commonSubmodulePage.button(buttonName).waitForDisplayed();
        await commonSubmodulePage.button(buttonName).scrollIntoView();
        await commonSubmodulePage.button(buttonName).click();
    }
});

When(/^I click on the "(.*)" tab$/, async (tabName) => {
    await commonSubmodulePage.tab(tabName).click();
});

Then(/^I should see information of the active tab$/, async () => {
    await commonSubmodulePage.tabContainer.waitForDisplayed();
    expect(await commonSubmodulePage.tabContainer.isDisplayed()).is.equal(true);
});