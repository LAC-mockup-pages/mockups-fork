//* Data objects for Management Reports Page
//*=================================

// For Class Funding Element
const GetFundingSource = [
  {
    FSID: "E",
    FY: "2022",
    FundAbbrev_FY: "E | EPE (2022)",
    FundAbbrev: "E | EPE"
  },
  {
    FSID: "L",
    FY: "2022",
    FundAbbrev_FY: "L | ALE - Adult Literacy Edu (2022)",
    FundAbbrev: "L | ALE - Adult Literacy Edu"
  },
  {
    FSID: "W",
    FY: "2022",
    FundAbbrev_FY: "W | WEP (2022)",
    FundAbbrev: "W | WEP"
  },
  {
    FSID: "Y",
    FY: "2022",
    FundAbbrev_FY: "Y | WIA/WIOA (2022)",
    FundAbbrev: "Y | WIA/WIOA"
  }
];

//For Prepare Report by Element
const GetPrepareBy = [
  { key: "0", value: "All " },
  { key: "1", value: "Instructional Offering" },
  { key: "2", value: "Instructional Funding Source" },
  { key: "3", value: "Instructional Site" },
  { key: "4", value: "Referral Partner" },
  { key: "5", value: "Teacher/Tutor" }
];

//For Report Criteria Elements

const GetInstructionType = [
  { key: "BE", value: "BE (NRS and/or EPE)" },
  { key: "BN", value: "BENL" },
  { key: "CL", value: "Computer Lab (EPE)" },
  { key: "CLS", value: "Career \u0026 Life Skills (EPE)" },
  { key: "CTS", value: "Citizenship (EPE)" },
  { key: "EB", value: "ESOL-B (NRS)" },
  { key: "ES", value: "ESOL (NRS and/or EPE)" },
  { key: "GE", value: "GED (NRS and/or EPE)" },
  { key: "H", value: "HSE (NRS and/or EPE)" },
  { key: "MA", value: "MATH (NRS and/or EPE)" },
  { key: "NI", value: "Non-Instructional" },
  { key: "O", value: "Other (EPE)" },
  { key: "CM", value: "Case Management" }
];

const GetFormat = [
  { key: "A", value: "CAI Group" },
  { key: "B", value: "Computer Assisted" },
  { key: "C", value: "Class" },
  { key: "G", value: "Small Group" },
  { key: "I", value: "Distance Learning" },
  { key: "L", value: "Lab" },
  { key: "O", value: "Other" },
  { key: "P", value: "Peer Tutoring" },
  { key: "T", value: "Tutorial (One to One)" }
];

