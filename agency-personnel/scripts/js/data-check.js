//* User input data validation

const validateRecord = (dataList) => {
  // Returns true if input is only alphanumerical + underscore, not empty string
  const alphaNumCheck = (str) => {
    return !/[^\s\w-./]/g.test(str);
  };
  const resultList = [];

  const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      case "PersStatusDate":
      case "ContactDate":
        obj.correct = dateValid(value);
        break;

      case "PersEmail":
      case "PersAltEmail":
        obj.correct = value ? Boolean(value.match(emailValidator)) : true;
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
