//* Data check for new or edited source
//* Using Moment.js for date validation

const validNewSource = (list) => {
  // Returns true if input is only alphanumerical + underscore, not empty string
  const alphaNumCheck = (str) => {
    return /\w/i.test(str);
  };
  let correct = true;
  const result = [];
  console.log("list :>> ", list);
  for (let obj of list) {
    switch (obj.name) {
      case "Amount":
        if (obj.value) {
          obj.correct = Number(obj.value) ? true : false;
        } else {
          obj.correct = true;
        }
        break;
      case "FundStart":
        obj.correct = moment(obj.value, "MM/DD/YYYY", true).isValid();
        break;

      case "FundEnd":
        obj.correct = moment(obj.value, "MM/DD/YYYY", true).isValid();
        break;

      default:
        if (obj.value) {
          obj.correct = alphaNumCheck(obj.value);
        } else {
          obj.correct = true;
        }
        break;
    }
    result.push(obj);
  }
  return result;
};
