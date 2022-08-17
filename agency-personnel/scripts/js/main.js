//* Logic for page

import createNewRecordForm from "./components/AddNewRecord.js";
import validateRecord from "./data-check.js";
import {
  createFormAddNonIntructionalHours,
  handleChangeNonInstHours,
  addTotalHours
} from "./components/NonInstrHours.js";
import {
  createModalFormAddress,
  checkCanMailOrCall,
  handleChangeCheckBox
} from "./components/Address.js";
import { createFormAddHistory } from "./components/History.js";
import { createFormAddContact } from "./components/Contacts.js";
import { displayPersonnelDetails } from "./components/PersonnelView.js";
import { commentsContent } from "./components/Comments.js";

const labelObj = {
  PersLast: "Last Name",
  PersFirst: "First Name",
  PersonnelID: "Personnel ID"
};

// Variable personnelData is detached from the original request
export const personnelData = getPersonnel.slice(0);
const personnelList = getPersonnelList.slice(0);

const yearsOfExperience = (strDate) => {
  const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365;
  const numberYears = Math.round(
    (Date.now() - Date.parse(strDate)) / yearInMilliseconds
  ).toString();
  return numberYears;
};

const getRequired = () => {
  const list = $("#new-entry input, select").get();
  const requiredList = list
    .filter((item) => $(item).prop("required"))
    .map((item) => `#${$(item).attr("id")}`)
    .join(", ");
  return requiredList;
};

// Creates header with optional button, optional column headers
// (from list parameter)
export const topBanner = (title, list = null) => {
  let headerLine = "";
  const blockName = title.toLowerCase().replace(/\W/gi, "-");

  const formName = `form="${blockName}"`;
  let headerButton = "";

  if (
    ![
      "Main Information",
      "Professional Development (display only)",
      "Personnel Information",
      "Instructional Hours (display only)",
      "Home Address",
      "Work Address",
      "Additional Information",
      "Comments"
    ].includes(title)
  ) {
    headerButton = `<button type='button' class="btn btn-default add-record-btn col-sm-2" ${formName}>Add</button>`;
  }
  if (list) {
    headerLine +=
      "<div class='container-fluid row sub-header-labels blue-light-bg blue-text'>";
    for (const item of list) {
      const cellName = item[0].toLowerCase().replace(/\W/gi, "-");
      headerLine += ` <div class='bloc-${blockName}-${cellName} ${item[1]}'>${item[0]}</div>`;
    }
    headerLine += "</div>";
  }
  return `
  <div class='sub-header blue-bg blue-light-text'>
    <div class="container-fluid row">
      ${headerButton}
      <div class='sub-header-title'>${title}</div>
    </div>
    ${headerLine}
  </div>
  `;
};

// Returns a table body with hidden cells, label object and table name
export const tableBody = (
  dataList,
  block,
  hiddenList,
  obj = {},
  tableName = ""
) => {
  block = block.toLowerCase().replace(/\W/gi, "-");

  const rows = dataList
    .map((record, indx) => {
      let cells = "";
      const tableData = tableName ? `data-table=${tableName}` : "";
      for (const key in record) {
        const optionHidden = hiddenList.includes(key) ? " hidden" : "";
        const label = obj[key] ? `data-label='${obj[key]}'` : "";

        cells += `<td class="cell-data${optionHidden}" data-field=${key} ${label}>${record[key]}</td>`;
      }

      return `<tr id="${block}-${indx}" ${tableData}>${cells}</tr>`;
    })
    .join("");
  return `<div class="${block}-table">
            <table class="table">
              <tbody class='${block}-body'>${rows}</tbody>
            </table>
          </div>`;
};

