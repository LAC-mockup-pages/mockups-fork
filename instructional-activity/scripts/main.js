//* Actions and logic

//Data files
export let courseList = GetCourse.slice(0);
export let instructorList = GetInstructor.slice(0);

// Imports
import { createNewRecordForm } from "./components/AddNewRecord.js";
import {
  createFilterBloc,
  createShortList,
  createSecondarySelect
} from "./components/FilterBloc.js";
import { createDetailsView } from "./components/details/DetailsView.js";
import {
  createModalForm,
  addClassIdAndDescription
} from "./components/ModalForm.js";
import {
  addInstructor,
  editInstructor
} from "./components/details/Instructors.js";
import { addSpecialProgram } from "./components/details/Recommended.js";
import { saveSchedule } from "./components/details/Schedule.js";
import { saveFundingSources } from "./components/details/FundingSources.js";
import { createEnrollmentView } from "./components/enrollment/EnrollmentView.js";
import { cellFocus, createHoursView } from "./components/hours/HoursView.js";
import {
  addStudentModalForm,
  completeNewStudent,
  createStudentDataList
} from "./components/enrollment/AddStudent.js";
import { editStudent } from "./components/enrollment/EnrollmentStudents.js";
import { updateTotal } from "./components/hours/StudentHours.js";
import { createDailyHours } from "./components/hours/DailyHours.js";

// Main elements
export const rowLabels = [
  {
    ID: "ID",
    CourseID: "Course Name",
    ClassID: "Instruction Code",
    InstructionDescription: "Description",
    StartDate: "Start",
    EndDate: "End",
    FY: "Fiscal Year",
    ClassType: "Type",
    InstructorID: "Instructor",
    UpperLevel: "Level",
    SiteName: "Site Name",
    Format: "Format"
  }
];

