//* Data objects for Landing Page
//*=================================

const GetAgencyIndex = [
  {
    AgencyID: "PHIP",
    AgencyName: "Phipps Community Development Corporation",
    Division: ""
  },
  { AgencyID: "PWSD", AgencyName: "Port Washington UFSD", Division: "" },
  {
    AgencyID: "PRA",
    AgencyName: "Practice Agency",
    Division: "AAA Division Changes Made Dec 2 Venu"
  },
  { AgencyID: "PRA1", AgencyName: "Practice Agency 1", Division: "" },
  { AgencyID: "PRY", AgencyName: "Project Reach Youth", Division: "" },
  {
    AgencyID: "PNWB",
    AgencyName: "Putnam/Northern Westchester BOCES",
    Division: ""
  }
];

const GetAgencyIndex2 = [
  {
    ID: "259",
    AgencyID: "BALC",
    AgencyName: "Buffalo/Adult Learning Center",
    Division: "Buffalo Public Schools Adult Education Division"
  },
  {
    ID: "131",
    AgencyID: "MCC",
    AgencyName: "CUNY Borough of Manhattan Community College",
    Division: "CENTER FOR CONTINUING EDUCATION"
  },
  {
    ID: "126",
    AgencyID: "CTY",
    AgencyName: "CUNY City College",
    Division: "ADULT EDUCATION CENTER at The City College of New "
  },
  {
    ID: "247",
    AgencyID: "PHIP",
    AgencyName: "Phipps Community Development Corporation",
    Division: ""
  },
  {
    AgencyPKID: "212",
    AgencyID: "PWSD",
    AgencyName: "Port Washington UFSD",
    Division: ""
  },
  {
    AgencyPKID: "14",
    AgencyID: "PRA",
    AgencyName: "Practice Agency",
    Division: "AAA Division"
  },
  {
    AgencyPKID: "283",
    AgencyID: "PRA1",
    AgencyName: "Practice Agency 1",
    Division: ""
  },
  {
    AgencyPKID: "80",
    AgencyID: "PRY",
    AgencyName: "Project Reach Youth",
    Division: ""
  },
  {
    AgencyPKID: "251",
    AgencyID: "PNWB",
    AgencyName: "Putnam/Northern Westchester BOCES",
    Division: ""
  },
  {
    AgencyPKID: "161",
    AgencyID: "QFL",
    AgencyName: "QBPL Flushing Branch",
    Division: "Flushing Adult Learning Center"
  },
  { AgencyPKID: "1", AgencyID: "R01", AgencyName: "Region 1", Division: "" },
  {
    AgencyPKID: "10",
    AgencyID: "RCSD",
    AgencyName: "Rochester City School District",
    Division: "Office of Adult Career & Education Services"
  },
  {
    AgencyPKID: "11",
    AgencyID: "SESD",
    AgencyName: "Syracuse City School District",
    Division: "Adult & Continuing Education"
  }
];
// const GetAgencyCardValues = [
//   { ID: "card0", values: ["20"], report: ["../404-page/index-test.html"] },
//   { ID: "card1", values: ["125"], report: [""] },
//   { ID: "card2", values: ["120"], report: ["../404-page/index-test.html"] },
//   { ID: "card3", values: ["24"], report: ["../404-page/index-test.html"] },
//   {
//     ID: "card4",
//     values: ["100", "101"],
//     report: ["../404-page/index-test.html", "../404-page/index-test.html"]
//   },
//   {
//     ID: "card5",
//     values: ["121", "16"],
//     report: ["../404-page/index-test.html", "../404-page/index-test.html"]
//   },
//   {
//     ID: "card6",
//     values: ["21%", "25%"],
//     report: ["../404-page/index-test.html"]
//   },
//   {
//     ID: "card7",
//     values: ["15%", "14%"],
//     report: ["../404-page/index-test.html"]
//   },
//   {
//     ID: "card8",
//     values: ["1240", "45"],
//     report: ["../404-page/index-test.html"]
//   }
// ];

const GetAgencyCardValues = [
  {
    AgencyID: "SESD",
    CardID: "card0",
    CardValue: "185",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/programIF.aspx?ag=SESD&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: "NULL"
  },
  {
    AgencyID: "SESD",
    CardID: "card1",
    CardValue: "1904",
    CardValue2: "",
    CardReport: "NULL",
    CardReport2: "NULL"
  },
  {
    AgencyID: "SESD",
    CardID: "card2",
    CardValue: "1904",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOR/roster.aspx?ag=SESD&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: "NULL"
  },
  {
    AgencyID: "SESD",
    CardID: "card3",
    CardValue: "764",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOH/ContactHoursSummary.aspx?ag=SESD&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: "NULL"
  },
  {
    AgencyID: "SESD",
    CardID: "card4",
    CardValue: "204",
    CardValue2: "204",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=SESD&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=SESD&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "SESD",
    CardID: "card5",
    CardValue: "520",
    CardValue2: "499",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=SESD&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=SESD&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "SESD",
    CardID: "card6",
    CardValue: "29.0",
    CardValue2: "37.0",
    CardReport:
      "../POP_Reports/POPProgramEval.aspx?st=07/01/2021&en=06/30/2022&ag=SESD&nfc=0&cf=2NYS&nfy=1",
    CardReport2: "NULL"
  },
  {
    AgencyID: "SESD",
    CardID: "card7",
    CardValue: "NULL",
    CardValue2: "NULL",
    CardReport:
      "../NYRS_Reports/NYRSProgramEval.aspx?st=07/01/2021&en=06/30/2022&ag=SESD&nfc=0&cf=2NYS&nfy=1",
    CardReport2: "NULL"
  },
  {
    AgencyID: "SESD",
    CardID: "card8",
    CardValue: "95732.5",
    CardValue2: "1610",
    CardReport: "NULL",
    CardReport2: "NULL"
  }
];

