//*=================================================
//* Actions and Logic for local page
//*=================================================

const createCredentials = () => {
  const AgencyID = SESSION_VARIABLE[0].AgencyID.startsWith("<%= Session")
    ? "PRA"
    : SESSION_VARIABLE[0].AgencyID;
  const UserID = SESSION_VARIABLE[0].AuditUserID.startsWith("<%= Session")
    ? "999999"
    : SESSION_VARIABLE[0].AuditUserID;

  return { AgencyID, UserID };
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);
  const Student_PKID = params.get("st_id");
  const credentials = createCredentials();

  const requestObj = [{ ...credentials, Student_PKID }];

  console.log("requestObj :>> ", requestObj);

  //! =====================================
  //! For Production, this is the end points for the different requests
  //! to the back-end, using requestObj.
  //! =====================================
  // const response =

  //! =====================================
  //! For Development only.
  //! Comment out for Production.
  //! =====================================
});
