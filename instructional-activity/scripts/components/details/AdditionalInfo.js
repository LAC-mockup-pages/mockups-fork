// Additional fields for the selected course

import { topBanner } from "../main.js";

// Format the data object in a hashtable, each item an object like
// {key: "", value:""}
export const processProgramCode = (programCodelist) => {
  const codeList = [];
  for (const record of programCodelist) {
    const keyList = Object.keys(record);
    const tempObj = {};
    tempObj.key = record[keyList[0]];
    tempObj.value = record[keyList[1]];
    codeList.push(tempObj);
  }
  return codeList;
};

export const createAdditionalFields = (fieldsObj) => {
  const header = topBanner("Additional Info");
  let bloc = "";
  const labelsObj = [
    { keyVal: "Sessions", labelVal: "Sessions" },
    { keyVal: "AMPM", labelVal: "Meet Time" },
    { keyVal: "SessionLength", labelVal: "Hours per Session" },
    { keyVal: "Seats", labelVal: "Seat Number" },
    { keyVal: "HoursWeek", labelVal: "Hours per Week" },
    { keyVal: "RoomNumber", labelVal: "Room ID" },
    { keyVal: "LowerLevel", labelVal: "Lowest Level" },
    { keyVal: "CAI", labelVal: "CAI" },
    { keyVal: "ProgramID", labelVal: "CTEDS Program Code (CIP)" }
  ];

  // =========================================================
  // Secondary data objects for <select> elements in the bloc
  // =========================================================
  const meetTimeData = ddlAMPM.slice(0);
  const levels = ddlLevel.slice(0);
  const optionCAIValues = [
    { key: "True", value: "Yes" },
    { key: "False", value: "No" }
  ];
  const codeList = processProgramCode(GetProgramCode.slice(0));

  // =========================================================
  // Fields
  // =========================================================
  let optionHidden = "form-group";
  let labelClassVal = "";
  let classVal = "";

  for (const label of labelsObj) {
    const { keyVal, labelVal } = label;
    let value = fieldsObj[keyVal];

    let option = value
      ? ` disabled data-key=${value}`
      : ` disabled data-key=""`;

    switch (keyVal) {
      case "AMPM":
        value = value
          ? meetTimeData.find((record) => record.key === value).value
          : "";
        break;

      case "CAI":
        value = value
          ? optionCAIValues.find((record) => record.key === value).value
          : "";
        break;

      case "ProgramID":
        value = value
          ? codeList.find((record) => record.key === value).value
          : "";
        break;

      default:
        value = fieldsObj[keyVal];
        break;
    }

    bloc += elementInput({
      keyVal,
      labelVal,
      value,
      labelClassVal,
      classVal,
      option,
      optionHidden
    });
  }

  return `
  ${header}
  <form class="field-bloc" id="additional-info-form">
    ${bloc}
  </form>`;
};