const GetSpecialProgramSource = [
  { key: "AI", value: "SMART" },
  { key: "B", value: "Crossroads Café" },
  { key: "D", value: "GRASP" },
  { key: "E", value: "Migrant" },
  { key: "F", value: "Numeracy" },
  { key: "G", value: "EDP" },
  { key: "L", value: "Work Experience" },
  { key: "M", value: "Children/Teens" },
  { key: "P", value: "Parenting/Family Literacy" },
  { key: "Q", value: "Learn to Read" },
  { key: "Z", value: "Workplace Essential Skills" }
];
// Student Age
// const GetAgeGroup = [
//   { key: "Group1", value: "16-18" },
//   { key: "Group2", value: "19-24" },
//   { key: "Group3", value: "25-44" },
//   { key: "Group4", value: "45-59" },
//   { key: "Group5", value: "60 and Older" }
// ];
// Student Employment
// const GetEmploymentStatus = [
//   { key: "A", value: "Employed full-time" },
//   { key: "B", value: "Employed part-time" },
//   { key: "C", value: "Unemployed > yr available" },
//   { key: "D", value: "Unemployed < yr available" },
//   { key: "E", value: "Not available for employment" },
//   { key: "F", value: "Retired" },
//   { key: "G", value: "Inmate" },
//   { key: "U", value: "Unknown" },
//   { key: "H", value: "Empl - Received Term. Notice" },
//   { key: "I", value: "Empl - Military Sep. Pending" }
// ];
const GetReportCategory = [
  { key: "181", value: "TASC Reports" },
  { key: "242", value: "Case Manager Reports" },
  { key: "46", value: "Turnaround Reports" },
  { key: "55", value: "Instructional Offering Roster Reports" },
  { key: "58", value: "Data Management Reports" },
  { key: "79", value: "Staff Reports" }
];
// const GetInstructionSource = [
//   { ID: "232270", InstructionDescription: "BE4CASTS_21  Porter, Samantha" },
//   { ID: "202360", InstructionDescription: "BE6C1  Alisova, Muriana" },
//   {
//     ID: "232271",
//     InstructionDescription: "BE6CIntake_Summer2021  Porter, Samantha"
//   },
//   {
//     ID: "236450",
//     InstructionDescription: "ES3CEnglish101-Uighur    Porter, Samantha"
//   },
//   {
//     ID: "236431",
//     InstructionDescription: "ES3CEnglish101-Urdu    Porter, Samantha"
//   }
// ];
// const GetSite = [
//   { ID: "2976", SiteName: "Practice Agency Main Office", SiteID: "MainOffice" },
//   { ID: "5665", SiteName: "Syracuse Training Site", SiteID: "SYL" },
//   { ID: "4439", SiteName: "Manhatten Learning Ctr27", SiteID: "MANH27" },
//   { ID: "4441", SiteName: "Brooklyn25", SiteID: "BKLY" },
//   { ID: "4444", SiteName: "Manhattan Learning Ctr21", SiteID: "MANH21" },
//   { ID: "4446", SiteName: "Manhattan Learning Ctr30", SiteID: "MANH30" },
//   { ID: "4447", SiteName: "Manhattan Learning Ctr31", SiteID: "MANH31" },
//   { ID: "4448", SiteName: "Manhattan Learning Center28", SiteID: "MANH28" },
//   { ID: "4449", SiteName: "Manhattan Learning32", SiteID: "Manh32" },
//   { ID: "5679", SiteName: "BooBooVille", SiteID: "BooBooVille" },
//   { ID: "5723", SiteName: "WeWorkFidi1 ", SiteID: "27102" },
//   { ID: "5764", SiteName: "Long Island Raen", SiteID: "Li-RAEN" },
//   { ID: "5785", SiteName: "Long Island LAC ", SiteID: "LILAC" },
//   { ID: "5822", SiteName: "Testing Center ", SiteID: "Test_11.4RS" },
//   { ID: "5459", SiteName: "SUNY Farmingdale", SiteID: "SUNYF" },
//   { ID: "5475", SiteName: "Courtyard Mariott Buffalo", SiteID: "Mariott" },
//   { ID: "5461", SiteName: "Literacy Assistance Center", SiteID: "LAC" },
//   { ID: "5671", SiteName: "LACFiDi 27", SiteID: "85Broad" },
//   { ID: "5316", SiteName: "Orange Ulster BOCES", SiteID: "OULB" },
//   { ID: "5317", SiteName: "WSWH BOCES", SiteID: "WSWH" }
// ];
// const GetInstructor = [
//   {
//     ID: "24386",
//     InstructorName: "Alisova, Muriana",
//     PersonnelID: "AlisovaMurianaPRA9",
//     Agency: "PRA"
//   },
//   {
//     ID: "28083",
//     InstructorName: "Porter, Jane",
//     PersonnelID: "PorterJanePRA9",
//     Agency: "PRA"
//   },
//   {
//     ID: "2256",
//     InstructorName: "Porter, Samantha",
//     PersonnelID: "PorterSamanthaPRA9",
//     Agency: "PRA"
//   },
//   {
//     ID: "2257",
//     InstructorName: "Alfiery, Shelley",
//     PersonnelID: "AlfieriShelleyPRA1",
//     Agency: "PRA"
//   }
// ];
//For Prepare Report by Element (Case Management)

