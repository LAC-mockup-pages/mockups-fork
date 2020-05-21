import { getNonInstHours, getReportingPeriods } from "../data-server.mjs";
import { topBanner, tableBody, elementSelectWithLabel } from "../main.mjs";

const handleChangeNonInstHours = () => {
  const listInputs = $("#modal-form input").get().slice(1, 6);

  $(listInputs).each(function () {
    $(this).bind("change", function (evnt) {
      evnt.stopPropagation();
      const valueList = $("#modal-form").serializeArray().slice(1, 6);
      const totalHours = valueList.reduce((total, field) => {
        const valNum = field.value ? Number(field.value) : 0;
        return total + valNum;
      }, 0);
      $("#TotalHours-view").val(totalHours);
    });
  });
};

const createFormAddNonIntructionalHours = (formName) => {
  const firstRowID = `#${formName}-0 td`;
  const tableName = $(`#${formName}-0`).attr("data-table");
  const firstRow = $(firstRowID).get();
  let result = "";

  for (const cell of firstRow) {
    let optionHidden = $(cell).attr("class").includes("hidden") ? "hidden" : "";
    let keyVal = $(cell).attr("data-field");
    let labelVal = $(cell).attr("data-label") ? $(cell).attr("data-label") : "";
    let option = "";
    let value = "";
    if (["Month", "ID", "Period"].includes(keyVal)) continue;
    if (keyVal === "PeriodID") {
      const paramsSelect = {
        hashTable: getReportingPeriods,
        keyValue: keyVal,
        selectedValue: "",
        labelVal,
        labelClassVal: "",
        option,
      };
      result += elementSelectWithLabel(paramsSelect);
    } else {
      if (keyVal === "PersonnelID") value = $(cell).text();
      const paramsObj = {
        keyVal,
        labelVal,
        value,
        labelClassVal: "",
        classVal: "",
        option,
        optionHidden,
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
    "Dec",
  ];

  for (const record of list) {
    const Month = monthList[Number(record.PeriodID.substr(7, 2))];
    resultList.push({ Month, ...record });
  }

  return resultList;
};

const nonInstrHoursView = () => {
  const blockName = "Non Instructional Hours";
  const blockData = addMonth(getNonInstHours);
  const header = topBanner(blockName, [
    ["Period", "col-sm-2"],
    ["Prep", "col-sm-2"],
    ["Travel", "col-sm-1"],
    ["Training", "col-sm-2"],
    ["Meeting", "col-sm-1"],
    ["Extra", "col-sm-2"],
    ["Total", "col-sm-1"],
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
      TotalHours: "Total Hrs",
    },
    "NonInstHours"
  );

  return header + body;
};

export {
  nonInstrHoursView,
  createFormAddNonIntructionalHours,
  handleChangeNonInstHours,
};
