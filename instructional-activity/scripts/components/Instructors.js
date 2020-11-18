// Bloc for main instructor and additional intructors
// For display and editing of the list

import { topBanner, tableBody } from "../main.js";
const instructorList = GetClassInstructor.slice(0).sort((name1, name2) =>
  name1.InstructorName < name2.InstructorName
    ? -1
    : name1.InstructorName > name2.InstructorName
    ? 1
    : 0
);

export const createInstructorsBloc = () => {
  const title = "Instructors";
  const header = topBanner(title, [
    ["Date Assigned", "col-sm-3"],
    ["Instructors", "col-sm-9"]
  ]);

  const hiddenFields = ["PersonnelID"];
  const labelObj = { AssignDate: "Date Assigned", Name: "Name" };

  const body = tableBody(
    instructorList,
    title,
    hiddenFields,
    labelObj,
    "GetClassInstructor"
  );
  return header + body;
};

const potentialInstructors = (currentPersIDList) => {
  return GetInstructor.slice(0)
    .filter((instructor) => !currentPersIDList.includes(instructor.PersonnelID))
    .map((item) => {
      const { PersonnelID, InstructorName } = item;
      return { PersonnelID, InstructorName };
    });
};

export const addInstructor = (trList) => {
  const currentInstructors = instructorList.map(
    (instructor) => instructor.PersonnelID
  );
  const filteredInstructors = potentialInstructors(currentInstructors);
  const dateAssigned = elementInput({
    keyVal: "DateAssign",
    labelVal: "Date Assigned",
    value: "",
    labelClassVal: "",
    classVal: "",
    option: "placeholder='MM/DD/YYYY'",
    optionHidden: "form-group"
  });

  const selectInstructor = elementSelectModal({
    hashTable: filteredInstructors,
    keyValue: "PersonnelID",
    selectedValue: "",
    labelVal: "Instructor",
    labelClassVal: "",
    option: "",
    optionText: "an instructor"
  });

  return `${dateAssigned}${selectInstructor}`;
};
