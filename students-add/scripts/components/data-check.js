//* Checking data validity
//* ===========================

import { getRequired } from "./data-save.js";

// Toggles background to yellow for listed field names.
// Redirect focus on first element of the array.
export const flagEmptyRequired = (nameList) => {
  const selector = ".input-field > input[name=";
  for (const name of nameList) {
    $(`${selector}${name}]`).css("background-color", "#f7e095");
  }
  $(`${selector}${nameList[0]}]`).focus();
};

// Checks if at least one field has an empty value.
// Returns an empty array if none are found or array of field name(s).

// At initialSave stage
export const initialCheck = (list) => {
  const valueCheck = list
    .filter((item) => item.name !== "Middle" && !item.value)
    .map((item) => item.name);
  $(".id-form input").css("background-color", "inherit");
  return valueCheck.length > 0 ? valueCheck : null;
};

// Checking for multiple occurences on RaceID, Barriers, yes/no fields.
// Returns an object with keys and counts.
const occurenceCheck = (objList) => {
  return objList
    .filter((obj) => ["RaceID", "Barriers", "yes-no"].includes(obj.name))
    .map((obj) => obj.name)
    .reduce((acc, curr) => {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
};

// Specific check for the SSN section. If SSN has no value, the staff field
// must be populated. Alternatively, if there is a valid value in SSN, the
// staff field is left empty.
const socialSecNumCheck = () => {
  const SSNFields = $(".ssn-form").serializeArray();
  // createObject() <== helpers/helperFunctions.js
  const { SSN, NoSSNVisaStaff } = createObject(SSNFields);
  // Check SSN value has 9 digits.
  if (SSN && SSN.match(/\d/g).length !== 9) return SSNFields[0];
  const fields = SSN ? null : NoSSNVisaStaff ? null : SSNFields[1];
  return fields;
};

// At finalSave stage
export const finalCheck = () => {
  const formSelector = "form:not(.id-form)";
  const reqList = getRequired(formSelector);
  const fields = $(formSelector).serializeArray();

  // Checking for multiple occurences on RaceID, Barriers, yes/no fields.
  const occurences = occurenceCheck(fields);

  console.log("fields :>> ", fields);
  $(`${formSelector} :input`).css("background-color", "inherit");
  const noValueFields = fields
    .filter((item) => occurences[item.name] < 2 || !occurences[item.name])
    .filter((item) => reqList.includes(item.name) && !item.value);

  // socialSecNumCheck();
  const checkedSSNSection = socialSecNumCheck();
  if (checkedSSNSection) noValueFields.push(checkedSSNSection);

  if (noValueFields.length < 1) return;
  console.log("noValueFields :>> ", noValueFields);

  for (const obj of noValueFields) {
    $(`${formSelector} :input[name=${obj.name}]`).css(
      "background-color",
      "#f7e095"
    );
  }

  console.log("Check Done!");

  // return true if no empty required field
};
