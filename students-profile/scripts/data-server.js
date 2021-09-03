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
