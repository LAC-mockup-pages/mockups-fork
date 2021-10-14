// ddl ???
export const GetStudent_Additional = [
  {
    ID: "1048303",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    CountryID: "HA",
    Status: "Citizen",
    DateSettled: "05/02/2015",
    Languages: "English, French",
    Correctional: "2",
    Institutionalized: "2",
    HeadHouse: "1",
    OtherEd: "1",
    Veteran: "2",
    DislocatedWorker: "2",
    EmployedAt200P: "2",
    RuralResident: "2",
    FamilyLiteracy: "2",
    Parole: "2",
    CommCorrection: "2",
    OtherPopulation: "0",
    OtherDescription: "",
    Referral: "0",
    RefSource: "L",
    RefSourceName: ""
  }
];

// ddl ???
const GetPAStatusInfo = [
  {
    ID: "1543327",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    PACategory: "B | Food Stamps",
    PAFY: "",
    PACaseNum: "",
    PAExhaustTANF: "",
    Student_PKID: "1048303"
  },
  {
    ID: "1870535",
    StudentID: "AA1_JacquesGregoryPRA22620101271987",
    PACategory: "A | TANF",
    PAFY: "",
    PACaseNum: "124555",
    PAExhaustTANF: "",
    Student_PKID: "1048303"
  }
];

