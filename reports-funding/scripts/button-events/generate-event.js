//* Process after generate-btn is clicked
//* =====================================

// Format for the URI:
// ../reports/POP_Reports/WIOA_tablesDataCheck2.aspx?st=07/01/2020&en=06/30/2021
// &ag=PRA&nfc=0&cf=1ALL,E,L,W4,Y&nfy=0
//
// "../reports/" + GetReport[index]['FileName']  + "?st=" + startdate + "&en=" +
// enddate + "&ag=" + agencyid + "&cf=" + fundingselectedvalues +  "&nfc=" +
// criteriakey + "&tfc=" + criteriaselectedvalues + "&nfy=1";

export const createReportURI = (reportObj) => {
  console.log("Report created in new browser tab");
  // createObject() <= helpers/helperFunctions.js
  const selectedValues = createObject($(".selectors").serializeArray());
  const selectedFunding = Object.keys(selectedValues).filter((key) =>
    key.startsWith("funding")
  );
  console.log(
    "🚀 / file: generate-event.js / line 7 / createReport / selectedValues",
    selectedValues
  );
  // createCredentials <= helpers/helperFunctions.js
  const { AgencyID } = createCredentials();

  const { fiscalYear, reportCategory } = selectedValues;
  const { FileName } = reportObj;
  const startDate = `07/01/${fiscalYear}`;
  const endDate = `06/30/${fiscalYear}`;

  const reportURI = `../reports/${FileName}?st=${startDate}&en=${endDate}
    %ag=${AgencyID}&nfc=${reportCategory}
  `;

  return reportURI;
};

// /reports/POP_Reports/WIOA_tablesDataCheck5A.aspx?st=07/01/2020&en=06/30/2021
// &ag=PRA&nfc=5&tfc=AllenJoshPRA7,PorterJanePRA9&cf=1ALL,E,L,W4,Y&nfy=0
