import { personnelData, topBanner, elementSelectWithLabel } from "../main.mjs";
import {
  ddlGender,
  GetEthnicity,
  ddlEducationLevel,
  ddlEmploymentStatus,
  GetOccupation,
  GetReferralSource,
} from "../data-server.mjs";

const leftBlock = () => {
  const { PersGender, PersEthnicity, PersBirthDate } = personnelData[0];
  console.log("PersGender :>> ", personnelData);
  const genderArgObj = {
    keyValue: "PersGender",
    labelVal: "Gender",
    value: PersGender,
    labelClassVal: "",
    classVal: "",
    option: "",
  };
  const gender = elementInput(genderArgObj);
  // const gender = "<h2>Left Bloc</h2>";
  return `<form class="col-md-6" role="form">${gender}</form>`;
};

const rightBlock = () => {
  return `<div class="col-md-6"><h3>Right Bloc</h3>
  <div>Employment status</div><div>Occupation</div><div>Referral</div></div>`;
};

const addInfoView = () => {
  const blockName = "Additional Information";

  const header = topBanner(blockName);
  const body = `<div class="row">
      ${leftBlock()}
      ${rightBlock()}
    </div>`;
  return header + body;
};

export default addInfoView;
