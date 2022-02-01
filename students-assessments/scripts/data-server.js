//* Data objects for Student Assessments Page
//*=================================

//! =================================
//! Uncomment for Production
//! =================================

// async function GetSub_ScaleScore(tbTABEKey, tbMode) {
//   const urlsource = window.location.pathname.substring(
//     window.location.pathname.lastIndexOf("/") + 1
//   );
//   const body = JSON.stringify({ testscore: tbTABEKey, testmode: tbMode });
//   const response = await fetch(urlsource + "/GetTABE11_ScaleScore", {
//     method: "POST",
//     credentials: "same-origin", // 'include'
//     headers: {
//       Accept: "application/json",
//       "Content-type": "application/json"
//     },
//     body
//   });
//   const result = await response.json();
//   //console.log(JSON.stringify(result.d));
//   return JSON.parse(result.d);
// }
//! =================================

//! =================================
//! For Development ONLY!
//! Comment out for Production
//! =================================

const GetSub_ScaleScore = [
  { TABEKEYScore: "497.2", ScaleScore: "497", PerfLevel: "2" }
];
//! =================================

// ddl ???
const GetStudentHeader = [
  {
    ID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    StudentName: "AA1_Jacques, Gregory ",
    BirthDate: "07/12/1987",
    Pop_Order: "",
    POPHours: "",
    POP_Status: "",
    FY_Funding: "Not Enrolled",
    OtherCode: ""
  }
];

// ddlForm
const GetForm_BestPlus2 = [
  { key: "D", value: "D" },
  { key: "E", value: "E" },
  { key: "F", value: "F" },
  { key: "CBT", value: "Computer Based" }
];

// ddlForm
const GetForm_TABE11 = [
  { key: "11", value: "11" },
  { key: "12", value: "12" },
  { key: "99", value: "Loc" }
];

// ddlLevel
const GetLevel_TABE11 = [
  { key: "L", value: "L|Literacy" },
  { key: "E", value: "E|Easy" },
  { key: "M", value: "M|Moderate" },
  { key: "D", value: "D|Difficult" },
  { key: "A", value: "A|Advanced" },
  { key: "X", value: "X|Locator" }
];

// ddlTestMode
const GetTestMode_TABE11 = [
  { key: "OL", value: "Online" },
  { key: "PP", value: "Paper" }
];

// ddl ???
const GetTestinfo_CurrentFY = [
  {
    ID: "181467",
    TestDate: "07/01/2020",
    TestType: "TR",
    TestForm: "11",
    TestLevel: "M",
    SubScore1: "35",
    SubScore2: "0",
    Score: "35/0",
    ScaleScore: "548",
    GradeEquivalent: "0",
    NRSLevel: "4",
    PreTest: "",
    Pre_Post: "",
    Student_PKID: "1048303"
  },
  {
    ID: "181467",
    TestDate: "07/01/2018",
    TestType: "TR",
    TestForm: "11",
    TestLevel: "M",
    SubScore1: "35",
    SubScore2: "0",
    Score: "35/0",
    ScaleScore: "548",
    GradeEquivalent: "0",
    NRSLevel: "4",
    PreTest: "",
    Pre_Post: "",
    Student_PKID: "1048303"
  },
  {
    ID: "181467",
    TestDate: "07/02/2015",
    TestType: "TR",
    TestForm: "11",
    TestLevel: "M",
    SubScore1: "35",
    SubScore2: "0",
    Score: "35/0",
    ScaleScore: "548",
    GradeEquivalent: "0",
    NRSLevel: "4",
    PreTest: "",
    Pre_Post: "",
    Student_PKID: "1048303"
  },
  {
    ID: "181467",
    TestDate: "08/01/2021",
    TestType: "TR",
    TestForm: "11",
    TestLevel: "M",
    SubScore1: "35",
    SubScore2: "0",
    Score: "35/0",
    ScaleScore: "548",
    GradeEquivalent: "0",
    NRSLevel: "4",
    PreTest: "",
    Pre_Post: "",
    Student_PKID: "1048303"
  }
];

