//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Barriers categories
//* =======================================

import { createOptionList } from "../main.js";

// Data sources: /original-data/student-data.js/GetStudent
//          /data-server.js/ddlBarriers

export const barriersValues = (obj) => {
  const keyList = ddlBarriers.map((record) => record.key);
  console.log("keyList :>> ", keyList);
};
