// Hours view for the instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

import { createInstructorBloc } from "./EnrollmentInstructors.js";

export const createHoursView = (courseID, classID, mainInstructor) => {
  const hoursList = GetInstrHours.slice(0);

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

  console.log("hoursList :>> ", hoursList);
  console.log("courseID :>> ", courseID);

  const instructorBloc = createInstructorBloc(
    hoursList,
    courseID,
    mainInstructor,
    period
  );

  return `
  <div class="container-fluid blue-bg" id="instructor-hours-bloc" data-course=${courseID}>
  ${instructorBloc}
  </div>`;
};
