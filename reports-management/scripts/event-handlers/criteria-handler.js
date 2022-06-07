//* Process to handle criteria selection after a report
//* title and category are selected
//* =====================================

import {
  createOptionList,
  funding,
  keywords,
  referralPartners,
  instructors,
  classes,
  staffDevCategory,
  staffDevFacilitator,
  staffDevSector
} from "../main.js";

export const criteriaHandler = (selectedCategory, selectedGroup) => {
  const all = [{ key: "ALL", value: "All" }];
  let criteriaList = [];
  // Categories: 242 Case management reports
  // Reports ID: 242, 243, 244, 245
  if (selectedGroup === "242") {
    if (selectedCategory === "0") {
      return;
    } else if (selectedCategory === "3") {
      $("#optional-selectors .criteria").addClass("hidden");
      $("#optional-selectors .date-range").removeClass("hidden");
      $("#optional-selectors .date-range input").prop("disabled", false);
      $("#optional-selectors .date-range input[name='fromDate']").focus();
      return;
    } else {
      criteriaList = selectedCategory === "1" ? keywords : referralPartners;
      $("#report-criteria").empty().append(createOptionList(criteriaList));
      $(".criteria").removeClass("hidden");
    }
  }
  // Categories: 79 Staff Development
  // Reports ID: 79, 177, 184, 191, 192
  else if (selectedGroup === "79") {
    switch (selectedCategory) {
      case "2":
        criteriaList = staffDevFacilitator;
        break;
      case "3":
        criteriaList = staffDevSector;
        break;
      default:
        criteriaList = staffDevCategory;
        break;
    }
    $("#report-criteria").empty().append(createOptionList(criteriaList));
    // No list for the Personnel category
    if (selectedCategory !== "1") $(".criteria").removeClass("hidden");
  }
  // Categories: 182 Assessments, 57 Rosters, 46 Program management,
  // 85 Exit and Outcomes
  else {
    switch (selectedCategory) {
      case "2":
        criteriaList = funding;
        break;
      case "5":
        criteriaList = instructors;
        break;
      default:
        criteriaList = [all, ...classes];
        break;
    }
    $("#report-criteria").empty().append(createOptionList(criteriaList));
    $(".criteria").removeClass("hidden");
  }
  $("#optional-selectors section").each(function (indx) {
    if (!$(this).hasClass("hidden")) $(":input", this).prop("disabled", false);
  });
};
