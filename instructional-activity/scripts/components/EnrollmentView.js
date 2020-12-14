// Displays student enrollment for a course
// and instructors hours

export const createEnrollmentView = (courseID, courseName) => {
  const mainBanner = `
  <div class="blue-bg container-fluid row" id="main-banner">
    <div class="label-text blue-light-text col-md-10">${courseName}</div>
    <div class="col-md-2">
    <button type="button" id="add-student-btn" class="btn dark-blue-text blue-light-bg">Add Student</button></div>
  </div>`;

  return `
  <div class="container-fluid" id="enrollment-bloc" data-course-id=${courseID}>
    ${mainBanner}
  </div>`;
};
