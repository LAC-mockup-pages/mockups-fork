// Hours view for the instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

import {
  createInstructorBloc,
  createPeriodSelector
} from "./EnrollmentInstructors.js";

export const createHoursView = (courseID) => {
  const periodSelectBloc = createPeriodSelector(courseID);
  // const instructorBloc = createInstructorBloc();

  return `
  <div class="container-fluid" id="hours-bloc" data-course=${courseID}>
  ${periodSelectBloc}
  </div>`;
};
