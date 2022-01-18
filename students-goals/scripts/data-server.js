//* Data objects for Landing Page
//*=================================

const GetCredentialSource = [
  { key: "3", value: "Certified Nursing Assistant" },
  { key: "4", value: "Emergency Medical Technician" },
  { key: "1", value: "Food Handler Certification" },
  { key: "2", value: "Personal Care Aide Certificate" }
];

const GetGoalCategoryDesc_LitZone = [
  { key: "1", value: "Health Literacy" },
  { key: "2", value: "Financial Literacy" },
  { key: "3", value: "Functional Literacy" },
  { key: "4", value: "Family Literacy" },
  { key: "5", value: "Community Outcomes" },
  { key: "6", value: "School Relations" },
  { key: "7", value: "Social Services" },
  { key: "8", value: "Workforce/Employment/Job Zone" },
  { key: "9", value: "Legal Services" },
  { key: "10", value: "Citizenship" },
  { key: "11", value: "Educational Support" },
  { key: "12", value: "Postsecondary Success" },
  { key: "13", value: "HSE Diploma Support (Attachment R)" },
  { key: "14", value: "HSE Diploma Support (Other)" }
];

const GetOutcomeinfo_LitZone = [
  {
    ID: "967226",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Category_Key: "7",
    Category: "Social Services",
    GoalID: "10",
    Description: "Budget use of Earned Income Credit funds",
    Cat_GoalDesc: "Social Services | Budget use of Earned Income Credit funds",
    FY: "2020",
    MetGoal: "False",
    ReferralSiteID: "PRALZ2828",
    ReferralSiteName: "ASISTS Data Services"
  },
  {
    ID: "967226",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Category_Key: "2",
    Category: "Financial Literacy",
    GoalID: "10",
    Description: "Budget use of Earned Income Credit funds",
    Cat_GoalDesc:
      "Financial Literacy | Budget use of Earned Income Credit funds",
    FY: "2020",
    MetGoal: "False",
    ReferralSiteID: "PRALZ2828",
    ReferralSiteName: "ASISTS Data Services"
  },
  {
    ID: "482423",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Category_Key: "7",
    Category: "Social Services",
    GoalID: "46",
    Description: "Applied for Food Stamps",
    Cat_GoalDesc: "Social Services | Applied for Food Stamps",
    FY: "2017",
    MetGoal: "True",
    ReferralSiteID: "PRALZ5768",
    ReferralSiteName: "New Partner"
  },
  {
    ID: "582780",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Category_Key: "8",
    Category: "Workforce Readiness",
    GoalID: "49",
    Description: "Participate in job interview",
    Cat_GoalDesc: "Workforce Readiness | Participate in job interview",
    FY: "2017",
    MetGoal: "True",
    ReferralSiteID: "PRALZ2736",
    ReferralSiteName: ""
  },
  {
    ID: "482422",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Category_Key: "1",
    Category: "Health Literacy",
    GoalID: "2694",
    Description: "Get Flu Vaccination *",
    Cat_GoalDesc: "Health Literacy | Get Flu Vaccination *",
    FY: "2016",
    MetGoal: "True",
    ReferralSiteID: "PRALZ1476",
    ReferralSiteName: ""
  },
  {
    ID: "31366",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Category_Key: "8",
    Category: "Workforce Readiness",
    GoalID: "23",
    Description: "Read and understand work related documents (ie. Memos)",
    Cat_GoalDesc:
      "Workforce Readiness | Read and understand work related documents (ie. Memos)",
    FY: "2012",
    MetGoal: "False",
    ReferralSiteID: "PRALZ521",
    ReferralSiteName: ""
  },
  {
    ID: "27078",
    Student_PKID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Category_Key: "1",
    Category: "Health Literacy",
    GoalID: "1",
    Description: "Describe symptoms of an illness",
    Cat_GoalDesc: "Health Literacy | Describe symptoms of an illness",
    FY: "2012",
    MetGoal: "False",
    ReferralSiteID: "PRALZ2881",
    ReferralSiteName: "Example Partner"
  }
];

