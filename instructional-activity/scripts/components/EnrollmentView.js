// Displays student enrollment for a course
// and instructors hours

const createStudentBloc = (dataList) => {
  const labelsStudentObj = {
    ID: "ID",
    Student_PKID: "Student_PKID",
    StudentID: "StudentID",
    StudentName: "Name",
    EnrollDate: "Start Date",
    InactiveDate: "End Date",
    InactiveReason: "Reason",
    TransferTo: "Transfer To",
    ActiveStatus: "Status"
  };
  let row = "";
  const hiddenList = ["ID", "Student_PKID", "StudentID"];
  const labelsList = Object.keys(labelsStudentObj).map(
    (item) => labelsStudentObj[item]
  );

  const headerLabelList = labelsList.filter(
    (label) => !hiddenList.includes(label)
  );
  // console.log("labelsList :>> ", labelsList);

  // createHeaders() <== helperFunctions.js
  const studentTableHeader = createHeaders(headerLabelList);

  // createRow() <== helperFunctions.js

  return `
  <table class="table" id="student-table">${studentTableHeader}${studentTableBody}</table>`;
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
  <div class="container-fluid" id="enrollment-bloc" data-course-id=${courseID}>
    ${mainBanner}
    ${studentTable}
  </div>`;
};
