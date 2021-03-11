//* Displaying Daily contact hours for a given course
//* after clicking the DCH button in HoursView

export const createDailyHours = (classId) => {
  const periodSelect = `
  <div class="input-field form-group">
  <label for="primary-filter" class="blue-light-text filter-select">Month: </label>
  <select id="primary-filter-view" class="modal-select" name="primary-filter"><option value="" selected>Select a month</option>
  <option value="ClassType">July 2020</option>
  <option value="InstructorID">August 2020</option>
  <option value="Format">September 2020</option>
  <option value="FSID">October 2020</option>
  <option value="UpperLevel">November 2020</option>
  <option value="UpperLevel">December 2020</option>
  <option value="UpperLevel">January 2021</option>
  <option value="UpperLevel">February 2021</option>
  <option value="UpperLevel">March 2021</option>
  </select>
</div>
  `;

  const classSchedule = `
  <div class="schedule-bloc">
  <form class="weekday-banner" id="schedule">
 <table class="schedule-table container-fluid table table-bordered">
 <thead>
  <tr><th class="blank-bloc"></th>
  <th class="weekday">Mon.</th>
  <th class="weekday">Tue.</th>
  <th class="weekday">Wed.</th>
  <th class="weekday">Thu.</th>
  <th class="weekday">Fri. </th>
  <th class="weekday">Sat.</th>
  <th class="weekday">Sun.</th>
 </tr></thead>

  <tbody class="week-schedule-body" data-toggle="tooltip" data-placement="right" title="" data-original-title="Click to Edit">
    <tr>
      <td class="schedule-cell">Start Time</td>

      <td>
        <input class="schedule-input" disabled="" name="MonStartTime" value="09:00 AM">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="TueStartTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="WedStartTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="ThuStartTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="FriStartTime" value="04:00 PM">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="SatStartTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="SunStartTime" value="">
      </td>
    </tr>
    <tr>
      <td class="schedule-cell">End Time</td>

      <td>
        <input class="schedule-input" disabled="" name="MonEndTime" value="12:30 PM">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="TueEndTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="WedEndTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="ThuEndTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="FriEndTime" value="07:30 PM">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="SatEndTime" value="">
      </td>
      <td>
        <input class="schedule-input" disabled="" name="SunEndTime" value="">
      </td>
    </tr>
  </tbody></table></form></div>`;

  return `
  <div class="container-fluid row blue-light-text" id="daily-hours">
    <div class="daily-title label-text col-md-4">${classId} | Daily Contact Hours</div>
    <div class="label-text col-md-2"></div>
    <div class="col-md-3">${periodSelect}</div>
    <div class="label-text col-md-1"></div>
    <div class="container-fluid row col-md-2">
      <button type="button" id="daily-hours-btn" class="btn dark-blue-text blue-light-bg col-sm-6">Save</button>
    </div>
  </div>
  <div class="week-schedule container-fluid row">
  <div class="label-text blue-light-text col-md-3">Weekly Schedule</div>
  <div class="col-md-8">
  ${classSchedule}
  </div>
  <div class="col-md-1">
  </div>
  </div>
  `;
};
