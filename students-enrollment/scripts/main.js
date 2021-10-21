//*=================================================
//* Actions and Logic for local page
//*=================================================

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
import {
  GetStudent,
  GetFundingInfo,
  GetHighestGradeCompletedUS,
  GetYearsSchooling,
  GetFundingSource
} from "./original-data/student-data.js";
import {
  GetStudent_Additional,
  GetCountrySource,
  GetReferralSource
} from "./original-data/student-data-additional.js";
import {
  genderValues,
  inputValues,
  ssnValues
} from "./components.js/student-info.js";
import { fundingValues } from "./components.js/funding-info.js";
import { populationValues } from "./components.js/population-info.js";
const studentInfo = GetStudent.slice(0)[0];
const fundingInfo = GetFundingInfo.slice(0);
const fundingSources = GetFundingSource.slice(0);
const highestGrade = GetHighestGradeCompletedUS.slice(0);
const yearsSchool = GetYearsSchooling.slice(0);
const additionalInfo = GetStudent_Additional.slice(0)[0];
const countries = GetCountrySource.slice(0);
const referral = GetReferralSource.slice(0);
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
  // const fundingInfo =
  // const fundingSources =
  // const employmentData =
  // const highestGrade =
  // const yearsSchool =
  // const additionalInfo =
  // const countries =
  // const referral =

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

  //* Populating input and select elements for display.
  //* Elements are disabled.
  inputValues(studentInfo);
  ssnValues(studentInfo);
  genderValues(studentInfo);
  fundingValues(fundingInfo, fundingSources);
  populationValues(additionalInfo);

  //TODO Populating Employment history table values
  // Data source:

  // Populating Educational background select values. Adding option lists.
  // Data source: original-data/student-data.js/GetStudent
  //          original-data/student-data.js/GetHighestGradeCompletedUS
  //          original-data/student-data.js/GetYearsSchooling
  $(".education-form select[name='Grade']").append(
    createOptionList(highestGrade, studentInfo.Grade || "NA")
  );
  $(".education-form select[name='NYSGrade']").append(
    createOptionList(highestGrade, studentInfo.NYSGrade || "NA")
  );
  $(".education-form select[name='HighestCredential']").append(
    createOptionList(highestGrade, studentInfo.HighestCredential || "NA")
  );
  $(".education-form select[name='YearsUSSchools']").append(
    createOptionList(yearsSchool, studentInfo.YearsUSSchools || "NA")
  );
  //TODO Credential in US / Other country select

  // Populating Barriers multiple selects. Adding option lists.
  //TODO Barriers

  // Populating Nationality select values. Add option lists.
  // Data source: original-data/student-data-additional.js/GetStudent_Additional
  //          original-data/student-data-additional.js/GetCountrySource
  $(".nationality-form select[name='CountryID']").append(
    createOptionList(countries, additionalInfo.CountryID)
  );
  $(".nationality-form select[name='Status']").val(additionalInfo.Status);
  $(".nationality-form input[name='DateSettled']").val(
    dateFormat(additionalInfo.DateSettled)
  );
  $(".nationality-form input[name='Languages']").val(additionalInfo.Languages);
  //Populating Parent/Children select values.
  // Data source: original-data/student-data.js/GetStudent
  $(".parent-form select[name='CustodialParent']").val(
    studentInfo.CustodialParent
  );
  $(".parent-form select[name='SingleParent']").val(studentInfo.SingleParent);
  // Populating Referral section select values. Adding option list.
  // Data source: original-data/student-data-additional.js/GetStudent_Additional,
  //        original-data/student-data-additional.js/GetReferralSource
  $(".referral-form select[name='RefSource']").append(
    createOptionList(referral, additionalInfo.RefSource)
  );

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
