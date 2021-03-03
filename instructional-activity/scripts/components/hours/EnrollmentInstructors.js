// Display bloc for instructors showing monthly instructional hours

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
  const instructorName = GetInstructorSource.slice(0).find(
    (instr) => instr.key === mainInstr
  );
  const { Class_PKID, Personnel_PKID, personnelID } = filteredHours[0];

  console.log("filteredHours :>> ", filteredHours);
  // console.table(filteredHours[0]);
  for (const record of filteredHours) {
    const { ID, PeriodID, InstHours } = record;
    monthlyInstrHours += `
<td class="cell-data month-value" data-id=${ID} data-period=${PeriodID}>${InstHours}</td>
`;
  }
  return `
  <tr id=${Personnel_PKID} data-class=${Class_PKID} data-personnel=${personnelID}>
    <td class="cell-data main-instructor">${instructorName}</td>
    ${monthlyInstrHours}
  </tr>
   `;
};

export const createInstructorHours = (mainInstructor) => {
  const body = createMainInstructorHrs(mainInstructor);

  return `
  <div class="container-fluid row blue-light-text" id="instructor-hours">
    <div class="student-title label-text col-md-4">Instructional Hours</div>
    <div class="label-text col-md-6"></div>
    <div class="container-fluid row col-md-2">
      <button type="button" id="instructor-hours-btn" class="btn dark-blue-text blue-light-bg col-sm-6">Save</button>
    </div>
  </div>
  <div class="scrolling">
    <table class="table table-condensed scrolling-hours" id="instr-hours-table">

      <tbody class="instr-hours-body">
        ${body}
      </tbody>
    </table>
  </div>
  `;
};
