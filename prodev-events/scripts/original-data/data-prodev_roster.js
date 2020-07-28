
ProfDevEvents = [
{"ProfDevActivityID":"PRA12112014_4015","ID":4015,"ActNameDesc":"Asists - 12/11/14"},
{"ProfDevActivityID":"PRA08052017_8898","ID":8898,"ActNameDesc":"ASISTS Build 10.4  - 08/05/17"},
{"ProfDevActivityID":"PRA02282010_153","ID":153,"ActNameDesc":"asists Data entry Training - 02/28/10"},
{"ProfDevActivityID":"PRA08162016_8932","ID":8932,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"},
{"ProfDevActivityID":"PRA08162016_8933","ID":8933,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"}
]


ProfDevRoster =[
{"ID":"20828","AgencyID":"PRA","PersonnelID":"cuesuzyPRA14","Name":"cue, suzy","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},{"ID":"20827","AgencyID":"PRA","PersonnelID":"DainMichillePRA19","Name":"Dains, Michille","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
{"ID":"20831","AgencyID":"PRA","PersonnelID":"JonesTomPRA14","Name":"Jones, Tom","Date":"12/11/2014","Attended":"True","FeesPaid":"True"},{"ID":"20829","AgencyID":"PRA","PersonnelID":"Thomas # 13MarcellasPRA9","Name":"Thomas # 13, Marcellas","Date":"12/11/2014","Attended":"False","FeesPaid":"False"}
]


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


Agency = [
{"AgencyID":"PRA","AgencyName":"Practice Agency"}
]

//New object with RAENID for filtering
//Defaults to User Agency
//NB Practice Agency is not part of any RAEN

const Agency2 = [{"RAENID":"","AgencyID":"PRA","AgencyName":"Practice Agency"},
{"RAENID":"CST","AgencyID":"ACSD","AgencyName":"Afton Consortium of Schools"},
{"RAENID":"CST","AgencyID":"BTEB","AgencyName":"Broome-Tioga BOCES"},
{"RAENID":"CST","AgencyID":"RNMDS","AgencyName":"Central Southern Tier RAEN"},
{"RAENID":"CST","AgencyID":"BRTL","AgencyName":"LVA Broome/Tioga Cos. Inc."},
{"RAENID":"CST","AgencyID":"CHEL","AgencyName":"LVA Chenango County"},
{"RAENID":"CST","AgencyID":"MOCB","AgencyName":"Madison-Oneida BOCES"},
{"RAENID":"CST","AgencyID":"ONMB","AgencyName":"Onondaga Cortland Madison BOCES"},
{"RAENID":"CST","AgencyID":"SESD","AgencyName":"Syracuse City School District"},
{"RAENID":"CST","AgencyID":"UCSD","AgencyName":"Utica City School District"},
{"RAENID":"NY","AgencyID":"HOS","AgencyName":"CUNY Hostos Community College"},
{"RAENID":"NY","AgencyID":"HUN","AgencyName":"CUNY Hunter College"},
{"RAENID":"NY","AgencyID":"KCC","AgencyName":"CUNY Kingsborough Community College"},
{"RAENID":"NY","AgencyID":"RBWK","AgencyName":"Make the Road New York"},
{"RAENID":"NY","AgencyID":"RNNY","AgencyName":"New York City RAEN"},
{"RAENID":"NY","AgencyID":"NYPL","AgencyName":"NYPL/ALC"},
{"RAENID":"NY","AgencyID":"RLI","AgencyName":"NYPL/ESOL"},
{"RAENID":"NY","AgencyID":"R08","AgencyName":"Region 8"},
{"RAENID":"NY","AgencyID":"QCE","AgencyName":"QBPL Central Library"},
{"RAENID":"NY","AgencyID":"B07","AgencyName":"BPL Central ESOL Program"},
{"RAENID":"NY","AgencyID":"B08","AgencyName":"BPL Pre-HSE Program"},
]

Staff = [
{"PersonnelID":"","Name":""},
{"PersonnelID":"AlfieriShelleyPRA1","Name":"Alfieri, Shelley"},
{"PersonnelID":"AlisovaMurianaPRA9","Name":"Alisova, Muriana"},
{"PersonnelID":"BarnesJuliaPRA14","Name":"Barnes, Julia"},
{"PersonnelID":"PorterJanePRA9","Name":"Porter, Jane"},
{"PersonnelID":"ScottAdamPRA9","Name":"Scott, Adam"},{"PersonnelID":"SilversRayleighPRA18","Name":"Silvers, Rayleigh"},
{"PersonnelID":"ZoroRoronoaPRA9","Name":"Zoro, Roronoa"}
]

