const getPersonnelList = [
  { First: "Porter, Jane - PorterJanePRA9", Second: "28083" },
  { First: "Porter, Samantha - PorterSamanthaPRA9", Second: "2256" },
  { First: "Adam, Jane - AdamJanePRA9", Second: "2815" },
  { First: "Marx, Wolfgang - MarxWolfgangPRA10", Second: "5478" },
  { First: "Martin, Peter - MartinRobertPRA10", Second: "1234" },
  { First: "Marvel, Mary - MarvelMaryPRA10", Second: "4567" },
  { First: "Salty, William - SaltyWilliamPRA10", Second: "8765" }
];

// const getNonInstHours = [];
const getNonInstHours = [
  {
    ID: "32902",
    PersonnelID: "PorterSamanthaPRA9",
    PeriodID: "PRA20190701",
    Period: "07/01/2019 - 07/31/2019",
    PrepHours: "5",
    TravelHours: "5",
    TrainingHours: "5",
    MeetingHours: "5",
    ExtraHours: "5",
    TotalHours: "25"
  },
  {
    ID: "32903",
    PersonnelID: "PorterSamanthaPRA9",
    PeriodID: "PRA20190801",
    Period: "08/01/2019 - 08/31/2019",
    PrepHours: "4",
    TravelHours: "2",
    TrainingHours: "0",
    MeetingHours: "8",
    ExtraHours: "4",
    TotalHours: "18"
  },
  {
    ID: "32904",
    PersonnelID: "PorterSamanthaPRA9",
    PeriodID: "PRA20191001",
    Period: "10/01/2019 - 10/31/2019",
    PrepHours: "4",
    TravelHours: "9",
    TrainingHours: "9",
    MeetingHours: "9",
    ExtraHours: "9",
    TotalHours: "40"
  },
  {
    ID: "32905",
    PersonnelID: "PorterSamanthaPRA9",
    PeriodID: "PRA20190901",
    Period: "09/01/2019 - 09/30/2019",
    PrepHours: "7",
    TravelHours: "7",
    TrainingHours: "7",
    MeetingHours: "7",
    ExtraHours: "7",
    TotalHours: "35"
  }
];

const getPersInstHours = [
  {
    ID: "2256",
    PersonnelID: "PorterSamanthaPRA9",
    ClassID: "PRABE6CFY2020_W213.0",
    InstHours: "1",
    TestHours: "0",
    TestContHours: "0",
    LabHours: "0",
    ExtraHoursLT12: "1"
  },
  {
    ID: "2257",
    PersonnelID: "PorterSamanthaPRA9",
    ClassID: "PRAClassALE",
    InstHours: "1",
    TestHours: "0",
    TestContHours: "2",
    LabHours: "0",
    ExtraHoursLT12: "1"
  }
];

const getReportingPeriods = [
  { PeriodID: "PRA20190701", Period: "07/01/2019 - 07/31/2019" },
  { PeriodID: "PRA20190801", Period: "08/01/2019 - 08/31/2019" },
  { PeriodID: "PRA20190901", Period: "09/01/2019 - 09/30/2019" },
  { PeriodID: "PRA20191001", Period: "10/01/2019 - 10/31/2019" }
];

const getPersonnel = [
  {
    ID: "2256",
    PersFirst: "Samantha",
    PersLast: "Porter",
    PersPositionID: "9",
    PersSubject: "ES",
    PersStartDate: "07/01/2007",
    lengthstay: "13",
    PersPayStatus: "P",
    PersTimeStatus: "P",
    PersExpStatus: "E",
    PersExpYears: "3",
    PersWorkHours: "30",
    PersSiteID: "BKLY10",
    PersGender: "F",
    PersEthnicity: "C1",
    PersBirthDate: "07/18/1975",
    PersEducation: "E",
    PersReferral: "S",
    PersSocSec: "",
    PersEmploymentStatus: "A",
    PersOccupation: "2",
    PersJobPhone: "",
    PersJobPhoneExt: "",
    PersContactWork: "True",
    PersTelephone: null,
    PersContactHome: null,
    PersTelephone2: null,
    PersTelephone2Ext: null,
    PersInstructions: null,
    PersEmail: "sporter@mail.com",
    PersonnelID: "PorterSamanthaPRA9",
    PersStatusDesc: "",
    PersName: "Porter, Samantha",
    PersHomeAddress: "",
    PersHomeState: "",
    PersHomeCity: "",
    PersHomeZip: "",
    PersHomePhone: "(914)-558-7896",
    PersMobilePhone: "(917)-584-2033",
    PersWorkAddress: "85 Broad street",
    PersWorkCity: "New York",
    PersWorkState: "NY",
    PersWorkZip: "10004",
    PersWorkSendMail: "True",
    PersWorkPhone: "(212)-803-3300",
    PersWorkExt: "",
    PersWorkCanCall: "False",
    PersAltEmail: "altemail@something.org",
    PersOtherAddress: "",
    PersOtherCity: "",
    PersOtherState: "",
    PersOtherZip: "",
    PersComments:
      "Tested save 12.5 RS 06/08/2019\ntesting save RS 02/05/2017\ntested 04/01/2017- RS\ntested 8/5/2017 RS\nTested 08/17/2018"
  }
];