export const setFiscalYear = (datePD) => {
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

export const setDefaultDate = () => {
  let firstDay = "07/01";
  let lastDay = "06/30";
  const fiscalYear = Number(setFiscalYear(Date.now()));
  firstDay += `/${(fiscalYear - 1).toString()}`;
  lastDay += `/${fiscalYear.toString()}`;
  return [firstDay, lastDay];
};

// Creates header with optional button, optional column headers
// (from list parameter). 1st param is bloc title.
// list = [["column name 1", "col-sm-2"],...] the width is in Grid
// Bootstrap format.
export const topBanner = (title, list = null) => {
  let headerLine = "";
  const blockName = title.toLowerCase().replace(/\W/gi, "-");

  // Sets the blocs displaying a button.
  const buttonList = [
    // { title: "Funding", btnText: "Save", btnClass: "save-record-btn" },
    // { title: "Schedule", btnText: "Save", btnClass: "save-record-btn" },
    { title: "Instructors", btnText: "Add", btnClass: "add-record-btn" },
    { title: "Special Program", btnText: "Add", btnClass: "add-record-btn" }
  ];
  const formName = `form="${blockName}"`;
  let headerButton = "";

  const filteredButtonList = buttonList.filter((item) => item.title === title);
  if (filteredButtonList.length > 0) {
    const { btnText, btnClass } = filteredButtonList[0];
    headerButton = `<button type='button' class="btn btn-default ${btnClass} col-sm-2" ${formName}>${btnText}</button>`;
  }

  if (list) {
    headerLine +=
      "<div class='container-fluid row sub-header-labels blue-light-bg blue-text'>";
    for (const item of list) {
      const cellName = item[0].toLowerCase().replace(/\W/gi, "-");
      headerLine += `<div class='bloc-${blockName}-${cellName} ${item[1]}'>${item[0]}</div>`;
    }
    headerLine += "</div>";
  }
  return `
  <div class='sub-header blue-bg blue-light-text'>
    <div class="container-fluid row sub-header-bloc">
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
  labelObj = {},
  tableName = ""
) => {
  block = block.toLowerCase().replace(/\W/gi, "-");

  const rows = dataList
    .map((record, indx) => {
      let cells = "";
      const tableData = tableName ? `data-table=${tableName}` : "";
      const trID = record.ID ? record.ID : `${block}-${index}`;
      for (const key in record) {
        if (key === "ID") continue;
        const optionHidden = hiddenList.includes(key) ? " hidden" : "";
        const label = labelObj[key] ? `data-label='${labelObj[key]}'` : "";

        cells += `<td class="cell-data${optionHidden} ${key}"
                  data-field=${key} ${label}>${record[key]}</td>`;
      }

      return `<tr id=${trID} ${tableData} data-toggle="tooltip"
                data-placement="right" data-original-title="Click to Edit">
                ${cells}
              </tr>`;
    })
    .join("");
  return `<div class="${block}-table">
            <table class="table table-bordered">
              <tbody class='${block}-body'>${rows}</tbody>
            </table>
          </div>`;
};

const createTableHeader = (labelsObject) => {
  const {
    CourseID,
    StartDate,
    EndDate,
    ClassType,
    SiteName,
    InstructorID,
    Format
  } = labelsObject;
  const list = [
    CourseID,
    StartDate,
    EndDate,
    ClassType,
    SiteName,
    InstructorID,
    Format
  ];

  // createHeaders() <== helperFunctions.js
  return createHeaders(list);
};

const createTableBody = (dataList, labelObj) => {
  let rows = "";
  const hiddenList = ["ID"];
  const labelList = [
    "ID",
    "CourseID",
    "StartDate",
    "EndDate",
    "ClassType",
    "SiteName",
    "InstructorID",
    "Format"
  ];

  for (const record of dataList) {
    // createRow() <== helperFunction.js
    rows += createRow({
      record,
      labelList,
      labelObj,
      hiddenList
    });
  }

  return `<tbody>${rows}</tbody>`;
};

export const createViewBloc = (dataList) => {
  const tableHeader = createTableHeader(rowLabels[0]);

  // Sorting list of records  by descending ID
  const list = dataList.sort((record1, record2) => record2.ID - record1.ID);
  const tableBody = createTableBody(list, rowLabels[0]);
  // const viewBloc = tableHeader + tableBody;

  return `
  <table class="table">${tableHeader}${tableBody}</table>`;
};

export const getRequired = () => {
  const list = $("#new-entry input, select").get();
  const requiredList = list
    .filter((item) => $(item).prop("required"))
    .map((item) => $(item).attr("id"));

  return requiredList;
};

const saveMods = (fields, formName, tableName = "", requiredList = []) => {
  const { AgencyID, AuditUserID, FiscalYear } = SESSION_VARIABLE[0];
  let result = { AgencyID, AuditUserID };
  $(`${formName} input, select`).removeClass("yellow-bg");
  const fieldList = fields.slice(0);

  // Data validation
  // validateRecord() <== data-check.js
  // const validatedList = validateRecord(fieldList, requiredList);

  // Background color change for invalid field values
  // const checkFlag = validatedList.some((item) => !item.correct);
  //! =================================================
  //! Temporary bypassing data validation
  //! =================================================

  const checkFlag = false;

  if (checkFlag) {
    const list = validatedList.filter((obj) => obj.correct === false);
    for (let field of list) {
      let fieldId =
        formName === "#new-entry" ? `#${field.name}` : `#${field.name}-view`;
      $(fieldId).addClass("yellow-bg");
    }
    return;
  } else {
    for (const field of fieldList) {
      let val = field.value;
      let name = field.name;
      result[name] = val;
    }
    const target = tableName ? tableName : "No table name";
    const resultList = [formName, target, JSON.stringify(result)];
    console.table(result);
    //! =================================================
    //! JSON Object to send back to database
    console.log("resultList :", resultList);
    console.log("result :", result);
    //! =================================================

    //ToDO Reloading/resetting with new data

    if (formName === "#edit-form") $("#modalBloc").modal("toggle");
    if (formName === "#new-entry") {
      const resetList = requiredList.map((field) => `#${field}`).join(", ");
      $(formName)[0].reset();
      $(resetList).toggleClass("dark-text").prop("required", true);

      //! =================================================
      //! Response from POST request is used to display the
      //! Details page and add other required and optional
      //! data.
      //! =================================================
      // const response = [{ ID: "99999", ...result }];
      // return response;
    }
  }
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Selecting subnavbar tabs
  // $(document).on("click", "#sub-nav li", function (evnt) {
  //   $("#sub-nav li").removeClass("blue-light-bg blue-text");
  //   $(this).toggleClass("blue-light-bg blue-text");
  // });

  //* Back to Top button
  const btnToTop = $("#btn-top");
  $("window").scroll(() => {
    btnToTop.style.display =
      $("window").scrollTop() > 600 || $("body".scrollTop() > 600)
        ? "inline-block"
        : "none";
  });
  btnToTop.click((e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  //* Data viewing
  $("#new-entry").append(createNewRecordForm());
  $("#filter-bloc").append(createFilterBloc());

  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

  // Add default date to date fields in #new-entry after focus out
  // Field Begin value: "07/01/<CurrentFiscalYear>"
  // Field End value: "06/30/<CurrentFiscalYear>"
  $(document).on("focusout", "#StartDate, #EndDate", function (evnt) {
    evnt.stopPropagation();
    if (!$(this).val()) {
      const [firstDay, lastDay] = setDefaultDate();
      $(this).val($(this).attr("id") === "StartDate" ? firstDay : lastDay);
    }
  });

  // Change text color from red (required) to black
  // when a value is entered
  $(document).on("focusin", getRequired(), function (evnt) {
    evnt.stopPropagation();
    $(this).toggleClass("dark-text").prop("required", false);
  });

  //* Displaying #new-entry
  $(document).on("click", ".record-entry", function (evnt) {
    evnt.stopPropagation();
    $("#new-entry").toggleClass("hidden");
    $("#CourseID").focus();
  });

  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

  //* Change event in filter bloc
  $(document).on("change", "#primary-filter-view", function (evnt) {
    evnt.stopPropagation();
    const selectedField = $(this).val();
    const selectedYear = $("#fiscal-year-select").val();
    const newSecondarySelect = createSecondarySelect(
      selectedYear,
      selectedField
    );
    if (newSecondarySelect) {
      $("#secondary-select").replaceWith(newSecondarySelect);
    }
  });

  //* Handling change for fiscal year selected
  $(document).on("change", "#fiscal-year-filter-view", function (evnt) {
    evnt.stopPropagation();

    $("#primary-filter-view").prop("selectedIndex", 0);
    $("#secondary-filter-view").prop("selectedIndex", 0);
    //defCalls_getData( RefreshInstructionType($("#fiscal-year-filter-view").val()),
    //    RefreshInstructor_FY($("#fiscal-year-filter-view").val()),
    //    RefreshFormat_FY($("#fiscal-year-filter-view").val()),
    //    RefreshCourse_FY($("#fiscal-year-filter-view").val())
    // ).done(result => {
    //courseList = GetCourse.slice(0);
    //});  //returns GetCourse
  });

  //* Applying filters
  $(document).on("click", "#filter-apply-btn", function (evnt) {
    evnt.stopPropagation();
    courseList = GetCourse.slice(0);

    const formId = "#" + $(this).attr("form");
    const filterList = $(formId).serializeArray();
    const [selectedYear, selectedCategory, selectedValue] = filterList;
    let shortList = [];

    if (selectedCategory.value) {
      if (selectedValue.value) {
        shortList = createShortList(
          selectedYear.value,
          selectedCategory.value,
          selectedValue.value
        );
      }
    } else {
      shortList = createShortList(selectedYear.value);
    }
    const tableContent = createViewBloc(shortList);
    $(".main-table").empty().append(tableContent).toggleClass("table-scroll");

    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  // Change text color from red (required) to black
  // when a value is entered
  const listOfRequired = getRequired();
  const reqString = listOfRequired.map((field) => `#${field}`).join(",");
  $(document).on("focusin", reqString, function (evnt) {
    evnt.stopPropagation();
    $(this).toggleClass("dark-text").prop("required", false);
  });

  //* Adding a new record
  $(document).on("click", "#submit-btn", function (evnt) {
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    // const year = SESSION_VARIABLE[0].FiscalYear;

    let newSource = $(formId).serializeArray();
    const start = newSource.find((record) => record.name === "StartDate");
    const year = setFiscalYear(start.value);
    console.log("year :>> ", year);
    newSource = addClassIdAndDescription(newSource, instructorList);
    newSource = [{ name: "FiscalYear", value: year }, ...newSource];
    console.log("newSource :>> ", newSource);

    const response = saveMods(newSource, formId, "GetCourse", listOfRequired);

    // Hide all children of .hero and display Details page
    // to finish entering all necessary and optional data
    createDetailsView(responseObj);
  });

  //* Canceling
  $(document).on(
    "click",
    "#cancel-btn, #event-view-cancel-btn, #filter-cancel-btn",
    function (evnt) {
      evnt.preventDefault();
      evnt.stopPropagation();
      // const formId = "#" + $(this).attr("form");
      location.reload();
      // if (formId === "#new-entry") location.reload();
      // if (formId === "#event-view-form") $(formId)[0].reset();
    }
  );

  //* Special program handling when IET is selected
  //TODO Add trigger, event handler
  // $(document).on('change',"#")

  //* Closing modal without saving
  $(document).on("click", "#close-btn", function (evnt) {
    evnt.stopPropagation();
    $("#edit-form").empty();
  });

  //* Editing bloc
  $(document).on(
    "click",
    ".field-bloc, .funding-bloc, #schedule",
    function (evnt) {
      evnt.stopPropagation();
      const formId = $(this).attr("id");
      const formName = formId.replace("-form", "");
      let editFormContent = "";

      if (formName === "funding-sources") {
        editFormContent = $(`#${formId} .funding-checkboxes`).clone();
        $(editFormContent).each(function () {
          const kidInput = $(this).find(":disabled");
          $(kidInput).prop("disabled", false).removeAttr("disabled");
        });
      } else if (formName === "schedule") {
        editFormContent = $(".schedule-table").clone();

        $(editFormContent).each(function () {
          const kidInput = $(this).find(":disabled");
          $(kidInput).prop("disabled", false).removeAttr("disabled");
        });
      } else {
        const fieldSource = $(`#${formId} .input-field`).clone();
        editFormContent = createModalForm(fieldSource);
      }
      $("#modalBloc").modal("toggle");
      $("#edit-form").empty().append(editFormContent);
      $("#edit-form").attr("data-bloc", formName);
    }
  );

  //* Clicking back to IA Course Offering view
  $(document).on("click", "#offering", function (evnt) {
    evnt.stopPropagation();
    location.reload();
  });

  //* Navigation from Enrollment view once a course has been
  //* selected in the Course Offering view shortlist.
  $(document).on(
    "click",
    "#enrollment-tab, #hours-tab, #details-tab",
    function () {
      const selectedTab = $(this).attr("id");

      // console.log("selectedTab :>> ", selectedTab);

      const selectedCourse = $("#view-bloc").data("course").toString();

      const course = GetCourse.find((record) => record.ID === selectedCourse);

      let viewToDisplay = "";
      switch (selectedTab) {
        case "enrollment-tab":
          viewToDisplay = createEnrollmentView(selectedCourse, course.ClassID);
          break;
        case "hours-tab":
          viewToDisplay = createHoursView(
            selectedCourse,
            course.ClassID,
            course.InstructorID
          );
          break;
        case "details-tab":
          // console.log("course :>> ", course);
          viewToDisplay = createDetailsView(course);
          break;
        default:
          break;
      }

      $("#view-bloc").empty().append(viewToDisplay);
      $("#sub-nav > li").removeClass("selected-tab");
      $(`#sub-nav #${selectedTab.replace("-tab", "")}`).addClass(
        "selected-tab"
      );

      // Moves focus to 1st row, column today's month - 1
      if (selectedTab === "hours-tab") cellFocus();

      // Enables customized tooltips
      $("[data-toggle='tooltip']").tooltip();
    }
  );

  //* Handling change for special program selected
  $(document).on("change", "#SpecialProgramID-view", function (evnt) {
    evnt.stopPropagation();
    const programCode = $(this).val();

    console.log("programCode :>> ", programCode);
    if (programCode === "IET") {
      $("#IET_Class_PKID-view").prop("disabled", false);
    } else {
      $("#IET_Class_PKID-view").val("");
    }
  });

  //* Saving after Editing in Modal
  $(document).on("click", "#save-btn", function (evnt) {
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    const blocName = $(formId).attr("data-bloc");
    const newSource = $(formId).serializeArray();
    const courseId = $(".course-details").attr("data-course");

    if (blocName === "add-student") {
      const completedList = completeNewStudent(newSource);
      saveMods(completedList, blocName, "GetEnrollInfo");
      $(".modal-title").replaceWith("<h4 class='modal-title'>Editing</h4>");
      $("#modalBloc").modal("toggle");
      return;
    } else if (blocName === "funding-sources") {
      const selectedFunding = newSource.map((source) => source.name).join(",");
      saveMods(
        [
          { name: "ID", value: courseId },
          { name: "FSID", value: selectedFunding }
        ],
        formId,
        blocName
      );
      return;
    } else if (blocName === "schedule") {
      // Adding course ID, week days and related boolean to newSource
      const weekDaysObj = [
        { key: "Mon", value: "Monday" },
        { key: "Tue", value: "Tuesday" },
        { key: "Wed", value: "Wednesday" },
        { key: "Thu", value: "Thursday" },
        { key: "Fri", value: "Friday" },
        { key: "Sat", value: "Saturday" },
        { key: "Sun", value: "Sunday" }
      ];
      const subset = newSource.filter((record) =>
        record.name.endsWith("StartTime")
      );
      const validDays = subset.map((record) => {
        let { name, value } = record;
        const fullDay = weekDaysObj.find(
          (record) => record.key === name.slice(0, 3)
        );
        const booleanValue = value ? "True" : "False";
        return { name: fullDay.value, value: booleanValue };
      });
      const fieldList = [
        { name: "ID", value: courseId },
        ...validDays,
        ...newSource
      ];
      saveMods(fieldList, formId, blocName);
    } else {
      let fieldList =
        blocName === "main-info"
          ? addClassIdAndDescription(newSource, instructorList)
          : newSource;

      fieldList = [{ name: "ID", value: courseId }, ...fieldList];
      saveMods(fieldList, formId, blocName);
    }
  });

  //* Editing instructor/special program
  $(document).on(
    "click",
    ".instructors-body > tr, .special-program-body > tr",
    function (evnt) {
      evnt.stopPropagation();
      const rowId = $(this).attr("id");
      console.log("rowId :>> ", rowId);
      const table = $(`#${rowId}`).attr("data-table");
      console.log("table :>> ", table);
      // const selectedRow = $(`#${rowId} td`).get();

      const formContent =
        table === "GetSpecialProgram"
          ? addSpecialProgram(rowId, table)
          : editInstructor(rowId, table);

      $("#modalBloc").modal("toggle");
      $("#edit-form").empty().append(formContent);
      $("#edit-form").attr("data-bloc", table);

      if (table === "GetClassInstructor") {
        $("#delete-btn").toggleClass("hidden");
      }
    }
  );

  //* Adding an instructor/special program
  $(document).on("click", ".add-record-btn", function (evnt) {
    evnt.stopPropagation();
    const formId = $(this).attr("form");
    let formContent = "";
    if (formId === "instructors") {
      formContent = addInstructor();
    }
    if (formId === "special-program") {
      formContent = addSpecialProgram();
    }

    $("#modalBloc").modal("toggle");
    $("#edit-form").empty().append(formContent);

    $("#edit-form").attr("data-bloc", formId);
  });

  //* Displaying selected record in Enrollment View.
  $(document).on("click", ".main-table tr", function (evnt) {
    evnt.stopPropagation();
    const rowId = $(this).attr("id");
    const selectedCourse = courseList.find((course) => course.ID === rowId);
    const { ClassID, StartDate, EndDate } = selectedCourse;

    const enrollmentView = createEnrollmentView(
      rowId,
      ClassID,
      StartDate,
      EndDate
    );

    // Cleaning up
    $(".record-entry, #filter-bloc").toggleClass("hidden");
    $("#view-bloc").empty().append(enrollmentView).attr("data-course", rowId);

    $("html, body").animate({ scrollTop: 220 }, 200);
    $("#offering").removeClass();
    $("#enrollment").addClass("selected-tab");
    $("#sub-nav .unselected-tab").removeClass("unselected-tab");
    $("#sub-nav .btn-link").prop("disabled", false).removeClass("disabled");

    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Saving schedule/funding sources
  $(document).on("click", ".save-record-btn", function (evnt) {
    evnt.stopPropagation();
    const formId = $(this).attr("form");
    let savedData = [];
    if (formId === "schedule") {
      savedData = saveSchedule();
    } else {
      savedData = saveFundingSources();
    }
    console.log("savedData :>> ", savedData);

    saveMods(savedData, formId, "GetCourse");
  });

  //* Adding a new student in Enrollment view
  $(document).on("click", "#add-student-btn", function () {
    const classID = $("#main-banner .label-text").text();
    const coursePKId = $("#view-bloc").data("course");
    const courseStartDate = $(this).data("start");
    const modalContent = addStudentModalForm(
      coursePKId,
      classID,
      courseStartDate
    );
    $("#modalBloc").modal("toggle");
    $("#edit-form")
      .empty()
      .append(modalContent)
      .attr("data-bloc", "add-student");
    $(".modal-title").replaceWith(
      "<h4 class='modal-title'>Enrolling a student</h4>"
    );
    console.log("Element: ==> ", $("#someID input").attr("id"));
    $("#someID input").focusin();
  });

  //* Selecting an enrolled student to edit
  $(document).on("click", ".student-table tbody tr", function () {
    const rowId = $(this).attr("id");
    const modalContent = editStudent(rowId);

    $("#modalBloc").modal("toggle");
    $("#edit-form")
      .empty()
      .append(modalContent)
      .attr("data-bloc", "edit-student");
    $(".modal-title").replaceWith(
      "<h4 class='modal-title'>Editing a student</h4>"
    );
  });

  //* Event handler for end date input in modal form
  //* when editing a student.
  $(document).on("focusout", "#edit-form #InactiveDate-view", function (evnt) {
    evnt.stopPropagation();
    const endDate = $(this).val();
    if (endDate) {
      $("#InactiveReason-view, #ActiveStatus-view").prop("disabled", false);
      $("#ActiveStatus-view option:selected").prop("selected", false);
      $("#ActiveStatus-view option:last-child").prop("selected", true);
      $("#InactiveReason-view").focus();
    }
  });

  //* Handling end date AND inactive reason set to Transfer
  $(document).on("change", "#InactiveReason-view", function (evnt) {
    evnt.stopPropagation();
    const reason = $(this).val();
    if (reason === "T") {
      $("#TransferTo-view").prop("disabled", false).focus();
    }
  });

  //* Handling inactive status switched to active
  //* Inactive date, reason and transfer have all "" value and turn
  //* disabled, active status is disabled
  $(document).on("change", "#ActiveStatus-view", function (evnt) {
    evnt.stopPropagation();
    const activeValue = $(this).val();
    if (activeValue === "1") {
      $("#InactiveDate-view").val("");
      $("#InactiveReason-view option")
        .prop("selected", false)
        .removeAttr("selected");
      $("#TransferTo-view option")
        .prop("selected", false)
        .removeAttr("selected");
      $("#InactiveReason-view, #TransferTo-view, #ActiveStatus-view").prop(
        "disabled",
        true
      );
    }
  });

  //* Handling student name search when adding a new student to a course
  //* The <input> is replaced with a <select> tag. Option list is based
  //* on the 3 first letters in input.
  $(document).on("change", "#Student_PKID-view", function (evnt) {
    evnt.stopPropagation();
    const firstLetters = $(this).val();
    if (firstLetters.length > 2) {
      const roster = GetStudentLookup.slice(0).filter((record) =>
        record.StudentName.toLowerCase().startsWith(firstLetters)
      );
      const studentSelect = createStudentDataList(roster);
      $("#Student_PKID-view").replaceWith(studentSelect);
      $("#Student_PKID option").show();
    }
  });

  //* Changing row border color in Hours Student table when a month
  //* receives focus.
  $(document).on("focusin", ".student-hours-body input", function (evnt) {
    evnt.stopPropagation();
    const parentId = $(this).parent().parent().attr("id");
    const children = $(`#${parentId} > td`);
    $(children).toggleClass("border-blue");
  });

  //* Updating cell total in row when a value is modified
  $(document).on(
    "blur",
    ".student-hours-body input, .instr-hours-body input",
    function (evnt) {
      evnt.stopPropagation();
      const parentId = $(this).parent().parent().attr("id");
      const children = $(`#${parentId} > td`);
      $(children).toggleClass("border-blue");
      updateTotal(parentId);
    }
  );

  //* Down arrow to go to next cell under in Hours Student table
  $(document).on("keyup", ".student-hours-body input", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    if (evnt.which === 40) {
      const inputName = $(this).attr("name");
      const rowId = $(this).parent().parent().attr("id");
      const nextRowIndex = $(`#${rowId}`).index() + 1;
      const nextRowId = $(".student-hours-body tr").eq(nextRowIndex).attr("id");

      $(`#${nextRowId} input[name=${inputName}]`).focus();
    }
  });

  //* Trigger for displaying the Daily Contact hours bloc
  //* when clicking button in HoursView.
  $(document).on("click", "#daily-btn", function (evnt) {
    evnt.stopPropagation();
    const dailyHrsView = createDailyHours("PRABE4CASTS_21");

    $("#hours-bloc").empty().append(dailyHrsView);
  });
});
