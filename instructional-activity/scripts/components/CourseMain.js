// Main data elements for the Course

import { topBanner, rowLabels, instructorList } from "../main.js";
const typeList = GetInstructionType.slice(0);
const formatList = ddlFormat.slice(0);
const levelList = ddlLevel.slice(0);

export const createCourseMain = (dataObj) => {
  let bloc = topBanner("Main Info");
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

  return bloc;
};