// Used for new personnel
const saveMods = (fields, formId, tableName = "") => {
  const { AgencyID, AuditUserID } = SESSION_VARIABLE[0];
  const result = { AgencyID, AuditUserID };
  $(`${formId} input, select`).removeClass("yellow-bg");
  const fieldList = fields.slice(0);

  // console.log("fieldList :>> ", fieldList);

  // Data validation
  // validateNewRecord() <== data-check.js
  const validatedList = validateRecord(fieldList);

  // console.log("validatedList :>> ", validatedList);

  // Background color change for invalid field values
  const checkFlag = validatedList.some((item) => !item.correct);
  if (checkFlag) {
    const list = validatedList.filter((obj) => obj.correct === false);

    console.log("List of incorrect values >>: ", list);

    for (let field of list) {
      let fieldId =
        formId === "#new-entry" ? `#${field.name}` : `#${field.name}-view`;
      $(fieldId).addClass("yellow-bg");
    }
    return;
  } else {
    for (let field of fieldList) {
      if (field.name === "AgencyID") field.value = SESSION_VARIABLE[0].AgencyID;

      // dateISOToUS() <== helperFunction.js
      if (field.name.includes("Date")) field.value = dateISOToUS(field.value);

      if (field.name === "lengthstay") {
        const startDate = fieldList.filter(
          (item) => item.name === "PersStartDate"
        )[0];
        field.value = yearsOfExperience(startDate.value);
      }
      result[field.name] = field.value;
    }
    const target = tableName ? tableName : formId;
    const resultList = [target, JSON.stringify(result)];
    console.table(result);
    //! =================================================
    //! JSON Object to send back to database
    console.log("result :", resultList);
    //! =================================================
    if (formId === "#new-entry") {
      $(formId)[0].reset();
      $(`${formId} input, select`)
        .toggleClass("dark-text")
        .prop("required", true);
      $(`${formId}, .buttons-bloc-new`).toggleClass("hidden");
    } else {
      // location.reload();
    }
    $("#modalBloc").modal("toggle");
  }
};

const viewPersonnelList = (listObj) => {
  const headerList = Object.keys(labelObj).map((key) => labelObj[key]);

  // createHeaders() <== helperFunctions.js
  const headerLine = createHeaders(headerList);
  let rows = "";
  for (const key of Object.keys(listObj)) {
    // createTableRow() <== helperFunctions.js
    const row = createTableRow(key, listObj[key]);
    rows += row;
  }
  $("#view-bloc")
    .empty()
    .append(
      `<table class="table personel">${headerLine}
        <tbody class="table-body">${rows}</tbody>
    </table>)`
    );
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();
};

const searchPersonnel = (str) => {
  const idSet = new Set();
  const personnelObj = {};

  //Checks for non alphanumeric characters
  if (!/\w+$/i.test(str)) return personnelObj;

  for (const person of personnelList) {
    if (person.First.toLowerCase().startsWith(str.toLowerCase()))
      idSet.add(person.Second);
    const firstName = person.First.split(", ")[1].toLowerCase();
    if (firstName.startsWith(str.toLowerCase())) idSet.add(person.Second);
  }

  for (const id of Array.from(idSet)) {
    const person = personnelList.find((pers) => pers.Second === id);
    const personArray = person.First.split(", ");
    const PersLast = personArray[0];
    // const tempArray = personArray[1].split(" - ");
    const [PersFirst, PersonnelID] = personArray[1].split(" - ");
    personnelObj[id] = { PersLast, PersFirst, PersonnelID };
  }
  return personnelObj;
};

//*======================================
//* jQuery logic
//*======================================

