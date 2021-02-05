// Adding  a new student to course roster

export const createStudentDataList = (list) => {
  let optionList = "";
  for (const student of list) {
    optionList += `<option value=${student.ID}>${student.StudentName}</option>`;
  }
  return optionList;
};

export const addStudentModalForm = (coursePKId, classID, classStart) => {
  const hashTable = GetStudentLookup.slice(0).map((record) => {
    return {
      ID: record.ID,
      StudentName: `${record.StudentName} - ${record.StudentID}`
    };
  });

  const studentNameTest = `
  <div class="input-field form-group">
    <label for="Student_PKID" class="red-text">Student Name
    </label>
    <input type="text" id="Student_PKID-view" name="Student_PKID" list="student-list"/>
    <datalist id="student-list">
    </datalist>
  </div>`;

  // const selectStudentName = elementSelectModal({
  //   hashTable,
  //   keyValue: "Student_PKID",
  //   selectedValue: "",
  //   labelVal: "Student Name",
  //   labelClassVal: "class='red-text'",
  //   option: "",
  //   optionText: "a student"
  // });
  const hiddenFields = `
  <input class="hidden" name="Class_PKID" value=${coursePKId}>
  <input class="hidden" name="ClassID" value=${classID}>
  `;
  const startDate = classStart
    ? classStart
    : dateFormat(new Date().toLocaleDateString());
  const inputEnrollDate = elementInput({
    keyVal: "EnrollDate",
    labelVal: "Start",
    value: startDate,
    labelClassVal: "class='red-text'",
    classVal: "",
    option: 'placeholder="MM/DD/YYYY"',
    optionHidden: "form-group",
    type: "text"
  });
  return `
  ${hiddenFields}
  ${studentNameTest}
  ${inputEnrollDate}
  `;
};

export const completeNewStudent = (fieldList) => {
  const fiscalYear = SESSION_VARIABLE[0].FiscalYear;
  const studentId = fieldList.find((record) => record.name === "Student_PKID")
    .value;
  const student = GetStudentLookup.find((record) => record.ID === studentId);
  const additionalFields = [
    { name: "StudentID", value: student.StudentID },
    { name: "StudentName", value: student.StudentName },
    { name: "ActiveStatus", value: "1" },
    { name: "InactiveDate", value: "" },
    { name: "InactiveReason", value: "" },
    { name: "TransferTo", value: "" },
    { name: "TransferToDescription", value: "" },
    { name: "InactiveReasonDescription", value: "" },
    { name: "FY", value: fiscalYear }
  ];
  return [...fieldList, ...additionalFields];
};