// PersHomeAddress: "123 Main Street",
// PersHomeState: "NY",
// PersHomeCity: "Mount Vernon",
// PersHomeZip: "10552",
//
// PersHomeAddress: "",
// PersHomeState: "",
// PersHomeCity: "",
// PersHomeZip: "",

// const getPersProgressContacts = [];
const getPersProgressContacts = [
  {
    ID: "8859",
    PersonnelID: "PorterSamanthaPRA9",
    ContactDate: "01/23/2015",
    ContactType: "6",
    ContactDesc: "In Person                ",
    ContactNotes: "Teacher is certified in CPR"
  },
  {
    ID: "8908",
    PersonnelID: "PorterSamanthaPRA9",
    ContactDate: "05/10/2015",
    ContactType: "2",
    ContactDesc: "Message                  ",
    ContactNotes: "GJ test2"
  },
  {
    ID: "9484",
    PersonnelID: "PorterSamanthaPRA9",
    ContactDate: "08/31/2018",
    ContactType: "6",
    ContactDesc: "In Person                ",
    ContactNotes:
      "Samantha porter is going on vacation for two weeks starting 09/20/2018"
  },
  {
    ID: "9492",
    PersonnelID: "PorterSamanthaPRA9",
    ContactDate: "10/25/2019",
    ContactType: "6",
    ContactDesc: "In Person                ",
    ContactNotes: "Samantha is going on vacation in January and needs a sub."
  },
  {
    ID: "9483",
    PersonnelID: "PorterSamanthaPRA9",
    ContactDate: "08/17/2018",
    ContactType: "1",
    ContactDesc: "Telephone                ",
    ContactNotes: "test 12.0"
  },
  {
    ID: "9485",
    PersonnelID: "PorterSamanthaPRA9",
    ContactDate: "09/25/2018",
    ContactType: "6",
    ContactDesc: "In Person                ",
    ContactNotes: "helped Raj with training"
  },
  {
    ID: "9488",
    PersonnelID: "PorterSamanthaPRA9",
    ContactDate: "12/21/2018",
    ContactType: "1",
    ContactDesc: "Telephone                ",
    ContactNotes: "Samantha said she was sick toxay and she needs a sub"
  }
];

const getPersContactsCodes = [
  { ContactTypeID: 1, ContactType: "Telephone" },
  { ContactTypeID: 2, ContactType: "Message" },
  { ContactTypeID: 3, ContactType: "Mail" },
  { ContactTypeID: 4, ContactType: "Case Manager" },
  { ContactTypeID: 5, ContactType: "Counselor" },
  { ContactTypeID: 6, ContactType: "In Person" }
];
// const GetPersStatusHistory = [];
const GetPersStatusHistory = [
  {
    ID: "121368",
    PersonnelID: "PorterSamanthaPRA9",
    PersStatusDate: "12/19/2019",
    PersonnelStatID: "C",
    PersonnelStatDesc: "Active"
  },
  {
    ID: "121367",
    PersonnelID: "PorterSamanthaPRA9",
    PersStatusDate: "12/18/2019",
    PersonnelStatID: "L",
    PersonnelStatDesc: "Adult Education Certification"
  },
  {
    ID: "118131",
    PersonnelID: "PorterSamanthaPRA9",
    PersStatusDate: "02/02/2019",
    PersonnelStatID: "C",
    PersonnelStatDesc: "Active"
  },
  {
    ID: "118130",
    PersonnelID: "PorterSamanthaPRA9",
    PersStatusDate: "02/01/2019",
    PersonnelStatID: "L",
    PersonnelStatDesc: "Adult Education Certification"
  },
  {
    ID: "11900",
    PersonnelID: "PorterSamanthaPRA9",
    PersStatusDate: "07/01/2007",
    PersonnelStatID: "B",
    PersonnelStatDesc: "Certified and Waiting for First Match"
  }
];

const GetPersStatusCodes = [
  { PersonnelStatID: "C", PersonnelStatDesc: "Active" },
  { PersonnelStatID: "L", PersonnelStatDesc: "Adult Education Certification" },
  { PersonnelStatID: "F", PersonnelStatDesc: "Assigned to Class" },
  {
    PersonnelStatID: "B",
    PersonnelStatDesc: "Certified and Waiting for First Match"
  },
  { PersonnelStatID: "P", PersonnelStatDesc: "K-12 Certification" },
  { PersonnelStatID: "N", PersonnelStatDesc: "No Certification" },
  { PersonnelStatID: "J", PersonnelStatDesc: "NYS Certified" }
];

