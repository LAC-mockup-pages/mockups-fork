//*=================================================
//* Actions and Logic for local page
//*=================================================
//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const reportCategories = GetReportCategory.slice(0);
const reports = GetReport.slice(0);
//! =============================================================

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
  //! =============================================================
  //! For Production, this section regroups the end points
  //! for the different requests to the back-end, using requestObj.
  //! Navigation variables are defined here as well.
  //! =============================================================
  // const reportCategories =
  // const titleSummaryList =

  //! =============================================================
  //* Setting up options for main selectors

  // Fiscal Year
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
  // Report groups
  $("#group-selector").append(createOptionList(reportCategories));
  // Report titles
  $("#title-selector").focus(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    $(this).empty();
    const category = $("#group-selector").val();
    console.log("🚀 / file: main.js / line 83 / category", category);
    const filteredList = reports
      .filter((record) => record.CategoryID === category)
      .map((record) => {
        const { ID, ReportName } = record;
        return { key: ID, value: ReportName };
      });
    console.log("🚀 / file: main.js / line 85 / filteredList", filteredList);
    const optionListTitles = createOptionList(filteredList);
    console.log(
      "🚀 / file: main.js / line 88 / optionListTitles",
      optionListTitles
    );
    $(this).append(optionListTitles);
  });

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
