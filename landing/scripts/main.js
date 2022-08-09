//*=================================================
//* Actions and Logic
//*=================================================

//! =============================================================
//! For Development only.
//! Comment out for Production.
//! =============================================================
const agencies = GetAgencyIndex2.slice(0);
const cardValues = GetAgencyCardValues2.slice(0);

//! =============================================================

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
// Customizing the card content
const addCustomContent = (agency) => {
  const cardList = cardValues
    .filter((record) => record.AgencyPKID === agency)
    .map((record) => {
      let { CardID, CardValue, CardValue2, CardReport, CardReport2 } = record;
      CardValue = CardValue === "NULL" ? "" : CardValue;
      CardValue2 = CardValue2 === "NULL" ? "" : CardValue2;
      CardReport = CardReport === "NULL" ? "" : CardReport;
      CardReport2 = CardReport2 === "NULL" ? "" : CardReport2;
      return {
        ID: CardID,
        values: [CardValue, CardValue2],
        report: [CardReport, CardReport2]
      };
    });
  for (const obj of cardList) {
    const { ID: cardId, values, report } = obj;
    for (const val of values) {
      const indxVal = values.indexOf(val);
      $(`#${cardId}-val${indxVal}`).text(val);
    }
    for (const link of report) {
      const indxLink = report.indexOf(link);
      $(`#${cardId}-link${indxLink}`).attr({ href: link, target: "_blank" });
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

  //! =============================================================
  //! For Production, this section regroups the end points
  //! for the different requests to the back-end, using requestObj.
  //! =============================================================
  // const agencies =
  // const cardValues =
  //! =============================================================

  //* Hide menu closing hamburger button
  $("#mySidenav .close-btn").addClass("hidden");
  //* Update card content with custom values and links.
  //* Display the first card.
  const agencyId = SESSION_VARIABLE[0].ID.startsWith("<%=")
    ? "14"
    : SESSION_VARIABLE[0].ID;
  addCustomContent(agencyId);
  showSlides(slideIndex);
  //* Enable the Select Agency choice in user dropdown for authorized
  //* users. Add the list of agencies to modal selection
  if (
    [
      "LAC TECH Support", //! Those roles can select multiple agencies
      "NYSED Staff",
      "RAEN Director",
      "LPA Editor",
      "LPA Reviewer"
    ].includes($(".role-text").text())
  ) {
    $("#select-agency").toggleClass("hidden");
    const sortedAgencyList = agencies.sort((record1, record2) =>
      record1.AgencyName < record2.AgencyName
        ? -1
        : record1.AgencyName > record2.AgencyName
        ? 1
        : 0
    );
    const optionListAgency = createOptionList(
      createSummaryList(sortedAgencyList, "ID", "AgencyName"),
      agencyId
    );
    $("#agency-selector").append(optionListAgency);
  }

  //* ===================================

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
    const selectedAgency = agencies.find(
      (record) => record.AgencyPKID === selectedId
    );
    SESSION_VARIABLE[0].AgencyPKID = selectedId;
    SESSION_VARIABLE[0].AgencyName = selectedAgencyName
      .replace("\n", "")
      .trim();
    SESSION_VARIABLE[0].AgencyID = selectedAgency.ID;

    const userFullName = SESSION_VARIABLE[0].fullname.startsWith("<%=")
      ? "Kate Tornese (default)"
      : SESSION_VARIABLE[0].fullname;
    $(".welcome-text").text(
      `Hello ${userFullName} (${SESSION_VARIABLE[0].AgencyName})`
    );
    $("#modalBloc").modal("toggle");

    const newCardValues = cardValues.filter(
      (record) => (record.AgencyPKID = selectedId)
    );
    const newCardContent = addCustomContent(newCardValues);
  });
  //* Change agency => new agency selection
  $(document).on("click", "#select-agency", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    $("#modalBloc").modal("toggle");
    $("#modalBloc").on("shown.bs.modal", function () {
      $(this).find(".input-field:first-of-type :input").focus();
    });
  });
});
