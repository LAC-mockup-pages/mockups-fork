//*=================================================
//* jQuery section for enrollment events
//*=================================================

$(document).ready(() => {
  //* Displaying selected record in Enrollment View.
  $(document).on("click", ".main-table tr", function (evnt) {
    evnt.stopPropagation();
    const rowId = $(this).attr("id");
    const selectedCourse = courseList.find((course) => course.ID === rowId);
    const { ClassID, StartDate, EndDate } = selectedCourse;

    const enrollmentView = createEnrollmentView(
      rowId,
      ClassID,
      StartDate,
      EndDate
    );

    // Cleaning up
    $(".record-entry, #filter-bloc").toggleClass("hidden");
    $("#view-bloc").empty().append(enrollmentView).attr("data-course", rowId);

    $("html, body").animate({ scrollTop: 220 }, 200);
    $("#offering").removeClass();
    $("#enrollment").addClass("selected-tab");
    $("#sub-nav .unselected-tab").removeClass("unselected-tab");
    $("#sub-nav .btn-link").prop("disabled", false).removeClass("disabled");

    // Enables customized tooltips
    $("[data-toggle='tooltip']").tooltip();
  });

  //* Adding a new student in Enrollment view
  $(document).on("click", "#add-student-btn", function () {
    const classID = $("#main-banner .label-text").text();
    const coursePKId = $("#view-bloc").data("course");
    const courseStartDate = $(this).data("start");
    const modalContent = addStudentModalForm(
      coursePKId,
      classID,
      courseStartDate
    );
    $("#modalBloc").modal("toggle");
    $("#edit-form")
      .empty()
      .append(modalContent)
      .attr("data-bloc", "add-student");
    $(".modal-title").replaceWith(
      "<h4 class='modal-title'>Enrolling a student</h4>"
    );
  });

  //* Selecting an enrolled student to edit
  $(document).on("click", ".student-table tbody tr", function () {
    const rowId = $(this).attr("id");
    const modalContent = editStudent(rowId);

    $("#modalBloc").modal("toggle");
    $("#edit-form")
      .empty()
      .append(modalContent)
      .attr("data-bloc", "edit-student");
  });

  //* Event handler for end date input in modal form
  //* when editing a student.
  $(document).on("focusout", "#edit-form #InactiveDate-view", function (evnt) {
    evnt.stopPropagation();
    const endDate = $(this).val();
    if (endDate) {
      console.log("it works", `==> ${endDate}`);
      $("#InactiveReason-view, #TransferTo-view").prop("disabled", false);
    } else {
      console.log("Nothing here!");
      return;
    }
  });
});
