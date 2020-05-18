import { elementSelectWithLabel } from "../main.mjs";
import { GetPersStatusCodes } from "../data-server.mjs";

const createFormAdd = (formName) => {
  const firstRowID = `#${formName}-0 td`;
  const firstRow = $(firstRowID).get();
  let result = "";

  for (const cell of firstRow) {
    let optionHidden = $(cell).attr("class").includes("hidden") ? "hidden" : "";
    let keyVal = $(cell).attr("data-field");
    let labelVal = $(cell).attr("data-label") ? $(cell).attr("data-label") : "";

    if (["PersonnelStatID"].includes(keyVal)) {
      const paramsSelect = {
        hashTable: GetPersStatusCodes,
        keyValue: keyVal,
        selectedValue: "",
        labelVal,
        labelClassVal: "",
        option: "",
      };
      result += elementSelectWithLabel(paramsSelect);
    } else {
      if (keyVal === "PersonnelStatDesc") optionHidden = "hidden";
      const paramsObj = {
        keyVal,
        labelVal,
        value: "",
        labelClassVal: "",
        classVal: "",
        option: "placeholder='MM/DD/YYYY'",
        optionHidden,
      };
      result += elementInput(paramsObj);
    }
  }
  return result;
};

export default createFormAdd;
