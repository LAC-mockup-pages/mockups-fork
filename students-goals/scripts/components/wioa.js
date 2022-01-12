//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: wioa
//* =======================================

import {
  createOptionList,
  modalOptionWioa,
  outcomeList,
  credentialList
} from "../main.js";
// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

export const createWioaContent = (list, outcomes, credentials) => {
  const tableBodyContent = [];
  const orderedList = list.sort((record1, record2) =>
    // DT#fromFormat <== Luxon method, "D" token describes mm/dd/yyyy format
    DT.fromFormat(record1.SurveyDate, "D") >
    DT.fromFormat(record2.SurveyDate, "D")
      ? -1
      : DT.fromFormat(record1.SurveyDate, "D") <
        DT.fromFormat(record2.SurveyDate, "D")
      ? 1
      : 0
  );

  for (const record of orderedList) {
    const {
      ID,
      OutcomeID,
      OutcomeFY,
      Quarter,
      SurveyDate,
      OutcomeDate,
      Income,
      NYSED_CredentialID
    } = record;
    const optionListOutcome = createOptionList(outcomeList, OutcomeID);
    const optionListCredential = createOptionList(
      credentialList,
      NYSED_CredentialID
    );

    // currencyFormat() <== helpers/helperFunctions.js
    const formatedIncome = currencyFormat(Income);
    const row = `
    <tr id=${ID} data-original-title="Click to Edit" data-toggle="tooltip" data-placement="left">
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="OutComeID">
            ${optionListOutcome}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="OutcomeFY" value=${OutcomeFY}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="Quarter" value=${Quarter}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="SurveyDate" value=${SurveyDate}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="OutcomeDate" value=${OutcomeDate}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="Income" value=${formatedIncome}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="NYSED_CredentialID">
            ${optionListCredential}
          </select>
        </div>
      </td>
    </tr>
    `;
    tableBodyContent.push(row);
  }
  return tableBodyContent.join("");
};
