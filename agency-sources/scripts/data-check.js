//* Data check for new or edited source
//* Using Moment.js for date validation

const validNewSource = (list) => {
  const result = [];
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
        obj.correct = true;
        break;
    }
    result.push(obj);
  }
  return result;
};
