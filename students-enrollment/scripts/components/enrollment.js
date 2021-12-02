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
    // const optionListReason = InactiveReason
    //   ? createOptionList(reasons, InactiveReason)
    //   : "";

    const optionListReason = createOptionList(reasons, InactiveReason);

    const optionListTransfer = createOptionList(transferList, Transfer_PKID);
    const optionListActive = createOptionList(
      [
        { key: "", value: "No" },
        { key: "checked", value: "Yes" }
      ],
      ActiveStatus
    );
    const row = `
    <tr id=${ID}>
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
