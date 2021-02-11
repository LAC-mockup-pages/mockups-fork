// Hours view for the instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

import { createInstructorBloc } from "./EnrollmentInstructors.js";

export const createHoursView = (courseID, classId, mainInstructor) => {
  const hoursList = GetInstrHours.slice(0).filter(
    (record) => record.Class_PKID === courseID
  );
  const today = new Date();
  const period = `PRA${today.getFullYear()}${today.getMonth() + 1}01`;

  const instructorBloc = createInstructorBloc(
    hoursList,
    courseID,
    classID,
    mainInstructor,
    period
  );

  return `
  <div class="container-fluid" id="hours-bloc" data-course=${courseID}>
  ${instructorBloc}
  </div>`;
};
