const createNewRecordForm = () => {
  const createSimpleSelect = (hashTable, keyValue, labelValue) => {
    const [primary, secondary] = Object.keys(hashTable[0]);
    const optionList = hashTable
      .map((item) => {
        return `<option value=${item[primary]}>
          ${item[secondary]}</option>`;
      })
      .join("");
    const selectElement = `<select id=${keyValue} class="modal-select form-control red-text" name=${keyValue} required><option selected value=''>Select ${labelValue}</option>${optionList}</select>`;

    return selectElement;
  };

  const labelList = {
    AgencyID: "Agency ID",
    PersPersonnelID: "Personnel ID",
    PersFirst: "First name",
    PersLast: "Last name",
    PersStartDate: "Start date MM/DD/YYYY",
    lengthstay: "Length of stay (yrs)"
  };

  const selectList = {
    PersPositionID: ["Position", GetPosition],
    PersSubject: ["Subject", GetSubject],
    PersPayStatus: ["Paid/Volunteer", ddlPaidVolunteer],
    PersTimeStatus: ["Time status", ddlTimeStatus],
    PersExpYears: ["Experience", ddlExperienceYears]
  };
  const formNewPers = [];
  const keyList = Object.keys(labelList);
  const selectKeyList = Object.keys(selectList);

  for (const key of keyList) {
    let option = " required";
    let classOption = "";
    if (["AgencyID", "PersPersonnelID", "lengthstay"].includes(key))
      classOption = " hidden";
    let inputElement = `<input type="text" class="form-control${classOption}" id=${key} name="${key}" placeholder="${labelList[key]}"${option} aria-autocomplete="none" spellcheck="off">`;

    formNewPers.push(inputElement);
  }

  for (const key of selectKeyList) {
    formNewPers.push(
      createSimpleSelect(selectList[key][1], key, selectList[key][0])
    );
  }

  return formNewPers.join("");
};

export default createNewRecordForm;
