// ddlCTEDEnrollmentStatus
const GetCTEDEnrollmentStatusSource = [
  { key: "1", value: "Left CTEDS" },
  { key: "2", value: "Completed" },
  { key: "3", value: "Continuing" }
];

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

const GetEnroll = [
  {
    ID: "6745072",
    Student_PKID: "1048303",
    ClassID: "praBE2CLAC_06",
    DescriptionKey: "243277",
    EnrollDate: "07/01/2021",
    InactiveDate: "",
    InactiveReason: "",
    Transfer_PKID: "",
    TransferTo: "",
    ActiveStatus: "checked",
    Description: "BE2CLAC_06 Katie, LaBonte",
    FY: "2022",
    ISCMP: "0"
  },
  {
    ID: "6745073",
    Student_PKID: "1048303",
    ClassID: "PRABE4CCASE_1",
    DescriptionKey: "243283",
    EnrollDate: "07/01/2021",
    InactiveDate: "",
    InactiveReason: "",
    Transfer_PKID: "",
    TransferTo: "",
    ActiveStatus: "checked",
    Description: "BE4CCASE_1 Scott, Adam",
    FY: "2022",
    ISCMP: "0"
  },
  {
    ID: "6745074",
    Student_PKID: "1048303",
    ClassID: "PRACM4CCM_!",
    DescriptionKey: "243284",
    EnrollDate: "07/01/2021",
    InactiveDate: "",
    InactiveReason: "",
    Transfer_PKID: "",
    TransferTo: "",
    ActiveStatus: "checked",
    Description: "Kenobi, General (CM_!)",
    FY: "2022",
    ISCMP: "1"
  },
  {
    ID: "6698831",
    Student_PKID: "1048303",
    ClassID: "PRAES3CEnglish101-Urdu",
    DescriptionKey: "236431",
    EnrollDate: "02/07/2021",
    InactiveDate: "",
    InactiveReason: "",
    Transfer_PKID: "",
    TransferTo: "",
    ActiveStatus: "checked",
    Description: "ES3CEnglish101-Urdu Porter, Samantha",
    FY: "2021",
    ISCMP: "0"
  },
  {
    ID: "6702317",
    Student_PKID: "1048303",
    ClassID: "PRAES3CEnglish101-Uighur",
    DescriptionKey: "236450",
    EnrollDate: "01/15/2021",
    InactiveDate: "",
    InactiveReason: "",
    Transfer_PKID: "",
    TransferTo: "",
    ActiveStatus: "checked",
    Description: "ES3CEnglish101-Uighur Porter, Samantha",
    FY: "2021",
    ISCMP: "0"
  },
  {
    ID: "6695971",
    Student_PKID: "1048303",
    ClassID: "PRABE1CTutoring_2021",
    DescriptionKey: "236531",
    EnrollDate: "07/01/2020",
    InactiveDate: "",
    InactiveReason: "T",
    Transfer_PKID: "202360",
    TransferTo: "BE6C1 Alisova, Muriana",
    ActiveStatus: "checked",
    Description: "BE1CTutoring_2021 Porter, Jane",
    FY: "2021",
    ISCMP: "0"
  },
  {
    ID: "6548067",
    Student_PKID: "1048303",
    ClassID: "PRABE4CASTS_21",
    DescriptionKey: "232270",
    EnrollDate: "07/01/2020",
    InactiveDate: "01/15/2021",
    InactiveReason: "T",
    Transfer_PKID: "236450",
    TransferTo: "ES3CEnglish101-Uighur Porter, Samantha",
    ActiveStatus: "",
    Description: "BE4CASTS_21 Porter, Samantha",
    FY: "2021",
    ISCMP: "0"
  },
  {
    ID: "6692989",
    Student_PKID: "1048303",
    ClassID: "PRABE6C1",
    DescriptionKey: "202360",
    EnrollDate: "07/01/2020",
    InactiveDate: "",
    InactiveReason: "",
    Transfer_PKID: "",
    TransferTo: "",
    ActiveStatus: "",
    Description: "BE6C1 Alisova, Muriana",
    FY: "2021",
    ISCMP: "0"
  },
  {
    ID: "6745071",
    Student_PKID: "1048303",
    ClassID: "PRACM1GCaseMgmt-Summer",
    DescriptionKey: "236328",
    EnrollDate: "07/01/2020",
    InactiveDate: "",
    InactiveReason: "",
    Transfer_PKID: "",
    TransferTo: "",
    ActiveStatus: "checked",
    Description: "Porter, Jane (CaseMgmt-Summer)",
    FY: "2021",
    ISCMP: "1"
  }
];
// ddl ???
const GetExitReasonSource = [
  { key: "C", value: "C Completion" },
  { key: "E", value: "E Exit" },
  { key: "I", value: "I Inactive" },
  { key: "T", value: "T Transfer" },
  { key: "W", value: "W Withdrawal" }
];

// ddlInstructionCode
const GetInstructionSource = [
  { key: "236531", value: "BE1CTutoring_2021 Porter, Jane" },
  { key: "232270", value: "BE4CASTS_21 Porter, Samantha" },
  { key: "202360", value: "BE6C1 Alisova, Muriana" },
  { key: "232271", value: "BE6CIntake_Summer2021 Porter, Samantha" },
  { key: "242700", value: "ES2TDL_S_MSmit Smith, Mary" },
  { key: "236450", value: "ES3CEnglish101-Uighur Porter, Samantha" },
  { key: "236431", value: "ES3CEnglish101-Urdu Porter, Samantha" },
  { key: "237004", value: "H6CTwoWeekTest Kenobi, General" }
];

// ddlCMInstructor
const GetInstructionSource_CM = [
  { key: "236328", value: "Porter, Jane (CaseMgmt-Summer)" },
  { key: "999999", value: "Einstein, Robert (CaseMgmt-Winter)" }
];

