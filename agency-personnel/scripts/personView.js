//* Additional script to view/edit selected personnel
const createInputField = (
  keyVal,
  labelClassVal,
  labelVal,
  classVal,
  value,
  option
) => {
  return `<div class="input-field">
    <label for='${keyVal}' class='${labelClassVal}'>${labelVal}</label>
    <input type="text" id='${keyVal}' class='${classVal}' value='${value}' ${option}>
    </div>`;
};

const persoInfo = (arrPersoInfo, arrPhonesEmails) => {
  let personInfoBloc = "";
  // first part of person bloc
  for (let i = 0; i < 3; i++) {
    const labelField = placeholderList[i];
    const [keyField, valueField] = arrPersoInfo[i];
    const classOption = labelField.replace(/\s/, "-").toLowerCase();
    personInfoBloc += createInputField(
      keyField,
      "red-text",
      labelField,
      classOption,
      valueField,
      "required"
    );
  }
  // seniority
  const seniorityYears = moment(arrPersoInfo[2], "MM/DD/YYYY")
    .fromNow()
    .replace(" ago", "");
  personInfoBloc += createInputField(
    "seniority",
    "",
    "Length of Stay (yrs)",
    "seniorityClass",
    seniorityYears,
    "disabled"
  );
  //Last part of person bloc
  for (let j = 3; j < arrPersoInfo.length; j++) {
    const labelField = placeholderList[j + 1];
    const [keyField, valueField] = arrPersoInfo[j];
    const classOption = labelField[0].replace(/\s|\W/, "-").toLowerCase();
    const value = labelField[1][valueField];
    personInfoBloc += createInputField(
      keyField,
      "red-text",
      labelField[0],
      classOption,
      value,
      "required"
    );
  }
  // Phones and Emails
  for (item of arrPhonesEmails) {
    const labelPhoneEmail = item[0]
      .split("-")[1]
      .replace(/[A-Z]/g, letter => " " + letter)
      .trim();
    personInfoBloc += createInputField(
      item[0],
      "",
      labelPhoneEmail,
      "",
      item[1],
      ""
    );
  }
  return personInfoBloc;
};

const createTableBody = (personID, arr, list, blockName) => {
  let dataRow = "";

  for (item of arr) {
    const { id, date, status } = item;
    dataRow += `<tr id=${id}-row-${blockName}>
    <td class='${blockName}-cell'>${date}</td>
    <td class='${blockName}-cell'>${list[status]}</td>
  </tr>`;
  }
  return `<div class="${blockName}-table">
      <table class="table" id='${personID}-${blockName}'>
        <tbody>${dataRow}</tbody>
    </table></div>`;
};

const personHistory = personID => {
  let personHistoryBloc = `<div class='sub-header blue-bg blue-light-text'>
    <div class='sub-header-title'>History</div>`;
  const listFields = historyData
    .filter(item => item.personnelID === personID)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const headers = `<div class='container-fluid'><div class='row sub-header-labels'>
      <div class='bloc-history-date col-sm-4'>Date</div>
      <div class='bloc-history-status col-sm-8'>Status</div>
    </div></div></div>`;

  const dataRows = createTableBody(
    personID,
    listFields,
    historyList,
    "history"
  );
  return personHistoryBloc + headers + dataRows;
};

const createProDevBody = (personID, arr, blockName) => {
  let dataRow = "";

  for (item of arr) {
    const {
      id,
      date,
      workshopName,
      providerName,
      category,
      hours,
      attended
    } = item;
    dataRow += `<tr id=${id}-row-${blockName}>
    <td class='${blockName}-cell col-sm-2'>${date}</td>
    <td class='${blockName}-cell col-sm-6'>${workshopName}<br>by: ${providerName}</td>
    <td class='${blockName}-cell col-sm-2'>${category}</td>
    <td class='${blockName}-cell col-sm-1'>${hours}</td>
    <td class='${blockName}-cell col-sm-1'>${attended}</td>
  </tr>`;
  }
  return `<div class="${blockName}-table">
      <table class="table" id='${personID}-${blockName}'>
        <tbody>${dataRow}</tbody>
    </table></div>`;
};

const personProDev = personID => {
  let personProDevBloc = `<div class='sub-header blue-bg blue-light-text'>
    <div class='sub-header-title'>Professional Development</div>`;
  const listFields = proDevData
    .filter(item => item.personnelID === personID)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(line => {
      const attend = line.attended === "true" ? "Yes" : "No";
      return { ...line, attended: attend };
    });
  const headers = `<div class='container-fluid'><div class='row sub-header-labels'>
      <div class='bloc-proDev-date col-sm-2'>Date</div>
      <div class='bloc-proDev-workshop col-sm-6'>Workshop/Provider</div>
      <div class='bloc-proDev-category col-sm-2'>Category</div>
      <div class='bloc-proDev-hrs col-sm-1'>Hrs</div>
      <div class='bloc-proDev-attended col-sm-1'>Done?</div>
      </div></div></div>`;

  console.log("listFields :", listFields);
  const dataRows = createProDevBody(personID, listFields, "proDev");
  return personProDevBloc + headers + dataRows;
};
