import { personnelData, topBanner } from "../main.mjs";
import { ddlStates } from "../data-server.mjs";
import { elementSelectWithLabel } from "../main.mjs";

export const homeAddress = () => {
  const blockName = "Home Address";
  const header = topBanner(blockName);
  const {
    PersonnelID,
    PersHomeAddress,
    PersHomeState,
    PersHomeCity,
    PersHomeZip,
  } = personnelData[0];

  const fieldObj = {
    PersonnelID: { value: PersonnelID, label: "" },
    PersHomeAddress: { value: PersHomeAddress, label: "Address" },
    PersHomeZip: { value: PersHomeZip, label: "ZIP code" },
    PersHomeCity: { value: PersHomeCity, label: "City" },
    PersHomeState: { value: PersHomeState, label: "State" },
  };

  const fullAddress = `${PersHomeAddress} <br> ${PersHomeCity.toUpperCase()} ${PersHomeState} ${PersHomeZip}`;
  const body = `<div class="home-address dark-text" data-fields='${JSON.stringify(
    fieldObj
  )}'> ${fullAddress}</div>`;

  return header + body;
};

export const createModalFormAddress = (formName) => {
  const fieldObj = JSON.parse($(`.${formName}`).attr("data-fields"));
  const visibleFieldsList = Object.keys(fieldObj).slice(1);
  let result = `<input class="input-field hidden" type="text" id="PersonnelID-view" name="PersonnelID" value=${fieldObj.PersonnelID.value}>`;

  for (const field of visibleFieldsList) {
    const fieldValue = fieldObj[field].value ? fieldObj[field].value : "";
    let paramsObj;
    if (["PersHomeState", "PersWorkState"].includes(field)) {
      paramsObj = {
        hashTable: ddlStates,
        keyValue: field,
        selectedValue: fieldObj[field].value,
        labelVal: fieldObj[field].label,
        labelClassVal: "",
        option: "",
      };
      result += elementSelectWithLabel(paramsObj);
    } else if (["PersWorkSendMail", "PersWorkCanCall"].includes(field)) {
      const checkedStatus =
        fieldObj[field].value === "True" ? "checked='checked'" : "";

      result += `<div class='input-field mail-call-checkboxes'>
      <label for=${field}>${fieldObj[field].label}</label>
      <input type='checkbox' id=${field}-view name=${field} ${checkedStatus} value='${fieldObj[field].value}'/>
    </div>`;
    } else {
      paramsObj = {
        keyVal: field,
        labelVal: fieldObj[field].label,
        value: fieldValue,
        labelClassVal: "",
        classVal: "",
        option: "",
        optionHidden: "",
      };
      result += elementInput(paramsObj);
    }
  }
  return ["Personnel", result];
};

export const handleChangeCheckBox = () => {
  $(".mail-call-checkboxes input").bind("change", function (evnt) {
    evnt.stopPropagation();
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked").removeAttr("value");
      $(this).attr("value", "False");
      const boxName = $(this).attr("name");
      $(`#${boxName}-checkbox`).removeAttr("checked").attr("value", "False");
    } else {
      $(this).attr("checked", "checked").attr("value", "True");
      const boxName = $(this).attr("name");
      $(`#${boxName}-checkbox`)
        .attr("checked", "checked")
        .attr("value", "True");
    }
  });
};

export const checkCanMailOrCall = () => {
  if (!$("#PersWorkSendMail-view").checked) {
    $("#PersWorkSendMail-view").prop("checked", true);
  }

  if (!$("#PersWorkCanCall-view").checked) {
    $("#PersWorkCanCall-view").prop("checked", true);
  }
};

export const workAddress = () => {
  const blockName = "Work Address";
  const header = topBanner(blockName);
  const {
    PersonnelID,
    PersWorkAddress,
    PersWorkState,
    PersWorkCity,
    PersWorkZip,
    PersWorkSendMail,
    PersWorkCanCall,
  } = personnelData[0];

  const canMailCheck = PersWorkSendMail === "False" ? "" : "checked";
  const canCallCheck = PersWorkCanCall === "False" ? "" : "checked";

  const fieldObj = {
    PersonnelID: { value: PersonnelID, label: "" },
    PersWorkAddress: { value: PersWorkAddress, label: "Address" },
    PersWorkCity: { value: PersWorkCity, label: "City" },
    PersWorkState: { value: PersWorkState, label: "State" },
    PersWorkZip: { value: PersWorkZip, label: "ZIP code" },
    PersWorkSendMail: { value: PersWorkSendMail, label: "Can receive mail? " },
    PersWorkCanCall: { value: PersWorkCanCall, label: "Can receive calls? " },
  };
  const fullAddress = `${PersWorkAddress}<br> ${PersWorkCity.toUpperCase()} ${PersWorkState} ${PersWorkZip}`;
  const body = `<div class="work-address dark-text" data-fields='${JSON.stringify(
    fieldObj
  )}'> ${fullAddress}
    <div class='container-fluid row work-address-checkbox'>
        <div class='mail-call-checkboxes col-sm-6'>
          <label for='canMail-checkbox'>Can receive mail? </label>
          <input type='checkbox' id='PersWorkSendMail-checkbox' ${canMailCheck} disabled/>
        </div>
        <div class='mail-call-checkboxes col-sm-6'>
          <label for='canCall-checkbox'>Can receive calls? </label>
          <input type='checkbox' id='PersWorkCanCall-checkbox' ${canCallCheck} disabled/>
        </div>
      </div>
  </div>`;
  return header + body;
};
