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

// Month & year are numbers, dayslist is an array of the class days as per
// schedule in GetCourse, like so: ["Monday", "Wednesday"].
// Output is an Object like so: {Day1:"", Day4:"", ....}.
// Uses Luxon time methods. DateTime class must be initialized in the scope.
const createDailySchedule = (month, year, daysList) => {
  let result = {};
  const daysInMonth = DT.local(year, month).daysInMonth;
  for (let i = 0; i < daysInMonth; i++) {
    const dayIndex = i + 1;
    const day = DT.local(year, month, dayIndex).toFormat("cccc");
    if (daysList.includes(day)) result[`Day${dayIndex}`] = "";
  }
  return result;
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

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    .map((day) => `<th class="weekday">${day}.</th>`)
    .join("");

  const classSchedule = `
  <div class="schedule-bloc">
    <form class="weekday-banner" id="schedule-static">
      <table class="schedule-table container-fluid table table-bordered table-condensed">
        <thead>
          <tr>
            <th class="blank-bloc"></th>
            ${weekDays}
          </tr>
        </thead>
        <tbody class="week-schedule-body">
          <tr>
            <td class="schedule-daily">Start Time</td>
            ${scheduleStartTimes}
          <tr>
            <td class="schedule-daily">End Time</td>
            ${scheduleEndTimes}
          </tr>
        </tbody>
      </table>
    </form>
  </div>`;

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

// If the list of daily hours inputs is empty, creates the list from
// the class roster
export const createNewDailyList = (rosterList) => {
  let result = [];
  const { Class_PKID, ClassID, FY } = rosterList[0];
  const referenceObj = GetCourse[0];
  const classDaysInWeek = Object.keys(referenceObj).filter(
    (key) => key.endsWith("day") && referenceObj[key] === "True"
  );
  const agencyCode = SESSION_VARIABLE[0].AgencyID.startsWith("<%=")
    ? "PRA"
    : SESSION_VARIABLE[0].AgencyID;
  const studentBaseObj = { ID: "0", Class_PKID, ClassID, totalHours: "" };

  for (const student of rosterList) {
    const { Student_PKID, StudentName, StudentID } = student;

    // creating 1 object per month with daily schedule
    for (let month = 1; month < 13; month++) {
      const calendarYear = month < 7 ? Number(FY) : Number(FY) - 1;
      const monthStr = month < 10 ? `0${month}` : month.toString();
      const ClassperiodID = `${agencyCode}${calendarYear}${monthStr}01`;
      const classDaysInMonth = createDailySchedule(
        month,
        calendarYear,
        classDaysInWeek
      );
      result.push({
        ...studentBaseObj,
        Student_PKID,
        StudentName,
        studentID: StudentID,
        StudentName2: StudentName,
        ClassperiodID,
        ...classDaysInMonth
      });
    }
  }
  return result;
};

// Input: Daily Hours list, class roster list.
// Output: > DH list if all students in roster are present in DH list,
//         > DH list + all students in roster NOT present in DH list. Added
//           records have ID = "0".
export const checkStudentList = (list, roster) => {
  const rosterLength = roster.length;

  // Safety check that at least 1 student is enrolled in the course.
  //TODO Some kind of feedback message for the user?
  if (rosterLength < 1) return;

  const studentsInRoster = roster.map((student) => student.Student_PKID).sort();
  const studentsInList = list.map((student) => student.Student_PKID).sort();
  const listLength = studentsInList.length;

  // list and roster have the same number of students
  if (rosterLength === listLength) {
    return list;
  }
  // list and roster have a different number of students
  else {
    const newStudentsList = [];
    const ID = "0";
    const { ClassID, Class_PKID, ClassMonth, ClassperiodID } = list[0];
    const classDaysObj = Object.fromEntries(
      Object.keys(list[0])
        .filter((key) => key.startsWith("Day"))
        .map((day) => [day, ""])
    );
    const newStudentIdList = studentsInRoster.filter(
      (student) => !studentsInList.includes(student)
    );
    let commonProps = {
      ID,
      ClassID,
      Class_PKID,
      ClassMonth,
      ClassperiodID,
      ...classDaysObj,
      totalHours: ""
    };

    for (const Student_PKID of newStudentIdList) {
      const studentInfo = roster.find(
        (item) => item.Student_PKID === Student_PKID
      );
      const { StudentID, StudentName } = studentInfo;
      const newStudent = {
        Student_PKID,
        studentID: StudentID, // Necessary conversion as key is Pascal Case in
        // GetDailyHours ^^
        StudentName,
        StudentName2: StudentName
      };
      newStudentsList.push({ ...commonProps, ...newStudent });
    }
    return [...list, ...newStudentsList];
  }
};

const updateTotalHours = (studentList, keyList) => {
  const result = studentList.map((student) => {
    let totalHours = 0;
    for (const key of keyList) {
      const dayVal = Number(student[key] || 0);
      totalHours += dayVal;
    }
    totalHours = totalHours.toString();
    return { ...student, totalHours };
  });
  return result;
};

export const createDailyHoursTable = (dailyHoursList, rosterList) => {
  // Checks if all enrolled students are in the daily hours list.
  // If not, add the missing students.
  // Checked list is then sorted alphabetically by student name.
  const checkedList = checkStudentList(dailyHoursList, rosterList).sort(
    (student1, student2) =>
      student1.StudentName < student2.StudentName
        ? -1
        : student1.StudentName > student2.StudentName
        ? 1
        : 0
  );
  const dayList = Object.keys(checkedList[0]).filter((fieldName) =>
    fieldName.startsWith("Day")
  );
  // Update the value of totalHours prop
  const checkedListWithTotals = updateTotalHours(checkedList, dayList);
  const selectedMonth = Number($("#PeriodID-view").val().substr(7, 2));
  const dateList = dayList.map((day) => {
    const dayNumber = day.slice(3);
    return `${selectedMonth}/${dayNumber}`;
  });

  // createHeaders() <== helperFunctions.js
  const header = createHeaders(["Name", ...dateList, "Total"]);
  let body = "";

  for (const record of checkedListWithTotals) {
    const { ID, StudentName, studentID, totalHours } = record;
    let dailyValues = "";
    const indx = checkedListWithTotals.indexOf(record);
    for (const day of dayList) {
      const valueHours = record[day];
      dailyValues += `
      <td class="cell-data daily-value">
        <input class="cell-input" name=${day} value=${valueHours}>
      </td>
      `;
    }
    body += `
    <tr id=${indx} data-recordid=${ID}  data-student=${studentID}>
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
