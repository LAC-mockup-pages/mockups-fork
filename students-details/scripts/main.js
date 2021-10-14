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

const createOptionList = (dataObj, defaultValue) => {
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

const createStaffList = (list) => {
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
  // Data source: original-data/student-data.js/GetStudent
  $("form input").each(function () {
    const name = $(this).attr("name");
    const value =
      $(this).attr("type") === "date" && name !== "DateSettled"
        ? dateFormat(studentInfo[name])
        : studentInfo[name];
    $(this).val(value);
  });
  // Populating Funding Source section values.
  // Data source: original-data/student-data.js/GetFundingInfo
  $(".funding-form input").each(function () {
    const name = $(this).attr("name");
    $(this).val(fundingInfo[name]);
  });
  // Populating Work Eligibility section select values. Adding option list.
  // Data source: original-data/student-data.js/GetStudent,
  //        data-server.js/GetStaff
  $(".ssn-form select[name='NoSSNVisa']").val(studentInfo.NoSSNVisa);
  const optionStaff = createOptionList(
    createStaffList(GetStaff),
    studentInfo.NoSSNVisaStaff
  );
  $(".ssn-form select[name='NoSSNVisaStaff']").append(optionStaff);
  // Populating Gender | Ethnicity section select values.
  // Data source: original-data/student-data.js/GetStudent,
  //        data-server.js/ddlRace
  $(".gender-form select[name='Sex']").val(studentInfo.Sex);
  $(".gender-form select[name='EthnicityID']").val(studentInfo.EthnicityID);
  //TODO RaceID multiple selects

  //TODO Populating Employment history table values
  // Data source:

  // Populating Educational background select values. Adding option lists.
  // Data source: original-data/student-data.js/GetStudent

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