const GetExport = [
  { ID: "1", Download_Name: "Students", Procedure_Name: "Util_Dwnld_Students" },
  { ID: "2", Download_Name: "Classes", Procedure_Name: "Util_Dwnld_Classes" },
  {
    ID: "3",
    Download_Name: "Enrollment",
    Procedure_Name: "Util_Dwnld_Enrollment"
  },
  { ID: "5", Download_Name: "Outcomes", Procedure_Name: "Util_Dwnld_Outcomes" },
  {
    ID: "6",
    Download_Name: "Personnel",
    Procedure_Name: "Util_Dwnld_Personnel"
  },
  {
    ID: "7",
    Download_Name: "Contact Hours",
    Procedure_Name: "Util_Dwnld_ContactHours"
  },
  { ID: "8", Download_Name: "Sites", Procedure_Name: "Util_Dwnld_Sites" },
  {
    ID: "9",
    Download_Name: "Student Sources",
    Procedure_Name: "Util_Dwnld_StudentSources"
  },
  {
    ID: "10",
    Download_Name: "Student History",
    Procedure_Name: "Util_Dwnld_StudentHistory"
  },
  {
    ID: "11",
    Download_Name: "Test History",
    Procedure_Name: "Util_Dwnld_TestTakers"
  },
  {
    ID: "12",
    Download_Name: "Class Sources",
    Procedure_Name: "Util_Dwnld_ClassSources"
  },
  {
    ID: "13",
    Download_Name: "Public Assistance",
    Procedure_Name: "Util_Dwnld_PublicAssistance"
  },
  {
    ID: "14",
    Download_Name: "Employment Status",
    Procedure_Name: "Util_Dwnld_EmploymentStatus"
  },
  {
    ID: "15",
    Download_Name: "Referral Source",
    Procedure_Name: "Util_Dwnld_ReferralSource"
  },
  {
    ID: "16",
    Download_Name: "School District",
    Procedure_Name: "Util_Dwnld_SchoolDistrict"
  },
  {
    ID: "17",
    Download_Name: "Student Contact Info",
    Procedure_Name: "Util_Dwnld_StudentContact"
  },
  {
    ID: "18",
    Download_Name: "Student Education History",
    Procedure_Name: "Util_Dwnld_StudentEduHistory"
  },
  {
    ID: "19",
    Download_Name: "Student Progress Notes",
    Procedure_Name: "Util_Dwnld_StudentProgress"
  }
];
//For Prepare Report by Element (Case Management)
const GetPrepareByCM = [
  { key: "0", value: "All Students" },
  { key: "1", value: "Key Words" },
  { key: "2", value: "Referral Partner" },
  { key: "3", value: "Date Range" }
];

const GetCMPKeyword = [
  { key: "10", value: "Citizenship" },
  { key: "5", value: "Community" },
  { key: "11", value: "Educational Support" },
  { key: "4", value: "Family Literacy" },
  { key: "2", value: "Financial Literacy" },
  { key: "3", value: "Functional Literacy" },
  { key: "1", value: "Health Literacy" },
  { key: "13", value: "HSE Diploma Support (Attachment R)" },
  { key: "14", value: "HSE Diploma Support (Other)" },
  { key: "9", value: "Legal Services" },
  { key: "12", value: "Postsecondary Success" },
  { key: "6", value: "School Relations" },
  { key: "7", value: "Social Services" },
  { key: "8", value: "Workforce /Employment/Job Zone" }
];

const GetReferralSite = [
  { ID: "2828", ReferralSiteName: "ASISTS Data Services" },
  { ID: "2881", ReferralSiteName: "Example Partner" },
  { ID: "2897", ReferralSiteName: "Literacy Assistance Center-FiDi" },
  { ID: "5768", ReferralSiteName: "New Partner" },
  { ID: "2923", ReferralSiteName: "WeWork FiDi" },
  { ID: "2410", ReferralSiteName: "ZZZ_Red Cross" }
];
//For Prepare Report by Element (Case Management)
const GetPrepareByAgency = [
  { AgencyID: "BRCI", AgencyName: "Best Resource Center, Inc." },
  {
    AgencyID: "CMSD",
    AgencyName: "Cheektowaga-Maryvale Union Free School District"
  },
  { AgencyID: "ALLL", AgencyName: "LVA Allegany County, Inc." },
  { AgencyID: "PRA", AgencyName: "Practice Agency" },
  { AgencyID: "R01", AgencyName: "Region 1" },
  { AgencyID: "R04", AgencyName: "Region 4" },
  { AgencyID: "R05", AgencyName: "Region 5" },
  { AgencyID: "RCSD", AgencyName: "Rochester City School District" },
  { AgencyID: "SESD", AgencyName: "Syracuse City School District" }
];

const GetFilterBy = [
  { key: "0", value: "Category" },
  { key: "1", value: "Personnel" },
  { key: "2", value: "Facilitator" },
  { key: "3", value: "Sector" }
];

const GetCategory = [
  { ID: "50", Category: "ABE/HSE" },
  { ID: "1", Category: "Assessment" },
  { ID: "53", Category: "Common Core Content Related" },
  { ID: "52", Category: "Common Core Instructional Practice" },
  { ID: "26", Category: "Data/ASISTS" },
  { ID: "55", Category: "Distance Learning" },
  { ID: "51", Category: "ESOL" },
  { ID: "54", Category: "Learning to Achieve" },
  { ID: "10", Category: "NRS" },
  { ID: "58", Category: "NYSED/CUNY Common Core" },
  { ID: "57", Category: "Other" },
  { ID: "4", Category: "Program Management" },
  { ID: "56", Category: "TASC Coordinator Training" },
  { ID: "5", Category: "Technology" },
  { ID: "42", Category: "Tutor Training" }
];

