//* Processing student info for Left side of Profile page
//* =====================================================

export const titleSection = (dataObj) => {
  const { First, Last, Middle, BirthDate } = dataObj;
  const sectionContent = `
  <div class="col-md-6 title-text">${Last}, ${First} ${Middle}</div>
  <div class="col-md-6 title-text">Birth date: ${BirthDate}</div>
  `;
  return [".page-title", sectionContent];
};

export const contactSection = (dataObj) => {
  const { Address, City, State, Zip, HomePhone, CellPhone, StudEmail } =
    dataObj;
  const sectionContent = `
<div class="box-title">Contact information</div>
<div class="value">${Address}</div>
<div class="value">${City.toUpperCase()}, ${State} ${Zip}</div>
<div class="row">
  <div class="col-md-3 rubrique">Home phone:</div>
  <div class="col-md-9">${HomePhone}</div>
</div>
<div class="row">
  <div class="col-md-3 rubrique">Mobile phone:</div>
  <div class="col-md-9">${CellPhone}</div>
</div>
<div class="row">
  <div class="col-md-3 rubrique">Email:</div>
  <div class="col-md-9">${StudEmail}</div>
</div>
`;
  return [".contact", sectionContent];
};

const createEmploymentTable = (obj) => {
  const {
    EmployStatusFY,
    EmploymentStatusDesc,
    EmployDate,
    EmployerName,
    ReleaseDate
  } = obj;
  const header = `
  <thead>
    <tr class="blue-light-bg">
      <th>Status</th>
      <th>FY</th>
      <th>Employer</th>
      <th>Employement date</th>
      <th>Release date</th>
    </tr>
  </thead>`;

  const body = `
  <tbody>
    <tr>
      <td>${EmploymentStatusDesc}</td>
      <td>${EmployStatusFY}</td>
      <td>${EmployerName}</td>
      <td>${EmployDate}</td>
      <td>${ReleaseDate}</td>
    </tr>
  </tbody>
  `;
  const table = `
<table class="table table-bordered employment-table">
  ${header}${body}
</table>
`;
  return table;
};

export const keyDemoSection = (dataObj, employmentObj) => {
  const { SexDesc, EthnicityDesc, RaceDesc } = dataObj;
  const raceElement = RaceDesc.split(",")
    .map((item) => `<div class="value">${item}</div>`)
    .join("");
  const employmentElement = createEmploymentTable(employmentObj);
  const sectionContent = `
  <div class="box-title">Key demographics</div>
  <div class="value">${SexDesc}</div>
  <div class="value">${EthnicityDesc}</div>
  ${raceElement}
  ${employmentElement}
  `;
  return [".key-demo", sectionContent];
};

export const populationSection = (dataStr) => {
  const populationElement = dataStr
    ? dataStr
        .split(",")
        .map((item) => `<div class="value">${item}</div>`)
        .join("")
    : `<div class="no-data">No Data</div>`;
  const sectionContent = `
  <div class="box-title">Population categories</div>
    ${populationElement}
  `;
  return [".populations", sectionContent];
};
