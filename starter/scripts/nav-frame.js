//*=================================================
//* Actions and Logic
//*=================================================

const toggleSideNav = () => {
  $(
    ".sidenav .main-tab, .sidenav .close-btn, .sidenav .menu-text, .small-logo"
  ).toggleClass("hidden");
};

const getRoleName = (userLevelStr) => {
  const roleList = [
    "LAC TECH Support", //! indx 0 to 4 can select multiple agencies
    "NYSED Staff",
    "RAEN Director",
    "LPA Editor",
    "LPA Reviewer",
    "Program ASISTS Administrator",
    "Program Data Editor",
    "Program Data Reviewer",
    "Site Administrator",
    "Site Data Editor",
    "Site Data Reviewer",
    "Teacher/Editor",
    "Teacher/Reviewer",
    "LPA Administrator",
    "DYCD Editor",
    "DYCD Reviewer"
  ];
  const indx = Number(userLevelStr) - 1;
  return roleList[indx];
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* ===================================
  //* First rendering actions
  //* ===================================

  //* Side nav closed at page loading
  // $(".sidenav").width("20%");
  // toggleSideNav();

  //* Opening side Nav
  $(document).on("click", "#menu-btn", function (evnt) {
    $(".sidenav").width("20%");
    $(".card-btn").css("padding-left", "31%");
    $(".btn-numbers").css("margin-left", "10%");

    toggleSideNav();
  });
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

  //* Add user info.
  let { fullname, rolename, UserLevel, AgencyName } = SESSION_VARIABLE[0];

  //! =========================================
  //! For Dev Env only. Can stay for Production.
  //! =========================================

  if (!AgencyName || AgencyName.startsWith("<%=")) {
    fullname = "Kate Tornese";
    UserLevel = "1";
    // rolename = "Program Data Editor";
    rolename = "LAC TECH Support";
    // AgencyName = "Practice Agency";
    AgencyName = "Very long agency name with a lot of characters";
  }
  //! =========================================
  const welcomeLine = `
    <div class="welcome-text">Hello ${fullname} (${AgencyName} ${AgencyName.length})</div>
    <div class="role-text" data-level=${UserLevel}>${rolename}</div>`;
  $(".user-info").append(welcomeLine);

  //* Open Agency selection modal depending on the user role and
  //* if an agency as already been selected.

  //* ===================================

  //* Closing sidenav by clicking close-btn or sidenav losing focus
  $(document).on("click", ".close-btn", function (evnt) {
    $(".dropdown-container").css("display", "none");
    $(".main-tab .dropdown-btn").removeClass("active");
    $(".sidenav").width("3%");
    $(".card-btn").css("padding-left", "15%");
    $(".btn-numbers").css("margin-left", "-17%");

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

  //* Selecting another page in subnav bar
  $("#sub-nav li").on("click", function (evnt) {
    evnt.stopPropagation();
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });
});
