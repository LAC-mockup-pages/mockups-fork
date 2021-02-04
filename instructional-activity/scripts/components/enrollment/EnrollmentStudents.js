// Top part of Enrollment View displaying students enrolled

const reasonHashtable = [
  { key: "C", value: "Completion" },
  { key: "I", value: "Inactive" },
  { key: "T", value: "Transfer" },
  { key: "W", value: "Withdrawal" }
];

export const createStudentBloc = (dataList) => {
  const labelsStudentObj = {
    ID: "ID",
    Student_PKID: "Student_PKID",
    StudentID: "StudentID",
    StudentName: "Name",
    EnrollDate: "Start Date",
    InactiveDate: "End Date",
    InactiveReasonDesc: "Reason",
    TransferToDescription: "Transfer To",
    InactiveReason: "InactiveReason",
    TransferTo: "TransferTo",
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
  const hiddenList = [
    "ID",
    "Student_PKID",
    "StudentID",
    "InactiveReason",
    "TransferTo"
  ];
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
  <table class="table">
    ${studentTableHeader}
    <tbody>${tableRows}</tbody>
  </table>`;
};

export const editStudent = (rowId) => {
  let formContent = "";
  const selectedStudent = GetEnrollInfo.find((record) => record.ID === rowId);

  const {
    ID,
    Class_PKID,
    Student_PKID,
    StudentID,
    ClassID,
    StudentName,
    EnrollDate,
    ActiveStatus,
    InactiveDate,
    InactiveReason,
    TransferTo
  } = selectedStudent;

  // Fields needed for the object sent back to DB
  // and not displayed
  const hiddenFields = `
  <input class="hidden" name="ID" value=${ID}>
  <input class="hidden" name="Class_PKID" value=${Class_PKID}>
  <input class="hidden" name="ClassID" value=${ClassID}>
  <input class="hidden" name="Student_PKID" value=${Student_PKID}>
  `;

  // Fields displayed and active in any case.
  const studentDetails = `
  ${elementInput({
    keyVal: "StudentName",
    labelVal: "Student Name",
    value: StudentName,
    labelClassVal: "",
    classVal: "",
    option: "disabled",
    optionHidden: "form-group",
    type: "text"
  })}
  ${elementInput({
    keyVal: "StudentID",
    labelVal: "Student ID",
    value: StudentID,
    labelClassVal: "",
    classVal: "",
    option: "disabled",
    optionHidden: "form-group",
    type: "text"
  })}
  ${elementInput({
    keyVal: "EnrollDate",
    labelVal: "Start",
    value: EnrollDate,
    labelClassVal: "",
    classVal: "",
    option: "",
    optionHidden: "form-group",
    type: "text"
  })}${elementInput({
    keyVal: "InactiveDate",
    labelVal: "End",
    value: InactiveDate,
    labelClassVal: "",
    classVal: "",
    option: "placeholder='MM/DD/YYYY'",
    optionHidden: "form-group",
    type: "text"
  })}`;

  const activeStudent = InactiveDate ? "" : "disabled";

  // Fields displayed and disabled except if a value
  // exists in InactiveDate.
  const activeHashtable = [
    { key: "1", value: "Yes" },
    { key: "0", value: "No" }
  ];

  // Limiting the hashtable for TransferTo select
  // and removing the tranferred-from course
  const transferHashtable = GetTransferTo.slice(0)
    .map((record) => {
      const { Class_PKID, InstructionDescription } = record;
      return { Class_PKID, InstructionDescription };
    })
    .filter((record) => record.Class_PKID !== Class_PKID);

  const inactiveFields = `
  ${elementSelectModal({
    hashTable: reasonHashtable,
    keyValue: "InactiveReason",
    selectedValue: InactiveReason,
    labelVal: "Reason",
    labelClassVal: "",
    option: activeStudent,
    optionText: "a reason"
  })}
  ${elementSelectModal({
    hashTable: transferHashtable,
    keyValue: "TransferTo",
    selectedValue: TransferTo,
    labelVal: "Transfer To",
    labelClassVal: "",
    option: activeStudent,
    optionText: "a new course"
  })}
  ${elementSelectModal({
    hashTable: activeHashtable,
    keyValue: "ActiveStatus",
    selectedValue: ActiveStatus,
    labelVal: "Active",
    labelClassVal: "",
    option: activeStudent,
    optionText: ""
  })}`;

  formContent = `${hiddenFields}${studentDetails}${inactiveFields}`;

  return formContent;
};
