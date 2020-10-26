// Bloc for main instructor and additional intructors

import { topBanner } from "../main.js";

const instructorsBloc = () => {
  let bloc = topBanner("Instructors");
  const instructorList = GetInstructor.slice(0).sort((name1, name2) =>
    name1.InstructorName < name2.InstructorName
      ? -1
      : name1.InstructorName > name2.InstructorName
      ? 1
      : 0
  );

  const classInstructorList = GetClassInstructor.slice(0).sort((name1, name2) =>
    name1.Name < name2.Name ? -1 : name1.Name > name2.Name ? 1 : 0
  );
  let instructorView = "";

  for (let i = 0; i < 3; i++) {
    const instructor = classInstructorList[i] ? classInstructorList[i] : "";
    let instructorRow = "";

    if (instructor) {
    } else {
      instructorRow = "<tr><td></td><td>Instructor Selection</td></tr>";
    }
  }

  const tableInstructors = `<form class="instructors" id="instructors-form">
  <table class="instructors-table container-fluid table table-bordered"
  <thead>
   <th>Date Assigned</th>
   <th>Instructors</th>
   </thead>
   <tbody>
   ${instructorView}
   </tbody>
   </table>
   </form>`;

  bloc += tableInstructors;

  return bloc;
};

export const createAdditionalBloc = () => {
  return `${instructorsBloc()}`;
};
