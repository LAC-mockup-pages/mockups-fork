//* Displaying Daily contact hours for a given course
//* after clicking the DCH button in HoursView

import { setFiscalYear } from "../../utilities.js";
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

const createWeekSchedule = () => {
  const scheduleObj = JSON.parse($("#view-bloc").attr("data-schedule"));
  const trueDaysList = Object.keys(scheduleObj)
    .filter((key) => key.slice(-3) === "day" && scheduleObj[key] === "True")
    .map((day) => day.substr(0, 3));

  let scheduleStartTimes = "";
  let scheduleEndTimes = "";
  const startTimeList = Object.keys(scheduleObj).filter((key) =>
    key.endsWith("StartTime")
  );
  const endTimeList = Object.keys(scheduleObj).filter((key) =>
    key.endsWith("EndTime")
  );

  for (let i = 0; i < startTimeList.length; i++) {
    const startTime = startTimeList[i];
    const endTime = endTimeList[i];

    const classNoTime = trueDaysList.includes(startTime.substr(0, 3))
      ? !scheduleObj[startTime] && !scheduleObj[endTime]
        ? " classDayNoTime"
        : ""
      : "";

    scheduleStartTimes += `<td class="schedule-daily${classNoTime}" id=${startTime}>${scheduleObj[startTime]}</td>`;
    scheduleEndTimes += `<td class="schedule-daily${classNoTime}" id=${endTime}>${scheduleObj[endTime]}</td>`;
  }

  return [scheduleStartTimes, scheduleEndTimes];
};

export const createDailyHours = (classId) => {
  const classFY = $("#view-bloc").attr("data-year");
  const [scheduleStartTimes, scheduleEndTimes] = createWeekSchedule();
  const presentFY = Number(SESSION_VARIABLE[0].FiscalYear)
    ? SESSION_VARIABLE[0].FiscalYear
    : setFiscalYear(DT.now().toISODate());
  let hashTable = [];
  let buttonState = " disabled";

  if (classFY === presentFY) {
    buttonState = "";
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
    // Other fiscal years, the period selector displays 12 months option list.
    // Save button stays disabled.
    hashTable = buildPeriodHashTable(12, Number(classFY));
  }

  // elementSelectModal() <== helperFunctions.js
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
  <form class="weekday-banner" id="schedule-static">
 <table class="schedule-table container-fluid table table-bordered table-condensed">
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
  <tbody class="week-schedule-body">
    <tr>
      <td class="schedule-daily">Start Time</td>
      ${scheduleStartTimes}
    <tr>
      <td class="schedule-daily">End Time</td>
     ${scheduleEndTimes}
    </tr>
  </tbody></table></form></div>`;

  return `
  <div class="container-fluid row blue-light-text" id="daily-hours" data-class-id=${classId}>
    <div class="daily-title label-text col-md-4">${classId} | Daily Contact Hours</div>
    <div class="label-text col-md-2"></div>
    <div class="col-md-3">${selectPeriod}</div>
    <div class="label-text col-md-1"></div>
    <div class="container-fluid row col-md-2 button-set">
      <button type="button" id="daily-hours-btn" class="btn dark-blue-text blue-light-bg col-sm-6"${buttonState}>Save</button>
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

// Input: Daily Hours list, class roster.
// Output: > false if DH list is [{}],
//         > DH list if all students in roster are present in DH list,
//         > DH list + all students in roster NOT present in DH list. Added
//           students have ID = "0".
export const checkHashtable = (list, roster) => {
  if (!list[0].ID) return false;
  const studentsInRoster = roster.map((student) => student.Student_PKID).sort();
  const rosterLength = studentsInRoster.length;
  const studentsInList = list.map((student) => student.Student_PKID).sort();
  const listLength = studentsInList.length;

  if (rosterLength === listLength) {
    return list;
  } else {
    const newStudentsList = [];
    const ID = "0";
    const { ClassID, Class_PKID, ClassMonth, ClassperiodID } = list[0];
    const classDays = Object.keys(list[0]).filter((key) =>
      key.startsWith("Day")
    );
    const newStudentIdList = studentsInRoster.filter(
      (student) => !studentsInList.includes(student)
    );

    for (const student of newStudentIdList) {
      const studentInfo = roster.find((item) => item.Student_PKID === student);
      const { StudentID, StudentName } = studentInfo;
    }
    return [...list, ...newStudentsList];
  }
};

export const createDailyHoursTable = (dailyHoursList) => {
  const dayList = Object.keys(dailyHoursList[0]).filter((fieldName) =>
    fieldName.startsWith("Day")
  );
  const selectedMonth = Number($("#PeriodID-view").val().substr(7, 2));
  const dateList = dayList.map((day) => {
    const dayNumber = day.slice(3);
    return `${selectedMonth}/${dayNumber}`;
  });

  // createHeaders() <== helperFunctions.js
  const header = createHeaders(["Name", ...dateList, "Total"]);
  let body = "";

  for (const record of dailyHoursList) {
    const { ID, StudentName, studentID, totalHours } = record;
    let dailyValues = "";

    for (const day of dayList) {
      const valueHours = record[day];
      dailyValues += `
      <td class="cell-data daily-value">
        <input class="cell-input" name=${day} value=${valueHours}>
      </td>
      `;
    }
    body += `
    <tr id=${ID} data-student=${studentID}>
      <td class="cell-data student-name">${StudentName}</td>
        ${dailyValues}
      <td class="cell-data student-total">${totalHours}</td>
  </tr>
  `;
  }

  return `
  <div class="scrolling hours-table">
    <table class="table table-condensed scrolling-hours" id="daily-hours-table">
      ${header}
      <tbody class="daily-hours-body">
        ${body}
      </tbody>
    </table>
  </div>
`;
};
