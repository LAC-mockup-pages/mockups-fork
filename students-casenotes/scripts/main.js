//*=================================================
//* Actions and Logic for local page
//*=================================================

import { createCaseNotesContent } from "./components/case-notes.js";
import { createNeedsContent } from "./components/needs.js";
import { createReferralsContent } from "./components/referrals.js";

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const studentInfo = GetStudentHeader.slice(0)[0];
const notesList = GetNotes2.slice(0);
export const contactTypes = GetContactTypeSource.slice(0);
export const staff = GetInstructorSource.slice(0);
export const keyCodes = GetKeyCodeSource.slice(0);
const referrals = GetReferrals.slice(0);
const needs = GetNeeds.slice(0);
const outcome = GetNonNRSOutcome.slice(0);
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
    "ContactDescID",
    "Personnel_PKID",
    "ContactNotes"
  ],
  labels: {
    ContactDate: "Date",
    ContactDescID: "Type",
    KeyCodeID: "Keyword",
    Personnel_PKID: "Contact staff",
    ContactHours: "Contact hrs",
    ContactNotes: "Note",
    Attachment: "Document"
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
  // const outcome =

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
  $(".long-id").text(`Date of birth: ${BirthDate}`);

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
    debugger;
    let tbodyContent = "";
    switch (sectionName) {
      case "referrals":
        tbodyContent = createReferralsContent(referrals);
        break;
      case "needs":
        tbodyContent = createNeedsContent(needs);
        break;
      case "outcome":
        tbodyContent = "";
        break;
      default:
        tbodyContent = "<h2>Default hit</h2>";
        break;
    }

    if (tbodyContent) {
      $(`.${sectionName} table tbody`).empty().append(tbodyContent);
    } else {
      $(`.${sectionName} .tablescroll table`).replaceWith(
        `<h2 style="text-align:center">No assessment on record for ${StudentName}`
      );
    }
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });
});
