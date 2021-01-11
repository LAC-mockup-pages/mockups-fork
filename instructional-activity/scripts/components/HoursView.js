// Hours view for the instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

export const createHoursView = (courseID) => {
  return `
  <div class="container-fluid" id="hours-bloc" data-course=${courseID}>
    <h3>This is displaying instructor hours</h3>
  </div>`;
};
