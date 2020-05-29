//* Logic for page

import createNewRecordForm from "./components/AddNewRecord.mjs";
import validateUserInput from "./data-check.mjs";
import {
  getPersonnel,
  getPersonnelList,
  sessionVariable,
  statesUSA,
} from "./data-server.mjs";
import personView from "./components/PersonInfo.mjs";
import { historyView, createFormAddHistory } from "./components/History.mjs";
import proDevView from "./components/ProDev.mjs";
import instructionalHoursView from "./components/InstHours.mjs";
import {
  nonInstrHoursView,
  createFormAddNonIntructionalHours,
  handleChangeNonInstHours,
  addTotalHours,
} from "./components/NonInstrHours.mjs";
import {
  homeAddress,
  workAddress,
  createModalFormAddress,
} from "./components/Address.mjs";
import addInfoView from "./components/AdditionalInfo.mjs";
import commentsView from "./components/Comments.mjs";
import contactsView from "./components/Contacts.mjs";

const labelObj = {
  PersLast: "Last Name",
  PersFirst: "First Name",
  PersonnelID: "Personnel ID",
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

// argsObj =
export const elementSelectWithLabel = (argsObj) => {
  let firstOption = "<option disabled>Select an option</option>";
  const {
    hashTable,
    keyValue,
    selectedValue,
    labelVal,
    labelClassVal,
    option,
  } = argsObj;
  const [primary, secondary] = Object.keys(hashTable[0]);
  let optionList = hashTable
    .map((item) => {
      const selected =
        item[primary].toString() === selectedValue ? "selected" : "";
      return `<option value="${item[primary]}" ${selected}>
          ${item[secondary]}</option>`;
    })
    .join("");

  if (!selectedValue) {
    firstOption = "<option selected disabled>Select an option</option>";
  }

  const elementSelect = `<div class= "input-field form-group">
  <label for="${keyValue}" ${labelClassVal}>${labelVal}</label>
  <select id="${
    keyValue + "-view"
  }" class="modal-select" name="${keyValue}" ${option}>${firstOption}${optionList}</select>
</div>`;

  return elementSelect;
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
      "Notes and Comments",
    ].includes(title)
  ) {
    headerButton = `<button type='button' class="btn btn-default add-record-btn col-sm-2" ${formName}>Add</button>`;
  } else if (
    ["Personnel Information", "Additional Information"].includes(title)
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
const saveMods = (dataObj, form, table = "") => {
  const { AgencyID, AuditUserID } = sessionVariable;
  const result = { AgencyID, AuditUserID };

  // validateUserInput() <== data-check.js
  if (!validateUserInput(dataObj)) $(form)[0].reset();
  for (let field of dataObj) {
    if (field.name === "AgencyID") field.value = sessionVariable.AgencyID;

    // dateFormat() <== helperFunction.js
    if (field.name === "PersStartDate") field.value = dateFormat(field.value);

    if (field.name === "lengthstay") {
      const startDate = dataObj.filter(
        (item) => item.name === "PersStartDate"
      )[0].value;
      field.value = yearsOfExperience(startDate);
    }
    result[field.name] = field.value;
  }

  const target = table ? table : form;

  const resultList = [target, JSON.stringify(result)];
  console.table(result);
  //! =================================================
  //! JSON Object to send back to database
  console.log("result :", resultList);
  //! =================================================

  //ToDO Reloading/resetting with new data
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

// Default modal-form

const defaultModal = (nameForm) => {
  return [nameForm, `<div><h3>Default modal for ${nameForm}</h3></div>`];
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
  $("#new-personnel").append(createNewRecordForm());

  //* Adding a new team member
  $("#add-new-member").click(function (e) {
    e.stopPropagation();
    $("#new-personnel").toggleClass("hidden");
  });

  $("#submit-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    saveMods(formId);
    $(formId)[0].reset();
    $(formId).toggleClass("hidden");
  });

  // Creates default PersPersonnelID after position is selected
  // Can be changed manually
  $("#PersPositionID").on("focusout", function (evnt) {
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
  $("#search-input").keyup(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const value = $(this).val();
    const listPers = searchPersonnel(value);
    viewPersonnelList(listPers);
  });

  $("#search-input").keypress(function (e) {
    e.stopPropagation();
    e.preventDefault();
    let value = $(this).val();
    let listPers = {};
    if (e.which === 13) {
      listPers = searchPersonnel(value);
    } else {
      $(this).val((value += String.fromCharCode(e.which)));
    }
  });

  $("#search-btn").click((e) => {
    e.stopPropagation();
    e.preventDefault();
    const listPers = searchPersonnel(value);
  });

  //* New personnel cancel button
  $("#cancel-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    $(formId)[0].reset();
    $(formId).toggleClass("hidden");
  });

  //* Select personnel in short list
  $("#view-bloc").on("click", ".row-data", function (e) {
    e.stopPropagation();
    e.preventDefault();
    const rowID = Number($(this).attr("id"));

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
    <div class="container row personView" id=${rowID}>
      <div class="row">
        ${personInfoBloc}
        <div class="bloc-history-proDev col-md-7" id='${rowID}-history'>
          <div class="bloc-history">${historyBloc}</div>
          <div class="bloc-proDev">${proDevBloc}</div>
        </div>
      </div>

      <div class="bloc-hours container row">
          <div class="bloc-instr-hours col-md-5">${instructionalHoursBloc}</div>
          <div class="bloc-nonInstrHours col-md-7">${nonInstrHoursBloc}</div>
      </div>
      <div class="container row bloc-address">
          <div class="bloc-home col-md-6">${homeAddressBloc}</div>
          <div class="bloc-work col-md-6">${workAddressBloc}</div>
      </div>
      <div class="container-fluid bloc-additionalInfo">
        ${addInfoBloc}
      </div>
      <div class="container row bloc-comments-contacts">
        ${commentsBloc}
        ${contactsBloc}
      </div>

    </div>`);

    // Add a new record from modal
    $(".add-record-btn").bind("click", function (evnt) {
      evnt.stopPropagation();
      const formName = $(this).attr("form");

      console.log("formName with ADD:>> ", formName);

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
        default:
          addForm = defaultModal("no-table-defined-yet");
          break;
      }

      $("#modalBloc").modal("toggle");
      $("#modal-form")
        .empty()
        .append(addForm[1])
        .attr("data-table", addForm[0]);

      if (formName === "non-instructional-hours") handleChangeNonInstHours();
    });

    $(".save-record-btn").bind("click", function (evnt) {
      const formName = `#${$(this).attr("form")}`;

      console.log("formName with SAVE:>> ", formName);

      const submittedData = $(formName).serializeArray();
      saveMods(submittedData, formName);
    });
  });

  //* Cancel or Save
  // Main Cancel button
  $("#btn-cancel").click((evnt) => {
    evnt.preventDefault();
    evnt.stopPropagation();

    location.reload();
  });

  // Save button in #modal-form
  $("#save-btn").on("click", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();

    let submittedData = $("#modal-form").serializeArray();

    const tableName = $("#modal-form").attr("data-table");
    if (tableName === "NonInstHours")
      submittedData.push(addTotalHours(submittedData));

    const filteredData = submittedData.filter((obj) => obj.value);
    console.log("submittedData :>> ", submittedData);
    console.log("filteredData :>> ", filteredData);
    saveMods(filteredData, "#modal-form", tableName);
    $("#modalBloc").modal("toggle");
  });

  $("#btn-save").click((evnt) => {
    evnt.preventDefault();
    evnt.stopPropagation();

    location.reload();
  });
});
