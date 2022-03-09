//* Main file for data objects

//Select IA Page
const GetInstructionType = [
  { key: "BE", value: "BE (NRS and/or EPE)" },
  { key: "CM", value: "Case Management" },
  { key: "ES", value: "ESOL (NRS and/or EPE)" }
];

const GetInstructor = [
  {
    ID: 24386,
    InstructorName: "Alisova, Muriana",
    PersonnelID: "AlisovaMurianaPRA9",
    Agency: "PRA"
  },
  {
    ID: 28083,
    InstructorName: "Porter, Jane",
    PersonnelID: "PorterJanePRA9",
    Agency: "PRA"
  },
  {
    ID: 2256,
    InstructorName: "Porter, Samantha",
    PersonnelID: "PorterSamanthaPRA9",
    Agency: "PRA"
  }
];

const GetIOActivity = [
  {
    ClassID: "PRABE4CASTS_21",
    InstructionDescription: "BE4CASTS_21  Porter, Samantha",
    ID: "232270"
  },
  {
    ClassID: "PRABE6C1",
    InstructionDescription: "BE6C1  Alisova, Muriana",
    ID: "202360"
  },
  {
    ClassID: "PRABE6CIntake_Summer2021",
    InstructionDescription: "BE6CIntake_Summer2021  Porter, Samantha",
    ID: "232271"
  }
];

//Enrollment Page

const GetEnrollInfo = [
  {
    ID: 6548067,
    Class_PKID: 232270,
    Student_PKID: 1048303,
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    ClassID: "PRABE4CASTS_21",
    StudentName: "AA1_Jacques, Gregory",
    EnrollDate: "07/01/2020",
    ActiveStatus: 1,
    InactiveDate: "",
    InactiveReason: "",
    TransferTo: "",
    TransferToDescription: "",
    InactiveReasonDesc: "",
    FY: 2021
  },
  {
    ID: 6611908,
    Class_PKID: 232270,
    Student_PKID: 622740,
    StudentID: "GriffinangelaPRA492007251984",
    ClassID: "PRABE4CASTS_21",
    StudentName: "Griffin, Angela",
    EnrollDate: "07/15/2020",
    ActiveStatus: 1,
    InactiveDate: "",
    InactiveReason: "",
    TransferTo: "",
    TransferToDescription: "",
    InactiveReasonDesc: "",
    FY: 2021
  },
  {
    ID: 6548068,
    Class_PKID: 232270,
    Student_PKID: 1577048,
    StudentID: "HallStevePRA1720121311993",
    ClassID: "PRABE4CASTS_21",
    StudentName: "Hall, Steve",
    EnrollDate: "07/01/2020",
    ActiveStatus: 1,
    InactiveDate: "",
    InactiveReason: "",
    TransferTo: "",
    TransferToDescription: "",
    InactiveReasonDesc: "",
    FY: 2021
  },
  {
    ID: 6610565,
    Class_PKID: 232270,
    Student_PKID: 2038544,
    StudentID: "StudentNewPRA15720201421973",
    ClassID: "PRABE4CASTS_21",
    StudentName: "Student, New",
    EnrollDate: "07/05/2020",
    ActiveStatus: 1,
    InactiveDate: "",
    InactiveReason: "",
    TransferTo: "",
    TransferToDescription: "",
    InactiveReasonDesc: "",
    FY: 2021
  }
];

const GetTransferTo = [
  {
    Class_PKID: 232270,
    ClassID: "PRABE4CASTS_21",
    InstructionDescription: "BE4CASTS_21  Porter, Samantha"
  },
  {
    Class_PKID: 202360,
    ClassID: "PRABE6C1",
    InstructionDescription: "BE6C1  Alisova, Muriana"
  },
  {
    Class_PKID: 232271,
    ClassID: "PRABE6CIntake_Summer2021",
    InstructionDescription: "BE6CIntake_Summer2021  Porter, Samantha"
  },
  {
    Class_PKID: 236328,
    ClassID: "PRACM1GCaseMgmt-Summer",
    InstructionDescription: "CM1GCaseMgmt-Summer    Porter, Jane"
  },
  {
    Class_PKID: 236450,
    ClassID: "PRAES3CEnglish101-Uighur",
    InstructionDescription: "ES3CEnglish101-Uighur    Porter, Samantha"
  },
  {
    Class_PKID: 236431,
    ClassID: "PRAES3CEnglish101-Urdu",
    InstructionDescription: "ES3CEnglish101-Urdu    Porter, Samantha"
  }
];

