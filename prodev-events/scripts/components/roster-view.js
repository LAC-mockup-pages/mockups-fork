// Roster component on top of event-view

import { topBanner, subTableBody } from "./sub-table-elements.js";
const rosterList = ProfDevRoster.slice(0);

export const createRosterBloc = () => {
  const headerRoster = createHeaders([
    "Personnal ID",
    "Name",
    "Region",
    "Agency",
    "Attended",
    "Fee Paid",
  ]);
  const bodyRoster = rosterList
    .map((person) => {
      return `<tr>
  <td class="cell-data">${person.PersonnelID}</td>
  <td class="cell-data">${person.Name}</td>
  <td class="cell-data">${person.Attended}</td>
  <td class="cell-data">${person.FeesPaid}</td>
  </tr>`;
    })
    .join("");
  return `<h3 class="blue-light-text" style="text-align:center">Event Roster</h3>
  <table class="table blue-bg" id="roster-table">
  ${headerRoster}
  <tbody>
  ${bodyRoster}
  </tbody>
  </table>`;
};
