//* Logic for page

import createNewRecordForm from "./add-new-record.mjs";
import validateUserInput from "./data-check.mjs";
import { getPersonnelList, sessionVariable } from "./data-server.mjs";

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

const searchPersonnel = (str) => {};

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
  $("#search-input").change(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const value = $(this).val();
    if (!/\w+$/i.test(value)) $("#search-form")[0].reset();
    console.log("value :>> ", value);
  });

  $("#search-input").keypress(function (e) {
    e.stopPropagation();
    e.preventDefault();
    let value = $(this).val();
    if (e.which === 13) {
      searchVal();
    } else {
      $(this).val((value += String.fromCharCode(e.which)));
    }
  });

  $("#search-btn").click((e) => {
    e.stopPropagation();
    e.preventDefault();
    searchVal();
  });

  //* Canceling
  $("#cancel-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    $(formId)[0].reset();
    $(formId).toggleClass("hidden");
  });
});
