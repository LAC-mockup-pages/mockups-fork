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
  if (currentMonth < 7) {
    previousFY = Math.min(currentYear, numFiscalYear - 1);
  } else if (currentYear === numFiscalYear) {
    previousFY = Math.max(currentYear, numFiscalYear - 1);
  } else {
    previousFY = numFiscalYear - 1;
  }
  const nfy = selectedFY > previousFY ? 1 : 0;
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
      { AgencyPKID: "ag", selectedYear: "fy" }
    )
    .set(["47", "56", "85", "86", "186", "207"], {
      AgencyPKID: "ag",
      selectedYear: "fy",
      reportCriteria: "cid",
      studentStatus: "stustat"
    })
    .set(["169", "185"], {
      AgencyPKID: "ag",
      selectedYear: "fy",
      reportMonths: "ca"
    }) //
    .set(["138", "163", "164", "176", "242", "243", "244", "245"], {
      AgencyPKID: "ag",
      reportCategory: "fid",
      reportCriteria: "cid",
      fromDate: "st",
      endDate: "en"
    })
    .set(["79", "177", "184", "191", "192"], {
      reportAgency: "ag",
      selectedYear: "fy",
      reportCategory: "sdcadsc",
      reportCriteria: "ca"
    });

  return newMap;
};

export const createReportURI = (valuesObj, fileLink, validExport) => {
  const { groupSelector, reportCategory, titleSelector, selectedYear } =
    valuesObj;
  // validExport only has a truesy value when Export button is clicked.
  // It modifies the pageName and add the report ID (qid) to the query string.
  const pageName = validExport ? "ReportExport.aspx" : fileLink;
  const reportID = validExport ? `&qid=${titleSelector}` : "";
  let additionalQueryElement = "";
  let stringURI = `../reports/${pageName}?`;
  const reportMap = setReportsMap();
  let labelObj = {};
  for (const [key, obj] of reportMap) {
    if (key.includes(titleSelector)) {
      labelObj = obj;
    }
  }
  for (const label in labelObj) {
    let selectedValue = valuesObj[label];
    let labelValue = "";

    // Staff Development reports needs separate conditional statement

    if (groupSelector === "79" && label === "reportCriteria") {
      switch (reportCategory) {
        case "1":
          labelValue = "ca";
          selectedValue = "0";
          break;
        case "2":
          labelValue = "pid";
          additionalQueryElement = "&ca=0";
          break;
        case "3":
          labelValue = "sdca";
          additionalQueryElement = "&ca=0";
          break;
        default:
          labelValue = "ca";
          break;
      }
    } else {
      labelValue = labelObj[label];
    }

    const ampersand = labelValue === "ag" ? "" : "&";

    const queryElement = selectedValue
      ? `${ampersand}${labelValue}=${selectedValue}`
      : "";
    stringURI += queryElement;
  }
  return `${stringURI}${reportID}${additionalQueryElement}${setNFYvalue(
    Number(selectedYear)
  )}`;
};
