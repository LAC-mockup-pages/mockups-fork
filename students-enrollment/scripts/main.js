//*=================================================
//* Actions and Logic for local page
//*=================================================

import { ctedValues } from "./components/cted.js";
import { enrollValues } from "./components/enrollment.js";
import { hourMonthlyValues } from "./components/hours.js";

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const enrollmentList = GetEnroll.slice(0).filter(
  (record) => record.ISCMP === "0"
);
const studentInfo = GetStudentHeader.slice(0)[0];
const courseList = GetInstructionSource.slice(0);
const exitReasons = GetExitReasonSource.slice(0);
const transferTo = GetTransferTo.slice(0);
const caseList = GetEnroll.slice(0).filter((record) => record.ISCMP === "1");
const courseCodeList = courseList.map((record) => {
  const { key, value } = record;
  const courseCode = value.split(" ")[0];
  return { key, value: courseCode };
});
const hoursSummary = GetHours.slice(0);
const ctedList = GetCTED.slice(0);
const ctedSource = GetCTEDSource.slice(0);
const hoursHistory = GetHoursHistory.slice(0);

//! =============================================================

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
  const { StudentName, StudentID } = studentInfo;
  $(".student-info .name").text(StudentName);
  $(".student-info .long-id").text(StudentID);

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
  enrollValues(enrollmentList, exitReasons, transferTo, ".classes-form tbody");
  enrollValues(caseList, exitReasons, transferTo, ".case-form tbody");
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
  ctedValues(ctedList, ctedSource);
  //* =====================================

  //* Triggers edit modal with selected form elements
  $(".form")
    .not("#edit-form")
    .click(function (evnt) {
      evnt.stopPropagation();
      const sectionTitle = $(this)
        .parent()
        .children(".sub-header")
        .text()
        .trim();
      console.log("sectionTitle :>> ", sectionTitle);

      const parentAttr = $(this).parent().attr("class");
      console.log("parentAttr :>> ", parentAttr);
      const editFormContent = $(this).children().clone();

      $("#modalBloc").modal("toggle");
      $("#edit-form").empty().append(editFormContent);
      $(".modal-title").text(`${sectionTitle} editing`);
      $("#edit-form :input").prop("disabled", false);
    });

  //* Switches Contact hours summary and history tables
  $(".contact-hours .sub-header").click(function (evnt) {
    evnt.stopPropagation();
    if ($(this).hasClass("active")) return;
    $(".contact-hours .sub-header").toggleClass("active inactive");
    $(".contact-hours table").toggleClass("hidden");
  });
});
