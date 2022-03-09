// Hours view for the students in a selected course
// Accessible only from the Enrollment and Details views.

// Update total value when a month value is entered/updated
export const updateTotal = (rowId, totalReference) => {
  const totalList = $(`#${rowId} .cell-input`).serializeArray();
  const totalCell = $(`#${rowId} .${totalReference}`);
  const totalHours = totalList.reduce(
    (tot, record) => tot + (Number(record.value) || 0),
    0
  );
  $(totalCell).text(totalHours);
};

export const updateCourseTotal = () => {
  const studentTotalList = $(".student-hours-body .student-total").clone();
  const totalValueList = [];
  studentTotalList.each(function (indx) {
    const value = $(this).text();
    totalValueList.push(value);
  });
  const totalCourseHours = totalValueList.reduce(
    (tot, num) => tot + Number(num),
    0
  );
  $(".large-number").text(totalCourseHours);
};

export const createStudentsBloc = (classId, buttonState) => {
  let body = "";

  // Sorting alphabetically by Student Name
  const yearlyHours = GetContactHours_Annual.slice(0).sort((record1, record2) =>
    record1.StudentName < record2.StudentName ? -1 : record1 > record2 ? 1 : 0
  );

  const months = [
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun."
  ];
  let courseTotal = 0;

  for (const record of yearlyHours) {
    const { ID, Class_PKID, Student_PKID, StudentName, BirthDate } = record;
    let monthValues = "";
    let studentTotal = 0;

    const monthlyHours = Object.keys(record).filter((field) =>
      field.includes("Hours")
    );

    for (const key of monthlyHours) {
      const value = record[key];
      studentTotal += value ? Number(value) : 0;
      courseTotal += value ? Number(value) : 0;
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
      <td class="cell-data student-total">${studentTotal}</td>
    </tr>
    `;
  }

  // createHeaders() <== helperFunctions.js
  const header = createHeaders(["Name", "Birth Date", ...months, "Total"]);

  return `
  <div class="container-fluid blue-light-text" id="student-hours">
    <div class="row">
      <div class="student-title label-text col-md-4">${classId} | Student Hours</div>
      <div class="label-text col-md-5"></div>
      <div class="container-fluid row col-md-3">
        <button type="button" id="student-hours-btn" class="btn dark-blue-text blue-light-bg col-sm-6"${buttonState}>Save</button>
        <button type="button" id="daily-btn" class="btn dark-blue-text yellow-bg col-sm-6">Daily Input</button>
      </div>
    </div>
    <div class="student-title label-text" id="course-total">Total Student hours for the Course: <span class="large-number"> ${courseTotal}</span></div>
  </div>
  <div class="scrolling">
    <table class="table table-condensed scrolling-hours" id="hours-table">
      ${header}
      <tbody class="student-hours-body">
        ${body}
      </tbody>
    </table>
  </div>
  `;
};
