// Display bloc for instructors showing monthly instructional hours

//TODO Address the case of a new course, GetInstrHours method
// returns an empty hash table (pending GJ answer - 03/03/21)

// Create Object with 12 months of instructional hours for
// an instructor and a total column.
const createMonthlyHours = (list) => {
  let row = "";

  // Creates yearly array of monthly periods, format is "MMMHours".
  // Starts in July, beginning of Fiscal Year.
  const buildPeriods = () => {
    const createMonthList = (num) => {
      return new Array(6).fill("Hours", 0, 6).map((item, indx) => {
        const month = new Date("2021", indx + num, "01")
          .toDateString()
          .substr(4, 3);
        return month + item;
      });
    };
    const first = createMonthList(0);
    const second = createMonthList(6);
    return [...second, ...first];
  };

  const periods = buildPeriods();
  let totalInstrHours = 0;

  for (const period of periods) {
    let month = list.find((record) => record.PeriodID.slice(-4) === period);
    if (month) {
      totalInstrHours += Number(month.InstHours);
      row += `
      <td class="cell-data month-value">
        <input class="cell-input" id=${month.ID} name=${period} value=${month.InstHours}>
      </td>`;
    } else {
      row += `
      <td class="cell-data month-value">
        <input class="cell-input"  name=${period} value="">
      </td>`;
    }
  }
  row += `
  <td class="cell-data instructor-total">${totalInstrHours}</td>
  `;

  return row;
};

export const createInstructorHours = () => {
  let body = "";
  for (const instructorObj of GetClassInstructor.slice(0)) {
    const { Personnel_PKID, PersonnelID, AssignDate, Name } = instructorObj;
    const instrHoursList = GetInstrHours.slice(0)
      .filter((period) => period.Personnel_PKID === Personnel_PKID)
      .sort((record1, record2) =>
        record1.PeriodID < record2.PeriodID
          ? -1
          : record1.PeriodID > record2.PeriodID
          ? 1
          : 0
      );
    const monthlyValues = createMonthlyHours(instrHoursList);
    body += `
      <tr id=${Personnel_PKID} data-personnel=${PersonnelID}>
        <td class="cell-data instructor-name">${Name}</td>
        <td class="cell-data assign-date">${AssignDate}</td>
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
