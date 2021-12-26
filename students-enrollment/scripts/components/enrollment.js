//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Student Enrollment
//* =======================================

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

import { createOptionList } from "../main.js";

// Populating input element values
// Data source: /data-server.js/GetEnroll
export const enrollValues = (
  list,
  courses,
  reasons,
  transferList,
  formName
) => {
  // Sorting records in decreasing date of enrollment
  const orderedList = list.sort((record1, record2) =>
    // DT#fromFormat <== Luxon method, "D" token describes mm/dd/yyyy format
    DT.fromFormat(record1.EnrollDate, "D") >
    DT.fromFormat(record2.EnrollDate, "D")
      ? -1
      : DT.fromFormat(record1.EnrollDate, "D") <
        DT.fromFormat(record2.EnrollDate, "D")
      ? 1
      : 0
  );
  const tableBodyContent = [];

  for (const record of orderedList) {
    const {
      ID,
      DescriptionKey,
      EnrollDate,
      InactiveDate,
      InactiveReason,
      Transfer_PKID,
      ActiveStatus,
      FY
    } = record;
    const optionListCourse = createOptionList(courses, DescriptionKey);
    const optionListReason = createOptionList(reasons, InactiveReason);
    const optionListTransfer = createOptionList(transferList, Transfer_PKID);
    const optionListActive = createOptionList(
      [
        { key: "0", value: "No" },
        { key: "checked", value: "Yes" }
      ],
      ActiveStatus
    );
    const row = `
    <tr id=${ID} data-original-title="Click to Edit" data-toggle="tooltip"
    data-placement="left" >
      <td>
        <div class="form-group input-field">
        <select class="modal-select" disabled name="DescriptionKey">
        ${optionListCourse}
      </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="EnrollDate" value=${EnrollDate} >
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="InactiveDate" value=${InactiveDate} >
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="InactiveReason">
            <option value></option>
            ${optionListReason}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="Transfer_PKID" >
            <option value></option>
            ${optionListTransfer}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="ActiveStatus" >
            ${optionListActive}
          </select>
        </div>
      </td>
    </tr>`;
    tableBodyContent.push(row);
  }
  $(formName).append(tableBodyContent.join(""));
};

export const addNewRecord = (courses, reasons, transfers, caseFlag = "0") => {
  const labels = {
    DescriptionKey: "Course",
    FY: "Fiscal Year",
    EnrollDate: "Started",
    InactiveDate: "Left",
    InactiveReason: "Reason",
    Transfer_PKID: "Transfer to",
    ActiveStatus: "Active"
  };
  const content = [];
  const ISCMP = caseFlag;
  // createCredentials() ==> helpers/helperFunctions.js
  const { FiscalYear } = createCredentials();
  const optionListCourse = createOptionList(courses);
  const optionListReason = createOptionList(reasons);
  const optionListTransfer = createOptionList(transfers);
  const optionListActive = createOptionList([
    { key: "0", value: "No" },
    { key: "checked", value: "Yes" }
  ]);
  for (const key in labels) {
    const labelText = labels[key];
    let rowContent = "";

    switch (key) {
      case "DescriptionKey":
        rowContent = `
        <select class="modal-select name=${key}>
          <option value>Select a course</option>
          ${optionListCourse}
        </select>
        `;
        break;
      case "InactiveReason":
        rowContent = `
          <select class="modal-select name=${key}>
            <option value>Select a reason</option>
            ${optionListReason}
          </select>
        `;
        break;
      case "Transfer_PKID":
        rowContent = `
        <select class="modal-select name=${key}>
          <option value>Select a transfer</option>
          ${optionListTransfer}
        </select>
      `;
        break;
      case "ActiveStatus":
        rowContent = `
        <select class="modal-select name=${key}>
          <option value>Select a status</option>
          ${optionListActive}
        </select>
      `;
        break;
      default:
        rowContent = `
      <input type="date" name=${key} value >`;
        break;
    }
    const row = `
    <div class="form-group input-field">
      <label for=${key}>${labelText}></label>
      ${rowContent}
    </div>
    `;
    content.push(row);
  }
  const editFormContent = content.join("");
  return { editFormContent, ISCMP };
};
