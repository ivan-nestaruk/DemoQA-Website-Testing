const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const practiceFormPage = require('../pageobjects/practiceForm.page');

When(/^I fill in the First Name with "(.*)"$/, async (studentFirstName) => {
    await practiceFormPage.firstNameField.setValue(studentFirstName);
});

Then(/^I expect that value "(.*)" of the First Name is correct$/, async (studentFirstName) => {
    expect(await practiceFormPage.firstNameField.getValue()).is.equal(studentFirstName);
});

When(/^I fill in the Last Name with "(.*)"$/, async (studentLastName) => {
    await practiceFormPage.lastNameField.setValue(studentLastName);
});

Then(/^I expect that value "(.*)" of the Last Name is correct$/, async (studentLastName) => {
    expect(await practiceFormPage.lastNameField.getValue()).is.equal(studentLastName);
});

When(/^I fill in the Email with "(.*)"$/, async (studentEmail) => {
    await practiceFormPage.userEmailField.setValue(studentEmail);
});

Then(/^I expect that value "(.*)" of the Email is correct$/, async (studentEmail) => {
    expect(await practiceFormPage.userEmailField.getValue()).is.equal(studentEmail);
});

When(/^I select Male gender$/, async () => {
    await practiceFormPage.genderRadioBtn_1.click();
});

Then(/^I expect that the Male radio-button is selected$/, async () => {
    expect(await practiceFormPage.genderRadioBtnIsSelected.isSelected()).is.equal(true);
});

When(/^I fill in the Mobile Number with "(.*)"$/, async (studentNumber) => {
    await practiceFormPage.userNumberField.setValue(studentNumber);
});

Then(/^I expect that value "(.*)" of the Mobile Number is correct$/, async (studentNumber) => {
    expect(await practiceFormPage.userNumberField.getValue()).is.equal(studentNumber);
});

When(/^I choose the Date of Birth 01 Feb 2022$/, async () => {
    await practiceFormPage.dateOfBirthField.click();
    await practiceFormPage.dateOfBirthData.click();
});

Then(/^I expect that value "(.*)" of the Date of Birth is correct$/, async (studentDateOfBirth) => {
    expect(await practiceFormPage.dateOfBirthField.getValue()).is.equal(studentDateOfBirth);
});

When(/^I enter the Subject "(.*)"$/, async (studentSubject) => {
    await practiceFormPage.subjectField.setValue(studentSubject);
    await browser.keys("Enter");
});

Then(/^I expect that value "(.*)" of the Subject is correct$/, async (studentSubject) => {
    expect(await practiceFormPage.subjectItem.getText()).is.equal(studentSubject);
});

When(/^I select hobbies: Sports$/, async () => {
    await practiceFormPage.hobbiesCheckBox_1.waitForClickable();
    await practiceFormPage.hobbiesCheckBox_1.click();
});

Then(/^I expect that the Sports check-box is active$/, async () => {
    expect(await practiceFormPage.hobbiesCheckBoxIsActive.getValue()).is.equal('1');
});

When(/^I upload the picture with path "(.*)"$/, async (picturePath) => {
    const remotePicturePath = await browser.uploadFile(picturePath);
    await practiceFormPage.uploadPictureBtn.setValue(remotePicturePath);
});

When(/^I fill in the Current Address with "(.*)"$/, async (studentCurrentAddress) => {
    await practiceFormPage.currentAddressField.setValue(studentCurrentAddress);
});

Then(/^I expect that value "(.*)" of the Current Address is correct$/, async (studentCurrentAddress) => {
    expect(await practiceFormPage.currentAddressField.getValue()).is.equal(studentCurrentAddress);
});

When(/^I select the State "(.*)"$/, async (studentState) => {
    await practiceFormPage.stateList.setValue(studentState);
    await browser.keys("Enter");
});

Then(/^I expect that value "(.*)" of the State is correct$/, async (studentState) => {
    expect(await practiceFormPage.stateContainer.getText()).is.equal(studentState);
});

When(/^I select the City "(.*)"$/, async (studentCity) => {
    await practiceFormPage.cityList.setValue(studentCity);
    await browser.keys("Enter");
});

Then(/^I expect that value "(.*)" of the City is correct$/, async (studentCity) => {
    expect(await practiceFormPage.cityContainer.getText()).is.equal(studentCity);
});

When(/^I click the form Submit button$/, async () => {
    await practiceFormPage.subjectField.waitForClickable();
    await practiceFormPage.submitFormBtn.click();
});

Then(/^I should see the output window with submitted data$/, async () => {
    await practiceFormPage.modalDialogForm.waitForDisplayed();
    expect(await practiceFormPage.modalDialogForm.isDisplayed()).is.equal(true);
});

Then(/^I should verify that output contains First Name "(.*)"$/, async (studentFirstName) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentFirstName);
});

Then(/^I should verify that output contains Last Name "(.*)"$/, async (studentLastName) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentLastName);
});

Then(/^I should verify that output contains Email "(.*)"$/, async (studentEmail) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentEmail);
});

Then(/^I should verify that output contains selected Gender "(.*)"$/, async (studentGender) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentGender);
});

Then(/^I should verify that output contains Mobile Number "(.*)"$/, async (studentNumber) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentNumber);
});

Then(/^I should verify that output contains Date of Birth "(.*)"$/, async (studentDateOfBirth) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentDateOfBirth);
});

Then(/^I should verify that output contains Subjects "(.*)"$/, async (studentSubject) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentSubject);
});

Then(/^I should verify that output contains Hobbies "(.*)"$/, async (studentHobbies) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentHobbies);
});

Then(/^I should verify that output contains Picture "(.*)"$/, async (studentPicture) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentPicture);
});

Then(/^I should verify that output contains Current Address "(.*)"$/, async (studentCurrentAddress) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentCurrentAddress);
});

Then(/^I should verify that output contains State "(.*)"$/, async (studentState) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentState);
});

Then(/^I should verify that output contains City "(.*)"$/, async (studentCity) => {
    expect(await practiceFormPage.modalDialogForm.getText()).to.include(studentCity);
});
