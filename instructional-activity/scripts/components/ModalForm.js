// Creates Modall form for the Click-to-Edit blocks:
// Main Info, Recommended,Additional Info, Projected Services.

import { processProgramCode } from "./AdditionalInfo.js";

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
    "RoomNumber"
  ];
  const codeList = processProgramCode(GetProgramCode.slice(0));
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
    ProgramID: [codeList, "a program"]
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
