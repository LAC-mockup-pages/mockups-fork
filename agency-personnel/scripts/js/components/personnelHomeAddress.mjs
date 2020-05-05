import { personnelData, topBanner } from "../main.mjs";

const homeAddressView = () => {
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
  const body = `<h3 class="full-address">${fullAddress}</h3>`;

  return header + body;
};

export default homeAddressView;
