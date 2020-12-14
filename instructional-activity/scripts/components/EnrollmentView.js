// Displays student enrollment for a course
// and instructors hours

const createStudentBloc = (dataList) => {
  const labelsStudentObj = {
    ID: "ID",
    Student_PKID: "StudentPKID",
    StudentID: "Student ID",
    StudentName: "Name",
    EnrollDate: "Start Date",
    ActiveStatus: "Status",
    InactiveDate: "End Date",
    InactiveReason: "Reason",
    TransferTo: "Transfer To"
  };

  const list = Object.keys(labelsStudentObj).map(
    (item) => labelsStudentObj[item]
  );

  console.log("list :>> ", list);

  // createHeaders() <== helperFunctions.js
  const studentTableHeader = createHeaders(list);
  const studentTableBody = "<h3>Table body</h3>";

  return `
  <div>${studentTableHeader}</div>
  <div>${studentTableBody}</div>`;
};

export const createEnrollmentView = (courseID, courseName) => {
  const mainBanner = `
  <div class="blue-bg container-fluid row" id="main-banner">
    <div class="label-text blue-light-text col-md-10">${courseName}</div>
    <div class="col-md-2">
    <button type="button" id="add-student-btn" class="btn dark-blue-text blue-light-bg">Add Student</button></div>
  </div>`;

  const studentTable = createStudentBloc(GetEnrollInfo);

  return `
  < class="container-fluid" id="enrollment-bloc" data-course-id=${courseID}>
    ${mainBanner}
    ${studentTable}
  </div>`;
};
