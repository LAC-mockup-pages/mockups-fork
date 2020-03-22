//* Actions and logic
//! Add a <script> element in index.js pointing to data.js, then:
let agencyData = ag[0]; //! That is all that's needed
let newAgencyData = {};

// Labels used when DataObject keys need modifying
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
  if (str.match(/\D/)) {
    return str.replace(/\D/gi, "");
  } else {
    return `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;
  }
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

const updateDataObject = obj => {
  const result = {};
  const listKeys = Object.keys(ag[0]);
  for (let key of listKeys) {
    if (!obj[key]) {
      result[key] = ag[0][key];
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

const renderViewBloc = () => {
  const obj = newAgencyData.ID ? newAgencyData : ag[0];
  const listFields = createFieldList(obj, rowLabels);
  const identifier = `${obj.ID}-${obj.AgencyID}`;
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
};

const saveMods = (evnt, elmnt) => {
  evnt.stopPropagation();
  const id = $(elmnt).attr("id");
  const idList = id.split("-");
  let result = { ID: idList[0], AgencyID: idList[1] };
  const list = $(`#${id} input`).get();

  for (let row of list) {
    const key = $(row).attr("id");
    const val = key === "Telephone" ? phoneFormat($(row).val()) : $(row).val();
    result[key] = val;
  }

  //! Data object to send back to Database
  console.log("JSON Object :", JSON.stringify(result));

  $("#modalTopBloc").modal("toggle");
  // $(".hero").empty();
  //TODO Update page with response from Database update
  // renderViewBloc();
};

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function() {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing

  renderViewBloc();

  //* Data bloc editing

  $("[title^='Click']").click(function(event) {
    event.stopPropagation();
    $("#modalTopBloc").modal("toggle");
    $(".modal-body form").remove();

    const blocDataId = $(this).attr("data-id");
    const blocId = $(this).attr("id");
    const listRows = $.makeArray($(`#${blocId} .table-row`).get());
    let i = 0;
    const nestedListValues = [];
    let modalBloc = "";

    const listValues = $.map(listRows, function(row) {
      const rowId = $(row).attr("id");
      const rowData = $(`#${rowId} td`).get();
      const label = $(rowData[0]).text();
      const value = $(rowData[1]).text();
      return [rowId, label, value];
    });
    while (i < listValues.length) {
      nestedListValues.push(listValues.slice(0 + i, 3 + i));
      i += 3;
    }
    for (let item of nestedListValues) {
      modalBloc += createInputField(item[0], item[1], item[2]);
    }

    $(".modal-body").append(
      `<form role="form" id="${blocDataId}">${modalBloc}</form>`
    );
  });

  //* Saving modified data while keeping track of original data

  // $("#save-button").on("click", function(event) {
  //   event.stopPropagation();

  //   console.log("click working", $(this).attr("id"));
  // });
});
