//* Processing student info for Enrollment section of Profile page
//* =====================================================

export const enrollmentSection = (dataList) => {
  let rows = "";
  let sectionContent = "";
  let totalHours = 0;

  // Checks if datalist has at least one valid record or an
  // empty object.
  if (dataList[0].ClassID) {
    const header = `
      <thead>
        <tr class="blue-light-bg">
          <th>Course</th>
          <th>Status</th>
          <th>Contact hrs</th>
        </tr>
      </thead>
  `;
    for (const record of dataList) {
      const { ClassID, ActiveStudent, Hours } = record;
      const status = ActiveStudent === "1" ? "Active" : "Inactive";
      rows += `
        <tr>
          <td>${ClassID}</td>
          <td>${status}</td>
          <td>${Hours}</td>
        </tr>
      `;
      totalHours += Number(Hours);
    }
    const table = `
      <table class="table table-bordered enrollment-table">
        ${header}
        <tbody>
          ${rows}
        </tbody>
      </table>
      <div class="total-hours blue-light-bg blue-text">Total contact hours: ${totalHours}</div>
`;
    sectionContent = `
      <div class="box-title">Current year enrollments</div>
      ${table}
`;
  } else {
    sectionContent = `
      <div class="box-title">Current year enrollments</div>
      <div class="no-data">No current enrollment</div>
  `;
  }
  return [".enrollments", sectionContent];
};
