// Actions and logic

const agencyData = agencyDataFund;
let updatedAgencyDataFund = {};

const headerList = [
  "Label",
  "Source Name",
  "Amount",
  "Begin Date",
  "End Date",
  "Contrat / Grant #",
  "Purpose"
];

const rowLabels = {
  FundAbbrev: "Source Name",
  FundStart: "Begin Date",
  FundEnd: "End Date",
  FundNumber: "Contrat / Grant #"
};

// Indexes needed for header lone and data viewing bloc, in order
const blocItems = {
  viewBloc: [3, 4, 7, 8, 6, 5]
};

const createTableHeader = (list, orderList) => {
  // Creates the list without the first 3 items which
  // are identifiers used in the data view
  const headers = list[0].map(item => item[1]).slice(3);
  const headerLine = orderList
    .map(indx => `<th>${headers[indx - 3]}</th>`)
    .reduce((bloc, item) => {
      return bloc + item;
    });

  return `<table class="table">
  <thead>
    <tr>
      ${headerLine}
    </tr>
  </thead>
  <tbody></tbody>
</table>`;
};

const createTableBody = (dataList, orderList) => {
  let rows = "";
  for (let source of dataList) {
    const identifier = source
      .slice(0, 3)
      .map(arr => arr[2])
      .join("-");
    let row = "";

    for (let indx of orderList) {
      const className = source[indx][0];
      let text = source[indx][2];

      // dateFormat, currencyFormat <== helperFunction.js
      if (["FundStart", "FundEnd"].includes(className)) text = dateFormat(text);
      if (className === "Amount") text = currencyFormat(text);
      row += `<td class=${className}>${text}</td>`;
    }
    rows += `<tr id=${identifier}>${row}</tr>`;
  }
  return rows;
};

const createDataList = (dataObj, labelObj) => {
  const list = dataObj.map(item => {
    // createFieldList <== helperFunction.js
    return createFieldList(item, labelObj);
  });
  return list;
};

const viewData = (sourcesList, labelsList, orderList) => {
  const listSources = createDataList(sourcesList, labelsList);
  $(".view-sources").append(createTableHeader(listSources, orderList));
  $("tbody").append(createTableBody(listSources, orderList));
};

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function() {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing
  viewData(agencyData, rowLabels, blocItems.viewBloc);

  //* Adding a new funding source

  //* Select funding source
  $("[title^='Click'").click(function() {
    const rowIndx = $(this)[0].rowIndex - 1;

    const listFields = createListFields(rowIndx);

    $("#modalBloc").modal("toggle");
    $(".modal-body form").remove();
    $(".modal-body").append("<form id='modal-form'></form>");

    for (field of listFields) {
      const key = field[0],
        val = field[1],
        indx = listFields.indexOf(field);

      let option = "";

      if (!indx) option = "disabled";
      if ([1, 3, 4].includes(indx)) option = "required";

      $(".modal-body>form").append(
        `<div class="input-field">
          <label for=${indx}>${key}</label>
          <input type="text" id=${indx} value='${val}' ${option}>
        </div>`
      );
    }
  });

  //* Deleting source
  $("#delete-btn").click(() => {
    const deleteConfirm = $(".modal-footer>h3");

    if (deleteConfirm.length === 0) {
      $(".modal-footer").prepend(
        "<h3 class='delete-msg'>Confirm deletion by clicking again the DELETE button</h3>"
      );
    } else {
      deleteConfirm.remove();
    }
  });
});
