// User input data validation

const validateNewRecord = (dataList) => {
  // Returns true if input is only alphanumerical + underscore,
  // not empty string
  const alphaNumCheck = (str) => {
    // return !/[^\s\w-.]/g.test(str);
    return true;
  };

  let correct = true;
  const checkedFieldList = [];
  for (let field of dataList) {
    switch (field.name) {
      case "State":
        correct = field.value.length < 3 && field.value.length > 0;
      case "Zip":
        correct = field.value.length < 11 && field.value.length > 0;
        break;
      case "Telephone":
        correct = /\(\d{3}\)\-\d{3}\-\d{4}/.test(field.value);
        break;
      case "AgencyEmail":
        correct = true;
        break;
      default:
        correct = field.value ? alphaNumCheck(field.value) : true;
        break;
    }
    checkedFieldList.push({ ...field, correct });
  }

  return checkedFieldList;
};
