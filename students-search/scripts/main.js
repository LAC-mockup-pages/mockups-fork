//*=================================================
//* Actions and Logic for local page
//*=================================================

const createDataList = (inputString) => {
  const result = [];
  const studentList = GetStudentID.filter((student) =>
    student.Last.toLowerCase().startsWith(inputString.toLowerCase())
  ).sort((student1, student2) =>
    student1.Last < student2.Last ? -1 : student1.Last > student2.Last ? 1 : 0
  );

  for (const student of studentList) {
    const { ID, BirthDate, First, Middle, Last } = student;
    result.push(
      `<option value="${Last}, ${First} ${Middle} | Birth Date: ${BirthDate}" data-id=${ID}/>`
    );
  }

  return result;
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* =====================================
  //* At first rendering
  //* =====================================

  //* Set focus on name input
  $("#search-input").focus();

  //* =====================================

  //* User input first 3 letters
  $("#search-input").keyup((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const input = $("#search-input").val();

    if (input.length > 2) {
      const datalist = createDataList(input);
      $("#students").append(datalist);
      $("#students").click();
    }
  });

  //* Search button is clicked or pressed
  $("#search-btn").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const selection = $("#search-input").val();
    const optionList = [];
    let display;
    $("#students option").each(function (indx) {
      display = $(this).val() === selection ? $(this).attr("data-id") : "";
      if (display) optionList.push(display);
    });

    console.log("selection :>>", selection);
    console.log("optionList :>> ", optionList);

    // $(".student-search, .sub-navbar, .student-display").toggleClass("hidden");
    //! =====================================
    //! For Development only.
    //! In Production, replace landingUrl value with URL of .aspx
    //! student landing page.
    //! =====================================

    const landingUrl = "http://localhost:5500/student-landing/index.html";
    const targetUrl = `${landingUrl}?${optionList[0]}`;
    // $("#students").empty();

    window.location.assign(targetUrl);
  });
});
