import { GetPersStatusHistory, GetPersStatusCodes } from "../data-server.mjs";
import { topBanner, tableBody, elementSelectWithLabel } from "../main.mjs";

const createFormAdd = (formName) => {
  const firstRowID = `#${formName}-0 td`;
  const firstRow = $(firstRowID).get();
  let result = "";

  for (const cell of firstRow) {
    let optionHidden = $(cell).attr("class").includes("hidden") ? "hidden" : "";
    let keyVal = $(cell).attr("data-field");
    let labelVal = $(cell).attr("data-label") ? $(cell).attr("data-label") : "";

    if (["PersonnelStatID"].includes(keyVal)) {
      const paramsSelect = {
        hashTable: GetPersStatusCodes,
        keyValue: keyVal,
        selectedValue: "",
        labelVal,
        labelClassVal: "",
        option: "",
      };
      result += elementSelectWithLabel(paramsSelect);
    } else {
      if (keyVal === "PersonnelStatDesc") optionHidden = "hidden";
      const paramsObj = {
        keyVal,
        labelVal,
        value: "",
        labelClassVal: "",
        classVal: "",
        option: "placeholder='MM/DD/YYYY'",
        optionHidden,
      };
      result += elementInput(paramsObj);
    }
  }
  return result;
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
    { PersStatusDate: "Date", PersonnelStatID: "Status" }
  );

  return header + body;
};

export { historyView, createFormAdd };
