//*=================================================
//* Actions and Logic for local page
//*=================================================

import {
  addNewRecord,
  enrollValues,
  inactiveStatusProcess
} from "./components/enrollment.js";
import { hourMonthlyValues } from "./components/hours.js";
// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;
//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const enrollment = GetEnroll.slice(0);
const studentInfo = GetStudentHeader.slice(0)[0];
const courseList = GetInstructionSource.slice(0);
const caseCourseList = GetInstructionSource_CM.slice(0);
const exitReasons = GetExitReasonSource.slice(0);
const transferTo = GetTransferTo.slice(0);
const hoursSummary = GetHours.slice(0);
const hoursHistory = GetHoursHistory.slice(0);
const noteContent = GetStudentNotes.slice(0)[0];

//! =============================================================
export const courseCodeList = courseList.map((record) => {
  const { key, value } = record;
  const courseCode = value.split(" ")[0];
  return { key, value: courseCode };
});
const enrollmentList = enrollment.filter((record) => record.ISCMP === "0");
const caseList = enrollment.filter((record) => record.ISCMP === "1");

export const dateFormat = (str) => {
  return `${str.slice(-4)}-${str.substr(0, 2)}-${str.substr(3, 2)}`;
};

export const createOptionList = (dataObj, defaultValue) => {
  const optionList = dataObj.map((record) => {
    const [key, value] = Object.keys(record);
    const keyData = record[key];
    const valueData = record[value];
    const defaultVal =
      defaultValue && keyData === defaultValue ? " selected" : "";
    return `<option${defaultVal} value=${keyData}>${valueData}</option>`;
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
  // const enrollment =
  // const courseList =
  // const caseCourseList =
  // const exitReasons =
  // const transferTo =
  // const hoursSummary =
  // const hoursHistory =
  // const noteContent =

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    profile: "student-profile/index.html",
    details: "students-details/index.html",
    assessments: "student-assessments/index.html",
    enrollments: "student-enrollment/index.html",
    goals: "student-goals/index.html",
    history: "student-history/index.html",
    casenotes: "students-casenotes/index.html"
  };

  //! =============================================================
  const { StudentName, BirthDate } = studentInfo;
  $(".student-info .name").text(StudentName);
  $(".student-info .long-id").text(`Date of birth: ${BirthDate}`);

  //* =====================================

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

  //* Populating input and select elements for display.
  //* Elements are disabled.
  enrollValues(
    enrollmentList,
    courseList,
    exitReasons,
    transferTo,
    ".classes-form tbody"
  );
  enrollValues(
    caseList,
    caseCourseList,
    exitReasons,
    transferTo,
    ".case-form tbody"
  );
  hourMonthlyValues(
    hoursSummary,
    [...courseCodeList, ...GetInstructionSource_CM],
    ".hours-summary"
  );
  hourMonthlyValues(
    hoursHistory,
    [...courseCodeList, ...GetInstructionSource_CM],
    ".hours-history"
  );
  $(".note-display").text(`${noteContent.OtherCodeNote}`);
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();
  // ctedValues(ctedList, ctedSource);
  //* =====================================

  //* Triggers edit modal with selected row values
  //* Case and Enrollment tables
  $("form table > tbody > tr").click(function (evnt) {
    evnt.stopPropagation();
    const rowId = $(this).attr("id");
    const $row = $(":input", this).clone().prop("disabled", false);
    const sectionTitle = $(this)
      .parents("section")
      .find(".sub-header-title")
      .text();
    $("#modalBloc").modal("toggle");
    $("#edit-form")
      .empty()
      .append($row)
      .attr({ "data-id": rowId, "data-table": "GetEnroll" });
    $(".modal-title").empty().text(`Editing ${sectionTitle} record`);
    const requiredList = ["DescriptionKey", "EnrollDate"];
    $("#edit-form :input").each(function (indx) {
      const name = $(this).attr("name");
      const labels = {
        DescriptionKey: "Course",
        EnrollDate: "Started",
        InactiveDate: "Left",
        InactiveReason: "Reason",
        Transfer_PKID: "Transfer to",
        ActiveStatus: "Active"
      };
      if (name.includes("Date")) {
        const formattedDate = DT.fromFormat($(this).val(), "D").toISODate();
        $(this).val(formattedDate).attr("type", "date");
      }
      $(this)
        .wrap("<div class='form-group input-field'></div>")
        .before(`<label for=${name}>${labels[name]}</label>`);
    });
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
    //Disabling fields
    $("#edit-form [name='DescriptionKey']").prop("disabled", true);
    $("#edit-form [name='ActiveStatus']").prop("disabled", true);
    if (!$("#edit-form [name='InactiveDate']").val()) {
      $("#edit-form [name='InactiveReason']").prop("disabled", true);
      $("#edit-form [name='Transfer_PKID']").prop("disabled", true);
    }
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Trigger modal editing for notes
  $(".notes").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const $textElement = $(this).clone();
    $("#edit-form")
      .empty()
      .append($textElement.children())
      .attr({ "data-table": "GetStudentNotes" });
    $("#edit-form textarea")
      .prop("disabled", false)
      .toggleClass("note-display note-edit");
    $(".modal-title").empty().text("Editing Student Notes");
    $("#modalBloc").modal("toggle");
  });

  //* Switches Contact hours summary and history tables
  $(".contact-hours .sub-header").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($(this).hasClass("active")) return;
    $(".contact-hours .sub-header").toggleClass("active inactive");
    $(".contact-hours table").toggleClass("hidden");
  });

  //* Saving changes after editing in modal
  $("#save-btn").click(async function (evnt) {
    evnt.preventDefault();
    //TODO Check for errors in inputs
    const elements = $("#edit-form :input").prop("disabled", false);
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
      const saveList =
        targetTable === "GetStudentNotes"
          ? [
              {
                name: "OtherCodeNote",
                value: `${$("#edit-form textarea").val()}`
              }
            ]
          : $(elements).serializeArray();
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
  $("#add-case, #add-enrollment").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    let editFormContent = "";
    let modalTitle = "Enrollment";
    const buttonId = $(this).attr("id");
    const requiredList = ["DescriptionKey", "EnrollDate"];
    if (buttonId === "add-enrollment") {
      editFormContent = addNewRecord(courseList, exitReasons, transferTo);
    } else {
      editFormContent = addNewRecord(
        caseCourseList,
        exitReasons,
        transferTo,
        "1" // Flag to define this is a Case Management record
      );
      modalTitle = "Case Management";
    }
    $("#edit-form")
      .removeAttr("data-table data-id")
      .empty()
      .append(editFormContent)
      .attr("data-table", "GetEnroll");
    $(".modal-title").empty().text(`Adding new ${modalTitle} record`);
    $("#edit-form :input").each(function (evnt, indx) {
      if (requiredList.includes($(this).attr("name"))) {
        $(this)
          .attr({
            "data-original-title": "Please fill this field",
            "data-toggle": "tooltip",
            "data-placement": "left"
          })
          .prop("required", true);
        $(this).siblings("label").addClass("red-text");
        $("#edit-form select[name*='ActiveStatus']").prop({
          selectedIndex: 2,
          disabled: true
        }); //Set to Yes and disabled
      }
    });
    $("#modalBloc").modal("toggle");
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* =====================================
  //* Business rules
  //* =====================================

  //* Rule 1 - While editing a student's info,
  //* when entered inactive date is not valid, highlight background and
  //* return focus to inactive date
  $("#edit-form ").on("blur", 'input[name="InactiveDate"]', function (evnt) {
    evnt.stopPropagation();
    // createObject() <== helpers/helperFunctions.js
    const { EnrollDate, InactiveDate, ActiveStatus } = createObject(
      $(
        "#edit-form input[name$='Date'], #edit-form select[name='ActiveStatus'"
      ).serializeArray()
    );
    const courseEndDate = $(this).attr("data-enddate");
    // const studentStatus=$("#edit-form )
    const inputDateIndex = [EnrollDate, InactiveDate, courseEndDate]
      .sort((date1, date2) =>
        // DT#fromISO <== Luxon method
        DT.fromISO(date1) < DT.fromISO(date2)
          ? -1
          : DT.fromISO(date1) > DT.fromISO(date2)
          ? 1
          : 0
      )
      .indexOf(InactiveDate);
    if (inputDateIndex !== 1) {
      $(this).css("background-color", "#f7e095").focus();
      return;
    } else {
      $(this).css("background-color", "");
      // Student is already inactive
      if (ActiveStatus === "0") return;
      // Rule 2, Student was active
      inactiveStatusProcess();
    }
  });

  //* Rule 3 - If student is inactive modified to active, disable and clear
  //* inactive-related fields on form: InactiveDate, InactiveReason,
  //* TransferTo

  $("#edit-form").on("change", "select[name='ActiveStatus']", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($(this).val() === "1") {
      $(
        "#edit-form [name='InactiveReason'], #edit-form [name='Transfer_PKID']"
      ).prop({ selectedIndex: 0, disabled: true });
      $("#edit-form [name='InactiveDate']").val("");
    } else {
      $(this).prop("selectedIndex", 1);
      return;
    }
  });
});
