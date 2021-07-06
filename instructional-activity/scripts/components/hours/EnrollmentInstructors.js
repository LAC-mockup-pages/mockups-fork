// Display bloc for instructors showing monthly instructional hours

//TODO Address the case of a new course, GetInstrHours method
// returns an empty hash table (pending GJ answer - 03/03/21)

// Creates yearly array of monthly periods, format is "MM01".
// Starts in July, beginning of Fiscal Year.
export const buildPeriods = () => {
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

export const createInstrBloc = (buttonState) => {
  let body = "";

  //! Endpoint sending the request  -  Production only
  //const annualInstrHours=GetIntsHours_Annual(coursePkId).slice(0)
  //! Call to the data object in dataServer.js  -  Development only
  const annualInstrHours = GetIntsHours_Annual.slice(0);

  for (const record of annualInstrHours) {
    const { ID, Personnel_PKID, InstructorName } = record;
    let monthlyValues = "";
    let instructorTotal = 0;
    const monthlyHours = Object.keys(record).filter((field) =>
      field.includes("Hours")
    );

    for (const key of monthlyHours) {
      const value = record[key] === "0" ? "" : record[key];
      instructorTotal += value ? Number(value) : 0;
      monthlyValues += `
      <td class="cell-data month-value">
        <input class="cell-input" name=${key} value=${value}>
      </td>
      `;
    }
    body += `
      <tr id=${ID}  data-personnel=${Personnel_PKID}>
        <td class="cell-data instructor-name">${InstructorName}</td>
        <td class="cell-data assign-date">MM-DD-YYYY</td>
        ${monthlyValues}
        <td class="cell-data instructor-total">${instructorTotal}</td>
      </tr>
      `;
  }

  return `
<div class="container-fluid row blue-light-text" id="instructor-hours">
  <div class="instr-title label-text col-md-4">Instructional Hours</div>
  <div class="label-text col-md-5"></div>
  <div class="container-fluid row col-md-3">
    <button type="button" id="instructor-hours-btn"${buttonState} class="btn dark-blue-text blue-light-bg col-sm-6">Save</button>
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
