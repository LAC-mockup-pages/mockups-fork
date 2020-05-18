import { elementSelectWithLabel } from "../main.mjs";

const createFormAdd = (formName) => {
  const firstRowID = `#${formName}-0 td`;
  const firstRow = $(firstRowID).get();
  let result = "";
  console.log("firstRow :>> ", firstRow);

  for (const cell of firstRow) {
    let optionHidden = $(cell).attr("class").includes("hidden") ? "hidden" : "";
    let keyVal = $(cell).attr("data-field");
    let labelVal = $(cell).attr("data-label") ? $(cell).attr("data-label") : "";

    if (["Personnal"].includes(keyVal)) {
      const paramsSelect = {
        hashTable,
        keyValue,
        selectedValue,
        labelVal,
        labelClassVal,
        option,
      };
    } else {
      const paramsObj = {
        keyVal,
        labelVal,
        value: "",
        labelClassVal: "",
        classVal: "",
        option: "",
        optionHidden,
      };
      result += elementInput(paramsObj);
    }
  }
  console.log("result :>> ", result);

  return result;
};

export default createFormAdd;
