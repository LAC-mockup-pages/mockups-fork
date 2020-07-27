
// This object is the source for look up event dropdown on profdev_info page
// After select, ID value is passed to GetRoster stored procedure

const ProfDevEventsRoster = [
  {"ProfDevActivityID":"PRA12112014_4015","ID":4015,"ActNameDesc":"Asists - 12/11/14"},
  {"ProfDevActivityID":"PRA08052017_8898","ID":8898,"ActNameDesc":"ASISTS Build 10.4  - 08/05/17"},
  {"ProfDevActivityID":"PRA02282010_153","ID":153,"ActNameDesc":"asists Data entry Training - 02/28/10"},
  {"ProfDevActivityID":"PRA08162016_8932","ID":8932,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"},
  {"ProfDevActivityID":"PRA08162016_8933","ID":8933,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"}
  ]


// This object is the source for form on profdev_info page
// ID value from dropdown is passed to GetProvDevInfo stored procedure

const  ProfDevEventsInfo= [
    {"ID":"4015","ProfDevActivityName":"Asists","ProfDevDescription":"morning","ProfDevDate":"12/11/2014","ProfDevProviderID":"528","ProfDevFY":"2014","ProfDevCategoryID":"53","ProfDevSubjectID":"1","ProfDevHours":"","ProfDevLocationID":"46","ProfDevFacilitator1":"1026","ProfDevFacilitator2":"2184","ProfDevFacilitator3":"2160","ProfDevFeeCharged":"","RAENEvent":"0","ProfDevComments":"","ProfDevTimeFrom":"","ProfDevTimeTo":""}, {"ID":"4321","ProfDevActivityName":"ASISTS for Beginners","ProfDevDescription":"afternoon","ProfDevDate":"11/01/2016","ProfDevProviderID":"959","ProfDevFY":"2017","ProfDevCategoryID":"26","ProfDevSubjectID":"6","ProfDevHours":"7","ProfDevLocationID":"1591","ProfDevFacilitator1":"2305","ProfDevFacilitator2":"","ProfDevFacilitator3":"","ProfDevFeeCharged":"500.00","RAENEvent":"1","ProfDevComments":"Great training.","ProfDevTimeFrom":"9:00AM","ProfDevTimeTo":"5:00PM"}
    ]


// This object is the source for table on profdev_roster page
// ID value from dropdown is passed to GetProvDevRoster stored procedure
// Key ID fields have been included

const ProfDevRoster =[
{"ID":"20828","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"24224","PersonnelID":"cuesuzyPRA14","Name":"cue, suzy","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
{"ID":"20827","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"23853","PersonnelID":"DainMichillePRA19","Name":"Dains, Michille","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
{"ID":"20829","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"23433","PersonnelID":"Thomas # 13MarcellasPRA9","Name":"Thomas # 13, Marcellas","Date":"12/11/2014","Attended":"False","FeesPaid":"False"},{"ID":"20831","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"24228","PersonnelID":"JonesTomPRA14","Name":"Jones, Tom","Date":"12/11/2014","Attended":"True","FeesPaid":"True"},

]

//!  Do not Use -
// const  ProfDevRoster =[
//   {"ID":"20828","AgencyID":"PRA","PersonnelID":"cuesuzyPRA14","Name":"cue, suzy","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},{"ID":"20827","AgencyID":"PRA","PersonnelID":"DainMichillePRA19","Name":"Dains, Michille","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
//   {"ID":"20831","AgencyID":"PRA","PersonnelID":"JonesTomPRA14","Name":"Jones, Tom","Date":"12/11/2014","Attended":"True","FeesPaid":"True"},{"ID":"20829","AgencyID":"PRA","PersonnelID":"Thomas # 13MarcellasPRA9","Name":"Thomas # 13, Marcellas","Date":"12/11/2014","Attended":"False","FeesPaid":"False"}
//   ]


// This object is the source for Region dropdown on add new attendee on profdev_roster page
// After select, ID value is passed to GetAgency stored procedure to filter agency list

  const Region = [
  {"RAENID":"CN"},
  {"RAENID":"CST"},
  {"RAENID":"FL"},
  {"RAENID":"HV"},
  {"RAENID":"LI"},
  {"RAENID":"NY"},
  {"RAENID":"NYSED"},
  {"RAENID":"WEST"}
  ]


// This object is the source for Agency dropdown on add new attendee on profdev_roster page
// After select, ID value is passed to GetStaff stored procedure to filter personnel name list

const Agency = [
  {"AgencyID":"PRA","AgencyName":"Practice Agency","RAENID":"NY"},
  {"AgencyID":"TEST1","AgencyName":"Test Agency 1","RAENID":"NY"},
  {"AgencyID":"TEST2","AgencyName":"Test Agency 2", "RAENID":"WEST"},
  {"AgencyID":"TEST3","AgencyName":"Test Agency 3","RAENID":"LI"}
  ]


// This object is the source for Personnel Name dropdown on add new attendee on profdev_roster page
// After select, ID and PersonnelID values should be saved to database
// PersonnelID is saved for legacy queries

const Staff = [
{"ID":"","PersonnelID":"","Name":""},
{"ID":"28555","PersonnelID":"AlfieriShelleyPRA1","Name":"Alfieri, Shelley"},
{"ID":"24386","PersonnelID":"AlisovaMurianaPRA9","Name":"Alisova, Muriana"},
{"ID":"24234","PersonnelID":"BarnesJuliaPRA14","Name":"Barnes, Julia"},
{"ID":"28083","PersonnelID":"PorterJanePRA9","Name":"Porter, Jane"},
{"ID":"51033","PersonnelID":"ScottAdamPRA9","Name":"Scott, Adam"},
{"ID":"51442","PersonnelID":"SilversRayleighPRA18","Name":"Silvers, Rayleigh"},
{"ID":"52916","PersonnelID":"ZoroRoronoaPRA9","Name":"Zoro, Roronoa"}
]


  //! Do Not Use -
// const Staff = [
//   {"PersonnelID":"","Name":""},
//   {"PersonnelID":"AlfieriShelleyPRA1","Name":"Alfieri, Shelley"},
//   {"PersonnelID":"AlisovaMurianaPRA9","Name":"Alisova, Muriana"},
//   {"PersonnelID":"BarnesJuliaPRA14","Name":"Barnes, Julia"},
//   {"PersonnelID":"PorterJanePRA9","Name":"Porter, Jane"},
//   {"PersonnelID":"ScottAdamPRA9","Name":"Scott, Adam"},{"PersonnelID":"SilversRayleighPRA18","Name":"Silvers, Rayleigh"},
//   {"PersonnelID":"ZoroRoronoaPRA9","Name":"Zoro, Roronoa"}
//   ]


const Categories = [
  {"CATEGORYID":50,"Category":"ABE/HSE"},
  {"CATEGORYID":1,"Category":"Assessment"},
  {"CATEGORYID":53,"Category":"Common Core Content Related"},
  {"CATEGORYID":52,"Category":"Common Core Instructional Practice"},
  {"CATEGORYID":26,"Category":"Data/ASISTS"},
  {"CATEGORYID":55,"Category":"Distance Learning"},
  {"CATEGORYID":51,"Category":"ESOL"}
  ]


const  Subjects = [
  {"SubjectID":1,"SubjectDesc":"ELA"},
  {"SubjectID":2,"SubjectDesc":"Social Studies"},
  {"SubjectID":3,"SubjectDesc":"Science"},
  {"SubjectID":4,"SubjectDesc":"Math"},
  {"SubjectID":5,"SubjectDesc":"Career Pathways"},
  {"SubjectID":6,"SubjectDesc":"ESL"}
  ]


const Facilitator =  [
  {"ID":"1","FacFirstName":"test1","FacLastName":"new","Address":"","City":"","State":"NY","Zip":"","HomePhone":"2125555555","Email":"qqwwqq","CellPhone":"","AlternatePhone":""},{"ID":"1026","FacFirstName":"Vutha","FacLastName":"Nguy","Address":"","City":"","State":"NY","Zip":"","HomePhone":"1111111111","Email":"vnguy@dycd.com","CellPhone":"","AlternatePhone":""},{"ID":"2184","FacFirstName":"Lizelena","FacLastName":"Iglesias","Address":"89 Broad Street","City":"New York","State":"NY","Zip":"10009","HomePhone":"2125556987","Email":"","CellPhone":"3475555896","AlternatePhone":""},{"ID":"2305","FacFirstName":"Srikanth","FacLastName":"Srinivasan","Address":"85 Broad Street ","City":"New York ","State":"NY","Zip":"11246","HomePhone":"2125554692","Email":"pra@asists.com","CellPhone":"","AlternatePhone":""},{"ID":"2160","FacFirstName":"Raju","FacLastName":"Srinivasan","Address":"455 5th Avenue ","City":"New York City ","State":"NY","Zip":"10016","HomePhone":"2125555555","Email":"rajus@lacnyc.org","CellPhone":"","AlternatePhone":""}
  ]

const Locations =  [
  {"ID":"1","FacilityName":"loco1","Address":"","City":"","State":"NY","Zip":"","Phone":"(___) ___-____","Email":""},{"ID":"46","FacilityName":"Utica","Address":"309 Genessee Street","City":"Utica","State":"NY","Zip":"","Phone":"","Email":""},{"ID":"812","FacilityName":"DYCD","Address":"","City":"","State":"NY","Zip":"","Phone":"","Email":""},{"ID":"1534","FacilityName":"LAC-FiDi","Address":"89 Broad Street ","City":"New York City ","State":"NY","Zip":"10003","Phone":"2125553699","Email":""},{"ID":"1591","FacilityName":"Literacy Assistance Center","Address":"85 Broad Street ","City":"New York ","State":"NY","Zip":"10004","Phone":"2125553355","Email":""}
  ]

const Providers =  [
  {"ID":"528","ProviderName":"DYCD","Address":"","City":"","State":"NY","Zip":"","Phone":"0000000000","Email":"000"},{"ID":"959","ProviderName":"LAC-FIDI","Address":"89 Broad Street","City":"New York","State":"NY","Zip":"10009","Phone":"2125558035","Email":""},{"ID":"992","ProviderName":"Literacy Assistance Center ","Address":"85 Broad Street ","City":"New York ","State":"NY","Zip":"10004","Phone":"2125553355","Email":"pra@asists.com"},{"ID":"1","ProviderName":"provider1","Address":"","City":"","State":"NY","Zip":"","Phone":"2125555555","Email":"ggffghgfh"}
  ]

  const FiscalYear = [
    {"FiscalYear":"2021"},
    {"FiscalYear":"2020"},
    {"FiscalYear":"2019"},
    {"FiscalYear":"2018"},
    {"FiscalYear":"2017"},
    {"FiscalYear":"2016"},
    {"FiscalYear":"2015"},
    {"FiscalYear":"2014"}
    ]

  const sessionVariable = {
    AgencyID: "PRA",
    AuditUserID: '<%= Session["UserID"] %>',
    };

  const States = [
    { "Abbrev": "AL", "State": "Alabama" },
    { "Abbrev": "AS", "State": "American Samoa" },
    { "Abbrev": "AK", "State": "Alaska" },
    { "Abbrev": "AZ", "State": "Arizona" },
    { "Abbrev": "AR", "State": "Arkansas" },
    { "Abbrev": "CA", "State": "California" },
    { "Abbrev": "CO", "State": "Colorado" },
    { "Abbrev": "CT", "State": "Connecticut" },
    { "Abbrev": "DE", "State": "Delaware" },
    { "Abbrev": "DC", "State": "District Of Columbia" },
    { "Abbrev": "FM", "State": "Federated States Of Micronesia" },
    { "Abbrev": "FL", "State": "Florida" },
    { "Abbrev": "GA", "State": "Georgia" },
    { "Abbrev": "GU", "State": "Guam" },
    { "Abbrev": "HI", "State": "Hawaii" },
    { "Abbrev": "ID", "State": "Idaho" },
    { "Abbrev": "IL", "State": "Illinois" },
    { "Abbrev": "IN", "State": "Indiana" },
    { "Abbrev": "IA", "State": "Iowa" },
    { "Abbrev": "KS", "State": "Kansas" },
    { "Abbrev": "KY", "State": "Kentucky" },
    { "Abbrev": "LA", "State": "Louisiana" },
    { "Abbrev": "ME", "State": "Maine" },
    { "Abbrev": "MH", "State": "Marshall Islands" },
    { "Abbrev": "MD", "State": "Maryland" },
    { "Abbrev": "MA", "State": "Massachusetts" },
    { "Abbrev": "MI", "State": "Michigan" },
    { "Abbrev": "MN", "State": "Minnesota" },
    { "Abbrev": "MS", "State": "Mississippi" },
    { "Abbrev": "MO", "State": "Missouri" },
    { "Abbrev": "MT", "State": "Montana" },
    { "Abbrev": "NE", "State": "Nebraska" },
    { "Abbrev": "NV", "State": "Nevada" },
    { "Abbrev": "NH", "State": "New Hampshire" },
    { "Abbrev": "NJ", "State": "New Jersey" },
    { "Abbrev": "NM", "State": "New Mexico" },
    { "Abbrev": "NY", "State": "New York" },
    { "Abbrev": "NC", "State": "North Carolina" },
    { "Abbrev": "ND", "State": "North Dakota" },
    { "Abbrev": "MP", "State": "Northern Mariana Islands" },
    { "Abbrev": "OH", "State": "Ohio" },
    { "Abbrev": "OK", "State": "Oklahoma" },
    { "Abbrev": "OR", "State": "Oregon" },
    { "Abbrev": "PW", "State": "Palau" },
    { "Abbrev": "PA", "State": "Pennsylvania" },
    { "Abbrev": "PR", "State": "Puerto Rico" },
    { "Abbrev": "RI", "State": "Rhode Island" },
    { "Abbrev": "SC", "State": "South Carolina" },
    { "Abbrev": "SD", "State": "South Dakota" },
    { "Abbrev": "TN", "State": "Tennessee" },
    { "Abbrev": "TX", "State": "Texas" },
    { "Abbrev": "UT", "State": "Utah" },
    { "Abbrev": "VT", "State": "Vermont" },
    { "Abbrev": "VI", "State": "Virgin Islands" },
    { "Abbrev": "VA", "State": "Virginia" },
    { "Abbrev": "WA", "State": "Washington" },
    { "Abbrev": "WV", "State": "West Virginia" },
    { "Abbrev": "WI", "State": "Wisconsin" },
    { "Abbrev": "WY", "State": "Wyoming" },
      ];
