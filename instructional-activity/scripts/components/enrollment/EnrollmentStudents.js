// Top part of Enrollment View displaying students enrolled

export const createStudentBloc = (dataList) => {
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
  let tableRows = "";
  const recordList = dataList
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
    tableRows += createRow({ record, labelList, labelObj, hiddenList });
  }

  return `
  <table class="table" id="student-table">
    ${studentTableHeader}
    <tbody>${tableRows}</tbody>
  </table>`;
};
