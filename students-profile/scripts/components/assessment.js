//* Processing student info for Assessment section of Profile page
//* =====================================================

export const assessmentSection = (dataList) => {
  let rows = "";
  let sectionContent = "";
  if (dataList[0].Student_PKID) {
    const header = `
      <thead>
        <tr class="blue-light-bg">
          <th></th>
          <th>Test</th>
          <th>Form</th>
          <th>Score</th>
          <th>NRS/NYRS level</th>
        </tr>
      </thead>`;

    for (const record of dataList) {
      const { TestName, TestDesc, TestForm, ScaleScore, NRSLevel, NYRSLevel } =
        record;
      rows += `
      <tr>
        <td>${TestDesc}</td>
        <td>${TestName}</td>
        <td>${TestForm}</td>
        <td>${ScaleScore}</td>
        <td>${NRSLevel} / ${NYRSLevel}</td>
      </tr>`;

      const table = `
      <table class="table table-bordered enrollment-table">
        ${header}
        <tbody>
          ${rows}
        </tbody>
      </table>
`;
      sectionContent = `
      <div class="box-title">Assessments of record</div>
  ${table}
`;
    }
  } else {
    sectionContent = `
      <div class="box-title">Assessments of record</div>
      <div class="no-data">No current validated assessment</div>
`;
  }
  return [".assessments", sectionContent];
};
