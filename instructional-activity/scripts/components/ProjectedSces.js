// Projected Services values come from the GetCourse procedure // or responseObj after a new course is created

import { topBanner } from "../main.js";

export const createProjectedSces = (fieldList) => {
  let bloc = topBanner("Projected Services");
  const { ProjTotContHrs, ProjTotInstHrs, ProjTotADA, ProjTotEIH } = fieldList;
  // ========================================================
  // Fields
  // =========================================================
  let option = "disabled";
  let optionHidden = "";
  let labelClassVal = "";
  let classVal = "";

  const projContHrs = elementInput({
    keyVal: "ProjTotContHrs",
    labelVal: "Contact Hours",
    value: ProjTotContHrs,
    labelClassVal,
    classVal,
    option,
    optionHidden
  });
  const projInstrHrs = elementInput({
    keyVal: "ProjTotInstHrs",
    labelVal: "Instructional Hours",
    value: ProjTotInstHrs,
    labelClassVal,
    classVal,
    option,
    optionHidden
  });
  const projADA = elementInput({
    keyVal: "ProjTotADA",
    labelVal: "ADA",
    value: ProjTotADA,
    labelClassVal,
    classVal,
    option,
    optionHidden
  });
  const projEIH = elementInput({
    keyVal: "ProjTotEIH",
    labelVal: "Equivalent Instructional Hours",
    value: ProjTotEIH,
    labelClassVal,
    classVal,
    option,
    optionHidden
  });

  bloc += `${projContHrs}${projInstrHrs}${projADA}${projEIH}`;
  return bloc;
};
