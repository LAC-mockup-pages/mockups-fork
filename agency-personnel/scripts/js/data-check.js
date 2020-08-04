//* User input data validation

const validateRecord = (dataList) => {
  // Returns true if input is only alphanumerical + underscore, not empty string
  const alphaNumCheck = (str) => {
    return !/[^\s\w-.]/g.test(str);
  };
  const resultList = [];
  const dateFormat = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/;
  for (let field of dataList) {
    let { name, value } = field;
    const obj = { name, value };
    switch (name) {
      case "PersPersonnelID":
      case "PersFirst":
      case "PersLast":
      case "PersPositionID":
      case "PersSubject":
      case "PersPayStatus":
      case "PersTimeStatus":
      case "PersExpYears":
        obj.correct = value ? alphaNumCheck(value) : false;
        break;
      case "PersStartDate":
        obj.correct = value.match(dateFormat) ? true : false;
      case "Email":
        obj.correct = value ? true : false;
        break;

      default:
        obj.correct = value ? alphaNumCheck(value) : true;
        break;
    }
    resultList.push(obj);
  }
  return resultList;
};

export default validateRecord;
