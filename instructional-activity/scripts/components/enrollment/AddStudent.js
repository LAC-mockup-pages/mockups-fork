// Adding  a new student to course roster

export const addStudentModalForm = (coursePKId, classID, classStart) => {
  const hashTable = GetStudentLookup.slice(0).map((record) => {
    return { ID: record.ID, StudentName: record.StudentName };
  });

  const selectStudentName = elementSelectModal({
    hashTable,
    keyValue: "Student_PKID",
    selectedValue: "",
    labelVal: "Student Name",
    labelClassVal: "class='red-text'",
    option: "",
    optionText: "a student"
  });

  const hiddenFields = `
  <input class="hidden" name="Class_PKID" value=${coursePKId}>
  <input class="hidden" name="ClassID" value=${classID}>
  `;

  const startDate = classStart
    ? classStart
    : dateFormat(new Date().toLocaleDateString());

  // console.log("startDate :>> ", startDate);

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
  ${selectStudentName}
  ${inputEnrollDate}
  `;
};
