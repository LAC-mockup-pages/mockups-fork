// Constants used by all pages

const SESSION_VARIABLE = [
  {
    ID: '<%= Session["ID"] %>',
    AgencyID: '<%= Session["AgencyID"] %>',
    AgencyPKID: '<%= Session["AgencyPKID"] %>',
    AgencyName: '<%= Session["AgencyName"] %>',
    AuditUserID: '<%= Session["UserID"] %>',
    FiscalYear: '<%= Session["CFY"] %>',
    rolename: '<%= Session["RoleName"] %>',
    UserSiteID: '<%= Session["UserSiteID"] %>',
    uname: '<%= Session["uname"] %>',
    fullname: '<%= Session["fullname"] %>',
    UserPersonnelID: '<%= Session["UserPersonnelID"] %>',
    SecurityLevel: '<%= Session["SecurityLevel"] %>',
    UserLevel: '<%= Session["UserLevel"] %>',
    CanExportData: '<%= Session["CanExportData"] %>',
    PrevAgency: "False"
  }
];

const DDL_STATES = [
  { objKey: "AL", objValue: "Alabama" },
  { objKey: "AS", objValue: "American Samoa" },
  { objKey: "AK", objValue: "Alaska" },
  { objKey: "AZ", objValue: "Arizona" },
  { objKey: "AR", objValue: "Arkansas" },
  { objKey: "CA", objValue: "California" },
  { objKey: "CO", objValue: "Colorado" },
  { objKey: "CT", objValue: "Connecticut" },
  { objKey: "DE", objValue: "Delaware" },
  { objKey: "DC", objValue: "District Of Columbia" },
  { objKey: "FM", objValue: "Federated States Of Micronesia" },
  { objKey: "FL", objValue: "Florida" },
  { objKey: "GA", objValue: "Georgia" },
  { objKey: "GU", objValue: "Guam" },
  { objKey: "HI", objValue: "Hawaii" },
  { objKey: "ID", objValue: "Idaho" },
  { objKey: "IL", objValue: "Illinois" },
  { objKey: "IN", objValue: "Indiana" },
  { objKey: "IA", objValue: "Iowa" },
  { objKey: "KS", objValue: "Kansas" },
  { objKey: "KY", objValue: "Kentucky" },
  { objKey: "LA", objValue: "Louisiana" },
  { objKey: "ME", objValue: "Maine" },
  { objKey: "MH", objValue: "Marshall Islands" },
  { objKey: "MD", objValue: "Maryland" },
  { objKey: "MA", objValue: "Massachusetts" },
  { objKey: "MI", objValue: "Michigan" },
  { objKey: "MN", objValue: "Minnesota" },
  { objKey: "MS", objValue: "Mississippi" },
  { objKey: "MO", objValue: "Missouri" },
  { objKey: "MT", objValue: "Montana" },
  { objKey: "NE", objValue: "Nebraska" },
  { objKey: "NV", objValue: "Nevada" },
  { objKey: "NH", objValue: "New Hampshire" },
  { objKey: "NJ", objValue: "New Jersey" },
  { objKey: "NM", objValue: "New Mexico" },
  { objKey: "NY", objValue: "New York" },
  { objKey: "NC", objValue: "North Carolina" },
  { objKey: "ND", objValue: "North Dakota" },
  { objKey: "MP", objValue: "Northern Mariana Islands" },
  { objKey: "OH", objValue: "Ohio" },
  { objKey: "OK", objValue: "Oklahoma" },
  { objKey: "OR", objValue: "Oregon" },
  { objKey: "PW", objValue: "Palau" },
  { objKey: "PA", objValue: "Pennsylvania" },
  { objKey: "PR", objValue: "Puerto Rico" },
  { objKey: "RI", objValue: "Rhode Island" },
  { objKey: "SC", objValue: "South Carolina" },
  { objKey: "SD", objValue: "South Dakota" },
  { objKey: "TN", objValue: "Tennessee" },
  { objKey: "TX", objValue: "Texas" },
  { objKey: "UT", objValue: "Utah" },
  { objKey: "VT", objValue: "Vermont" },
  { objKey: "VI", objValue: "Virgin Islands" },
  { objKey: "VA", objValue: "Virginia" },
  { objKey: "WA", objValue: "Washington" },
  { objKey: "WV", objValue: "West Virginia" },
  { objKey: "WI", objValue: "Wisconsin" },
  { objKey: "WY", objValue: "Wyoming" }
];
