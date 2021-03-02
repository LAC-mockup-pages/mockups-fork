// Display bloc for instructors showing monthly instructional hours

export const createInstructorHours = () => {
  return `
  <div class="container-fluid row blue-light-text" id="instructor-hours">
    <div class="student-title label-text col-md-4">Instructional Hours</div>
    <div class="label-text col-md-6"></div>
    <div class="container-fluid row col-md-2">
      <button type="button" id="instructor-hours-btn" class="btn dark-blue-text blue-light-bg col-sm-6">Save</button>
    </div>
  </div>
  `;
};
