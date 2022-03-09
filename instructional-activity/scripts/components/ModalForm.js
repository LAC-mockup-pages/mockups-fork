// Creates Modall form for the Click-to-Edit blocks:
// Main Info, Recommended,Additional Info, Projected Services.

import { getRequired } from "../main.js";
import { processProgramCode } from "../components/details/AdditionalInfo.js";

export const createModalForm = (fieldList) => {
  const list = [];
  const fieldsWithInput = [
    "CourseID",
    "ClassID",
    "StartDate",
    "EndDate",
    "FY",
    "Sessions",
    "SessionLength",
    "Seats",
    "HoursWeek",
    "RoomNumber",
    "ProjTotContHrs",
    "ProjTotInstHrs",
    "ProjTotADA",
    "ProjTotEIH",
    "ProjTotStudents",
    "DateAssign"
  ];
  const codeList = processProgramCode(GetProgramCode.slice(0));
  const siteList = GetSite.map((item) => {
    const { SiteName, SiteID } = item;
    return { SiteID, SiteName };
  });
  const fieldsWithSelect = {
    ClassType: [GetInstructionType, "a type"],
    InstructorID: [GetInstructor, "an instructor"],
    UpperLevel: [ddlLevel, "a level"],
    Format: [ddlFormat, "a format"],
    AMPM: [ddlAMPM, "a time period"],
    LowerLevel: [ddlLevel, "a level"],
    CAI: [
      [
        { key: "True", value: "Yes" },
        { key: "False", value: "No" }
      ],
      ""
    ],
    ProgramID: [codeList, "a program"],
    SiteID: [siteList, "a site"]
  };

  $(fieldList).each(function (indx) {
    const $elements = $(this).children().removeAttr("disabled");
    const labelText = $elements[0].innerText;
    const $inputElement = $elements[1];
    $inputElement.id = `${$inputElement.id}`.replace("view", "modal");
    const keyValue = $inputElement.name;
    if (["ClassID", "FY"].includes(keyValue)) {
      $inputElement.disabled = true;
    }
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
      const requiredList = getRequired();
      const labelClassVal = requiredList.includes(keyValue)
        ? "class='red-text'"
        : "";

      // elementSelectModal() <== helperFunctions.js
      const elementSelect = elementSelectModal({
        hashTable,
        keyValue,
        selectedValue,
        labelVal: labelText,
        labelClassVal,
        option: "",
        optionText
      });
      list.push(elementSelect);
    }
  });

  return list;
};

// Defining and adding fields ClassID
// and InstructionDescription
export const addClassIdAndDescription = (fieldList, instructorsList) => {
  let fieldObj = {};
  const list = [];

  for (const field of fieldList) {
    const val = field.value;
    const name = field.name;

    fieldObj[name] = val;
  }

  const { AgencyID } = SESSION_VARIABLE[0];
  const { ClassType, CourseID, Format, InstructorID, UpperLevel } = fieldObj;
  const instructor = instructorsList.find(
    (person) => person.PersonnelID === InstructorID
  );
  const ClassID = `${AgencyID}${ClassType}${UpperLevel}${Format}${CourseID}`;
  const InstructionDescription = `${ClassType}${UpperLevel}${Format}${CourseID}  ${instructor.InstructorName}`;

  fieldObj = { ...fieldObj, ClassID, InstructionDescription };
  for (const item in fieldObj) {
    list.push({ name: item, value: fieldObj[item] });
  }
  return list;
};
