//* Logic for page

import createNewRecordForm from "./components/AddNewRecord.js";
import validateRecord from "./data-check.js";
import {
  getPersonnel,
  getPersonnelList,
  sessionVariable
} from "./data-server.js";
import personView from "./components/PersonInfo.js";
import { historyView, createFormAddHistory } from "./components/History.js";
import proDevView from "./components/ProDev.js";
import instructionalHoursView from "./components/InstHours.js";
import {
  nonInstrHoursView,
  createFormAddNonIntructionalHours,
  handleChangeNonInstHours,
  addTotalHours
} from "./components/NonInstrHours.js";
import {
  homeAddress,
  workAddress,
  createModalFormAddress,
  checkCanMailOrCall,
  handleChangeCheckBox
} from "./components/Address.js";
import addInfoView from "./components/AdditionalInfo.js";
import commentsView from "./components/Comments.js";
import { contactsView, createFormAddContact } from "./components/Contacts.js";

const labelObj = {
  PersLast: "Last Name",
  PersFirst: "First Name",
  PersonnelID: "Personnel ID"
};

// Variable personnelData is detached from the original request
export const personnelData = getPersonnel.slice(0);

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
      "Professional Development",
      "Personnel Information",
      "Instructional Hours",
      "Home Address",
      "Work Address",
      "Additional Information",
      "Comments"
    ].includes(title)
  ) {
    headerButton = `<button type='button' class="btn btn-default add-record-btn col-sm-2" ${formName}>Add</button>`;
  } else if (
    ["Personnel Information", "Comments", "Additional Information"].includes(
      title
    )
  ) {
    headerButton = `<button type='button' class="btn btn-default save-record-btn col-sm-2" ${formName}>Save</button>`;
  } else if (["Home Address", "Work Address"].includes(title)) {
    headerButton = `<button type='button' class="btn btn-default add-record-btn col-sm-2" ${formName}>Add / Edit</button>`;
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
  const { AgencyID, AuditUserID } = sessionVariable;
  const result = { AgencyID, AuditUserID };
  $(`${formId} input, select`).removeClass("yellow-bg");
  const fieldList = fields.slice(0);
  // Data validation
  // validateNewRecord() <== data-check.js
  const validatedList = validateRecord(fieldList);
  // Background color change for invalid field values
  const checkFlag = validatedList.some((item) => !item.correct);
  if (checkFlag) {
    const list = validatedList.filter((obj) => obj.correct === false);
    for (let field of list) {
      let fieldId =
        formId === "#new-entry" ? `#${field.name}` : `#${field.name}-view`;
      $(fieldId).addClass("yellow-bg");
    }
    return;
  } else {
    for (let field of fieldList) {
      if (field.name === "AgencyID") field.value = sessionVariable.AgencyID;

      // dateFormat() <== helperFunction.js
      if (field.name === "PersStartDate") field.value = dateFormat(field.value);

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

    //ToDO Reloading/resetting with new data
    if (formId === "#new-entry") {
      $(formId)[0].reset();
      $(`${formId} input, select`)
        .toggleClass("dark-text")
        .prop("required", true);
      $(formId).toggleClass("hidden");
    } else {
      location.reload();
    }
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
  $("#view-bloc").empty().append(
    `<table class="table">${headerLine}
        <tbody class="table-body">${rows}</tbody>
    </table>)`
  );
};

const searchPersonnel = (str) => {
  const idSet = new Set();
  const personnelObj = {};

  //Checks for non alphanumeric characters
  if (!/\w+$/i.test(str)) return personnelObj;

  for (const person of getPersonnelList) {
    if (person.First.toLowerCase().startsWith(str.toLowerCase()))
      idSet.add(person.Second);
    const firstName = person.First.split(", ")[1].toLowerCase();
    if (firstName.startsWith(str.toLowerCase())) idSet.add(person.Second);
  }

  for (const id of Array.from(idSet)) {
    const person = getPersonnelList.find((pers) => pers.Second === id);
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
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

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

  // Creates default PersPersonnelID after position is selected
  // Can be changed manually
  $(document).on("focusout", "#PersPositionID", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const positionValue = $(this).val();
    let personnelId = "q";
    const first = $("#PersFirst").val();
    const last = $("#PersLast").val();
    if ($("#PersFirst").val() || $("PersLast").val()) {
      personnelId = `${last}${first}${sessionVariable.AgencyID}${positionValue}`;
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

    // Cleaning up
    $("#view-bloc").remove();
    $("#search-input").val("");
    $(".personnel-entry").toggleClass("hidden");
    $(".personnel-search").toggleClass("hidden");

    // Adding blocs
    const personInfoBloc = personView(rowID);
    const historyBloc = historyView();
    const proDevBloc = proDevView();
    const instructionalHoursBloc = instructionalHoursView();
    const nonInstrHoursBloc = nonInstrHoursView();
    const homeAddressBloc = homeAddress();
    const workAddressBloc = workAddress();
    const addInfoBloc = addInfoView();
    const commentsBloc = commentsView();
    const contactsBloc = contactsView();

    $(".hero").append(`
    <div class="container-fluid row personView" id=${rowID}>
      <div class="row">
        ${personInfoBloc}
        <div class="bloc-history-proDev col-md-7" id='${rowID}-history'>
          <div class="bloc-history">${historyBloc}</div>
          <div class="bloc-proDev">${proDevBloc}</div>
        </div>
      </div>
      <div class="bloc-hours container-fluid row">
          <div class="bloc-instr-hours col-md-5">${instructionalHoursBloc}</div>
          <div class="bloc-nonInstrHours col-md-7">${nonInstrHoursBloc}</div>
      </div>
      <div class="container-fluid row bloc-address">
          <div class="bloc-home col-md-6">${homeAddressBloc}</div>
          <div class="bloc-work col-md-6">${workAddressBloc}</div>
      </div>
      <div class="container-fluid bloc-additionalInfo">
        ${addInfoBloc}
      </div>
      <div class="container-fluid row bloc-comments-contacts">
        ${commentsBloc}
        ${contactsBloc}
      </div>
    </div>`);

    // Binding event trigger to editable blocs for editing.
    // Editable blocks are: history, non instructional hours, progress
    // contacts.
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
        $("#modal-form")
          .empty()
          .append(editForm[1])
          .attr("data-table", editForm[0])
          .attr("data-block", blockName);

        // Binding event trigger for real time updating total hours
        if (blockName === "non-instructional-hours") handleChangeNonInstHours();
      }
    );

    // Add a new record from modal
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

      // Binding event triggers to blocks as needed
      if (formName === "non-instructional-hours") handleChangeNonInstHours();
      if (formName === "work-address") {
        handleChangeCheckBox();
      }
    });

    // Save button in block top banner
    $(document).on("click", ".save-record-btn", function (evnt) {
      evnt.stopPropagation();
      const formName = `#${$(this).attr("form")}`;
      const tableName = $(formName).attr("data-table");
      const submittedData = $(formName).serializeArray();
      saveMods(submittedData, formName, tableName);
    });
  });

  //* Cancel or Save

  // Main Cancel button
  $(document).on("click", "#btn-cancel", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();

    location.reload();
  });

  // Save button in #modal-form
  $(document).on("click", "#save-btn", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const tableName = $("#modal-form").attr("data-table");
    const blockName = $("#modal-form").attr("data-block");
    if (blockName === "work-address") checkCanMailOrCall();

    let submittedData = $("#modal-form").serializeArray();
    if (tableName === "NonInstHours")
      submittedData.push(addTotalHours(submittedData));

    const filteredData = submittedData.filter(
      (obj) => obj.value || obj.value === ""
    );
    saveMods(filteredData, "#modal-form", tableName);
    $("#modalBloc").modal("toggle");
  });
});
