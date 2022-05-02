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
const prepByList = GetPrepareBy.slice(0).filter((record) => record.key !== "0");
const classes = GetInstructionSource.slice(0);
const instructors = GetInstructor.slice(0);
const funding = createSummaryList(
  GetFundingSource.slice(0),
  "FSID",
  "FundAbbrev"
);
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

const categoryHandler = (titleID, groupID) => {
  let selectedList = [];
  //! NOTE: Category IDs are pointing to the newly defined categories.
  // Categories: 182 = Assessment reports, 57 = Rosters, 46 = Program management
  //       85 = Exiting and outcome
  if (["182", "57", "46", "85"].includes(groupID)) {
    // Category options: Instructional offering, Funding sources
    if (["47", "86", "46", "85", "207"].includes(titleID)) {
      $(".category").removeClass("hidden");
      selectedList = prepByList.filter((record) =>
        ["1", "2"].includes(record.key)
      );
    }
    // Category options: Instructional offering, Funding sources,
    // Site, Ref partner, Teacher/Tutor
    else if (["236", "162", "138", "176", "163", "164"].includes(titleID)) {
      $(".category").removeClass("hidden");
      selectedList = prepByList;
    }
    // Category options: Instructional offering, Teacher/Tutor
    else if (["57", "55", "56", "186", "87", "187"].includes(titleID)) {
      $(".category").removeClass("hidden");
      selectedList = prepByList.filter((record) =>
        ["1", "5"].includes(record.key)
      );
    }
    // Report tile with no additional selectors
    else {
      return;
    }
    $("#report-category").empty().append(createOptionList(selectedList));
  }
};

const criteriaHandler = (selectedCategory) => {
  const all = [{ key: "ALL", value: "All" }];
  let selectedList = [];
  switch (selectedCategory) {
    case "2":
      selectedList = funding;
      break;
    case "5":
      selectedList = instructors;
      break;
    default:
      selectedList = [all, ...classes];
      break;
  }
  $("#report-criteria").empty().append(createOptionList(selectedList));
  $(".criteria").removeClass("hidden");
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
  $("#title-selector").focusin(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();

    const titleList = reports
      .filter((record) =>
        record.CategoryID.includes($("#group-selector").val())
      )
      .map((record) => {
        const { ID, ReportName } = record;
        return { key: ID, value: ReportName };
      });

    const optionTitles = createOptionList(titleList);
    $("#title-selector").empty().append(optionTitles);
  });

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
      categoryHandler($(this).val(), $("#group-selector").val());
      $("#report-category").focus();
    }
  });

  //* Displaying the criteria selector depending on the selected
  //* category.
  $("#report-category").on({
    change: function (evnt) {
      criteriaHandler($(this).val());
      $("#report-criteria").focus();
    },
    blur: function (evnt) {
      criteriaHandler($(this).val());
      $("#report-criteria").focus();
    }
  });

  //* =====================================

  //* Generate report button event
  $("#generate-btn").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    // Temporary - Dev only
    console.log("Report generated now!");
  });
});
