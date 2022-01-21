//*=================================================
//* Actions and Logic for local page
//*=================================================

import { addNewRecord, tableValues } from "./components/history.js";
// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;
//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const historyList = GetHistory.slice(0);
const studentInfo = GetStudentHeader.slice(0)[0];
export const statusList = GetStatusDescSource.slice(0);
// Removing the key from the value property
export const reasonsList = GetSepReasons.map((obj) => {
  const key = obj.key;
  const value = obj.value.replace(key, "").trim();
  return { key, value };
});
export const centersList = GetGEDCenter_TASC.slice(0);
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

export const modalOptionHistory = {
  requiredList: ["StatusDate", "StatusID"],
  labels: {
    StatusDate: "Date",
    StatusID: "Status",
    ExitReasonID: "Reason",
    GEDCenterID: "Test center"
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
  tableValues(historyList);
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
    const { requiredList, labels } = modalOptionHistory;
    $("#modalBloc").modal("toggle");
    const table = $(this).parents("table").attr("data-table");
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
  $("#save-btn").click(function (evnt) {
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
      // createObject() <== helpers/helperFunctions.js
      let saveObj = createObject(saveList);
      // Adding ID of edited record if it exists.
      const rowId = $("#edit-form").attr("data-id");
      if (rowId) saveObj = { ID: rowId, ...saveObj };
      const credentials = createCredentials();
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
  $("#add-record").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const editFormContent = addNewRecord(modalOptionHistory);
    const modalTitle = "History";
    const dataTableName = "GetHistory";
    const { requiredList } = modalOptionHistory;
    $("#delete-btn").toggleClass("hidden");
    $("#edit-form")
      .empty()
      .append(editFormContent)
      .attr("data-table", dataTableName);
    $(".modal-title").empty().text(`Adding new ${modalTitle} record`);
    $("#delete-btn").addClass("hidden");
    $("#modalBloc").modal("toggle");
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
  //* Cleaning up after modal closing
  $("#modalBloc").focusout((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    if ($("#delete-btn").hasClass("hidden"))
      $("#delete-btn").toggleClass("hidden");
    $(".modal-footer h3").remove();
  });
  $("#close-btn").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    $("#modalBloc").modal("toggle");
    if ($("#delete-btn").hasClass("hidden"))
      $("#delete-btn").toggleClass("hidden");
    $(".modal-footer h3").remove();
  });
});
