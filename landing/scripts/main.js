//*=================================================
//* Actions and Logic
//*=================================================

const cardColors = [
  "rgb(70,152,170)",
  "rgb(105,78,119)",
  "rgb(172,143,194)",
  "rgb(221,88,20)",
  "rgb(155,187,202)",
  "rgb(70,152,170)",
  "rgb(105,78,119)",
  "rgb(172,143,194)",
  "rgb(221,88,20)"
];

const applyColor = (colorStr) => {
  $(".large-num").css("color", colorStr);
  $(".card-block").css("border-color", colorStr);
};

const toggleSideNav = () => {
  $(
    ".sidenav .main-tab, .sidenav .close-btn, .sidenav .small-label"
  ).toggleClass("hidden");
};

let slideIndex = 1;
const showSlides = (num) => {
  const slides = $(".cards");
  const dots = $(".dot");
  if (num > slides.length) slideIndex = 1;
  if (num < 0) slideIndex = slides.length;
  $(slides).hide(600).removeClass("visible");
  $(dots).removeClass("active");

  $(slides[slideIndex - 1])
    .delay(50)
    .show(600)
    .addClass("visible");
  $(dots[slideIndex - 1]).addClass("active");

  // Calculate the top margin necessary to center the card inside
  // card-block
  const blockHeight = $(".card-block").height();
  const cardHeight = Number($(".visible").css("height").match(/\d/g).join(""));
  const lineHeight = $(".dot").height() / 2;
  const addedMargin = (blockHeight - cardHeight) / 2 - lineHeight;
  $(slides[slideIndex - 1]).css("margin-top", `${addedMargin}px`);

  applyColor(cardColors[slideIndex]);
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

const createAgencySelect = (list) => {
  const hashTable = list
    .map((obj) => {
      const { AgencyID, AgencyName } = obj;
      return { AgencyID, AgencyName };
    })
    .sort(
      // Sorting alphabetically on AgencyName
      (obj1, obj2) =>
        obj1.AgencyName < obj2.AgencyName
          ? -1
          : obj1.AgencyName > obj2.AgencyName
          ? 1
          : 0
    );

  // elementSelectModal <= helperFunctions.js
  return elementSelectModal({
    hashTable,
    keyValue: "AgencyID",
    selectedValue: "",
    labelVal: "Agency",
    labelClassVal: "",
    option: "",
    optionText: "an agency"
  });
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* ===================================
  //* First rendering actions
  //* ===================================

  //* Side nav open at home page loading
  $(".sidenav").width("20%");
  toggleSideNav();

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
    fullname = "Kate Tornese (default)";
    UserLevel = "1";
    rolename = "LAC TECH Support";
    AgencyName = "Practice Agency";
  }
  //! =========================================
  const welcomeLine = `
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="welcome-text col-sm-7">Hello ${fullname} (${AgencyName})
      </div>
      <div class="role-text col-sm-4" data-level=${UserLevel}>User Role: ${rolename}
      </div>
    </div>`;
  $(".user-info").append(welcomeLine);

  //* Display the first card.
  showSlides(slideIndex);

  //* Open Agency selection modal depending on the user role in
  //* SESSION_VARIABLE

  if (
    [
      "LAC TECH Support", //! Those roles can select multiple agencies
      "NYSED Staff",
      "RAEN Director",
      "LPA Editor",
      "LPA Reviewer"
    ].includes(rolename)
  ) {
    const agencySelection = createAgencySelect(GetAgencyIndex.slice(0));
    $("#edit-form").append(agencySelection);
    $(".dropdown-menu").prepend(`
      <li>
        <a href="#" id="select-agency">Change Agency</a>
      </li>`);
    $("#modalBloc").modal("toggle");
  }

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

  //* Display next or previous card when a chevron is clicked on
  $(document).on("click", ".prev, .next", function (evnt) {
    evnt.stopPropagation();
    const num = $(this).hasClass("next") ? 1 : -1;
    showSlides((slideIndex += num));
  });

  //* Display selected card when a number is clicked on
  $(document).on("click", ".dot", function (evnt) {
    evnt.stopPropagation();
    const selectedCardIndex = Number($(this).text());
    showSlides((slideIndex = selectedCardIndex));
  });

  //* Select Agency in dropdown list
  $(document).on("change", "#AgencyID-view", function (evnt) {
    evnt.stopPropagation();
    const selectedId = $(this).val();
    const selectedAgencyName = $("#AgencyID-view option:selected").text();
    console.log("selectedId :>> ", selectedId);
    console.log("selectedAgencyName :>> ", selectedAgencyName);
    SESSION_VARIABLE[0].AgencyID = selectedId;
    SESSION_VARIABLE[0].AgencyName = selectedAgencyName
      .replace("\n", "")
      .trim();
    const userFullName = SESSION_VARIABLE[0].fullname.startsWith("<%=")
      ? "Kate Tornese (default)"
      : SESSION_VARIABLE[0].fullname;
    $(".welcome-text").text(
      `Hello ${userFullName} (${SESSION_VARIABLE[0].AgencyName})`
    );
    $("#modalBloc").modal("toggle");
    const agencySelection = createAgencySelect(GetAgencyIndex.slice(0));
    $("#edit-form").empty().append(agencySelection);
    console.table(SESSION_VARIABLE[0]);
  });

  //* Change agency => new agency selection
  $(document).on("click", "#select-agency", function (evnt) {
    evnt.stopPropagation();
    $("#modalBloc").modal("toggle");
  });
});
