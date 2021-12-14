//*=================================================
//* Actions and Logic for local page
//*=================================================

import { createWioaContent } from "./components/wioa.js";

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const studentInfo = GetStudentHeader.slice(0)[0];
const wioaOutcome = GetOutcomeinfo_WIOA.slice(0);
const credentialList = GetCredentialSource.slice(0);
const outcomeList = GetOutcomeDesc_WIOA.slice(0);
//! =============================================================

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
  $(".dob").text(BirthDate);

  // Populating WIOA table
  //TODO Add case if wioa table is empty for the selected student
  $(".wioa table tbody").append(
    createWioaContent(wioaOutcome, outcomeList, credentialList)
  );

  //* =====================================

  //* Expand underpinned table when section is clicked
  $(".sub-header").click(function (evnt) {
    evnt.stopPropagation();
    $("section .visible").removeClass("visible").addClass("invisible");
    $(this).siblings(".invisible").removeClass("invisible").addClass("visible");
    const viewName = $(this).parent().attr("class");
    if (viewName === "wioa") return;
    let tbodyContent = "";
    // switch (viewName) {
    //   case "other":
    //     tbodyContent = createTabeContent(tabeInfo);
    //     break;
    //   case "literacy":
    //     tbodyContent = createBest2Content(best2Info, viewName);
    //     break;
    //   default:
    //     break;
    // }
    if (tbodyContent) {
      // $(`.${viewName} tbody`).append(tbodyContent);
    } else {
      $(`.${viewName} .tablescroll table`).replaceWith(
        `<h3 style="text-align:center">No goal / outcome on record for ${StudentName}</h3>`
      );
    }
  });
});
