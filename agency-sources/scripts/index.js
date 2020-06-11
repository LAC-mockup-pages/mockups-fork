// Actions and logic

const agencyData = agencyDataFund.slice(0);
const sourcesData = fundingData.slice(0);

const rowLabels = {
  ID: "ID",
  AgencyID: "Agency ID",
  FundAbbrev: "Source Name",
  FundStart: "Begin Date",
  FundEnd: "End Date",
  FY: "Fiscal Year",
  FundNumber: "Contrat / Grant #",
  Amount: "Amount",
  Purpose: "Purpose",
};

//! Temporary global variable
//TODO Replace with function based on date of entry
const fiscalYear = "2020";

// Indexes needed for header lone and data viewing bloc, in order
const blocItems = {
  viewBloc: [3, 4, 7, 8, 9, 6, 5],
  newSource: [4, 7, 8, 6, 5],
};

// Style options for modal
const rowOptionModal = {
  FundAbbrev: "disabled",
  FiscalYear: "disabled",
};

const newSourceObject = (list) => {
  const agencyId = $("table").attr("id");
  const newSource = { AgencyID: agencyId };

  for (let field of list) {
    newSource[field.name] = field.value;
  }
  //!===============================================
  //! Data object to send back to Database
  console.log("JSON Object :", JSON.stringify(newSource));
  //!===============================================

  $("#new-source")[0].reset();

  //TODO Update page with response from Database update

  // location.reload();
};

const createNewRecord = () => {
  let result = [];
  const keyList = {
    FundAbbrev: "Source Name",
    FundStart: "Begin Date",
    FundEnd: "End Date",
    FY: "Fiscal Year",
    FundNumber: "Contrat / Grant #",
    Amount: "Amount",
    Purpose: "Purpose",
  };

  for (const key in keyList) {
    let element = "";
    let option = "";
    if (key === "FSID") {
      element = elementSelectNewRecord({
        hashTable: sourcesData,
        keyValue: "FSID",
        option: "required",
        optionText: "a funding source",
      });
    } else {
      if (["FundStart", "FundEnd"].includes(key)) {
        option = "required";
      }

      element = elementInput({
        keyVal: key,
        labelVal: keyList[key],
        value: "",
        labelClassVal: "",
        classVal: "",
        option,
        optionHidden: "",
      });
    }

    result.push(element);
  }
  result.push(
    '<button type="button" id="submit-btn" form="new-source" class="btn btn-primary">Add</button><button type="button" id="cancel-btn" form="new-source" class="btn btn-default">Cancel</button>'
  );
  const formContent = result.join("");
  return formContent;
};

const createNewSourceForm = (labels) => {
  const selectElement = elementSelectNewRecord({
    hashTable: sourcesData,
    keyValue: "FSID",
    option: "required",
    optionText: "a funding source",
  });

  const orderedList = blocItems.newSource.map((indx) => {
    return localList[0][indx];
  });
  const listInput =
    orderedList
      .map((item) => {
        let title = "";
        if (["FundStart", "FundEnd"].includes(item[0]))
          title = "title='Please fill out this field\n MM/DD/YYYY'";
        return `<input
    type="text"
    class="form-control"
    placeholder="${item[1]}"
    name="${item[0]}"
    ${title}
    autocomplete="off"
  />`;
      })
      .join("") +
    `<button type="submit" id="submit-btn" class="btn btn-primary"
      form="new-source">Add
    </button>
    <button type="button" id="cancel-btn" form="new-source"
      class="btn btn-default">Cancel
    </button>`;

  return selectElement + listInput;
};