const GetPersonnel = [
  {
    AgencyID: "PRA",
    ID: "51885",
    PersonnelID: "AaaaRrrPRA9",
    Name: "Aaaa, Rrr"
  },
  {
    AgencyID: "PRA",
    ID: "28555",
    PersonnelID: "AlfieriShelleyPRA1",
    Name: "Alfieri, Shelley"
  },
  {
    AgencyID: "PRA",
    ID: "24386",
    PersonnelID: "AlisovaMurianaPRA9",
    Name: "Alisova, Muriana"
  },
  {
    AgencyID: "PRA",
    ID: "24234",
    PersonnelID: "BarnesJuliaPRA14",
    Name: "Barnes, Julia"
  },
  {
    AgencyID: "PRA",
    ID: "52310",
    PersonnelID: "BartowksiCharlesPRA9",
    Name: "Bartowksi, Charles"
  },
  {
    AgencyID: "PRA",
    ID: "51590",
    PersonnelID: "BladeSenuaPRA9",
    Name: "Blade, Senua"
  },
  {
    AgencyID: "PRA",
    ID: "51065",
    PersonnelID: "BradyTomPRA9",
    Name: "Brady, Tom"
  },
  {
    AgencyID: "PRA",
    ID: "33828",
    PersonnelID: "CampbellDonPRA9",
    Name: "Campbell, Don"
  },
  {
    AgencyID: "PRA",
    ID: "53190",
    PersonnelID: "CharlotinWilsonPRA18",
    Name: "Charlotin, Wilson"
  },
  {
    AgencyID: "PRA",
    ID: "51261",
    PersonnelID: "CooperDalePRA18",
    Name: "Cooper, Dale"
  },
  {
    AgencyID: "PRA",
    ID: "47016",
    PersonnelID: "CooperGary PRA9",
    Name: "Cooper, Gary "
  },
  {
    AgencyID: "PRA",
    ID: "23853",
    PersonnelID: "DainMichillePRA19",
    Name: "Dains, Michille"
  }
];

const GetFacilitator = [
  { ID: "2184", AgencyID: "PRA", Name: "Lizelena Iglesias" },
  { ID: "1", AgencyID: "PRA", Name: "new test1" },
  { ID: "1026", AgencyID: "PRA", Name: "Nguy Vutha" },
  { ID: "2160", AgencyID: "PRA", Name: "Srinivasan Raju" },
  { ID: "2305", AgencyID: "PRA", Name: "Srinivasan Srikanth" }
];

const GetSector = [
  { key: "1", value: "BOCES" },
  { key: "2", value: "CBO" },
  { key: "3", value: "Community Colleges" },
  { key: "4", value: "Consortium for Workers Education" },
  { key: "5", value: "Library" },
  { key: "6", value: "LV" },
  { key: "7", value: "School District" }
];

