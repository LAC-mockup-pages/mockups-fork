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

export const rosterView = (eventID) => {
  const blockName = "Event Roster";
  const agencyList = Agency.slice(0);

  const rosterData = rosterList
    .filter((record) => record.PDActivity_PKID === eventID)
    .sort((record1, record2) => {
      const name1 = record1.Name,
        name2 = record2.Name;
      return name1.localeCompare(name2);
    })
    .map((record) => {
      const agency = agencyList.filter(
        (item) => item.AgencyID === record.AgencyID
      )[0];
      return {
        ...record,
        AgencyName: agency.AgencyName,
        Region: agency.RAENID,
      };
    });

  console.log("sorted roster data :>> ", rosterData);
  const header = topBanner(blockName, [
    ["Personnal ID", "col-sm-2"],
    ["Name", "col-sm-2"],
    ["Region", "col-sm-2"],
    ["Agency", "col-sm-2"],
    ["Attended", "col-sm-2"],
    ["Fee Paid", "col-sm-2"],
  ]);
  const body = "<h2>Body</h2>";
  // const body=subTableBody(rosterData, blockName,["ID","AgencyID","PDActivity_PKID","Personnel_PKID","PersonnelID","Date"])
  return header + body;
};
