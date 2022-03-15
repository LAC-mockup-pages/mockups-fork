//*=================================================
//* Actions and Logic for local page
//*=================================================
export const createOptionList = (dataObj, defaultValue) => {
  const optionList = dataObj.map((record) => {
    const [key, value] = Object.keys(record);
    const keyData = record[key];
    const valueData = record[value];
    if (valueData) {
      const defaultVal =
        defaultValue && keyData === defaultValue ? " selected" : "";
      return `<option${defaultVal} value=${keyData}>${valueData}</option>`;
    } else {
      return `<option selected value></option>`;
    }
  });
  return optionList.join("");
};
//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================

  //* Setting up options for Fiscal Year selection
  // createCredentials() <= helpers/helperFunctions.js
  const { FiscalYear } = createCredentials();
  const numFiscalYear = Number(FiscalYear);
  const currentYear = new Date(Date.now()).getFullYear();
  const currentMonth = new Date(Date.now()).getMonth();
  let previousFY = 0;
  if (currentMonth < 6) {
    previousFY = Math.min(currentYear, numFiscalYear - 1);
  } else if (currentYear === numFiscalYear) {
    previousFY = Math.max(currentYear, numFiscalYear - 1);
  } else {
    previousFY = numFiscalYear - 1;
  }
  const optionListFY = createOptionList(
    Array.from({ length: 2 }, (_, indx) => {
      const key = previousFY + indx;
      const value = key;
      return { key, value };
    }),
    previousFY
  );
  $("#fiscal-year").append(optionListFY);
  //* =====================================

  // Temporary event
  $("#report-category").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    $(".selectors .input-field").last().toggleClass("hidden");
    // if ($(this).val() !== "all") {
    //   $(".selectors .input-field").last().toggleClass("hidden");
    // } else {
    // }
  });
});
