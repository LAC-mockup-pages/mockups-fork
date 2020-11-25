import { topBanner, tableBody } from "../main.js";

export const contactsView = () => {
  const blockName = "Progress Contact";
  const header = topBanner(blockName, [
    ["Date", "col-sm-2"],
    ["Type", "col-sm-2"],
    ["Notes", "col-sm-8"]
  ]);
  // Sorting by date descending
  const recordList = getPersProgressContacts.sort(
    (a, b) => new Date(b.ContactDate) - new Date(a.ContactDate)
  );
  recordList.forEach(
    (record) => (record.ContactDesc = record.ContactDesc.trim())
  );
  const body = tableBody(
    recordList,
    blockName,
    ["ID", "PersonnelID", "ContactType"],
    {
      ContactDate: "Date",
      ContactType: "Type",
      ContactNotes: "Notes"
    },
    "PersProgressContacts"
  );

  return `${header}${body}`;
};

export const createFormAddContact = (formName, rowId = null) => {
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
    if (["Type", "ContactDesc"].includes(keyVal)) continue;
    if (keyVal === "ContactType") {
      const selectedValue = rowId ? value : "";
      const paramsSelect = {
        hashTable: getPersContactsCodes,
        keyValue: keyVal,
        selectedValue,
        labelVal,
        labelClassVal: "",
        option
      };

      // elementSelectModal() <== helperFunctions.js
      result += elementSelectModal(paramsSelect);
    } else {
      let classVal = "";
      if (keyVal === "ID") optionHidden = "hidden";
      if (keyVal === "PersonnelID") value = $(cell).text();
      if (keyVal === "ContactDate") {
        classVal = "style='width:20%'";
        option = "placeholder='MM/DD/YYYY'";
      }
      const paramsObj = {
        keyVal,
        labelVal,
        value,
        labelClassVal: "",
        classVal,
        option,
        optionHidden
      };
      result += elementInput(paramsObj);
    }
  }
  return [tableName, result];
};
