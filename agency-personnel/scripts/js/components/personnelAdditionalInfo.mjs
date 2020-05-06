import { personnelData, topBanner } from "../main.mjs";
import {
  ddlGender,
  GetEthnicity,
  ddlEducationLevel,
  ddlEmploymentStatus,
  GetOccupation,
  GetReferralSource,
} from "../data-server.mjs";

const leftBloc = () => {
  const { PersGender, PersEthnicity, PersBirthDate } = personnelData;
};

const addInfoView = () => {
  const blockName = "Additional Information";

  const header = topBanner(blockName);
  return header;
};

export default addInfoView;
