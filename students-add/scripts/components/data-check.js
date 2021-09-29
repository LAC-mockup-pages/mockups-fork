//* Checking data validity
//* ===========================

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

// At finalSave stage
export const finalCheck = (list) => {
  const formSelector = "form:not(.id-form)";
  const fields = $(formSelector).serializeArray();

  console.log("fields :>> ", fields);

  const requiredFields = fields.filter(
    (item) => list.includes(item.name) && !item.value
  );

  console.log("requiredFields :>> ", requiredFields);
};
