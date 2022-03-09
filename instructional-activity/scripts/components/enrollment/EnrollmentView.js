// Displays student enrollment for a course
// and instructors hours

import { createStudentBloc } from "./EnrollmentStudents.js";

export const createEnrollmentView = (courseID, courseName, start, end) => {
  const mainBanner = `
  <div class="blue-bg container-fluid row" id="main-banner">
    <div class="label-text blue-light-text col-md-10">${courseName}</div>
    <div class="col-md-2">
    <button type="button" id="add-student-btn" class="btn dark-blue-text blue-light-bg" data-course=${courseID} data-start=${start}>Add Student</button></div>
  </div>`;

  const studentTable = createStudentBloc(GetEnrollInfo.slice(0));

  return `
  <div class="container-fluid" id="enrollment-bloc">
    ${mainBanner}
    <div class="student-table table-scroll">
      ${studentTable}
    </div>
  </div>`;
};
