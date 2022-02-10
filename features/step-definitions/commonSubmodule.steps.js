const { When } = require('@wdio/cucumber-framework');
const commonSubmodulePage = require('../pageobjects/commonSubmodule.page');

When(/^I click on the "(.*)" submodule item$/, async (text) => {
    await commonSubmodulePage.submoduleItem(text).waitForDisplayed();
    await commonSubmodulePage.submoduleItem(text).scrollIntoView();
    await commonSubmodulePage.submoduleItem(text).click();
});