// ddl ???
const GetPreTests = [
  {
    ID: "566522",
    Student_PKID: "413429",
    TestDate: "04/20/2007",
    TestType: "TM",
    TestForm: "10",
    TestLevel: "M",
    SubScore1: "27",
    SubScore2: "30",
    Score: "0",
    ScaleScore: "482",
    GradeEquivalent: "5",
    NRSLevel: "3",
    PreTest: "",
    Name: ""
  },
  {
    ID: "615283",
    Student_PKID: "413429",
    TestDate: "04/01/2008",
    TestType: "BESTP",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "430",
    GradeEquivalent: "",
    NRSLevel: "3",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "615284",
    Student_PKID: "413429",
    TestDate: "04/02/2008",
    TestType: "BESTP",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "410",
    GradeEquivalent: "",
    NRSLevel: "2",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "641014",
    Student_PKID: "413429",
    TestDate: "01/15/2007",
    TestType: "TR",
    TestForm: "9",
    TestLevel: "M",
    SubScore1: "26",
    SubScore2: "0",
    Score: "0",
    ScaleScore: "459",
    GradeEquivalent: "3",
    NRSLevel: "2",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "724488",
    Student_PKID: "413429",
    TestDate: "08/10/2007",
    TestType: "TR",
    TestForm: "9",
    TestLevel: "D",
    SubScore1: "31",
    SubScore2: "0",
    Score: "0",
    ScaleScore: "513",
    GradeEquivalent: "5",
    NRSLevel: "3",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "724489",
    Student_PKID: "413429",
    TestDate: "01/17/2009",
    TestType: "TR",
    TestForm: "10",
    TestLevel: "D",
    SubScore1: "47",
    SubScore2: "0",
    Score: "0",
    ScaleScore: "639",
    GradeEquivalent: "12",
    NRSLevel: "6",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "724490",
    Student_PKID: "413429",
    TestDate: "01/17/2009",
    TestType: "TM",
    TestForm: "9",
    TestLevel: "D",
    SubScore1: "25",
    SubScore2: "30",
    Score: "0",
    ScaleScore: "542",
    GradeEquivalent: "7",
    NRSLevel: "4",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "724491",
    Student_PKID: "413429",
    TestDate: "07/04/2008",
    TestType: "TR",
    TestForm: "9",
    TestLevel: "M",
    SubScore1: "35",
    SubScore2: "0",
    Score: "0",
    ScaleScore: "501",
    GradeEquivalent: "5",
    NRSLevel: "3",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "783800",
    Student_PKID: "413429",
    TestDate: "10/10/2009",
    TestType: "BESTL",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "50",
    GradeEquivalent: "",
    NRSLevel: "",
    PreTest: "checked",
    Name: "Chanecka, Brian"
  },
  {
    ID: "783868",
    Student_PKID: "413429",
    TestDate: "05/20/2009",
    TestType: "TR",
    TestForm: "9",
    TestLevel: "M",
    SubScore1: "37",
    SubScore2: "0",
    Score: "0",
    ScaleScore: "511",
    GradeEquivalent: "5",
    NRSLevel: "3",
    PreTest: "checked",
    Name: "Thomas # 13, Marcellas"
  },
  {
    ID: "783986",
    Student_PKID: "413429",
    TestDate: "12/14/2009",
    TestType: "BESTP",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "300",
    GradeEquivalent: "",
    NRSLevel: "1",
    PreTest: "",
    Name: "Franks5, Sylvia5"
  },
  {
    ID: "783987",
    Student_PKID: "413429",
    TestDate: "12/12/2009",
    TestType: "TR",
    TestForm: "9",
    TestLevel: "M",
    SubScore1: "23",
    SubScore2: "0",
    Score: "0",
    ScaleScore: "445",
    GradeEquivalent: "",
    NRSLevel: "",
    PreTest: "",
    Name: "Gillinson, Sarah"
  },
  {
    ID: "784014",
    Student_PKID: "413429",
    TestDate: "02/27/2009",
    TestType: "BESTL",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "22",
    GradeEquivalent: "",
    NRSLevel: "",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "784403",
    Student_PKID: "413429",
    TestDate: "12/12/2009",
    TestType: "TM",
    TestForm: "10",
    TestLevel: "D",
    SubScore1: "30",
    SubScore2: "35",
    Score: "0",
    ScaleScore: "567",
    GradeEquivalent: "9",
    NRSLevel: "5",
    PreTest: "checked",
    Name: "Jones-13, Susie"
  },
  {
    ID: "784417",
    Student_PKID: "413429",
    TestDate: "12/23/2009",
    TestType: "BESTP",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "432",
    GradeEquivalent: "",
    NRSLevel: "3",
    PreTest: "",
    Name: ""
  },
  {
    ID: "784418",
    Student_PKID: "413429",
    TestDate: "03/01/2009",
    TestType: "BESTL",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "76",
    GradeEquivalent: "",
    NRSLevel: "",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "784419",
    Student_PKID: "413429",
    TestDate: "12/23/2009",
    TestType: "BESTP",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "230",
    GradeEquivalent: "",
    NRSLevel: "1",
    PreTest: "",
    Name: "Blair, Jner"
  },
  {
    ID: "784420",
    Student_PKID: "413429",
    TestDate: "12/23/2009",
    TestType: "BESTL",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "56",
    GradeEquivalent: "",
    NRSLevel: "",
    PreTest: "",
    Name: "Blair, Jner"
  },
  {
    ID: "784421",
    Student_PKID: "413429",
    TestDate: "04/20/2007",
    TestType: "TR",
    TestForm: "",
    TestLevel: "",
    SubScore1: "0",
    SubScore2: "0",
    Score: "0",
    ScaleScore: "0",
    GradeEquivalent: "0",
    NRSLevel: "0",
    PreTest: "",
    Name: ""
  },
  {
    ID: "784537",
    Student_PKID: "413429",
    TestDate: "12/28/2009",
    TestType: "BESTL",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "36",
    GradeEquivalent: "",
    NRSLevel: "",
    PreTest: "checked",
    Name: ""
  },
  {
    ID: "1180103",
    Student_PKID: "413429",
    TestDate: "09/19/2019",
    TestType: "BESTL",
    TestForm: "",
    TestLevel: "",
    SubScore1: "",
    SubScore2: "",
    Score: "",
    ScaleScore: "45",
    GradeEquivalent: "",
    NRSLevel: "2",
    PreTest: "",
    Name: "jones, fred"
  }
];

