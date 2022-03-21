//*=================================================
//* Actions and Logic for local page
//*=================================================
//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const reportGroups = GetReportCategory.slice(0);
const reports = GetReport.slice(0);
const sources = GetFundingSource.slice(0);
const categories = GetPrepareBy.slice(0);
const criteria = GetInstructionType.slice(0);
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

// Shorten a list of records to a list of obj with key/value properties
// list = [{...},{...}], keyParam, valueParam = field names as string
const createSummaryList = (list, keyParam, valueParam) => {
  return list.map((record) => {
    return { key: record[keyParam], value: record[valueParam] };
  });
};

const addNewSelect = (list, sectionName, styleClass) => {
  const selection = $(`section .${sectionName} select`)
    .serializeArray()
    .map((item) => item.value);
  console.log(
    "🚀 / file: main.js / line 41 / addNewSelect / selection",
    selection
  );
  const summaryList = createSummaryList(list, "FSID", "FundAbbrev");
  const updatedList = summaryList.filter(
    (record) => !selection.includes(record.key)
  );
  // Checks if there is at least 1 value left in the list
  if (updatedList.length < 1) return;
  const updatedOptionList = createOptionList(updatedList);
  const newSelectLine = `
    <div class="input-field form-group ${styleClass} added-source">
    <label></label>
      <select class="modal-select" name=${sectionName}plus${selection.length}>
        <option value>Select a value</option>
        ${updatedOptionList}
      </select>
    </div>
  `;
  $(`.${sectionName}`).append(newSelectLine);
  $(`.sectionName select:last-of-type`).focus();
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
  $("#title-selector").focus(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    $(this).empty();
    const category = $("#group-selector").val();
    const filteredList = reports
      .filter((record) => record.CategoryID === category)
      .map((record) => {
        const { ID, ReportName } = record;
        return { key: ID, value: ReportName };
      });
    const optionListTitles = createOptionList(filteredList);
    $(this).append(optionListTitles);
  });
  // Funding Sources
  const sourceSummaryList = createSummaryList(sources, "FSID", "FundAbbrev");
  const optionListSources = createOptionList([
    { key: "ALL", value: "Select all sources" },
    ...sourceSummaryList
  ]);
  $("#class-funding").empty().append(optionListSources);
  // Report Categories
  $("#report-category").empty().append(createOptionList(categories));
  // Optional criteria - Element appears when a specific category different
  // than Select All is chosen.
  $("#report-category").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const selectedCategory = $(this).val();
    // Safeguard for user manually selecting All Categories after selecting a
    // specific category
    if (selectedCategory === "0") {
      if ($("#report-criteria").parent().hasClass("hidden")) {
        return;
      } else {
        $("#report-criteria").parent().addClass("hidden");
      }
    } else {
      const optionListCriteria = createOptionList(criteria);
      $("#report-criteria").empty().append(optionListCriteria);
      $("#report-criteria").parent().removeClass("hidden");
    }
  });
  //* =====================================

  //* Adding a new funding source select element when a specific one is selected.
  //* If All is selected, it does not generate a new select element, and
  //* additional <select> are removed.
  $(".funding").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($("select:first-of-type", this).val() === "ALL") {
      console.log("Removing additional select elements");
      $(".funding .added-source").remove();
      return;
    } else {
      addNewSelect(sources, "funding", "marg2");
    }
  });
  //* Adding a new criteria select element when a specific one is selected.
  //* If All is selected, it does not generate a new select element, and
  //* additional <select> are removed.
  $(".criteria").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($("select:first-of-type", this).val() === "ALL") {
      console.log("Removing additional select elements");
      $(".criteria .added-criteria").remove();
      return;
    } else {
      addNewSelect(criteria, "criteria", "marg3");
    }
  });

  // Temporary event
  // $("#report-category").change(function (evnt) {
  //   evnt.stopPropagation();
  //   evnt.preventDefault();
  //   $(".selectors .input-field").last().toggleClass("hidden");
  // if ($(this).val() !== "all") {
  //   $(".selectors .input-field").last().toggleClass("hidden");
  // } else {
  // }
  // });
});
