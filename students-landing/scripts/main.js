//*=================================================
//* Actions and Logic for local page
//*=================================================

const createDataList = (inputString) => {};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================

  //* Set focus on name input
  $("#search-input").focus();

  //* User input first 3 letters
  $("#search-input").change((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const input = $(this).val();
    if (input.length > 2) {
      const datalist = createDataList(input);
      $("#students").append(datalist);
    }
  });
});
