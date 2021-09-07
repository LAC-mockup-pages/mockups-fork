//*=================================================
//* Actions and Logic for local page
//*=================================================

import { finalSave, initialSave } from "./components/data-save.js";
import {
  createDuplicatesTable,
  replaceTableBody
} from "./components/duplicates.js";

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

const increaseBar = (elem, tableContent) => {
  $("#bar-container").toggleClass("hidden");

  let width = 1;
  const id = setInterval(frame, 200);
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

export const createShortSaveObj = (list, agency, user) => {
  // createObject() <== helperFunctions.js
  const { First, Middle, Last, BirthDate, BeginDate } = createObject(list);
  const StudentID = createStudentID(list, agency);
  return [
    {
      AgencyID: agency,
      AuditUserID: user,
      First,
      Middle,
      Last,
      BirthDate,
      BeginDate,
      StudentID
    }
  ];
};

const setFiscalYear = (datePD) => {
  const dateEvent = new Date(datePD);
  const currentYear = dateEvent.getFullYear();
  const startFY = new Date(`07/01/${currentYear}`);
  const endYear = new Date(`12/31/${currentYear}`);
  if (dateEvent >= startFY) {
    if (dateEvent <= endYear) {
      return (currentYear + 1).toString();
    } else {
      return currentYear.toString();
    }
  } else {
    return currentYear.toString();
  }
};

// Returns an array of 2 values for Fiscal Year select from today's date
export const setFiscalYearList = () => {
  const today = DT.now();
  const systemFY = SESSION_VARIABLE[0].FiscalYear.startsWith("<%= Session")
    ? today.year.toString()
    : SESSION_VARIABLE[0].FiscalYear;
  const nextFY = setFiscalYear(today.toLocaleString());
  return [systemFY, nextFY];
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
  //employment fiscal year dropdown select
  const [value1, value2] = setFiscalYearList();
  $("#FY-select").append(`
    <option value=${value1}>${value1}</option>
    <option value=${value2}>${value2}</option>
  `);
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
    const buttonText = $("#close-button").text();
    console.log("buttonText :>> ", buttonText);
    if (buttonText.includes("continue")) {
      $("#bar-container").toggleClass("hidden");
      $("#modalBloc").modal("toggle");
      $("#begin-date").focus();
    } else {
      $("#modalBloc").modal("toggle");
      location.reload();
    }
  });

  //* Triggers search for possible duplicates after first, middle,
  //* last and DOB are entered.
  //* Event triggers when BirthDate loses focus.
  $("#birthdate").focusout((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const first = $("#first-name").val();
    const last = $("#last-name").val();
    const dateOfBirth = $("#birthdate").val();
    $("#duplicates-table").empty();
    const table = createDuplicatesTable(first, last, dateOfBirth);
    $("#modalBloc").modal("toggle");
    const element = $("#load-bar");
    // $("#bar-container").toggleClass("hidden");
    increaseBar(element, table);
  });

  //* Creates additional select element when the primary element
  //* has a value. The new option list only includes the values not
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
  $(document).on("change", ".barriers-form select[name='yes-no']", (evnt) => {
    evnt.preventDefault();
    const barrierSelection = $(".barriers-form")
      .serializeArray()
      .filter((objBarriers) => objBarriers.name === "Barriers")
      .map((item) => item.value);
    const updatedDdlBarriers = ddlBarriers.filter(
      (obj) => !barrierSelection.includes(obj.key)
    );

    // Activate save-button
    $("#save-button").removeAttr("disabled");

    // Checks if there is at least 1 value left in the barriers list
    if (updatedDdlBarriers.length < 1) return;

    const newOptionList = createOptionList(updatedDdlBarriers);
    const newBarrierSelect = `
    <div class="container-fluid row">
          <div class="col-sm-6">
            <div class="input-field form-group barrier-group">
              <label for="Barriers"></label>
              <select class="modal-select" name="Barriers">
                <option value>Select a value</option>
                ${newOptionList}
              </select>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="input-field form-group">
              <select class="modal-select medium-input" name="yes-no">
              <option value>Select a value</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
              </select>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>`;
    $(".barriers-form").append(newBarrierSelect);
    $(".barriers-form select[name='Barriers']:last-of-type").focus();
  });

  //* Triggers initial data save when BeginDate is entered.
  //* Creates StudentID and Student_PKID.
  $("#address").focusin((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const agency = SESSION_VARIABLE[0].AgencyID.startsWith("<%= Session")
      ? "PRA"
      : SESSION_VARIABLE[0].AgencyID;
    const user = SESSION_VARIABLE[0].AuditUserID.startsWith("<%= Session")
      ? "0000001"
      : SESSION_VARIABLE[0].AuditUserID;

    const dataList = $(".id-form")
      .serializeArray()
      .filter((item) =>
        ["First", "Middle", "Last", "BirthDate", "BeginDate"].includes(
          item.name
        )
      );
    const shortSaveObj = createShortSaveObj(dataList, agency, user);
    // const studentID = shortSaveObj[0].StudentID;
    const studentID = "AdamsAlbertPRA2252017111981";
    // console.log("shortSaveObj :>> ", shortSaveObj);
    const duplicatesList = JSON.parse(
      $("#duplicates-table").attr("data-duplicates")
    );
    const exactDuplicate = duplicatesList
      ? duplicatesList.find((student) => student.StudentID === studentID)
      : "";
    if (exactDuplicate) {
      // alert("There is an exact duplicate");
      const newTableBody = `<tbody>${replaceTableBody(exactDuplicate)}</tbody>`;
      $("#duplicates-table tbody").replaceWith(newTableBody);
      // Enables customized tooltips
      $("[data-toggle='tooltip']").tooltip();
      $("#bar-container").toggleClass("hidden");
      $(".modal-title").text("This student already exists in the database.");
      $("#close-button").text("Close and enter another student");
      $("#modalBloc").modal("toggle");
    } else {
      console.log("No exact duplicate found!");
      const response = initialSave(shortSaveObj);
      const studentPKID = response[0].ID;
      $(".hero").attr("data-studentpkid", studentPKID);
      $(".hero").attr("data-studentid", studentID);
    }
  });

  //* Triggers final save after all entries are done
  $("#save-button").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();

    finalSave();
  });
});
