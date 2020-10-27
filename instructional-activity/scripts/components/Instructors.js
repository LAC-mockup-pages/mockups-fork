// Bloc for main instructor and additional intructors

import { topBanner } from "../main.js";
const instructorList = GetInstructor.slice(0).sort((name1, name2) =>
  name1.InstructorName < name2.InstructorName
    ? -1
    : name1.InstructorName > name2.InstructorName
    ? 1
    : 0
);

const instructorsBloc = () => {
  let bloc = topBanner("Instructors");

  // const classInstructorList = GetClassInstructor.slice(0).sort((name1, name2) =>
  //   name1.Name < name2.Name ? -1 : name1.Name > name2.Name ? 1 : 0
  // );

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
        <th>Date Assigned</th>
        <th>Instructors</th>
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

export const createAdditionalBloc = (recordList) => {
  return `${instructorsBloc()}`;
};
