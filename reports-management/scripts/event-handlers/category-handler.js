//* Process to handle category selection after a report
//* title is selected
//* =====================================

import { prepByList, prepByListCM, createOptionList } from "../main.js";

export const categoryHandler = (titleID, groupID) => {
  let selectedList = [];
  //! NOTE: Category IDs are pointing to the newly defined categories.
  // Categories: 182 = Assessment reports, 57 = Rosters, 46 = Program management
  //       85 = Exiting and outcome
  if (["182", "57", "46", "85"].includes(groupID)) {
    // Category options: Instructional offering, Funding sources
    if (["47", "86", "46", "85", "207"].includes(titleID)) {
      $(".category").removeClass("hidden");
      selectedList = prepByList.filter((record) =>
        ["1", "2"].includes(record.key)
      );
    }
    // Category options: Instructional offering, Funding sources,
    // Site, Ref partner, Teacher/Tutor
    else if (["236", "162", "138", "176", "163", "164"].includes(titleID)) {
      $(".category").removeClass("hidden");
      selectedList = prepByList;
    }
    // Category options: Instructional offering, Teacher/Tutor
    else if (["57", "55", "56", "186", "87", "187"].includes(titleID)) {
      $(".category").removeClass("hidden");
      selectedList = prepByList.filter((record) =>
        ["1", "5"].includes(record.key)
      );
    }
    // Report tile with no additional selectors
    else {
      return;
    }
    $("#report-category").empty().append(createOptionList(selectedList));
  }
  // Categories: 242 = Case management reports
  // Reports ID: 242, 243, 244, 245
  else if (groupID === "242") {
    selectedList =
      titleID === "242"
        ? // Category options: All Students, Referral partners, Keywords, Date range
          prepByListCM
        : // Category options: All Students, Keywords, Date range
          prepByListCM.filter((record) => record.key !== "2");
    $(".category").removeClass("hidden");
    $("#report-category").empty().append(createOptionList(selectedList));
  }
  // Category: 133 = Contact hours reports
  // Reports ID: 133, 185, 140, 169, 170, 236
  else if (groupID === "133") {
    // Displays month selector
    if (["169", "185"].includes(titleID)) {
      $("#optional-selectors .months").removeClass("hidden");
      $("#report-months").focus();
    }
    // Displays month and week selectors
    else if (titleID === "170") {
      $("#optional-selectors .months").removeClass("hidden");
      $("#optional-selectors .weeks").removeClass("hidden");
      $("#report-months").focus();
    }
    // Contact hours testing summary in group 133
    // Category options: Instructional offering, Funding sources,
    // Site, Ref partner, Teacher/Tutor
    else if (["236", "140"].includes(titleID)) {
      $(".category").removeClass("hidden");
      selectedList =
        titleID === "236"
          ? prepByList
          : prepByList.filter((record) => record.key === "1");
      $(".category").removeClass("hidden");
      $("#report-category").empty().append(createOptionList(selectedList));
    } else {
      return;
    }
  }

  $("#optional-selectors section").each(function (indx) {
    if (!$(this).hasClass("hidden")) $(":input", this).prop("disabled", false);
  });
};