const GetPosition = [
  { PrsnlID: 18, Position: "Admin Support & Tutor" },
  { PrsnlID: 1, Position: "Administrative" },
  { PrsnlID: 2, Position: "Case Managers" },
  { PrsnlID: 9, Position: "Teachers" },
  { PrsnlID: 10, Position: "Teachers/Counselors" },
  { PrsnlID: 14, Position: "Tutor" }
];

const GetSubject = [
  { ClassTypeID: "BE", TypeDesc: "BE   BE (NRS and/or EPE)" },
  { ClassTypeID: "CM", TypeDesc: "CM   Case Management" },
  { ClassTypeID: "ES", TypeDesc: "ES   ESOL (NRS and/or EPE)" },
  { ClassTypeID: "GE", TypeDesc: "GE   GED (NRS and/or EPE)" },
  { ClassTypeID: "MA", TypeDesc: "MA   MATH (NRS and/or EPE)" },
  { ClassTypeID: "NI", TypeDesc: "NI   Non-Instructional" },
  { ClassTypeID: "Y", TypeDesc: "Y   Y" }
];

const GetEthnicity = [
  { EthnicityID: "A1", Ethnicity: "Native American" },
  { EthnicityID: "A2", Ethnicity: "Alaskan Native" },
  { EthnicityID: "B1", Ethnicity: "Asian" },
  { EthnicityID: "B2", Ethnicity: "Pacific Islander" },
  { EthnicityID: "C1", Ethnicity: "African American" },
  { EthnicityID: "C2", Ethnicity: "Afro-Caribbean" },
  { EthnicityID: "C3", Ethnicity: "African" },
  { EthnicityID: "D", Ethnicity: "Latino/a" },
  { EthnicityID: "E1", Ethnicity: "White" }
];

const GetOccupation = [
  { PrsnlID: 1, Position: "Clerical" },
  { PrsnlID: 3, Position: "Managerial" },
  { PrsnlID: 2, Position: "Professional" },
  { PrsnlID: 4, Position: "Technical" },
  { PrsnlID: 8, Position: "Temporary" }
];

const GetReferralSource = [
  { RefSourceID: "A", RefSource: "Another student" },
  { RefSourceID: "Y", RefSource: "Church" },
  { RefSourceID: "F", RefSource: "Education program" },
  { RefSourceID: "S", RefSource: "Employer" },
  { RefSourceID: "L", RefSource: "Library" },
  { RefSourceID: "R", RefSource: "Workers Union" }
];

const GetProfDevRoster = [
  {
    ID: "37193",
    ActivityName: "ASISTS Trainings",
    Provider: "provider1",
    Category: "Data/ASISTS",
    Date: "12/07/2016",
    Attended: "True",
    Hours: "3.5"
  },
  {
    ID: "36288",
    ActivityName: "LAC FiDi Workshop",
    Provider: "DYCD",
    Category: "Program Management",
    Date: "02/01/2017",
    Attended: "True",
    Hours: "3"
  },
  {
    ID: "38136",
    ActivityName: "LAC-Release 10.2 Test 6",
    Provider: "LAC-FIDI",
    Category: "NYSED/CUNY Common Core",
    Date: "04/01/2017",
    Attended: "True",
    Hours: "3.5"
  }
];

const ddlPaidVolunteer = [
  { objKey: "P", objValue: "Paid" },
  { objKey: "V", objValue: "Volunteer" }
];

const ddlTimeStatus = [
  { objKey: "F", objValue: "Full-time" },
  { objKey: "P", objValue: "Part-time" }
];

const ddlExperienceYears = [
  { objKey: "1", objValue: "Less than one year" },
  { objKey: "2", objValue: "One to three years" },
  { objKey: "3", objValue: "More than three years" }
];

const ddlGender = [
  { objKey: "M", objValue: "Male" },
  { objKey: "F", objValue: "Female" },
  { objKey: "N", objValue: "Non-binary" }
];

const ddlEducationLevel = [
  { objKey: "A", objValue: "Less than 12th grade" },
  { objKey: "B", objValue: "HS Diploma" },
  { objKey: "C", objValue: "Some college" },
  { objKey: "D", objValue: "Undergraduate degree" },
  { objKey: "E", objValue: "Graduate degree" },
  { objKey: "F", objValue: "Not Available" },
  { objKey: "G", objValue: "Associate degree" },
  { objKey: "H", objValue: "IEP Diploma" }
];

const ddlEmploymentStatus = [
  { objKey: "A", objValue: "Employed full-time" },
  { objKey: "B", objValue: "Employed part-time" },
  { objKey: "C", objValue: "Unemployed >1 yr available" },
  { objKey: "D", objValue: "Unemployed <1 yr available" },
  { objKey: "E", objValue: "Not available for employment" },
  { objKey: "F", objValue: "Retired" },
  { objKey: "G", objValue: "Inmate" },
  { objKey: "U", objValue: "Unknown" },
  { objKey: "H", objValue: "IEP Empl - Received Term. Notice" },
  { objKey: "I", objValue: "Empl - Military Sep. Pending" }
];