const GetTestinfo_TABE11 = [
  {
    ID: "6",
    Student_PKID: "1048303",
    PostPre: "0",
    TABEDate: "07/01/2018",
    TestName: "TM|TABE Math",
    TestType: "TM",
    TestLevel: "D",
    TestLevelLong: "D|Difficult",
    TestForm: "11",
    TestMode: "PP",
    TestModeDesc: "Paper",
    SubScore1: "25",
    SubScore2: "0",
    ScaleScore: "572",
    GradeEquivalent: "0",
    NRSLevel: "4",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "28555",
    Name: "Alfieri, Shelley",
    Move: "",
    FY: "0"
  },
  {
    ID: "666",
    Student_PKID: "1048303",
    PostPre: "0",
    TABEDate: "09/01/2018",
    TestName: "ML|TABE Locator Math",
    TestType: "ML",
    TestLevel: "X",
    TestLevelLong: "X|Locator",
    TestForm: "99",
    TestMode: "PP",
    TestModeDesc: "Paper",
    SubScore1: "22",
    SubScore2: "0",
    ScaleScore: "0",
    GradeEquivalent: "0",
    NRSLevel: "0",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "28555",
    Name: "Alfieri, Shelley",
    Move: "",
    FY: "0"
  },
  {
    ID: "10012",
    Student_PKID: "1048303",
    PostPre: "0",
    TABEDate: "09/15/2019",
    TestName: "TM|TABE Math",
    TestType: "TM",
    TestLevel: "D",
    TestLevelLong: "D|Difficult",
    TestForm: "12",
    TestMode: "PP",
    TestModeDesc: "Paper",
    SubScore1: "35",
    SubScore2: "0",
    ScaleScore: "656",
    GradeEquivalent: "0",
    NRSLevel: "5",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "28555",
    Name: "Alfieri, Shelley",
    Move: "",
    FY: "0"
  },
  {
    ID: "181467",
    Student_PKID: "1048303",
    PostPre: "0",
    TABEDate: "07/01/2020",
    TestName: "TR|TABE Reading",
    TestType: "TR",
    TestLevel: "M",
    TestLevelLong: "M|Moderate",
    TestForm: "11",
    TestMode: "PP",
    TestModeDesc: "Paper",
    SubScore1: "35",
    SubScore2: "0",
    ScaleScore: "548",
    GradeEquivalent: "0",
    NRSLevel: "4",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "24234",
    Name: "Barnes, Julia",
    Move: "",
    FY: "2020"
  },
  {
    ID: "181470",
    Student_PKID: "1048303",
    PostPre: "0",
    TABEDate: "07/25/2020",
    TestName: "TR|TABE Reading",
    TestType: "TR",
    TestLevel: "E",
    TestLevelLong: "E|Easy",
    TestForm: "12",
    TestMode: "PP",
    TestModeDesc: "Paper",
    SubScore1: "20",
    SubScore2: "0",
    ScaleScore: "460",
    GradeEquivalent: "0",
    NRSLevel: "2",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "51590",
    Name: "Blade, Senua",
    Move: "checked",
    FY: "2020"
  },
  {
    ID: "181469",
    Student_PKID: "1048303",
    PostPre: "0",
    TABEDate: "07/01/2021",
    TestName: "TR|TABE Reading",
    TestType: "TR",
    TestLevel: "M",
    TestLevelLong: "M|Moderate",
    TestForm: "12",
    TestMode: "PP",
    TestModeDesc: "Paper",
    SubScore1: "30",
    SubScore2: "0",
    ScaleScore: "528",
    GradeEquivalent: "0",
    NRSLevel: "3",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "33828",
    Name: "Campbell, Don",
    Move: "",
    FY: "2021"
  }
];

