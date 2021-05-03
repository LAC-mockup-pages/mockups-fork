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
    $(
      ".sidenav .main-tab, .sidenav .close-btn, .sidenav .small-label"
    ).toggleClass("hidden");
  });

  //* Closing sidenav by clicking close-btn or sidenav losing focus
  $(document).on("click", ".close-btn", function (evnt) {
    $(".sidenav").width("3%");
    $(".sidenav .main-tab, .sidenav .close-btn , .small-label").toggleClass(
      "hidden"
    );
  });

  //* Selecting a menu item and displaying the sub-menu
  $(document).on("click", ".dropdown-btn", function (evnt) {
    evnt.stopPropagation();
    $(".dropdown-container").css("display", "block");
  });
});
