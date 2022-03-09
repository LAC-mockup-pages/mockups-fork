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

    switch (name) {
      case "StartDate":
      case "EndDate":
        // dateValid() <== helpers/helperFunctions.js
        obj.correct = dateValid(value);
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