const GetTests_BestLit = [
  {
    ID: "44062",
    Student_PKID: "1048303",
    PostPre: "1",
    TestDate: "02/12/2013",
    Score: "77",
    NRSLevel: "6",
    PreTest: "checked",
    Pre_Post: "",
    Personnel_PKID: "1359",
    Name: "Frown, Janice",
    Move: "",
    FY: "0"
  },
  {
    ID: "99969",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "07/11/2016",
    Score: "78",
    NRSLevel: "6",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "1359",
    Name: "Frown, Janice",
    Move: "",
    FY: "0"
  },
  {
    ID: "99968",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "07/20/2016",
    Score: "25",
    NRSLevel: "2",
    PreTest: "checked",
    Pre_Post: "",
    Personnel_PKID: "24386",
    Name: "Alisova, Muriana",
    Move: "",
    FY: "0"
  },
  {
    ID: "99967",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "07/21/2016",
    Score: "78",
    NRSLevel: "6",
    PreTest: "checked",
    Pre_Post: "",
    Personnel_PKID: "24234",
    Name: "Barnes, Julia",
    Move: "",
    FY: "0"
  },
  {
    ID: "126337",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "08/05/2018",
    Score: "25",
    NRSLevel: "2",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "28561",
    Name: "Woodhams, Mellissa",
    Move: "",
    FY: "0"
  }
];

const GetTests_BestPlus2 = [
  {
    ID: "1170",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "07/01/2016",
    TestForm: "F",
    TestFormDesc: "F",
    Score: "500",
    NRSLevel: "5",
    PreTest: "checked",
    Pre_Post: "",
    Personnel_PKID: "46765",
    Name: "Vause, Alex",
    Move: "",
    FY: "0"
  },
  {
    ID: "8089",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "07/14/2016",
    TestForm: "E",
    TestFormDesc: "E",
    Score: "444",
    NRSLevel: "3",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "46763",
    Name: "Donovan, Ray",
    Move: "",
    FY: "0"
  },
  {
    ID: "52540",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "10/26/2016",
    TestForm: "CBT",
    TestFormDesc: "Computer Based",
    Score: "455",
    NRSLevel: "4",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "2256",
    Name: "Porter, Samantha",
    Move: "",
    FY: "0"
  },
  {
    ID: "344487",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "12/08/2017",
    TestForm: "CBT",
    TestFormDesc: "Computer Based",
    Score: "450",
    NRSLevel: "3",
    PreTest: "checked",
    Pre_Post: "",
    Personnel_PKID: "24234",
    Name: "Barnes, Julia",
    Move: "",
    FY: "0"
  },
  {
    ID: "393125",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "04/07/2018",
    TestForm: "D",
    TestFormDesc: "D",
    Score: "600",
    NRSLevel: "7",
    PreTest: "checked",
    Pre_Post: "",
    Personnel_PKID: "24386",
    Name: "Alisova, Muriana",
    Move: "",
    FY: "0"
  },
  {
    ID: "433235",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "07/24/2018",
    TestForm: "CBT",
    TestFormDesc: "Computer Based",
    Score: "88",
    NRSLevel: "1",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "51033",
    Name: "Scott, Adam",
    Move: "",
    FY: "0"
  },
  {
    ID: "577302",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "07/01/2019",
    TestForm: "D",
    TestFormDesc: "D",
    Score: "400",
    NRSLevel: "2",
    PreTest: "",
    Pre_Post: "",
    Personnel_PKID: "24234",
    Name: "Barnes, Julia",
    Move: "",
    FY: "0"
  }
];
// ddlType
const GetType_TABE11 = [
  { key: "TM", value: "TM|TABE Math" },
  { key: "TR", value: "TR|TABE Reading" },
  { key: "ML", value: "ML|TABE Locator Math" },
  { key: "RL", value: "RL|TABE Locator Reading" }
];

