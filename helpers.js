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
    <input type="text" id='${keyVal}' class='${classVal}' value='${value}' ${option}>
    </div>`;
};

// Converts 0000000000 to 000-000-0000 and vice-versa
const phoneFormat = str => {
  if (str.match(/\D/)) {
    return str.replace(/\D/gi, "");
  } else {
    return `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;
  }
};

// dataObj: JSON object
// labelObj: JS Object with key from dataObj, value = label
const createFieldList = (dataObj, labelObj) => {
  const keyList = Object.keys(dataObj);

  return keyList.map(key => {
    const label = labelObj[key] ? labelObj[key] : key;
    return [key, label, dataObj[key]];
  });
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