const GetStudentLookup = [
  {
    ID: 641247,
    StudentID: "0nestudentPRA171120081411983",
    StudentName: "0ne, student",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 658283,
    StudentID: "1trainerPRA492007251984",
    StudentName: "1, trainer",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1999975,
    StudentID: "12NovemberPRA1112200112122019",
    StudentName: "12, November",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 622733,
    StudentID: "12trainerPRA492007251984",
    StudentName: "12, trainer",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 450037,
    StudentID: "12TrainerPRA25420081451979",
    StudentName: "12, Trainer",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 622736,
    StudentID: "20TRAINERPRA492007251984",
    StudentName: "20, TRAINER",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 456974,
    StudentID: "8trainerPRA492007251984",
    StudentName: "8, trainer",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1879009,
    StudentID: "ADPRA27720181421980",
    StudentName: "A, D",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1048303,
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    StudentName: "AA1_Jacques, Gregory",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1152325,
    StudentID: "AcostaAnnaPRA172011111988",
    StudentName: "Acosta, Anna",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 413429,
    StudentID: "AdamsJohnPRA1720071251968",
    StudentName: "Adams, John (Jack)",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 604573,
    StudentID: "AdamsSamPRA15920052281980",
    StudentName: "adams, Sam",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1467365,
    StudentID: "AdanAreliPRA15920141131985",
    StudentName: "Adan, Areli",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1901758,
    StudentID: "AddamsMorticiaPRA2211199131101935",
    StudentName: "Addams, Morticia",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1830088,
    StudentID: "AdminMichellePRA11201812123115",
    StudentName: "Admin, Michelle",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 760489,
    StudentID: "AGUILERAELADIAPRA4820091581954",
    StudentName: "AGUILERA, ELADIA",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 631340,
    StudentID: "AlvarezNadiaPRA1120081171973",
    StudentName: "AlvarezTR30, Nadia",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 466658,
    StudentID: "AmStudentPRA772007111985",
    StudentName: "Am, Student",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 754850,
    StudentID: "AmadizLeticiaPRA38200916101973",
    StudentName: "Amadiz, Leticia",
    EnrollDate: "09/09/2020"
  },
  {
    ID: 1029075,
    StudentID: "April18KatePRA18420111841977",
    StudentName: "April18, Kate",
    EnrollDate: "09/09/2020"
  }
];

// Contact Hours Page

const GetContactHours_Annual = [
  {
    ID: 3729869,
    Class_PKID: 232270,
    Student_PKID: 1048303,
    StudentName: "AA1_Jacques, Gregory",
    BirthDate: "07/12/1987",
    JulHours: 8,
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
    ID: 3792193,
    Class_PKID: 232270,
    Student_PKID: 622740,
    StudentName: "Griffin, Angela",
    BirthDate: "05/02/1984",
    JulHours: 6,
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
    ID: 3729870,
    Class_PKID: 232270,
    Student_PKID: 1577048,
    StudentName: "Hall, Steve",
    BirthDate: "11/13/1993",
    JulHours: 9,
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
    ID: 3790866,
    Class_PKID: 232270,
    Student_PKID: 2038544,
    StudentName: "Student, New",
    BirthDate: "02/14/1973",
    JulHours: 10,
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
  }
];

// Instructional Hours Page

