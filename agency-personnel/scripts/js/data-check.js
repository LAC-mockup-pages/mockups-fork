//* User input data validation

const validateRecord = (dataList) => {
  // Returns true if input is only alphanumerical + underscore, not empty string
  const alphaNumCheck = (str) => {
    return !/[^\s\w-.]/g.test(str);
  };
  const resultList = [];

  function isValidDate(dtValue2) {
    // your desired pattern
    const pattern = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)(\d{2})/;
    const m = dtValue2.match(pattern);
    if (!m) return false;
    const d = new Date(dtValue2);
    // Now let's ensure that the date is not out of index

    if (
      d.getMonth() + 1 == parseInt(m[1], 10) &&
      d.getDate() == parseInt(m[2], 10)
    ) {
      return true;
    }
    return false;
  }

  const dateFormat = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/;
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
        obj.correct = isValidDate(value);
        break;

      case "PersEmail":
      case "PersAltEmail":
        obj.correct = value ? value.match(emailValidator) : true;
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
