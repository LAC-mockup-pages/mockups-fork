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
    ".sidenav .main-tab, .sidenav .close-btn, .sidenav .menu-text, .small-logo"
  ).toggleClass("hidden");
};

// Customizing the card content
const addCustomContent = (list) => {
  for (const obj of list) {
    const { ID: cardId, values, report } = obj;
    for (const val of values) {
      const indxVal = values.indexOf(val);
      $(`#${cardId}-val${indxVal}`).text(val);
    }
    for (const link of report) {
      const indxLink = report.indexOf(link);
      $(`#${cardId}-link${indxLink}`).attr("href", link);
    }
  }
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
// Shorten a list of records to a list of obj with key/value properties
// list = [{...},{...}], keyParam, valueParam = field names as string
const createSummaryList = (list, keyParam, valueParam) => {
  return list.map((record) => {
    return { key: record[keyParam], value: record[valueParam] };
  });
};
// Creates <option></option> elements with an optional selected
// value. This list can be added to a <select> element
const createOptionList = (dataObj, defaultValue) => {
  const firstOption = "<option value>Select an agency</option>";
  const optionList = dataObj.map((record) => {
    const [key, value] = Object.keys(record);
    const keyData = record[key];
    const valueData = record[value];
    if (valueData) {
      const defaultVal =
        defaultValue && keyData === defaultValue ? " selected" : "";
      return `<option${defaultVal} value=${keyData}>${valueData}</option>`;
    } else {
      return `<option selected value></option>`;
    }
  });
  return firstOption + optionList.join("");
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
  let { fullname, rolename, UserLevel, AgencyName, PrevAgency } =
    SESSION_VARIABLE[0];

  //! =========================================
  //! For Dev Env only. Can stay for Production.
  //! =========================================

  if (!AgencyName || AgencyName.startsWith("<%=")) {
    fullname = "Kate Tornese (default)";
    UserLevel = "1";
    // rolename = "Program Data Editor Program Data Editor ";
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

  //* Update card content with custom values and links.
  //TODO add requested parameters to GetAgencyCArdValues when shared by GJ.
  addCustomContent(GetAgencyCardValues);
  //* Display the first card.
  showSlides(slideIndex);
  //* Open Agency selection modal depending on the user role and
  //* if an agency as already been selected.
  if (
    [
      "LAC TECH Support", //! Those roles can select multiple agencies
      "NYSED Staff",
      "RAEN Director",
      "LPA Editor",
      "LPA Reviewer"
    ].includes(rolename) &&
    PrevAgency === "False"
  ) {
    const optionListAgency = createOptionList(
      createSummaryList(GetAgencyIndex.slice(0), "AgencyID", "AgencyName")
    );
    $("#agency-selector").append(optionListAgency);
    $("#select-agency").toggleClass("hidden");
    PrevAgency = "True";
    $("#modalBloc").modal("toggle");
    $("#edit-form select").focus();
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
  $(document).on("change", "#agency-selector", function (evnt) {
    evnt.stopPropagation();
    const selectedId = $(this).val();
    const selectedAgencyName = $("#agency-selector option:selected").text();
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
    SESSION_VARIABLE[0].PrevAgency = "True";
  });
  //* Change agency => new agency selection
  $(document).on("click", "#select-agency", function (evnt) {
    evnt.stopPropagation();
    $("#modalBloc").modal("toggle");
  });
});
