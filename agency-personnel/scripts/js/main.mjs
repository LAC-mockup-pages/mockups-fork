//* Logic for page

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
  createNewRecordForm();

  //* Adding a new team member
  $("#add-new-member").click(function (e) {
    e.stopPropagation();
    $("#new-personnel").toggleClass("hidden");
  });
});
