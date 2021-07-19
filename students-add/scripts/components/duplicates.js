//* =======================================
//* Creates possible duplicates table
//* =======================================

export const createDuplicatesTable = (firstName, lastName, dateOfBirth) => {
  //! ==========================================
  //! IN PRODUCTION: change the name to real name
  //! ==========================================
  // const possibleDuplicates = GetDuplicates(firstName, lastName, dateOfBirth);
  //! Comment out the following
  const possibleDuplicates = [
    {
      ID: "01",
      StudentID: "AdamsAlbertPRA2252017111981",
      First: "Albert",
      Middle: "D.",
      Last: "Adams",
      BirthDate: "01/01/1981"
    },
    {
      ID: "02",
      StudentID: "AdamAlanPRA2252018111982",
      First: "Alan",
      Middle: "D.",
      Last: "Adam",
      BirthDate: "01/01/1982"
    }
  ];
  //! ==========================================
  console.log("firstName :>> ", firstName);
  console.log("lastName :>> ", lastName);
  console.log("dateOfBirth :>> ", dateOfBirth);
  const labelObj = [
    {
      ID: "ID",
      StudentID: "Student ID",
      First: "First name",
      Middle: "Middle",
      Last: "Last name",
      BirthDate: "DOB"
    }
  ];
  // const labels = Object.keys(labelObj[0]).map((item) => labelObj[0].item);

  const labels = ["Last name", "First name", "Middle", "DOB", "StudentID"];
  // createHeaders() <== helperFunctions.js
  const tableHeader = createHeaders(labels);

  let rows = "";
  for (const record of possibleDuplicates) {
    // createRow() <== helperFunction.js
    rows += createRow({
      record,
      labelList: labels,
      labelObj,
      hiddenList: ["ID"]
    });
  }

  return `${tableHeader}<tbody>${rows}</tbody>`;
};
