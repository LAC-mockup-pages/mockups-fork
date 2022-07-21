// Optional weekly schedule
// Bloc stays hidden if no selected day and hours
// If left as is, schedule is monthly and influences how
// hours are input for registered students. Hours will also
// be displayed on a monthly basis.

import { topBanner } from "../../main.js";

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

      // classDayObj[day] = dataObj[day];
      classDayObj[classStart] = dataObj[classStart];
      classDayObj[classEnd] = dataObj[classEnd];
      return classDayObj;
    });
  return filteredList;
};

// Creates an array of objects {key,value} for AM/PM hours with 15minutes
// increments (00, 15, 30, 45). Hours: 6am to 11pm included.
const timeRange = () => {
  const hourLoop = (start, end, period) => {
    const range = [];
    for (let i = start; i < end; i++) {
      for (const minutes of ["00", "15", "30", "45"]) {
        const hour = i < 10 ? `0${i}` : `${i}`;
        const key = `${hour}:${minutes} ${period}`;
        range.push({ key, value: key });
      }
    }
    return range;
  };
  const morningRange = hourLoop(6, 12, "AM");
  const noonRange = hourLoop(12, 13, "PM");
  const afternoonRange = hourLoop(1, 11, "PM");
  return [
    ...morningRange,
    ...noonRange,
    ...afternoonRange,
    { key: "11:00 PM", value: "11:00 PM" }
  ];
};

export const createSchedule = (dataObj) => {
  const weekDaysList = classDays(dataObj);
  let bodyTopRow = "";
  let bodyBottomRow = "";
  let bloc = topBanner("Schedule");
  const weekDaysHeader = `
  <div class="schedule-bloc">
  <form class="weekday-banner" id="schedule">
 <table class="schedule-table container-fluid table table-bordered">
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
 `;

  for (const record of weekDaysList) {
    const keyList = Object.keys(record);
    bodyTopRow += `
      <td>
        <input class="schedule-input" disabled name=${keyList[0]}
          value="${record[keyList[0]]}">
      </td>`;

    bodyBottomRow += `
      <td>
        <input class="schedule-input" disabled name=${keyList[1]}
          value="${record[keyList[1]]}">
      </td>`;
  }

  const scheduleBody = `
  <tbody class="schedule-body" data-toggle='tooltip' data-placement='right' title='Click to Edit'>
    <tr>
      <td class="schedule-cell">Start Time</td>
      ${bodyTopRow}
    </tr>
    <tr>
      <td class="schedule-cell">End Time</td>
      ${bodyBottomRow}
    </tr>
  </tbody></table></form></div>
`;

  bloc += weekDaysHeader + scheduleBody;
  return bloc;
};

export const saveSchedule = () => {
  const week = $("#schedule").serializeArray();
  const classId = $(".course-details").attr("id");
  week.push({ name: "ID", value: classId });
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  console.log("week :>> ", week);

  if (!week.find((item) => item.value)) {
    for (const day of weekDays) {
      week.push({ name: day, value: "False" });
    }
    week.unshift({ name: "ID", value: classId });

    return week;
  } else {
    const list = [];
    for (const day of weekDays) {
      const dayAbbrev = day.substring(0, 3);
      const [start, end] = week.filter(
        (time) =>
          time.name.startsWith(dayAbbrev) &&
          (time.name.endsWith("StartTime") || time.name.endsWith("EndTime")) &&
          time.value
      );
      const value = start && end ? "True" : "False";
      list.push(
        { name: day, value },
        start || { name: `${dayAbbrev}StartTime`, value: "" },
        end || { name: `${dayAbbrev}EndTime`, value: "" }
      );
    }
    list.unshift({ name: "ID", value: classId });

    return list;
  }
};