const GetReportingPeriods = [
  {
    PeriodID: "PRA20200701",
    periodDisplay: "July 2020",
    PeriodStart: "07/01/2020",
    PeriodEnd: "07/31/2020",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20200801",
    periodDisplay: "August 2020",
    PeriodStart: "08/01/2020",
    PeriodEnd: "08/31/2020",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20200901",
    periodDisplay: "September 2020",
    PeriodStart: "09/01/2020",
    PeriodEnd: "09/30/2020",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20201001",
    periodDisplay: "October 2020",
    PeriodStart: "10/01/2020",
    PeriodEnd: "10/31/2020",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20201101",
    periodDisplay: "November 2020",
    PeriodStart: "11/01/2020",
    PeriodEnd: "11/30/2020",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20201201",
    periodDisplay: "December 2020",
    PeriodStart: "12/01/2020",
    PeriodEnd: "12/31/2020",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20210101",
    periodDisplay: "January 2021",
    PeriodStart: "01/01/2021",
    PeriodEnd: "01/31/2021",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20210201",
    periodDisplay: "February 2021",
    PeriodStart: "02/01/2021",
    PeriodEnd: "02/28/2021",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20210301",
    periodDisplay: "March 2021",
    PeriodStart: "03/01/2021",
    PeriodEnd: "03/31/2021",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20210401",
    periodDisplay: "April 2021",
    PeriodStart: "04/01/2021",
    PeriodEnd: "04/30/2021",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20210501",
    periodDisplay: "May 2021",
    PeriodStart: "05/01/2021",
    PeriodEnd: "05/31/2021",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  },
  {
    PeriodID: "PRA20210601",
    periodDisplay: "June 2021",
    PeriodStart: "06/01/2021",
    PeriodEnd: "06/30/2021",
    FY: 2021,
    ClassStartDate: "07/01/2020",
    ClassEndDate: "06/30/2021",
    Sunday: 0,
    Monday: 1,
    Tuesday: 0,
    Wednesday: 1,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  }
];

const GetInstrHours = [
  {
    ID: 1697491,
    Class_PKID: 232270,
    ClassID: "PRABE4CASTS_21",
    PeriodID: "PRA20200701",
    Personnel_PKID: 28555,
    personnelID: "AlfieriShelleyPRA1",
    InstructorName: "Alfieri, Shelley",
    InstHours: 5,
    TestHours: 0,
    TestContHours: 0,
    labHours: 0,
    ExtraHoursLT12: 0
  },
  {
    ID: 1698612,
    Class_PKID: 232270,
    ClassID: "PRABE4CASTS_21",
    PeriodID: "PRA20200701",
    Personnel_PKID: 2256,
    personnelID: "PorterSamanthaPRA9",
    InstructorName: "Porter, Samantha",
    InstHours: 5,
    TestHours: 0,
    TestContHours: 0,
    labHours: 0,
    ExtraHoursLT12: 0
  }
];

// Details Page

const GetSpecialProgram = [
  {
    ID: "28439",
    SpecialProgramID: "D",
    ProgramDesc: "D | GRASP",
    Class_PKID: "232270",
    IET_Class_PKID: "",
    InstructionDesc: ""
  },
  {
    ID: "28446",
    SpecialProgramID: "IET",
    ProgramDesc: "IET | Integrated Education and Training",
    Class_PKID: "232270",
    IET_Class_PKID: "232271",
    InstructionDesc: "BE6CIntake_Summer2021  Porter, Samantha"
  },
  {
    ID: "28447",
    SpecialProgramID: "K",
    ProgramDesc: "K | Adult Occupation Education",
    Class_PKID: "232270",
    IET_Class_PKID: "",
    InstructionDesc: ""
  }
];

const GetSpecialProgramSource = [
  { key: "A", value: "A | Action for Personal Choice" },
  { key: "AA", value: "AA | ESL Home Study" },
  { key: "AB", value: "AB | On Common Ground" },
  { key: "AC", value: "AC | preGED Connections" },
  { key: "AD", value: "AD | Skills Tutor" },
  { key: "AE", value: "AE | Pass Key" },
  { key: "AF", value: "AF | Lifelines" },
  { key: "AG", value: "AG | TV411" },
  { key: "AH", value: "AH | preGRASP" },
  { key: "AI", value: "AI | SMART" },
  { key: "B", value: "B | Crossroads Café" },
  { key: "C", value: "C | Job Club/Employability Skills" },
  { key: "D", value: "D | GRASP" },
  { key: "E", value: "E | Migrant" },
  { key: "F", value: "F | Numeracy" },
  { key: "G", value: "G | EDP" },
  { key: "GA", value: "GA | EDP Assessment Phase" },
  { key: "H", value: "H | Workplace Literacy" },
  { key: "I", value: "I | GED Connection" },
  { key: "IET", value: "IET | Integrated Education and Training" },
  { key: "J", value: "J | High School Credit" },
  { key: "K", value: "K | Adult Occupation Education" },
  { key: "L", value: "L | Work Experience" },
  { key: "M", value: "M | Children/Teens" },
  { key: "N", value: "N | CFLS Home Study" },
  { key: "O", value: "O | CFLS Class Study" },
  { key: "P", value: "P | Parenting/Family Literacy" },
  { key: "Q", value: "Q | Learn to Read" },
  { key: "R", value: "R | Home Study/Health Promotions" },
  { key: "S", value: "S | Corrections" },
  { key: "T", value: "T | Citizenship Home Study" },
  { key: "U", value: "U | Connect with English" },
  { key: "V", value: "V | Other" },
  { key: "W", value: "W | Post-Secondary Transition" },
  { key: "X", value: "X | Math Basics" },
  { key: "Y", value: "Y | Another Page" },
  { key: "Z", value: "Z | Workplace Essential Skills" }
];