// ddlCountry
export const GetCountrySource = [
  { key: "AF", value: "Afghanistan" },
  { key: "AC", value: "Africa" },
  { key: "AB", value: "Albania" },
  { key: "AL", value: "Algeria" },
  { key: "AE", value: "Amerasian" },
  { key: "AS", value: "American Samoa" },
  { key: "AD", value: "Andorra" },
  { key: "AG", value: "Angola" },
  { key: "AI", value: "Anguilla" },
  { key: "AN", value: "Antigua \u0026 Barbuda" },
  { key: "AR", value: "Argentina" },
  { key: "AM", value: "Armenia" },
  { key: "AA", value: "Aruba" },
  { key: "AU", value: "Australia\r\nAT Austria (German)" },
  { key: "AT", value: "Austria" },
  { key: "AZ", value: "Azerbaijan" },
  { key: "BM", value: "Bahamas" },
  { key: "BZ", value: "Bahrain" },
  { key: "BN", value: "Bangladesh" },
  { key: "BA", value: "Barbados" },
  { key: "BS", value: "Belarus" },
  { key: "BG", value: "Belgium" },
  { key: "BE", value: "Belize/British Honduras" },
  { key: "BI", value: "Benin" },
  { key: "BD", value: "Bermuda" },
  { key: "BT", value: "Bhutan" },
  { key: "BO", value: "Bolivia" },
  { key: "BV", value: "Bosnia and Herzegovina" },
  { key: "BW", value: "Botswana" },
  { key: "BR", value: "Brazil" },
  { key: "VB", value: "British West Indies" },
  { key: "BX", value: "Brunei Darussalam" },
  { key: "BL", value: "Bulgaria" },
  { key: "BF", value: "Burkina Faso" },
  { key: "BU", value: "Burma - see Myanmar" },
  { key: "BY", value: "Burundi" },
  { key: "CA", value: "Cambodia" },
  { key: "CM", value: "Cameroon" },
  { key: "CN", value: "Canada" },
  { key: "CS", value: "Canary Islands" },
  { key: "CV", value: "Cape Verde" },
  { key: "CL", value: "Cayman Islands" },
  { key: "CE", value: "Central African Republic" },
  { key: "CD", value: "Chad" },
  { key: "CI", value: "Chile" },
  { key: "CH", value: "China" },
  { key: "CO", value: "Colombia" },
  { key: "CC", value: "Comoros" },
  { key: "CG", value: "Congo" },
  { key: "CR", value: "Costa Rica" },
  { key: "CT", value: "Croatia" },
  { key: "CU", value: "Cuba" },
  { key: "CUR", value: "Curacao" },
  { key: "CY", value: "Cyprus" },
  { key: "CZ", value: "Czech Republic" },
  { key: "DN", value: "Denmark" },
  { key: "DJ", value: "Djibouti" },
  { key: "DO", value: "Dominica" },
  { key: "DR", value: "Dominican Republic" },
  { key: "EC", value: "Ecuador" },
  { key: "EG", value: "Egypt" },
  { key: "ES", value: "El Salvador" },
  { key: "EN", value: "England" },
  { key: "EQ", value: "Equatorial Guinea" },
  { key: "ER", value: "Eritrea" },
  { key: "EA", value: "Estonia" },
  { key: "ET", value: "Ethiopia" },
  { key: "FJ", value: "Fiji" },
  { key: "FI", value: "Finland" },
  { key: "FR", value: "France" },
  { key: "FG", value: "French Guiana" },
  { key: "GO", value: "Gabon" },
  { key: "GB", value: "Gambia" },
  { key: "GG", value: "Georgia" },
  { key: "GM", value: "Germany" },
  { key: "GH", value: "Ghana" },
  { key: "GE", value: "Greece" },
  { key: "GL", value: "Greenland" },
  { key: "GR", value: "Grenada" },
  { key: "GD", value: "Guadeloupe" },
  { key: "GA", value: "Guam" },
  { key: "GU", value: "Guatemala" },
  { key: "GI", value: "Guinea" },
  { key: "GN", value: "Guinea-Bissau" },
  { key: "GY", value: "Guyana" },
  { key: "HA", value: "Haiti" },
  { key: "HO", value: "Honduras" },
  { key: "HK", value: "Hong Kong" },
  { key: "HU", value: "Hungary" },
  { key: "IL", value: "Iceland" },
  { key: "IN", value: "India" },
  { key: "ID", value: "Indonesia" },
  { key: "IR", value: "Iran" },
  { key: "IA", value: "Iraq" },
  { key: "IE", value: "Ireland" },
  { key: "IS", value: "Israel" },
  { key: "IT", value: "Italy" },
  { key: "IC", value: "Ivory Coast" },
  { key: "JA", value: "Jamaica" },
  { key: "JP", value: "Japan" },
  { key: "JO", value: "Jordan" },
  { key: "KZ", value: "Kazakhstan" },
  { key: "KN", value: "Kenya" },
  { key: "KI", value: "Kiribati" },
  { key: "KT", value: "Korea, North" },
  { key: "KO", value: "Korea, South" },
  { key: "KV", value: "Kosovo" },
  { key: "KU", value: "Kuwait" },
  { key: "KY", value: "Kyrgyzstan" },
  { key: "LA", value: "Laos" },
  { key: "LV", value: "Latvia" },
  { key: "LE", value: "Lebanon" },
  { key: "LS", value: "Lesotho" },
  { key: "LB", value: "Liberia" },
  { key: "LY", value: "Libya" },
  { key: "LN", value: "Liechtenstein" },
  { key: "LI", value: "Lithuania" },
  { key: "LU", value: "Luxembourg" },
  { key: "MC", value: "Macao" },
  { key: "MN", value: "Macedonia" },
  { key: "MG", value: "Madagascar" },
  { key: "ML", value: "Malagasy" },
  { key: "MW", value: "Malawi" },
  { key: "MY", value: "Malaya" },
  { key: "MA", value: "Malaysia" },
  { key: "MD", value: "Maldives" },
  { key: "MI", value: "Mali" },
  { key: "MT", value: "Malta" },
  { key: "MH", value: "Marshall Islands" },
  { key: "MR", value: "Martinique" },
  { key: "MF", value: "Mauritania" },
  { key: "MU", value: "Mauritius" },
  { key: "ME", value: "Mexico" },
  { key: "MX", value: "Micronesia" },
  { key: "MV", value: "Moldova aka Moldavia" },
  { key: "MZ", value: "Monaco" },
  { key: "MJ", value: "Mongolia" },
  { key: "MB", value: "Montenegro" },
  { key: "MS", value: "Montserrat" },
  { key: "MO", value: "Morocco" },
  { key: "MQ", value: "Mozambique" },
  { key: "MM", value: "Myanmar" },
  { key: "NB", value: "Namibia" },
  { key: "NU", value: "Nauru" },
  { key: "NP", value: "Nepal" },
  { key: "HL", value: "Netherlands" },
  { key: "NA", value: "Netherlands Antilles" },
  { key: "NE", value: "New Guinea" },
  { key: "NZ", value: "New Zealand" },
  { key: "NI", value: "Nicaragua" },
  { key: "NR", value: "Niger" },
  { key: "NG", value: "Nigeria" },
  { key: "IB", value: "Northern Ireland" },
  { key: "NO", value: "Norway" },
  { key: "OM", value: "Oman" },
  { key: "PA", value: "Pakistan" },
  { key: "PL", value: "Palestine" },
  { key: "PN", value: "Panama" },
  { key: "PX", value: "Papua New Guinea" },
  { key: "PY", value: "Paraguay" },
  { key: "PE", value: "Peru" },
  { key: "PH", value: "Philippines" },
  { key: "PO", value: "Poland" },
  { key: "PG", value: "Portugal" },
  { key: "PR", value: "Puerto Rico" },
  { key: "QA", value: "Qatar" },
  { key: "RI", value: "Reunion Island" },
  { key: "RO", value: "Romania" },
  { key: "RU", value: "Russia" },
  { key: "RW", value: "Rwanda" },
  { key: "WS", value: "Samoa Western" },
  { key: "SAM", value: "Samr" },
  { key: "SH", value: "Sao Tome and Principe" },
  { key: "SA", value: "Saudi Arabia" },
  { key: "SD", value: "Scotland" },
  { key: "SE", value: "Senegal" },
  { key: "SER", value: "Serbia" },
  { key: "SB", value: "Seychelles" },
  { key: "SQ", value: "Sierra Leone" },
  { key: "SI", value: "Singapore" },
  { key: "VR", value: "Slovak Republic" },
  { key: "SS", value: "Slovenia" },
  { key: "SG", value: "Solomon Islands" },
  { key: "SO", value: "Somalia" },
  { key: "SF", value: "South Africa" },
  { key: "SP", value: "Spain" },
  { key: "SR", value: "Sri Lanka" },
  { key: "SC", value: "St. Christopher" },
  { key: "SX", value: "St. Croix" },
  { key: "SJ", value: "St. John" },
  { key: "SK", value: "St. Kitts and Nevis" },
  { key: "SL", value: "St. Lucia" },
  { key: "SM", value: "St. Maarten" },
  { key: "ST", value: "St. Thomas" },
  { key: "SV", value: "St. Vincent \u0026 Grenadines" },
  { key: "SU", value: "Sudan" },
  { key: "SN", value: "Suriname" },
  { key: "SW", value: "Sweden" },
  { key: "SZ", value: "Switzerland" },
  { key: "SY", value: "Syria" },
  { key: "TA", value: "Taiwan" },
  { key: "TZ", value: "Tajikistan" },
  { key: "TAN", value: "Tanzania" },
  { key: "TH", value: "Thailand" },
  { key: "TI", value: "Tibet" },
  { key: "TO", value: "Togo" },
  { key: "TG", value: "Tonga" },
  { key: "TR", value: "Trinidad and Tobago" },
  { key: "TN", value: "Tunisia" },
  { key: "TU", value: "Turkey" },
  { key: "TK", value: "Turkmenistan" },
  { key: "TV", value: "Tuvalu" },
  { key: "VL", value: "U.S. Virgin Islands" },
  { key: "UG", value: "Uganda" },
  { key: "UK", value: "Ukraine" },
  { key: "UA", value: "United Arab Emirates" },
  { key: "US", value: "United States" },
  { key: "U", value: "Unknown" },
  { key: "UR", value: "Uruguay" },
  { key: "UZ", value: "Uzbekistan" },
  { key: "VA", value: "Vanuatu" },
  { key: "VE", value: "Venezuela" },
  { key: "VI", value: "Vietnam" },
  { key: "YE", value: "Yemen" },
  { key: "YU", value: "Yugoslavia" },
  { key: "ZI", value: "Zaire" },
  { key: "ZM", value: "Zambia" },
  { key: "ZW", value: "Zimbabwe" }
];

