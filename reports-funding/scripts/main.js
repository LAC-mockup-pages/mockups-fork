//*=================================================
//* Actions and Logic for local page
//*=================================================
//! =============================================================
//! For Development only.
//! Comment out for Production.

import { createExport } from "./button-events/export-event.js";
import { createReportURI } from "./button-events/generate-event.js";

//! =============================================================
const reportGroups = GetReportCategory.slice(0);
const reports = GetReport.slice(0);
const sources = GetFundingSource.slice(0);
const categories = GetPrepareBy.slice(0);
// const criteria = GetInstructionType.slice(0);
const criteriaList = [
  null,
  null,
  GetInstructionType.slice(0),
  GetFormat.slice(0),
  GetSpecialProgramSource.slice(0),
  null,
  null,
  GetAgeGroup.slice(0),
  GetEmploymentStatus.slice(0)
];
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

// Inputs: list = hashtable of options, sectionName = name of
// section where the option list is appended, styleClass =
// CSS class for indentation on display
const addNewSelect = (list, sectionName, styleClass) => {
  const selection = $(`.${sectionName} select`)
    .serializeArray()
    .map((item) => item.value);
  const summaryList =
    sectionName === "funding"
      ? createSummaryList(list, "FSID", "FundAbbrev")
      : list;
  const updatedList = summaryList.filter(
    (record) => !selection.includes(record.key)
  );

  // Testing option list retrieval from DOM

  // Checks if there is at least 1 value left in the list
  if (updatedList.length < 1) return;
  const updatedOptionList = createOptionList(updatedList);
  const newSelectLine = `
    <div class="input-field form-group ${styleClass} added-select">
    <label></label>
      <select class="modal-select" name=${sectionName}plus${selection.length}>
        <option value>Select a value</option>
        ${updatedOptionList}
      </select>
    </div>
  `;
  $(`.${sectionName}`).append(newSelectLine);
  $(`.${sectionName} select:last-of-type`).focus();
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
      const optionListCriteria = createOptionList(
        criteriaList[selectedCategory]
      );
      $("#report-criteria").empty().append(optionListCriteria);
      $("#report-criteria").parent().removeClass("hidden");
    }
  });
  //* =====================================

  //* Adding a new funding source select element when a specific one is selected.
  //* If All is selected, it does not generate a new select element, and
  //* additional <select> are removed.
  $(document).on("change", ".funding select", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($("#class-funding").val() === "ALL") {
      $(".funding .added-select").remove();
      return;
    } else {
      const lastSelectValue = $(".funding select").last().val();
      if (!lastSelectValue) {
        $(".funding .added-select").last().remove();
        addNewSelect(sources, "funding", "marg2");
        return;
      }
      addNewSelect(sources, "funding", "marg2");
    }
  });
  //* Adding a new criteria select element when a specific one is selected.
  //* If All is selected, it does not generate a new select element, and
  //* additional <select> are removed.
  $(document).on("change", ".criteria select", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($("#report-criteria").val() === "0") {
      $(".criteria .added-select").remove();
      return;
    } else {
      const selectedCategory = $("#report-category").val();
      const lastSelectValue = $(".criteria select").last().val();
      if (!lastSelectValue) {
        $(".criteria .added-select").last().remove();
        addNewSelect(criteriaList[selectedCategory], "criteria", "marg3");
        return;
      }
      addNewSelect(criteriaList[selectedCategory], "criteria", "marg3");
    }
  });

  //* Button actions on click
  $("#generate-btn, #export-btn").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const selectedReport = reports.find(
      (record) => record.ID === $("#title-selector").val()
    );
    //TODO Check all necessary select elements have a value
    console.log('$("#title-selector").val() :>> ', $("#title-selector").val());

    const stURI =
      $(this).attr("id") === "generate-btn"
        ? createReportURI(selectedReport)
        : createExportURI(selectedReport);

    //! window.open(stURI, "_blank");
  });

  //* =====================================
  //* Business rules
  //* =====================================
  // Download only reports (ID 174,188, 189) => Generate Report
  // button is disabled, Export to Excel button is enabled,
  // Category and Funding sections are hidden.
  $("#title-selector").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if (["174", "188", "189"].includes($("#title-selector").val())) {
      $("#generate-btn").prop("disabled", true);
      $("#export-btn").prop("disabled", false);
      $(".funding, .category").addClass("hidden");
    } else {
      $("#generate-btn").prop("disabled", false);
      $("#export-btn").prop("disabled", true);
      $(".funding, .category").removeClass("hidden");
    }
  });

  // EPE Reports group (ID 39) => shortened list in category section
  // instead of complete list of values (GetPreparedBy procedure)
  $("#group-selector").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const categoryList =
      $(this).val() === "39"
        ? [
            { key: "0", value: "All" },
            { key: "1", value: "Instructional Offering" },
            { key: "5", value: "Teacher/Tutor" },
            { key: "6", value: "Site" }
          ]
        : categories;
    const optionList = createOptionList(categoryList);
    $("#report-category option").remove();
    $("#report-category").append(optionList);
  });

  //* =====================================

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
