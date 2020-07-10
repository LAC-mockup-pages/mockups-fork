
This object is the source for look up event dropdown on profdev_info page 
After select, ID value is passed to GetRoster stored procedure
 
ProfDevEvents = [
  {"ProfDevActivityID":"PRA12112014_4015","ID":4015,"ActNameDesc":"Asists - 12/11/14"},
  {"ProfDevActivityID":"PRA08052017_8898","ID":8898,"ActNameDesc":"ASISTS Build 10.4  - 08/05/17"},
  {"ProfDevActivityID":"PRA02282010_153","ID":153,"ActNameDesc":"asists Data entry Training - 02/28/10"},
  {"ProfDevActivityID":"PRA08162016_8932","ID":8932,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"},
  {"ProfDevActivityID":"PRA08162016_8933","ID":8933,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"}
  ]
  

This object is the source for form on profdev_info page  
ID value from dropdown is passed to GetProvDevInfo stored procedure

  ProfDevEvents2= [
    {"ID":"4015","ProfDevActivityName":"Asists","ProfDevDescription":"morning","ProfDevDate":"12/11/2014","ProfDevProviderID":"528","ProfDevFY":"2014","ProfDevCategoryID":"53","ProfDevSubjectID":"1","ProfDevHours":"","ProfDevLocationID":"46","ProfDevFacilitator1":"1026","ProfDevFacilitator2":"2184","ProfDevFacilitator3":"2160","ProfDevFeeCharged":"","RAENEvent":"0","ProfDevComments":"","ProfDevTimeFrom":"","ProfDevTimeTo":""}
    ]


This object is the source for table on profdev_roster page  
ID value from dropdown is passed to GetProvDevRoster stored procedure 
Key ID fields have been included 

ProfDevRoster =[
{"ID":"20828","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"24224","PersonnelID":"cuesuzyPRA14","Name":"cue, suzy","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
{"ID":"20827","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"23853","PersonnelID":"DainMichillePRA19","Name":"Dains, Michille","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
{"ID":"20831","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"24228","PersonnelID":"JonesTomPRA14","Name":"Jones, Tom","Date":"12/11/2014","Attended":"True","FeesPaid":"True"},
{"ID":"20829","AgencyID":"PRA","PDActivity_PKID":"4015","Personnel_PKID":"23433","PersonnelID":"Thomas # 13MarcellasPRA9","Name":"Thomas # 13, Marcellas","Date":"12/11/2014","Attended":"False","FeesPaid":"False"}
]

 Do not Use - ProfDevRoster =[
  {"ID":"20828","AgencyID":"PRA","PersonnelID":"cuesuzyPRA14","Name":"cue, suzy","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},{"ID":"20827","AgencyID":"PRA","PersonnelID":"DainMichillePRA19","Name":"Dains, Michille","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
  {"ID":"20831","AgencyID":"PRA","PersonnelID":"JonesTomPRA14","Name":"Jones, Tom","Date":"12/11/2014","Attended":"True","FeesPaid":"True"},{"ID":"20829","AgencyID":"PRA","PersonnelID":"Thomas # 13MarcellasPRA9","Name":"Thomas # 13, Marcellas","Date":"12/11/2014","Attended":"False","FeesPaid":"False"}
  ]


This object is the source for Region dropdown on add new attendee on profdev_roster page 
After select, ID value is passed to GetAgency stored procedure to filter agency list
  
  Region = [
  {"RAENID":"CN"},
  {"RAENID":"CST"},
  {"RAENID":"FL"},
  {"RAENID":"HV"},
  {"RAENID":"LI"},
  {"RAENID":"NY"},
  {"RAENID":"NYSED"},
  {"RAENID":"WEST"}
  ]
  
  
This object is the source for Agency dropdown on add new attendee on profdev_roster page 
After select, ID value is passed to GetStaff stored procedure to filter personnel name list
  
  Agency = [
  {"AgencyID":"PRA","AgencyName":"Practice Agency"}
  ]
  

This object is the source for Personnel Name dropdown on add new attendee on profdev_roster page 
After select, ID and PersonnelID values should be saved to database 
PersonnelID is saved for legacy queries 
  
Staff = [
{"ID":"","PersonnelID":"","Name":""},
{"ID":"28555","PersonnelID":"AlfieriShelleyPRA1","Name":"Alfieri, Shelley"},
{"ID":"24386","PersonnelID":"AlisovaMurianaPRA9","Name":"Alisova, Muriana"},
{"ID":"24234","PersonnelID":"BarnesJuliaPRA14","Name":"Barnes, Julia"},
{"ID":"28083","PersonnelID":"PorterJanePRA9","Name":"Porter, Jane"},
{"ID":"51033","PersonnelID":"ScottAdamPRA9","Name":"Scott, Adam"},
{"ID":"51442","PersonnelID":"SilversRayleighPRA18","Name":"Silvers, Rayleigh"},
{"ID":"52916","PersonnelID":"ZoroRoronoaPRA9","Name":"Zoro, Roronoa"}
]


  Do Not Use - Staff = [
  {"PersonnelID":"","Name":""},
  {"PersonnelID":"AlfieriShelleyPRA1","Name":"Alfieri, Shelley"},
  {"PersonnelID":"AlisovaMurianaPRA9","Name":"Alisova, Muriana"},
  {"PersonnelID":"BarnesJuliaPRA14","Name":"Barnes, Julia"},
  {"PersonnelID":"PorterJanePRA9","Name":"Porter, Jane"},
  {"PersonnelID":"ScottAdamPRA9","Name":"Scott, Adam"},{"PersonnelID":"SilversRayleighPRA18","Name":"Silvers, Rayleigh"},
  {"PersonnelID":"ZoroRoronoaPRA9","Name":"Zoro, Roronoa"}
  ]
  
