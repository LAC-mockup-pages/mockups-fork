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
  const {
    PersGender,
    PersEthnicity,
    PersBirthDate,
    PersEducation,
  } = personnelData[0];

  const genderArgObj = {
    hashTable: ddlGender,
    keyValue: "PersGender",
    selectedValue: PersGender,
    labelVal: "Gender",
    labelClassVal: "",
    option: "",
  };
  const ethnicityArgObj = {
    hashTable: GetEthnicity,
    keyValue: "PersEthnicity",
    selectedValue: PersEthnicity,
    labelVal: "Ethnicity",
    labelClassVal: "",
    option: "",
  };

  const birthDateArgObj = {
    keyVal: "PersBirthDate",
    labelVal: "Birth Date",
    value: PersBirthDate,
    labelClassVal: "",
    classVal: "",
    option: "",
  };

  const educationArgObj = {
    hashTable: ddlEducationLevel,
    keyValue: "PersEducation",
    selectedValue: PersEducation,
    labelVal: "Education Level",
    labelClassVal: "",
    option: "",
  };

  const gender = elementSelectWithLabel(genderArgObj);
  const ethnicity = elementSelectWithLabel(ethnicityArgObj);
  const birthDate = elementInput(birthDateArgObj);
  const education = elementSelectWithLabel(educationArgObj);
  // const gender = "<h2>Left Bloc</h2>";
  return `<form class="col-md-6" role="form">${gender}${ethnicity}${birthDate}${education}</form>`;
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
