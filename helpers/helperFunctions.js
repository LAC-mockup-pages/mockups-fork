//* Helper functions for ASISTS_2020 pages

const createInputField = (
  keyVal,
  labelVal,
  value,
  labelClassVal = "",
  classVal = "",
  option = ""
) => {
  return `<div class="input-field">
      <label for='${keyVal}' class='${labelClassVal}'>${labelVal}</label>
      <input type="text" id='${keyVal}' class='${classVal}' name=${keyVal}
      value='${value}' ${option} autocomplete="off" />
    </div>`;
};

// argsObj = { keyVal, labelVal, value, labelClassVal, classVal, option, optionHidden, type}
const elementInput = (argsObj) => {
  const selectType = argsObj.type ? argsObj.type : "text";
  return `<div class="input-field ${argsObj.optionHidden}">
      <label for='${argsObj.keyVal}' ${argsObj.labelClassVal}>${
    argsObj.labelVal
  }</label>
      <input type=${selectType} id='${argsObj.keyVal + "-view"}' ${
    argsObj.classVal
  } name=${argsObj.keyVal}
      value='${argsObj.value}' ${argsObj.option} autocomplete="off"/>
    </div>`;
};

// Returns an <input .... > element with no label for new record entry bloc
// Assign "" to keys in argsObj which are not needed.
const inputNoLabel = (argsObj) => {
  const { key, placehold, classOption, option, type } = argsObj;
  const selectType = type ? type : "text";
  return `<input type=${selectType} class="form-control input-field${classOption}" id=${key}
            name="${key}" placeholder="${placehold}"${option}
            autocomplete="off" spellcheck="off"/>`;
};

// Select element for new record entry
// ! Check the CSS for this:
//     :required::placeholder,
//     .form-control:required,
//     .delete-msg {
//      color: rgb(197, 65, 65);
//      font-weight: 700;

//      text-align: left;
// }
//! Needs this event trigger for font color
// Change text color from red (required) to dark-text
// when a value other than default is selected. Replace the anchor id.
//  $("#FSID-view").bind("change", function (evnt) {
//   evnt.stopPropagation();
//   $(this).toggleClass("dark-text").prop("required", false);
// });
const elementSelectNewRecord = (argsObj) => {
  const {
    hashTable,
    keyValue,
    option,
    optionText,
    classOption,
    defaultOption
  } = argsObj;
  const [primary, secondary] = Object.keys(hashTable[0]);

  let optionList = hashTable
    .map((item) => {
      const defaultValue = item[primary] === defaultOption ? "selected" : "";
      return `<option value="${item[primary]}" ${defaultValue}>
          ${item[secondary]}</option>`;
    })
    .join("");
  const descriptor = optionText ? optionText : "an option";
  const classVal = classOption ? ` ${classOption.trim()}` : "";
  const elementSelect = `<select id=${keyValue}
    class="form-control input-field${classVal}" name=${keyValue} ${option}>
    <option value=''>Select ${descriptor}</option>${optionList}
  </select>`;

  return elementSelect;
};

// Create a select element with label for modal form
// Input: JS object. Set value to "" for key(s) not needed.
const elementSelectModal = (argsObj) => {
  const {
    hashTable,
    keyValue,
    selectedValue,
    labelVal,
    labelClassVal,
    option,
    optionText
  } = argsObj;
  const descriptor = optionText ? optionText : "an option";
  let firstOption = `<option value="">Select ${descriptor}</option>`;

  const [primary, secondary] = Object.keys(hashTable[0]);
  let optionList = hashTable
    .map((item) => {
      const selected =
        item[primary].toString() === selectedValue ? "selected" : "";
      return `<option value="${item[primary]}" ${selected}>
          ${item[secondary]}</option>`;
    })
    .join("");
  if (!selectedValue) {
    firstOption = `<option value="">Select ${descriptor}</option>`;
  }

  const elementSelect = `<div class= "input-field form-group">
  <label for="${keyValue}" ${labelClassVal}>${labelVal}</label>
  <select id="${
    keyValue + "-view"
  }" class="modal-select" name="${keyValue}" ${option}>${firstOption}${optionList}</select>
</div>`;

  return elementSelect;
};

// Converts 0000000000 to 000-000-0000 and vice-versa
const phoneFormat = (str) => {
  if (!str) return "";
  if (/\D/.test(str)) {
    str = str.replace(/\D/gi, "");
  }
  return str.length === 10
    ? `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`
    : str;
};

