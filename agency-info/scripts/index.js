//* Actions and logic

// let agencyData = {
//   SEDID: "LACNYC",
//   Division: "AAA Division",
//   ProgramManager: "Raju",
//   Address: "85 Broad Street - 27th Floor",
//   City: "New York",
//   State: "NY",
//   Zip: "10004",
//   Telephone: "2128033355",
//   CSD: "3",
//   EPERate: "0.002",
//   CPD: "13",
//   CD: "5",
//   AD: "4",
//   SD: "8",
//   PrepCode: "11254",
//   AgencyEmail: "asists@gmail.com"
// };
//! Add a <script> element in index.js pointing to data.js, then:
const agencyData = ag[0]; //! That is all that's needed

const rowLabels = {
  SEDID: "SED ID",
  Division: "Division",
  ProgramManager: "Program Manager",
  Address: "Address",
  City: "City",
  State: "State",
  Zip: "ZIP",
  Telephone: "Telephone",
  CSD: "Community School Dist.",
  EPERate: "EPE Rate",
  CPD: "Community Planning Dist.",
  CD: "Congressional Dist.",
  AD: "Assembly Dist.",
  SD: "Senatorial Dist.",
  PrepCode: "Prep Code",
  AgencyEmail: "Email"
};

const viewBloc = (blocName, ...args) => {
  const rows = Array.from(args);
  let fields = "";
  for (let row of rows) {
    fields += `<tr class="table-row">
    <td class="row-label col-md-2">${row[0]}</td>
    <td class="row-data col-md-3">${row[1]}</td>
    </tr>`;
  }

  $(`#${blocName}`).append(
    `<div class="table-responsive col-md-6"><table>${fields}</table></div>`
  );
};

const phoneFormat = arr => {
  const str = arr[1];
  const formattedStr = `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;
  return [arr[0], formattedStr];
};

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function() {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing
  const rowData = {};

  for (let key in agencyData) {
    rowData[key] = [rowLabels[key], agencyData[key]];
  }

  const formattedPhoneNum = phoneFormat(rowData.Telephone);
  viewBloc(
    "top-bloc",
    rowData.SEDID,
    rowData.Division,
    rowData.ProgramManager,
    formattedPhoneNum,
    rowData.AgencyEmail
  );

  const stateZip = ["State and ZIP", rowData.State[1] + " - " + rowData.Zip[1]];
  viewBloc(
    "top-bloc",
    rowData.Address,
    rowData.City,
    stateZip,
    rowData.PrepCode
  );
  viewBloc("bottom-bloc", rowData.CSD, rowData.CPD, rowData.CD);
  viewBloc("bottom-bloc", rowData.AD, rowData.SD);

  //* Data bloc editing
  $("[title^='Click'").click(function() {
    const listInputFields =
      $(this).attr("id") === "top-bloc"
        ? [
            rowData.SEDID,
            rowData.Division,
            rowData.ProgramManager,
            formattedPhoneNum,
            rowData.AgencyEmail,
            rowData.Address,
            rowData.City,
            rowData.State,
            rowData.Zip,
            rowData.PrepCode
          ]
        : [rowData.CSD, rowData.CPD, rowData.CD, rowData.AD, rowData.SD];

    $("#modalTopBloc").modal("toggle");
    $(".modal-body form").remove();
    $(".modal-body").append("<form></form>");

    for (let field of listInputFields) {
      const key = field[0],
        val = field[1],
        indx = listInputFields.indexOf(field);
      $(".modal-body>form").append(
        `<div class="input-field">
          <label for=${indx}>${key}</label>
          <input type="text" id=${indx} value='${val}' required>
        </div>`
      );
    }
  });

  //* Saving modified data while keeping track of original data
});
