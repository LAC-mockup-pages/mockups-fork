//* Data objects for Student Landing Page
//* =================================

//! This is a placeholder for the proper data object
//! =================================

const GetStudentID = [
  {
    ID: "0001",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    First: "Gregory",
    Middle: "",
    Last: "AA1_Jacques",
    BirthDate: "07/12/1987"
  },
  {
    ID: "0002",
    StudentID: "MartinJohn22620101271987",
    First: "John",
    Middle: "B",
    Last: "Martin",
    BirthDate: "08/12/1988"
  },
  {
    ID: "0003",
    StudentID: "MartensAlan22620101271987",
    First: "Alan",
    Middle: "B",
    Last: "Martens",
    BirthDate: "07/01/1989"
  }
];

// ddlFund - For current FY
const GetFundingSource = [
  { key: "06-07", value: "06-07 | 06-07 registration fee (2021)" },
  { key: "ASP", value: "ASP | AHSEPP (2021)" },
  { key: "DYADL", value: "DYADL | Adolescent Literacy DYCD (2021)" },
  { key: "E", value: "E | EPE (2021)" },
  { key: "L", value: "L | ALE - Adult Literacy Edu (2021)" },
  { key: "W", value: "W | WEP (2022)" },
  { key: "Y", value: "Y | WIA/WIOA (2021)" }
];

// ddlGender
const GetGender = [
  { key: "F", value: "Female" },
  { key: "M", value: "Male" },
  { key: "N", value: "Non-Binary/Gender Non-Conforming" }
];

// ddl ???
const GetStudent = [
  {
    ID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    First: "Gregory",
    Middle: "",
    Last: "AA1_Jacques",
    BirthDate: "07/12/1987",
    BeginDate: "06/22/2010",
    LengthOfStay: "11",
    Address: "455 5th Ave",
    City: "New York",
    State: "NY",
    Zip: "11234",
    Phone: "(212) 803-3000",
    Phone2: "(212) 803-4000",
    ContactHome: "False",
    StudEmail: "staff@asists.com",
    EmergencyPhone: "",
    EmergencyName: "",
    SSN: "***-**-****",
    VisaNum: "___-__-____",
    NoSSNVisa: "1",
    NoSSNVisaStaff: "",
    Sex: "M",
    EthnicityID: "N",
    RaceID: "B3,A1",
    Grade: "12",
    NYSGrade: "",
    LastSchoolNYS: "",
    HighestCredential: "",
    CredentialUS: "0",
    CredentialOther: "0",
    YearsUSSchools: "12E",
    DOLCertify: "0",
    DOLEnroll: "0",
    ProgramID: "0",
    OtherTraining: "0",
    UUID: "",
    Parent: "0",
    SingleParent: "0",
    CustodialParent: "1",
    PreChild: "1",
    ElemChild: "2",
    JHSChild: "3",
    HSChild: "4",
    PreChildSchool: "",
    ElemChildSchool: "",
    JHSChildSchool: "",
    HSChildSchool: "",
    Homeless: "0",
    HSGrad: "2",
    Displaced: "2",
    Disabled: "2",
    LowIncome: "2",
    Migrant: "2",
    LearningDisabled: "2",
    Runaway: "2",
    NonNativeEnglish: "2",
    ExOffender: "1",
    FosterCare: "2",
    LearningBarriers: "2",
    WalkInTest: "2",
    LongUnEmployed_LB: "2",
    EXhaustTANF_LB: "2",
    SingleParent_LB: "2",
    ClassesID: null,
    TASC: null,
    signature: null
  }
];

// ddl ???
const GetFundingInfo = [
  {
    ID: "2212200",
    FSID: "E",
    FundAbbrev: "E | EPE",
    FY: "2017",
    Student_PKID: "1048303"
  }
];

const ddlRace = [
  { objKey: "B3", objValue: "Native Hawaiian" },
  { objKey: "B2", objValue: "Pacific Islander" },
  { objKey: "C3", objValue: "African" },
  { objKey: "A1", objValue: "Native American" },
  { objKey: "C1", objValue: "African American" },
  { objKey: "D", objValue: "Latino/a" },
  { objKey: "A2", objValue: "Alaskan Native" },
  { objKey: "C2", objValue: "Afro-Caribbean" },
  { objKey: "E1", objValue: "White" },
  { objKey: "B1", objValue: "Asian" }
];

const ddlBarriers = [
  { key: "Homeless", value: "Homeless" },
  { key: "HSGrad", value: "HS graduate or equivalent (US)" },
  { key: "Displaced", value: "Displaced homemaker" },
  { key: "Disabled", value: "Disabled" },
  { key: "LowIncome", value: "Low income" },
  { key: "Migrant", value: "Migrant / Seasonnal worker" },
  { key: "LearningDisabled", value: "Learning disabled" },
  { key: "Runaway", value: "Runaway youth" },
  { key: "WalkInTest", value: "Walk-in from TASC test" },
  { key: "NonNativeEnglish", value: "Non native English speaker" },
  { key: "ExOffender", value: "Ex-offender" },
  { key: "FosterCare", value: "Youth in foster care / Aged out of system" },
  { key: "LearningBarriers", value: "Cultural barriers to learning" },
  { key: "LongUnEmployed_LB", value: "Long-term unemployed" },
  { key: "EXhaustTANF_LB", value: "Exhausting TANF within 2 years" },
  { key: "SingleParent_LB", value: "Single Parent" }
];

