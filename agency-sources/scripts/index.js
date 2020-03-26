// Actions and logic

const agencyData = agencyDataFund;
let updatedAgencyDataFund = {};

const rowLabels = {
  FundAbbrev: "Source Name",
  FundStart: "Begin Date",
  FundEnd: "End Date",
  FundNumber: "Contrat / Grant #",
  FiscalYear: "Fiscal Year"
};

// Indexes needed for header lone and data viewing bloc, in order
const blocItems = {
  viewBloc: [3, 4, 7, 8, 9, 6, 5]
};

const rowOptionModal = {
  FiscalYear: "disabled"
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
      const label = source[indx][1];

      // dateFormat, currencyFormat <== helperFunction.js
      if (["FundStart", "FundEnd"].includes(className)) text = dateFormat(text);
      if (className === "Amount") text = currencyFormat(text);
      row += `<td class=${className} data-label="${label}">${text}</td>`;
    }
    rows += `<tr id=${identifier} title="Click to Edit">${row}</tr>`;
  }
  return rows;
};

const createDataList = (dataObj, labelObj, newField) => {
  const list = dataObj
    .map(item => {
      // createFieldList <== helperFunction.js
      return createFieldList(item, labelObj, newField);
    })
    .map(item => {
      // createFiscalYear <== helperFunction.js
      const fy = createFiscalYear(item[8][2]);
      item.push(["FiscalYear", labelObj.FiscalYear, fy]);
      return item;
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
  $("[title^='Click'").click(function(evnt) {
    evnt.stopPropagation();
    $("#modalBloc").modal("toggle");
    $(".modal-body form").remove();

    const sourceId = $(this).attr("id");
    const tdList = $.makeArray($(`#${sourceId} td`).get());
    const result = tdList
      .map(item => {
        const id = $(item).attr("class");
        const label = $(item).attr("data-label");
        const text = $(item).text();
        const option = rowOptionModal[id] ? rowOptionModal[id] : "";
        // createInputField() <== helperFunction.js
        return createInputField(id, label, text, "", "", option);
      })
      .join("");

    $(".modal-body").append(
      `<form role="form" id="${sourceId}">${result}</form>`
    );
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
