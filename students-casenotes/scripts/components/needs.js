//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: needs
//* =======================================

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

export const createNeedsContent = (list) => {
  const tableBodyContent = [];
  const orderedList = list.sort((record1, record2) =>
    // DT#fromFormat <== Luxon method, "D" token describes mm/dd/yyyy format
    DT.fromFormat(record1.AssessmentDate, "D") >
    DT.fromFormat(record2.AssessmentDate, "D")
      ? -1
      : DT.fromFormat(record1.AssessmentDate, "D") <
        DT.fromFormat(record2.AssessmentDate, "D")
      ? 1
      : 0
  );

  for (const record of orderedList) {
    const {
      AssessmentDate,
      AssessmentTitle,
      AssessmentNotes,
      KeyCodeDescription
    } = record;
    const row = `
    <tr>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="AssessmentDate" value=${AssessmentDate}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="AssessmentTitle" value=${AssessmentTitle}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="AssessmentNotes" value=${AssessmentNotes}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="KeyCodeDescription" value=${KeyCodeDescription}>
        </div>
      </td>
    </tr>
    `;
    tableBodyContent.push(row);
  }
  return tableBodyContent.join("");
};
