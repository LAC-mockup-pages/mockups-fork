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
