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

const saveMods = (dataList, formId, tableName = "") => {
  const { AgencyID, AuditUserID } = sessionVariable;
  const result = { AgencyID, AuditUserID };
  console.log("dataList :>> ", dataList);
  // validateUserInput() <== data-check.js
  // if (!validateUserInput(dataObj)) $(formId)[0].reset();
  for (const field of dataList) {
    let val = field.value;
    let name = field.name;
    if (name === "Amount") val = val.replace(/[$,]/gi, "").trim();
    result[name] = val;
  }

  const target = tableName ? tableName : formId;
  const resultList = [target, JSON.stringify(result)];
  console.table(result);
  //! =================================================
  //! JSON Object to send back to database
  console.log("result :", resultList);
  //! =================================================

  //ToDO Reloading/resetting with new data
};
