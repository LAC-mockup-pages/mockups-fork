import { topBanner, tableBody } from "../main.js";

const createFormAddHistory = (formName, rowId = null) => {
  const selectedRowId = rowId ? `#${rowId} td` : `#${formName}-0 td`;
  const tableName = rowId
    ? $(`#${rowId}`).attr("data-table")
    : $(`#${formName}-0`).attr("data-table");
  const selectedRow = $(selectedRowId).get();
  let result = "";

  for (const cell of selectedRow) {
    let optionHidden = $(cell).attr("class").includes("hidden")
      ? "hidden form-group"
      : "form-group";
    let keyVal = $(cell).attr("data-field");
    let labelVal = $(cell).attr("data-label") ? $(cell).attr("data-label") : "";
    let option = "";
    let value = rowId ? $(cell).text() : "";
    let type = "text";

    if (["PersonnelStatID"].includes(keyVal)) {
      const selectedValue = rowId ? value : "";
      const paramsSelect = {
        hashTable: GetPersStatusCodes,
        keyValue: keyVal,
        selectedValue,
        labelVal,
        labelClassVal: "",
        option: ""
      };
      // elementSelectModal() <== helperFunctions.js
      result += elementSelectModal(paramsSelect);
    } else {
      if (keyVal === "PersonnelStatDesc") optionHidden += " hidden";
      // if (keyVal === "PersStatusDate") {
      //   type = "date";
      //   if (rowId) {
      //     value = dateISOToUS($(cell).text());
      //   }
      // }
      if (keyVal === "PersonnelID") value = $(cell).text();
      const paramsObj = {
        keyVal,
        labelVal,
        value,
        labelClassVal: "",
        classVal: "",
        option,
        optionHidden,
        type
      };

      result += elementInput(paramsObj);
    }
  }
  return [tableName, result];
};

const historyView = (PersonnelID) => {
  const blockName = "History";
  const dataObj =
    GetPersStatusHistory.length < 1
      ? [
          {
            PersonnelID,
            PersStatusDate: "",
            PersonnelStatID: "",
            PersonnelStatDesc: ""
          }
        ]
      : GetPersStatusHistory;

  // Sorting data by date, most recent first
  const historyData = dataObj.sort(
    (a, b) => new Date(b.PersStatusDate) - new Date(a.PersStatusDate)
  );

  const header = topBanner(blockName, [
    ["Date", "col-sm-2"],
    ["Status", "col-sm-10"]
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
