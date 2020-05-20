import { getNonInstHours, getReportingPeriods } from "../data-server.mjs";
import { topBanner, tableBody } from "../main.mjs";

const createFormAddNonIntructionalHours = (formName) => {
  const firstRowID = `#${formName}-0 td`;
  const tableName = $(`#${formName}-0`).attr("data-table");
  const firstRowContent = $(firstRowID).get();
  const firstRow = firstRowContent.map((cell) => {
    if ($(cell).attr("data-field") !== "Month") {
      return cell;
    }
  });
  console.log("firstRow :>> ", firstRow);
  let result = "";

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
  const data = addMonth(getNonInstHours);
  const header = topBanner(blockName, [
    ["Period", "col-sm-2"],
    ["Prep", "col-sm-2"],
    ["Travel", "col-sm-1"],
    ["Training", "col-sm-2"],
    ["Meeting", "col-sm-1"],
    ["Extra", "col-sm-2"],
    ["Total", "col-sm-1"],
  ]);
  const body = tableBody(data, blockName, [
    "ID",
    "PersonnelID",
    "PeriodID",
    "Period",
  ]);

  return header + body;
};

export { nonInstrHoursView, createFormAddNonIntructionalHours };
