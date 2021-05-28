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
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

  //* On first rendering, add user info.
  let { fullname, rolename, AgencyName } = SESSION_VARIABLE[0];

  //! =========================================
  //! For Dev Env only. Can stay for Production.
  if (!fullname || fullname.startsWith("<%=")) {
    fullname = "Kate Tornese";
    rolename = "LAC TECH Support";
    AgencyName = "Practice Agency";
  }
  //! =========================================

  const welcomeLine = `
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="welcome-text col-sm-7">Hello ${fullname} (${AgencyName})
      </div>
      <div class="role-text col-sm-4">User Role: ${rolename}
      </div>
    </div>`;
  $(".user-info").append(welcomeLine);

  //* On first rendering, display the first card.
  showSlides(slideIndex);

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
});
