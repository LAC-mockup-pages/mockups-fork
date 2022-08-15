//*=================================================
//* Actions and Logic for local page
//*=================================================

import {
  addNewCase,
  createCaseNotesContent,
  modalStyling
} from "./components/case-notes.js";
import { createNeedsContent } from "./components/needs.js";
import { createOutcomeContent } from "./components/outcome.js";
import { createReferralsContent } from "./components/referrals.js";
// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;
//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const studentInfo = GetStudentHeader.slice(0)[0];
const notesList = GetNotes3.slice(0);
export const contactTypes = GetContactTypeSource.slice(0);
export const staff = GetInstructorSource.slice(0);
export const keyCodes = GetKeyCodeSource.slice(0);
const referrals = GetReferrals.slice(0);
const needs = GetNeeds.slice(0);
const outcomes = GetNonNRSOutcome.slice(0);
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
export const modalOptionCaseNotes = {
  requiredList: [
    "ContactDate",
    "ContactTypeID",
    "Personnel_PKID",
    "ContactNotes"
  ],
  labels: {
    ContactDate: "Date",
    ContactTypeID: "Type",
    KeyCodeID: "Keyword",
    Personnel_PKID: "Contact staff",
    ContactHours: "Contact hrs",
    ContactNotes: "Note",
    attachment: "Document"
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
  // const notesList =
  // const constactTypes =
  // const staff =
  // const keyCodes =
  // const referrals =
  // const needs =
  // const outcomes =

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
  $(".dob").text(`Date of birth: ${BirthDate}`);

  // Populating Case notes table
  const content = createCaseNotesContent(notesList);
  if (content) {
    $(".case-table tbody").append(content);
  } else {
    $(".case-table").replaceWith(
      `<h3 style="text-align:center">No goal / outcome on record for ${StudentName}</h3>`
    );
  }
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

  //* Expand underpinned table when section is clicked
  $(".sub-header").click(function (evnt) {
    evnt.stopPropagation();
    $("section .visible").removeClass("visible").addClass("invisible");
    $(this).siblings(".invisible").removeClass("invisible").addClass("visible");
    const sectionName = $(this).parent().attr("class");
    console.log("sectionName :>> ", sectionName);
    if (sectionName === "case") return;
    let tbodyContent = "";
    switch (sectionName) {
      case "referrals":
        tbodyContent = createReferralsContent(referrals);
        break;
      case "needs":
        tbodyContent = createNeedsContent(needs);
        break;
      case "outcome":
        tbodyContent = createOutcomeContent(outcomes);
        break;
      default:
        tbodyContent = "<h2>Default hit</h2>";
        break;
    }
    if (tbodyContent) {
      $(`.${sectionName} table tbody`).empty().append(tbodyContent);
    } else {
      $(`.${sectionName} .tablescroll table`).replaceWith(
        `<h2 style="text-align:center">No action on record for ${StudentName}`
      );
    }
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Triggers edit modal with selected row elements and values
  $(document).on("click", ".case-table>tbody> tr", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const rowId = $(this).attr("id");
    const $row = $(":input", this).clone().prop("disabled", false);
    const sectionTitle = $(this)
      .parents("section")
      .find(".sub-header-title")
      .text()
      .trim();
    console.log("sectionTitle :>> ", sectionTitle);
    const { requiredList, labels } = modalOptionCaseNotes;
    $("#modalBloc").modal("toggle");
    const table = $(this).parents("table").attr("data-table");
    $("#edit-form")
      .empty()
      .append($row)
      .attr({ "data-id": rowId, "data-table": table });
    $(".modal-title").empty().text(`Editing Case record`);
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
    // Applying styling cues to modal
    modalStyling(requiredList);
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Saving changes after editing in modal
  $("#save-btn").click(async function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    //TODO Check for errors in inputs
    const elements = $("#edit-form :input");
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
      let saveObj = createObject(saveList);

      // Adding ID of edited record if it exists.
      const rowId = $("#edit-form").attr("data-id");
      if (rowId) saveObj = { ID: rowId, ...saveObj };
      const credentials = createCredentials();
      if (saveObj.ActiveStatus === "0") saveObj.ActiveStatus = "";
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
  $("#add-case").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const editFormContent = addNewCase(modalOptionCaseNotes);
    const modalTitle = "Case note";
    const dataTableName = "GetNotes";

    $("#edit-form")
      .empty()
      .append(editFormContent)
      .attr("data-table", dataTableName);
    $(".modal-title").empty().text(`Adding new ${modalTitle} record`);

    //TODO Process customized requiredList
    modalStyling(modalOptionCaseNotes.requiredList);
    $("#modalBloc").modal("toggle");
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });
  //* Checking date input validity
  $(document).on(
    "keyup",
    "#edit-form input[type='date'], #StartDate, #EndDate",
    function () {
      const entryString = $(this).val();
      $(this).css("background-color", "").removeAttr("title", "Invalid date");
      // mm/dd/yyyy date format has a length of 11 characters
      const lengthValid = entryString.length < 11;
      if (!lengthValid) {
        $(this)
          .css("background-color", "#f7e095")
          .attr("title", "Invalid date");
        $(".modal-footer #save-btn").prop("disabled", true);
      }
      const invalidFields = $(
        "#edit-form input[type='date'][title='Invalid date']"
      );
      if (!invalidFields.length) {
        $(".modal-footer #save-btn").prop("disabled", false);
      }
    }
  );
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
