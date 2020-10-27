// Details view for a course after new course creation
// or when editing a course.
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

import { createCourseMain } from "./CourseMain.js";
import { createFundingBloc } from "./FundingSources.js";
import { createRecommended } from "./Recommended.js";
import { createSchedule } from "./Schedule.js";
import { createAdditionalBloc } from "./Instructors.js";

export const detailsView = (dataObj) => {
  $(".record-entry, #filter-bloc, #view-bloc").toggleClass("hidden");
  const { ID, FSID,Sessions, } = dataObj[0];
  console.log("dataObj :>> ", dataObj);

  // Creating blocks
  const mainInfo = createCourseMain(dataObj[0]);
  const funding = createFundingBloc(FSID);
  const schedule = createSchedule(dataObj[0]);
  const recommended = createRecommended();
  const additionalInfoList
  const additionalInfo = createAdditionalBloc();

  // Displaying blocks
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

    <div class="container-fluid row additional-bloc">
    <div class="col-md-6"> ${additionalInfo}</div>

    </div>


  </div>`);
};
