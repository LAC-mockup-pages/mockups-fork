// Bloc for main instructor and additional intructors
// For display and editing of the list

import { topBanner, tableBody } from "../../main.js";
const instructorList = GetClassInstructor.slice(0).sort((name1, name2) =>
  name1.Name < name2.Name ? -1 : name1.Name > name2.Name ? 1 : 0
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

export const addInstructor = () => {
  const currentInstructors = instructorList.map(
    (instructor) => instructor.PersonnelID
  );
  const filteredInstructors = potentialInstructors(currentInstructors);
  const dateAssigned = elementInput({
    keyVal: "AssignDate",
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

export const editInstructor = (rowId) => {
  const instructor = GetClassInstructor.find((record) => record.ID === rowId);

  const hiddenField = `
  <input class="hidden" name="ID" value=${instructor.ID}>
  <input class="hidden" name="PersonnelID" value=${instructor.PersonnelID}>`;

  const dateAssigned = elementInput({
    keyVal: "AssignDate",
    labelVal: "Date Assigned",
    value: instructor.AssignDate,
    labelClassVal: "",
    classVal: "",
    option: "",
    optionHidden: "form-group"
  });

  const instructorName = elementInput({
    keyVal: "Name",
    labelVal: "Instructor",
    value: instructor.Name,
    labelClassVal: "",
    classVal: "",
    option: "disabled",
    optionHidden: "form-group"
  });

  return `${hiddenField}${instructorName}${dateAssigned}`;
};
