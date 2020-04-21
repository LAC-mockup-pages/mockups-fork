//* Logic for page

import createNewRecordForm from "./add-new-record.mjs";
import validateUserInput from "./data-check.mjs";
import { sessionVariable } from "./data-server.mjs";
const submittedData = [
  {
    name: "AgencyID",
    value: "PRA",
  },
  {
    name: "PersPersonnelID",
    value: "",
  },
  {
    name: "PersFirst",
    value: "Paris",
  },
  {
    name: "PersLast",
    value: "Hilton",
  },
  {
    name: "PersStartDate",
    value: "1/1/2020",
  },
  {
    name: "lengthstay",
    value: "",
  },
  {
    name: "PersPositionID",
    value: "1",
  },
  {
    name: "PersSubject",
    value: "BE",
  },
  {
    name: "PersPayStatus",
    value: "V",
  },
  {
    name: "PersTimeStatus",
    value: "P",
  },
  {
    name: "PersExpYears",
    value: "2",
  },
];
// Used for new personnel
const saveMods = (form) => {
  const result = {};
  // const submittedData = $(form).serializeArray();

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
      field.value = moment(startDate, "MM/DD/YYYY")
        .fromNow()
        .replace(" ago", "");
    }
    result[field.name] = field.value;
  }

  //! =================================================
  //! JSON Object to send back to database
  console.log("result :", JSON.stringify(result));
  //! =================================================

  //ToDO Reloading/resetting with new data
};

// ======================================================

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

  //* Canceling
  $("#cancel-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    $(formId)[0].reset();
    $(formId).toggleClass("hidden");
  });
});
