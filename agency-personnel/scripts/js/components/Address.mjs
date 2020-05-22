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
  const fullAddress = `${PersHomeAddress} - ${PersHomeZip} ${PersHomeCity.toUpperCase()} ${PersHomeState}`;
  const body = `<div class="home-address dark-text"> ${fullAddress}</div>`;

  return header + body;
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
