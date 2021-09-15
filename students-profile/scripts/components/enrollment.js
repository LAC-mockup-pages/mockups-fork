//* Processing student info for Enrollment section of Profile page
//* =====================================================

export const enrollmentSection = (dataList) => {
  let body = "";
  const totalHours = 0;
  const header = `
  <thead>
    <tr class="blue-light-bg">
      <th>Course</th>
      <th>Status</th>
      <th>Contact hrs</th>
    </tr>
  </thead>`;

  for (const record of dataList) {
    //      body = `
    // <tbody>
    //   <tr>
    //     <td>${}</td>
    //     <td>${}</td>
    //     <td>${}</td>
    //   </tr>
    // </tbody>
    // `;
  }

  const table = `
<table class="table table-bordered enrollment-table">
  ${header}${body}
</table>
`;

  const sectionContent = `
<div class="box-title">Current year enrollments</div>
${table}`;
  return [".enrollments", sectionContent];
};
