//* Data objects for Landing Page
//*=================================

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

const GetNotes = [
  {
    ID: "444133",
    Student_PKID: "1048303",
    KeyCodeID: "0",
    ContactDate: "06/09/2019",
    ContactDesc: "Telephone",
    ContactName: "Melfi, Jennifer",
    ContactHours: "1.5",
    ContactNotes: "Test RS 12.5",
    KeyCodeDescription: "ST-2 Secondary Education/Training - Severity Medium",
    Attachment: "",
    AttachmentLink: ""
  },
  {
    ID: "385441",
    Student_PKID: "1048303",
    KeyCodeID: "0",
    ContactDate: "06/02/2018",
    ContactDesc: "Telephone",
    ContactName: "Donovan, Ray",
    ContactHours: "0.5",
    ContactNotes: "RS Test 11.4",
    KeyCodeDescription: "",
    Attachment: "",
    AttachmentLink: ""
  },
  {
    ID: "376501",
    Student_PKID: "1048303",
    KeyCodeID: "0",
    ContactDate: "04/07/2018",
    ContactDesc: "Telephone",
    ContactName: "Silvers, Rayleigh",
    ContactHours: "0.5",
    ContactNotes: "Test RS 11.3",
    KeyCodeDescription: "",
    Attachment: "",
    AttachmentLink: ""
  },
  {
    ID: "282027",
    Student_PKID: "1048303",
    KeyCodeID: "30",
    ContactDate: "08/23/2016",
    ContactDesc: "Case Manager",
    ContactName: "Dains, Michille",
    ContactHours: "6",
    ContactNotes:
      "NI-2 Fathi has an excellent resume, reference list, and a letter of rec. from his new supervisor at Wegmans stating his work ethic is excellent as he always arrives to his job early.",
    KeyCodeDescription: "DA-1 Discipline - Severity Low",
    Attachment: "",
    AttachmentLink: ""
  },
  {
    ID: "277915",
    Student_PKID: "1048303",
    KeyCodeID: "0",
    ContactDate: "07/15/2016",
    ContactDesc: "Telephone",
    ContactName: "Porter, Samantha",
    ContactHours: "",
    ContactNotes: "test ASISTS 9.5",
    KeyCodeDescription: "",
    Attachment: "",
    AttachmentLink: ""
  },
  {
    ID: "198694",
    Student_PKID: "1048303",
    KeyCodeID: "0",
    ContactDate: "03/06/2015",
    ContactDesc: "Message",
    ContactName: "Alfieri, Shelley",
    ContactHours: "",
    ContactNotes: "test",
    KeyCodeDescription: "",
    Attachment: "",
    AttachmentLink: ""
  },
  {
    ID: "198268",
    Student_PKID: "1048303",
    KeyCodeID: "2",
    ContactDate: "03/05/2015",
    ContactDesc: "Telephone",
    ContactName: "Buran, David",
    ContactHours: "2.5",
    ContactNotes: "test",
    KeyCodeDescription: "AD-2 Addiction - Severity Medium",
    Attachment: "",
    AttachmentLink: ""
  }
];

const GetContactTypeSource = [
  { key: "1", value: "Telephone" },
  { key: "2", value: "Message" },
  { key: "3", value: "Mail" },
  { key: "4", value: "Case Manager" },
  { key: "5", value: "Counselor" },
  { key: "6", value: "In Person" },
  { key: "7", value: "CMP" }
];

const GetInstructorSource = [
  { key: "0", value: "" },
  { key: "51885", value: "Aaaa, Rrr" },
  { key: "28555", value: "Alfieri, Shelley" },
  { key: "24386", value: "Alisova, Muriana" },
  { key: "24234", value: "Barnes, Julia" },
  { key: "52310", value: "Bartowksi, Charles" },
  { key: "51590", value: "Blade, Senua" },
  { key: "51065", value: "Brady, Tom" },
  { key: "33828", value: "Campbell, Don" },
  { key: "53190", value: "Charlotin, Wilson" },
  { key: "51261", value: "Cooper, Dale" },
  { key: "47016", value: "Cooper, Gary " },
  { key: "23853", value: "Dains, Michille" },
  { key: "56402", value: "Dante, Elizabeth" },
  { key: "46763", value: "Donovan, Ray" },
  { key: "45229", value: "Dryja, Kelly " },
  { key: "23847", value: "EEESS, JLNAA" },
  { key: "49708", value: "Frazier, Clyde" },
  { key: "1359", value: "Frown, Janice" },
  { key: "52619", value: "Fuller, Martin" },
  { key: "27812", value: "GEORGIA, WASHINGTON" },
  { key: "50951", value: "Hyde, Steven" },
  { key: "44988", value: "John, Laura" },
  { key: "53184", value: "Johnson, Norma" },
  { key: "47045", value: "jones, fred" },
  { key: "51968", value: "Jones, Yoga" },
  { key: "54035", value: "Katie, LaBonte" },
  { key: "49118", value: "Kenobi, General" },
  { key: "25120", value: "MacAlinney, MARY" },
  { key: "38951", value: "McConnell07, Grace" },
  { key: "35612", value: "mehmet, ayfer" },
  { key: "50202", value: "Melfi, Jennifer" },
  { key: "44987", value: "Peet, Tammy " },
  { key: "28083", value: "Porter, Jane" },
  { key: "2256", value: "Porter, Samantha" },
  { key: "51033", value: "Scott, Adam" },
  { key: "51442", value: "Silvers, Rayleigh" },
  { key: "24202", value: "Sines, Kelly" },
  { key: "51884", value: "Smith, Jon" },
  { key: "47093", value: "Smith, Mary" },
  { key: "2233", value: "Smith, Sharon" },
  { key: "50653", value: "Tanken, Serj" },
  { key: "38704", value: "Taylor, Teresa" },
  { key: "24447", value: "TesterCMP, Venu" },
  { key: "40178", value: "TestThelakkat, Venu" },
  { key: "46765", value: "Vause, Alex" },
  { key: "28561", value: "Woodhams, Mellissa" },
  { key: "53348", value: "Ynoa, Marcos" },
  { key: "52916", value: "Zoro, Roronoa" }
];

