//* Process after generate-btn is clicked
//* =====================================

// Format for the URI:
// ../reports/POP_Reports/WIOA_tablesDataCheck2.aspx?st=07/01/2020&en=06/30/2021
// &ag=PRA&nfc=0&cf=1ALL,E,L,W4,Y&nfy=0
//
// "../reports/" + GetReport[index]['FileName']  + "?st=" + startdate + "&en=" +
// enddate + "&ag=" + agencyid + "&cf=" + fundingselectedvalues +  "&nfc=" +
// criteriakey + "&tfc=" + criteriaselectedvalues + "&nfy=1";
//
// /reports/POP_Reports/WIOA_tablesDataCheck5A.aspx?st=07/01/2020&en=06/30/2021
// &ag=PRA&nfc=5&tfc=AllenJoshPRA7,PorterJanePRA9&cf=1ALL,E,L,W4,Y&nfy=0

export const createReportURI = (reportObj) => {
  // createObject() <= helpers/helperFunctions.js
  const selectedValues = createObject($(".selectors").serializeArray());
  const getFundingSources = (selection, sourceObj) => {
    let sources = [];
    if (selection === "ALL") {
      $("#class-funding > option").each(function (indx) {
        const source = $(this).val();
        sources.push(source);
      });
    } else {
      for (const prop in sourceObj) {
        sources.push(sourceObj[prop]);
      }
    }
    return sources.join(",");
  };
  const getSelectedCriteria = () => {
    let list = $(".criteria select").serializeArray();
    list = list.filter((record) => record.value).map((record) => record.value);
    console.log("list :>> ", list);
    return list.join(",");
  };
  const selectedFunding = Object.keys(selectedValues).filter((key) =>
    key.startsWith("funding")
  );
  const sourceObj = {};
  for (const source of selectedFunding) {
    if (selectedValues[source]) sourceObj[source] = selectedValues[source];
  }
  // createCredentials <= helpers/helperFunctions.js
  const { AgencyID } = createCredentials();
  const { fiscalYear, funding, reportCategory } = selectedValues;
  const { FileName } = reportObj;
  const fundingStr = getFundingSources(funding, sourceObj);
  const startDate = `07/01/${fiscalYear}`;
  const endDate = `06/30/${fiscalYear}`;
  const criteriaStr = getSelectedCriteria();
  const numFiscalYear = $("#fiscal-year").prop("selectedIndex");
  const reportURI = `../reports/${FileName}?st=${startDate}&en=${endDate}%ag=${AgencyID}&fc=${fundingStr}&nfc=${reportCategory}&tfc=${criteriaStr}&nfy=${numFiscalYear}
  `;
  return reportURI;
};
