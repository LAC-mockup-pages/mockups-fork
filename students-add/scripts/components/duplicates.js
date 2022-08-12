//* =======================================
//* Creates possible duplicates table
//* =======================================

export const createDuplicatesTable = (firstName, lastName, dateOfBirth) => {
  //! ==========================================
  //! IN PRODUCTION: change the method name GetDuplicates
  //! to real name.
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

  // const possibleDuplicates = [{}];
  //! ==========================================

  // Check if possibleDuplicates is empty to avoid modal display
  if (!possibleDuplicates[0].ID) return null;
  // createHeaders() <== helperFunctions.js
  const tableHeader = createHeaders([
    "Last name",
    "First name",
    "Middle",
    "DOB",
    "Student ID"
  ]);
  const orderedList = possibleDuplicates.sort((item1, item2) =>
    item1.Last < item2.Last ? -1 : item1.Last > item2.Last ? 1 : 0
  );
  if (orderedList.length > 0) {
    $("#duplicates-table").attr("data-duplicates", JSON.stringify(orderedList));
  }
  let rows = "";
  for (const record of orderedList) {
    const { ID, StudentID, First, Middle, Last, BirthDate } = record;
    const row = `<tr id=${ID} title="Click to display" data-toggle='tooltip' data-placement="left">
    <td class="cell-data">${Last}</td>
    <td class="cell-data">${First}</td>
    <td class="cell-data">${Middle}</td>
    <td class="cell-data">${BirthDate}</td>
    <td class="cell-data">${StudentID}</td>
    </tr>`;
    rows += row;
  }
  return `${tableHeader}<tbody>${rows}</tbody>`;
};

export const replaceTableBody = (student) => {
  const { ID, StudentID, First, Middle, Last, BirthDate } = student;
  const row = `<tr id=${ID} title="Click to display" data-toggle='tooltip' data-placement="left">
    <td class="cell-data">${Last}</td>
    <td class="cell-data">${First}</td>
    <td class="cell-data">${Middle}</td>
    <td class="cell-data">${BirthDate}</td>
    <td class="cell-data">${StudentID}</td>
    </tr>`;

  return row;
};
