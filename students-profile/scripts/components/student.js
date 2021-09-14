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
