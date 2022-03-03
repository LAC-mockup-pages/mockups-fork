//*=================================================
//* Actions and Logic for local page
//*=================================================

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  // Temporary event
  $("#report-category").change(function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    $(".selectors .input-field").last().toggleClass("hidden");
    // if ($(this).val() !== "all") {
    //   $(".selectors .input-field").last().toggleClass("hidden");
    // } else {
    // }
  });
});
