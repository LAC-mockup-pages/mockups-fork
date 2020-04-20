import {
  GetPosition,
  GetSubject,
  ddlPaidVolunteer,
  ddlTimeStatus,
  ddlExperienceYears,
} from "./data-server.mjs";

const createSelect = (hashTable, keyValue, selectedValue = "", numSelected) => {
  const [primary, secondary] = Object.keys(hashTable[0]);
  const optionList = hashTable
    .map((item) => {
      const selected = item[primary] === selectedValue ? " selected" : "";
      return `<option value=${item[primary]}${selected}>
          ${item[secondary]}</option>`;
    })
    .join("");
  const elementChoice = [
    `<div class="form-group input-field">
  <label for=${keyValue}>County</label>
  <select id=${keyValue} class="modal-select" name=${keyValue}>${optionList}</select>
</div>`,
    `<select id=${keyValue} class="modal-select form-control" name=${keyValue}><option selected disabled>Select an option</option>${optionList}</select>`,
  ];

  return elementChoice[numSelected];
};

const createNewRecordForm = () => {
  const labelList = {
    AgencyID: "Agency ID",
    PersFirst: "First name",
    PersLast: "Last name",
    lengthstay: "Length of stay (yrs)",
  };

  const selectList = {
    PersPositionID: ["Position", GetPosition],
    PersSubject: ["Subject", GetSubject],
    PersPayStatus: ["Paid/Volunteer", ddlPaidVolunteer],
    PersTimeStatus: ["Time status", ddlTimeStatus],
    PersExpYears: ["Experience", ddlExperienceYears],
  };

  const formNewPers = [];
  const keyList = Object.keys(labelList);
  const selectKeyList = Object.keys(selectList);

  for (const key of keyList) {
    let option = " required";
    let classOption = "";

    if (key === "AgencyID") classOption = " hidden";

    let inputElement = `<input type="text" class="form-control${classOption}" id=${key} name="${key}" placeholder="${labelList[key]}"${option} autocomplete="new-password" spellcheck="off">`;

    for (const key of selectKeyList) {
    }

    formNewPers.push(inputElement);
  }
  formNewPers.push(
    '<button type="button" id="submit-btn" form="new-personnel" class="btn btn-primary">Add</button><button type="button" id="cancel-btn" form="new-personnel" class="btn btn-default">Cancel</button>'
  );

  return formNewPers.join("");
};

export default createNewRecordForm;
