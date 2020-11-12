// Main data elements for the Course

import { topBanner, rowLabels, instructorList } from "../main.js";
const typeList = GetInstructionType.slice(0);
const formatList = ddlFormat.slice(0);

export const createCourseMain = (dataObj) => {
  let bloc = "";
  const header = topBanner("Main Info");
  const {
    CourseID,
    ClassID,
    StartDate,
    EndDate,
    FY,
    ClassType,
    InstructorID,
    UpperLevel,
    Format
  } = rowLabels[0];

  const labelObj = {
    CourseID,
    ClassID,
    StartDate,
    EndDate,
    FY,
    ClassType,
    InstructorID,
    UpperLevel,
    Format
  };

  const valueFromJoinedTable = (keyStr, valueStr) => {
    let foundObj = {};
    if (keyStr === "ClassType") {
      foundObj = typeList.find((item) => item.key === valueStr);
    }
    if (keyStr === "InstructorID") {
      foundObj = instructorList.find((item) => item.PersonnelID === valueStr);
    }
    if (keyStr === "Format") {
      foundObj = formatList.find((item) => item.key === valueStr);
    }

    return keyStr === "InstructorID" ? foundObj.InstructorName : foundObj.value;
  };

  const fieldList = Object.keys(labelObj);

  for (const key of fieldList) {
    const keyVal = key;
    let labelClassVal = "";
    const labelVal = labelObj[key];
    let classVal = "";

    let value = ["ClassType", "InstructorID", "Format"].includes(key)
      ? valueFromJoinedTable(key, dataObj[key])
      : dataObj[key];

    let option = ` disabled data-key=${dataObj[key]}`;
    let optionHidden = "form-group";
    let type = "";

    const field = elementInput({
      keyVal,
      labelVal,
      value,
      labelClassVal,
      classVal,
      option,
      optionHidden,
      type
    });

    bloc += field;
  }

  return `
  ${header}
  <form class="field-bloc" id="main-info-form">
    ${bloc}
  </form>`;
};

export const createModalForm = (fieldList) => {
  const list = [];
  const fieldsWithInput = ["CourseID", "ClassID", "StartDate", "EndDate", "FY"];
  const fieldsWithSelect = {
    ClassType: [GetInstructionType, "a type"],
    InstructorID: [GetInstructor, "an instructor"],
    UpperLevel: [ddlLevel, "a level"],
    Format: [ddlFormat, "a format"]
  };

  $(fieldList).each(function (indx) {
    const $elements = $(this)
      .children()
      .removeAttr("id")
      .removeAttr("disabled");
    const labelText = $elements[0].innerText;
    const $inputElement = $elements[1];
    const keyValue = $inputElement.name;
    if (fieldsWithInput.includes(keyValue)) {
      list.push($(this));
    } else {
      let [hashTable, optionText] = fieldsWithSelect[keyValue];

      if (keyValue === "InstructorID") {
        hashTable = hashTable.map((item) => {
          const { InstructorName, PersonnelID } = item;
          return { PersonnelID, InstructorName };
        });
      }
      const selectedValue = $inputElement.dataset.key;
      const elementSelect = elementSelectModal({
        hashTable,
        keyValue,
        selectedValue,
        labelVal: labelText,
        labelClassVal: "",
        option: "",
        optionText
      });
      list.push(elementSelect);
    }
  });

  return list;
};
