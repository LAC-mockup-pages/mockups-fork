//*=================================================
//* Actions and Logic
//*=================================================

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Testing the integration
  $("#test-button").on("click", function (evnt) {
    $("#test").text("Replaced text by Working");
  });
});
