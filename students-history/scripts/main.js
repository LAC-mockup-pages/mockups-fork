//*=================================================
//* Actions and Logic for local page
//*=================================================

import { tableValues } from "./components/history.js";

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const historyList = GetHistory.slice(0);
const studentInfo = GetStudentHeader.slice(0)[0];
const statusList = GetStatusDescSource.slice(0);
const reasonsList = GetSepReasons.slice(0);
const centersList = GetGEDCenter_TASC.slice(0);
//! =============================================================
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
  // const historyList =
  // const studentInfo =
  // const statusList =
  // const reasonsList =
  // const centersList =

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    profile: "student-profile/index.html",
    details: "students-details/index.html",
    assessments: "student-assessments/index.html",
    enrollments: "student-enrollment/index.html",
    goals: "student-goals/index.html",
    history: "student-history/index.html",
    casenotes: "students-casenotes/index.html"
  };

  //! =============================================================
  const { StudentName, BirthDate } = studentInfo;
  $(".student-info .name").text(StudentName);
  $(".student-info .long-id").text(`Date of birth: ${BirthDate}`);

  // Populating history-table
  tableValues(historyList, statusList, reasonsList, centersList);
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();
  //* =====================================})

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
});
