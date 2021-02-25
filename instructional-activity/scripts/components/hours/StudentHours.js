// Hours view for the students in a selected course
// Accessible only from the Enrollment and Details views.

export const createStudentsBloc = () => {
  let bloc = "";
  const yearlyHours = GetContactHours_Annual.slice(0);
  const months = [
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
    "Jan.",
    "Fev.",
    "Mar.",
    "Apr.",
    "May",
    "Jun."
  ];

  // createHeaders() <== helperFunctions.js
  const header = createHeaders(["Student", "DOB", ...months]);

  return `
  <div class="container-fluid row" id="student-hours">
    <div class="student-title label-text blue-light-text">Student Hours</div>
  </div>
  <form class="student-hours" role="form" id="student-hours-form">
    <table class="table" id="student-hours-table">
      ${header}
      <tbody>

      </tbody>
    </table>
  </form>

  `;
};
