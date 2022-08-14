//*=================================================
//* Actions and Logic for local page
//*=================================================

import { addNewNonNRSGoals, createNonNRSContent } from "./components/nonNRS.js";
import {
  addNewOutcomeOther,
  createOtherContent
} from "./components/otherOutcome.js";
import { addNewOutcomeWIOA, createWioaContent } from "./components/wioa.js";
// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const studentInfo = GetStudentHeader.slice(0)[0];
const wioaOutcome = GetOutcomeinfo_WIOA.slice(0);
export const credentialList = GetCredentialSource.slice(0);
// Removing the key from the value property
export const outcomeList = GetOutcomeDesc_WIOA.map((obj) => {
  const key = obj.key;
  const value = obj.value.replace(key, "").trim();
  return { key, value };
});
// Removing the key from the value property
export const otherGoalsList = GetGoalsDesc_EFF.map((obj) => {
  const key = obj.key;
  const value = obj.value.replace(key, "").trim();
  return { key, value };
});
const otherGoalsInfo = GetOutcomeinfo_EFF.slice(0);
const nonNRSGoalsInfo = GetOutcomeinfo_LitZone.slice(0);
export const nonNRSCategories = GetGoalCategoryDesc_LitZone.slice(0);
export const nonNRSGoals = GetGoalsDesc_LitZone.slice(0);
export const nonNRSSites = GetLitZoneReferralSite_LitZone.slice(0);
//! =============================================================

export const createOptionList = (dataObj, defaultValue) => {
  const optionList = dataObj.map((record) => {
    const [key, value] = Object.keys(record);
    const keyData = record[key];
    const valueData = record[value];
    if (valueData) {
      const defaultVal =
        defaultValue && keyData === defaultValue ? " selected" : "";
      // Disabling options related to HSE
      const disabledOption = ["5", "5DP", "5RG"].includes(keyData)
        ? " disabled"
        : "";
      return `<option${defaultVal}${disabledOption} value=${keyData}>${valueData}</option>`;
    } else {
      return `<option selected value></option>`;
    }
  });
  return optionList.join("");
};

// Creates array of fiscla year values
export const createFYValues = (dateISO = Date.now()) => {
  // createCredentials() <= helpers/helperFunctions.js
  const { FiscalYear } = createCredentials();
  const numFiscalYear = Number(FiscalYear);
  const currentYear = new Date(dateISO).getFullYear();
  const currentMonth = new Date(dateISO).getMonth();
  let previousFY = 0;
  if (currentMonth < 6) {
    previousFY = Math.min(currentYear, numFiscalYear - 1);
  } else if (currentYear === numFiscalYear) {
    previousFY = Math.max(currentYear, numFiscalYear - 1);
  } else {
    previousFY = numFiscalYear - 1;
  }
  return [
    { key: `${previousFY + 1}`, value: `${previousFY + 1}` },
    { key: `${previousFY}`, value: `${previousFY}` }
  ];
};

// Creates option list for Fiscal year dropdown.
export const createFYList = (dateISO = Date.now()) => {
  // createCredentials() <= helpers/helperFunctions.js
  const { FiscalYear } = createCredentials();
  const numFiscalYear = Number(FiscalYear);
  const currentYear = new Date(dateISO).getFullYear();
  const currentMonth = new Date(dateISO).getMonth();
  let previousFY = 0;
  if (currentMonth < 6) {
    previousFY = Math.min(currentYear, numFiscalYear - 1);
  } else if (currentYear === numFiscalYear) {
    previousFY = Math.max(currentYear, numFiscalYear - 1);
  } else {
    previousFY = numFiscalYear - 1;
  }
  return `
    <option selected value='${previousFY + 1}'>
      ${previousFY + 1}
    </option>
    <option value='${previousFY}'>${previousFY}</option>
  `;
};

