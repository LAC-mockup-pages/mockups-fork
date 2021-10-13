//*=================================================
//* Actions and Logic for local page
//*=================================================

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
import { GetStudent, GetFundingInfo } from "./original-data/student-data.js";
const studentInfo = GetStudent.slice(0)[0];
const fundingInfo = GetFundingInfo.slice(0)[0];
//! =============================================================

const dateFormat = (str) => {
  return `${str.slice(-4)}-${str.substr(0, 2)}-${str.substr(3, 2)}`;
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
  // const fundingInfo =
  // const employmentData =

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    details: "students-details/index.html",
    assessments: "student-assessments/index.html",
    enrollments: "student-enrollment/index.html",
    goals: "student-goals/index.html"
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

  // Populating input element values
  // Origin: GetStudent
  $("form input").each(function () {
    const name = $(this).attr("name");
    const value =
      $(this).attr("type") === "date" && name !== "DateSettled"
        ? dateFormat(studentInfo[name])
        : studentInfo[name];
    $(this).val(value);
  });
  // Populating Funding Source section values.
  // Origin: GetFundingInfo
  $(".funding-form input").each(function () {
    const name = $(this).attr("name");
    $(this).val(fundingInfo[name]);
  });
  // Populating Work Eligibility section values.
  // Origin: GetStudent

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
});
