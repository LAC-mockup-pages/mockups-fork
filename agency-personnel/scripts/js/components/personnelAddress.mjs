import { personnelData, topBanner } from "../main.mjs";

export const homeAddress = () => {
  const blockName = "Home Address";
  const header = topBanner(blockName);
  const {
    ID,
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
    ID,
    PersWorkAddress,
    PersWorkState,
    PersWorkCity,
    PersWorkZip,
  } = personnelData[0];
  const fullAddress = `${PersWorkAddress} - ${PersWorkZip} ${PersWorkCity.toUpperCase()} ${PersWorkState}`;
  const body = `<div class="work-address dark-text"> ${fullAddress}</div>`;
  return header + body;
};
