// Hours view for the students and instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

import { createInstrBloc } from "./EnrollmentInstructors.js";
import { createStudentsBloc } from "./StudentHours.js";

const createTotalHoursProp = (valueObj) => {
  const totalHours = Object.keys(valueObj)
    .reduce((total, day) => {
      const value = valueObj[day] ? Number(valueObj[day]) : 0;
      return total + value;
    }, 0)
    .toString();
  return totalHours;
};

const extractMonth = (periodStr) => {
  return periodStr.substr(-4, 2).replace(/^0/, "");
};

export const createSaveObj = (rows) => {
  const saveList = [];
  $(rows).each(function (index) {
    const ID = $(this).attr("id");
    const Class_PKID = $("#hours-bloc").attr("data-course");
    const saveObj = { ID, Class_PKID };

    const category = $(this).attr("data-student") ? "student" : "personnel";
    const categoryKey =
      category === "student" ? "Student_PKID" : "Instructor_PKID";
    saveObj[categoryKey] = $(this).attr(`data-${category}`);

    const listValues = $("input", this).serializeArray();

    // createObject() <== /helpers/helperFunctions.js
    const monthlyHours = createObject(listValues);
    const TotalHours = createTotalHoursProp(monthlyHours);
    saveList.push({ ...saveObj, ...monthlyHours, TotalHours });
  });
  return saveList;
};

export const cellFocus = () => {
  const today = new Date();

  // Creates yearly array of months, starting at January.
  // Return an array of string elements, each month abbreviated to
  // the 3 first characters.
  const buildMonthList = () => {
    const list = [];
    for (let i = 0; i < 12; i++) {
      const day = new Date("2021", i.toString(), "1");
      const shortMonth = day.toString().substr(4, 3);
      list.push(shortMonth);
    }
    return list;
  };

  const months = buildMonthList();
  const previousMonth = today.getMonth() === 0 ? 12 : today.getMonth() - 1;
  const inputName = `${months[previousMonth]}Hours`;
  const firstRowId = $(".student-hours-body tr").first().attr("id");

  $(`#${firstRowId} input[name=${inputName}]`).focus();
};

// Create the main view to display student and instructors hours
export const createHoursView = (courseID, classID) => {
  const instructorHours = createInstrBloc(courseID);
  const studentHours = createStudentsBloc(classID);
  const today = new Date();
  const month =
    today.getMonth() + 1 > 9
      ? today.getMonth() + 1
      : `0${today.getMonth() + 1}`;

  //! In production, PRA should be changed to Session Variable AgencyID like so:
  // const period = `${SESSION_VARIABLE[0].AgencyID}${today.getFullYear()}${today.getMonth() + 1}01`;

  // actual period for display
  // const period = `PRA${today.getFullYear()}${month}01`;
  const period = "PRA20200901";

  return `
  <div class="container-fluid blue-bg" id="hours-bloc" data-course=${courseID}>
    ${studentHours}
    ${instructorHours}
  </div>`;
};

export const saveDailyHours = (rows) => {
  // Add missing day keys to dayObj to have 31 days no matter the
  // month length or the number of classes in a month.
  const addDays = (dayObj) => {
    const keyList = Object.keys(dayObj);
    const additionalDays = {};
    for (let i = 1; i < 32; i++) {
      const day = `Day${i}`;
      if (!keyList.includes(day)) additionalDays[day] = "";
    }
    return { ...dayObj, ...additionalDays };
  };

  const Class_PKID = $("#view-bloc").attr("data-course");
  const ClassID = $("#view-bloc").attr("data-class");
  const ClassperiodID = $("#PeriodID-view").val();
  const ClassMonth = extractMonth(ClassperiodID);

  const saveList = [];
  $(rows).each(function (indx) {
    let saveObj = { Class_PKID, ClassID, ClassperiodID, ClassMonth };
    const ID = $(this).attr("data-recordid");
    const studentID = $(this).attr("data-student");
    const dailyValues = $("input", this).serializeArray();

    // createObject() <== /helpers/helperFunctions.js
    const dailyHours = addDays(createObject(dailyValues));
    const TotalHours = createTotalHoursProp(dailyHours);
    saveObj = { ID, ...saveObj, studentID, ...dailyHours, TotalHours };
    saveList.push(saveObj);
  });
  return saveList;
};
