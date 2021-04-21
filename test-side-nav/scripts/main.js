//*=================================================
//* Actions and Logic
//*=================================================

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Testing the integration
  $("#test-button").on("click", function (evnt) {
    const target = $("#test");

    const message =
      $(target).text() === "Nothing here" ? "Replaced text" : "Nothing here";
    $(target).text(message);
  });
});