const GetGoalsDesc_EFF = [
  {
    key: "1",
    value:
      "1 Read to children regularly/increased literacy practices in the home *"
  },
  { key: "2", value: "2 Communicated with teachers/school staff" },
  {
    key: "3",
    value: "3 Attended parent/teacher conferences/school-related meetings*"
  },
  { key: "4", value: "4 Developed personal and/or family budget" },
  { key: "5", value: "5 Used recipes" },
  { key: "6", value: "6 Read a medication bottle" },
  { key: "7", value: "7 Described symptoms of an illness" },
  { key: "8", value: "8 Wrote to family/friends" },
  {
    key: "9",
    value: "9 Understood directions for use of household appliances"
  },
  { key: "10", value: "10 Read product label directions and safety warnings" },
  {
    key: "11",
    value:
      "11 Compared price or quality to determine the best buys for goods and services"
  },
  { key: "12", value: "12 Other Family \u0026 Home" },
  { key: "13", value: "13 Read and understood signs" },
  {
    key: "14",
    value:
      "14 Identified or used different types of transportation in the community"
  },
  { key: "15", value: "15 Used postal services" },
  { key: "16", value: "16 Apply for public assistance" },
  { key: "17", value: "17 Apply for unemployment" },
  { key: "18", value: "18 Used the telephone and/or telephone book" },
  { key: "19", value: "19 Opened checking/savings account" },
  { key: "20", value: "20 Complete loan/credit application" },
  { key: "21", value: "21 Write checks" },
  { key: "22", value: "22 Filled out insurance forms" },
  { key: "23", value: "23 understand contracts (e.g. Lease)" },
  { key: "24", value: "24 Located and/or used community agencies or services" },
  {
    key: "25",
    value: "25 Registered to vote/voted in primary or general election *"
  },
  { key: "26", value: "26 Participate in civic organization" },
  {
    key: "27",
    value: "27 Applied for/received U.S. citizenship/legal immigrant status *"
  },
  { key: "28", value: "28 Other Community" },
  { key: "29", value: "29 Obtained a job *" },
  {
    key: "30",
    value:
      "30 Interacted one-to-one competently and/or participated as a member of a team"
  },
  { key: "31", value: "31 Planned nutritious meals for a day" },
  { key: "32", value: "32 Read and understood manuals" },
  { key: "33", value: "33 Ordered from restaurant and fast food menus" },
  { key: "34", value: "34 Implemented an exercise routine" },
  {
    key: "35",
    value:
      "35 Demonstrated improved conversational skills in social/work settings"
  },
  { key: "36", value: "36 Read and understood work-related information" },
  { key: "37", value: "37 Received a driver’s license *" },
  { key: "38", value: "38 Understood medical and dental forms" },
  { key: "39", value: "39 Improved current job status *" },
  { key: "40", value: "40 Had reduction in receipt of public assistance *" },
  {
    key: "41",
    value: "41 Increased involvement in civic/community activities*"
  },
  { key: "42", value: "42 Retained current job*" },
  {
    key: "43",
    value:
      "43 Understood individual’s legal rights and responsibilities and procedures for obtaining legal advice"
  },
  { key: "44", value: "44 Used library and/or other information services *" },
  { key: "45", value: "45 Obtained license or certification" },
  {
    key: "46",
    value:
      "46 Earned a secondary school diploma or achieved a GED certificate *"
  },
  { key: "47", value: "47 Entered other training/educational program *" },
  { key: "48", value: "48 Understood help wanted ads" },
  {
    key: "49",
    value:
      "49 Identified learning strengths and used to acquire new information or set up accommodations *"
  },
  {
    key: "50",
    value:
      "50 Demonstrated basic computer skills \u0026 use of common software programs*"
  },
  {
    key: "51",
    value: "51 Registered children for school according to guidelines"
  },
  {
    key: "52",
    value: "52 Read or wrote poems, journal, books, stories, novels"
  },
  { key: "53", value: "53 Conversed with family and friends in English" },
  {
    key: "54",
    value: "54 Filled out job application/has language to interview for job"
  },
  { key: "55", value: "55 Counted and used coins and currency" },
  { key: "56", value: "56 Volunteered in child’s school" },
  { key: "57", value: "57 Helped children with homework" },
  {
    key: "58",
    value: "58 Improved English literacy skills (speaking, reading, writing)*"
  },
  { key: "59", value: "59 Wrote from dictation" },
  { key: "60", value: "60 Arrived at appointments consistently and on time" },
  { key: "61", value: "61 Answered questions about U.S. history/government" },
  { key: "62", value: "62 Completed work forms" },
  {
    key: "63",
    value: "63 Communicated with peers, supervisors, and/or customers"
  },
  { key: "64", value: "64 Selected appropriate housing" },
  {
    key: "65",
    value: "65 Used appropriate health care facilities and services"
  },
  {
    key: "66",
    value: "66 Identified practices that promote mental well-being"
  },
  { key: "67", value: "67 Participated in neighborhood watch activities" },
  { key: "68", value: "68 Read for religious activities" },
  { key: "69", value: "69 Interpreted and paid bills" },
  { key: "70", value: "70 Completed U.S. citizenship class" },
  { key: "71", value: "71 Improved basic literacy skills*" },
  {
    key: "72",
    value:
      "72 Interpreted maps/transportation schedules or asked for directions"
  }
];

