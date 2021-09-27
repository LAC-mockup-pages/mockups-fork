//* Checking data validity
//* ===========================

export const flagEmptyRequired = (objList) => {};

// Checks if at least one field has an empty value then switches its
// background to yellow.
export const initialCheck = (list) => {
  const valueCheck = list.filter(
    (item) => item.name !== "Middle" && !item.value
  );
  $(".id-form input").removeClass("yellow-bg");

  // .find((item) => !item.value);
  console.log("list :>> ", list);
  console.log("valueCheck :>> ", valueCheck);
  return valueCheck.length > 0 ? valueCheck : null;
};
