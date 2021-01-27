// Adding  a new student to course roster

export const addStudentModalForm = (coursePKId, classID) => {
  const hashTable = GetStudentLookup.slice(0).map((record) => {
    return { ID: record.ID, StudentName: record.StudentName };
  });

  const selectStudentName = elementSelectModal({
    hashTable,
    keyValue: "Student_PKID",
    selectedValue: "",
    labelVal: "Student Name",
    labelClassVal: "",
    option: "",
    optionText: "a student"
  });

  // const enrollDate=
};
