import { personnelData, topBanner } from "../main.mjs";

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

  const fullAddress = `${PersHomeAddress} <br> ${PersHomeZip} ${PersHomeCity.toUpperCase()} ${PersHomeState}`;
  const body = `<div class="home-address dark-text" data-fields='${JSON.stringify(
    fieldObj
  )}'> ${fullAddress}</div>`;

  return header + body;
};

export const createFormHomeAddress = (formName) => {
  const fieldObj = JSON.parse($(`.${formName}`).attr("data-fields"));
  const visibleFieldsList = Object.keys(fieldObj).slice(1);
  let result = `<input class="input-field hidden" type="text" id="PersonnelID-view" name="PersonnelID" value=${fieldObj.PersonnelID}>`;

  for (const field of visibleFieldsList) {
    const fieldValue = fieldObj[field].value ? fieldObj[field].value : "";
    const paramsObj = {
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
  // console.log("result :>> ", result);
  return ["Personnel", result];
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
  const fullAddress = `${PersWorkAddress} - ${PersWorkZip} ${PersWorkCity.toUpperCase()} ${PersWorkState}`;
  const body = `<div class="work-address dark-text"> ${fullAddress}
    <div class='container-fluid row work-address-checkbox'>
        <div class='mail-call-checkboxes col-sm-6'>
          <label for='canMail-checkbox'>Can receive mail? </label>
          <input type='checkbox' id='canMail-checkbox' ${canMailCheck} disabled/>
        </div>
        <div class='mail-call-checkboxes col-sm-6'>
          <label for='canCall-checkbox'>Can receive calls? </label>
          <input type='checkbox' id='canCall-checkbox' ${canCallCheck} disabled/>
        </div>
      </div>
  </div>`;
  return header + body;
};
