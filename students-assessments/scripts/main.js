//*=================================================
//* Actions and Logic for local page
//*=================================================

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

import { createTabeContent } from "./components/tabe.js";
import { createBest2Content } from "./components/best2.js";
import { createHseContent } from "./components/hse.js";
//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const studentInfo = GetStudentHeader.slice(0)[0];
const currentTestInfo = GetTestinfo_CurrentFY.slice(0);
const tabeInfo = GetTestinfo_TABE11.slice(0);
const best2Info = GetTests_BestPlus2.slice(0);
const bestLitInfo = GetTests_BestLit.slice(0);
const hseInfo = GetTest_TASC.slice(0);
//! =============================================================

// Populating a table
const createCurrentContent = (dataList, testName, tableName = "") => {
  const fieldList = [
    "TestDate",
    "TestType",
    "TestForm",
    "TestLevel",
    "PreTest",
    "SubScore1",
    "SubScore2",
    "Score",
    "ScaleScore",
    "GradeEquivalent",
    "NRSLevel"
  ];
  const orderedList = dataList.sort((record1, record2) =>
    // DT#fromFormat <== Luxon method, "D" token describes mm/dd/yyyy format
    DT.fromFormat(record1.TestDate, "D") > DT.fromFormat(record2.TestDate, "D")
      ? -1
      : DT.fromFormat(record1.TestDate, "D") <
        DT.fromFormat(record2.TestDate, "D")
      ? 1
      : 0
  );
  let content = "";
  for (const record of orderedList) {
    const row = fieldList.map((key) => `<td>${record[key]}</td>`).join("");
    content += `<tr>${row}</tr>`;
  }
  return content;
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
  // const currentTestInfo =

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    profile: "student-profile/index.html",
    details: "students-details/index.html",
    assessments: "student-assessments/index.html",
    enrollment: "student-enrollment/index.html",
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

  // Populating student name and birthdate
  const { StudentID, StudentName } = studentInfo;
  $(".name").text(StudentName);
  $(".long-id").text(StudentID);

  // Populating current assessment table
  const currentContent = createCurrentContent(currentTestInfo, "current");
  if (currentContent) {
    $(".current tbody").append(currentContent);
  } else {
    $(".current .tablescroll").replaceWith(
      `<h2 style="text-align:center">No assessment on record for ${StudentName}`
    );
  }

  //* =====================================

  //* Expand underpinned table when section is clicked
  $(".sub-header").click(function (evnt) {
    evnt.stopPropagation();
    $("section .visible").removeClass("visible").addClass("invisible");
    $(this).siblings(".invisible").removeClass("invisible").addClass("visible");
    const testName = $(this).parent().attr("class");
    console.log("testName :>> ", testName);
    if (testName === "current") return;
    let tbodyContent = "";
    switch (testName) {
      case "tabe11":
        tbodyContent = createTabeContent(tabeInfo);
        break;
      case "best-plus2":
        tbodyContent = createBest2Content(best2Info);
        break;
      case "best-lit":
        tbodyContent = createBest2Content(bestLitInfo);
        break;
      case "hse":
        tbodyContent = createHseContent(hseInfo);
        break;
      default:
        break;
    }
    if (tbodyContent) {
      $(`.${testName} tbody`).append(tbodyContent);
    } else {
      $(`.${testName} .tablescroll table`).replaceWith(
        `<h2 style="text-align:center">No assessment on record for ${StudentName}`
      );
    }
  });

  //* Triggers edit modal with selected row elements and values
  $(document).on("click", ".table>tbody> tr", function (evnt) {
    evnt.stopPropagation();
    const editFormContent = "<h2>Selected Row</h2>";
    $("#modalBloc").modal("toggle");
    $("#edit-form").empty().append(editFormContent);
  });
});
