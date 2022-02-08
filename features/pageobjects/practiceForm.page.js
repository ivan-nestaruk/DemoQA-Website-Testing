const Page = require('./page');
const selectors = {
  firstNameField: '#firstName',
  lastNameField: '#lastName',
  lastNameField: '#lastName',
  userEmailField: '#userEmail',
  genderRadioBtn_1: '#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)',
  genderRadioBtnIsSelected: '#gender-radio-1',
  userNumberField: '#userNumber',
  dateOfBirthField: '#dateOfBirthInput',
  dateOfBirthData: '//*[@id="dateOfBirth"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[3]',
  subjectField: '#subjectsInput',
  subjectItem: '//*[@id="subjectsContainer"]/div/div[1]/div[1]/div[1]',
  hobbiesCheckBox_1: '#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)',
  hobbiesCheckBoxIsActive: '#hobbies-checkbox-1',
  uploadPictureBtn: '#uploadPicture',
  currentAddressField: '#currentAddress',
  stateList: '#react-select-3-input',
  stateContainer: '//*[@id="state"]/div/div[1]/div[1]',
  cityList: '#react-select-4-input',
  cityContainer: '//*[@id="city"]/div/div[1]/div[1]',
  submitFormBtn: '//*[@id="userForm"]/div[11]/div/button',
  modalDialogForm: '/html/body/div[4]/div/div/div[2]/div/table',
  
};

class PracticeFormPage extends Page {
  get firstNameField() { return $(selectors.firstNameField); }

  get lastNameField() { return $(selectors.lastNameField); }

  get userEmailField() { return $(selectors.userEmailField); }

  get genderRadioBtn_1() { return $(selectors.genderRadioBtn_1); }

  get genderRadioBtnIsSelected() { return $(selectors.genderRadioBtnIsSelected); }

  get userNumberField() { return $(selectors.userNumberField); }

  get dateOfBirthField() { return $(selectors.dateOfBirthField); }

  get dateOfBirthData() { return $(selectors.dateOfBirthData); }

  get subjectField() { return $(selectors.subjectField); }

  get subjectItem() { return $(selectors.subjectItem); }

  get hobbiesCheckBox_1() { return $(selectors.hobbiesCheckBox_1); }

  get hobbiesCheckBoxIsActive() { return $(selectors.hobbiesCheckBoxIsActive); }

  get uploadPictureBtn() { return $(selectors.uploadPictureBtn); }

  get currentAddressField() { return $(selectors.currentAddressField); }

  get stateList() { return $(selectors.stateList); }

  get stateContainer() { return $(selectors.stateContainer); }

  get cityList() { return $(selectors.cityList); }

  get cityContainer() { return $(selectors.cityContainer); }

  get submitFormBtn() { return $(selectors.submitFormBtn); }

  get modalDialogForm() { return $(selectors.modalDialogForm); }
}

module.exports = new PracticeFormPage();