const GetAgencyCardValues2 = [
  {
    AgencyID: "AGU",
    CardID: "card0",
    CardValue: "17",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/programIF.aspx?ag=AGU&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "AGU",
    CardID: "card1",
    CardValue: "270",
    CardValue2: "",
    CardReport: "",
    CardReport2: ""
  },
  {
    AgencyID: "AGU",
    CardID: "card2",
    CardValue: "250",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOR/roster.aspx?ag=AGU&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "AGU",
    CardID: "card3",
    CardValue: "18",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOH/ContactHoursSummary.aspx?ag=AGU&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "AGU",
    CardID: "card4",
    CardValue: "1",
    CardValue2: "1",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=AGU&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=AGU&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "AGU",
    CardID: "card5",
    CardValue: "207",
    CardValue2: "207",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=AGU&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=AGU&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "AGU",
    CardID: "card6",
    CardValue: "13.0",
    CardValue2: "38.0",
    CardReport:
      "../POP_Reports/POPProgramEval.aspx?st=07/01/2021&en=06/30/2022&ag=AGU&nfc=0&cf=2NYS&nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "AGU",
    CardID: "card7",
    CardValue: "25.8",
    CardValue2: "39.0",
    CardReport:
      "../NYRS_Reports/NYRSProgramEval.aspx?st=07/01/2021&en=06/30/2022&ag=AGU&nfc=0&cf=2NYS&nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "AGU",
    CardID: "card8",
    CardValue: "",
    CardValue2: "",
    CardReport: "",
    CardReport2: ""
  },
  {
    AgencyID: "PNWB",
    CardID: "card0",
    CardValue: "75",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/programIF.aspx?ag=PNWB&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PNWB",
    CardID: "card1",
    CardValue: "747",
    CardValue2: "",
    CardReport: "",
    CardReport2: ""
  },
  {
    AgencyID: "PNWB",
    CardID: "card2",
    CardValue: "747",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOR/roster.aspx?ag=PNWB&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PNWB",
    CardID: "card3",
    CardValue: "138",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOH/ContactHoursSummary.aspx?ag=PNWB&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PNWB",
    CardID: "card4",
    CardValue: "7",
    CardValue2: "7",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=PNWB&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=PNWB&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "PNWB",
    CardID: "card5",
    CardValue: "300",
    CardValue2: "291",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=PNWB&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=PNWB&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "PNWB",
    CardID: "card6",
    CardValue: "38.0",
    CardValue2: "38.0",
    CardReport:
      "../POP_Reports/POPProgramEval.aspx?st=07/01/2021&en=06/30/2022&ag=PNWB&nfc=0&cf=2NYS&nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PNWB",
    CardID: "card7",
    CardValue: "",
    CardValue2: "",
    CardReport: "",
    CardReport2: ""
  },
  {
    AgencyID: "PNWB",
    CardID: "card8",
    CardValue: "32898",
    CardValue2: "639",
    CardReport: "",
    CardReport2: ""
  },
  {
    AgencyID: "PRA",
    CardID: "card0",
    CardValue: "16",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/programIF.aspx?ag=PRA&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PRA",
    CardID: "card1",
    CardValue: "34",
    CardValue2: "",
    CardReport: "",
    CardReport2: ""
  },
  {
    AgencyID: "PRA",
    CardID: "card2",
    CardValue: "26",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOR/roster.aspx?ag=PRA&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PRA",
    CardID: "card3",
    CardValue: "17",
    CardValue2: "",
    CardReport:
      "../DMR/Instructional Offering Reports/IOH/ContactHoursSummary.aspx?ag=PRA&cid=&fy=2022&fsid=& nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PRA",
    CardID: "card4",
    CardValue: "7",
    CardValue2: "7",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=PRA&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPreTest.aspx?st=07/01/2021&en=06/30/2022&ag=PRA&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "PRA",
    CardID: "card5",
    CardValue: "6",
    CardValue2: "6",
    CardReport:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=PRA&nfc=0&cf=2NYS&nfy=1",
    CardReport2:
      "../POP_DataCheckReports/WIOA_NoPostTest.aspx?st=07/01/2021&en=06/30/2022&ag=PRA&nfc=0&cf=L&nfy=1"
  },
  {
    AgencyID: "PRA",
    CardID: "card6",
    CardValue: "25.0",
    CardValue2: "38.0",
    CardReport:
      "../POP_Reports/POPProgramEval.aspx?st=07/01/2021&en=06/30/2022&ag=PRA&nfc=0&cf=2NYS&nfy=1",
    CardReport2: ""
  },
  {
    AgencyID: "PRA",
    CardID: "card7",
    CardValue: "",
    CardValue2: "",
    CardReport: "",
    CardReport2: ""
  },
  {
    AgencyID: "PRA",
    CardID: "card8",
    CardValue: "229.25",
    CardValue2: "9",
    CardReport: "",
    CardReport2: ""
  }
];
