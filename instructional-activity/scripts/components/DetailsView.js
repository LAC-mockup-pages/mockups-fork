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

export const createDetailsView = (dataObj) => {
  const {
    ID,
    FSID,
    Sessions,
    AMPM,
    SessionLength,
    Seats,
    HoursWeek,
    RoomNumber,
    LowerLevel,
    CAI,
    ProgramID,
    ProjTotContHrs,
    ProjTotInstHrs,
    ProjTotADA,
    ProjTotEIH,
    SiteName,
    SiteID,
    ProjTotStudents
  } = dataObj;

  // =========================================================
  // Creating blocks
  // =========================================================
  const mainInfo = createCourseMain(dataObj);
  const funding = createFundingBloc(FSID);
  const schedule = createSchedule(dataObj);
  const recommended = createRecommended([SiteName, SiteID], ProjTotStudents);
  const instructors = createInstructorsBloc();
  const additionalFields = createAdditionalFields({
    Sessions,
    AMPM,
    SessionLength,
    Seats,
    HoursWeek,
    RoomNumber,
    LowerLevel,
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
  return `
  <div class="container-fluid course-details" id=${ID}>
    <div class="row first-bloc">
      <div class="main-info col-md-6" id="main-info" data-toggle='tooltip' data-placement='left' title='Click to Edit'>
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
    <div class="col-md-6 additional-info-bloc" id="additional-info" data-toggle='tooltip' data-placement='left' title='Click to Edit'>${additionalFields}</div>
    <div class="col-md-6">${instructors}
    <div class="projected-bloc" id="projected-sces" data-toggle='tooltip' data-placement='right' title='Click to Edit'>
    ${projSces}
    </div>
    </div>
    </div>
  </div>
</div>`;
};
