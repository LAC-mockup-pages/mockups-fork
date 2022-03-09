
//All Pages

if (class.FY >= sessionVariable.FiscalYear) allow edit/save


//Select Page

on FY change 
	Refresh Class Type for selected FY 
	Refresh Personnel for selected FY 

on Class Type change
	Refresh class list for selected FY & Class Type


on Personnel change
	Refresh class list for selected FY & personnel



//Detail Page

on Special Program change
	if selected value === IET enable IET dropdown



//Enrollment Page

on End Date change
	enable Reason
	enable Active Status  
	Uncheck Active Status

on Reason changed to Transfer
	enable TransferTo
	Refresh TransferTo with available classes

on Active Status checked
	Clear End Date
	Clear Reason
	Clear TransferTo
	Disable Active Status