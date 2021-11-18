//*=================================================
//* Actions and Logic for local page
//*=================================================

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================

  //* =====================================

  //* Expand underpinned table when section is clicked
  $("section").click(function (evnt) {
    evnt.stopPropagation();
    $("section .visible").removeClass("visible").addClass("invisible");
    $(".invisible", this).removeClass("invisible").addClass("visible");
  });
});
