// Display bloc for instructors with hours

// TODO: The month selector displays the period starting with the
// course start date until present month. Max value is the last
// month of the course.
// Month is selected above the header for instructors table. This
// populates the table. First view is present period, depending on
// the today date.
// The 1st intructor is the main instructor.
// Other instructors are listed in alphabetical order. Select by
// "Click to Edit".
// Adding or modifying hours for 1 instructor is done in modal.

export const createInstructorBloc = (dataList, mainInstructor) => {
  const labelsInstructor = {
    PeriodID: "PeriodID",
    Personnel_PKID: "Personnel_PKID",
    personnelID: "personnelID",
    InstructorName: "Name",
    InstHours: "Instr. Hrs",
    TestHours: "Test Hrs",
    TestContHours: "Test Cont Hrs",
    labHours: "Lab Hrs",
    ExtraHoursLT12: "Extra Hrs (LT12)"
  };

  const labelList = [
    "Name",
    "Instr. Hrs",
    "Test Hrs",
    "Test Cont Hrs",
    "Lab Hrs",
    "Extra Hrs (LT12)"
  ];
  let firstRow = "";
  let nextRows = "";

  const headerText = [];
  const hiddenList = [];
  // createHeaders() <== helperFunctions.js
  const header = createHeaders(labelList);

  const tableBody = "";

  return `
  <table class="table" id="instructors-table">
    ${header}
    <tbody>
      ${tableBody}
    </tbody>
  </table>`;
};
