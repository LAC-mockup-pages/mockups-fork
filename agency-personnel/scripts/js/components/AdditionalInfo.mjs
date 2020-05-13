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
  return `<div class="col-md-6">
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
    PersReferral,
  } = personnelData[0];

  const employmentArgObj = {
    hashTable: ddlEmploymentStatus,
    keyValue: "PersEmploymentStatus",
    selectedValue: PersEmploymentStatus,
    labelVal: "Employment Status",
    labelClassVal: "",
    option: "",
  };

  const occupationArgObj = {
    hashTable: GetOccupation,
    keyValue: "PersOccupation",
    selectedValue: PersOccupation,
    labelVal: "Occupation",
    labelClassVal: "",
    option: "",
  };

  const referralArgObj = {
    hashTable: GetReferralSource,
    keyValue: "PersReferral",
    selectedValue: PersReferral,
    labelVal: "Referral",
    labelClassVal: "",
    option: "",
  };

  const employment = elementSelectWithLabel(employmentArgObj);
  const occupation = elementSelectWithLabel(occupationArgObj);
  const referral = elementSelectWithLabel(referralArgObj);

  return `<div class="col-md-6">
            ${employment}
            ${occupation}
            ${referral}
          </div>`;
};

const addInfoView = () => {
  const blockName = "Additional Information";
  const { ID } = personnelData[0];
  const header = topBanner(blockName);
  const body = `<form class="row" role="form" id="additional-information">
                  <input class="hidden" name="ID" value=${ID}>
                  ${leftBlock()}
                  ${rightBlock()}
                </form>`;
  return header + body;
};

export default addInfoView;