$(document).ready(() => {
  //* Back to Top button
  const btnToTop = $("#btn-top");
  $("window").scroll(() => {
    btnToTop.style.display =
      $("window").scrollTop() > 600 || $("body".scrollTop() > 600)
        ? "inline-block"
        : "none";
  });
  btnToTop.click((e) => {
    e.stopPropagation();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  //* New personnel form set-up (hidden)
  $("#new-entry").append(createNewRecordForm());
  $(".personnel-entry")
    .append(`<div class="container-fluid buttons-bloc-new hidden">
  <button type="button" id="cancel-btn" form="new-entry"
    class="btn btn-default pull-right">Cancel</button>
  <button type="button" id="submit-btn" form="new-entry"
    class="btn dark-blue-text blue-light-bg pull-right">Add</button>
</div>`);
  // Change text color from red (required) to black
  // when a value is entered
  $(document).on("focusin", getRequired(), function (evnt) {
    evnt.stopPropagation();
    $(this).toggleClass("dark-text").prop("required", false);
  });

  //* Modal title handling
  $("#modalBloc").on("hidden.bs.modal", function () {
    const modalTitleText = $(".modal-title").text();
    if (modalTitleText.startsWith("Adding")) {
    } else {
      $(".modal-title").text("Adding a record");
    }
  });
  $(document).on("focusin", "#PersStartDate", function (evnt) {
    evnt.stopPropagation();
    $(this).attr("type", "date");
  });
  //* Adding a new team member
  $(document).on("click", "#add-new-member", function (evnt) {
    evnt.stopPropagation();
    $("#new-entry, .buttons-bloc-new").toggleClass("hidden");
  });

  $(document).on("click", "#submit-btn", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    const fieldList = $(formId).serializeArray();
    saveMods(fieldList, formId, "getPersonnel");
  });

  //* Creates default PersPersonnelID after position is selected
  //* Can be changed manually
  $(document).on("focusout", "#PersPositionID", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const positionValue = $(this).val();
    let personnelId = "q";
    const first = $("#PersFirst").val();
    const last = $("#PersLast").val();
    if ($("#PersFirst").val() || $("PersLast").val()) {
      personnelId = `${last}${first}${SESSION_VARIABLE[0].AgencyID}${positionValue}`;
    }
    $("#PersPersonnelID").attr("value", personnelId);
  });

  //* Search Agency personnel
  $(document).on("keyup", "#search-input", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const value = $(this).val();
    const listPers = searchPersonnel(value);
    viewPersonnelList(listPers);
    $(".personnel tbody tr:first-child").focus();
  });
  $(document).on("keypress", "#search-input", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    let value = $(this).val();
    let listPers = {};
    if (evnt.which === 13) {
      listPers = searchPersonnel(value);
    } else {
      $(this).val((value += String.fromCharCode(evnt.which)));
    }
  });
  $(document).on("click", "#search-btn", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    // const listPers = searchPersonnel(value);
  });

  //* New personnel cancel button
  $(document).on("click", "#cancel-btn", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    location.reload();
    // const formId = "#" + $(this).attr("form");
    // $(formId)[0].reset();
    // $(formId).toggleClass("hidden");
  });

  //* Select personnel in short list
  $(document).on("click", ".row-data", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const rowID = $(this).attr("id");
    const personnelView = displayPersonnelDetails(rowID);
    // Cleaning up
    $("#view-bloc").remove();
    $("#search-input").val("");
    $(".personnel-entry").toggleClass("hidden");
    $(".personnel-search").toggleClass("hidden");
    $("#sub-nav > li").toggleClass("selected not-selected");

    $(".hero").append(personnelView);
    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Binding event trigger to editable rows.
  //* Editable blocks are: history, non instructional hours,
  //* progress contacts.
  $(document).on(
    "click",
    ".history-body > tr,.non-instructional-hours-body > tr,.progress-contact-body > tr",
    function (evnt) {
      evnt.stopPropagation();
      const selectedRecordId = $(this).attr("id");
      const blockName = selectedRecordId.split("-").slice(0, -1).join("-");
      let editForm = "";
      switch (blockName) {
        case "history":
          editForm = createFormAddHistory(blockName, selectedRecordId);
          break;
        case "non-instructional-hours":
          editForm = createFormAddNonIntructionalHours(
            blockName,
            selectedRecordId
          );
          break;
        case "progress-contact":
          editForm = createFormAddContact(blockName, selectedRecordId);
          break;
        default:
          editForm = defaultModal("no-table-defined-yet");
          break;
      }
      $("#modalBloc").modal("toggle");
      $(".modal-title").text("Editing a record");
      $("#modal-form")
        .empty()
        .append(editForm[1])
        .attr("data-table", editForm[0])
        .attr("data-block", blockName);
      // Add dynamic masking for date fields in modal
      // Modifies the date to ISO format required by input type "date"
      $("#modal-form input[name$='Date']")
        .val(function (indx, value) {
          // dateISOToUS() <== helpers/helperFunctions.js
          return dateISOToUS(value);
        })
        .attr("type", "date");
      // Binding event trigger for real time updating total hours
      if (blockName === "non-instructional-hours") handleChangeNonInstHours();
    }
  );

  //* Add a new record from modal
  $(document).on("click", ".add-record-btn", function (evnt) {
    evnt.stopPropagation();
    const formName = $(this).attr("form");
    // Modify form depending on the block name
    let addForm = "";
    switch (formName) {
      case "history":
        addForm = createFormAddHistory(formName);
        break;
      case "non-instructional-hours":
        addForm = createFormAddNonIntructionalHours(formName);
        break;
      case "home-address":
      case "work-address":
        addForm = createModalFormAddress(formName);
        break;
      case "progress-contact":
        addForm = createFormAddContact(formName);
        break;
      default:
        addForm = defaultModal("no-table-defined-yet");
        break;
    }
    $("#modalBloc").modal("toggle");
    $("#modal-form")
      .empty()
      .append(addForm[1])
      .attr("data-table", addForm[0])
      .attr("data-block", formName);
    // Add dynamic masking for date fields in modal
    // Modifies the date to ISO format required by input type "date"
    $("#modal-form input[name$='Date']").attr("type", "date");
    // Binding event triggers to blocks as needed
    if (formName === "non-instructional-hours") handleChangeNonInstHours();
    if (formName === "work-address") {
      handleChangeCheckBox();
    }
  });

  //* Editing a block.
  // Applies to: Personnel Information, Home Address, Work Address,
  // Additional Info and Comments.
  $(document).on("click", ".color-select", function (evnt) {
    evnt.stopPropagation();
    const formId = $(this).attr("id");
    const tableName = $(`#${formId}`).data("table");
    let editFormContent = "";
    if (formId === "additional-information") {
      let content = [];
      $(`#${formId}`)
        .clone()
        .children()
        .each(function (indx) {
          const subItems = $(this).children().toArray();
          content = [...content, ...subItems];
        });
      editFormContent = $(content).each(function (indx) {
        $(this)
          .children("input, select")
          .prop("disabled", false)
          .removeAttr("disabled");
      });
    } else if (formId === "comments") {
      const comments = $(`#${formId}`).clone().children();
      editFormContent = commentsContent(comments);
    } else {
      const content = $(`#${formId}`).clone().children();
      editFormContent = $(content).each(function (indx) {
        $(this)
          .children("input, select")
          .prop("disabled", false)
          .removeAttr("disabled");
      });
    }
    $("#modalBloc").modal("toggle");
    $(".modal-title").text("Editing a record");
    $("#modal-form")
      .empty()
      .append(editFormContent)
      .attr("data-table", tableName)
      .attr("data-block", formId);

    if (formId === "work-address") {
      $("#modal-form input[type='checkbox']")
        .prop("disabled", false)
        .removeAttr("disabled");
    }
    // Add dynamic masking for date fields in modal
    // Modifies the date to ISO format required by input type "date"
    $("#modal-form input[name$='Date']")
      .val(function (indx, value) {
        // dateISOToUS() <== helpers/helperFunctions.js
        return dateISOToUS(value);
      })
      .attr("type", "date");
  });

  //* Save button in block top banner
  // $(document).on("click", ".save-record-btn", function (evnt) {
  //   evnt.stopPropagation();
  //   const formName = `#${$(this).attr("form")}`;
  //   const tableName = $(formName).attr("data-table");
  //   const submittedData = $(formName).serializeArray();
  //   const ID = $(".personView").attr("id");
  //   submittedData.unshift({ name: "ID", value: ID });

  //   saveMods(submittedData, formName, tableName);
  // });

  //* Main Cancel button
  $(document).on("click", "#btn-cancel", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();

    location.reload();
  });

  //* Save button in #modal-form
  $(document).on("click", "#save-btn", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const tableName = $("#modal-form").attr("data-table");
    const blockName = $("#modal-form").attr("data-block");
    let submittedData = $("#modal-form").serializeArray();
    if (blockName === "work-address") {
      const checkboxesValues = checkCanMailOrCall();
      submittedData = submittedData.filter(
        (field) => !["PersWorkSendMail", "PersWorkCanCall"].includes(field.name)
      );
      submittedData = [...submittedData, ...checkboxesValues];
    }
    const PersPKID = $(".personView").attr("id");
    submittedData.unshift({ name: "Personnel_PKID", value: PersPKID });

    console.log("submittedData :>> ", submittedData);

    if (tableName === "NonInstHours")
      submittedData.push(addTotalHours(submittedData));
    const filteredData = submittedData.filter(
      (obj) => obj.value || obj.value === ""
    );
    saveMods(filteredData, "#modal-form", tableName);
    $("#modalBloc").modal("toggle");
  });

  //* Phone numbers dynamic masking
  //* On entry, format the numbers as US phone number (XXX)-XXX-XXXX
  $(document).on("keyup", "#modal-form input[type='tel']", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const inputValue = $(this).val();
    $(this).val(
      inputValue.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, "($1)-$2-$3")
    );
    console.log("Phone event hit ", $(this).val());
  });

  //* Checking date input validity
  $(document).on(
    "keyup",
    "#modal-form input[type='date'], #PersStartDate",
    function () {
      const entryString = $(this).val();
      $(this).css("background-color", "").removeAttr("title", "Invalid date");
      // mm/dd/yyyy date format has a length of 11 characters
      const lengthValid = entryString.length < 11;
      if (!lengthValid) {
        $(this)
          .css("background-color", "#f7e095")
          .attr("title", "Invalid date");
        $(".modal-footer #save-btn").prop("disabled", true);
      }
      const invalidFields = $(
        "#modal-form input[type='date'][title='Invalid date']"
      );
      if (!invalidFields.length) {
        $(".modal-footer #save-btn").prop("disabled", false);
      }
    }
  );
  //* Focus on first visible and enabled input or select element in modal
  $("#modalBloc").on("shown.bs.modal", function () {
    $(this)
      .find(".input-field")
      .filter(":visible")
      .children(":input:enabled")
      .first()
      .focus()
      .select();
  });
});
