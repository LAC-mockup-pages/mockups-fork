// Roster component on top of event-view

import { topBanner, subTableBody } from "./sub-table-elements.js";
const rosterList = ProfDevRoster.slice(0);
export const agencyList = Agency.slice(0);
export const regionList = Region.slice(0);
export const staffList = Staff.slice(0);

export const createModalRosterEdit = (tdList) => {
  let bloc = "";
  const boxValues = [];

  const labelList = {
    ID: "ID",
    AgencyID: "Agency",
    AgencyName: "Agency Name",
    PDActivity_PKID: "Event ID",
    Personnel_PKID: "Personnel Name",
    PersonnelID: "Personnel Name",
    Name: "Full Name",
    Date: "Date",
    RAENID: "Region",
    Attended: "Attended",
    FeesPaid: "Fees Paid",
  };

  const hiddenList = [
    "ID",
    "AgencyID",
    "PersonnelID",
    "PDActivity_PKID",
    "Date",
    "Personnel_PKID",
  ];

  const fieldList = Object.keys(labelList);
  const filteredList = tdList.filter((elmnt) =>
    fieldList.includes($(elmnt).attr("data-field"))
  );
  for (const td of filteredList) {
    let keyVal = $(td).attr("data-field");
    let labelVal = $(td).attr("data-label");
    let value = $(td).text();
    let optionHidden = "form-group";
    let classVal = "";
    let option = "disabled";
    if (["Attended", "FeesPaid"].includes(keyVal)) {
      bloc += `<div class="input-field form-group">
    <label for=${keyVal}>${labelVal}</label>
    <input type="checkbox" id="${keyVal}-box" name=${keyVal}/>
    </div>
    `;
      boxValues.push({ keyVal, value });
    } else {
      if (hiddenList.includes(keyVal)) optionHidden += " hidden";
      // elementInput() <== helperFunctions.js
      bloc += elementInput({
        keyVal,
        labelVal,
        value,
        labelClassVal: "",
        classVal,
        option,
        optionHidden,
      });
    }
  }
  return [bloc, boxValues];
};

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

    // elementSelectModal() <== helperFunctions.js
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

  if ($("#Personnel_PKID-view").val()) {
    console.log(
      "Person text: ",
      $("#Personnel_PKID-view option:selected").text()
    );
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
        RAENID: agency.RAENID,
      };
    });

  // topBanner() <== sub-table-elements.js
  const header = topBanner(blockName, [
    ["Personnal ID", "col-sm-2"],
    ["Name", "col-sm-2"],
    ["Region", "col-sm-2"],
    ["Agency", "col-sm-2"],
    ["Attended", "col-sm-2"],
    ["Fees Paid", "col-sm-2"],
  ]);

  // subTableBody() <== sub-table-elements.js
  const body = subTableBody(
    rosterData,
    blockName,
    ["ID", "AgencyID", "PDActivity_PKID", "Personnel_PKID", "Date"],
    {
      PersonnelID: "Personnel ID",
      Name: "Name",
      RAENID: "Region",
      AgencyName: "Agency",
      Attended: "Attended",
      FeesPaid: "Fees Paid",
    },
    "ProfDevRoster"
  );
  return header + body;
};