const createTableHeader = (list, orderList) => {
  // Creates the list without the first 3 items which
  // are identifiers used in the data view
  const headers = list[0].map((item) => item[1]).slice(3);
  const headerLine = orderList
    .map((indx) => `<th>${headers[indx - 3]}</th>`)
    .reduce((bloc, item) => {
      return bloc + item;
    });
  return `<table class="table" id="${list[0][1][2]}">
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
      .map((arr) => arr[2])
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
    .map((item) => {
      // createFieldList <== helperFunction.js
      return createFieldList(item, labelObj, newField);
    })
    .map((item) => {
      // createFiscalYear <== helperFunction.js
      const fy = createFiscalYear(item[8][2]);
      item.push(["FiscalYear", labelObj.FiscalYear, fy]);
      return item;
    });
  return list;
};

const saveMods = (elmnt) => {
  const idList = elmnt.split("-");
  let result = { ID: idList[0], AgencyID: idList[1], FSID: idList[2] };
  const list = $(`.modal-body>form input`)
    .get()
    .filter((item) => $(item).attr("id") !== ("FiscalYear", "FundAbbrev"));

  for (let row of list) {
    const key = $(row).attr("id");
    let val = $(row).val();

    // Removes currency format
    if (key === "Amount") val = val.replace(/[$,\s]/g, "");
    result[key] = val;
  }
  console.table(result);
  const resultList = ["agencyDataFund", JSON.stringify(result)];
  //!===============================================
  //! Data object to send back to Database
  console.log("result : ", resultList);
  //!===============================================

  $("#modalBloc").modal("toggle");

  //TODO Update page with response from Database update
};

const viewData = (sourcesList, labelsList, orderList) => {
  const listSources = createDataList(sourcesList, labelsList);
  $("#new-source").append(createNewRecord());
  // $("#new-source").append(createNewSourceForm(listSources, sourcesData));
  // $("[name='FundEnd'],[name='FundStart']").prop("required", true);
  // $("[name='Amount'],[name='FundStart'],[name='FundEnd']").addClass(
  //   "col-width-small"
  // );
  // $("[name='FundNumber'],[name='Purpose']").addClass("col-width-medium");

  $(".view-sources").append(createTableHeader(listSources, orderList));
  $("tbody").append(createTableBody(listSources, orderList));
};

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function () {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing

  viewData(agencyData, rowLabels, blocItems.viewBloc);

  // Change text color from red (required) to black
  // when a value other than default is selected
  $("#FSID-view").bind("change", function (evnt) {
    evnt.stopPropagation();
    $(this).toggleClass("dark-text").prop("required", false);
  });

  //* Adding a new funding source
  $("#new-source").on("submit", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();

    $(`#new-source input`).removeClass("yellow-bg");

    const newSource = $(this).serializeArray();
    console.log("newSource :>> ", newSource);

    // validNewSource <== data-check.js
    const validatedList = validNewSource(newSource);
    const checkFlag = validatedList.some((item) => !item.correct);

    if (checkFlag) {
      const list = validatedList.filter((obj) => obj.correct === false);
      for (let field of list) {
        $(`[name=${field.name}]`).addClass("yellow-bg");
      }
      return;
    } else {
      newSourceObject(newSource);
    }
  });

  //* Select funding source

  $("[title^='Click'").click(function (evnt) {
    evnt.stopPropagation();
    $("#modalBloc").modal("toggle");
    $("#edit-form").empty();

    const sourceId = $(this).attr("id");
    const tdList = $.makeArray($(`#${sourceId} td`).get());
    const result = tdList
      .map((item) => {
        const id = $(item).attr("class");
        const label = $(item).attr("data-label");
        const text = $(item).text();
        const option = rowOptionModal[id] ? rowOptionModal[id] : "";

        // createInputField() <== helperFunction.js
        return createInputField(id, label, text, "", "", option);
      })
      .join("");

    $("#edit-form").append(result).attr("data-bloc-id", sourceId);
  });

  // New source Add button
  $("#save-button").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formID = $(this).attr("form");
    const id = $(`#${formID}`).attr("data-bloc-id");
    saveMods(id);
  });

  // New source Cancel button
  $("#cancel-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = "#" + $(this).attr("form");
    $(formId)[0].reset();
  });

  //* Deleting source
  $("#delete-btn").click((evnt) => {
    evnt.stopPropagation();
    const deleteConfirm = $(".modal-footer>h3");

    if (deleteConfirm.length === 0) {
      $(".modal-footer").prepend(
        "<h3 class='delete-msg'>Confirm deletion by clicking again the DELETE button</h3>"
      );
    } else {
      deleteConfirm.remove();
      const valueList = $(".modal-body>form").attr("id").split("-");
      const length = valueList.length;
      let sourceId = {};
      let keyList = ["ID", "AgencyID", "FSID"];
      for (let i = 0; i < length; i++) {
        sourceId[keyList[i]] = valueList[i];
      }

      //!===============================================
      //! sourceId is the object sent back to delete record in database
      //! then update page with response data object.
      console.log(
        "sourceId :",
        JSON.stringify(sourceId),
        " - type : ",
        typeof sourceId
      );
      //!===============================================

      $("#modalBloc").modal("toggle");
    }
  });
});
