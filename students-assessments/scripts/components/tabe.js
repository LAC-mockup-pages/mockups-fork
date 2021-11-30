//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: tabe11
//* =======================================

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

export const createTabeContent = (list, test) => {
  let content = "";
  const fieldList = [];
  const orderedList = list.sort((record1, record2) =>
    // DT#fromFormat <== Luxon method, "D" token describes mm/dd/yyyy format
    DT.fromFormat(record1.TABEDate, "D") > DT.fromFormat(record2.TABEDate, "D")
      ? -1
      : DT.fromFormat(record1.TABEDate, "D") <
        DT.fromFormat(record2.TABEDate, "D")
      ? 1
      : 0
  );
  return content;
};
