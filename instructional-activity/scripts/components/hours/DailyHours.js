//* Displaying Daily contact hours for a given course
//* after clicking the DCH button in HoursView

export const createDailyHours = () => {
  return `
  <div class="container-fluid row blue-light-text" id="daily-hours">
    <div class="daily-title label-text col-md-4">${classId} | Daily Contact Hours</div>
    <div class="label-text col-md-5"></div>
    <div class="container-fluid row col-md-3">
      <button type="button" id="daily-hours-btn" class="btn dark-blue-text blue-light-bg col-sm-6">Save</button>
    </div>
  </div>
  `;
};