const GetClassInstructor = [
  {
    ID: "238367",
    PersonnelID: "PorterSamanthaPRA9",
    AssignDate: "07/01/2020",
    Name: "Porter, Samantha"
  },
  {
    ID: "242571",
    PersonnelID: "AlfieriShelleyPRA1",
    AssignDate: "07/01/2020",
    Name: "Alfieri, Shelley"
  }
];

const GetInstructorSource = [
  { key: "AaaaRrrPRA9", value: "Aaaa, Rrr" },
  { key: "AlfieriShelleyPRA1", value: "Alfieri, Shelley" },
  { key: "AlisovaMurianaPRA9", value: "Alisova, Muriana" },
  { key: "BarnesJuliaPRA14", value: "Barnes, Julia" },
  { key: "BartowksiCharlesPRA9", value: "Bartowksi, Charles" },
  { key: "BladeSenuaPRA9", value: "Blade, Senua" },
  { key: "BradyTomPRA9", value: "Brady, Tom" },
  { key: "CampbellDonPRA9", value: "Campbell, Don" },
  { key: "CharlotinWilsonPRA18", value: "Charlotin, Wilson" },
  { key: "CooperDalePRA18", value: "Cooper, Dale" },
  { key: "CooperGary PRA9", value: "Cooper, Gary " },
  { key: "DainMichillePRA19", value: "Dains, Michille" },
  { key: "Donovan Ray PRA9", value: "Donovan, Ray" },
  { key: "DryjaKelly PRA9", value: "Dryja, Kelly " },
  { key: "EEEJLNAAPRA18", value: "EEESS, JLNAA" },
  { key: "FrazierClydePRA9", value: "Frazier, Clyde" },
  { key: "FrownJanicePRA9", value: "Frown, Janice" },
  { key: "FullerMartinPRA9", value: "Fuller, Martin" },
  { key: "GeorgiaWashingtonPRA9", value: "GEORGIA, WASHINGTON" },
  { key: "HydeStevenPRA18", value: "Hyde, Steven" },
  { key: "JohnLauraPRA9", value: "John, Laura" },
  { key: "JohnsonNormaPRA2", value: "Johnson, Norma" },
  { key: "jonesfredPRA9", value: "jones, fred" },
  { key: "JonesYogaPRA9", value: "Jones, Yoga" },
  { key: "LaBonteKatiePRA27", value: "Katie, LaBonte" },
  { key: "KenobiGeneralPRA18", value: "Kenobi, General" },
  { key: "MacAlinneyMARYPRA9", value: "MacAlinney, MARY" },
  { key: "McConnell07GracePRA9", value: "McConnell07, Grace" },
  { key: "mehmetayferPRA9", value: "mehmet, ayfer" },
  { key: "MelfiJenniferPRA14", value: "Melfi, Jennifer" },
  { key: "PeetTammy PRA10", value: "Peet, Tammy " },
  { key: "PorterJanePRA9", value: "Porter, Jane" },
  { key: "PorterSamanthaPRA9", value: "Porter, Samantha" },
  { key: "ScottAdamPRA9", value: "Scott, Adam" },
  { key: "SilversRayleighPRA18", value: "Silvers, Rayleigh" },
  { key: "SinesKellyPRA18", value: "Sines, Kelly" },
  { key: "SmithJonPRA9", value: "Smith, Jon" },
  { key: "SmithMaryPRA9", value: "Smith, Mary" },
  { key: "SmithSharonPRA9", value: "Smith, Sharon" },
  { key: "TankenSerjPRA9", value: "Tanken, Serj" },
  { key: "TaylorTeresaPRA9", value: "Taylor, Teresa" },
  { key: "TesterVenu PRA5", value: "TesterCMP, Venu" },
  { key: "TestThelakkatVenuPRA9", value: "TestThelakkat, Venu" },
  { key: "VauseAlexPRA9", value: "Vause, Alex" },
  { key: "WoodhamsMellissaPRA14", value: "Woodhams, Mellissa" },
  { key: "YnoaMarcosPRA18", value: "Ynoa, Marcos" },
  { key: "ZoroRoronoaPRA9", value: "Zoro, Roronoa" }
];

