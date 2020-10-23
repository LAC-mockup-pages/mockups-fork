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
  // $(".hero").append(`<h3>Details View comes here</h3>
  // <h3>${dataObj[0].CourseID}</h3>`);
  const { ID, FSID } = dataObj[0];

  // Creating blocks
  const mainInfo = createCourseMain(dataObj[0]);
  const funding = createFundingBloc(FSID);
  const schedule = createSchedule(dataObj[0]);
  const recommended = createRecommended();
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
      ${additionalInfo}
    </div>


  </div>`);
};
