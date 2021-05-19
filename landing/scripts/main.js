//*=================================================
//* Actions and Logic
//*=================================================

const toggleSideNav = () => {
  $(
    ".sidenav .main-tab, .sidenav .close-btn, .sidenav .small-label"
  ).toggleClass("hidden");
};

const createCardContent = () => {
  const cardText = {
    card0: [
      "You have created 123 classes",
      "For the current fiscal year",
      "Click HERE to display them."
    ],
    card1: [
      "There are 456 students enrolled in these classes",
      "Of these, 455 students are still active",
      "Click HERE to display your classes' roster."
    ],
    card2: [
      "235 students had less than 12hrs of attendance",
      "Click HERE to display them."
    ],
    card3: [
      " of your NRS students had no pre-test.",
      "XXX of your NYRS students had no pre-test",
      "Click HERE to display the NRS Students without Pre-Test report.",
      "Click HERE to display the NYRS Students without Pre-Test report."
    ],
    card4: [
      "XXX of your NRS students had no post-test.",
      "XXX of your NYRS students had no post-test",
      "Click HERE to display the NRS Students without Post-Test report.",
      "Click HERE to display the NYRS Students without Post-Test report."
    ]
  };

  for (const valueList of cardValues) {
    const indx = cardValues.indexOf(valueList);
    const cardId = `card${indx}`;
  }
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Side nav open at home page loading
  $(".sidenav").width("20%");
  toggleSideNav();

  //* Opening side Nav
  $(document).on("click", "#menu-btn", function (evnt) {
    $(".sidenav").width("20%");
    toggleSideNav();
  });

  //* Closing sidenav by clicking close-btn or sidenav losing focus
  $(document).on("click", ".close-btn", function (evnt) {
    $(".dropdown-container").css("display", "none");
    $(".main-tab .dropdown-btn").removeClass("active");
    $(".sidenav").width("3%");
    toggleSideNav();
  });

  //* Selecting a menu item and displaying the sub-menu
  $(document).on("click", ".dropdown-btn", function (evnt) {
    $(".dropdown-container").css("display", "none");
    $(".main-tab .dropdown-btn").removeClass("active");

    $(this).siblings(".dropdown-container").css("display", "block");

    $(this).toggleClass("active");
  });

  //* Selecting a submenu item
  $(document).on("click", ".dropdown-container a", function (evnt) {
    $(".dropdown-container").css("display", "none");
    $(".main-tab .dropdown-btn").removeClass("active");

    $(".sidenav").width("3%");
    toggleSideNav();
  });

  // * Selecting another page in subnav bar
  $("#sub-nav li").on("click", function (evnt) {
    evnt.stopPropagation();
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });
});
