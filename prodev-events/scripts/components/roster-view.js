// Roster component on top of event-view

import { topBanner, subTableBody } from "./sub-table-elements.js";
const rosterList = ProfDevRoster.slice(0);
export const agencyList = Agency.slice(0);
export const regionList = Region.slice(0);
export const staffList = Staff.slice(0);

export const createModalRoster = (selectedRegion, selectedAgency) => {
  const labelList = {
    ID: "ID",
    AgencyID: "Agency",
    PDActivity_PKID: "Event ID",
    Personnel_PKID: "Personnel Name",
    PersonnelID: "Personnel Name",
    Name: "Full Name",
    Date: "Date",
    RAENID: "Region",
    Attended: "Attended",
    FeesPaid: "Fees Paid",
  };
  const selectElementObj = {
    RAENID: { hashTable: regionList, optionText: "a region" },
    AgencyID: {
      hashTable: [{ key: "AgencyID", val: "" }],
      optionText: "an agency",
    },
    Personnel_PKID: {
      hashTable: [{ key: "Personnel_PKID", val: "" }],
      optionText: "a participant",
    },
  };
  if (selectedRegion) {
    const filteredAgencyList = agencyList
      .filter((agency) => agency.RAENID === selectedRegion)
      .map((item) => {
        const { AgencyID, AgencyName } = item;
        return { AgencyID, AgencyName };
      });
    selectElementObj.AgencyID.hashTable = filteredAgencyList;
    selectElementObj.RAENID.selectedValue = selectedRegion;
  }

  if (selectedAgency) {
    const filteredStaffList = staffList
      .filter((staff) => staff.AgencyID === selectedAgency)
      .map((item) => {
        const { ID, Name } = item;
        return { ID, Name };
      });
    selectElementObj.RAENID.selectedValue = selectedRegion;
    selectElementObj.Personnel_PKID.hashTable = filteredStaffList;
    selectElementObj.AgencyID.selectedValue = selectedAgency;
  }

  let bloc = "";
  // Adding a new participant with modal
  for (const key in selectElementObj) {
    let keyValue = key;
    let { hashTable, optionText, selectedValue } = selectElementObj[key];
    let labelVal = labelList[key];
    selectedValue = selectedValue ? selectedValue : "";
    bloc += elementSelectModal({
      hashTable,
      keyValue,
      selectedValue,
      labelVal,
      labelClassVal: 'class="red-text"',
      option: "required",
      optionText,
    });
  }
  const attendedCheckbox = `<div class="input-field form-group">
  <label for="Attended">${labelList.Attended}</label>
  <input type="checkbox" id="attended-box" name="Attended"/>
  </div>
  `;
  const feesCheckbox = `<div class="input-field form-group">
  <label for="FeesPaid">${labelList.FeesPaid}</label>
  <input type="checkbox" name="FeesPaid" id="fees-box"/>
  </div>
  `;

  return bloc + attendedCheckbox + feesCheckbox;
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
