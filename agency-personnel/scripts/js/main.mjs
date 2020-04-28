//* Logic for page

import createNewRecordForm from "./add-new-record.mjs";
import validateUserInput from "./data-check.mjs";
import { getPersonnelList, sessionVariable } from "./data-server.mjs";
import personView from "./personnelView.mjs";
import historyView from "./personnelHistory.mjs";

const labelObj = {
  PersLast: "Last Name",
  PersFirst: "First Name",
  PersonnelID: "Personnel ID",
};

const yearsOfExperience = (strDate) => {
  const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365;
  const numberYears = Math.round(
    (Date.now() - Date.parse(strDate)) / yearInMilliseconds
  ).toString();
  return numberYears;
};

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
  <select id="${keyValue}" class="modal-select" name="${keyValue}" ${option}>${firstOption}${optionList}</select>
</div>`;

  return elementSelect;
};

// Add button, title and headers
export const topBanner = (title, list = null) => {
  let headerLine = "";
  const formName = `form="${title.toLowerCase().replace(/\W/gi, "-")}"`;
  const addButton = [
    "Professional Development",
    "Instructional Hours",
    "Notes and Comments",
  ].includes(title)
    ? ""
    : `<button type='button' class="btn btn-default add-record-btn col-sm-2" ${formName}>Add</button>`;

  if (list) {
    headerLine +=
      "<div class='container-fluid row sub-header-labels blue-light-bg blue-text'>";
    for (const item of list) {
      const cellName = item[0].toLowerCase().replace(/\W/gi, "-");
      const blockName = title.toLowerCase().replace(/\W/gi, "-");
      headerLine += ` <div class='bloc-${blockName}-${cellName} ${item[1]}'>${item[0]}</div>`;
    }
    headerLine += "</div>";
  }
  return `
  <div class='sub-header blue-bg blue-light-text'>
    <div class="container-fluid row">
      ${addButton}
      <div class='sub-header-title'>${title}</div>
    </div>
    ${headerLine}
  </div>
  `;
};

// Returns a table body with hidden cells
export const tableBody = (dataList, block, hiddenList) => {
  console.log("dataList :>> ", dataList);
  const rows = dataList
    .map((record, indx) => {
      let cells = "";
      const keyList = Object.keys(record);
      for (const key of keyList) {
        let optionHidden = "";

        console.log("hiddenList :>> ", hiddenList);
        if (hiddenList.includes(key)) optionHidden = "hidden";
        cells += `<td class="cell-data ${optionHidden}">${record[key]}</td>`;
      }
      return `<tr id="${block}-${indx}">${cells}</tr>`;
    })
    .join("");

  return `<div class="${block}-table">
  <table class="table">
    <tbody class='${block}-body'>${rows}</tbody>
</table></div>`;
};

// Used for new personnel
const saveMods = (form) => {
  const result = {};
  const submittedData = $(form).serializeArray();

  // validateUserInput() <== data-check.js
  if (!validateUserInput(submittedData)) $(form)[0].reset();
  for (let field of submittedData) {
    if (field.name === "AgencyID") field.value = sessionVariable.AgencyID;

    // dateFormat() <== helperFunction.js
    if (field.name === "PersStartDate") field.value = dateFormat(field.value);

    if (field.name === "lengthstay") {
      const startDate = submittedData.filter(
        (item) => item.name === "PersStartDate"
      )[0].value;
      field.value = yearsOfExperience(startDate);
    }
    result[field.name] = field.value;
  }

  //! =================================================
  //! JSON Object to send back to database
  console.log("result :", JSON.stringify(result));
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

    // Adding blocs
    $(".personnel-entry").toggleClass("hidden");
    $(".personnel-search").toggleClass("hidden");

    const personInfoBloc = personView(rowID);
    const historyBloc = historyView();
    const proDevView = `<h3>Prof Dev View</h3>`;

    $(".hero").append(`<div class="container row personView" id=${rowID}>
      ${personInfoBloc}
      <div class="bloc-history-proDev col-md-7" id='${rowID}-history'>
        <div class="bloc-history">${historyBloc}</div>
        <div class="bloc-proDev">${proDevView}</div>
      </div>
    </div>`);
  });

  //* Cancel or Save
  $("#btn-cancel").click(() => {
    location.reload();
  });

  $("#btn-save").click(() => {
    location.reload();
  });
});
