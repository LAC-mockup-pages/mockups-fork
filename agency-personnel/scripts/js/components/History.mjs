import { GetPersStatusHistory, GetPersStatusCodes } from "../data-server.mjs";
import { topBanner, tableBody, elementSelectWithLabel } from "../main.mjs";

const createFormAddHistory = (formName, rowId = null) => {
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

    if (["PersonnelStatID"].includes(keyVal)) {
      const selectedValue = rowId ? value : "";
      const paramsSelect = {
        hashTable: GetPersStatusCodes,
        keyValue: keyVal,
        selectedValue,
        labelVal,
        labelClassVal: "",
        option: "",
      };
      result += elementSelectWithLabel(paramsSelect);
    } else {
      if (keyVal === "PersonnelStatDesc") optionHidden = "hidden";
      if (keyVal === "PersStatusDate") option = "placeholder='MM/DD/YYYY'";
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

const historyView = () => {
  const blockName = "History";

  // Sorting data by date, most recent first
  const historyData = GetPersStatusHistory.sort(
    (a, b) => new Date(b.PersStatusDate) - new Date(a.PersStatusDate)
  );

  const header = topBanner(blockName, [
    ["Date", "col-sm-2"],
    ["Status", "col-sm-10"],
  ]);

  const body = tableBody(
    historyData,
    blockName,
    ["ID", "PersonnelID", "PersonnelStatID"],
    { PersStatusDate: "Date", PersonnelStatID: "Status" },
    "PersStatusHistory"
  );

  return header + body;
};

export { historyView, createFormAddHistory };
