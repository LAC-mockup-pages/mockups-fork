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

const periodList = GetReportingPeriods.slice(0);

const createTotalRow = (dataList) => {
  let totalInstr = 0,
    totalTestCont = 0,
    totalTest = 0,
    totalLab = 0,
    totalExtra = 0;

  for (const record of dataList) {
    const {
      InstHours,
      TestContHours,
      TestHours,
      labHours,
      ExtraHoursLT12
    } = record;
    totalInstr += Number(InstHours);
    totalTest += Number(TestHours);
    totalTestCont += Number(TestContHours);
    totalLab += Number(labHours);
    totalExtra += Number(ExtraHoursLT12);
  }

  return `
  <tr id="total-row">
    <td class="first-cell">Hour Totals</td>
    <td class="cell-data">${totalInstr}</td>
    <td class="cell-data">${totalTest}</td>
    <td class="cell-data">${totalTestCont}</td>
    <td class="cell-data">${totalLab}</td>
    <td class="cell-data">${totalExtra}</td>
  </tr>`;
};

export const createPeriodSelector = (courseId, start, end) => {
  const today = new Date();
  // const todayMonth = today.getMonth();
  // const todayYear = today.getFullYear();
  // console.log("present month, year: ", todayMonth + " / " + todayYear);
  const filteredPeriodList = periodList.filter(
    (record) => new Date(record.PeriodStart) < today
  );
  const hashTable = filteredPeriodList.map((record) => {
    const { PeriodID, periodDisplay } = record;
    return { key: PeriodID, value: periodDisplay };
  });
  // console.log("hashTable :>> ", hashTable);

  const lastPeriod = hashTable.slice(-1)[0];
  const selectedValue = lastPeriod.key;
  // console.log("selectedValue :>> ", selectedValue);

  const selectPeriod = elementSelectModal({
    hashTable,
    keyValue: "PeriodID",
    selectedValue,
    labelVal: "Period: ",
    labelClassVal: "class='blue-light-text'",
    option: "",
    optionText: "a reporting period"
  });

  return selectPeriod;
};

export const createInstructorBloc = (
  dataList,
  courseId,
  mainInstructor,
  actualPeriod
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
    "Test Hrs     ",
    "Test Cont. Hrs",
    "Lab Hrs       ",
    "Extra Hrs (LT12)"
  ];
  const hoursList = dataList.filter((record) => {
    const { PeriodID } = record;
    if (PeriodID === actualPeriod) return record;
  });

  console.log("hoursList :>> ", hoursList);

  // helpers/helperFunctions.js ==> createRow()
  const firstRow = createRow({
    record: hoursList.find((record) => record.personnelID === mainInstructor),
    labelList: Object.keys(labelsInstructor),
    labelObj: labelsInstructor,
    hiddenList: ["ID", "PeriodID", "personnelID", "Personnel_PKID"]
  });

  // helpers/helperFunctions.js ==> createRow()
  const nextRows = createRow({
    record: hoursList.find((record) => record.personnelID !== mainInstructor),
    labelList: Object.keys(labelsInstructor),
    labelObj: labelsInstructor,
    hiddenList: ["ID", "PeriodID", "personnelID", "Personnel_PKID"]
  });

  // const hiddenList = [];

  // createHeaders() <== helperFunctions.js
  const header = createHeaders(headerText);

  // const periodSelector = createPeriodSelector(courseId, startDate, endDate);
  const periodSelector = "== Period Selector ==";
  const totalRow = createTotalRow(hoursList);

  // console.log("periodSelector :>> ", periodSelector);
  const tableBody = `${firstRow}${nextRows}${totalRow}`;
  return `
  <div class="container-fluid row" id="period-selector">
    <div class="instructor-title label-text blue-light-text col-md-9">Instructors</div>
    <div class="period-select col-md-3">${periodSelector}
    </div>
  </div>
  <table class="table" id="instructors-table">
    ${header}
    <tbody>
      ${tableBody}
    </tbody>
  </table>`;
};
