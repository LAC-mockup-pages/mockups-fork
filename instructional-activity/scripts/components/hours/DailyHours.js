//* Displaying Daily contact hours for a given course
//* after clicking the DCH button in HoursView

import { setFiscalYear } from "../../main.js";
import { buildPeriods } from "./EnrollmentInstructors.js";

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

// Returns hashTable for period selector.
// num varies from 12 (full Fiscal Year) to present FY number
// of months from start of FY. FY is type number.
const buildPeriodHashTable = (num, fiscalYear) => {
  const periods = buildPeriods();
  const agency = SESSION_VARIABLE[0].AgencyID.includes("%= Session")
    ? "PRA"
    : SESSION_VARIABLE[0].AgencyID;
  // const agency = "PRA";
  const hashTable = [];
  for (let i = 0; i < num; i++) {
    const calendarYear = i < 6 ? fiscalYear - 1 : fiscalYear;
    const PeriodID = `${agency}${calendarYear}${periods[i]}`;
    const month = DT.fromISO(`${calendarYear}${periods[i]}`).toFormat("LLLL y");
    hashTable.push({ PeriodID, month });
  }
  return hashTable;
};

export const createDailyHours = (classId) => {
  const classFY = $("#view-bloc").attr("data-year");
  const course = $("#view-bloc").attr("id");
  const presentFY = Number(SESSION_VARIABLE[0].FiscalYear)
    ? SESSION_VARIABLE[0].FiscalYear
    : setFiscalYear(DT.now().toISODate());
  let hashTable = [];

  if (classFY === presentFY) {
    const firstDayFY = `${Number(presentFY) - 1}0701`;
    const startFY = DT.fromISO(firstDayFY);
    const today = DT.now();
    // Returns the number of months between first day of present Fiscal
    // Year (07/01 of Fiscal Year - 1) and now.
    const diffMonths = Math.ceil(
      today.diff(startFY, "months").toObject().months
    );
    hashTable = buildPeriodHashTable(diffMonths, Number(presentFY));
  } else {
    // Other fiscal years, the period selector displays 12 months option
    hashTable = buildPeriodHashTable(12, Number(classFY));
  }
  const selectPeriod = elementSelectModal({
    hashTable,
    keyValue: "PeriodID",
    selectedValue: "",
    labelVal: "Period: ",
    labelClassVal: "",
    option: "",
    optionText: "a month"
  });
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
    <div class="col-md-3">${selectPeriod}</div>
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
    <div class="col-md-1"></div>
  </div>
  `;
};

export const createDailyHoursTable = (dailyHoursList) => {
  const dayList = Object.keys(dailyHoursList[0]).filter((fieldName) =>
    fieldName.startsWith("Day")
  );
  console.log("dayList :>> ", dayList);
  // createHeaders() <== helperFunctions.js
  const header = createHeaders(["Name", ...dayList, "Total"]);

  let body = " Table Body here";

  for (const record of dailyHoursList) {
    const { ID, StudentName, studentID, totalHours } = record;
    const dailyValues = "";

    body += `
    <tr id=${ID} data-student=${studentID}>
      <td class="cell-data student-name">${StudentName}</td>
        ${dailyValues}
      <td class="cell-data student-total">${totalHours}</td>
  </tr>
  `;
  }

  return `
  <div class="scrolling">
    <table class="table table-condensed scrolling-hours" id="daily-hours-table">
      ${header}
      <tbody class="daily-hours-body">
        ${body}
      </tbody>
    </table>
  </div>
`;
};
