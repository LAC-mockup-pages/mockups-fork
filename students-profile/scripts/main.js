//*=================================================
//* Actions and Logic for local page
//*=================================================
//! =====================================
//! For Development only.
//! Comment out for Production.
//! =====================================
const studentData = GetStudentProfile.slice[0];
const assessmentData = GetAssessmentProfile.slice[0];
const enrollmentData = GetEnrollmentProfile.slice[0];
const employmentData = GetEmploymentProfile.slice[0];
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

  console.log("requestObj :>> ", requestObj);

  //! =====================================
  //! For Production, this section regroups the end points
  //! for the different requests to the back-end, using requestObj.
  //! =====================================
  // const studentData =
  // const assessmentData =
  // const enrollmentData =
  // const employmentData =
  //! =====================================
});
