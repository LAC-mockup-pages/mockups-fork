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
      const { ID, PersonnelID, AssignDate, Name } = instructor;
      const dateInput = inputNoLabel({
        key,
        placehold,
        classOption,
        option,
        type
      });
      const instructorOption = "";
      const instructorNameSelect = `<select class="instructor-name"`;

      instructorRow = `<tr><td><input class="assign-date" type="date" name="AssignDate" value=${AssignDate}/></td><td>< class="instructor-name" type="text" name=${Name}</td></tr>`;
    } else {
      instructorRow = "<tr><td></td><td>Instructor Selection</td></tr>";
    }
  }

  const tableInstructors = `<form class="instructors col-md-6" id="instructors-form">
  <table class="instructors-table table table-bordered"
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