// ddlTransfer
const GetTransferTo = [
  { key: "236531", value: "BE1CTutoring_2021 Porter, Jane" },
  { key: "232270", value: "BE4CASTS_21 Porter, Samantha" },
  { key: "202360", value: "BE6C1 Alisova, Muriana" },
  { key: "232271", value: "BE6CIntake_Summer2021 Porter, Samantha" },
  { key: "236328", value: "CM1GCaseMgmt-Summer Porter, Jane" },
  { key: "242700", value: "ES2TDL_S_MSmit Smith, Mary" },
  { key: "236450", value: "ES3CEnglish101-Uighur Porter, Samantha" },
  { key: "236431", value: "ES3CEnglish101-Urdu Porter, Samantha" },
  { key: "237004", value: "H6CTwoWeekTest Kenobi, General" }
];

const GetHours = [
  {
    ID: "3729869",
    Student_PKID: "1048303",
    FY: null,
    Class_PKID: "232270",
    TotalHour: "8",
    JulHours: "8",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: "3871645",
    Student_PKID: "1048303",
    FY: null,
    Class_PKID: "202360",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: "3874546",
    Student_PKID: "1048303",
    FY: null,
    Class_PKID: "236531",
    TotalHour: "49",
    JulHours: "",
    AugHours: "18",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "16",
    JanHours: "15",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: "3877254",
    Student_PKID: "1048303",
    FY: null,
    Class_PKID: "236431",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: "3880428",
    Student_PKID: "1048303",
    FY: null,
    Class_PKID: "236450",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: "3922468",
    Student_PKID: "1048303",
    FY: null,
    Class_PKID: "236328",
    TotalHour: "64",
    JulHours: "10",
    AugHours: "",
    SepHours: "5",
    OctHours: "",
    NovHours: "",
    DecHours: "8",
    JanHours: "",
    FebHours: "",
    MarHours: "20",
    AprHours: "",
    MayHours: "",
    JunHours: "21"
  }
];

const GetHoursHistory = [
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2020",
    Class_PKID: "217937",
    TotalHour: "40",
    JulHours: "25",
    AugHours: "15",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2020",
    Class_PKID: "217938",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2020",
    Class_PKID: "215553",
    TotalHour: "30",
    JulHours: "20",
    AugHours: "",
    SepHours: "",
    OctHours: "10",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2020",
    Class_PKID: "216862",
    TotalHour: "40",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "40",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2020",
    Class_PKID: "216680",
    TotalHour: "42",
    JulHours: "9",
    AugHours: "15",
    SepHours: "18",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2020",
    Class_PKID: "217940",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "210603",
    TotalHour: "18",
    JulHours: "15",
    AugHours: "3",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "211155",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "203941",
    TotalHour: "20",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "8",
    JanHours: "12",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "205055",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "202359",
    TotalHour: "60",
    JulHours: "30",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "30",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "205058",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "204576",
    TotalHour: "2",
    JulHours: "2",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "203690",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2019",
    Class_PKID: "211793",
    TotalHour: "46",
    JulHours: "",
    AugHours: "6",
    SepHours: "",
    OctHours: "2",
    NovHours: "36",
    DecHours: "2",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "191738",
    TotalHour: "30",
    JulHours: "8",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "10",
    DecHours: "12",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "191739",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "191743",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "191748",
    TotalHour: "79.5",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "12",
    DecHours: "16",
    JanHours: "",
    FebHours: "",
    MarHours: "34",
    AprHours: "2.5",
    MayHours: "15",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "191749",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "191755",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "200754",
    TotalHour: "118",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "100",
    FebHours: "18",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2018",
    Class_PKID: "198488",
    TotalHour: "42",
    JulHours: "5",
    AugHours: "3",
    SepHours: "3",
    OctHours: "5",
    NovHours: "26",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2017",
    Class_PKID: "175238",
    TotalHour: "81",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "6",
    NovHours: "4",
    DecHours: "10",
    JanHours: "2",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "15",
    JunHours: "44"
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2017",
    Class_PKID: "187017",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2017",
    Class_PKID: "175789",
    TotalHour: "31",
    JulHours: "14",
    AugHours: "5",
    SepHours: "2",
    OctHours: "",
    NovHours: "8",
    DecHours: "2",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2016",
    Class_PKID: "174254",
    TotalHour: "16",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "16",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2016",
    Class_PKID: "172073",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2015",
    Class_PKID: "153254",
    TotalHour: "23",
    JulHours: "23",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2015",
    Class_PKID: "149404",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2013",
    Class_PKID: "123479",
    TotalHour: "35",
    JulHours: "14",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "1",
    DecHours: "20",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2013",
    Class_PKID: "127910",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2013",
    Class_PKID: "127908",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2013",
    Class_PKID: "133373",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2013",
    Class_PKID: "125085",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2013",
    Class_PKID: "127907",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2012",
    Class_PKID: "102523",
    TotalHour: "100",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: "100"
  },
  {
    ID: null,
    Student_PKID: "1048303",
    FY: "2012",
    Class_PKID: "112442",
    TotalHour: "0",
    JulHours: "",
    AugHours: "",
    SepHours: "",
    OctHours: "",
    NovHours: "",
    DecHours: "",
    JanHours: "",
    FebHours: "",
    MarHours: "",
    AprHours: "",
    MayHours: "",
    JunHours: ""
  }
];
const GetNote = [
  {
    Student_PKID: "1048303",
    NoteContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Risus nec feugiat in fermentum posuere urna. In hac habitasse platea dictumst vestibulum rhoncus est. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut ornare lectus sit amet est placerat in. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget."
  }
];
