// Displays student enrollment for a course
// and instructors hours

import { createInstructorBloc } from "./EnrollmentInstructors.js";
import { createStudentBloc } from "./EnrollmentStudents.js";
export const createEnrollmentView = (courseID, courseName) => {
  const mainBanner = `
  <div class="blue-bg container-fluid row" id="main-banner">
    <div class="label-text blue-light-text col-md-10">${courseName}</div>
    <div class="col-md-2">
    <button type="button" id="add-student-btn" class="btn dark-blue-text blue-light-bg">Add Student</button></div>
  </div>`;

  const studentTable = createStudentBloc(GetEnrollInfo.slice(0));
  const primaryInstructor = "2256";
  const instructorTable = createInstructorBloc(
    GetInstrHours,
    primaryInstructor
  );

  return `
  <div class="container-fluid" id="enrollment-bloc" data-course-id=${courseID}>
    ${mainBanner}
    ${studentTable}
    ${instructorTable}
  </div>`;
};
