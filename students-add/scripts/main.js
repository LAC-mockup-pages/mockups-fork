//*=================================================
//* Actions and Logic for local page
//*=================================================

import {
  finalCheck,
  flagEmptyRequired,
  initialCheck
} from "./components/data-check.js";
import { finalSave, getRequired, initialSave } from "./components/data-save.js";
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

const formatSSNWithDashes = (ssn) => {
  // remove all non-dash and non-numerals
  let val = ssn.replace(/[^\d-]/g, "");
  // add the first dash if number from the second group appear
  val = val.replace(/^(\d{3})-?(\d{1,2})/, "$1-$2");
  // add the second dash if numbers from the third group appear
  val = val.replace(/^(\d{3})-?(\d{2})-?(\d{1,4})/, "$1-$2-$3");
  // remove misplaced dashes
  val = val
    .split("")
    .filter((val, idx) => {
      return val !== "-" || idx === 3 || idx === 6;
    })
    .join("");
  // enforce max length
  return val.substring(0, 11);
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
  const dateObj = DT.fromFormat(strDate, "yyyy-LL-dd");
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
  //! =====================================
  //! For Development only.
  //! In Production, replace profileUrl value with URL of .aspx
  //! student Profile page.
  //! =====================================

  const profileUrl = "http://localhost:5500/students-profile/index.html";

  //! =====================================

  const redirectToProfile = (studentPkId) => {
    const targetUrl = `${profileUrl}?stid=${studentPkId}`;
    window.location.assign(targetUrl);
  };

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
    const table = createDuplicatesTable(first, last, dateOfBirth);
    if (!table) return;
    $("#duplicates-table").empty();
    $("#modalBloc").modal("toggle");
    const element = $("#load-bar");
    // $("#bar-container").toggleClass("hidden");
    increaseBar(element, table);
  });

  //* Creates additional select element when the primary element
  //* has a value. The new option list only includes the values not
  //* already selected.

  // Race selection
  // $(document).on("change", ".race-select > select:last-of-type", (evnt) => {
  $(document).on("blur", ".race-select > select:last-of-type", function (evnt) {
    evnt.preventDefault();
    const raceSelection = $(".ethnicity-form")
      .serializeArray()
      .filter((objRace) => objRace.name === "RaceID")
      .map((item) => item.value);
    const updatedDdlRace = ddlRace.filter(
      (obj) => !raceSelection.includes(obj.objKey)
    );
    // Allows to jump to next input field without generation a new RaceID select
    // element
    if (!$(this).val()) return;
    // Jump to next input field if the RaceId list is empty
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
  $(document).on(
    "blur",
    ".barriers-form select[name='yes-no']",
    function (evnt) {
      evnt.preventDefault();
      const barrierSelection = $(".barriers-form")
        .serializeArray()
        .filter((objBarriers) => objBarriers.name === "Barriers")
        .map((item) => item.value);
      const updatedDdlBarriers = ddlBarriers.filter(
        (obj) => !barrierSelection.includes(obj.key)
      );
      // Checking if any required field is empty, except in id-form.
      // Fields in id-form have already been checked at initial save stage.
      finalCheck();
      // Allows to jump to next input field without generation a new RaceID select
      // element
      if (!$(this).val()) return;

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
    }
  );

  //* Triggers initial data save when BeginDate is entered.
  //* Creates StudentID and Student_PKID.
  $("#address").focusin((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    // Avoiding going through initial save again
    if ($(".hero").attr("data-studentpkid")) return;

    const dataList = $(".id-form")
      .serializeArray()
      .filter((item) =>
        ["First", "Middle", "Last", "BirthDate", "BeginDate"].includes(
          item.name
        )
      );
    const emptyValuesFound = initialCheck(dataList);
    if (emptyValuesFound) {
      flagEmptyRequired(emptyValuesFound);
    } else {
      const { AgencyID, AuditUserID } = createCredentials();

      // Toggling disabled prop forms
      $(".id-form input").prop("disabled", true);
      $("form:not(.id-form) :input").prop("disabled", false);

      const shortSaveObj = createShortSaveObj(dataList, AgencyID, AuditUserID);
      const studentID = shortSaveObj[0].StudentID;
      // const studentID = "AdamsAlbertPRA2252017111981";
      console.log("shortSaveObj :>> ", shortSaveObj);
      const duplicatesList = JSON.parse(
        $("#duplicates-table").attr("data-duplicates")
      );
      const exactDuplicate = duplicatesList
        ? duplicatesList.find((student) => student.StudentID === studentID)
        : "";
      if (exactDuplicate) {
        const newTableBody = `<tbody>${replaceTableBody(
          exactDuplicate
        )}</tbody>`;
        $("#duplicates-table tbody").replaceWith(newTableBody);
        // Enables customized tooltips
        $("[data-toggle='tooltip']").tooltip();
        $("#bar-container").toggleClass("hidden");
        $(".modal-title").text("This student already exists in the database.");
        $("#close-button").text("Close and enter another student");
        $("#modalBloc").modal("toggle");
      } else {
        const response = initialSave(shortSaveObj);
        const studentPKID = response[0].ID;
        $(".hero").attr("data-studentpkid", studentPKID);
        $(".hero").attr("data-studentid", studentID);
      }
    }
  });

  //* SSN and phone numbers dynamic formating
  // SSN
  $("#SSN").keyup(function (evnt) {
    evnt.stopPropagation();
    $(this).val(formatSSNWithDashes($(this).val()));
  });
  // Phone numbers
  $("#home-phone, #mobile-phone, #emergency-phone").keyup(function (evnt) {
    evnt.stopPropagation();
    $(this).val(formatPhoneWithDashes($(this).val()));
  });

  //* Redirect user to the selected student Profile page
  //* when the table row is clicked.
  $(document).on("click", "#duplicates-table tbody tr", function (evnt) {
    evnt.preventDefault();
    const selectedId = $(this).attr("id");
    redirectToProfile(selectedId);
  });

  //* Triggers final save after all entries are done
  $("#save-button").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();

    finalSave();
    const selectedId = $(".hero").attr("data-studentpkid");
    redirectToProfile(selectedId);
  });

  //* TEST BUTTON ACTION
  // Toggling disabled prop in forms
  // let flag = true;
  // $("#test-button").click(function (evnt) {
  //   evnt.stopPropagation();
  //   console.log("first flag :>> ", flag);
  //   const formSelector = "form:not(.id-form)";
  //   $(".id-form input").prop("disabled", flag);
  //   $(`${formSelector} input, select`).prop("disabled", !flag);

  //   flag = flag ? false : true;
  //   console.log("end flag :>> ", flag);
  //   console.log("Required list: >>", getRequired(formSelector));
  // });

  // For test purposes.
  const formSelector = "form:not(.id-form)";
  $(`${formSelector} :input`).prop("disabled", false);
  $(".barrier-group select[name='Barriers']").focus();

  // $("#test-button").click(function (evnt) {
  //   evnt.stopPropagation();

  //   finalCheck();
  // });
});
