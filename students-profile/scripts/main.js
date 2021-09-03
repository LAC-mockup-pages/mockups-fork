//*=================================================
//* Actions and Logic for local page
//*=================================================

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
  // createCredentials <== /helpers/helperFunctions.js
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
