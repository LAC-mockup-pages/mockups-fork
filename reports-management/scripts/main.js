//*=================================================
//* Actions and Logic for local page
//*=================================================
import { createReportURI } from "./event-handlers/generate-event.js";
import {
  categoryHandler,
  handleGroupChange
} from "./event-handlers/category-handler.js";
import { criteriaHandler } from "./event-handlers/criteria-handler.js";
// Shorten a list of records to a list of obj with key/value properties
// list = [{...},{...}], keyParam, valueParam = field names as string
export const createSummaryList = (list, keyParam, valueParam) => {
  return list.map((record) => {
    return { key: record[keyParam], value: record[valueParam] };
  });
};
//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const reportGroups = GetReportCategory.slice(0);
export const reports = GetReport.slice(0);
export const prepByList = GetPrepareBy.filter((record) => record.key !== "0");
export const prepByListCM = GetPrepareByCM.slice(0);
export const classes = GetInstructionSource.slice(0);
export const instructors = GetInstructor.slice(0);
export const funding = createSummaryList(
  GetFundingSource,
  "FSID",
  "FundAbbrev"
);
export const keywords = GetCMPKeyword.slice(0);
export const referralPartners = GetReferralSite.slice(0);
//! =============================================================

// Creates the <option></option> list to append to a <select></select>
// from an object list with 2 props, and an optional selected value
// Input: [{key: ..., value: ...},...], "default value"
// Output: "<option value:"[INPUT_OBJECT_KEY]">[INPUT_OBJECT_VALUE]</option>..."
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
  // With most recent year displayed first as default
  const optionListFY = createOptionList(
    Array.from({ length: 2 }, (_, indx) => {
      const key = previousFY + indx;
      const value = key;
      return { key, value };
    }).sort((record1, record2) =>
      record1.key > record2.key ? -1 : record1.key < record2.key ? 1 : 0
    )
  );
  $("#selected-year").append(optionListFY);
  // Report groups
  $("#group-selector").append(createOptionList(reportGroups));
  // Report titles
  const category = $("#group-selector").val();
  const filteredTitleList = reports
    .filter((record) => record.CategoryID === category)
    .map((record) => {
      const { ID, ReportName } = record;
      return { key: ID, value: ReportName };
    });
  const optionListTitles = createOptionList(filteredTitleList);
  $("#title-selector").empty().append(optionListTitles);

  //* =====================================

  //* =====================================
  //* Business rules
  //* =====================================

  //* Modifying the title selector list according to selected group
  $("#group-selector").on(
    {
      change: function (evnt) {
        const optionTitles = handleGroupChange($("#group-selector").val());
        $("#title-selector").empty().append(optionTitles);
      }
    },
    {
      blur: function (evnt) {
        const optionTitles = handleGroupChange($("#group-selector").val());
        $("#title-selector").empty().append(optionTitles);
      }
    }
  );

  //* Displaying optional category selectors according to selected group
  //* and selected report title.
  $("#title-selector").on({
    change: function (evnt) {
      $("#optional-selectors section").each(function (indx) {
        if (!$(this).hasClass("hidden")) $(this).addClass("hidden");
      });
      categoryHandler($(this).val(), $("#group-selector").val());
      $("#report-category").focus();
    },
    blur: function (evnt) {
      $("#optional-selectors section").each(function (indx) {
        if (!$(this).hasClass("hidden")) $(this).addClass("hidden");
      });
      categoryHandler($(this).val(), $("#group-selector").val());
      $("#report-category").focus();
    }
  });

  //* Displaying the criteria selector depending on the selected
  //* category and group.
  $("#report-category").on({
    change: function (evnt) {
      criteriaHandler($(this).val(), $("#group-selector").val());
      $("#report-criteria").focus();
    },
    blur: function (evnt) {
      criteriaHandler($(this).val(), $("#group-selector").val());
      $("#report-criteria").focus();
    }
  });

  //* =====================================

  //* Generate report button event
  $("#generate-btn, #export-btn").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    //TODO ========================================================
    //TODO Add a process to check if optional criteria are needed when default selectors
    // are set, after one of the buttons is clicked.
    // May happen when user skips some of the selector (tab or click) to click
    // the generate/export buttons
    //TODO ========================================================

    const selectedValues = createObject($(".selectors").serializeArray());
    console.log(
      "🚀 / file: main.js / line 181 / $ / selectedValues",
      selectedValues
    );
    const { AgencyPKID } = SESSION_VARIABLE[0];
    const { FileName, Procedure_Name } = reports.find(
      (record) => record.ID === selectedValues.titleSelector
    );
    // Generating the URI
    const createdURI = createReportURI(
      { AgencyPKID, ...selectedValues },
      FileName,
      $(this).attr("id") === "export-btn"
    );
    console.log("createdURI :>> ", createdURI);
  });
});
