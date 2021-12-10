//*=================================================
//* Actions and Logic for local page
//*=================================================

import { enrollValues } from "./components/enrollment.js";
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

//! =============================================================
const courseCodeList = courseList.map((record) => {
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

export const createStaffList = (list) => {
  const orderedList = list.sort((item1, item2) =>
    item1.InstructorName < item2.InstructorName
      ? -1
      : item1.InstructorName > item2.InstructorName
      ? 1
      : 0
  );
  return orderedList.map((staff) => {
    const { ID, InstructorName } = staff;
    return { objKey: ID, objValue: InstructorName };
  });
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

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    profile: "student-profile/index.html",
    details: "students-details/index.html",
    assessments: "student-assessments/index.html",
    enrollments: "student-enrollment/index.html",
    goals: "student-goals/index.html"
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
    console.log("sectionTitle :>> ", sectionTitle);
    $("#modalBloc").modal("toggle");
    $("#edit-form")
      .empty()
      .append($row)
      .attr({ "data-id": rowId, "data-table": "GetEnroll" });
    $(".modal-title").empty().text(`Editing ${sectionTitle} record`);
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
  });

  //* Switches Contact hours summary and history tables
  $(".contact-hours .sub-header").click(function (evnt) {
    evnt.stopPropagation();
    if ($(this).hasClass("active")) return;
    $(".contact-hours .sub-header").toggleClass("active inactive");
    $(".contact-hours table").toggleClass("hidden");
  });

  //* Saving changes after editing in modal
  $("#save-btn").click(function (evnt) {
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
      if (!requiredObj[key]) requiredWithoutValue.push(key);
    }
    if (requiredWithoutValue.length > 0) {
      for (const field of requiredWithoutValue) {
        $(`.modal-body [name=${field}]`).css("background-color", "#f7e095");
      }
      return;
    } else {
      const saveList = $(elements).serializeArray();
      let saveObj = createObject(saveList);
      const targetTable = $("#edit-form").attr("data-table");
      // Adding ID of edited record if  it exists.
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
});
