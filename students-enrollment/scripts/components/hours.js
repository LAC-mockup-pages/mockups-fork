//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Contact hours summary, Contact hours history
//* =======================================

// Populating input element values
// Data source: /data-server.js/GetHours
//          /data-server.js/GetInstructionSource
//          /data-server.js/GetInstructionSource_CM
export const hourMonthlyValues = (list, codeList, tableName) => {
  const tableBodyContent = [];
  for (const record of list) {
    const {
      FY,
      Class_PKID,
      TotalHour,
      JulHours,
      AugHours,
      SepHours,
      OctHours,
      NovHours,
      DecHours,
      JanHours,
      FebHours,
      MarHours,
      AprHours,
      MayHours,
      JunHours
    } = record;

    const descriptionObj = codeList.filter(
      (record) => record.key === Class_PKID
    )[0];

    const course = descriptionObj ? descriptionObj.value : "BS_Management_101";
    const FYValue = FY ? `<td>${FY}</td>` : "";
    const monthlyHours = [
      JulHours,
      AugHours,
      SepHours,
      OctHours,
      NovHours,
      DecHours,
      JanHours,
      FebHours,
      MarHours,
      AprHours,
      MayHours,
      JunHours,
      TotalHour
    ]
      .map((month) => `<td class="align-right">${month || "0"}</td>`)
      .join("");

    const row = `
      <tr>
      ${FYValue}
      <td>${course}</td>
      ${monthlyHours}
      </tr>`;

    tableBodyContent.push(row);
  }

  $(`${tableName} tbody`).append(tableBodyContent.join(""));
};
