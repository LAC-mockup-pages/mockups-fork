// Hours view for the students in a selected course
// Accessible only from the Enrollment and Details views.

export const createStudentsBloc = (classId) => {
  let body = "";
  const yearlyHours = GetContactHours_Annual.slice(0);

  const months = [
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
    "Jan.",
    "Fev.",
    "Mar.",
    "Apr.",
    "May",
    "Jun."
  ];

  for (const record of yearlyHours) {
    const { ID, Class_PKID, Student_PKID, StudentName, BirthDate } = record;
    let monthValues = "";

    const monthlyHours = Object.keys(record).filter((field) =>
      field.includes("Hours")
    );

    for (const key of monthlyHours) {
      const value = record[key];
      monthValues += `
      <td class="cell-data month-value">
        <input class="cell-input" name=${key} value=${value}>
      </td>
      `;
    }

    body += `
    <tr id=${ID} data-class=${Class_PKID} data-student=${Student_PKID}>
      <td class="cell-data student-name">${StudentName}</td>
      <td class="cell-data dob">${BirthDate}</td>
      ${monthValues}
    </tr>
    `;
  }

  // createHeaders() <== helperFunctions.js
  const header = createHeaders(["Student", "DOB", ...months]);

  return `
  <div class="container-fluid row blue-light-text" id="student-hours">
    <div class="student-title label-text col-md-4">${classId}</div>
    <div class="label-text col-md-2">Student Hours</div>
  </div>
  <form class="student-hours" role="form" id="student-hours-form">
    <table class="table table-condensed" id="student-hours-table">
      ${header}
      <tbody class="student-hours-body">
        ${body}
      </tbody>
    </table>
  </form>

  `;
};