//For Select Report Element
const GetReport = [
  {
    ID: "57",
    Report_Name: "Sign In Sheet",
    Category_Filter: "55",
    Report_Category: "Instructional Offering Roster Reports",
    FileName: "DMR/Instructional Offering Reports/IOR/signInSheet.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "1",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "55",
    Report_Name: "Instructional Offering Roster",
    Category_Filter: "55",
    Report_Category: "Instructional Offering Roster Reports",
    FileName: "DMR/Instructional Offering Reports/IOR/roster.aspx",
    Procedure_Name: "Roster_dwnld",
    Procedure_Param: "3",
    Download_Name: "Roster",
    Sort_Order: "2",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "56",
    Report_Name: "Daily Attendance Class Roster",
    Category_Filter: "55",
    Report_Category: "Instructional Offering Roster Reports",
    FileName: "DMR/Instructional Offering Reports/IOR/DailyAttendance.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "3",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "186",
    Report_Name: "Daily Attendance Class Roster - Week",
    Category_Filter: "55",
    Report_Category: "Instructional Offering Roster Reports",
    FileName: "DMR/Instructional Offering Reports/IOR/WeeklyDayAttendance.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "3",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "87",
    Report_Name: "Monthly Combined Class Roster",
    Category_Filter: "55",
    Report_Category: "Instructional Offering Roster Reports",
    FileName: "DMR/Instructional Offering Reports/IOR/MonthlyClassRoster.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "4",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "187",
    Report_Name: "Weekly Attendance Class Roster",
    Category_Filter: "55",
    Report_Category: "Instructional Offering Roster Reports",
    FileName: "DMR/Instructional Offering Reports/IOR/WeeklyAttendance.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "50",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "46",
    Report_Name: "Turnaround Document A - (Demographics)",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDA.aspx",
    Procedure_Name: "TurnAroundA_dwnld",
    Procedure_Param: "3",
    Download_Name: "TurnAroundA",
    Sort_Order: "1",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "47",
    Report_Name: "Turnaround Document B - (Test Scores)",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDB.aspx",
    Procedure_Name: "TurnAroundB_dwnld",
    Procedure_Param: "3",
    Download_Name: "TurnAroundB",
    Sort_Order: "2",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "48",
    Report_Name: "Turnaround Document C - (Hours & Goals)",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDC.aspx",
    Procedure_Name: "TurnAroundC_dwnld",
    Procedure_Param: "3",
    Download_Name: "TurnAroundC",
    Sort_Order: "3",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "49",
    Report_Name: "Turnaround Document D - (Outcome)",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDD.aspx",
    Procedure_Name: "TurnAroundD_dwnld",
    Procedure_Param: "3",
    Download_Name: "TurnAroundD",
    Sort_Order: "4",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "50",
    Report_Name: "Turnaround Document D - HSE",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDGED.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "5",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "51",
    Report_Name: "Turnaround Document D - Jobs",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDJobs.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "6",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "52",
    Report_Name: "Turnaround Document D - Other Primary",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDOtherOutcomes.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "7",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "85",
    Report_Name: "Turnaround Document E - (Follow Up/Survey)",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDE.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "10",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "86",
    Report_Name: "Turnaround Document F - (Test Scores & Hours)",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "turnaround/TDF.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "11",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "207",
    Report_Name: "Outcome Survey Tool",
    Category_Filter: "46",
    Report_Category: "Turnaround Reports",
    FileName: "POP_Reports/WIOA_OutcomeSurveyTool.aspx",
    Procedure_Name: "WIOA_OutcomeSurveywName_dwnld",
    Procedure_Param: "1",
    Download_Name: "OutcomeSurveyTool",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "60",
    Report_Name: "Program Information Form",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/Instructional Offering Reports/programIF.aspx",
    Procedure_Name: "",
    Procedure_Param: "2",
    Download_Name: "PIF",
    Sort_Order: "5",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "61",
    Report_Name: "Program Hours Summary",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/Instructional Offering Reports/IOH/ProgramHours.aspx",
    Procedure_Name: "dmr_ProgramHoursbyLevel",
    Procedure_Param: "2",
    Download_Name: "ProgramHoursbyLevel",
    Sort_Order: "6",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "58",
    Report_Name: "Duplicate Students",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/Student Reports/DupStudentAgency.aspx",
    Procedure_Name: "dmr_DuplicateStudentsAgency",
    Procedure_Param: "1",
    Download_Name: "DuplicateStudents",
    Sort_Order: "7",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "133",
    Report_Name: "Contact Hours Summary",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/Instructional Offering Reports/IOH/ContactHoursSummary.aspx",
    Procedure_Name: "dmr_ContactHoursSummary_dwnld",
    Procedure_Param: "1",
    Download_Name: "ContactHoursSummary",
    Sort_Order: "8",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "185",
    Report_Name: "Weekly Contact Hours Summary",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName:
      "DMR/Instructional Offering Reports/IOH/ProgramHoursMonthlyWeek.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "10",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "140",
    Report_Name: "Student Contact Hours Report",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName:
      "DMR/Instructional Offering Reports/IOH/ContactHoursClassSummary.aspx",
    Procedure_Name: "dmr_ContactHoursClassSummary_dwnld",
    Procedure_Param: "3",
    Download_Name: "StudentContactHours",
    Sort_Order: "11",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "152",
    Report_Name: "Student Exit Tool by Class",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/Instructional Offering Reports/IOH/StudentExitTool.aspx",
    Procedure_Name: "dmr_StudentExitTool_dwnld",
    Procedure_Param: "1",
    Download_Name: "ExitToolClass",
    Sort_Order: "13",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "162",
    Report_Name: "Student Exit Tool by Student (New)",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName:
      "DMR/Instructional Offering Reports/IOH/StudentExitToolbyStudent.aspx",
    Procedure_Name: "dmr_StudentExitToolbyName_dwnld",
    Procedure_Param: "1",
    Download_Name: "ExitToolStudent",
    Sort_Order: "14",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "138",
    Report_Name: "Literacy Zone Primary Outcome Report",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/LitZoneReport.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "176",
    Report_Name: "Literacy Zone Outcome Summary Report",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/LitZoneOutcomeSummary.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "105",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "163",
    Report_Name: "LZ Outcome Report - NRS Students",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/LitZoneReportNRS.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "110",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "164",
    Report_Name: "LZ Outcome Report- Non NRS Students",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/LitZoneReportNonNRS.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "120",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "169",
    Report_Name: "Monthly ADA Report",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/Instructional Offering Reports/IOH/ProgramHoursMonthly.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "130",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "170",
    Report_Name: "Weekly ADA Report",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName: "DMR/Instructional Offering Reports/IOH/ProgramHoursWeekly.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "140",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "236",
    Report_Name: "Contact Hours Testing Summary Report",
    Category_Filter: "58",
    Report_Category: "Data Management Reports",
    FileName:
      "DMR/Instructional Offering Reports/IOH/ContactHoursTestingSummary.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "200",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "242",
    Report_Name: "Referrals Report ",
    Category_Filter: "242",
    Report_Category: "Case Manager Reports",
    FileName: "DMR/CMP_Reports/CMP_Referrals.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "10",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "243",
    Report_Name: "Referral Summary Report",
    Category_Filter: "242",
    Report_Category: "Case Manager Reports",
    FileName: "DMR/CMP_Reports/CMP_Referrals_Summary.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "20",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "244",
    Report_Name: "Needs Report ",
    Category_Filter: "242",
    Report_Category: "Case Manager Reports",
    FileName: "DMR/CMP_Reports/CMP_Needs.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "30",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "245",
    Report_Name: "Outcome Report ",
    Category_Filter: "242",
    Report_Category: "Case Manager Reports",
    FileName: "DMR/CMP_Reports/CMP_Outcome.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "40",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "182",
    Report_Name: "TASC Candidate Report",
    Category_Filter: "181",
    Report_Category: "TASC Reports",
    FileName: "DMR/HSECandidate.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "20",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "183",
    Report_Name: "TASC Candidate Students with Match Report",
    Category_Filter: "181",
    Report_Category: "TASC Reports",
    FileName: "DMR/HSECandidate_NameMatch.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "30",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "137",
    Report_Name: "TASC Referral Report",
    Category_Filter: "181",
    Report_Category: "TASC Reports",
    FileName: "DMR/GEDreferral.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "226",
    Report_Name: "HSE Candidate Readiness Report",
    Category_Filter: "181",
    Report_Category: "TASC Reports",
    FileName: "DMR/HSEReadiness.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "200",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "79",
    Report_Name: "Events Attended by Personnel (ALL)",
    Category_Filter: "79",
    Report_Category: "Staff Reports",
    FileName: "StaffDev/EventByPersonnel.aspx",
    Procedure_Name: "ALIESNRS_StaffDev_dwnld",
    Procedure_Param: "7",
    Download_Name: "StaffDevEvents",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "177",
    Report_Name: "Events Attended by Personnel (RAEN)",
    Category_Filter: "79",
    Report_Category: "Staff Reports",
    FileName: "StaffDev/EventByPersonnel.aspx",
    Procedure_Name: "ALIESNRS_StaffDev_dwnld",
    Procedure_Param: "7",
    Download_Name: "RAENStaffDevEvents",
    Sort_Order: "110",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "184",
    Report_Name: "RAEN Summary Report",
    Category_Filter: "79",
    Report_Category: "Staff Reports",
    FileName: "StaffDev/EventByPersonnelSummary.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "210",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "191",
    Report_Name: "RAEN Local Program Report",
    Category_Filter: "79",
    Report_Category: "Staff Reports",
    FileName: "StaffDev/EventByAgency.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "310",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "192",
    Report_Name: "Event Attendance Report (RAEN)",
    Category_Filter: "79",
    Report_Category: "Staff Reports",
    FileName: "StaffDev/EventAttendanceRAEN.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "410",
    Sort_Order2: "1",
    Filter_Report: "1"
  }
];
