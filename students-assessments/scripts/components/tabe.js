//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: tabe11
//* =======================================

import {
  tabeForm,
  tabeLevels,
  tabeMode,
  tabeType,
  staffList,
  createOptionList,
  createStaffList
} from "../main.js";
// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

export const createTabeContent = (list) => {
  let tableBodyContent = [];
  const { FiscalYear } = createCredentials();
  const orderedList = list.sort((record1, record2) =>
    // DT#fromFormat <== Luxon method, "D" token describes mm/dd/yyyy format
    DT.fromFormat(record1.TABEDate, "D") > DT.fromFormat(record2.TABEDate, "D")
      ? -1
      : DT.fromFormat(record1.TABEDate, "D") <
        DT.fromFormat(record2.TABEDate, "D")
      ? 1
      : 0
  );
  for (const record of orderedList) {
    const {
      ID,
      TABEDate,
      TestType,
      TestForm,
      TestLevel,
      Pre_Post,
      TestMode,
      SubScore1,
      ScaleScore,
      NRSLevel,
      Personnel_PKID
    } = record;
    const optionListType = createOptionList(tabeType, TestType);
    const optionListForm = createOptionList(tabeForm, TestForm);
    const optionListLevel = createOptionList(tabeLevels, TestLevel);
    const optionListMode = createOptionList(tabeMode, TestMode);
    const optionListStaff = createOptionList(
      createStaffList(staffList),
      Personnel_PKID
    );
    const row = `
    <tr id=${ID} data-original-title="Click to Edit" data-toggle="tooltip" data-placement="left" >
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="TABEDate" value=${TABEDate}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="TestType">
            ${optionListType}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="TestForm">
            ${optionListForm}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="TestLevel">
            ${optionListLevel}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="Pre_Post" value=${Pre_Post}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="TestMode">
            ${optionListMode}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="SubScore" value=${SubScore1}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
        <input type="text" disabled name="ScaleScore" value=${ScaleScore}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="NRSLevel" value=${NRSLevel}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="Personnel_PKID">
            ${optionListStaff}
          </select>
        </div>
      </td>
    </tr>
  `;
    tableBodyContent.push(row);
  }
  return tableBodyContent.join("");
};
