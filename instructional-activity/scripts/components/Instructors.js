// Bloc for main instructor and additional intructors
// For display and editing of the list

import { topBanner, tableBody } from "../main.js";

export const createInstructorsBloc = () => {
  const instructorList = GetClassInstructor.slice(0).sort((name1, name2) =>
    name1.InstructorName < name2.InstructorName
      ? -1
      : name1.InstructorName > name2.InstructorName
      ? 1
      : 0
  );

  const title = "Instructors";
  const header = topBanner(title, [
    ["Date Assigned", "col-sm-3"],
    ["Instructors", "col-sm-9"]
  ]);

  const hiddenFields = ["ID", "PersonnelID"];
  const labelObj = { AssignDate: "Date Assigned", Name: "Name" };

  const body = tableBody(
    instructorList,
    title,
    hiddenFields,
    labelObj,
    "GetInstructor"
  );
  return header + body;
};
