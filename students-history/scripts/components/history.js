//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: History
//* =======================================

import { createOptionList } from "../main.js";

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

// Populating the main table
// Data sources:  /data-server/GetHistory
//                /data-server/GetStatusDescSource
//                /data-server/GetGetSepReasons
//                /data-server/GetGEDCenter_TASC
export const tableValues = (list, descriptions, reasons, centers) => {
  // Sorting records in decreasing date of enrollment
  const orderedList = list.sort((record1, record2) =>
    // DT#fromFormat <== Luxon method, "D" token describes mm/dd/yyyy format
    DT.fromFormat(record1.StatusDate, "D") >
    DT.fromFormat(record2.StatusDate, "D")
      ? -1
      : DT.fromFormat(record1.StatusDate, "D") <
        DT.fromFormat(record2.StatusDate, "D")
      ? 1
      : 0
  );
  const tableBodyContent = [];
  for (const record of orderedList) {
    const { ID, StatusDate, StatusID, ExitReasonID, GEDCenterID } = record;
    const optionListStatus = createOptionList(descriptions, StatusID);
    const optionListReasons = createOptionList(reasons, ExitReasonID);
    const optionListCenters = createOptionList(centers, GEDCenterID);

    const row = `
    <tr id=${ID} data-original-title="Click to Edit" data-toggle="tooltip"
    data-placement="left" >
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="StatusDate" value=${StatusDate} >
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="StatusID">
            ${optionListStatus}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="ExitReasonID">
            <option></option>
            ${optionListReasons}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="GEDCenterID">
            <option></option>
            ${optionListCenters}
          </select>
        </div>
      </td>
    </tr>`;

    tableBodyContent.push(row);
  }
  $(".history-table tbody").append(tableBodyContent.join(""));
};
