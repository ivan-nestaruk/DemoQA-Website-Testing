const Page = require('./page');
const selectors = {
  lastNameField: '#lastName',
  genderRadioBtn_1: '#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)',
  genderRadioBtnIsSelected: '#gender-radio-1',
  dateOfBirthField: '#dateOfBirthInput',
  dateOfBirthData: '//*[@id="dateOfBirth"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[3]',
  subjectField: '#subjectsInput',
  subjectItem: '//*[@id="subjectsContainer"]/div/div[1]/div[1]/div[1]',
  hobbiesCheckBox_1: '#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)',
  hobbiesCheckBoxIsActive: '#hobbies-checkbox-1',
  uploadPictureBtn: '#uploadPicture',
  stateList: '#react-select-3-input',
  stateContainer: '//*[@id="state"]/div/div[1]/div[1]',
  cityList: '#react-select-4-input',
  cityContainer: '//*[@id="city"]/div/div[1]/div[1]',
  modalDialogForm: '/html/body/div[4]/div/div/div[2]/div/table',
  fieldName: (fieldName) => `.//div[contains(@id, "wrapper") and .//text()="${fieldName}"]//input | .//div[contains(@id, "wrapper") and .//text()="${fieldName}"]//textarea`,
};

class FormsPage extends Page {
  get lastNameField() { return $(selectors.lastNameField); }

  get genderRadioBtn_1() { return $(selectors.genderRadioBtn_1); }

  get genderRadioBtnIsSelected() { return $(selectors.genderRadioBtnIsSelected); }

  get dateOfBirthField() { return $(selectors.dateOfBirthField); }

  get dateOfBirthData() { return $(selectors.dateOfBirthData); }

  get subjectField() { return $(selectors.subjectField); }

  get subjectItem() { return $(selectors.subjectItem); }

  get hobbiesCheckBox_1() { return $(selectors.hobbiesCheckBox_1); }

  get hobbiesCheckBoxIsActive() { return $(selectors.hobbiesCheckBoxIsActive); }

  get uploadPictureBtn() { return $(selectors.uploadPictureBtn); }

  get stateList() { return $(selectors.stateList); }

  get stateContainer() { return $(selectors.stateContainer); }

  get cityList() { return $(selectors.cityList); }

  get cityContainer() { return $(selectors.cityContainer); }

  get modalDialogForm() { return $(selectors.modalDialogForm); }

  fieldName(fieldName) { return $(selectors.fieldName(fieldName)); }
}

module.exports = new FormsPage();