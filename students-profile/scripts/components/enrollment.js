//* Processing student info for Enrollment section of Profile page
//* =====================================================

export const enrollmentSection = (dataList) => {
  let rows = "";
  let totalHours = 0;
  const header = `
  <thead>
    <tr class="blue-light-bg">
      <th>Course</th>
      <th>Status</th>
      <th>Contact hrs</th>
    </tr>
  </thead>`;

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

  console.log("totalHours :>> ", totalHours);

  const table = `
<table class="table table-bordered enrollment-table">
  ${header}
  <tbody>
    ${rows}
  </tbody>
</table>
`;
  const sectionContent = `
<div class="box-title">Current year enrollments</div>
${table}`;
  return [".enrollments", sectionContent];
};
