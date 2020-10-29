// Bloc for main instructor and additional intructors
// For display and editing of the list

import { topBanner } from "../main.js";
const instructorList = GetInstructor.slice(0).sort((name1, name2) =>
  name1.InstructorName < name2.InstructorName
    ? -1
    : name1.InstructorName > name2.InstructorName
    ? 1
    : 0
);

export const createInstructorsBloc = () => {
  let bloc = topBanner("Instructors");
  const classInstructorList = GetClassInstructor.slice(0).sort(
    (name1, name2) => new Date(name1.AssignDate) - new Date(name2.AssignDate)
  );

  let instructorView = "";

  for (let i = 0; i < 3; i++) {
    const instructor = classInstructorList[i]
      ? classInstructorList[i]
      : { ID: "", PersonnelID: "", AssignDate: "", Name: "" };

    let instructorRow = "";
    const { ID, PersonnelID, AssignDate, Name } = instructor;

    instructorRow = `<tr data-id=${ID} data-personnel-id=${PersonnelID}><td>${AssignDate}</td><td>${Name}</td></tr>`;

    instructorView += instructorRow;
  }

  const tableInstructors = `
     <table class="instructors-table table table-bordered">
      <thead>
      <tr>
        <th class="weekday first-cell">Date Assigned</th>
        <th class="weekday">Instructors</th>
        </tr>
      </thead>
      <tbody>${instructorView}</tbody>
    </table>
 `;

  bloc += tableInstructors;

  return bloc;
};

const additionalInfo = (list) => {
  let bloc = topBanner("Additional Info");

  return bloc;
};
