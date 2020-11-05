// Additional fields for the selected course

import { topBanner } from "../main.js";

// Format the data object in hashtable, each item an object like
// {key: "", value:""}
const processProgramCode = (programCodelist) => {
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
  let bloc = topBanner("Additional Info");
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
  let option = "disabled";
  let optionHidden = "form-group";
  let labelClassVal = "";
  let classVal = "";

  for (const label of labelsObj) {
    const { keyVal, labelVal } = label;
    let value = fieldsObj[keyVal];

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
  // const sessionsField = elementInput({
  //   keyVal: "Sessions",
  //   labelVal: "Sessions",
  //   value: Sessions,
  //   labelClassVal,
  //   classVal,
  //   option,
  //   optionHidden
  // });
  // const meetTime = elementSelectModal({
  //   hashTable: meetTimeData,
  //   keyValue: "AMPM",
  //   selectedValue: AMPM,
  //   labelVal: "Meet Time",
  //   labelClassVal,
  //   option,
  //   optionText
  // });
  // const sessionLength = elementInput({
  //   keyVal: "SessionLength",
  //   labelVal: "Hrs per Session",
  //   value: SessionLength,
  //   labelClassVal,
  //   classVal,
  //   option,
  //   optionHidden
  // });
  // const seatNum = elementInput({
  //   keyVal: "Seats",
  //   labelVal: "Seat Number",
  //   value: Seats,
  //   labelClassVal,
  //   classVal,
  //   option,
  //   optionHidden
  // });
  // const hoursWeek = elementInput({
  //   keyVal: "HoursWeek",
  //   labelVal: "Hrs per Week",
  //   value: HoursWeek,
  //   labelClassVal,
  //   classVal,
  //   option,
  //   optionHidden
  // });
  // const roomID = elementInput({
  //   keyVal: "RoomNumber",
  //   labelVal: "Room ID",
  //   value: RoomNumber,
  //   labelClassVal,
  //   classVal,
  //   option,
  //   optionHidden
  // });
  // const lowestLevel = elementSelectModal({
  //   hashTable: levels,
  //   keyValue: "LowestLevel",
  //   selectedValue: LowestLevel,
  //   labelVal: "Lowest Level",
  //   labelClassVal,
  //   option,
  //   optionText
  // });
  // const caiField = elementSelectModal({
  //   hashTable: optionCAIValues,
  //   keyValue: "CAI",
  //   selectedValue: CAI,
  //   labelVal: "CAI",
  //   labelClassVal,
  //   option,
  //   optionText
  // });
  // const programCode = elementSelectModal({
  //   hashTable: codeList,
  //   keyValue: "ProgramID",
  //   selectedValue: ProgramID,
  //   labelVal: "CTEDS Program Code (CIP)",
  //   labelClassVal,
  //   option,
  //   optionText
  // });

  // bloc += `${sessionsField}${meetTime}${sessionLength}${seatNum}${hoursWeek}${roomID}${lowestLevel}${caiField}${programCode}`;
  return bloc;
};
