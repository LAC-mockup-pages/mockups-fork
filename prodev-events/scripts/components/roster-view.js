// Roster component on top of event-view

import { topBanner, subTableBody } from "./sub-table-elements.js";
const rosterList = ProfDevRoster.slice(0);
const agencyList = Agency.slice(0);
const regionList = Region.slice(0);

export const createModalRoster = (tdList) => {
  const fieldList = [
    {
      ID: "ID",
      AgencyID: "AgencyID",
      PDActivity_PKID: "Event ID",
      Personnel_PKID: "Personnel ID",
      PersonnelID: "Personnel ID",
      Name: "Full Name",
      Date: "Date",
      RAENID: "Region",
      AgencyName: "Agency Name",
      Attended: "Attended",
      FeesPaid: "Fees Paid",
    },
  ];
  const selectElementObj = {};
  // Adding a new participant with modal
};

export const rosterView = (eventID) => {
  const blockName = "Event Roster";

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

  const header = topBanner(blockName, [
    ["Personnal ID", "col-sm-2"],
    ["Name", "col-sm-2"],
    ["Region", "col-sm-2"],
    ["Agency", "col-sm-2"],
    ["Attended", "col-sm-2"],
    ["Fees Paid", "col-sm-2"],
  ]);

  const body = subTableBody(
    rosterData,
    blockName,
    ["ID", "AgencyID", "PDActivity_PKID", "Personnel_PKID", "Date"],
    {
      PersonnelID: "Personnel ID",
      Name: "Name",
      Region: "Region",
      AgencyName: "Agency",
      Attended: "Attended",
      FeesPaid: "Fees Paid",
    },
    "ProfDevRoster"
  );
  return header + body;
};