// ddlTestType
const GetType_TASC = [
  { key: "GED", value: "GED" },
  { key: "TASC2014", value: "TASC2014" },
  { key: "TASC2015", value: "TASC2015" },
  { key: "TASC2016", value: "TASC2016" }
];

// ddlPredAct
const GetType_TASCPredAct = [
  { key: "Actual", value: "Actual" },
  { key: "Predictor", value: "Predictor" },
  { key: "Readiness", value: "Readiness" }
];

const GetTest_TASC = [
  {
    ID: "103596",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "09/16/2014",
    TestType: "TASC2014",
    TestForm: "a",
    Writing: "200",
    Social: "100",
    Science: "100",
    Reading: "100",
    Math: "100",
    Score: "500",
    PredAct: "Readiness",
    PreTest: "checked",
    Personnel_PKID: "38951",
    Name: "McConnell07, Grace",
    Move: ""
  },
  {
    ID: "75839",
    Student_PKID: "1048303",
    PostPre: "0",
    TestDate: "02/20/2013",
    TestType: "GED",
    TestForm: "aa",
    Writing: "200",
    Social: "200",
    Science: "0",
    Reading: "0",
    Math: "0",
    Score: "400",
    PredAct: "Actual",
    PreTest: "checked",
    Personnel_PKID: "24234",
    Name: "Barnes, Julia",
    Move: ""
  }
];

