//*=================================================
//* Actions and Logic for local page
//*=================================================

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
import {
  GetStudent,
  GetFundingInfo,
  GetHighestGradeCompletedUS,
  GetYearsSchooling,
  GetFundingSource,
  GetFundingSource2,
  GetEmploymentInfo,
  GetEmploymentStatus,
  GetIncome
} from "./original-data/student-data.js";
import {
  GetStudent_Additional,
  GetCountrySource,
  GetReferralSource,
  GetPAStatusInfo,
  GetPASource
} from "./original-data/student-data-additional.js";
import {
  addNewRaceSelect,
  editChildren,
  genderValues,
  inputValues,
  ssnValues
} from "./components/student-info.js";
import {
  addNewFundingSource,
  editFormFunding,
  fundingValues,
  saveEditing
} from "./components/funding-info.js";
import { populationValues } from "./components/population-info.js";
import {
  addNewSelect,
  sectionProcess,
  barriersValues
} from "./components/barriers-info.js";
import {
  addNewAssistance,
  assistanceValues
} from "./components/assisstance-info.js";
import {
  addNewEmployment,
  employmentValues
} from "./components/employment-info.js";
const studentInfo = GetStudent.slice(0)[0];
const fundingInfo = GetFundingInfo.slice(0);
// const fundingSources = GetFundingSource.slice(0);
const fundingSources = GetFundingSource2.slice(0);
const highestGrade = GetHighestGradeCompletedUS.slice(0);
const yearsSchool = GetYearsSchooling.slice(0);
const additionalInfo = GetStudent_Additional.slice(0)[0];
const countries = GetCountrySource.slice(0);
const referral = GetReferralSource.slice(0);
const assistanceInfo = GetPAStatusInfo.slice(0);
const assistanceSource = GetPASource.slice(0);
const employment = GetEmploymentInfo.slice(0);
const employmentStatus = GetEmploymentStatus.slice(0);
const employmentIncome = GetIncome.slice(0);
//! =============================================================

export const dateFormat = (str) => {
  return str ? `${str.slice(-4)}-${str.substr(0, 2)}-${str.substr(3, 2)}` : "";
};

export const createOptionList = (dataObj, defaultValue) => {
  const optionList = dataObj.map((record) => {
    const [key, value] = Object.keys(record);
    const keyData = record[key];
    const valueData = record[value];
    const defaultVal =
      defaultValue && keyData === defaultValue ? "selected" : "";
    return `<option ${defaultVal} value=${keyData}>${valueData}</option>`;
  });
  return optionList.join("");
};