const GetCourse = [
  {
    ID: "232270",
    FY: "2021",
    ClassID: "PRABE4CASTS_21",
    InstructionDescription: "BE4CASTS_21  Porter, Samantha",
    CourseID: "ASTS_21",
    StartDate: "07/01/2020",
    EndDate: "06/30/2021",
    ClassType: "BE",
    InstructorID: "PorterSamanthaPRA9",
    UpperLevel: "4",
    Format: "C",
    Sessions: "0",
    LowerLevel: "",
    AMPM: "",
    CAI: "False",
    ProgramID: "0",
    SiteName: "",
    SiteID: "",
    SessionLength: "0",
    Seats: "0",
    HoursWeek: "0",
    RoomNumber: "",
    Monday: "True",
    MonStartTime: "",
    MonEndTime: "",
    Tuesday: "False",
    TueStartTime: "",
    TueEndTime: "",
    Wednesday: "True",
    WedStartTime: "",
    WedEndTime: "",
    Thursday: "False",
    ThuStartTime: "",
    ThuEndTime: "",
    Friday: "False",
    FriStartTime: "",
    FriEndTime: "",
    Saturday: "False",
    SatStartTime: "",
    SatEndTime: "",
    Sunday: "False",
    SunStartTime: "",
    SunEndTime: "",
    Cycle: "",
    ProjTotStudents: "0",
    ProjTotContHrs: "0",
    ProjTotInstHrs: "0",
    ProjTotADA: "",
    ProjTotEIH: "",
    FSID: "Y"
  }
];

const GetFundingSource = [
  { FSID: "E", FundAbbrev: "E | EPE (2021)" },
  { FSID: "L", FundAbbrev: "L | ALE - Adult Literacy Edu (2021)" },
  { FSID: "Y", FundAbbrev: "Y | WIA/WIOA (2021)" }
];

const GetInstructionSource = [
  { ID: "232270", InstructionDescription: "BE4CASTS_21  Porter, Samantha" },
  { ID: "202360", InstructionDescription: "BE6C1  Alisova, Muriana" },
  {
    ID: "232271",
    InstructionDescription: "BE6CIntake_Summer2021  Porter, Samantha"
  },
  {
    ID: "236450",
    InstructionDescription: "ES3CEnglish101-Uighur    Porter, Samantha"
  },
  {
    ID: "236431",
    InstructionDescription: "ES3CEnglish101-Urdu    Porter, Samantha"
  }
];

const GetSite = [
  { ID: 2976, SiteName: "Practice Agency Main Office", SiteID: "MainOffice" },
  { ID: 5665, SiteName: "Syracuse Training Site", SiteID: "SYL" },
  { ID: 4439, SiteName: "Manhatten Learning Ctr27", SiteID: "MANH27" },
  { ID: 4441, SiteName: "Brooklyn25", SiteID: "BKLY" },
  { ID: 4444, SiteName: "Manhattan Learning Ctr21", SiteID: "MANH21" },
  { ID: 4446, SiteName: "Manhattan Learning Ctr30", SiteID: "MANH30" },
  { ID: 4447, SiteName: "Manhattan Learning Ctr31", SiteID: "MANH31" },
  { ID: 4448, SiteName: "Manhattan Learning Center28", SiteID: "MANH28" },
  { ID: 4449, SiteName: "Manhattan Learning32", SiteID: "Manh32" },
  { ID: 5679, SiteName: "BooBooVille", SiteID: "BooBooVille" },
  { ID: 5723, SiteName: "WeWorkFidi1 ", SiteID: "27102" },
  { ID: 5764, SiteName: "Long Island Raen", SiteID: "Li-RAEN" },
  { ID: 5785, SiteName: "Long Island LAC ", SiteID: "LILAC" },
  { ID: 5822, SiteName: "Testing Center ", SiteID: "Test_11.4RS" },
  { ID: 5459, SiteName: "SUNY Farmingdale", SiteID: "SUNYF" },
  { ID: 5475, SiteName: "Courtyard Mariott Buffalo", SiteID: "Mariott" },
  { ID: 5461, SiteName: "Literacy Assistance Center", SiteID: "LAC" },
  { ID: 5671, SiteName: "LACFiDi 27", SiteID: "85Broad" },
  { ID: 5316, SiteName: "Orange Ulster BOCES", SiteID: "OULB" },
  { ID: 5317, SiteName: "WSWH BOCES", SiteID: "WSWH" }
];

