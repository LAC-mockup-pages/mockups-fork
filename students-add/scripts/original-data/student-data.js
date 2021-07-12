const GetStudentHeader = [
  {
    ID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    StudentName: "AA1_Jacques, Gregory ",
    Pop_Order: "",
    POPHours: "",
    POP_Status: "",
    FY_Funding: "Not Enrolled",
    OtherCode: ""
  }
];

// ddlEmploymentStatus
const GetEmploymentStatus = [
  { key: "A", value: "Employed full-time" },
  { key: "B", value: "Employed part-time" },
  { key: "C", value: "Unemployed \u003e1 yr available" },
  { key: "D", value: "Unemployed \u003c1 yr available" },
  { key: "E", value: "Not available for employment" },
  { key: "F", value: "Retired" },
  { key: "G", value: "Inmate" },
  { key: "U", value: "Unknown" },
  { key: "H", value: "Empl - Received Term. Notice" },
  { key: "I", value: "Empl - Military Sep. Pending" }
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

// for ddlHighestGradeUS and ddlHighestGradeNYS
const GetHighestGradeCompletedUS = [
  { key: "NA", value: "NA " },
  { key: "1", value: "Grade 1 " },
  { key: "2", value: "Grade 2 " },
  { key: "3", value: "Grade 3 " },
  { key: "4", value: "Grade 4 " },
  { key: "5", value: "Grade 5 " },
  { key: "6", value: "Grade 6 " },
  { key: "7", value: "Grade 7 " },
  { key: "8", value: "Grade 8 " },
  { key: "9", value: "Grade 9 " },
  { key: "10", value: "Grade 10 " },
  { key: "11", value: "Grade 11 " },
  { key: "12", value: "Grade 12 HS Diploma" },
  { key: "12D", value: "Grade 12D IEP Diploma" },
  { key: "12E", value: "Grade 12E GED/TASC" },
  { key: "13", value: "Some College" },
  { key: "16", value: "Undergraduate degree" }
];

// ddlHighestCredential
const GetHighestCredential = [
  { key: "NA", value: "NA " },
  { key: "1", value: "Grade 1 " },
  { key: "2", value: "Grade 2 " },
  { key: "3", value: "Grade 3 " },
  { key: "4", value: "Grade 4 " },
  { key: "5", value: "Grade 5 " },
  { key: "6", value: "Grade 6 " },
  { key: "7", value: "Grade 7 " },
  { key: "8", value: "Grade 8 " },
  { key: "9", value: "Grade 9 " },
  { key: "10", value: "Grade 10 " },
  { key: "11", value: "Grade 11 " },
  { key: "12", value: "Grade 12 HS Diploma" },
  { key: "12D", value: "Grade 12D IEP Diploma" },
  { key: "12E", value: "Grade 12E GED/TASC" },
  { key: "13", value: "Some College" },
  { key: "16", value: "Undergraduate degree" }
];

// ddlYearsSchooling
const GetYearsSchooling = [
  { key: "NA", value: "NA " },
  { key: "1", value: "Grade 1 " },
  { key: "2", value: "Grade 2 " },
  { key: "3", value: "Grade 3 " },
  { key: "4", value: "Grade 4 " },
  { key: "5", value: "Grade 5 " },
  { key: "6", value: "Grade 6 " },
  { key: "7", value: "Grade 7 " },
  { key: "8", value: "Grade 8 " },
  { key: "9", value: "Grade 9 " },
  { key: "10", value: "Grade 10 " },
  { key: "11", value: "Grade 11 " },
  { key: "12", value: "Grade 12 HS Diploma" },
  { key: "12D", value: "Grade 12D IEP Diploma" },
  { key: "12E", value: "Grade 12E GED/TASC" },
  { key: "13", value: "Some College" },
  { key: "16", value: "Undergraduate degree" }
];

// ddlIncome_FY
const GetIncome = [
  { key: "1", value: "Less than $10,000" },
  { key: "2", value: "$10,000 to $14,99" },
  { key: "3", value: "$15,000 to $24,999" },
  { key: "4", value: "$15,000 to $24,999" },
  { key: "5", value: "$25,000 to $34,999" },
  { key: "6", value: "$35,000 to $49,999" },
  { key: "7", value: "$50,000 to $74,999" },
  { key: "8", value: "$75,000 to $99,999" },
  { key: "9", value: "$100,000 to $149,999" },
  { key: "10", value: "$150,000 to $199,999" },
  { key: "11", value: "$200,000 or more" }
];

// ddlNoSSNVisaStaff
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
