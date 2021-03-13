// Display bloc for instructors showing monthly instructional hours

// Create Object with 12 months of instructional hours for
// an instructor and a total column.
const createMonthlyHours = (list) => {
  const { StartDate, EndDate } = GetCourse.slice(0);
};

const createMainInstructorHrs = (mainInstr) => {
  //TODO Address the case of a new course, GetInstrHours method
  //TODO returns an empty hash table (pending GJ answer - 03/03/21)

  // Filtered hours for main instructor sorted by ascending month
  const filteredHours = GetInstrHours.slice(0)
    .filter((instructor) => instructor.personnelID === mainInstr)
    .sort((record1, record2) =>
      record1.PeriodID < record2.PeriodID
        ? -1
        : record1.PeriodID > record2.PeriodID
        ? 1
        : 0
    );
  let monthlyInstrHours = "";
  // const instructorName = GetInstructorSource.slice(0).find(
  //   (instr) => instr.key === mainInstr
  // );
  const {
    Class_PKID,
    Personnel_PKID,
    personnelID,
    InstructorName
  } = filteredHours[0];

  console.log("filteredHours :>> ", filteredHours);
  // console.table(filteredHours[0]);

  // createMonthlyHours(filteredHours);
  const hoursTest = [
    { PeriodID: "0701", InstHours: "10" },
    { PeriodID: "0801", InstHours: "12" },
    { PeriodID: "0901", InstHours: "23" },
    { PeriodID: "1001", InstHours: "" },
    { PeriodID: "1101", InstHours: "34" },
    { PeriodID: "1201", InstHours: "" },
    { PeriodID: "0101", InstHours: "" },
    { PeriodID: "0201", InstHours: "" },
    { PeriodID: "0301", InstHours: "" },
    { PeriodID: "0401", InstHours: "" },
    { PeriodID: "0501", InstHours: "" },
    { PeriodID: "0601", InstHours: "" }
  ];

  // for (const record of filteredHours) {
  for (const record of hoursTest) {
    const { PeriodID, InstHours } = record;

    monthlyInstrHours += `
<td class="cell-data month-value">
  <input class="cell-data cell-input hours-value" name=${PeriodID} value=${InstHours}>
</td>
`;
  }
  return `
  <tr id=${Personnel_PKID} data-class=${Class_PKID} data-personnel=${personnelID}>
    <td class="cell-data main-instructor">${InstructorName}</td>
    ${monthlyInstrHours}
    <td class="cell-data hours-total">79</td>
  </tr>
   `;
};

export const createInstructorHours = () => {
  let body = "";
  for (const instructorObj in GetClassInstructor.slice(0)) {
    const { Personnel_PKID, PersonnelID, Name } = instructorObj;
    const instrHoursList = GetInstrHours.slice(0)
      .filter((period) => period.Personnel_PKID === Personnel_PKID)
      .sort((record1, record2) =>
        record1.PeriodID < record2.PeriodID
          ? -1
          : record1.PeriodID > record2.PeriodID
          ? 1
          : 0
      );

    console.log("instrHoursList :>> ", instrHoursList);

    const monthlyValues = createMonthlyHours(instrHoursList);

    body += `
      <tr id=${Personnel_PKID} data-personnel=${personnelID}>
        <td class="cell-data instructor-hours">${Name}</td>
        ${monthlyValues}
      </tr>
      `;
  }

  // const body = createMainInstructorHrs(mainInstructor);

  return `
  <div class="container-fluid row blue-light-text" id="instructor-hours">
    <div class="instr-title label-text col-md-4">Instructional Hours</div>
    <div class="label-text col-md-5"></div>
    <div class="container-fluid row col-md-3">
      <button type="button" id="instructor-hours-btn" class="btn dark-blue-text blue-light-bg col-sm-6">Save</button>
    </div>
  </div>
  <div class="instr-scrolling">
    <table class="table table-condensed scrolling-hours" id="instr-hours-table">

      <tbody class="instr-hours-body">
        ${body}
      </tbody>
    </table>
  </div>
  `;
};
