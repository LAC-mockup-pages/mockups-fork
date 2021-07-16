//*=================================================
//* Actions and Logic for local page
//*=================================================

const increaseBar = (elem) => {
  let width = 1;
  const id = setInterval(frame, 400);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      $("#bar-container").toggleClass("hidden");
    } else {
      width += Math.floor(Math.random() * 10 + 1);
      elem.width(`${width}%`);
    }
  }
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Send focus on first name input
  $("#first-name").focus();

  //* Removes hidden class on closing modal
  $("#close-button").click(() => {
    $("#bar-container").toggleClass("hidden");
    $("#modalBloc").modal("toggle");
  });

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
        Last: "Adams",
        BirthDate: "01/01/1981"
      },
      {
        ID: "02",
        StudentID: "AdamAlanPRA2252018111982",
        First: "Alan",
        Middle: "D.",
        Last: "Adam",
        BirthDate: "01/01/1982"
      }
    ];
    //! ==========================================

    $("#modalBloc").modal("toggle");
    const element = $("#load-bar");
    $("#bar-container").removeClass("hidden");
    increaseBar(element);
  });
});
