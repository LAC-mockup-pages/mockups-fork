//* Processing student info for Funding section of Profile page
//* =====================================================

export const fundingSection = (dataStr) => {
  const fundingElement = dataStr
    ? dataStr
        .split(",")
        .map((item) => `<div class="value">${item}</div>`)
        .join("")
    : `<div class="no-data">Not on NRS/NYRS</div>`;
  const sectionContent = `
  <div class="box-title">NRS | NYRS report inclusion</div>
    ${fundingElement}
  `;
  return [".funding", sectionContent];
};
