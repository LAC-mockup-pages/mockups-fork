import { topBanner, tableBody, elementSelectWithLabel } from "../main.mjs";
import {
  getPersProgressContacts,
  getPersContactsCodes,
} from "../data-server.mjs";

export const contactsView = () => {
  const blockName = "Progress Contact";
  const header = topBanner(blockName, [
    ["Date", "col-sm-2"],
    ["Type", "col-sm-2"],
    ["Notes", "col-sm-8"],
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
      ContactNotes: "Notes",
    },
    "PersProgressContacts"
  );

  return `<div class="col-md-6">
            ${header + body}
          </div>`;
};

export const createFormAddContact = (formName) => {
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
    if (["ID", "Type", "ContactDesc"].includes(keyVal)) continue;
    if (keyVal === "ContactType") {
      const paramsSelect = {
        hashTable: getPersContactsCodes,
        keyValue: keyVal,
        selectedValue: "",
        labelVal,
        labelClassVal: "",
        option,
      };
      result += elementSelectWithLabel(paramsSelect);
    } else {
      let classVal = "";
      if (keyVal === "PersonnelID") value = $(cell).text();
      if (keyVal === "ContactDate")
        classVal = "style='width:20%;text-align:center'";
      const paramsObj = {
        keyVal,
        labelVal,
        value,
        labelClassVal: "",
        classVal,
        option,
        optionHidden,
      };
      result += elementInput(paramsObj);
    }
  }
  return [tableName, result];
};
