// Hours view for the students and instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

import { createInstructorHours } from "./EnrollmentInstructors.js";
import { createStudentsBloc } from "./StudentHours.js";

// import { createInstructorBloc } from "./EnrollmentInstructors.js";

export const createHoursView = (courseID, classID, mainInstructor) => {
  const instructorHours = createInstructorHours();
  const studentHours = createStudentsBloc(classID);

  const today = new Date();
  const month =
    today.getMonth() + 1 > 9
      ? today.getMonth() + 1
      : `0${today.getMonth() + 1}`;

  //! In production, PRA should be changed to Session Variable AgencyID like so:
  // const period = `${SESSION_VARIABLE[0].AgencyID}${today.getFullYear()}${today.getMonth() + 1}01`;

  // actual period for display
  // const period = `PRA${today.getFullYear()}${month}01`;
  const period = "PRA20200901";

  return `
  <div class="container-fluid blue-bg" id="hours-bloc" data-course=${courseID}>
    ${studentHours}
    ${instructorHours}
  </div>`;
};
