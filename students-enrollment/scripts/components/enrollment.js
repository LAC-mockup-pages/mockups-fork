//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Student Enrollment
//* =======================================

import { createOptionList, dateFormat } from "../main.js";

// Populating input element values
// Data source: /data-server.js/GetEnroll
export const enrollValues = (list, reasons, transferList, formName) => {
  // Sorting records in decreasing date of enrollment
  const orderedList = list.sort((record1, record2) =>
    record1.EnrollDate < record2.EnrollDate
      ? -1
      : record1.EnrollDate > record2.EnrollDate
      ? 1
      : 0
  );
  const tableBodyContent = [];

  for (const record of orderedList) {
    const {
      ID,
      Description,
      EnrollDate,
      InactiveDate,
      InactiveReason,
      TransferTo,
      ActiveStatus,
      FY
    } = record;
    const optionListReason = createOptionList(reasons, InactiveReason);
    const optionListTransfer = createOptionList(transferList, TransferTo);
    const optionListActive = createOptionList(
      [
        { key: "0", value: "No" },
        { key: "1", value: "Yes" }
      ],
      ActiveStatus === "checked" ? "1" : "0"
    );
    const row = `
    <tr id=${ID}>
      <td>
        <div class="form-field input-group">
        <input type="text" name="Description" value=${JSON.stringify(
          Description
        )} disabled>
        </div>
      </td>
      <td>
      <div class="form-field input-group">
      <input type="text" disabled name="EnrollDate" value=${EnrollDate} >
    </div>
      </td>
      <td>
      <div class="form-field input-group">
      <input type="text" disabled name="InactiveDate" value=${InactiveDate} >
    </div>
      </td>
      <td>
        <div class="form-field input-group">
        <select class="modal-select" name="InactiveReason" disabled>
        ${optionListReason}
      </select>
        </div>
      </td>
      <td>
        <div class="form-field input-group">
        <select class="modal-select" name="TransferTo" disabled>
        ${TransferTo ? optionListTransfer : ""}
      </select>
        </div>
      </td>
      <td>
      <select class="modal-select" name="ActiveStatus" disabled>
      ${optionListActive}
    </select>
  </div>
      </td>
    </tr>`;
    tableBodyContent.push(row);
  }
  $(formName).append(tableBodyContent.join(""));
};
