//*=================================================
//* Actions and Logic for local page
//*=================================================
//! =============================================================
//! For Development only.
//! Comment out for Production.

import { createReportURI } from "./button-events/generate-event.js";
// Shorten a list of records to a list of obj with key/value properties
// list = [{...},{...}], keyParam, valueParam = field names as string
const createSummaryList = (list, keyParam, valueParam) => {
  return list.map((record) => {
    return { key: record[keyParam], value: record[valueParam] };
  });
};
//! =============================================================
const reportGroups = GetReportCategory.slice(0);
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
  // const reportGroups =
  // const reports =
  // const sources =
  // const categories =
  // const criteria =
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
  $("#group-selector").append(createOptionList(reportGroups));
  // Report titles
  const category = $("#group-selector").val();
  const filteredListTitle = reports
    .filter((record) => record.CategoryID === category)
    .map((record) => {
      const { ID, ReportName } = record;
      return { key: ID, value: ReportName };
    });
  const optionListTitles = createOptionList(filteredListTitle);
  $("#title-selector").empty().append(optionListTitles);

  //* =====================================

  //* =====================================
  //* Business rules
  //* =====================================
  $("#group-selector").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    // Updating report titles according selected group.
    const titleList = reports
      .filter((record) => record.CategoryID.includes($(this).val()))
      .map((record) => {
        const { ID, ReportName } = record;
        return { key: ID, value: ReportName };
      });
    const optionTitles = createOptionList(titleList);
    $("#title-selector").empty().append(optionTitles);
  });

  //* =====================================
});
