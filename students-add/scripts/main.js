//*=================================================
//* Actions and Logic for local page
//*=================================================

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Send focus on first name input
  $("#first-name").focus();

  //* Triggers search for possible duplicates after first, middle,
  //* last and DOB are entered
  $("#birthdate").focusout((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const first = $("#first-name").val();
    const last = $("#last-name").val();
    const dateOfBirth = $(this).val();

    //! ==========================================
    //! IN PRODUCTION: change the name to real name
    //! ==========================================
    // const possibleDuplicates = GetDuplicates(first, last, dateOfBirth);
    //! Comment out the following
    const possibleDuplicates = [
      {
        ID: "01",
        StudentID: "AdamsAlbertPRA2252017111981",
        First: "Albert",
        Middle: "D.",
        Last: "Adams"
      },
      {
        ID: "02",
        StudentID: "AdamAlanPRA2252018111982",
        First: "Alan",
        Middle: "D.",
        Last: "Adam"
      }
    ];
    //! ==========================================

    $("#modalBloc").modal("toggle");
  });
});
