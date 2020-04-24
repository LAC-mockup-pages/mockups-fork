//* Logic for page

import createNewRecordForm from "./add-new-record.mjs";
import validateUserInput from "./data-check.mjs";
import { getPersonnelList, sessionVariable } from "./data-server.mjs";

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
    console.log("listPers :>> ", listPers);
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
    $("#view-bloc").empty();
    $("#search-input").val("");
  });

  //* Cancel or Save
  $("#btn-cancel").click(() => {
    location.reload();
  });

  $("#btn-save").click(() => {
    location.reload();
  });
});
