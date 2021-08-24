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
    const { ID, StudentID, First, Middle, Last } = student;
    result.push(
      `<option value="${Last}, ${First} ${Middle} | ${StudentID}" data-id=${ID}/>`
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
  // $(document).on("click", "#search-btn", (evnt) => {
  $("#search-btn").click((evnt) => {
    evnt.stopPropagation();
    evnt.preventDefault();
    const selection = $("#search-input").val();
    const optionList = [];
    $("#students option").each(function (indx) {
      const display =
        $(this).val() === selection ? $(this).attr("data-id") : "";
      console.log("display :>> ", display);
      if (display) optionList.push(display);
    });

    console.log(selection);
    console.log("optionList :>> ", optionList);
  });
});