// ddlIdentity
const GetEthnicity = [
  { key: "H", value: "Hispanic/Latino" },
  { key: "N", value: "Non-Hispanic/Latino" }
];

// ddlIdentity
const GetNationality = [
  { key: "Citizen", value: "Citizen" },
  { key: "Refugee", value: "Refugee" },
  { key: "Immigrant", value: "Immigrant" }
];

// ddlPAType
const GetPASource = [
  { key: "A", value: "A | TANF" },
  { key: "B", value: "B | Food Stamps" },
  { key: "C", value: "C | Refugee Cash Assistance" },
  { key: "D", value: "D | Old-age Assistance" },
  { key: "E", value: "E | Safety Net" },
  { key: "F", value: "F | Aid to Blind/Totally Disabled" },
  { key: "NA", value: "NA | Not Receiving" },
  { key: "O", value: "O | Other" },
  { key: "S", value: "S | SSI" }
];

// ddlReferralSource
const GetReferralSource = [
  { key: "A", value: "A | Another student" },
  { key: "Z", value: "Z | Brochure" },
  { key: "Y", value: "Y | Church" },
  { key: "T", value: "T | Doctor" },
  { key: "F", value: "F | Education program" },
  { key: "S", value: "S | Employer" },
  { key: "D", value: "D | Friend or relative" },
  { key: "I", value: "I | GED program" },
  { key: "L", value: "L | Library" },
  { key: "Q", value: "Q | Literacy Hotline" },
  { key: "C", value: "C | Newspaper" },
  { key: "J", value: "J | One-Stop" },
  { key: "O", value: "O | Other Literacy Organization" },
  { key: "AD", value: "AD | Other Volunteer" },
  { key: "X", value: "X | Other, specify" },
  { key: "M", value: "M | Phonebook" },
  { key: "AC", value: "AC | Public Relations Talk" },
  { key: "K", value: "K | Radio" },
  { key: "H", value: "H | Recruitment poster/flyer" },
  { key: "P", value: "P | Returning Student" },
  { key: "E", value: "E | Social service agency" },
  { key: "AA", value: "AA | Special Events" },
  { key: "G", value: "G | Training program" },
  { key: "B", value: "B | TV" },
  { key: "AE", value: "AE | Verizon Literacy University (VLU)" },
  { key: "AB", value: "AB | Volunteer Center" },
  { key: "W", value: "W | Walk In" },
  { key: "N", value: "N | Web Site" },
  { key: "R", value: "R | Workers Union" }
];
