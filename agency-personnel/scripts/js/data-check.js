//* User input data validation

const validateRecord = (dataList) => {
  // Returns true if input is only alphanumerical + underscore, not empty string
  const alphaNumCheck = (str) => {
    // return !/[^\s\w-./]/g.test(str);
    return true;
  };

  const resultList = [];

  const emailValidator =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  for (let field of dataList) {
    let { name, value } = field;
    const obj = { name, value };
    switch (name) {
      case "PersPersonnelID":
        obj.correct = true;
        break;

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
        obj.correct = dateValid(dateISOToUS(value));
        break;

      case "PersEmail":
      case "PersAltEmail":
        obj.correct = value ? Boolean(value.match(emailValidator)) : true;
        break;
      case "PersHomePhone":
      case "PersMobilePhone":
        obj.correct = value
          ? Boolean(value.match(/\W\d{3}\W{2}\d{3}\W\d{4}/))
          : true;
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
