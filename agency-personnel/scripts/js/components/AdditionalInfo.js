//* Viewing additional info for the selected personnel

import { personnelData, topBanner } from "../main.js";

const leftBlock = () => {
  const {
    PersGender,
    PersEthnicity,
    PersBirthDate,
    PersEducation
  } = personnelData[0];

  const option = "disabled";
  const labelClassVal = "";

  const genderArgObj = {
    hashTable: ddlGender,
    keyValue: "PersGender",
    selectedValue: PersGender,
    labelVal: "Gender",
    labelClassVal,
    option
  };
  const ethnicityArgObj = {
    hashTable: GetEthnicity,
    keyValue: "PersEthnicity",
    selectedValue: PersEthnicity,
    labelVal: "Ethnicity",
    labelClassVal,
    option
  };

  const birthDateArgObj = {
    keyVal: "PersBirthDate",
    labelVal: "Birth Date",
    value: PersBirthDate,
    labelClassVal,
    classVal: "",
    option,
    optionHidden: "form-group"
  };

  const educationArgObj = {
    hashTable: ddlEducationLevel,
    keyValue: "PersEducation",
    selectedValue: PersEducation,
    labelVal: "Education Level",
    labelClassVal,
    option
  };

  // elementSelectModal() <== helperFunctions.js
  // elementInput() <== helperFunctions.js
  const gender = elementSelectModal(genderArgObj);
  const ethnicity = elementSelectModal(ethnicityArgObj);
  const birthDate = elementInput(birthDateArgObj);
  const education = elementSelectModal(educationArgObj);
  return `<div class="col-md-6 additional-left-bloc">
            ${gender}
            ${ethnicity}
            ${birthDate}
            ${education}
          </div>`;
};

const rightBlock = () => {
  const {
    PersEmploymentStatus,
    PersOccupation,
    PersReferral
  } = personnelData[0];

  const option = "disabled";
  const labelClassVal = "";

  const employmentArgObj = {
    hashTable: ddlEmploymentStatus,
    keyValue: "PersEmploymentStatus",
    selectedValue: PersEmploymentStatus,
    labelVal: "Employment Status",
    labelClassVal,
    option
  };

  const occupationArgObj = {
    hashTable: GetOccupation,
    keyValue: "PersOccupation",
    selectedValue: PersOccupation,
    labelVal: "Occupation",
    labelClassVal,
    option
  };

  const referralArgObj = {
    hashTable: GetReferralSource,
    keyValue: "PersReferral",
    selectedValue: PersReferral,
    labelVal: "Referral",
    labelClassVal,
    option
  };

  // elementSelectModal() <== helperFunctions.js
  // elementInput() <== helperFunctions.js
  const employment = elementSelectModal(employmentArgObj);
  const occupation = elementSelectModal(occupationArgObj);
  const referral = elementSelectModal(referralArgObj);

  return `<div class="col-md-6 additional-right-bloc">
            ${employment}
            ${occupation}
            ${referral}
          </div>`;
};

const addInfoView = () => {
  const blockName = "Additional Information";
  const blocId = blockName.toLowerCase().replace(/\W/gi, "-");
  const header = topBanner(blockName);
  const body = `
  <form class="row color-select" role="form" id=${blocId}
    data-table="getPersonnel" data-toggle="tooltip" data-placement="left"
    data-original-title="Click to Edit">
      ${leftBlock()}
      ${rightBlock()}
  </form>`;
  return header + body;
};

export default addInfoView;
