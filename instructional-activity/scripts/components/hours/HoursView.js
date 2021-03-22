// Hours view for the students and instructor(s) in a selected course
// Accessible only from the Enrollment and Details views.

import { createInstructorHours } from "./EnrollmentInstructors.js";
import { createStudentsBloc } from "./StudentHours.js";

export const createSaveObjStudents = (rows) => {
  const saveList = [];

  $(rows).each(function (index) {
    const ID = $(this).attr("id");
    const listValues = $("input", this).serializeArray();

    // createObject() <== /helpers/helperFunctions.js
    const monthlyHours = createObject(listValues);
    saveList.push({ ID, ...monthlyHours });
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
export const createHoursView = (courseID, classID, mainInstructor) => {
  const instructorHours = createInstructorHours(mainInstructor);
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