const GetKeyCodeSource = [
  { key: "1", value: "AD-1 Addiction - Severity Low" },
  { key: "2", value: "AD-2 Addiction - Severity Medium" },
  { key: "3", value: "AD-3 Addiction - Severity High" },
  { key: "4", value: "AM-1 Anger Management - Severity Low" },
  { key: "5", value: "AM-2 Anger Management - Severity Medium" },
  { key: "6", value: "AM-3 Anger Management - Severity High" },
  { key: "7", value: "AP-1 Analytical Problem Solving - Improvement Needed" },
  { key: "8", value: "AP-2 Analytical Problem Solving - Adequate" },
  { key: "9", value: "AP-3 Analytical Problem Solving - Very Good" },
  { key: "10", value: "AT-0 Attendance Process" },
  { key: "11", value: "AT-1 Attendance - Improvement Needed" },
  { key: "12", value: "AT-2 Attendance - Adequate" },
  { key: "13", value: "AT-3 Attendance - Very Good" },
  { key: "119", value: "AT-4 Attendance – CFC Training" },
  { key: "14", value: "AT-B Attendance - Barrier" },
  { key: "15", value: "AT-C Called Participant - Absent from Class" },
  { key: "16", value: "CD-N Credential - No" },
  { key: "17", value: "CD-Y Credential - Yes" },
  { key: "18", value: "CM-1 Computer - Improvement Needed" },
  { key: "19", value: "CM-2 Computer - Adequate" },
  { key: "20", value: "CM-3 Computer - Very Good" },
  { key: "21", value: "CO-1 Communication - Improvement Needed" },
  { key: "22", value: "CO-2 Communication - Adequate" },
  { key: "23", value: "CO-3 Communication - Very Good" },
  { key: "24", value: "CS-1 Children\u0027s School - Severity Low" },
  { key: "25", value: "CS-2 Children\u0027s School - Severity Medium" },
  { key: "26", value: "CS-3 Children\u0027s School - Severity High" },
  { key: "27", value: "CU-1 Constant Unchanging - Improvement Needed" },
  { key: "28", value: "CU-2 Constant Unchanging - Adequate" },
  { key: "29", value: "CU-3 Constant Unchanging - Very Good" },
  { key: "30", value: "DA-1 Discipline - Severity Low" },
  { key: "31", value: "DA-2 Discipline - Severity Medium" },
  { key: "32", value: "DA-3 Discipline - Severity High" },
  { key: "33", value: "DC-1 Daycare - Severity Low" },
  { key: "34", value: "DC-2 Daycare - Severity Medium" },
  { key: "35", value: "DC-3 Daycare - Severity High" },
  { key: "36", value: "DO-1 Domestic Issue - Severity Low" },
  { key: "37", value: "DO-2 Domestic Issue - Severity Medium" },
  { key: "38", value: "DO-3 Domestic Issue - Severity High" },
  { key: "39", value: "EG-N Educational Gain - No" },
  { key: "40", value: "EG-Y Educational Gain - Yes" },
  { key: "41", value: "EM-1 Employment - Portfolio Ready" },
  { key: "42", value: "EM-2 Employment - Met w/ESG" },
  { key: "43", value: "EM-3 Employment - Resume/Application to Employer" },
  { key: "44", value: "EM-4 Employment - Completed Online Application" },
  { key: "45", value: "EM-5 Employment - Interviewed by Employer" },
  { key: "118", value: "EM-6 Employment – Exit Interview" },
  { key: "46", value: "EM-B Employment - Barrier" },
  { key: "47", value: "EM-N Employment - No" },
  { key: "48", value: "EM-Y Employment - Yes" },
  { key: "49", value: "EX-0 Exit Process" },
  { key: "50", value: "FC-1 Food/Cash - Severity Low" },
  { key: "51", value: "FC-2 Food/Cash - Severity Medium" },
  { key: "52", value: "FC-3 Food/Cash - Severity High" },
  { key: "117", value: "FI-1 FEE Pay Approved" },
  { key: "53", value: "FL-1 Flexibility - Improvement Needed" },
  { key: "54", value: "FL-2 Flexibility - Adequate" },
  { key: "55", value: "FL-3 Flexibility - Very Good" },
  { key: "56", value: "GO-1 Goals - Improvement Needed" },
  { key: "57", value: "GO-2 Goals - Adequate" },
  { key: "58", value: "GO-3 Goals - Very Good" },
  { key: "59", value: "HM-1 Health/Medical - Severity Low" },
  { key: "60", value: "HM-2 Health/Medical - Severity Medium" },
  { key: "61", value: "HM-3 Health/Medical - Severity High" },
  { key: "62", value: "HO-1 Housing - Severity Low" },
  { key: "63", value: "HO-2 Housing - Severity Medium" },
  { key: "64", value: "HO-3 Housing - Severity High" },
  { key: "65", value: "HY-1 Hygiene - Severity Low" },
  { key: "66", value: "HY-2 Hygiene - Severity Medium" },
  { key: "67", value: "HY-3 Hygiene - Severity High" },
  { key: "68", value: "IH-1 Integrity/Honesty - Improvement Needed" },
  { key: "69", value: "IH-2 Integrity/Honesty - Adequate" },
  { key: "70", value: "IH-3 Integrity/Honesty - Very Good" },
  { key: "71", value: "IM-1 Immigration - Severity Low" },
  { key: "72", value: "IM-2 Immigration - Severity Medium" },
  { key: "73", value: "IM-3 Immigration - Severity High" },
  { key: "74", value: "IN-1 Initiative - Improvement Needed" },
  { key: "75", value: "IN-2 Initiative - Adequate" },
  { key: "76", value: "IN-3 Initiative - Very Good" },
  { key: "77", value: "IS-1 Interpersonal - Improvement Needed" },
  { key: "78", value: "IS-2 Interpersonal - Adequate" },
  { key: "79", value: "IS-3 Interpersonal - Very Good" },
  { key: "80", value: "IT-1 Intake - Comments" },
  { key: "120", value: "LG-1 Legal Issue - Severity Low" },
  { key: "121", value: "LG-2 Legal Issue - Severity Medium" },
  { key: "122", value: "LG-3 Legal Issue - Severity High" },
  { key: "81", value: "MH-1 Mental Health - Severity Low" },
  { key: "82", value: "MH-2 Mental Health - Severity Medium" },
  { key: "83", value: "MH-3 Mental Health - Severity High" },
  { key: "84", value: "NI-1 Notable Incident - Improvement Needed" },
  { key: "85", value: "NI-2 Notable Incident - Adequate" },
  { key: "86", value: "NI-3 Notable Incident - Very Good" },
  { key: "87", value: "OR-1 Organizational - Improvement Needed" },
  { key: "88", value: "OR-2 Organizational - Adequate" },
  { key: "89", value: "OR-3 Organizational - Very Good" },
  { key: "90", value: "PA-1 Public Assistance - Severity Low" },
  { key: "91", value: "PA-2 Public Assistance - Severity Medium" },
  { key: "92", value: "PA-3 Public Assistance - Severity High" },
  { key: "93", value: "PR-1 Priorities - Severity Low" },
  { key: "94", value: "PR-2 Priorities - Severity Medium" },
  { key: "95", value: "PR-3 Priorities - Severity High" },
  { key: "96", value: "RI-0 Release of Information Process" },
  { key: "97", value: "RS-1 Resettlement Issue - Severity Low" },
  { key: "98", value: "RS-2 Resettlement Issue - Severity Medium" },
  { key: "99", value: "RS-3 Resettlement Issue - Severity High" },
  { key: "100", value: "SE-1 Social/Emotional - Severity Low" },
  { key: "101", value: "SE-2 Social/Emotional - Severity Medium" },
  { key: "102", value: "SE-3 Social/Emotional - Severity High" },
  { key: "103", value: "ST-1 Secondary Education/Training - Severity Low" },
  { key: "104", value: "ST-2 Secondary Education/Training - Severity Medium" },
  { key: "105", value: "ST-3 Secondary Education/Training - Severity High" },
  { key: "106", value: "SU-0 Follow-up Survey" },
  { key: "107", value: "TP-1 Transportation - Severity Low" },
  { key: "108", value: "TP-2 Transportation - Severity Medium" },
  { key: "109", value: "TP-3 Transportation - Severity High" },
  { key: "110", value: "TR-0 Transfer Process" },
  { key: "111", value: "TW-1 Teamwork - Improvement Needed" },
  { key: "112", value: "TW-2 Teamwork - Adequate" },
  { key: "113", value: "TW-3 Teamwork - Very Good" },
  { key: "114", value: "WE-1 Work Ethic - Improvement Needed" },
  { key: "115", value: "WE-2 Work Ethic - Adequate" },
  { key: "116", value: "WE-3 Work Ethic - Very Good" }
];
