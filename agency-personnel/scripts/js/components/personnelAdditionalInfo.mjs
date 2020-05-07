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
  const { PersGender, PersEthnicity, PersBirthDate } = personnelData;
  const gender = elementSelectWithLabel({ hashTable: ddlGender });

  return `<div><h3>Left Block</h3></div>`;
};

const rightBlock = () => {
  return `<div><h3>Right Bloc</h3>
  <div>Employment status</div><div>Occupation</div><div>Referral</div></div>`;
};

const addInfoView = () => {
  const blockName = "Additional Information";

  const header = topBanner(blockName);
  return header + leftBlock() + rightBlock();
};

export default addInfoView;
