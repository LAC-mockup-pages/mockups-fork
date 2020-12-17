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

const createPeriodSelector = (courseId, start, end) => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  const today = new Date();
  const presentMonth = today.getMonth();
  const presentYear = today.getFullYear();
  console.log("present month, year: ", presentMonth + " / " + presentYear);

  return `Instructor parameters: ==> ${courseId} - start: ${start} - end: ${end}`;
};

export const createInstructorBloc = (
  dataList,
  mainInstructor,
  courseId,
  startDate,
  endDate
) => {
  const labelsInstructor = {
    ID: "ID",
    PeriodID: "PeriodID",
    Personnel_PKID: "Personnel_PKID",
    personnelID: "personnelID",
    InstructorName: "Name",
    InstHours: "Instr. Hrs",
    TestHours: "Test Hrs",
    TestContHours: "Test Contact Hrs",
    labHours: "Lab Hrs",
    ExtraHoursLT12: "Extra Hrs (LT12)"
  };

  const headerText = [
    "Name",
    "Instr. Hrs",
    "Test Hrs",
    "Test Contact Hrs",
    "Lab Hrs",
    "Extra Hrs (LT12)"
  ];

  const hoursList = dataList.filter((record) => {
    const {
      ID,
      PeriodID,
      InstructorName,
      InstHours,
      TestHours,
      TestContHours,
      labHours,
      ExtraHoursLT12
    } = record;
    if (PeriodID === "PRA20200801")
      return {
        ID,
        PeriodID,
        InstructorName,
        InstHours,
        TestHours,
        TestContHours,
        labHours,
        ExtraHoursLT12
      };
  });

  let firstRow = createRow({
    record: hoursList.find(
      (record) => record.InstructorName === "Porter, Samantha"
    ),
    labelList: [
      "ID",
      "PeriodID",
      "InstructorName",
      "InstHours",
      "TestHours",
      "TestContHours",
      "labHours",
      "ExtraHoursLT12"
    ],
    labelObj: labelsInstructor,
    hiddenList: ["ID", "PeriodID"]
  });
  let nextRows = createRow({
    record: hoursList.find(
      (record) => record.InstructorName !== "Porter, Samantha"
    ),
    labelList: [
      "PeriodID",
      "InstructorName",
      "InstHours",
      "TestHours",
      "TestContHours",
      "labHours",
      "ExtraHoursLT12"
    ],
    labelObj: labelsInstructor,
    hiddenList: ["ID", "PeriodID"]
  });

  // const hiddenList = [];

  // createHeaders() <== helperFunctions.js
  const header = createHeaders(headerText);
  const periodSelector = createPeriodSelector(courseId, startDate, endDate);

  console.log("periodSelector :>> ", periodSelector);
  const tableBody = `${firstRow}${nextRows}`;

  return `
  <div class="container-fluid row" id="period-selector">
    <div class="instructor-title label-text blue-light-text col-md-10">Instructors</div>
    <div class="period-select col-md-2">Selector
    </div>
  </div>
  <table class="table" id="instructors-table">
    ${header}
    <tbody>
      ${tableBody}
    </tbody>
  </table>`;
};
