//* Saving data
//* ===========================

//! ==================================================
//! For production
//! ==================================================
// export const initialSave = async (saveObj) => {
//   try {
//     const body = JSON.stringify(saveObj);
//     const response = await fetch("MyURL", { method: "POST", body });
//     return response.json()
//   } catch (error) {
//     console.log(`Something went wrong! ${error}`);
//   }
// };

//! ==================================================
//! Only for development - Comment out for production
//! ==================================================
export const initialSave = () => {
  return [{ ID: "999999" }];
};
//! ==================================================

// Removes all the objects with RaceID, concatenate the values in 1 string
// and add a unique object {name: "RaceID", value: raceValues}.
// Returns the updated list of data objects.
const raceIDProcess = (list) => {
  const raceList = list.filter((obj) => obj.name === "RaceID" && obj.value);
  const raceValues = raceList.map((obj) => obj.value).join(",");
  const filteredList = list.filter((obj) => obj.name !== "RaceID");
  filteredList.push({ name: "RaceID", value: raceValues });
  return filteredList;
};

// Add all the selected barriers with their yes/no answer.
const barriersProcess = () => {
  const fields = $(".barriers-form").serializeArray();
  const fieldsObj = {};
  const fieldsList = [];

  const filteredList = fields.filter((obj) => obj.value);
  const filteredListLength = filteredList.length;

  for (let i = 0; i < filteredListLength; i += 2) {
    const key = filteredList[i].value;
    const val = filteredList[i + 1].value;
    fieldsObj[key] = val;
    fieldsList.push(key);
  }
  ddlBarriers
    .map((obj) => obj.key)
    .filter((item) => !fieldsList.includes(item))
    .forEach((item) => (fieldsObj[item] = "2"));

  return fieldsObj;
};

export const finalSave = () => {
  const dataList = $("form").not(".barriers-form").serializeArray();

  // createCredentials <== /helpers/helperFunctions.js
  const credentials = createCredentials();
  // createObject() <== /helpers/helperFunctions.js
  const updatedObjWithRaceID = createObject(raceIDProcess(dataList));
  // console.log("updatedListWithRaceID :>> ", updatedListWithRaceID);
  const barriersFields = barriersProcess();
  console.log("barriersFields :>> ", barriersFields);

  const saveObj = {
    ...credentials,
    ...updatedObjWithRaceID,
    ...barriersFields
  };
  console.log("saveObj :>> ", saveObj);

  //! =====================================
  //! JSON.stringify(saveObj) is the string sent to the
  //! back-end with POST request to update the Student record
  //! created at the initial save stage.
  //! =====================================

  //TODO Add entered data validation
};
