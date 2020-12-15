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
  const recordList = GetEnrollInfo.slice(0)
    .map((record) => {
      const ActiveStatus = record.ActiveStatus === "1" ? "Active" : "Inactive";
      return { ...record, ActiveStatus };
    })
    .sort((rec1, rec2) =>
      rec1.StudentName < rec2.StudentName
        ? -1
        : rec1.StudentName > rec2.StudentName
        ? 1
        : 0
    );
  const hiddenList = ["ID", "Student_PKID", "StudentID"];
  const labelsList = Object.keys(labelsStudentObj).map(
    (item) => labelsStudentObj[item]
  );

  const labelList = Object.keys(labelsStudentObj);

  const headerLabelList = labelsList.filter(
    (label) => !hiddenList.includes(label)
  );

  // createHeaders() <== helperFunctions.js
  const studentTableHeader = createHeaders(headerLabelList);
  for (const record of recordList) {
    const labelObj = labelsStudentObj;
    // createRow() <== helperFunctions.js
    row += createRow({ record, labelList, labelObj, hiddenList });
  }

  return `
  <table class="table" id="student-table">
    ${studentTableHeader}
    <tbody>${row}</tbody>
  </table>`;
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
