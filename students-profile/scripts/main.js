//*=================================================
//* Actions and Logic for local page
//*=================================================

import {
  titleSection,
  contactSection,
  keyDemoSection,
  populationSection
} from "./components/student.js";
import { enrollmentSection } from "./components/enrollment.js";
import { assessmentSection } from "./components/assessment.js";
import { fundingSection } from "./components/funding.js";
import { exitSection } from "./components/exit.js";

//! =====================================
//! For Development only.
//! Comment out for Production.
//! =====================================
const studentData = GetStudentProfile[0];
const assessmentData = GetAssessmentProfile2.slice(0);
// const assessmentData = [{}];
const enrollmentData = GetEnrollmentProfile.slice(0);
// const enrollmentData = [{}];
const employmentData = GetEmploymentProfile.slice(0);
// const employmentData = [{}];
const outcomeData = GetOutcomeProfile[0];
// const outcomeData = [{}];

//! =====================================

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
  // createCredentials <== /helpers/helperFunctions.js
  const credentials = createCredentials();

  const requestObj = [{ ...credentials, Student_PKID }];

  //! =============================================================
  //! For Production, this section regroups the end points
  //! for the different requests to the back-end, using requestObj.
  //! Navigation variables are defined here as well.
  //! =============================================================
  // const studentData[0] =
  // const assessmentData =
  // const enrollmentData =
  // const employmentData =
  // const outcomeData[0] =

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    details: "students-details/index.html",
    profile: "students-profile/index.html",
    assessments: "student-assessments/index.html",
    enrollment: "student-enrollment/index.html",
    goals: "student-goals/index.html",
    history: "student-history/index.html",
    casenotes: "students-casenotes/index.html"
  };

  //! =============================================================

  //* =====================================

  //* Updating all sections with live data
  const latestEmploymentRecord = employmentData[0].ID
    ? employmentData.sort(
        (record1, record2) => Number(record2.ID) - Number(record1.ID)
      )[0]
    : null;
  const populationStr = studentData.PopulationDesc;
  // const fundingSources = outcomeData.FY_Funding;
  const fundingSources = "";

  const sectionList = [
    titleSection(studentData),
    contactSection(studentData),
    keyDemoSection(studentData, latestEmploymentRecord),
    populationSection(populationStr),
    enrollmentSection(enrollmentData),
    assessmentSection(assessmentData),
    fundingSection(fundingSources),
    exitSection(outcomeData)
  ];
  for (const section of sectionList) {
    $(section[0]).append(section[1]);
  }

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

  //* Navigation from info-boxes
  $(".info-box")
    .hover(function (evnt) {
      evnt.stopPropagation();
      $("td", this).toggleClass("blue-light-bg");
    })
    .blur(function (evnt) {
      evnt.stopPropagation();
      $("td", this).toggleClass("blue-light-bg");
    })
    .click(function (evnt) {
      evnt.stopPropagation();
      // console.log("=== Event hit ===");
      const destination = $(this).hasClass("enrollments")
        ? "enrollments"
        : $(this).hasClass("assessments")
        ? "assessments"
        : "details";

      const queryString = `?stid=${Student_PKID}`;
      const targetUrl = `${rootUrl}${destinationsObj[destination]}${queryString}`;
      window.location.assign(targetUrl);
    });
});
