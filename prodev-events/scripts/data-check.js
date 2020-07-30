// User input data validation

const validateRecord = (dataList, requiredList) => {
  // Returns true if input is only alphanumerical + underscore, not empty string
  const alphaNumCheck = (str) => {
    return !/[^\s\w-.,]/g.test(str);
  };
  const resultList = [];
  for (let field of dataList) {
    let { name, value } = field;
    const obj = { name, value };
    const dateFormat = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/;

    switch (name) {
      // case requiredList.includes(name):
      //   obj.correct = value ? alphaNumCheck(value) : false;
      //   break;

      case "ProfDevDate":
      case "Date":
        // Match the date format through regular expression
        obj.correct = value.match(dateFormat) ? true : false;
        break;

      default:
        if (requiredList.includes(name)) {
          obj.correct = value ? alphaNumCheck(value) : false;
        } else {
          obj.correct = value ? alphaNumCheck(value) : true;
        }
        break;
    }
    resultList.push(obj);
  }
  return resultList;
};