const GetProgramCode = [
  {
    10000: 10101,
    "10000 AGRICULTURE, GENERAL":
      "10101 AGRICULTURAL BUSINESS & MANAGEMENT, GENERAL"
  },
  {
    10000: 10102,
    "10000 AGRICULTURE, GENERAL":
      "10102 AGRICULTURAL BUSINESS/AGRIBUSINESS OPERATIONS"
  },
  {
    10000: 10104,
    "10000 AGRICULTURE, GENERAL": "10104 FARM & RANCH MANAGEMENT"
  },
  {
    10000: 10105,
    "10000 AGRICULTURE, GENERAL":
      "10105 AGRICULTURAL/FARM SUPP RETAILING & WHOLESALING"
  },
  {
    10000: 10106,
    "10000 AGRICULTURE, GENERAL": "10106 AGRICULTURE BUSINESS TECHNOLOGY"
  },
  {
    10000: 10199,
    "10000 AGRICULTURE, GENERAL":
      "10199 AGRICULTURAL BUSINESS & MANAGEMENT, OTHER"
  },
  {
    10000: 10201,
    "10000 AGRICULTURE, GENERAL": "10201 AGRICULTURAL MECHANIZATION, GENERAL"
  },
  {
    10000: 10204,
    "10000 AGRICULTURE, GENERAL": "10204 AGRICULTURAL POWER MACHINERY OPERATOR"
  },
  {
    10000: 10205,
    "10000 AGRICULTURE, GENERAL":
      "10205 AGRICULTURE MECHANICS & EQUIPMENT/MACHINE TECH"
  },
  {
    10000: 10299,
    "10000 AGRICULTURE, GENERAL": "10299 AGRICULTURAL MECHANIZATION, OTHER"
  },
  {
    10000: 10301,
    "10000 AGRICULTURE, GENERAL":
      "10301 AGRICULTURAL PRODUCTION OPERATIONS, GENERAL"
  },
  {
    10000: 10302,
    "10000 AGRICULTURE, GENERAL":
      "10302 ANIMAL/LIVESTOCK HUSBANDRY & PRODUCTION"
  },
  { 10000: 10304, "10000 AGRICULTURE, GENERAL": "10304 CROP PRODUCTION" },
  {
    10000: 10306,
    "10000 AGRICULTURE, GENERAL": "10306 DAIRY HUSBANDRY & PRODUCTION"
  },
  {
    10000: 10307,
    "10000 AGRICULTURE, GENERAL":
      "10307 HORSE HUSBANDRY/EQUINE SCIENCE & MANAGEMENT"
  },
  {
    10000: 10399,
    "10000 AGRICULTURE, GENERAL":
      "10399 AGRICULTURAL PRODUCTION OPERATIONS, OTHER"
  },
  {
    10000: 10401,
    "10000 AGRICULTURE, GENERAL":
      "10401 AGRICULTURAL & FOOD PRODUCTS PROCESSING"
  },
  {
    10000: 10504,
    "10000 AGRICULTURE, GENERAL": "10504 DOG/PET/ANIMAL GROOMING"
  },
  { 10000: 10505, "10000 AGRICULTURE, GENERAL": "10505 ANIMAL TRAINER" }
];

const ddlFormat = [
  { key: "A", value: "CAI Group" },
  { key: "B", value: "Computer Assisted" },
  { key: "C", value: "Class" },
  { key: "G", value: "Small Group" },
  { key: "I", value: "Distance Learning" },
  { key: "L", value: "Lab" },
  { key: "O", value: "Other" },
  { key: "P", value: "Peer Tutoring" },
  { key: "T", value: "Tutorial (1 on 1)" }
];
