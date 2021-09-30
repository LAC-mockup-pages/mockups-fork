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

// At finalSave stage
export const finalCheck = () => {
  const formSelector = "form:not(.id-form)";
  const reqList = getRequired(formSelector);
  const fields = $(formSelector).serializeArray();
  occurenceCheck(fields);

  console.log("fields :>> ", fields);
  $(`${formSelector} :input`).css("background-color", "inherit");
  const noValueFields = fields.filter(
    (item) => reqList.includes(item.name) && !item.value
  );
  if (noValueFields.length < 1) return;
  console.log("noValueFields :>> ", noValueFields);

  for (const obj of noValueFields) {
    $(`${formSelector} :input[name=${obj.name}]`).css(
      "background-color",
      "#f7e095"
    );

    // $(`${formSelector} select[name=${obj.name}]`).css(
    //   "background-color",
    //   "#f7e095"
    // );
  }

  //! =============== IMPORTANT =================
  //TODO SSN / Staff name alternate check

  console.log("Check Done!");
};
