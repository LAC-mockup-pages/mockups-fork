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

const elementSelectNewRecord = (argsObj) => {
  const { hashTable, keyValue, option } = argsObj;
  const [primary, secondary] = Object.keys(hashTable[0]);
  let optionList = hashTable
    .map((item) => {
      return `<option value="${item[primary]}">
          ${item[secondary]}</option>`;
    })
    .join("");

  const elementSelect = `
     <select id="${
       keyValue + "-view"
     }" class="form-control" name="${keyValue}" ${option}>
      <option value='' selected disabled>Select an option</option>
      ${optionList}
     </select>`;

  return elementSelect;
};
