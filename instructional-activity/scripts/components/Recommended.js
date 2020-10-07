// Course data not required but recommended
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

import { topBanner } from "../main.js";

export const createRecommended = (dataObj) => {
  let bloc = "";

  const { SiteID, SiteName } = dataObj;

  const siteList = GetSite.slice(0);

  const siteSelect = elementSelectModal({
    hashTable,
    keyValue,
    selectedValue,
    labelVal: "Site",
    labelClassVal,
    option,
    optionText
  });
  return bloc;
};
