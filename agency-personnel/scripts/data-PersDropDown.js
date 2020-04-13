GetPosition = 
[{"PrsnlID":18,"Position":"Admin Support & Tutor"},
{"PrsnlID":1,"Position":"Administrative"},
{"PrsnlID":2,"Position":"Case Managers"},
{"PrsnlID":9,"Position":"Teachers"},
{"PrsnlID":10,"Position":"Teachers/Counselors"},
{"PrsnlID":14,"Position":"Tutor"}]


GetSubject = 
[{"ClassTypeID":"*","TypeDesc":"*   Select a Subject"},
{"ClassTypeID":"BE","TypeDesc":"BE   BE (NRS and/or EPE)"},
{"ClassTypeID":"CM","TypeDesc":"CM   Case Management"},
{"ClassTypeID":"ES","TypeDesc":"ES   ESOL (NRS and/or EPE)"},
{"ClassTypeID":"GE","TypeDesc":"GE   GED (NRS and/or EPE)"},
{"ClassTypeID":"MA","TypeDesc":"MA   MATH (NRS and/or EPE)"},
{"ClassTypeID":"NI","TypeDesc":"NI   Non-Instructional"},
{"ClassTypeID":"Y","TypeDesc":"Y   Y"}]


<asp:DropDownList ID="ddlPaidVolunteer" >
    <asp:ListItem Selected="True"></asp:ListItem>
    <asp:ListItem Text="Paid" Value="P"></asp:ListItem>
    <asp:ListItem Text="Volunteer" Value="V"></asp:ListItem>
</asp:DropDownList>


<asp:DropDownList ID="ddlTimeStatus" >
    <asp:ListItem Selected="True"></asp:ListItem>
    <asp:ListItem Text="Full-time" Value="F"></asp:ListItem>
    <asp:ListItem Text="Part-time" Value="P"></asp:ListItem>
</asp:DropDownList>


<asp:DropDownList ID="ddlExperienceYears" >
    <asp:ListItem Selected="True"></asp:ListItem>
    <asp:ListItem Text="Less than one year" Value="1"></asp:ListItem>
    <asp:ListItem Text="One to three years" Value="2"></asp:ListItem>
    <asp:ListItem Text="More than three years" Value="3"></asp:ListItem>
</asp:DropDownList>


<asp:DropDownList ID="ddlGender" runat="server" >
    <asp:ListItem Selected="True"></asp:ListItem>
    <asp:ListItem Text="Male" Value="M"></asp:ListItem>
    <asp:ListItem Text="Female" Value="F"></asp:ListItem>
</asp:DropDownList>


GetEthnicity = 
[{"EthnicityID":"A1","Ethnicity":"Native American"},
{"EthnicityID":"A2","Ethnicity":"Alaskan Native"},
{"EthnicityID":"B1","Ethnicity":"Asian"},
{"EthnicityID":"B2","Ethnicity":"Pacific Islander"},
{"EthnicityID":"C1","Ethnicity":"African American"},
{"EthnicityID":"C2","Ethnicity":"Afro-Caribbean"},
{"EthnicityID":"C3","Ethnicity":"African"},
{"EthnicityID":"D","Ethnicity":"Latino/a"},
{"EthnicityID":"E1","Ethnicity":"White"}]


GetOccupation = 
[{"PrsnlID":1,"Position":"Clerical"},
{"PrsnlID":3,"Position":"Managerial"},
{"PrsnlID":2,"Position":"Professional"},
{"PrsnlID":4,"Position":"Technical"},
{"PrsnlID":8,"Position":"Temporary"}]


GetReferralSource = 
[{"RefSourceID":"A","RefSource":"Another student"},
{"RefSourceID":"Y","RefSource":"Church"},
{"RefSourceID":"F","RefSource":"Education program"},
{"RefSourceID":"S","RefSource":"Employer"},
{"RefSourceID":"L","RefSource":"Library"},
{"RefSourceID":"R","RefSource":"Workers Union"}]


