//*=================================================
//* Actions and Logic for local page
//*=================================================

import { createDuplicatesTable } from "./components/duplicates.js";

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

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

const createOptionList = (dataObj, defaultValue) => {
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

export const transformDate = (strDate) => {
  const dateObj = DT.fromFormat(strDate, "LL/dd/yyyy");
  return dateObj.toFormat("dLyyyy");
};

export const createStudentID = (list, agency) => {
  // createObject() <== helperFunctions.js
  const dataObj = createObject(list);
  const { First, Last, BeginDate, BirthDate } = dataObj;
  const fullName = `${Last}${First}`.replace(/\W/g, "");
  return `${fullName}${agency.toUpperCase()}${transformDate(
    BeginDate
  )}${transformDate(BirthDate)}`;
};

export const createShortSaveObj = (list, agency) => {
  // createObject() <== helperFunctions.js
  const { First, Middle, Last, BirthDate, BeginDate } = createObject(list);
  const StudentID = createStudentID(list, agency);
  return [{ StudentID, First, Middle, Last, BirthDate, BeginDate }];
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================

  //* Set focus on first name input
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
  $(".race-select select").append(optionRace);
  // education background.
  // Covers Highest Grade in US and Other Countries
  const optionGrade = createOptionList(ddlHighestGradeCompletedUS);
  $("#usgrade-select, #nysgrade-select").append(optionGrade);
  // barriers dropdown select
  const optionBarriers = createOptionList(ddlBarriers);
  $(".barrier-group select[name='Barriers']").append(optionBarriers);

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

  //* Creates additional select element when the primary element
  //* has a value. The option list shows all values except those
  //* already selected.

  // Race selection
  $(document).on("change", ".race-select > select:last-of-type", (evnt) => {
    evnt.preventDefault();
    const raceSelection = $(".ethnicity-form")
      .serializeArray()
      .filter((objRace) => objRace.name === "RaceID")
      .map((item) => item.value);
    const updatedDdlRace = ddlRace.filter(
      (obj) => !raceSelection.includes(obj.objKey)
    );
    if (updatedDdlRace.length < 1) return;
    const newRaceSelect = `
    <label></label>
    <select class="modal-select" name="RaceID">
      <option value>Select a value</option>
      ${createOptionList(updatedDdlRace)}
    </select>`;
    $(".race-select").append(newRaceSelect);
    $(".race-select > select:last-of-type").focus();
  });

  // Barriers selection
  $(document).on("change", "#barriers-form select[name='yes-no']", (evnt) => {
    evnt.preventDefault();
    const barrierSelection = $("#barriers-form")
      .serializeArray()
      .filter((objBarriers) => objBarriers.name === "Barriers")
      .map((item) => item.value);
    const updatedDdlBarriers = ddlBarriers.filter(
      (obj) => !barrierSelection.includes(obj.key)
    );
    if (updatedDdlBarriers.length < 1) return;
    const newBarrierSelect = `
    <div class="input-field form-group barrier-group">
    <label></label>
    <select class="modal-select" name="Barriers">
      <option value>Select a value</option>
      ${createOptionList(updatedDdlBarriers)}
    </select><span>
    <label for="yes-no"></label>
    <select class="modal-select" name="yes-no">
      <option value="">Select a value</option>
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>
  </span>
  </div>`;
    $("#barriers-form").append(newBarrierSelect);
    $("#barriers-form select[name='Barriers']:last-of-type").focus();
  });
});
