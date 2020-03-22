//* Actions and logic

//! Add a <script> element in index.js pointing to data.js, then:
const agencyData = ag[0]; //! That is all that's needed

const rowLabels = {
  SEDID: "SED ID",
  AgencyName: "Agency Name",
  ProgramManager: "Program Manager",
  Zip: "ZIP",
  CSD: "Community School Dist.",
  EPERate: "EPE Rate",
  CPD: "Community Planning Dist.",
  CD: "Congressional Dist.",
  AD: "Assembly Dist.",
  SD: "Senatorial Dist.",
  PrepCode: "Prep Code",
  AgencyEmail: "Email"
};

// Indexes needed for each bloc, in order
const blocItems = {
  topLeft: [2, 3, 4, 5, 12, 17],
  topRight: [6, 7, 8, 9, 10, 18],
  bottomLeft: [11, 13, 14],
  bottomRight: [15, 16]
};

const createInputField = (
  keyVal,
  labelVal,
  value,
  labelClassVal = "",
  classVal = "",
  option = ""
) => {
  return `<div class="input-field">
    <label for='${keyVal}' class='${labelClassVal}'>${labelVal}</label>
    <input type="text" id='${keyVal}' class='${classVal}' value='${value}' ${option}>
    </div>`;
};

const phoneFormat = str => {
  return `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;
};

const createRow = arr => {
  const text = arr[0] === "Telephone" ? phoneFormat(arr[2]) : arr[2];
  const row = `<tr class="table-row" id=${arr[0]}>
      <td class="row-label col-md-2">${arr[1]}</td>
      <td class="row-data col-md-3">${text}</td>
    </tr>`;

  return row;
};

const createFieldList = (dataObj, labelObj) => {
  const keyList = Object.keys(dataObj);

  return keyList.map(key => {
    const label = labelObj[key] ? labelObj[key] : key;
    return [key, label, agencyData[key]];
  });
};

const createBloc = (blocName, listIndex, listFields) => {
  let blocRows = "";
  for (let indx of listIndex) {
    blocRows += createRow(listFields[indx]);
  }
  return `<div class=" quarter-bloc col-md-6">
      <table class="table-responsive" id="${blocName}">
        ${blocRows}
      </table>
    </div>`;
};

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function() {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing
  const listFields = createFieldList(agencyData, rowLabels);
  const identifier = `${agencyData.ID}-${agencyData.AgencyID}`;
  let topBloc = "";
  let bottomBloc = "";

  for (const key in blocItems) {
    if (key.startsWith("top")) {
      topBloc += createBloc(key, blocItems[key], listFields);
    } else {
      bottomBloc += createBloc(key, blocItems[key], listFields);
    }
  }

  $(".hero").append(`
  <div class=" container row" id="top-bloc" title="Click to Edit" data-id=${identifier}>
    ${topBloc}
  </div>
  <div class="separation"></div>
  <div class="container row" id="bottom-bloc" title="Click to Edit" data-id=${identifier}>
    ${bottomBloc}
  </div>`);

  //* Data bloc editing

  $("[title^='Click'").click(function() {
    $("#modalTopBloc").modal("toggle");
    $(".modal-body form").remove();

    const blocDataId = $(this).attr("data-id");
    const blocId = $(this).attr("id");
    const listRows = $.makeArray($(`#${blocId} .table-row`).get());
    let i = 0;
    let modalBloc = "";

    const listValues = $.map(listRows, function(row) {
      const rowId = $(row).attr("id");
      const rowData = $(`#${rowId} td`).get();
      const label = $(rowData[0]).text();
      const value = $(rowData[1]).text();
      return [rowId, label, value];
    });
    const nestedListValues = [];
    while (i < listValues.length) {
      nestedListValues.push(listValues.slice(0 + i, 3 + i));
      i += 3;
    }
  });
  //   const listInputFields =
  //     $(this).attr("id") === "top-bloc"
  //       ? [
  //           rowData.SEDID,
  //           rowData.Division,
  //           rowData.ProgramManager,
  //           formattedPhoneNum,
  //           rowData.AgencyEmail,
  //           rowData.Address,
  //           rowData.City,
  //           rowData.State,
  //           rowData.Zip,
  //           rowData.PrepCode
  //         ]
  //       : [rowData.CSD, rowData.CPD, rowData.CD, rowData.AD, rowData.SD];

  //   $(".modal-body").append("<form></form>");

  //   for (let field of listInputFields) {
  //     const key = field[0],
  //       val = field[1],
  //       indx = listInputFields.indexOf(field);
  //     $(".modal-body>form").append(
  //       `<div class="input-field">
  //         <label for=${indx}>${key}</label>
  //         <input type="text" id=${indx} value='${val}' required>
  //       </div>`
  //     );
  //   }
  // });

  //* Saving modified data while keeping track of original data
});