export const modalOptionWioa = {
  requiredList: ["OutcomeFY", "Quarter", "SurveyDate"],
  labels: {
    OutcomeID: "Status",
    OutcomeFY: "Fiscal year",
    Quarter: "Quarter",
    SurveyDate: "Survey date",
    OutcomeDate: "Outcome date",
    Income: "Quarterly income",
    NYSED_CredentialID: "Credential"
  }
};
export const modalOptionOther = {
  requiredList: ["GoalID", "SetGoal"],
  labels: {
    GoalID: "Description",
    SetGoal: "Set goal",
    ShowProgress: "Show progress",
    ShowProficiency: "Show Proficiency"
  }
};
export const modalOptionNonNRS = {
  requiredList: ["FY", "Category_Key", "GoalID"],
  labels: {
    FY: "Fiscal year",
    Category_Key: "Category",
    GoalID: "Goal",
    MetGoal: "Goal met",
    ReferralSiteID: "Referral partner"
  }
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);
  // Default Student_PKID if no query string in URL
  const Student_PKID = params.get("stid") ? params.get("stid") : "1048303";

  //! =============================================================
  //! For Production, this section regroups the end points
  //! for the different requests to the back-end, using requestObj.
  //! Navigation variables are defined here as well.
  //! =============================================================
  // const studentInfo =
  // const wioaOutcome =
  // const credentialList =
  // const outcomeList =
  // const otherGoalsList =
  // const otherGoalsInfo =

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    profile: "student-profile/index.html",
    details: "students-details/index.html",
    assessments: "student-assessments/index.html",
    enrollment: "student-enrollment/index.html",
    goals: "student-goals/index.html",
    history: "student-history/index.html",
    casenotes: "students-casenotes/index.html"
  };
  //! =============================================================

  //* Navigation from sub navbar on top
  $("#sub-nav li").click(function (evnt) {
    evnt.stopPropagation();
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
    const queryString = `?stid=${Student_PKID}`;
    const destination = $(this).attr("data-target");
    const targetUrl = `${rootUrl}${destinationsObj[destination]}${queryString}`;
    window.location.assign(targetUrl);
  });

  // Populating student name and birthdate
  const { BirthDate, StudentName } = studentInfo;
  $(".name").text(StudentName);
  $(".dob").text(`Date of Birth: ${BirthDate}`);
  // Populating WIOA table
  const wioaContent = createWioaContent(wioaOutcome);
  if (wioaContent) {
    $(".wioa table tbody").append(wioaContent);
  } else {
    $(".wioa .tablescroll table").replaceWith(
      `<h3 style="text-align:center">No goal / outcome on record for ${StudentName}</h3>`
    );
  }
  //* =====================================

  //* Expand underpinned table when section is clicked
  $(".sub-header").click(function (evnt) {
    evnt.stopPropagation();
    $("section .visible").removeClass("visible").addClass("invisible");
    $(this).siblings(".invisible").removeClass("invisible").addClass("visible");
    const viewName = $(this).parent().attr("class");
    if (viewName === "wioa") return;
    let tbodyContent = "";
    switch (viewName) {
      case "other":
        tbodyContent = createOtherContent(otherGoalsInfo);
        break;
      case "non-nrs":
        tbodyContent = createNonNRSContent(nonNRSGoalsInfo);
        break;
      default:
        break;
    }
    if (tbodyContent) {
      $(`.${viewName} tbody`).append(tbodyContent);
    } else {
      $(`.${viewName} .tablescroll table`).replaceWith(
        `<h3 style="text-align:center">No goal / outcome on record for ${StudentName}</h3>`
      );
    }
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Triggers edit modal with selected row elements and values
  $(document).on("click", ".table>tbody> tr", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const rowId = $(this).attr("id");
    const $row = $(":input", this).clone().prop("disabled", false);
    const sectionTitle = $(this)
      .parents("section")
      .find(".sub-header-title")
      .text()
      .trim();
    let modalOptionObj;
    switch (sectionTitle) {
      case "WIOA / NRS outcomes":
        modalOptionObj = modalOptionWioa;
        break;
      case "Other goals and outcomes":
        modalOptionObj = modalOptionOther;
        break;
      case "Non-NRS goals and outcomes":
        modalOptionObj = modalOptionNonNRS;
        break;
      default:
        console.log("Default hit - Not right");
        break;
    }
    const { requiredList, labels } = modalOptionObj;
    $("#modalBloc").modal("toggle");
    const table = $(this).parents("table").attr("data-table");
    $("#edit-form")
      .empty()
      .append($row)
      .attr({ "data-id": rowId, "data-table": table });
    $(".modal-title").empty().text(`Editing ${sectionTitle} record`);
    $("#edit-form :input").each(function (indx) {
      const name = $(this).attr("name");
      if (name.includes("Date")) {
        const formattedDate = DT.fromFormat($(this).val(), "D").toISODate();
        $(this).val(formattedDate).attr("type", "date");
      }
      $(this)
        .wrap("<div class='form-group input-field'></div>")
        .before(`<label for=${name}>${labels[name]}</label>`);
    });
    // Dressing up required fields
    for (const name of requiredList) {
      $(`#edit-form [name=${name}]`)
        .prop("required", true)
        .attr({
          "data-original-title": "Please fill in this field",
          "data-toggle": "tooltip",
          "data-placement": "right"
        })
        .siblings("label")
        .addClass("red-text");
    }
    // Disabling Income and Credential fields
    $(
      "#edit-form [name='Income'], #edit-form [name='NYSED_CredentialID']"
    ).each(function (indx) {
      if (!$(this).val()) {
        $(this).prop("disabled", true);
      }
    });
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Saving changes after editing in modal
  $("#save-btn").click(function (evnt) {
    //TODO Check for errors in inputs
    const elements = $("#edit-form :input")
      .prop("disabled", false)
      .css("background-color", "inherit");
    const requiredObj = createObject(
      $("#edit-form [required]").serializeArray()
    );
    const requiredWithoutValue = [];
    // Checking if required fields have a valid value.
    // Switching background color to yellow if not, and stopping
    // the save process.
    for (const key in requiredObj) {
      if (requiredObj[key].length < 1) requiredWithoutValue.push(key);
    }
    if (requiredWithoutValue.length > 0) {
      for (const field of requiredWithoutValue) {
        $(`.modal-body [name=${field}]`).css("background-color", "#f7e095");
      }
      return;
    } else {
      const targetTable = $("#edit-form").attr("data-table");
      const saveList = $(elements).serializeArray();
      // createObject() <== helpers/helperFunctions.js
      let saveObj = createObject(saveList);
      // Adding ID of edited record if it exists.
      const rowId = $("#edit-form").attr("data-id");
      if (rowId) saveObj = { ID: rowId, ...saveObj };
      const credentials = createCredentials();
      //! =================================================
      //! For production, this is the end point for the Post request
      //! to update the DB.
      //! =================================================
      const resultList = [
        targetTable,
        JSON.stringify({ ...credentials, Student_PKID, ...saveObj })
      ];
      console.log("result :", resultList);
      //! =================================================
      $("#modalBloc").modal("toggle");
    }
  });

  //* Adding a new record
  $("#add-wioa, #add-other, #add-nonnrs").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    let editFormContent = "";
    let modalTitle = "WIOA / NRS outcomes";
    let dataTableName = "GetOutcomeinfo_WIOA";
    let requiredFields = "";
    const buttonId = $(this).attr("id");
    $("#delete-btn").toggleClass("hidden");
    switch (buttonId) {
      case "add-other":
        editFormContent = addNewOutcomeOther(modalOptionOther);
        modalTitle = "Other goals";
        dataTableName = "GetOutcomeinfo_EFF";
        requiredFields = modalOptionOther.requiredList;
        break;
      case "add-nonnrs":
        editFormContent = addNewNonNRSGoals(modalOptionNonNRS);
        modalTitle = "Non-NRS goals";
        dataTableName = "GetOutcomeinfo_LitZone";
        requiredFields = modalOptionNonNRS.requiredList;
        break;
      default:
        editFormContent = addNewOutcomeWIOA(modalOptionWioa);
        requiredFields = modalOptionWioa.requiredList;
        console.log("Default hit!");
        break;
    }
    $("#edit-form")
      .empty()
      .append(editFormContent)
      .attr("data-table", dataTableName);
    $(".modal-title").empty().text(`Adding new ${modalTitle} record`);

    // Process customized requiredList, colors labels in red, add the attribute
    // required to the field.
    for (const name of requiredFields) {
      $(`#edit-form [name=${name}]`)
        .prop("required", true)
        .attr({
          "data-original-title": "Please fill in this field",
          "data-toggle": "tooltip",
          "data-placement": "right"
        })
        .siblings("label")
        .addClass("red-text");
    }
    // Disabling Income and Credential fields
    $(
      "#edit-form [name='Income'], #edit-form [name='NYSED_CredentialID']"
    ).each(function (indx) {
      $(this).prop("disabled", true);
    });

    $("#modalBloc").modal("toggle");
    $("#delete-btn").addClass("hidden");

    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Record designed for deletion
  $("#delete-btn").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const targetTable = $("#edit-form").attr("data-table");
    const rowId = $("#edit-form").attr("data-id");
    const credentials = createCredentials();
    const message = $(".modal-footer > h3").text();
    if (!message) {
      $(".modal-footer").prepend(
        "<h3 class='delete-msg'>Confirm deletion by clicking the DELETE button again</h3>"
      );
    } else {
      $(".modal-footer h3").remove();
      //! =================================================
      //! For production, this is the end point for the DELETE request
      //! to update the DB.
      //! =================================================
      const result = [
        targetTable,
        JSON.stringify({ ...credentials, Student_PKID, ID: rowId })
      ];
      console.log("result :", result);
      //! =================================================
      $("#modalBloc").modal("toggle");
    }
  });

  //* Cleaning up after modal closing
  $("#modalBloc").focusout((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($("#delete-btn").hasClass("hidden"))
      $("#delete-btn").toggleClass("hidden");
    $(".modal-footer h3").remove();
  });
  $("#close-btn").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    $("#modalBloc").modal("toggle");
    if ($("#delete-btn").hasClass("hidden"))
      $("#delete-btn").toggleClass("hidden");

    $(".modal-footer h3").remove();
  });

  //* Business rule for OutcomeID in WIOA Outcome modal
  $(document).on("change", "#edit-form [name='OutcomeID']", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($(this).val() === "2") {
      $("#edit-form [name='Income']").prop("disabled", false).val("");
    } else if ($(this).val() === "9") {
      $("#edit-form [name='NYSED_CredentialID']")
        .prop("disabled", false)
        .val("");
    }
  });
  //* Checking date input validity
  $(document).on("keyup", "#edit-form input[type='date']", function () {
    const entryString = $(this).val();
    $(this).css("background-color", "").removeAttr("title", "Invalid date");
    // mm/dd/yyyy date format has a length of 11 characters
    const lengthValid = entryString.length < 11;
    if (!lengthValid) {
      $(this).css("background-color", "#f7e095").attr("title", "Invalid date");
      $(".modal-footer #save-btn").prop("disabled", true);
    }
    const invalidFields = $(
      "#edit-form input[type='date'][title='Invalid date']"
    );
    if (!invalidFields.length) {
      $(".modal-footer #save-btn").prop("disabled", false);
    }
  });
  //* Focus on first visible and enabled input or select element in modal
  $("#modalBloc").on("shown.bs.modal", function () {
    $(this)
      .find(".input-field")
      .filter(":visible")
      .children(":input:enabled")
      .first()
      .focus();
  });
});
