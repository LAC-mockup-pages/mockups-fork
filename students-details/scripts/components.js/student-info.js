//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Student information, Work eligibility, Gender/Ethnicity
//* =======================================

import { dateFormat, createOptionList, createStaffList } from "../main.js";

// Populating input element values
// Data source: original-data/student-data.js/GetStudent
export const inputValues = (student) => {
  $("form input").each(function () {
    const name = $(this).attr("name");
    const value =
      $(this).attr("type") === "date" && name !== "DateSettled"
        ? dateFormat(student[name])
        : student[name];
    $(this).val(value);
  });
};
// Populating Work Eligibility section select values. Adding option student.
// Data source: original-data/student-data.js/GetStudent,
//        data-server.js/GetStaff
export const ssnValues = (student) => {
  $(".ssn-form select[name='NoSSNVisa']").val(student.NoSSNVisa);
  const optionStaff = createOptionList(
    createStaffList(GetStaff),
    student.NoSSNVisaStaff
  );
  $(".ssn-form select[name='NoSSNVisaStaff']").append(optionStaff);
};
// Populating Gender | Ethnicity section select values.
// Data source: original-data/student-data.js/GetStudent,
//        data-server.js/ddlRace
export const genderValues = (student) => {
  $(".gender-form select[name='Sex']").val(student.Sex);
  $(".gender-form select[name='EthnicityID']").val(student.EthnicityID);
  //TODO RaceID multiple selects
};