export const createStaffList = (list) => {
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
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);
  // Default Student_PKID if no query string in URL
  const Student_PKID = params.get("stid") ? params.get("stid") : "1048303";
  //! =============================================================
  //! For Production, this section regroups the end points
  //! for the different requests to the back-end, using requestObj.
  //! Navigation variables are defined here as well.
  //! =============================================================
  // const studentInfo =
  // const fundingInfo =
  // const fundingSources =
  // const employmentData =
  // const highestGrade =
  // const yearsSchool =
  // const additionalInfo =
  // const countries =
  // const referral =
  // const assistanceInfo =
  // const assistanceSource =
  // const employment =
  // const employmentStatus =
  // const employmentIncome =

  // Navigation variables.
  // In Production, update with actual rootUrl and destinations
  // once they are known.
  const rootUrl = "http://localhost:5500/";
  const destinationsObj = {
    profile: "student-profile/index.html",
    details: "students-details/index.html",
    assessments: "student-assessments/index.html",
    enrollment: "student-enrollment/index.html",
    goals: "student-goals/index.html",
    history: "student-history/index.html",
    casenotes: "students-casenotes/index.html"
  };

  //! =============================================================

  //* Navigation from sub navbar on top
  $("#sub-nav li").click(function (evnt) {
    evnt.stopPropagation();
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
    const queryString = `?stid=${Student_PKID}`;
    const destination = $(this).attr("data-target");
    const targetUrl = `${rootUrl}${destinationsObj[destination]}${queryString}`;
    window.location.assign(targetUrl);
  });

  //* Populating input and select elements for display.
  //* Elements are disabled.
  inputValues(studentInfo);
  ssnValues(studentInfo);
  genderValues(studentInfo);
  fundingValues(fundingInfo);
  populationValues(additionalInfo);
  barriersValues(studentInfo);
  assistanceValues(assistanceInfo, assistanceSource);
  employmentValues(employment, employmentStatus, employmentIncome);

  // Populating Educational background select values. Adding option lists.
  // Data source: original-data/student-data.js/GetStudent
  //          original-data/student-data.js/GetHighestGradeCompletedUS
  //          original-data/student-data.js/GetYearsSchooling
  $(".education-form select[name='Grade']").append(
    createOptionList(highestGrade, studentInfo.Grade || "NA")
  );
  $(".education-form select[name='NYSGrade']").append(
    createOptionList(highestGrade, studentInfo.NYSGrade || "NA")
  );
  $(".education-form select[name='HighestCredential']").append(
    createOptionList(highestGrade, studentInfo.HighestCredential || "NA")
  );
  $(".education-form select[name='CredentialUS']").append(
    createOptionList(
      [
        { key: "1", value: "The US" },
        { key: "2", value: "Another country" }
      ],
      studentInfo.CredentialUS || "NA"
    )
  );
  $(".education-form select[name='YearsUSSchools']").append(
    createOptionList(yearsSchool, studentInfo.YearsUSSchools || "NA")
  );

  // Populating Nationality select values. Add option lists.
  // Data source: original-data/student-data-additional.js/GetStudent_Additional
  //          original-data/student-data-additional.js/GetCountrySource
  $(".nationality-form select[name='CountryID']").append(
    createOptionList(countries, additionalInfo.CountryID)
  );
  $(".nationality-form select[name='Status']").append(
    createOptionList(
      [
        { key: "Citizen", value: "Citizen" },
        { key: "Refugee", value: "Refugee" },
        { key: "Immigrant", value: "Immigrant" }
      ],
      additionalInfo.Status
    )
  );

  $(".nationality-form input[name='DateSettled']").val(
    dateFormat(additionalInfo.DateSettled)
  );
  $(".nationality-form input[name='Languages']").val(additionalInfo.Languages);
  //Populating Parent/Children select values.
  // Data source: original-data/student-data.js/GetStudent
  $(".parent-form select[name='Parent']").append(
    createOptionList(
      [
        { key: "0", value: "No" },
        { key: "1", value: "Yes" }
      ],
      studentInfo.Parent
    )
  );
  $(".parent-form select[name='CustodialParent']").append(
    createOptionList(
      [
        { key: "0", value: "No" },
        { key: "1", value: "Yes" }
      ],
      studentInfo.CustodialParent
    )
  );
  $(".parent-form select[name='SingleParent']").append(
    createOptionList(
      [
        { key: "0", value: "No" },
        { key: "1", value: "Yes" }
      ],
      studentInfo.SingleParent
    )
  );
  // Populating Referral section select values. Adding option list.
  // Data source: original-data/student-data-additional.js/GetStudent_Additional,
  //        original-data/student-data-additional.js/GetReferralSource
  $(".referral-form select[name='RefSource']").append(
    createOptionList(referral, additionalInfo.RefSource)
  );

  //* =====================================

  //* Triggers edit modal with selected form elements
  $(".form")
    .not("#edit-form, .employment-form, .children-form, .assistance-form")
    .click(function (evnt) {
      evnt.stopPropagation();
      const sectionTitle = $(this)
        .parent("section")
        .find(".sub-header-title")
        .text()
        .trim();

      // Add field names which must stay disabled in edit-form
      const stayingDisabled = ["LengthOfStay"];
      const editFormContent =
        sectionTitle === "Funding sources"
          ? editFormFunding(fundingInfo, fundingSources)
          : $(this).children().clone();
      const targetTable = $(this).attr("data-table");
      $("#modalBloc").modal("toggle");
      $("#edit-form").empty().append(editFormContent);
      $("#edit-form").removeAttr("data-table").attr("data-table", targetTable);
      $(".modal-title").empty().text(`${sectionTitle} editing`);
      $("#edit-form :input").prop("disabled", false);
      for (const name of stayingDisabled) {
        $(`#edit-form [name=${name}]`).prop("disabled", true);
      }
      // Colors labels in red for required elements
      const requiredList = $("#edit-form [required]")
        .serializeArray()
        .map((item) => item.name);
      for (const name of requiredList) {
        $(`#edit-form label[for=${name}]`).addClass("red-text");
      }
      // Add new select empty element for gender/race, barriers sections
      if ($(this).hasClass("gender-form")) {
        const selectedOptions = $(`#edit-form [name="RaceID"]`)
          .serializeArray()
          .map((record) => record.value);
        $("#edit-form .race").append(`${addNewRaceSelect(selectedOptions)}`);
      } else if ($(this).hasClass("barriers-form")) {
        addNewSelect(ddlBarriers, "barrier");
      } else if ($(this).hasClass("population-form")) {
        addNewSelect(ddlPopulation, "population");
      }
      // Enables customized tooltips
      $("[data-toggle='tooltip']").tooltip();
    });

  //* Saving changes after editing in modal
  $("#save-btn").click(function (evnt) {
    evnt.preventDefault();
    //TODO Check for errors in inputs
    const elements = $("#edit-form :input").prop("disabled", false);
    const requiredObj = createObject(
      $("#edit-form [required]").serializeArray()
    );
    const requiredWithoutValue = [];
    // Checking if required fields have a valid value.
    // Switching background color to yellow if not, and stopping
    // the save process.
    for (const key in requiredObj) {
      if (!requiredObj[key]) requiredWithoutValue.push(key);
    }
    if (requiredWithoutValue.length > 0) {
      for (const field of requiredWithoutValue) {
        $(`.modal-body [name=${field}]`).css("background-color", "#f7e095");
      }
      return;
    } else {
      // All required fields have a value
      const saveList = $(elements).serializeArray();
      let saveObj = createObject(saveList);
      const targetTable = $("#edit-form").attr("data-table");
      // Adding ID of edited record if it exists.
      const rowId = $("#edit-form").attr("data-row-id");
      if (rowId) saveObj = { ID: rowId, ...saveObj };
      const sectionName = $("#edit-form select:first-of-type").attr("name");
      // Modifying saveObj depending on the section
      if (["barrier", "population"].includes(sectionName)) {
        const sectionDdl =
          sectionName === "barrier" ? ddlBarriers : ddlPopulation;
        saveObj = sectionProcess(sectionDdl);
      } else if (sectionName === "Sex") {
        saveObj.RaceID = saveList
          .filter((record) => record.name === "RaceID" && record.value)
          .map((record) => record.value)
          .join(",");
      } else if (targetTable === "GetFundingInfo") {
        if ($(".modal-title").text().startsWith("Funding")) {
          // saveObj for Editing the student's funding sources
          saveObj = { values: saveEditing(saveList) };
        } else {
          // saveObj for Adding a new funding source
          const { FYplusFSID } = saveObj;
          saveObj = { FY: FYplusFSID.slice(0, 4), FSID: FYplusFSID.slice(4) };
        }
      }
      const credentials = createCredentials();
      //! =================================================
      //! For production, this is the end point for the Post request
      //! to update the DB.
      //! =================================================

      // NB: for Funding sources editing saveObj is an array of records
      // under the property "values"
      const resultList = [
        targetTable,
        JSON.stringify({ ...credentials, Student_PKID, ...saveObj })
      ];
      console.log("result :", resultList);
      //! =================================================
      $("#modalBloc").modal("toggle");
    }
  });

  //* Add new race select element in modal when needed, with updated
  //* options.
  $(document).on(
    "change",
    "#edit-form select[name='RaceID']:last-of-type",
    function (evnt) {
      evnt.stopPropagation();
      // Allows to jump to next input field without generation a new RaceID select
      // element
      const currentSelectValue = $("#edit-form .race select").last().val();
      if (!currentSelectValue) return;
      const raceSelection = $("#edit-form select[name='RaceID']")
        .serializeArray()
        .map((record) => record.value);
      $("#edit-form .race").append(addNewRaceSelect(raceSelection));
      $("#edit-form select[name='RaceID']:last-of-type").focus();
    }
  );

  //* Add new Barrier select element in modal when needed, with updated
  //* options.
  $(document).on(
    "change",
    "#edit-form select[name='yes-no']:last-of-type",
    function (evnt) {
      evnt.stopPropagation();
      evnt.preventDefault();
      // Allows to jump to buttons without generating a new Barrier select
      // element
      if (!$(this).val()) return;

      if ($("#edit-form").attr("data-table") === "GetStudent") {
        addNewSelect(ddlBarriers, "barrier");
      } else {
        addNewSelect(ddlPopulation, "population");
      }
    }
  );

  //* Adding a new record
  //* sections: Employment, Assistance, Funding Sources
  $("#add-employment, #add-assistance, #add-funding").click(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    let editFormContent = "";
    let tableName = "";
    let modalTitle = "";

    switch ($(this).attr("id")) {
      case "add-assistance":
        editFormContent = addNewAssistance(assistanceSource);
        tableName = "GetPAStatusInfo";
        modalTitle = "assistance";
        break;
      case "add-funding":
        editFormContent = addNewFundingSource(fundingInfo, fundingSources);
        tableName = "GetFundingInfo";
        modalTitle = "funding source";
        break;
      default:
        editFormContent = addNewEmployment(employmentStatus, employmentIncome);
        tableName = "GetEmploymentInfo";
        modalTitle = "employment";
        break;
    }

    $("#edit-form")
      .empty()
      .append(editFormContent)
      .attr("data-table", tableName);
    $(".modal-title").empty().text(`Adding new ${modalTitle} record`);
    $("#modalBloc").modal("toggle");
  });

  //* Editing a row in table
  //* Sections: Employment, Personal assistance
  $(document).on(
    "click",
    ".employment-table tbody tr, .assistance-table tbody tr",
    function (evnt) {
      evnt.stopPropagation();
      const rowId = $(this).attr("id");
      const elements = $(":disabled", this).clone().prop("disabled", false);
      const record = createObject($(elements).serializeArray());
      console.log("record :>> ", record);
      console.log(
        '$(this).parents("table").hasClass("assistance-table) :>> ',
        $(this).parents("table").hasClass("assistance-table")
      );
      let tableName = "GetEmploymentInfo";
      let editFormContent = addNewEmployment(
        employmentStatus,
        employmentIncome,
        record
      );
      let modalTitle = "employment";
      if ($(this).parents("table").hasClass("assistance-table")) {
        tableName = "GetPAStatusInfo";
        modalTitle = "public assistance";
        editFormContent = addNewAssistance(assistanceSource, record);
      }
      $("#edit-form")
        .empty()
        .append(editFormContent)
        .attr({ "data-table": tableName, "data-row-id": rowId });
      $(".modal-title").empty().text(`Editing ${modalTitle} record`);
      $("#modalBloc").modal("toggle");
    }
  );

  //* Editing children section tables
  $(".children-table tbody").click(function (evnt) {
    evnt.stopPropagation();
    const elements = $(":disabled", this).clone().prop("disabled", false);
    const record = createObject($(elements).serializeArray());
    console.log("record :>> ", record);
    const editFormContent = editChildren(record);
    $("#edit-form")
      .empty()
      .append(editFormContent)
      .attr("data-table", "GetStudent");

    $(".modal-title").empty().text(`Editing School aged children`);
    $("#modalBloc").modal("toggle");
  });

  //* Printing the document in Educational background section
  //* PDF doc opens in separate browser tab.
  $("#printing").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const docURL = `/reports/Attachment_R.aspx?st=${Student_PKID}`;
    window.open(docURL, "_blank");
  });

  //* Phone numbers dynamic masking
  //* On entry, format the numbers as US phone number (XXX) XXX-XXXX
  $(document).on(
    "keyup",
    "#edit-form input[name='Phone'], #edit-form input[name='Phone2'], #edit-form input[name='EmergencyPhone']",
    function (evnt) {
      evnt.stopPropagation();
      evnt.preventDefault();
      const inputValue = $(this).val();
      $(this).val(
        inputValue.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, "($1) $2-$3")
      );
    }
  );
});
