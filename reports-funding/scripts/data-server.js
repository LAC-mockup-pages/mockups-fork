//* Data objects for Funding Reports Page
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
  { key: "2", value: "Instructional Type" },
  { key: "3", value: "Instructional Format" },
  { key: "4", value: "Instructional Program" },
  { key: "5", value: "Teacher/Tutor" },
  { key: "6", value: "Site" },
  { key: "7", value: "Student Age" },
  { key: "8", value: "Student Employment" }
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
const GetAgeGroup = [
  { key: "Group1", value: "16-18" },
  { key: "Group2", value: "19-24" },
  { key: "Group3", value: "25-44" },
  { key: "Group4", value: "45-59" },
  { key: "Group5", value: "60 and Older" }
];
// Student Employment
const GetEmploymentStatus = [
  { key: "A", value: "Employed full-time" },
  { key: "B", value: "Employed part-time" },
  { key: "C", value: "Unemployed > yr available" },
  { key: "D", value: "Unemployed < yr available" },
  { key: "E", value: "Not available for employment" },
  { key: "F", value: "Retired" },
  { key: "G", value: "Inmate" },
  { key: "U", value: "Unknown" },
  { key: "H", value: "Empl - Received Term. Notice" },
  { key: "I", value: "Empl - Military Sep. Pending" }
];
const GetReportCategory = [
  { key: "16", value: "WIOA Program Evaluation Reports" },
  { key: "196", value: "WIOA Reports" },
  { key: "197", value: "NYRS Program Evaluation Reports" },
  { key: "198", value: "NYRS Reports" },
  { key: "202", value: "WIOA Tables Data Check" },
  { key: "203", value: "WIOA Data Check Reports" },
  { key: "39", value: "EPE Reports" }
];

