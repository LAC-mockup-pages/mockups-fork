//added 2 Events for RNMDS Lookup
//RNMDS belongs to Region CST

ProfDevEvents = [
{"ProfDevActivityID":"PRA12112014_4015","ID":4015,"ActNameDesc":"Asists - 12/11/14"},
{"ProfDevActivityID":"PRA08052017_8898","ID":8898,"ActNameDesc":"ASISTS Build 10.4  - 08/05/17"},
{"ProfDevActivityID":"PRA02282010_153","ID":153,"ActNameDesc":"asists Data entry Training - 02/28/10"},
{"ProfDevActivityID":"PRA08162016_8932","ID":8932,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"},
{"ProfDevActivityID":"PRA08162016_8933","ID":8933,"ActNameDesc":"ASISTS Training 2.0 - 08/16/16"},
{"ProfDevActivityID":"RNMDS11142018_11530","ID":"11530","ActNameDesc":"ASISTS Data Entry Training - 11/14/18"},
{"ProfDevActivityID":"RNMDS_11082018","ID":"11455","ActNameDesc":"BEST Literacy Training - 11/08/18"}  
]


ProfDevRoster =[
{"ID":"20828","AgencyID":"PRA","PersonnelID":"cuesuzyPRA14","Name":"cue, suzy","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},{"ID":"20827","AgencyID":"PRA","PersonnelID":"DainMichillePRA19","Name":"Dains, Michille","Date":"12/11/2014","Attended":"True","FeesPaid":"False"},
{"ID":"20831","AgencyID":"PRA","PersonnelID":"JonesTomPRA14","Name":"Jones, Tom","Date":"12/11/2014","Attended":"True","FeesPaid":"True"},{"ID":"20829","AgencyID":"PRA","PersonnelID":"Thomas # 13MarcellasPRA9","Name":"Thomas # 13, Marcellas","Date":"12/11/2014","Attended":"False","FeesPaid":"False"},
{"ID":"64291","AgencyID":"SESD","PersonnelID":"AbtDianeSESD1","Name":"Abt, Diane","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64292","AgencyID":"SESD","PersonnelID":"BuchananKarenSESD1","Name":"Buchanan, Karen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64293","AgencyID":"OSDL","PersonnelID":"DavidsonEvaOSDL18","Name":"Davidson, Eva","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
{"ID":"64294","AgencyID":"SESD","PersonnelID":"DunnKarenSESD20","Name":"Dunn, Karen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64295","AgencyID":"TSTB","PersonnelID":"ElghaziAlissaTSTB1","Name":"Elghazi, Alissa","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64296","AgencyID":"TSTB","PersonnelID":"EschlerNicoleTSTB6","Name":"Eschler, Nicole","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
 {"ID":"64297","AgencyID":"MOCB","PersonnelID":"GARCIAELLENMOCB20","Name":"GARCIA, ELLEN","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64298","AgencyID":"ACSD","PersonnelID":"GarlandMelisACSD9","Name":"Garland, Melissa","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},{"ID":"64299","AgencyID":"HCCB","PersonnelID":"HaggertyLauraHCCB20","Name":"Haggerty, Laura","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},{"ID":"64300","AgencyID":"ACSD","PersonnelID":"HarveyGloriACSD9","Name":"Harvey, Gloria","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},{"ID":"64467","AgencyID":"OCCB","PersonnelID":"KimballKarenOCCB1","Name":"Kimball, Karen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64301","AgencyID":"TOML","PersonnelID":"KowalskiJoannTOML14","Name":"Kowalski, Joann","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64497","AgencyID":"TOML","PersonnelID":"LaMorteDawnTOML20","Name":"LaMorte, Dawn","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64302","AgencyID":"SESD","PersonnelID":"LangdonGinnySESD9","Name":"Langdon, Ginny","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64303","AgencyID":"HCCB","PersonnelID":"LuppinoCorneliaHCCB8","Name":"Luppino, Cornelia","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},{"ID":"64304","AgencyID":"OSWL","PersonnelID":"MillsChristinaOSWL18","Name":"Mills, Christina","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64305","AgencyID":"SESD","PersonnelID":"NicholsTerrySESD1","Name":"Nichols, Terry","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
{"ID":"64306","AgencyID":"GSYL","PersonnelID":"PlonyDoreenGSYL13","Name":"Plony, Doreen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},{"ID":"64307","AgencyID":"TSTB","PersonnelID":"ZawislakJenniferTSTB1","Name":"Zawislak, Jennifer","Date":"11/14/2018","Attended":"True","FeesPaid":"False"}

//NEW
//added records for 2 events for RNMDS
// includes PDActivity_PKID and  Personnel_PKID 
ProfDevRoster = [
{"ID":"64291","AgencyID":"SESD","PDActivity_PKID":"11530","Personnel_PKID":"44807","PersonnelID":"AbtDianeSESD1","Name":"Abt, Diane","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64292","AgencyID":"SESD","PDActivity_PKID":"11530","Personnel_PKID":"44808","PersonnelID":"BuchananKarenSESD1","Name":"Buchanan, Karen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64293","AgencyID":"OSDL","PDActivity_PKID":"11530","Personnel_PKID":"48991","PersonnelID":"DavidsonEvaOSDL18","Name":"Davidson, Eva","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64294","AgencyID":"SESD","PDActivity_PKID":"11530","Personnel_PKID":"43060","PersonnelID":"DunnKarenSESD20","Name":"Dunn, Karen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64295","AgencyID":"TSTB","PDActivity_PKID":"11530","Personnel_PKID":"52525","PersonnelID":"ElghaziAlissaTSTB1","Name":"Elghazi, Alissa","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64296","AgencyID":"TSTB","PDActivity_PKID":"11530","Personnel_PKID":"51880","PersonnelID":"EschlerNicoleTSTB6","Name":"Eschler, Nicole","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64297","AgencyID":"MOCB","PDActivity_PKID":"11530","Personnel_PKID":"52423","PersonnelID":"GARCIAELLENMOCB20","Name":"GARCIA, ELLEN","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64298","AgencyID":"ACSD","PDActivity_PKID":"11530","Personnel_PKID":"10527","PersonnelID":"GarlandMelisACSD9","Name":"Garland, Melissa","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},
  {"ID":"64299","AgencyID":"HCCB","PDActivity_PKID":"11530","Personnel_PKID":"51032","PersonnelID":"HaggertyLauraHCCB20","Name":"Haggerty, Laura","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},
  {"ID":"64300","AgencyID":"ACSD","PDActivity_PKID":"11530","Personnel_PKID":"10635","PersonnelID":"HarveyGloriACSD9","Name":"Harvey, Gloria","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},
  {"ID":"64467","AgencyID":"OCCB","PDActivity_PKID":"11530","Personnel_PKID":"52532","PersonnelID":"KimballKarenOCCB1","Name":"Kimball, Karen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64301","AgencyID":"TOML","PDActivity_PKID":"11530","Personnel_PKID":"50981","PersonnelID":"KowalskiJoannTOML14","Name":"Kowalski, Joann","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64497","AgencyID":"TOML","PDActivity_PKID":"11530","Personnel_PKID":"52527","PersonnelID":"LaMorteDawnTOML20","Name":"LaMorte, Dawn","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64302","AgencyID":"SESD","PDActivity_PKID":"11530","Personnel_PKID":"33689","PersonnelID":"LangdonGinnySESD9","Name":"Langdon, Ginny","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64303","AgencyID":"HCCB","PDActivity_PKID":"11530","Personnel_PKID":"40163","PersonnelID":"LuppinoCorneliaHCCB8","Name":"Luppino, Cornelia","Date":"11/14/2018","Attended":"False","FeesPaid":"False"},
  {"ID":"64304","AgencyID":"OSWL","PDActivity_PKID":"11530","Personnel_PKID":"51649","PersonnelID":"MillsChristinaOSWL18","Name":"Mills, Christina","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64305","AgencyID":"SESD","PDActivity_PKID":"11530","Personnel_PKID":"45755","PersonnelID":"NicholsTerrySESD1","Name":"Nichols, Terry","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64306","AgencyID":"GSYL","PDActivity_PKID":"11530","Personnel_PKID":"51360","PersonnelID":"PlonyDoreenGSYL13","Name":"Plony, Doreen","Date":"11/14/2018","Attended":"True","FeesPaid":"False"},
  {"ID":"64307","AgencyID":"TSTB","PDActivity_PKID":"11530","Personnel_PKID":"44908","PersonnelID":"ZawislakJenniferTSTB1","Name":"Zawislak, Jennifer","Date":"11/14/2018","Attended":"True","FeesPaid":"False"}
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


//New object with AgencyID for filtering
//Defaults to User Agency

Staff = [
{"AgencyID":"","ID":"0","PersonnelID":"","Name":""},{"AgencyID":"SESD","ID":"44807","PersonnelID":"AbtDianeSESD1","Name":"Abt, Diane"},
{"AgencyID":"SESD","ID":"37422","PersonnelID":"AhmedDaudSESD2","Name":"Ahmed, Daud"},
{"AgencyID":"PRA","ID":"28555","PersonnelID":"AlfieriShelleyPRA1","Name":"Alfieri, Shelley"},
{"AgencyID":"PRA","ID":"24386","PersonnelID":"AlisovaMurianaPRA9","Name":"Alisova, Muriana"},
{"AgencyID":"MOCB","ID":"35780","PersonnelID":"BalesDavidMOCB9","Name":"Bales, David"},
{"AgencyID":"PRA","ID":"24234","PersonnelID":"BarnesJuliaPRA14","Name":"Barnes, Julia"},
{"AgencyID":"PRA","ID":"52310","PersonnelID":"BartowksiCharlesPRA9","Name":"Bartowksi, Charles"},
{"AgencyID":"PRA","ID":"51590","PersonnelID":"BladeSenuaPRA9","Name":"Blade, Senua"},
{"AgencyID":"PRA","ID":"51065","PersonnelID":"BradyTomPRA9","Name":"Brady, Tom"},
{"AgencyID":"SESD","ID":"44808","PersonnelID":"BuchananKarenSESD1","Name":"Buchanan, Karen"},
{"AgencyID":"PRA","ID":"33828","PersonnelID":"CampbellDonPRA9","Name":"Campbell, Don"},
{"AgencyID":"PRA","ID":"53190","PersonnelID":"CharlotinWilsonPRA18","Name":"Charlotin, Wilson"},
{"AgencyID":"JLWL","ID":"51268","PersonnelID":"ChristoffersonAmyJLWL18","Name":"Christofferson, Amy"},
{"AgencyID":"PRA","ID":"51261","PersonnelID":"CooperDalePRA18","Name":"Cooper, Dale"},
{"AgencyID":"PRA","ID":"47016","PersonnelID":"CooperGary PRA9","Name":"Cooper, Gary "},
{"AgencyID":"OSDL","ID":"48991","PersonnelID":"DavidsonEvaOSDL18","Name":"Davidson, Eva"},
{"AgencyID":"SESD","ID":"45967","PersonnelID":"DemauroNicoleSESD9","Name":"Demauro, Nicole"},
{"AgencyID":"PRA","ID":"46763","PersonnelID":"Donovan Ray PRA9","Name":"Donovan, Ray"},
{"AgencyID":"PRA","ID":"45229","PersonnelID":"DryjaKelly PRA9","Name":"Dryja, Kelly "},
{"AgencyID":"SESD","ID":"43060","PersonnelID":"DunnKarenSESD20","Name":"Dunn, Karen"},
{"AgencyID":"PRA","ID":"23847","PersonnelID":"EEEJLNAAPRA18","Name":"EEESS, JLNAA"},
{"AgencyID":"TSTB","ID":"52525","PersonnelID":"ElghaziAlissaTSTB1","Name":"Elghazi, Alissa"},
{"AgencyID":"TSTB","ID":"51880","PersonnelID":"EschlerNicoleTSTB6","Name":"Eschler, Nicole"},
{"AgencyID":"PRA","ID":"49708","PersonnelID":"FrazierClydePRA9","Name":"Frazier, Clyde"},
{"AgencyID":"PRA","ID":"1359","PersonnelID":"FrownJanicePRA9","Name":"Frown, Janice"},
{"AgencyID":"PRA","ID":"52619","PersonnelID":"FullerMartinPRA9","Name":"Fuller, Martin"},{"AgencyID":"MOCB","ID":"52423","PersonnelID":"GARCIAELLENMOCB20","Name":"GARCIA, ELLEN"},{"AgencyID":"ACSD","ID":"10527","PersonnelID":"GarlandMelisACSD9","Name":"Garland, Melissa"},{"AgencyID":"PRA","ID":"27812","PersonnelID":"GeorgiaWashingtonPRA9","Name":"GEORGIA, WASHINGTON"},{"AgencyID":"HCCB","ID":"51032","PersonnelID":"HaggertyLauraHCCB20","Name":"Haggerty, Laura"},{"AgencyID":"ACSD","ID":"10635","PersonnelID":"HarveyGloriACSD9","Name":"Harvey, Gloria"},{"AgencyID":"PRA","ID":"50951","PersonnelID":"HydeStevenPRA18","Name":"Hyde, Steven"},{"AgencyID":"SESD","ID":"46942","PersonnelID":"JamisonAmandaSESD9","Name":"Jamison, Amanda"},{"AgencyID":"PRA","ID":"44988","PersonnelID":"JohnLauraPRA9","Name":"John, Laura"},{"AgencyID":"PRA","ID":"53184","PersonnelID":"JohnsonNormaPRA2","Name":"Johnson, Norma"},{"AgencyID":"PRA","ID":"47045","PersonnelID":"jonesfredPRA9","Name":"jones, fred"},{"AgencyID":"PRA","ID":"51968","PersonnelID":"JonesYogaPRA9","Name":"Jones, Yoga"},{"AgencyID":"MOCB","ID":"47498","PersonnelID":"Kabil-CvijanovicAidaMOCB2","Name":"Kabil-Cvijanovic, Aida"},{"AgencyID":"PRA","ID":"49118","PersonnelID":"KenobiGeneralPRA18","Name":"Kenobi, General"},{"AgencyID":"OCCB","ID":"52532","PersonnelID":"KimballKarenOCCB1","Name":"Kimball, Karen"},{"AgencyID":"SESD","ID":"32045","PersonnelID":"KingPatriciaSESD2","Name":"King, Patricia"},{"AgencyID":"TOML","ID":"50981","PersonnelID":"KowalskiJoannTOML14","Name":"Kowalski, Joann"},{"AgencyID":"TOML","ID":"52527","PersonnelID":"LaMorteDawnTOML20","Name":"LaMorte, Dawn"},{"AgencyID":"SESD","ID":"33689","PersonnelID":"LangdonGinnySESD9","Name":"Langdon, Ginny"},{"AgencyID":"SESD","ID":"2016","PersonnelID":"LockeAngelSESD9","Name":"Locke, Angela"},{"AgencyID":"HCCB","ID":"40163","PersonnelID":"LuppinoCorneliaHCCB8","Name":"Luppino, Cornelia"},{"AgencyID":"PRA","ID":"25120","PersonnelID":"MacAlinneyMARYPRA9","Name":"MacAlinney, MARY"},{"AgencyID":"PRA","ID":"38951","PersonnelID":"McConnell07GracePRA9","Name":"McConnell07, Grace"},{"AgencyID":"PRA","ID":"35612","PersonnelID":"mehmetayferPRA9","Name":"mehmet, ayfer"},{"AgencyID":"PRA","ID":"50202","PersonnelID":"MelfiJenniferPRA14","Name":"Melfi, Jennifer"},{"AgencyID":"OSWL","ID":"51649","PersonnelID":"MillsChristinaOSWL18","Name":"Mills, Christina"},{"AgencyID":"COCB","ID":"51816","PersonnelID":"MoralesDeborahCOCB9","Name":"Morales, Deborah"},{"AgencyID":"SESD","ID":"45755","PersonnelID":"NicholsTerrySESD1","Name":"Nichols, Terry"},{"AgencyID":"PRA","ID":"44987","PersonnelID":"PeetTammy PRA10","Name":"Peet, Tammy "},{"AgencyID":"GSYL","ID":"51360","PersonnelID":"PlonyDoreenGSYL13","Name":"Plony, Doreen"},{"AgencyID":"PRA","ID":"28083","PersonnelID":"PorterJanePRA9","Name":"Porter, Jane"},{"AgencyID":"MOCB","ID":"29677","PersonnelID":"RoseAmeliaMOCB18","Name":"Rose, Amelia"},{"AgencyID":"PRA","ID":"51033","PersonnelID":"ScottAdamPRA9","Name":"Scott, Adam"},{"AgencyID":"PRA","ID":"51442","PersonnelID":"SilversRayleighPRA18","Name":"Silvers, Rayleigh"},{"AgencyID":"PRA","ID":"24202","PersonnelID":"SinesKellyPRA18","Name":"Sines, Kelly"},{"AgencyID":"PRA","ID":"51884","PersonnelID":"SmithJonPRA9","Name":"Smith, Jon"},{"AgencyID":"PRA","ID":"47093","PersonnelID":"SmithMaryPRA9","Name":"Smith, Mary"},{"AgencyID":"PRA","ID":"2233","PersonnelID":"SmithSharonPRA9","Name":"Smith, Sharon"},{"AgencyID":"PRA","ID":"50653","PersonnelID":"TankenSerjPRA9","Name":"Tanken, Serj"},{"AgencyID":"PRA","ID":"38704","PersonnelID":"TaylorTeresaPRA9","Name":"Taylor, Teresa"},{"AgencyID":"PRA","ID":"24447","PersonnelID":"TesterVenu PRA5","Name":"TesterCMP, Venu"},{"AgencyID":"PRA","ID":"40178","PersonnelID":"TestThelakkatVenuPRA9","Name":"TestThelakkat, Venu"},{"AgencyID":"PRA","ID":"46765","PersonnelID":"VauseAlexPRA9","Name":"Vause, Alex"},{"AgencyID":"PRA","ID":"28561","PersonnelID":"WoodhamsMellissaPRA14","Name":"Woodhams, Mellissa"},{"AgencyID":"MOCB","ID":"52402","PersonnelID":"YoungMeganMOCB9","Name":"Young, Megan"},{"AgencyID":"TSTB","ID":"44908","PersonnelID":"ZawislakJenniferTSTB1","Name":"Zawislak, Jennifer"},
{"AgencyID":"PRA","ID":"52916","PersonnelID":"ZoroRoronoaPRA9","Name":"Zoro, Roronoa"}
]
