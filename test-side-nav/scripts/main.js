//*=================================================
//* Actions and Logic
//*=================================================

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Opening side Nav
  $(document).on("click", "#menu-btn", function (evnt) {
    $(".sidenav").width("20%");
    $(".sidenav a").toggleClass("hidden");
    $(".sidenav .small-label").toggleClass("hidden");
  });

  //* Closing side Nav
  $(document).on("click", ".close-btn", function (evnt) {
    $(".sidenav").width("3%");
    $(".sidenav a, .small-label").toggleClass("hidden");
  });
});
