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
  $(".sub-header").click(function (evnt) {
    evnt.stopPropagation();
    $("section .visible").removeClass("visible").addClass("invisible");
    $(this).siblings(".invisible").removeClass("invisible").addClass("visible");
  });

  //* Triggers edit modal with selected row elements and values
  $(document).on("click", ".table>tbody> tr", function (evnt) {
    evnt.stopPropagation();
    const editFormContent = "<h2>Selected Row</h2>";
    $("#modalBloc").modal("toggle");
    $("#edit-form").empty().append(editFormContent);
  });
});