const GetStudentProfile = [
  {
    AgencyID: "PRA",
    Student_PKID: "1048303",
    First: "Gregory",
    Last: "AA1_Jacques",
    Middle: "",
    BirthDate: "07/12/1988",
    BeginDate: "06/22/2010",
    Address: "455 5th Ave",
    City: "New York",
    State: "NY",
    Zip: "11234",
    HomePhone: "(212) 803-3000",
    CellPhone: "(212) 803-4000",
    StudEmail: "staff@asists.com",
    EmergencyPhone: "",
    EmergencyName: "",
    Sex: "M",
    SexDesc: "Male",
    EthnicityID: "N",
    EthnicityDesc: "Non-Hispanic/Latino",
    RaceID: "B3,A1",
    RaceDesc: "Native Hawaiian,Native American",
    PopulationDesc: "Ex-offender,No boots"
    // PopulationDesc: ""
  }
];

const GetSomethingProfile = [
  {
    AgencyID: "PRA",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Name: "",
    Pop_Order: "1",
    POPStarted: "",
    POPEnded: "2019-10-31 ",
    POPHours: "152",
    POPPreTest: "07/01/2019 BESTP2 D ",
    POPPostTest: ""
  }
];

const GetAssessmentProfile = [
  {
    AgencyID: "PRA",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Pop_Order: "1",
    Test_Order: "1",
    TestName: "TABE Math",
    TestDesc: "Pre1",
    Type: "TR",
    Form: "12",
    Level: "M",
    ScaleScore: "505",
    NRSLevel: "3",
    NYRSLevel: "3.0"
  },
  {
    AgencyID: "PRA",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Pop_Order: "1",
    Test_Order: "2",
    TestName: "TABE Math",
    TestDesc: "Post1",
    Type: "TR",
    Form: "11",
    Level: "M",
    ScaleScore: "575",
    NRSLevel: "4",
    NYRSLevel: "4.5"
  },
  {
    AgencyID: "PRA",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Pop_Order: "2",
    Test_Order: "1",
    TestName: "TABE Math",
    TestDesc: "Pre2",
    Type: "TR",
    Form: "11",
    Level: "M",
    ScaleScore: "575",
    NRSLevel: "4",
    NYRSLevel: "4.5"
  }
];

const GetEnrollmentProfile = [
  {
    AgencyID: "PRA",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    ClassID: "MA5CGJa_2022",
    ExitDate: "",
    Hours: "10",
    ActiveStudent: "1",
    NotActiveStudent: "0",
    InactiveDate: "",
    InactiveReason: ""
  },
  {
    AgencyID: "PRA",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    ClassID: "MA5CGJa_2022",
    ExitDate: "",
    Hours: "12",
    ActiveStudent: "1",
    NotActiveStudent: "0",
    InactiveDate: "",
    InactiveReason: ""
  },
  {
    AgencyID: "PRA",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    ClassID: "MA5CGJa_2022",
    ExitDate: "",
    Hours: "4",
    ActiveStudent: "0",
    NotActiveStudent: "0",
    InactiveDate: "",
    InactiveReason: ""
  }
];

const GetEmploymentProfile = [
  {
    ID: "3989875",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2022",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "07/15/2000",
    EmployerID: "LAC",
    EmployerName: "LAC",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "5",
    IncomeFYDesc: "$25,000 to $34,999"
  },
  {
    ID: "3989874",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2021",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "",
    EmployerID: "",
    EmployerName: "",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  },
  {
    ID: "3989873",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2020",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "",
    EmployerID: "",
    EmployerName: "",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  },
  {
    ID: "3693213",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2019",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "",
    EmployerID: "",
    EmployerName: "",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  },
  {
    ID: "3267957",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2017",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "01/05/2017",
    EmployerID: "lac",
    EmployerName: "lac",
    LastEmployDate: "01/01/2017",
    ReleaseDate: "07/06/2017",
    IncomeFY: "9",
    IncomeFYDesc: "$100,000 to $149,999"
  },
  {
    ID: "3503725",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2016",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "08/04/2015",
    EmployerID: "LAC",
    EmployerName: "LAC",
    LastEmployDate: "02/15/2016",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  },
  {
    ID: "2459053",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2013",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "01/21/2017",
    EmployerID: "Test",
    EmployerName: "Test",
    LastEmployDate: "01/01/2013",
    ReleaseDate: "",
    IncomeFY: "6",
    IncomeFYDesc: "$35,000 to $49,999"
  },
  {
    ID: "2372518",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2012",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "",
    EmployerID: "",
    EmployerName: "",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  },
  {
    ID: "2631980",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2011",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "",
    EmployerID: "",
    EmployerName: "",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  },
  {
    ID: "2631981",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2007",
    EmploymentStatus: "A",
    EmploymentStatusDesc: "Employed full-time",
    EmployDate: "",
    EmployerID: "",
    EmployerName: "",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  },
  {
    ID: "2631982",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    EmployStatusFY: "2004",
    EmploymentStatus: "D",
    EmploymentStatusDesc: "Unemployed <1 yr available",
    EmployDate: "",
    EmployerID: "",
    EmployerName: "",
    LastEmployDate: "",
    ReleaseDate: "",
    IncomeFY: "",
    IncomeFYDesc: ""
  }
];

const GetOutcomeProfile = [
  {
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    LastActiveMonth: "August 2021",
    Q2_Outcome: "Q3 FY2021",
    Q4_Outcome: "null",
    HSE_Outcome: "Q1 FY2022",
    FY_Funding: "EPE,WIOA-Title II"
  }
];