//For Select Report Element
const GetReport = [
  {
    ID: "208",
    ReportName:
      "Table 1 Participants by Entering Educational Functioning Level, Ethnicity and Sex",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table1_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "209",
    ReportName: "Table 2 Participants by Age, Ethnicity and Sex",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table2_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "110",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "237",
    ReportName: "Table 2A Reportable Individuals by Age, Ethnicity and Sex",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table2A_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "115",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "210",
    ReportName: "Table 3 Participants by Program Type and Age",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table3_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "120",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "196",
    ReportName: "Table 4 Measurable Skill Gains by Entry Level",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table4_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "130",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "239",
    ReportName: "Table 4A - Educational Functioning Level Gain",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table4A_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "132",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "219",
    ReportName: "Table 4B - Post-tested Participants",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table4B_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "134",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "220",
    ReportName: "Table 4C - Distance Education",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table4C_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "138",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "201",
    ReportName: "Table 5 Core Outcome Achievement (Previous FY Exiters)",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table5_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "140",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "221",
    ReportName: "Table  5A - Distance Education",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table5A_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "144",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "215",
    ReportName: "Table 6 Participant Status and Program Enrollment",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table6_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "180",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "216",
    ReportName: "Table 7 Adult Education Personnel by Function and Job Status",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table7_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "200",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "240",
    ReportName: "Table 9 Outcome Achievement for Participants in IELCE",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table9_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "230",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "227",
    ReportName:
      "Table 10 Outcome Achievements for Adults in Correctional Education Programs",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table10_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "240",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "241",
    ReportName:
      "Table 11 Outcome Achievement for Adults in Integrated Education and Training Programs",
    CategoryID: "196",
    CategoryDesc: "WIOA Reports",
    FileName: "POP_Reports/table11_wioa.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "260",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "211",
    ReportName:
      "1 Participants by Entering Educational Functioning Level, Ethnicity and Sex",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck1.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "212",
    ReportName: "2 Participants by Age, Ethnicity and Sex",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck2.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "110",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "213",
    ReportName: "3 Participants by Program Type and Age",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck3.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "120",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "235",
    ReportName: "4 Measurable Skill Gains by Entry Level",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/POPtablesDataCheck4_EFL.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "130",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "222",
    ReportName: "4B - Post-tested Participants",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/POPtablesDataCheck4B.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "134",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "223",
    ReportName: "4C - Distance Education",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/POPtablesDataCheck4C.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "138",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "202",
    ReportName: "5 Core Outcome Achievement (Previous FY Exiters)",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck5.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "140",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "224",
    ReportName: "5A - Distance Education",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck5A.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "144",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "217",
    ReportName: "6 Participant Status and Program Enrollment",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck6.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "180",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "218",
    ReportName: "7 Adult Education Personnel by Function and Job Status",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck7.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "200",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "228",
    ReportName:
      "10 Education Achievements for Adults in Correctional Education Programs",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/POPtablesDataCheck10_MSG.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "240",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "229",
    ReportName:
      "10 Outcome Achievements for Adults in Correctional Education Programs",
    CategoryID: "202",
    CategoryDesc: "WIOA Tables Data Check",
    FileName: "POP_Reports/WIOA_tablesDataCheck10.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "245",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "12",
    ReportName: "Students Missing Key Demographics",
    CategoryID: "203",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "missingKeydemo.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "10",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "190",
    ReportName: "Students with Invalid Enrollment",
    CategoryID: "203",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NRSInvalidStudentEnrollment.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "20",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "9",
    ReportName: "Students with Invalid Test Scores",
    CategoryID: "203",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "InvalidTestScores.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "30",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "63",
    ReportName:
      "Students with Funding Source Not Matching Instruction Funding Source",
    CategoryID: "203",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NRSStudentNotMatchingClassFundingSource.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "50",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "13",
    ReportName: "Student Enrolled Not Counted In NRS",
    CategoryID: "203",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NRSInvalidStudentEnrolledNotCounted.aspx",
    Procedure_Name: "ALIESNRS_InvalidStudentEnrolledNotCounted_dwnld",
    Procedure_Param: "1",
    Download_Name: "StudentEnrolledNotCounted.aspx",
    Sort_Order: "90",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "173",
    ReportName: "Student Assessment and Attendance",
    CategoryID: "203",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_ParticipantsAssessmentAttendace.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "220",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "174",
    ReportName:
      "(Download Only) Student Assessment and Attendance w/Instruction Description",
    CategoryID: "203",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NULL",
    Procedure_Name: "WIOA_ParticipantsTableswAssessment_dwnload",
    Procedure_Param: "6",
    Download_Name: "ParticipantsAssessmentAttendance",
    Sort_Order: "230",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "203",
    ReportName: "Students without Pre-Test",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_NoPreTest.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "204",
    ReportName: "Students without Post Test",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_NoPostTest.aspx",
    Procedure_Name: "WIOA_InvalidStudentsNoPostTest_dwnload",
    Procedure_Param: "6",
    Download_Name: "StudentNoPostTest",
    Sort_Order: "110",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "205",
    ReportName: "Students Not Moving to Higher Level",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_NotMovingtoHigher.aspx",
    Procedure_Name: "WIOA_ParticipantsNoProgresswName_dwnld",
    Procedure_Param: "6",
    Download_Name: "StudentNoProgress",
    Sort_Order: "120",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "206",
    ReportName: "Students Moving to Higher Level",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_MovingtoHigher.aspx",
    Procedure_Name: "WIOA_ParticipantsProgresswName_dwnld",
    Procedure_Param: "6",
    Download_Name: "StudentProgress",
    Sort_Order: "130",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "214",
    ReportName: "Students Missing Social Security Numbers",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_StudentsMissingSSN.aspx",
    Procedure_Name: "WIOA_ParticipantsTablewName_dwnld",
    Procedure_Param: "6",
    Download_Name: "StudentMissingSSN",
    Sort_Order: "500",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "225",
    ReportName: "Students with Invalid Social Security Numbers",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_StudentsInvalidSSN.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "550",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "238",
    ReportName: "Students with Carry Over Hours",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_Students_PFY_HoursLT12.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "600",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "246",
    ReportName: "Barriers to Employment",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_Reports/WIOA_BarriersEmploy.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "700",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "247",
    ReportName: "Barriers to Employment Performance Report",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_BarrierEmp_Performance.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "720",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "230",
    ReportName: "WIOA Outcome Survey Tool",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_Reports/WIOA_OutcomeSurveyTool.aspx",
    Procedure_Name: "WIOA_OutcomeSurveywName_dwnld",
    Procedure_Param: "1",
    Download_Name: "WIOA_OutcomeSurveyTool",
    Sort_Order: "1400",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "193",
    ReportName: "POP Participants Details and Demographics",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_Reports/POPtablesDataCheck.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "1500",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "194",
    ReportName: "POP MSG Achievement by Name",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_Reports/POPtablesDataCheck4.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "1510",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "195",
    ReportName: "POP MSG Achievement by EFL",
    CategoryID: "203",
    CategoryDesc: "WIOA Data Check Reports",
    FileName: "POP_Reports/POPtablesDataCheck4_EFL.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "1520",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "16",
    ReportName: "Program Evaluation Report (NEW)",
    CategoryID: "16",
    CategoryDesc: "WIOA Program Evaluation Reports",
    FileName: "POP_Reports/POPProgramEval.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "1",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "188",
    ReportName: "(Download Only) Program Evaluation Report by Class",
    CategoryID: "16",
    CategoryDesc: "WIOA Program Evaluation Reports",
    FileName: "NULL",
    Procedure_Name: "WIOA_ProgramEvaluation_Class_dwnld",
    Procedure_Param: "6",
    Download_Name: "ProgramEvaluationbyClass",
    Sort_Order: "500",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "189",
    ReportName: "(Download Only) Program Evaluation Report by Teacher",
    CategoryID: "16",
    CategoryDesc: "WIOA Program Evaluation Reports",
    FileName: "NULL",
    Procedure_Name: "WIOA_ProgramEvaluation_Teacher_dwnld",
    Procedure_Param: "6",
    Download_Name: "ProgramEvaluationbyTeacher",
    Sort_Order: "510",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "12",
    ReportName: "Students Missing Key Demographics",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "missingKeydemo.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "10",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "190",
    ReportName: "Students with Invalid Enrollment",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NRSInvalidStudentEnrollment.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "20",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "9",
    ReportName: "Students with Invalid Test Scores",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "InvalidTestScores.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "30",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "11",
    ReportName: "Students without Pre-Test",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NoPreTest.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "40",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "63",
    ReportName:
      "Students with Funding Source Not Matching Instruction Funding Source",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NRSStudentNotMatchingClassFundingSource.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "50",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "14",
    ReportName: "Students Without Post Test",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NoPostTest.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "60",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "13",
    ReportName: "Student Enrolled Not Counted In NRS",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NRSInvalidStudentEnrolledNotCounted.aspx",
    Procedure_Name: "ALIESNRS_InvalidStudentEnrolledNotCounted_dwnld",
    Procedure_Param: "1",
    Download_Name: "StudentEnrolledNotCounted.aspx",
    Sort_Order: "90",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "173",
    ReportName: "Student Assessment and Attendance",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "POP_DataCheckReports/WIOA_ParticipantsAssessmentAttendace.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "220",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "174",
    ReportName:
      "(Download Only) Student Assessment and Attendance w/Instruction Description",
    CategoryID: "198",
    CategoryDesc: "NRS Data Check Reports",
    FileName: "NULL",
    Procedure_Name: "WIOA_ParticipantsTableswAssessment_dwnload",
    Procedure_Param: "6",
    Download_Name: "ParticipantsAssessmentAttendance",
    Sort_Order: "230",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "231",
    ReportName: "ALE Outcome Survey Tool",
    CategoryID: "198",
    CategoryDesc: "NYRS Reports",
    FileName: "POP_Reports/WIOA_OutcomeSurveyTool.aspx",
    Procedure_Name: "WIOA_OutcomeSurveywName_dwnld",
    Procedure_Param: "1",
    Download_Name: "ALE_OutcomeSurveyTool",
    Sort_Order: "50",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "232",
    ReportName: "Students Not Moving to Higher Level ",
    CategoryID: "198",
    CategoryDesc: "NYRS Reports",
    FileName: "NYRS_Reports/NYRSNotMovingtoHigher.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "70",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "233",
    ReportName: "Students Moving to Higher Level",
    CategoryID: "198",
    CategoryDesc: "NYRS Reports",
    FileName: "NYRS_Reports/NYRSMovingtoHigher.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "80",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "198",
    ReportName: "NYRS Participants Details and Demographics",
    CategoryID: "198",
    CategoryDesc: "NYRS Reports",
    FileName: "NYRS_Reports/NYRStablesDataCheck.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "199",
    ReportName: "NYRS MSG Achievement by Name",
    CategoryID: "198",
    CategoryDesc: "NYRS Reports",
    FileName: "NYRS_Reports/NYRStablesDataCheck4.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "500",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "200",
    ReportName: "NYRS MSG Achievement by EFL",
    CategoryID: "198",
    CategoryDesc: "NYRS Reports",
    FileName: "NYRS_Reports/NYRStablesDataCheck4_EFL.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "510",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "197",
    ReportName: "NYRS Program Evaluation Report",
    CategoryID: "197",
    CategoryDesc: "NYRS Program Evaluation Reports",
    FileName: "NYRS_Reports/NYRSProgramEval.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "95",
    ReportName: "EPE Claim Part 2 160.1 (Jul 01 - Dec 31)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeClaimPart2_1601.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "1",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "96",
    ReportName: "EPE Claim Part3 160.1 (Jul 01 - Dec 31)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeClaimPart3_1601.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "2",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "97",
    ReportName: "Students Included in EPE Reports (Jul 01 - Dec 31)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epedatacheck_1601.aspx",
    Procedure_Name: "ALIESEPE_EPEtblDatacheck_Half1_dwnld",
    Procedure_Param: "6",
    Download_Name: "StudentsinEPE_Half1",
    Sort_Order: "3",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "98",
    ReportName: "Students Included in EPE Reports by Class (Jul 01 - Dec 31)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeStudentsIncludedinReports_1601.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "4",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "100",
    ReportName: "Students Under 21 (Jul 01 - Dec 31)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeStudentsUnder21_1601.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "7",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "101",
    ReportName: "EPE Class Analysis by Age & Hours (Jul 01 - Dec 31)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeClassAnalysis_1601.aspx",
    Procedure_Name: "ALIESEPE_EPEDataCheckEnrollment_Half1",
    Procedure_Param: "6",
    Download_Name: "EPEClassAnalysis_1601",
    Sort_Order: "8",
    Sort_Order2: "1",
    Filter_Report: "NULL"
  },
  {
    ID: "165",
    ReportName: "Students Enrolled not Counted (Jul 01 - Dec 31)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeEnrolledNotCounted_1601.aspx",
    Procedure_Name: "ALIESEPE_EPEDataCheckNotCounted_Half1",
    Procedure_Param: "6",
    Download_Name: "EPEEnrolledNotCounted_1601",
    Sort_Order: "100",
    Sort_Order2: "1",
    Filter_Report: "1"
  },
  {
    ID: "135",
    ReportName: "EPE Claim Part 1 160.2 (Jan 01 - Jun 30) ",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPE_1602_Part1.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "5",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "102",
    ReportName: "EPE Claim Part 2 160.2 (Jan 01 - Jun 30)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeClaimPart2_1602.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "10",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "103",
    ReportName: "EPE Claim Part3 160.2 (Jan 01 - Jun 30)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeClaimPart3_1602.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "20",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "104",
    ReportName: "Students Included in EPE Reports (Jan 01 - Jun 30)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epedatacheck_1602.aspx",
    Procedure_Name: "ALIESEPE_EPEtblDatacheck_Half2_dwnld",
    Procedure_Param: "6",
    Download_Name: "StudentsinEPE_Half2",
    Sort_Order: "30",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "105",
    ReportName: "Students Included in EPE Reports by Class (Jan 01 - Jun 30)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeStudentsIncludedinReports_1602.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "40",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "107",
    ReportName: "Students Under 21 (Jan 01 - Jun 30)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeStudentsUnder21_1602.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "70",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "108",
    ReportName: "EPE Class Analysis by Age & Hours (Jan 01 - Jun 30)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeClassAnalysis_1602.aspx",
    Procedure_Name: "ALIESEPE_EPEDataCheckEnrollment_Half2",
    Procedure_Param: "6",
    Download_Name: "EPEClassAnalysis_1602",
    Sort_Order: "80",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "136",
    ReportName: "EPE Amendment Log",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEAmendmentLog.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "90",
    Sort_Order2: "2",
    Filter_Report: "NULL"
  },
  {
    ID: "144",
    ReportName: "EPE Student Amendment Summary",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEStudentAmendment.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "95",
    Sort_Order2: "2",
    Filter_Report: "1"
  },
  {
    ID: "166",
    ReportName: "Students Enrolled not Counted (Jan 01 - Jun 30)",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/epeEnrolledNotCounted_1602.aspx",
    Procedure_Name: "ALIESEPE_EPEDataCheckNotCounted_Half2",
    Procedure_Param: "6",
    Download_Name: "EPEEnrolledNotCounted_1602",
    Sort_Order: "100",
    Sort_Order2: "2",
    Filter_Report: "1"
  },
  {
    ID: "134",
    ReportName: "EPE Students Missing Pre or Post Tests ",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEStudentsNoPrePostTest.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "1",
    Sort_Order2: "3",
    Filter_Report: "NULL"
  },
  {
    ID: "109",
    ReportName: "EPE Monthly Report Part 2",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEClaimMonthlyNoGrad.aspx",
    Procedure_Name: "ALIESEPE_EPEtblClaimReportMonthly_EPENoGrad_dwnld",
    Procedure_Param: "6",
    Download_Name: "EPEMonthlyReport_Part2",
    Sort_Order: "2",
    Sort_Order2: "3",
    Filter_Report: "NULL"
  },
  {
    ID: "110",
    ReportName: "EPE Monthly Report Part 3",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEClaimMonthlyHSGrad.aspx",
    Procedure_Name: "ALIESEPE_EPEtblClaimReportMonthly_EPEHSGrad_dwnld",
    Procedure_Param: "6",
    Download_Name: "EPEMonthlyReport_Part3",
    Sort_Order: "3",
    Sort_Order2: "3",
    Filter_Report: "NULL"
  },
  {
    ID: "141",
    ReportName: "EPE Students not in NRS",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEStudentsNotInNRS.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "3",
    Sort_Order2: "3",
    Filter_Report: "NULL"
  },
  {
    ID: "248",
    ReportName: "EPE 2 Percentage Data Check",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEProgramSummary_EPE2.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "5",
    Sort_Order2: "3",
    Filter_Report: "1"
  },
  {
    ID: "119",
    ReportName: "EPE HSE Outcome",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEStudentGEDOutcome_1601.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "10",
    Sort_Order2: "3",
    Filter_Report: "NULL"
  },
  {
    ID: "120",
    ReportName: "EPE Non Matching Funding Source",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEStudentNotMatchingClassFundingSource_1601.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "11",
    Sort_Order2: "3",
    Filter_Report: "NULL"
  },
  {
    ID: "121",
    ReportName: "EPE Students Turning 21",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEStudentAge21_1601.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "12",
    Sort_Order2: "3",
    Filter_Report: "NULL"
  },
  {
    ID: "234",
    ReportName: "EPE Fast Track Performance",
    CategoryID: "39",
    CategoryDesc: "EPE Reports",
    FileName: "EPE Reports/EPEFastTrackPerformance.aspx",
    Procedure_Name: "",
    Procedure_Param: "0",
    Download_Name: "",
    Sort_Order: "200",
    Sort_Order2: "3",
    Filter_Report: "1"
  }
];
