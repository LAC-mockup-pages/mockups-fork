//* Process after generate-btn is clicked
//* =====================================

export const createReport = (reportObj) => {
  console.log("Report created in new browser tab");
  // createObject() <= helpers/helperFunctions.js
  const selectedValues = createObject($(".selectors").serializeArray());
  console.log(
    "🚀 / file: generate-event.js / line 7 / createReport / selectedValues",
    selectedValues
  );
  // createCredentials <= helpers/helperFunctions.js
  const { AgencyID } = createCredentials();

  const { fiscalYear, classFunding, reportCategory } = selectedValues;
  const { FileName } = reportObj;
  const startDate = `07/01/${fiscalYear}`;
  const endDate = `06/30/${fiscalYear}`;
};
