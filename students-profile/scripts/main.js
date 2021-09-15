//*=================================================
//* Actions and Logic for local page
//*=================================================

import {
  titleSection,
  contactSection,
  keyDemoSection,
  populationSection
} from "./components/student.js";

//! =====================================
//! For Development only.
//! Comment out for Production.
//! =====================================
const studentData = GetStudentProfile[0];
const assessmentData = GetAssessmentProfile.slice(0);
const enrollmentData = GetEnrollmentProfile.slice(0);
const employmentData = GetEmploymentProfile.slice(0);
// const employmentData = [{}];
//! =====================================

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //TODO ==================================================
  //TODO Add logic for sub nav bar tab selection
  //TODO ==================================================

  //TODO ==================================================
  //TODO Add logic for navigation from info-boxes
  //TODO ==================================================

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

  //! =====================================
  //! For Production, this section regroups the end points
  //! for the different requests to the back-end, using requestObj.
  //! =====================================
  // const studentData[0] =
  // const assessmentData =
  // const enrollmentData =
  // const employmentData =
  //! =====================================

  //* =====================================

  //* Updating all sections with live data
  const latestEmploymentRecord = employmentData[0].ID
    ? employmentData.sort(
        (record1, record2) => Number(record2.ID) - Number(record1.ID)
      )[0]
    : null;
  const populationStr = studentData.PopulationDesc;

  const sectionList = [
    titleSection(studentData),
    contactSection(studentData),
    keyDemoSection(studentData, latestEmploymentRecord),
    populationSection(populationStr)
  ];
  for (const section of sectionList) {
    $(section[0]).append(section[1]);
  }
});