// ddl ???
const GetStaff = [
  {
    ID: "51885",
    InstructorName: "Aaaa, Rrr",
    PersonnelID: "AaaaRrrPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "28555",
    InstructorName: "Alfieri, Shelley",
    PersonnelID: "AlfieriShelleyPRA1",
    AgencyID: "PRA"
  },
  {
    ID: "24386",
    InstructorName: "Alisova, Muriana",
    PersonnelID: "AlisovaMurianaPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "24234",
    InstructorName: "Barnes, Julia",
    PersonnelID: "BarnesJuliaPRA14",
    AgencyID: "PRA"
  },
  {
    ID: "52310",
    InstructorName: "Bartowksi, Charles",
    PersonnelID: "BartowksiCharlesPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "51590",
    InstructorName: "Blade, Senua",
    PersonnelID: "BladeSenuaPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "51065",
    InstructorName: "Brady, Tom",
    PersonnelID: "BradyTomPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "33828",
    InstructorName: "Campbell, Don",
    PersonnelID: "CampbellDonPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "53190",
    InstructorName: "Charlotin, Wilson",
    PersonnelID: "CharlotinWilsonPRA18",
    AgencyID: "PRA"
  },
  {
    ID: "51261",
    InstructorName: "Cooper, Dale",
    PersonnelID: "CooperDalePRA18",
    AgencyID: "PRA"
  },
  {
    ID: "47016",
    InstructorName: "Cooper, Gary ",
    PersonnelID: "CooperGary PRA9",
    AgencyID: "PRA"
  },
  {
    ID: "23853",
    InstructorName: "Dains, Michille",
    PersonnelID: "DainMichillePRA19",
    AgencyID: "PRA"
  },
  {
    ID: "56402",
    InstructorName: "Dante, Elizabeth",
    PersonnelID: "DanteElizabethPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "46763",
    InstructorName: "Donovan, Ray",
    PersonnelID: "Donovan Ray PRA9",
    AgencyID: "PRA"
  },
  {
    ID: "45229",
    InstructorName: "Dryja, Kelly ",
    PersonnelID: "DryjaKelly PRA9",
    AgencyID: "PRA"
  },
  {
    ID: "23847",
    InstructorName: "EEESS, JLNAA",
    PersonnelID: "EEEJLNAAPRA18",
    AgencyID: "PRA"
  },
  {
    ID: "49708",
    InstructorName: "Frazier, Clyde",
    PersonnelID: "FrazierClydePRA9",
    AgencyID: "PRA"
  },
  {
    ID: "1359",
    InstructorName: "Frown, Janice",
    PersonnelID: "FrownJanicePRA9",
    AgencyID: "PRA"
  },
  {
    ID: "52619",
    InstructorName: "Fuller, Martin",
    PersonnelID: "FullerMartinPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "27812",
    InstructorName: "GEORGIA, WASHINGTON",
    PersonnelID: "GeorgiaWashingtonPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "50951",
    InstructorName: "Hyde, Steven",
    PersonnelID: "HydeStevenPRA18",
    AgencyID: "PRA"
  },
  {
    ID: "44988",
    InstructorName: "John, Laura",
    PersonnelID: "JohnLauraPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "53184",
    InstructorName: "Johnson, Norma",
    PersonnelID: "JohnsonNormaPRA2",
    AgencyID: "PRA"
  },
  {
    ID: "47045",
    InstructorName: "jones, fred",
    PersonnelID: "jonesfredPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "51968",
    InstructorName: "Jones, Yoga",
    PersonnelID: "JonesYogaPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "54035",
    InstructorName: "Katie, LaBonte",
    PersonnelID: "LaBonteKatiePRA27",
    AgencyID: "PRA"
  },
  {
    ID: "49118",
    InstructorName: "Kenobi, General",
    PersonnelID: "KenobiGeneralPRA18",
    AgencyID: "PRA"
  },
  {
    ID: "25120",
    InstructorName: "MacAlinney, MARY",
    PersonnelID: "MacAlinneyMARYPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "38951",
    InstructorName: "McConnell07, Grace",
    PersonnelID: "McConnell07GracePRA9",
    AgencyID: "PRA"
  },
  {
    ID: "35612",
    InstructorName: "mehmet, ayfer",
    PersonnelID: "mehmetayferPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "50202",
    InstructorName: "Melfi, Jennifer",
    PersonnelID: "MelfiJenniferPRA14",
    AgencyID: "PRA"
  },
  {
    ID: "0",
    InstructorName: "NYSED Data Match",
    PersonnelID: "NYSED Data Match",
    AgencyID: ""
  },
  {
    ID: "44987",
    InstructorName: "Peet, Tammy ",
    PersonnelID: "PeetTammy PRA10",
    AgencyID: "PRA"
  },
  {
    ID: "28083",
    InstructorName: "Porter, Jane",
    PersonnelID: "PorterJanePRA9",
    AgencyID: "PRA"
  },
  {
    ID: "2256",
    InstructorName: "Porter, Samantha",
    PersonnelID: "PorterSamanthaPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "51033",
    InstructorName: "Scott, Adam",
    PersonnelID: "ScottAdamPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "51442",
    InstructorName: "Silvers, Rayleigh",
    PersonnelID: "SilversRayleighPRA18",
    AgencyID: "PRA"
  },
  {
    ID: "24202",
    InstructorName: "Sines, Kelly",
    PersonnelID: "SinesKellyPRA18",
    AgencyID: "PRA"
  },
  {
    ID: "51884",
    InstructorName: "Smith, Jon",
    PersonnelID: "SmithJonPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "47093",
    InstructorName: "Smith, Mary",
    PersonnelID: "SmithMaryPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "2233",
    InstructorName: "Smith, Sharon",
    PersonnelID: "SmithSharonPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "50653",
    InstructorName: "Tanken, Serj",
    PersonnelID: "TankenSerjPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "38704",
    InstructorName: "Taylor, Teresa",
    PersonnelID: "TaylorTeresaPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "24447",
    InstructorName: "TesterCMP, Venu",
    PersonnelID: "TesterVenu PRA5",
    AgencyID: "PRA"
  },
  {
    ID: "40178",
    InstructorName: "TestThelakkat, Venu",
    PersonnelID: "TestThelakkatVenuPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "46765",
    InstructorName: "Vause, Alex",
    PersonnelID: "VauseAlexPRA9",
    AgencyID: "PRA"
  },
  {
    ID: "28561",
    InstructorName: "Woodhams, Mellissa",
    PersonnelID: "WoodhamsMellissaPRA14",
    AgencyID: "PRA"
  },
  {
    ID: "53348",
    InstructorName: "Ynoa, Marcos",
    PersonnelID: "YnoaMarcosPRA18",
    AgencyID: "PRA"
  },
  {
    ID: "52916",
    InstructorName: "Zoro, Roronoa",
    PersonnelID: "ZoroRoronoaPRA9",
    AgencyID: "PRA"
  }
];
