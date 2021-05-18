//*=================================================
//* Actions and Logic
//*=================================================

const toggleSideNav = () => {
  $(
    ".sidenav .main-tab, .sidenav .close-btn, .sidenav .small-label"
  ).toggleClass("hidden");
};

const createCards = () => {
  const cardContent = [
    {
      cardHead: "You have created XXX classes",
      cardText: ["For the current fiscal year", "Click HERE to display them."]
    },
    {
      cardHead: "There are XXX students enrolled in these classes",
      cardText: [
        "Of these, XXX students are still active",
        "Click HERE to display your classes' roster."
      ]
    },
    {
      cardHead: "XXX students had less than 12hrs of attendance",
      cardText: ["Click HERE to display them."]
    },
    {
      cardHead: "XXX of your NRS students had no pretest.",
      cardText: [
        "XXX of your NYRS students had no pretest",
        "Click HERE to display the NRS Students without Pretest report.",
        "Click HERE to display the NYRS Students without Pretest report."
      ]
    },
    {
      cardHead: "XXX of your NRS students had no posttest.",
      cardText: [
        "XXX of your NYRS students had no posttest",
        "Click HERE to display the NRS Students without Posttest report.",
        "Click HERE to display the NYRS Students without Posttest report."
      ]
    }
  ];
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
