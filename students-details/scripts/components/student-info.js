//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Student information, Work eligibility, Gender/Ethnicity
//* =======================================

import { dateFormat, createOptionList, createStaffList } from "../main.js";

// Populating input element values
// Data source: original-data/student-data.js/GetStudent
export const inputValues = (student) => {
  $("form input").each(function () {
    const name = $(this).attr("name");
    const value =
      // $(this).attr("type") === "date" && name !== "DateSettled"
      $(this).attr("type") === "date"
        ? dateFormat(student[name])
        : student[name];
    $(this).val(value);
  });
};
// Populating Work Eligibility section select values. Adding option student.
// Data source: original-data/student-data.js/GetStudent,
//        data-server.js/GetStaff
export const ssnValues = (student) => {
  const optionListNoSSNVisa = createOptionList(
    [
      { key: "0", value: "No" },
      { key: "1", value: "Yes" }
    ],
    student.NoSSNVisa
  );
  $(".ssn-form select[name='NoSSNVisa']").append(optionListNoSSNVisa);
  const optionStaff = createOptionList(
    createStaffList(GetStaff),
    student.NoSSNVisaStaff
  );
  $(".ssn-form select[name='NoSSNVisaStaff']").append(optionStaff);
};

// Adding an empty new line. Option list does not show the values
// already selected.
export const addNewRaceSelect = (list) => {
  const selectedValues = ddlRace.filter((obj) => !list.includes(obj.objKey));
  const newLineOptionList = createOptionList(selectedValues);
  return `
  <div class="input-field form-group">
    <label></label>
    <select class="modal-select" name="RaceID" >
    <option value>Select a value</option>
      ${newLineOptionList}
    </select>
  </div>`;
};

// Populating Gender | Ethnicity section select values.
// Data source: original-data/student-data.js/GetStudent,
//        data-server.js/ddlRace
export const genderValues = (student) => {
  const optionListSex = createOptionList(
    [
      { key: "M", value: "Male" },
      { key: "F", value: "Female" },
      { key: "N", value: "Non-Binary/Gender Non-Conforming" }
    ],
    student.Sex
  );
  const optionListEthnicity = createOptionList(
    [
      { key: "H", value: "Hispanic/Latino/a" },
      { key: "N", value: "Non-Hispanic/Latino/a" }
    ],
    student.EthnicityID
  );
  $(".gender-form select[name='Sex']").append(optionListSex);
  $(".gender-form select[name='EthnicityID']").append(optionListEthnicity);
  // RaceID multiple selects
  const selectedList = student.RaceID.split(",");
  let raceElement = "";
  for (const val of selectedList) {
    const valIndex = selectedList.indexOf(val);
    const labelElement =
      valIndex === 0 ? `<label for="RaceID">Race</label>` : `<label></label>`;
    const selectionList = selectedList.slice(0, valIndex);
    const optionValuesList = ddlRace.filter(
      (obj) => !selectionList.includes(obj.objKey)
    );
    const optionList = createOptionList(optionValuesList, val);
    raceElement += `
    <div class="input-field form-group">
      ${labelElement}
      <select disabled required class="modal-select" name="RaceID" >
      <option value></option>
        ${optionList}
      </select>
    </div>`;
  }
  $(".race").empty().append(raceElement);
};

export const editChildren = (dataObj) => {
  const labels = {
    PreChild: "PreSchool",
    ElemChild: "Elementary",
    JHSChild: "Junior HS",
    HSChild: "High School"
  };
  const content = [];
  for (const key in labels) {
    const labelText = labels[key];
    const optionHidden = "form-group";

    const firstLine = elementInput({
      keyVal: key,
      labelVal: labelText,
      value: dataObj[key],
      labelClassVal: "",
      classVal: "",
      option: "",
      optionHidden,
      type: "text"
    });

    const secondLine = elementInput({
      keyVal: `${key}School`,
      labelVal: "",
      value: dataObj[`${key}School`],
      labelClassVal: "",
      classVal: "",
      option: "",
      optionHidden,
      type: "text"
    });
    content.push(`${firstLine}${secondLine}`);
  }
  return content.join("");
};