// dataObj: JSON object
// labelObj: JS Object with key from dataObj, value = label
const createFieldList = (dataObj, labelObj) => {
  const keyList = Object.keys(dataObj);

  return keyList.map((key) => {
    const label = labelObj[key] ? labelObj[key] : key;
    return [key, label, dataObj[key]];
  });
};

// Returns the year of a string date
const createFiscalYear = (str) => {
  const date = new Date(str);
  return date.getFullYear();
};

// Returns amount with $ 000000.00 format
const currencyFormat = (str) => {
  return !str
    ? ""
    : Number(str)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// Returns a string date formatted MM/DD/YYYY with 0 if day or month
// is 1 digit.
const dateFormat = (str) => {
  const date = new Date(str);
  const month =
    date.getMonth() < 9
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString();

  const day =
    date.getDate() < 10
      ? "0" + date.getDate().toString()
      : date.getDate().toString();

  return `${month}/${day}/${date.getFullYear()}`;
};

// Creates a JS Object from 1 object result of processing page elements
// and 1 JSON data object result of server request
const updateDataObject = (obj, dataObj) => {
  const result = {};
  const listKeys = Object.keys(dataObj);
  for (let key of listKeys) {
    if (!obj[key]) {
      result[key] = dataObj[key];
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

// Returns ZIP code formatted 00000 0000
const zipCodeFormat = (str) => {
  return str.replace(/_/g, "").replace(/-/, " ").trim();
};

// Return an Object from list of objects built with .serializeArray()
const createObject = (list) => {
  const resultObj = {};
  for (const record of list) {
    const { name, value } = record;
    resultObj[name] = value;
  }
  return resultObj;
};

// Returns a string of headers for a <table> element
const createHeaders = (labels) => {
  const headers = labels.map((label) => `<th>${label}</th>`).join("");
  return `<thead>${headers}</thead>`;
};

// Returns a <tr> element as a string from a record object
const createTableRow = (idValue, recordObj) => {
  let dataElement = "";
  for (const property in recordObj) {
    dataElement += `<td class="cell-data" data-name=${property}>${recordObj[property]}</td>`;
  }
  return `<tr class="row-data" id=${idValue} title="Click to edit" data-toggle='tooltip' data-placement='left'>${dataElement}</tr>`;
};

// argsObj = {record, labelList, labelObj, hiddenList}
const createRow = (argsObj) => {
  const { record, labelList, labelObj, hiddenList } = argsObj;
  let tdList = [];
  for (const key of labelList) {
    const option = hiddenList.includes(key) ? " hidden" : "";
    const cell = `<td class="cell-data${option}" data-name=${key}
                    data-label="${labelObj[key]}">${record[key]}</td>`;
    tdList.push(cell);
  }
  return `<tr id=${
    record.ID
  } title="Click to edit" data-toggle='tooltip' data-placement='left'>${tdList.join(
    ""
  )}</tr>`;
};

// Date validation for MM/DD/YYYY.
// input is a string, output is Boolean
const dateValid = (date) => {
  const isLeapYear = (yearNum) => {
    return (yearNum % 100 === 0 ? yearNum % 400 === 0 : yearNum % 4 === 0)
      ? 1
      : 0;
  };
  const match = date.match(/^(\d\d)\/(\d\d)\/(\d{4})$/) || [];
  const month = (match[1] | 0) - 1;
  const day = match[2] | 0;
  const year = match[3] | 0;

  const dateEval = !(
    month < 0 || // Before January
    month > 11 || // After December
    day < 1 || // Before the 1st of the month
    day - 30 > ((2773 >> month) & 1) || // Day is 30 or 31 using bitmap.
    // Day is 28 or 29, month is 02, year is leap year ==> true
    (month === 1 && day - 28 > isLeapYear(year))
  );

  return dateEval;
};

// Creates data object starter with AgencyID and UserID from
// SESSION_VARIABLE content.
const createCredentials = () => {
  const AgencyID = SESSION_VARIABLE[0].AgencyID.startsWith("<%= Session")
    ? "PRA"
    : SESSION_VARIABLE[0].AgencyID;
  const UserID = SESSION_VARIABLE[0].AuditUserID.startsWith("<%= Session")
    ? "999999"
    : SESSION_VARIABLE[0].AuditUserID;

  return { AgencyID, UserID };
};
