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
