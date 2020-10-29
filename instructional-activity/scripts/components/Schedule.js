// Optional weekly schedule
// Bloc stays hidden if no selected day and hours
// If left as is, schedule is monthly and influences how
// hours are input for registered students. Hours will also
// be displayed on a monthly basis.

import { topBanner } from "../main.js";

const classDays = (dataObj) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const filteredList = Object.keys(dataObj)
    .filter((key) => weekDays.includes(key))
    .map((day) => {
      const classDayObj = {};
      const classStart = `${day.slice(0, 3)}StartTime`;
      const classEnd = `${day.slice(0, 3)}EndTime`;

      classDayObj[day] = dataObj[day];
      classDayObj[classStart] = dataObj[classStart];
      classDayObj[classEnd] = dataObj[classEnd];
      return classDayObj;
    });
  return filteredList;
};

export const createSchedule = (dataObj) => {
  console.log("datObj Schedule :>> ", classDays(dataObj));
  const weekDaysList = classDays(dataObj);

  let bloc = topBanner("Schedule");
  const weekDaysHeader = `
  <div class="schedule-bloc">
  <form class="weekday-banner" id="week-schedule">
 <table class="schedule-table container-fluid table table-bordered"
 <thead>
  <th class="blank-bloc"></th>
  <th class="weekday">Mon.</th>
  <th class="weekday">Tue.</th>
  <th class="weekday">Wed.</th>
  <th class="weekday">Thu.</th>
  <th class="weekday">Fri. </th>
  <th class="weekday">Sat.</th>
  <th class="weekday">Sun.</th>
 </thead>
 </table></form></div>`;

  //  <tbody class="schedule-body">
  //  <tr>
  //  <td class="schedule-cell">Start Time</td>
  //  <td><input class="schedule-input" value="09:30 AM"/></td>
  //  <td><input class="schedule-input" value="09:30 AM"/></td>
  //  <td><input class="schedule-input" value="09:30 AM"/></td>
  //  <td><input class="schedule-input" value="09:30 AM"/></td>
  //  <td><input class="schedule-input" value="09:30 AM"/></td>
  //  <td><input class="schedule-input" value="09:30 AM"/></td>
  //  <td><input class="schedule-input" value="09:30 AM"/></td>
  // </tr>
  // <tr>
  // <td class="schedule-cell">End Time</td>
  // <td><input class="schedule-input" value="11:30 AM"/></td>
  // <td><input class="schedule-input" value="11:30 AM"/></td>
  // <td><input class="schedule-input" value="11:30 AM"/></td>
  // <td><input class="schedule-input" value="11:30 AM"/></td>
  // <td><input class="schedule-input" value="11:30 AM"/></td>
  // <td><input class="schedule-input" value="11:30 AM"/></td>
  // <td><input class="schedule-input" value="11:30 AM"/></td>
  // </tr>
  //  </tbody>
  // </table>
  //  </form>
  //  </div>`;
  bloc += weekDaysHeader;
  return bloc;
};
