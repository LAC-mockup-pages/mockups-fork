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

export const finalSave = () => {
  const dataList = $("form").not(".barriers-form").serializeArray();
  const updatedListWithRaceID = raceIDProcess(dataList);
  console.log("updatedListWithRaceID :>> ", updatedListWithRaceID);
};
