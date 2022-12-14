//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Public assistance
//* =======================================

import { createOptionList } from "../main.js";

// Data sources: /original-data/student-data-additional.js/GetPAStatusInfo
//          /original-data/student-data-additional.js/GetPASource
export const assistanceValues = (list, source) => {
  // Sorting records from most recent FY to oldest FY
  const orderedList = list.sort((record1, record2) =>
    record1.PAFY > record2.PAFY ? -1 : record1.PAFY < record2.PAFY ? 1 : 0
  );
  const tableBodyContent = [];
  for (const record of orderedList) {
    let { ID, PACatID, PAFY, PACaseNum, PAExhaustTANF } = record;
    const optionList = createOptionList(source, PACatID);
    PAExhaustTANF = PAExhaustTANF ? PAExhaustTANF : "0";
    const optionListYesNo = createOptionList(
      [
        { key: "0", value: "No" },
        { key: "1", value: "Yes" }
      ],
      PAExhaustTANF
    );
    const row = `
    <tr id=${ID} data-toggle="tooltip" data-placement="left"
      title="Click to Edit">
      <td>
        <div class="input-field form-group">
          <select class="modal-select" disabled name="PACatID" >
            ${optionList}
          </select>
        </div>
      </td>
      <td>
        <div class="input-field form-group">
          <input type="text" disabled name="PAFY" value=${PAFY} >
        </div>
      </td>
      <td>
        <div class="input-field form-group">
          <input type="text" disabled name="PACaseNum" value=${PACaseNum} >
        </div>
      </td>
      <td>
        <div class="input-field form-group">
          <select disabled class="modal-select" name="PAExhaustTANF" >
            ${optionListYesNo}
          </select>
        </div>
      </td>
    </tr>`;
    tableBodyContent.push(row);
  }
  $(".assistance tbody").append(tableBodyContent.join(""));
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();
};

//
export const addNewAssistance = (source, record = {}) => {
  const labels = {
    PACatID: "Type",
    PAFY: "FY",
    PACaseNum: "Case number",
    PAExhaustTANF: "Exhaust TANF"
  };
  const content = [];
  const { FiscalYear } = createCredentials();
  for (const key in labels) {
    const labelText = labels[key];
    let field = "";
    let labelClassVal = "";
    let option = "";
    if (["Type", "Exhaust TANF"].includes(labelText)) {
      const hashTable =
        labelText === "Type"
          ? source
          : [
              { key: "0", value: "No" },
              { key: "1", value: "Yes" }
            ];
      labelClassVal = "class='red-text'";
      option = "required";
      let selectedValue =
        !record[key] && labelText === "Exhaust TANF" ? "0" : record[key];
      // elementSelectModal() <== helpers/helperFunctions.js
      field = elementSelectModal({
        hashTable,
        keyValue: key,
        selectedValue,
        labelVal: labelText,
        labelClassVal,
        option,
        optionText: ""
      });
    } else {
      let value = record[key] ? record[key] : "";
      if (labelText === "FY") {
        value = FiscalYear;
        option = "disabled";
      }
      // elementInput() <== helpers/helperFunctions.js
      field = elementInput({
        keyVal: key,
        labelVal: labelText,
        value,
        labelClassVal: "",
        classVal: "",
        option,
        optionHidden: "form-group",
        type: "text"
      });
    }
    content.push(field);
  }
  return content.join("");
};
