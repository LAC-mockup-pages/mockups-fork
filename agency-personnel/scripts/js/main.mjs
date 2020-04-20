//* Logic for page

import createNewRecordForm from "./add-new-record.mjs";

$(document).ready(() => {
  //* Back to Top button
  const btnToTop = $("#btn-top");
  $("window").scroll(() => {
    btnToTop.style.display =
      $("window").scrollTop() > 600 || $("body".scrollTop() > 600)
        ? "inline-block"
        : "none";
  });
  btnToTop.click((e) => {
    e.stopPropagation();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  //* New personnel form set-up (hidden)
  $("#new-personnel").append(createNewRecordForm());

  //* Adding a new team member
  $("#add-new-member").click(function (e) {
    e.stopPropagation();
    $("#new-personnel").toggleClass("hidden");
  });

  //* Canceling
  $("#cancel-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    $(formId)[0].reset();
    $(formId).toggleClass("hidden");
  });
});
