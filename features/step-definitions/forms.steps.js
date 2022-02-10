const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const formsPage = require('../pageobjects/forms.page');

Then(/^I should see the Forms module page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/forms');
});

Then(/^I should see the Practice Form submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/automation-practice-form');
});

When(/^I fill in the "(.*)" with "(.*)"$/, async (fieldName, value) => {
    if (fieldName == "Last Name") {
        await formsPage.lastNameField.setValue(value)
    } else {
        await formsPage.fieldName(fieldName).setValue(value);
    }
});

Then(/^I expect that the value "(.*)" of the "(.*)" field is correct$/, async (value, fieldName) => {
    if (fieldName == "Last Name") {
        expect(await formsPage.lastNameField.getValue()).is.equal(value);
    } else {
        expect(await formsPage.fieldName(fieldName).getValue()).is.equal(value);
    }
});

When(/^I select Male gender$/, async () => {
    await formsPage.genderRadioBtn_1.click();
});

Then(/^I expect that the Male radio-button is selected$/, async () => {
    expect(await formsPage.genderRadioBtnIsSelected.isSelected()).is.equal(true);
});

When(/^I choose the Date of Birth 01 Feb 2022$/, async () => {
    await formsPage.dateOfBirthField.click();
    await formsPage.dateOfBirthData.click();
});

Then(/^I expect that value "(.*)" of the Date of Birth is correct$/, async (studentDateOfBirth) => {
    expect(await formsPage.dateOfBirthField.getValue()).is.equal(studentDateOfBirth);
});

When(/^I enter the Subjects with "(.*)"$/, async (studentSubject) => {
    await formsPage.subjectField.setValue(studentSubject);
    await browser.keys("Enter");
});

Then(/^I expect that the value "(.*)" of the Subjects field is correct$/, async (studentSubject) => {
    expect(await formsPage.subjectItem.getText()).is.equal(studentSubject);
});

When(/^I select hobbies: Sports$/, async () => {
    await formsPage.hobbiesCheckBox_1.waitForClickable();
    await formsPage.hobbiesCheckBox_1.click();
});

Then(/^I expect that the Sports check-box is active$/, async () => {
    expect(await formsPage.hobbiesCheckBoxIsActive.getValue()).is.equal('1');
});

When(/^I upload the picture with path "(.*)"$/, async (picturePath) => {
    const remotePicturePath = await browser.uploadFile(picturePath);
    await formsPage.uploadPictureBtn.setValue(remotePicturePath);
});

When(/^I select the State "(.*)"$/, async (studentState) => {
    await formsPage.stateList.setValue(studentState);
    await browser.keys("Enter");
});

Then(/^I expect that value "(.*)" of the State is correct$/, async (studentState) => {
    expect(await formsPage.stateContainer.getText()).is.equal(studentState);
});

When(/^I select the City "(.*)"$/, async (studentCity) => {
    await formsPage.cityList.setValue(studentCity);
    await browser.keys("Enter");
});

Then(/^I expect that value "(.*)" of the City is correct$/, async (studentCity) => {
    expect(await formsPage.cityContainer.getText()).is.equal(studentCity);
});

When(/^I click the form Submit button$/, async () => {
    await formsPage.subjectField.waitForClickable();
    await formsPage.submitFormBtn.click();
});

Then(/^I should see the output window with submitted data$/, async () => {
    await formsPage.modalDialogForm.waitForDisplayed();
    expect(await formsPage.modalDialogForm.isDisplayed()).is.equal(true);
});

Then(/^I should verify that output contains "(.*)": "(.*)"$/, async (field, value) => {
    expect(await formsPage.modalDialogForm.getText()).to.include(value);
});