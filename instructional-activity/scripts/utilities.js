// Utility functions used in main.js and other components
// ======================================================

export const setFiscalYear = (datePD) => {
  const dateEvent = new Date(datePD);
  const currentYear = dateEvent.getFullYear();
  const startFY = new Date(`07/01/${currentYear}`);
  const endYear = new Date(`12/31/${currentYear}`);
  if (dateEvent >= startFY) {
    if (dateEvent <= endYear) {
      return (currentYear + 1).toString();
    } else {
      return currentYear.toString();
    }
  } else {
    return currentYear.toString();
  }
};

// Creates the <option></option> list to append to a <select></select>
// from an object list with 2 props, and an optional selected value
// Input: [{key: ..., value: ...},...], "default value"
// Output: "<option value:"[INPUT_OBJECT_KEY]">[INPUT_OBJECT_VALUE]</option>..."
export const createOptionList = (dataObj, selectedVal = "") => {
  const optionList = dataObj.map((record) => {
    // const [key, value] = Object.keys(record);
    // const keyData = record[key];
    // const valueData = record[value];
    const { key, value } = record;

    // ===============================
    if (key) {
      const defaultVal = key === selectedVal ? " selected" : "";
      return `<option${defaultVal} value="${key}">${value}</option>`;
    } else {
      return `<option selected value></option>`;
    }
  });
  return optionList.join("");
};
