// Details view for a course after new course creation
// or when editing a course.
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

import { createCourseMain } from "./CourseMain.js";
import { createFundingBloc } from "./FundingSources.js";
import { createRecommended } from "./Recommended.js";
import { createSchedule } from "./Schedule.js";
import { createInstructorsBloc } from "./Instructors.js";
import { createAdditionalFields } from "./AdditionalInfo.js";
import { createProjectedSces } from "./ProjectedSces.js";

export const detailsView = (dataObj) => {
  $(".record-entry, #filter-bloc, #view-bloc").toggleClass("hidden");
  const {
    ID,
    FSID,
    Sessions,
    AMPM,
    SessionLength,
    Seats,
    HoursWeek,
    RoomNumber,
    LowestLevel,
    CAI,
    ProgramID,
    ProjTotContHrs,
    ProjTotInstHrs,
    ProjTotADA,
    ProjTotEIH
  } = dataObj[0];

  // =========================================================
  // Creating blocks
  // =========================================================
  const mainInfo = createCourseMain(dataObj[0]);
  const funding = createFundingBloc(FSID);
  const schedule = createSchedule(dataObj[0]);
  const recommended = createRecommended();
  const instructors = createInstructorsBloc();
  const additionalFields = createAdditionalFields({
    Sessions,
    AMPM,
    SessionLength,
    Seats,
    HoursWeek,
    RoomNumber,
    LowestLevel,
    CAI,
    ProgramID
  });
  const projSces = createProjectedSces({
    ProjTotContHrs,
    ProjTotInstHrs,
    ProjTotADA,
    ProjTotEIH
  });

  // =========================================================
  // Displaying blocks
  // =========================================================
  $(".hero").append(`
  <div class="container-fluid course-details" id=${ID}>
    <div class="row first-bloc">
      <div class="main-info col-md-6">
        ${mainInfo}
      </div>
      <div class="funding-schedule col-md-6">
      ${funding}
      ${schedule}
      </div>
    </div>
    <div class="blue-light-bg blue-text recommended-title">Recommended Items
    </div>
    <div class="container-fluid row recommended-bloc">
      ${recommended}
    </div>

    <div class="separation"></div>

    <div class="container-fluid row additional-bloc">
    <div class="col-md-6">${additionalFields}</div>
    <div class="col-md-6">${instructors}${projSces}</div>

    </div>


  </div>

  <div class="container-fluid row buttons-bloc-new">
  <div class="col-md-8"></div>
  <div class="col-md-4">
    <button type="button" id="event-view-cancel-btn" class="btn btn-default">Cancel without saving</button>
    <button type="button" id="event-view-submit-btn" class="btn dark-blue-text blue-light-bg">Save</button>
  </div>
</div>`);
};
