// Display bloc for instructors showing monthly instructional hours

//TODO Address the case of a new course, GetInstrHours method
// returns an empty hash table (pending GJ answer - 03/03/21)

// Create Object with 12 months of instructional hours for
// an instructor and a total column.
const createMonthlyHours = (list) => {
  let row = "";
  // Creates array of monthly periods, format is "MM01"
  const buildPeriods = () => {
    const firstSemester = [];
    const secondSemester = [];
    for (let i = 7, j = 1; i < 13, j < 7; i++, j++) {
      const month2 = i < 10 ? `0${i}01` : `${i}01`;
      const month1 = `0${j}01`;
      firstSemester.push(month1);
      secondSemester.push(month2);
    }
    return [...secondSemester, ...firstSemester];
  };
  const periods = buildPeriods();

  for (const period of periods) {
    let month = list.find((record) => record.PeriodID.slice(-4) === period);
    if (month) {
      row += `
      <td class="cell-data" id=${period} data-id=${month.ID}>
      ${month.InstHours}
      </td>`;
    } else {
      row += `
      <td class="cell-data" id=${period} data-id="">
        0
      </td>`;
    }
  }
  return row;
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
      <tr id=${Personnel_PKID} data-personnel=${PersonnelID}>
        <td class="cell-data instructor-hours">${Name}</td>
        ${monthlyValues}
      </tr>
      `;
  }

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