const GetGoalsDesc_LitZone = [
  { key: "29", value: "Application to Child Health Plus completed" },
  { key: "30", value: "Application to Healthy New York completed" },
  { key: "2967", value: "applied for health benefits (self) *" },
  { key: "1", value: "Describe symptoms of an illness" },
  { key: "2694", value: "Get Flu Vaccination *" },
  { key: "4", value: "Implement a daily exercise routine" },
  { key: "2", value: "Participated in Health screening" },
  { key: "3", value: "Plan nutritious meals" },
  { key: "3485", value: "Prescription Vocabulary Learning *" },
  { key: "3803", value: "Read a Doctor\u0027s Handwriting *" },
  { key: "3857", value: "Read Blood Test Results *" },
  { key: "3860", value: "Read health brochure 3 *" },
  { key: "3734", value: "Read Healthcare Application *" },
  { key: "6", value: "Seek assistance with mental health" },
  { key: "3819", value: "Signed up for Health Insurance *" },
  { key: "31", value: "Student secures primary care physician" },
  { key: "32", value: "Student secures primary pediatrician for children" },
  { key: "5", value: "Use health care facilities and services " }
];
const GetLitZoneReferralSite_LitZone = [
  { key: "PRALZ2828", value: "ASISTS Data Services" },
  { key: "PRALZ2881", value: "Example Partner" },
  { key: "PRALZ2897", value: "Literacy Assistance Center-FiDi" },
  { key: "PRALZ5768", value: "New Partner" },
  { key: "PRALZ2923", value: "WeWork FiDi" },
  { key: "PRALZ2410", value: "ZZZ_Red Cross" }
];
const GetOutcomeDesc_WIOA = [
  { key: "2", value: "2 Employed" },
  { key: "5", value: "5 Received HSE/Secondary School Diploma" },
  { key: "5DP", value: "5DP Achieved HSE by completing NEDP" },
  {
    key: "5RG",
    value: "5RG Achieved HSE by completing the fourth pathway (Attachment R)"
  },
  { key: "7", value: "7 Enter Postsecondary instruction/Training" },
  { key: "9", value: "9 Attained a Postsecondary Credential" },
  { key: "N2", value: "N2 Not Employed" },
  { key: "N5", value: "N5 Did Not Receive HSE/Secondary School Diploma" },
  { key: "N7", value: "N7 Did Not Enter Postsecondary instruction/Training" },
  { key: "N9", value: "N9 Did Not Attain a Postsecondary Credential" },
  { key: "NS", value: "NS Did Not Survey" },
  { key: "8", value: "8 Sample outcome, not listed" },
  { key: "F2", value: "F2 Sample outcome, not listed" }
];
const GetOutcomeinfo_EFF = [
  {
    ID: "67",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    GoalID: "1",
    FY: null,
    SetGoal: "checked",
    ShowProgress: "checked",
    ShowProficiency: "checked",
    Description:
      "1 Read to children regularly/increased literacy practices in the home *",
    Student_PKID: "1048303"
  },
  {
    ID: "279326",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    GoalID: "15",
    FY: null,
    SetGoal: "checked",
    ShowProgress: "checked",
    ShowProficiency: "",
    Description: "15 Used postal services",
    Student_PKID: "1048303"
  },
  {
    ID: "298406",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    GoalID: "20",
    FY: null,
    SetGoal: "checked",
    ShowProgress: "checked",
    ShowProficiency: "",
    Description: "20 Complete loan/credit application",
    Student_PKID: "1048303"
  },
  {
    ID: "279343",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    GoalID: "6",
    FY: null,
    SetGoal: "",
    ShowProgress: "checked",
    ShowProficiency: "",
    Description: "6 Read a medication bottle",
    Student_PKID: "1048303"
  }
];
const GetOutcomeinfo_WIOA = [
  {
    ID: "2747359",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Employed",
    OutcomeFY: "2020",
    Quarter: "2",
    OutcomeID: "2",
    OutcomeDate: "",
    SurveyDate: "10/30/2019",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "20000",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2728121",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Employed",
    OutcomeFY: "2019",
    Quarter: "3",
    OutcomeID: "2",
    OutcomeDate: "",
    SurveyDate: "02/01/2019",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "2232",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2788080",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Attained a Postsecondary Credential",
    OutcomeFY: "2019",
    Quarter: "2",
    OutcomeID: "9",
    OutcomeDate: "",
    SurveyDate: "",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "3",
    CredentialDesc: "Certified Nursing Assistant",
    CredentialFileName: "NYRS_PE_RCHL_06172019.pdf",
    Student_PKID: "1048303"
  },
  {
    ID: "2762118",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Attained a Postsecondary Credential",
    OutcomeFY: "2019",
    Quarter: "4",
    OutcomeID: "9",
    OutcomeDate: "07/25/2019",
    SurveyDate: "07/25/2019",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2693488",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Employed",
    OutcomeFY: "2018",
    Quarter: "1",
    OutcomeID: "2",
    OutcomeDate: "",
    SurveyDate: "10/15/2017",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "5000",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2698893",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Employed",
    OutcomeFY: "2018",
    Quarter: "3",
    OutcomeID: "2",
    OutcomeDate: "",
    SurveyDate: "",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2688142",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Received HSE/Secondary School Diploma",
    OutcomeFY: "2018",
    Quarter: "2",
    OutcomeID: "5",
    OutcomeDate: "",
    SurveyDate: "10/13/2018",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2679181",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Got involved in children\u0027s education",
    OutcomeFY: "2018",
    Quarter: "1",
    OutcomeID: "N5",
    OutcomeDate: "",
    SurveyDate: "",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2622767",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Placed in training",
    OutcomeFY: "2017",
    Quarter: "2",
    OutcomeID: "8",
    OutcomeDate: "",
    SurveyDate: "02/20/2017",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2641707",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Got involved in children\u0027s literacy activities",
    OutcomeFY: "2017",
    Quarter: "2",
    OutcomeID: "F2",
    OutcomeDate: "",
    SurveyDate: "",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2589411",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Placed in training",
    OutcomeFY: "2016",
    Quarter: "4",
    OutcomeID: "8",
    OutcomeDate: "07/15/2016",
    SurveyDate: "05/15/2016",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "2127844",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Placed in training",
    OutcomeFY: "2013",
    Quarter: "4",
    OutcomeID: "8",
    OutcomeDate: "",
    SurveyDate: "06/07/2013",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  },
  {
    ID: "1919504",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    Description: "Entered Employment",
    OutcomeFY: "2012",
    Quarter: "2",
    OutcomeID: "2",
    OutcomeDate: "",
    SurveyDate: "05/21/2012",
    Employer: "lac",
    EmployDate: "12/09/2021",
    Income: "",
    NYSED_CredentialID: "",
    CredentialDesc: "",
    CredentialFileName: "",
    Student_PKID: "1048303"
  }
];
const GetQuarter = [
  { key: "1", value: "1" },
  { key: "2", value: "2" },
  { key: "3", value: "3" },
  { key: "4", value: "4" }
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
