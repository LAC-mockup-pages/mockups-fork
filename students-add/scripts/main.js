//*=================================================
//* Actions and Logic for local page
//*=================================================

import { createDuplicatesTable } from "./components/duplicates.js";
import { createOptionList } from "./components/utilities.js";

const increaseBar = (elem, tableContent) => {
  let width = 1;
  const id = setInterval(frame, 300);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      $("#bar-container").toggleClass("hidden");
      $("#duplicates-table").append(tableContent);

      // Enables customized tooltips
      $("[data-toggle='tooltip']").tooltip();
    } else {
      width += Math.floor(Math.random() * 10 + 1);
      elem.width(`${width}%`);
    }
  }
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* At first rendering
  //* =====================================

  //* Send focus on first name input
  $("#first-name").focus();

  //* Add option list for states dropdown select, with NY as default.
  const optionStates = createOptionList(DDL_STATES);
  $("#state-select").append(optionStates);

  //* =====================================
  //* Removes hidden class and table on closing modal
  $("#close-button").click(() => {
    $("#bar-container").toggleClass("hidden");
    $("#duplicates-table").empty();
    $("#modalBloc").modal("toggle");
  });

  //* Triggers search for possible duplicates after first, middle,
  //* last and DOB are entered
  $("#birthdate").focusout((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const first = $("#first-name").val();
    const last = $("#last-name").val();
    const dateOfBirth = $("#birthdate").val();
    const table = createDuplicatesTable(first, last, dateOfBirth);
    $("#modalBloc").modal("toggle");
    const element = $("#load-bar");
    $("#bar-container").removeClass("hidden");
    increaseBar(element, table);
  });
});
