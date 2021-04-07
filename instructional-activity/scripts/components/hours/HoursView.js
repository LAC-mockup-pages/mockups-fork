// Hours view for the students and instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

import { createInstrBloc } from "./EnrollmentInstructors.js";
import { createStudentsBloc } from "./StudentHours.js";
const DT = luxon.DateTime;

export const createSaveObj = (rows) => {
  const saveList = [];
  $(rows).each(function (index) {
    const ID = $(this).attr("id");
    const Class_PKID = $(this).attr("data-class");
    const Student_PKID = $(this).attr("data-student");
    const listValues = $("input", this).serializeArray();

    // createObject() <== /helpers/helperFunctions.js
    const monthlyHours = createObject(listValues);
    saveList.push({ ID, Class_PKID, Student_PKID, ...monthlyHours });
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

export const saveInstructorHours = () => {
  const rows = $(".instr-hours-body tr").clone();
  const Class_PKID = $("#hours-bloc").attr("data-course");
  const saveList = [];
  $(rows).each(function (indx) {
    const listValues = $("input", this).serializeArray();
    const monthlyList = listValues.map((obj) => {
      const { name, value } = obj;
      const monthExpression = DT.fromISO(`2021${name}`).toFormat("LLL");
      return { name: `${monthExpression}Hours`, value };
    });
    const ID = $(this).attr("id");
    const Personnel_PKID = $(this).attr("data-personnel-id");

    // createObject() <== /helpers/helperFunctions.js
    const monthlyHours = createObject(monthlyList);
    saveList.push({ ID, Class_PKID, Personnel_PKID, ...monthlyHours });
  });
  console.log("saveList :>> ", saveList);
  return saveList;
};
