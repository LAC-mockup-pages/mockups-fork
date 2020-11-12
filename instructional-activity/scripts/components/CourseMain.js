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
  // for (const $field of fieldList) {
  //   const $labelElement = $field.children[0];
  //   let $inputElement = $field.children[1];
  //   // $(field.children[1]).removeAttr("id");
  //   $inputElement.removeAttr("id");
  //   if ($labelElement.value() in ["Course Name", "Instruction Code"]) {
  //     $("#edit-form").append(field)
  //   }
  // }
  const list = [];
  $(fieldList).each(function (indx) {
    const $elements = $(this).children().removeAttr("id");
    console.log("$elements :>> ", $elements);
    const labelText = $elements[0].innerText;
    let $inputElement = $elements[1];
    const fieldsWithSelect={}

    if (["Course Name", "Instruction Code","Start", "End","Fiscal Year"].includes(labelText)) {
      list.push($(this));
    }else if (["Level"].includes(labelText)){
      const selectedValue=$inputElement.value
      const elementSelect=elementSelectModal({
        hashTable:ddlLevel,
    keyValue:'UpperLevel',
    selectedValue,
    labelVal:labelText,
    labelClassVal:'',
    option:'',
    optionText:'a level'
      })
      list.push(elementSelect)
    }
  });

  return list;
};
