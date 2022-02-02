//*=================================================
//* Actions and Logic for local page
//*=================================================

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

import { createTabeContent, addNewTabeTest } from "./components/tabe.js";
import {
  addNewBestPlusTest,
  createBestContent,
  setNRSLevel
} from "./components/best2.js";
import { addNewHSETest, createHseContent } from "./components/hse.js";
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
export const tabeForm = GetForm_TABE11.slice(0);
export const tabeLevels = GetLevel_TABE11.map((obj) => {
  const key = obj.key;
  const value = obj.value.slice(2);
  return { key, value };
});
export const tabeMode = GetTestMode_TABE11.slice(0);
export const tabeType = GetType_TABE11.map((obj) => {
  const key = obj.key;
  const value = obj.value.slice(3);
  return { key, value };
});
export const staffList = GetStaff.slice(0);
export const bestPlusForm = GetForm_BestPlus2.slice(0);
export const hseType = GetType_TASC.slice(0);
export const hsePredAct = GetType_TASCPredAct.slice(0);
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
      defaultValue && keyData === defaultValue ? "selected" : "";
    return `<option ${defaultVal} value=${keyData}>${valueData}</option>`;
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

  //TODO Add color for Pre and Post Tests of record

  return content;
};

const modalOptionTABE = {
  requiredList: ["TABEDate", "Personnel_PKID"],
  labels: {
    TABEDate: "Date",
    TestType: "Type",
    TestForm: "Form",
    TestLevel: "Level",
    Pre_Post: "Pre/Post",
    TestMode: "Mode",
    SubScore1: "Score",
    ScaleScore: "Scale score",
    NRSLevel: "NRS/NYRS level",
    Personnel_PKID: "Administrator"
  }
};
const modalOptionBestPlus = {
  requiredList: ["TestDate", "Personnel_PKID"],
  labels: {
    TestDate: "Date",
    TestForm: "Form",
    Score: "Score",
    NRSLevel: "NRSLevel",
    Pre_Post: "Pre/Post",
    Personnel_PKID: "Administrator"
  }
};
const modalOptionBestLit = {
  requiredList: ["TestDate", "Personnel_PKID"],
  labels: {
    TestDate: "Date",
    Score: "Score",
    NRSLevel: "NRSLevel",
    Pre_Post: "Pre/Post",
    Personnel_PKID: "Administrator"
  }
};
const modalOptionHSE = {
  requiredList: ["TestDate", "Personnel_PKID"],
  labels: {
    TestDate: "Date",
    TestType: "Type",
    TestForm: "Form",
    Writing: "Writing",
    Social: "Social studies",
    Science: "Science",
    Reading: "Reading",
    Math: "Math",
    Score: "Total",
    PreTest: "Pre-Test",
    PredAct: "PredAct",
    Personnel_PKID: "Administrator"
  }
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
  // const tabeInfo =
  // const best2Info =
  // const bestLitInfo =
  // const hseInfo =
  // export const tabeForm =
  // export const tabeLevels =
  // export const tabeMode =
  // export const tabeType =
  // export const staffList =
  // export const bestPlusForm =
  // export const hseType =
  // export const hsePredAct =

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
  $(".dob").text(`Birth date: ${BirthDate}`);

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
        tbodyContent = createBestContent(best2Info);
        break;
      case "best-lit":
        tbodyContent = createBestContent(bestLitInfo);
        break;
      case "hse":
        tbodyContent = createHseContent(hseInfo);
        break;
      default:
        break;
    }
    if (tbodyContent) {
      $(`.${testName} tbody`).empty().append(tbodyContent);
    } else {
      $(`.${testName} .tablescroll table`).replaceWith(
        `<h2 style="text-align:center">No assessment on record for ${StudentName}`
      );
    }
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Triggers edit modal with selected row elements and values
  $(document).on("click", ".table>tbody> tr", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const rowId = $(this).attr("id");
    const $row = $(":input", this).clone().prop("disabled", false);
    const sectionTitle = $(this)
      .parents("section")
      .find(".sub-header-title")
      .text()
      .trim();
    console.log("sectionTitle :>> ", sectionTitle);
    let modalOptionObj;
    switch (sectionTitle) {
      case "TABE 11/12":
        modalOptionObj = modalOptionTABE;
        break;
      case "Best Plus 2":
        modalOptionObj = modalOptionBestPlus;
        break;
      case "Best literacy":
        modalOptionObj = modalOptionBestLit;
        break;
      case "HSE":
        modalOptionObj = modalOptionHSE;
        break;
      default:
        // Section title is "Current Assessments"
        return;
    }
    const { requiredList, labels } = modalOptionObj;
    $("#modalBloc").modal("toggle");
    const table = $(this).parents("table").attr("data-table");
    console.log("table :>> ", table);
    $("#edit-form")
      .empty()
      .append($row)
      .attr({ "data-id": rowId, "data-table": table });
    $(".modal-title").empty().text(`Editing ${sectionTitle} record`);
    $("#edit-form :input").each(function (indx) {
      const name = $(this).attr("name");
      if (name.includes("Date")) {
        const formattedDate = DT.fromFormat($(this).val(), "D").toISODate();
        $(this).val(formattedDate).attr("type", "date");
      }
      $(this)
        .wrap("<div class='form-group input-field'></div>")
        .before(`<label for=${name}>${labels[name]}</label>`);
    });
    for (const name of requiredList) {
      $(`#edit-form [name=${name}]`)
        .prop("required", true)
        .attr({
          "data-original-title": "Please fill in this field",
          "data-toggle": "tooltip",
          "data-placement": "right"
        })
        .siblings("label")
        .addClass("red-text");
    }
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Saving changes after editing in modal
  $("#save-btn").click(async function (evnt) {
    //TODO Check for errors in inputs
    const elements = $("#edit-form :input").prop("disabled", false);
    const requiredObj = createObject(
      $("#edit-form [required]").serializeArray()
    );
    const requiredWithoutValue = [];
    // Checking if required fields have a valid value.
    // Switching background color to yellow if not, and stopping
    // the save process.
    for (const key in requiredObj) {
      if (requiredObj[key].length < 1) requiredWithoutValue.push(key);
    }
    if (requiredWithoutValue.length > 0) {
      for (const field of requiredWithoutValue) {
        $(`.modal-body [name=${field}]`).css("background-color", "#f7e095");
      }
      return;
    } else {
      const targetTable = $("#edit-form").attr("data-table");
      const saveList = $(elements).serializeArray();
      let saveObj = createObject(saveList);

      // Adding ID of edited record if it exists.
      const rowId = $("#edit-form").attr("data-id");
      if (rowId) saveObj = { ID: rowId, ...saveObj };
      const credentials = createCredentials();
      if (saveObj.ActiveStatus === "0") saveObj.ActiveStatus = "";
      //! =================================================
      //! For production, this is the end point for the Post request
      //! to update the DB.
      //! =================================================
      const resultList = [
        targetTable,
        JSON.stringify({ ...credentials, Student_PKID, ...saveObj })
      ];
      console.log("result :", resultList);
      //! =================================================
      $("#modalBloc").modal("toggle");
    }
  });

  //* Adding a new record
  $("#add-tabe, #add-bestplus, #add-bestlit, #add-hse").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    let editFormContent = "";
    let modalTitle = "TABE";
    let dataTableName = "GetTestInfo_TABE11";
    const buttonId = $(this).attr("id");
    switch (buttonId) {
      case "add-bestplus":
        editFormContent = addNewBestPlusTest(modalOptionBestPlus);
        modalTitle = "Best Plus 2";
        dataTableName = "GetTests_BestPlus2";
        break;
      case "add-bestlit":
        editFormContent = addNewBestPlusTest(modalOptionBestLit);
        modalTitle = "Best Literacy";
        dataTableName = "GetTests_BestLit";
        break;
      case "add-hse":
        editFormContent = addNewHSETest(modalOptionHSE);
        modalTitle = "HSE";
        dataTableName = "GetTests_TASC";
        break;
      default:
        editFormContent = addNewTabeTest(modalOptionTABE);
        break;
    }
    $("#edit-form")
      .empty()
      .append(editFormContent)
      .attr("data-table", dataTableName);
    $(".modal-title").empty().text(`Adding new ${modalTitle} record`);

    //TODO Process customized requiredList

    $("#modalBloc").modal("toggle");
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Record designed for archiving
  $("#archive-btn").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const targetTable = $("#edit-form").attr("data-table");
    const rowId = $("#edit-form").attr("data-id");
    const credentials = createCredentials();
    //! =================================================
    //! For production, this is the end point for the POST request
    //! to update the DB.
    //! =================================================
    const result = [
      targetTable,
      JSON.stringify({ ...credentials, Student_PKID, ID: rowId, Move: "1" })
    ];
    console.log("result :", result);
    //! =================================================
    $("#modalBloc").modal("toggle");
  });

  //* Record designed for deletion
  $("#delete-btn").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const targetTable = $("#edit-form").attr("data-table");
    const rowId = $("#edit-form").attr("data-id");
    const credentials = createCredentials();
    const message = $(".modal-footer > h3").text();
    if (!message) {
      $(".modal-footer").prepend(
        "<h3 class='delete-msg'>Confirm deletion by clicking the DELETE button again</h3>"
      );
    } else {
      $(".modal-footer > h3").remove();
      //! =================================================
      //! For production, this is the end point for the DELETE request
      //! to update the DB.
      //! =================================================
      const result = [
        targetTable,
        JSON.stringify({ ...credentials, Student_PKID, ID: rowId })
      ];
      console.log("result :", result);
      //! =================================================
      $("#modalBloc").modal("toggle");
    }
  });

  //* When Score is entered for Best+2 and BestLit, NRS level is updated
  //* depending on Score value.
  $("#edit-form ").on("change", 'input[name="Score"]', async function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    $("#edit-form input[name='Score']").css("background-color", "");
    $("#edit-form input[name='NRSLevel']").val("0");
    const targetTable = $("#edit-form").attr("data-table");
    const score = Number($(this).val());
    const nrsLevel = setNRSLevel(score, targetTable);
    if (nrsLevel) {
      $("#edit-form input[name='NRSLevel']").val((await nrsLevel).toString());
    } else {
      $("#edit-form input[name='Score']").css("background-color", "#f7e095");
      $("#edit-form input[name='Score']").focus();
    }
  });

  //*Rule 3 When TestForm is selected, clear form controls below
  $("#edit-form ").on("change", 'select[name="TestForm"]', function () {
    $("#edit-form input[name='ScaleScore']").val("0");
    $("#edit-form input[name='SubScore1']").val("0");
  });

  //* Rule 4 When TestForm is selected, clear form controls below
  $("#edit-form ").on("change", 'select[name="TestLevel"]', function () {
    $("#edit-form input[name='ScaleScore']").val("0");
    $("#edit-form input[name='SubScore1']").val("0");
  });
});
