import { topBanner, tableBody } from "../main.js";

const handleChangeNonInstHours = () => {
  const listInputs = $("#modal-form input").get().slice(2, 8);

  $(listInputs).each(function () {
    $(this).bind("change", function (evnt) {
      evnt.stopPropagation();
      const valueList = $("#modal-form").serializeArray().slice(3, 8);
      console.log("valueList :>> ", valueList);
      const totalHours = valueList.reduce((total, field) => {
        const valNum = field.value ? Number(field.value) : 0;
        return total + valNum;
      }, 0);
      $("#TotalHours-view").val(totalHours);
    });
  });
};

const addTotalHours = (fieldList) => {
  const totalHours = fieldList
    .slice(3)
    .reduce((total, field) => {
      const valNum = field.value ? Number(field.value) : 0;
      return total + valNum;
    }, 0)
    .toString();
  return { name: "TotalHours", value: totalHours };
};

const createFormAddNonIntructionalHours = (formName, rowId = null) => {
  const selectedRowId = rowId ? `#${rowId} td` : `#${formName}-0 td`;
  const tableName = rowId
    ? $(`#${rowId}`).attr("data-table")
    : $(`#${formName}-0`).attr("data-table");
  const selectedRow = $(selectedRowId).get();
  let result = "";

  for (const cell of selectedRow) {
    let optionHidden = $(cell).attr("class").includes("hidden") ? "hidden" : "";
    let keyVal = $(cell).attr("data-field");
    let labelVal = $(cell).attr("data-label") ? $(cell).attr("data-label") : "";
    let option = "";
    let value = rowId ? $(cell).text() : "";
    if (["Month", "Period"].includes(keyVal)) continue;
    if (keyVal === "PeriodID") {
      const selectedValue = rowId ? value : "";
      const paramsSelect = {
        hashTable: getReportingPeriods,
        keyValue: keyVal,
        selectedValue,
        labelVal,
        labelClassVal: "",
        option
      };

      // elementSelectModal() <== helperFunctions.js
      result += elementSelectModal(paramsSelect);
    } else {
      if (keyVal === "ID") optionHidden = "hidden";
      if (keyVal === "PersonnelID") value = $(cell).text();
      if (keyVal === "TotalHours") option = "disabled";
      const paramsObj = {
        keyVal,
        labelVal,
        value,
        labelClassVal: "",
        classVal: "style='width:10%;text-align:center'",
        option,
        optionHidden
      };
      result += elementInput(paramsObj);
    }
  }
  return [tableName, result];
};

const addMonth = (recordList) => {
  const list = recordList
    .slice(0)
    .sort(
      (a, b) =>
        Number(b.PeriodID.substr(7, 2)) - Number(a.PeriodID.substr(7, 2))
    );
  const resultList = [];
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  for (const record of list) {
    const Month = monthList[Number(record.PeriodID.substr(7, 2))];
    resultList.push({ Month, ...record });
  }

  return resultList;
};

const nonInstrHoursView = (PersonnelID) => {
  const blockName = "Non Instructional Hours";
  const blockData =
    getNonInstHours.length < 1
      ? [
          {
            PersonnelID,
            PeriodID: "",
            Period: "",
            PrepHours: "",
            TravelHours: "",
            TrainingHours: "",
            MeetingHours: "",
            ExtraHours: "",
            TotalHours: ""
          }
        ]
      : addMonth(getNonInstHours);
  const header = topBanner(blockName, [
    ["Period", "col-sm-2"],
    ["Prep", "col-sm-2"],
    ["Travel", "col-sm-1"],
    ["Training", "col-sm-2"],
    ["Meeting", "col-sm-1"],
    ["Extra", "col-sm-2"],
    ["Total", "col-sm-1"]
  ]);

  const body = tableBody(
    blockData,
    blockName,
    ["ID", "PersonnelID", "PeriodID", "Period"],
    {
      PeriodID: "Period",
      PrepHours: "Prep Hrs",
      TravelHours: "Travel Hrs",
      TrainingHours: "Training Hrs",
      MeetingHours: "Meeting Hrs",
      ExtraHours: "Extra Hrs",
      TotalHours: "Total Hrs"
    },
    "NonInstHours"
  );

  return header + body;
};

export {
  nonInstrHoursView,
  createFormAddNonIntructionalHours,
  handleChangeNonInstHours,
  addTotalHours
};
