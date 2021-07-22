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

const createStaffList = (list) => {
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

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================

  //* Send focus on first name input
  $("#first-name").focus();

  //* Add option list for:
  // states dropdown select, with NY as default.
  const optionStates = createOptionList(DDL_STATES, "NY");
  $("#state-select").append(optionStates);
  // staff dropdown select
  const optionStaff = createOptionList(createStaffList(GetStaff));
  $("#nossn-select").append(optionStaff);
  //TODO employment fiscal year dropdown select

  // race dropdown select
  const optionRace = createOptionList(ddlRace);
  $("#race-select").append(optionRace);
  // education background.
  // Covers Highest Grade in US and Other Countries
  const optionGrade = createOptionList(ddlHighestGradeCompletedUS);
  $("#usgrade-select, #nysgrade-select").append(optionGrade);
  // barriers dropdown select
  const optionBarriers = createOptionList(ddlBarriers);
  $("#barrier-select").append(optionBarriers);

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
