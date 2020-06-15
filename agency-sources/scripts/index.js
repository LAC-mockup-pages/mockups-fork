// Actions and logic

const agencyData = agencyDataFund.slice(0);
const sourcesData = fundingData.slice(0);

const rowLabels = {
  ID: "ID",
  AgencyID: "Agency ID",
  FSID: "Source ID",
  FundAbbrev: "Source Name",
  FundStart: "Begin Date",
  FundEnd: "End Date",
  FY: "Fiscal Year",
  FundNumber: "Contrat / Grant #",
  Amount: "Amount",
  Purpose: "Purpose",
};

const setFiscalYear = (start, end) => {
  const startDate = new Date(start);

  const endDate = new Date(end);
  const nowDay = new Date();
  let fiscalYear = endDate.getFullYear();
  if (fiscalYear === startDate.getFullYear() && nowDay >= endDate)
    fiscalYear += 1;
  return fiscalYear.toString();
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
    FSID: "Source Name",
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
    let classOption = " input-field";
    if (key === "FSID") {
      // elementSelectNewRecord() <== helperFunctions()
      element = elementSelectNewRecord({
        hashTable: sourcesData,
        keyValue: "FSID",
        option: "required",
        optionText: "a funding source",
      });
    } else {
      if (["FundStart", "FundEnd"].includes(key)) {
        option = " required";
      }
      if (key === "FY") {
        classOption += " hidden";
      }
      // inputNoLabel() <== helperFunctions()
      element = inputNoLabel({
        key,
        placehold: keyList[key],
        classOption,
        option,
      });
    }
    result.push(element);
  }
  result.push(
    `<button type="button" id="submit-btn" form="new-source"
      class="btn btn-primary">Add
    </button>
    <button type="button" id="cancel-btn" form="new-source"
      class="btn btn-default">Cancel
    </button>`
  );
  return result.join("");
};

const createTableHeader = (labelObj) => {
  const list = Object.entries(labelObj)
    .map((label) => label[1])
    .filter((label) => !["ID", "Agency ID", "Source ID"].includes(label));

  // createHeaders() <== helperFunctions.js
  const tableHeader = createHeaders(list);
  return `<table class="table" id="source-table">${tableHeader}</table>`;
};

const createTableBody = (dataList, labelList) => {
  let rows = "";
  const filteredLabelList = Object.keys(labelList).filter(
    (item) => !["AgencyID"].includes(item)
  );
  for (const record of dataList) {
    // currencyFormat() <== helperFunction.js
    if (record.Amount) record.Amount = currencyFormat(record.Amount);

    // dateFormat() <== helperFunction.js
    record.FundStart = dateFormat(record.FundStart);
    record.FundEnd = dateFormat(record.FundEnd);
    const hiddenList = ["ID", "FSID"];

    // createRow() <== helperFunction.js
    rows += createRow({
      record,
      labelList: filteredLabelList,
      labelObj: rowLabels,
      hiddenList,
    });
  }
  return `<tbody>${rows}</tbody>`;
};

// const saveMods = (elmnt) => {
//   const idList = elmnt.split("-");
//   let result = { ID: idList[0], AgencyID: idList[1], FSID: idList[2] };
//   const list = $(`.modal-body>form input`)
//     .get()
//     .filter((item) => $(item).attr("id") !== ("FiscalYear", "FundAbbrev"));

//   for (let row of list) {
//     const key = $(row).attr("id");
//     let val = $(row).val();

//     // Removes currency format
//     if (key === "Amount") val = val.replace(/[$,\s]/g, "");
//     result[key] = val;
//   }
//   console.table(result);
//   const resultList = ["agencyDataFund", JSON.stringify(result)];
//   //!===============================================
//   //! Data object to send back to Database
//   console.log("result : ", resultList);
//   //!===============================================

//   $("#modalBloc").modal("toggle");

//   //TODO Update page with response from Database update
// };

const viewData = () => {
  $("#new-source").append(createNewRecord());
  $("#new-source #FundEnd, #FundStart, #Amount, #FY, #FundNumber").addClass(
    "col-width-small"
  );
  $("#new-source #Purpose").addClass("col-width-medium");

  $("#view-bloc").append(createTableHeader(rowLabels));
  $("#source-table").append(createTableBody(agencyData, rowLabels));
};

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function () {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing
  viewData();

  // Change text color from red (required) to black
  // when a value other than default is selected
  $("#FSID-view").bind("change", function (evnt) {
    evnt.stopPropagation();
    $(this).toggleClass("dark-text").prop("required", false);
  });

  //* Adding a new funding source
  $("#submit-btn").bind("click", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = `#${$(this).attr("form")}`;
    $(`#new-source input`).removeClass("yellow-bg");

    const newSource = $(formId).serializeArray();

    const startField = newSource.filter(
      (field) => field.name === "FundStart"
    )[0];
    const endField = newSource.filter((field) => field.name === "FundEnd")[0];
    const fiscalYearValue = setFiscalYear(startField.value, endField.value);
    newSource.forEach((item) => {
      if (item.name === "FY") item.value = fiscalYearValue;
    });

    // validNewSource <== data-check.js
    const validatedList = validNewSource(newSource.slice(0));
    const checkFlag = validatedList.some((item) => !item.correct);
    if (checkFlag) {
      const list = validatedList.filter((obj) => obj.correct === false);
      for (let field of list) {
        $(`[name=${field.name}]`).addClass("yellow-bg");
      }
      return;
    } else {
      saveMods(newSource, formId, "agencyDataFund");
    }
  });

  //* New source Cancel button
  $("#cancel-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    location.reload();
  });

  //* Select funding source
  $(document).on("click", ".table tbody tr", function (evnt) {
    evnt.stopPropagation();
    $("#modalBloc").modal("toggle");
    $("#edit-form").empty();

    const sourceId = $(this).attr("id");
    const tdList = $.makeArray($(`#${sourceId} td`).get());
    const result = tdList
      .map((item) => {
        const keyVal = $(item).attr("data-name");
        const labelVal = $(item).attr("data-label");
        const value = $(item).text().trim();
        // const classModal = ;
        let optionHidden = $(item).attr("class").includes("hidden")
          ? "form-group hidden"
          : "form-group";

        if (keyVal === "FSID") {
          // elementSelectModal() <== helperFunction.js
          return elementSelectModal({
            hashTable: sourcesData,
            keyValue: keyVal,
            selectedValue: value,
            labelVal: "Source Name",
            labelClassVal: "class='red-text'",
            option: "required",
            optionText: " a source",
          });
        } else {
          let option = "";
          let labelClassVal = "";
          if (keyVal === "FundAbbrev") optionHidden = "form-group hidden";
          if (["FundStart", "FundEnd"].includes(keyVal)) {
            labelClassVal = "class='red-text'";
            option = "required";
          }
          if (keyVal === "FY") option = "disabled";
          // createInputField() <== helperFunction.js
          return elementInput({
            keyVal,
            labelVal,
            value,
            labelClassVal,
            classVal: "",
            option,
            optionHidden,
          });
        }
      })
      .join("");

    $("#edit-form").append(result).attr("data-bloc-id", sourceId);
  });

  //* Modal form Save button
  $("#save-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = `#${$(this).attr("form")}`;
    $("#FY-view").prop("disabled", false);
    const formContent = $(formId).serializeArray();
    saveMods(formContent, formId, "agencyDataFund");
    $("#modalBloc").modal("toggle");
  });

  //* Modal form Delete source button
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
