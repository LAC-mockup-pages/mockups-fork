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
//
// Format for Export to Excel URI:
// ../reports/ReportExport.aspx" + "?st=" + startdate + "&en=" + enddate + "&ag=" + agencyid + "&cf=" + fundingselectedvalues +  "&nfc=" + criteriakey + "&tfc=" + criteriaselectedvalues + "&nfy=1" + "&qid=" + qid;

// export const createReportURI = (reportObj, exportFlag = false) => {
//   // createObject() <= helpers/helperFunctions.js
//   const selectedValues = createObject($(".selectors").serializeArray());
//   const getFundingSources = (selection, sourceObj) => {
//     let sources = [];
//     if (selection === "ALL") {
//       $("#class-funding > option").each(function (indx) {
//         const source = $(this).val();
//         sources.push(source);
//       });
//     } else {
//       for (const prop in sourceObj) {
//         sources.push(sourceObj[prop]);
//       }
//     }
//     return sources.join(",");
//   };
//   const getSelectedCriteria = () => {
//     let list = $(".criteria select").serializeArray();
//     list = list.filter((record) => record.value).map((record) => record.value);
//     console.log("list :>> ", list);
//     return list.join(",");
//   };
//   const selectedFunding = Object.keys(selectedValues).filter((key) =>
//     key.startsWith("funding")
//   );
//   const sourceObj = {};
//   for (const source of selectedFunding) {
//     if (selectedValues[source]) sourceObj[source] = selectedValues[source];
//   }
//   // createCredentials <= helpers/helperFunctions.js
//   const { AgencyID } = createCredentials();
//   const { fiscalYear, funding, reportCategory } = selectedValues;
//   const { ID, FileName } = reportObj;
//   // exportFlag only has a truesy value when the Export button is clicked.
//   // It modifies the pageName and add the report ID (qid) to the query string.
//   const pageName = exportFlag ? "ReportExport.aspx" : FileName;
//   const reportID = exportFlag ? `&qid=${ID}` : "";
//   const fundingStr = getFundingSources(funding, sourceObj);
//   const startDate = `07/01/${fiscalYear}`;
//   const endDate = `06/30/${fiscalYear}`;
//   const criteriaStr = getSelectedCriteria();
//   const numFiscalYear = $("#fiscal-year").prop("selectedIndex");
//   const reportURI = `../reports/${pageName}?st=${startDate}&en=${endDate}%ag=${AgencyID}&fc=${fundingStr}&nfc=${reportCategory}&tfc=${criteriaStr}&nfy=${numFiscalYear}${reportID}
//   `;
//   return reportURI;
// };

// Needs selectedValues

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;
const setNFYvalue = (selectedFY) => {
  // createCredentials() <== helpers/helperFunctions.js
  const { FiscalYear } = createCredentials();
  const numFiscalYear = Number(FiscalYear);
  const today = DT.now();
  const currentYear = today.year;
  const currentMonth = today.month;
  let previousFY = 0;
  if (currentMonth < 6) {
    previousFY = Math.min(currentYear, numFiscalYear - 1);
  } else if (currentYear === numFiscalYear) {
    previousFY = Math.max(currentYear, numFiscalYear - 1);
  } else {
    previousFY = numFiscalYear - 1;
  }
  const nfy = previousFY <= Number(selectedFY) ? 0 : 1;
  return `&nfy=${nfy}`;
};

// Creates a Map for reports query string elements
const setReportsMap = () => {
  const newMap = new Map();
  newMap
    .set(
      [
        "55",
        "57",
        "60",
        "61",
        "87",
        "133",
        "137",
        "140",
        "152",
        "162",
        "182",
        "183",
        "187",
        "226",
        "236"
      ],
      { AgencyPKID: "ag", fiscalYear: "fy" }
    )
    .set(["47", "86"], {
      AgencyPKID: "ag",
      fiscalYear: "fy",
      studentStatus: "stustat"
    })
    .set(["169", "185"], {
      AgencyPKID: "ag",
      fiscalYear: "fy",
      reportMonths: "ca"
    })
    .set(["170"], {
      AgencyPKID: "ag",
      fiscalYear: "fy",
      reportMonths: "ca",
      reportWeeks: "fsid"
    });

  return newMap;
};

// const reportParts = { 182: { AgencyPKID: "ag", fiscalYear: "fy" } };

export const createReportURI = (values, fileLink) => {
  const { ID } = values;
  let stringURI = `../reports/${fileLink}?`;
  const reportMap = setReportsMap();
  let labelObj = {};
  for (const [key, value] of reportMap) {
    if (key.includes(ID)) labelObj = value;
  }
  for (const [label, value] in labelObj) {
    const ampersand = label === "ag" ? "" : "&";
    stringURI += `${ampersand}${value}=${values[label]}`;
  }
  return stringURI;
};
