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

const raceIDProcess = (list) => {
  const raceList = list.filter((obj) => obj.name === "RaceID" && obj.value);
  console.log("raceList :>> ", raceList);

  const raceValues = raceList.map((obj) => obj.value).join(",");
  console.log("raceValues :>> ", raceValues);

  return raceValues;
};

export const finalSave = () => {
  const dataList = $("form").serializeArray();
  // console.log("dataList :>> ", dataList);
  const raceIdentifier = raceIDProcess(dataList);

  const filteredDataList = dataList.filter((obj) => obj.name !== "RaceID");
  filteredDataList.push({ name: "RaceID", value: raceIdentifier });

  console.log("filteredDataList :>> ", filteredDataList);
};
