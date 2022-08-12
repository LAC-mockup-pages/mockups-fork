//* Actions and logic
//! Add a <script> element in index.js pointing to data.js, then:
//! In production comment out
const agencyData = ag.slice(0); //! That is all that's needed

// Labels used when DataObject keys need modifying
const rowLabels = [
  {
    ID: "ID",
    AgencyID: "Agency ID",
    AgencyName: "Agency Name",
    SEDID: "SED ID",
    Division: "Division",
    ProgramManager: "Program Manager",
    Address: "Address",
    City: "City",
    State: "State",
    Zip: "ZIP",
    Telephone: "Phone",
    CSD: "Community School Dist.",
    EPERate: "EPE Rate",
    CPD: "Community Planning Dist.",
    CD: "Congressional Dist.",
    AD: "Assembly Dist.",
    SD: "Senatorial Dist.",
    PrepCode: "Prep Code",
    AgencyEmail: "Email"
  }
];

// list = [key,label,value] from createBloc()
const createOneRow = (list) => {
  const [key, label, value] = list;

  // phoneFormat() <== helpers.js
  const text = key === "Telephone" ? phoneFormat(value) : value;
  const optionHidden = ["ID", "AgencyID"].includes(key) ? " hidden" : "";
  const row = `<tr class="table-row${optionHidden}" id=${key}>
      <td class="row-label col-md-2">${label}</td>
      <td class="row-data col-md-3">${text}</td>
    </tr>`;

  return row;
};

// Args from renderViewBloc()
// blocName type: string
// dataObj type: JS object, fields selected to appear in this blocName
const createBloc = (blocName, dataObj) => {
  let blocRows = "";
  const labels = rowLabels[0];
  for (const key in dataObj) {
    blocRows += createOneRow([key, labels[key], dataObj[key]]);
  }
  return `<div class="quarter-bloc col-md-6">
            <table class="table-responsive" id="${blocName}">
              <tbody>
                ${blocRows}
              </tbody>
            </table>
          </div>`;
};

const renderViewBloc = (dataObj) => {
  let {
    ID,
    AgencyName,
    SEDID,
    Division,
    ProgramManager,
    EPERate,
    PrepCode,
    Address,
    City,
    State,
    Zip,
    Telephone,
    AgencyEmail,
    CSD,
    CPD,
    CD,
    AD,
    SD
  } = dataObj;
  const topLeft = createBloc("topLeft", {
    ID,
    AgencyName,
    SEDID,
    Division,
    ProgramManager,
    EPERate: Number(EPERate).toFixed(2).toString(),
    PrepCode
  });
  const topRight = createBloc("topRight", {
    Address,
    City,
    State,
    Zip,
    Telephone,
    AgencyEmail
  });
  const bottomLeft = createBloc("bottomLeft", { ID, CSD, CPD, CD });
  const bottomRight = createBloc("bottomRight", { AD, SD });
  return `
    <div class="container row" id="top-bloc" data-toggle='tooltip' data-placement='left' title="Click to Edit">
      ${topLeft}${topRight}
    </div>
    <div class="separation"></div>
    <div class="container row" id="bottom-bloc" data-toggle='tooltip' data-placement='left' title="Click to Edit">
      ${bottomLeft}${bottomRight}
    </div>`;
};

const saveMods = (form) => {
  const { AuditUserID, AgencyID } = SESSION_VARIABLE[0];
  const result = { AgencyID, AuditUserID };
  const submittedData = $(form).serializeArray();
  $(`${form} input, select`).removeClass("yellow-bg");

  const validatedList = validateNewRecord(submittedData);
  console.log(
    "🚀 / file: index.js / line 120 / saveMods / validatedList",
    validatedList
  );
  const checkFlag = validatedList.some((item) => !item.correct);
  if (checkFlag) {
    const list = validatedList.filter((obj) => !obj.correct);
    for (let field of list) {
      $(`#${field.name}-view`).addClass("yellow-bg");
    }
    return;
  }

  for (const field of submittedData) {
    // phoneFormat <== helperFunctions()
    if (field.name === "Telephone") field.value = phoneFormat(field.value);
    result[field.name] = field.value;
  }

  const message = `Result from ${form} :>>`;
  console.table(result);
  const resultList = ["ag", JSON.stringify(result)];
  //! =================================================
  //! JSON Object to send back to database

    //! In production uncomment
    //const formId = result.ProgramManager
    //    ? 'Info_Upper' : 'Info_Lower';

    //// createCredentials <== /helpers/helperFunctions.js
    //const credentials = createCredentials();

    //const saveObj = {
    //    ...credentials,
    //    ...result
    //};

    //import('./data_refresh.js')
    //.then((module) => {
    //    (async () => {
    //        const saveflag = await module.SaveRefresh(formId, saveObj);

    //        if (saveflag) {
    //            $(".hero").empty().append(renderViewBloc(agencyData[0]));
    //            $("#modal-bloc").modal("toggle");
    //        }
    //    })(); //async end

    //});//data_refresh.js

    //return;

  console.log(message, resultList);
  //! =================================================

  //ToDO Reloading/resetting with new data
  // location.reload();
  $("#modal-bloc").modal("toggle");
};

//* =================================================
//* jQuery section
//* =================================================

$(document).ready(() => {
  // * Data viewing
  $(".hero").append(renderViewBloc(agencyData[0]));
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

  // Manage highlighting background of the block where the cursor
  // is located
  $(document)
    .on("mouseenter", "#top-bloc, #bottom-bloc", function (evnt) {
      evnt.stopPropagation();
      const blocToChange =
        $(this).attr("id") === "top-bloc"
          ? "#top-bloc tbody"
          : "#bottom-bloc tbody";
      $(blocToChange).css("background-color", " #d3e4f0");
    })
    .on("mouseleave", "#top-bloc, #bottom-bloc", function (evnt) {
      evnt.stopPropagation();
      const blocToChange =
        $(this).attr("id") === "top-bloc"
          ? "#top-bloc tbody"
          : "#bottom-bloc tbody";
      $(blocToChange).removeAttr("style");
    });

  //* Data bloc editing
  $(document).on("click", ".hero > div", function (evnt) {
    evnt.stopPropagation();
    $("#modal-bloc").modal("toggle");
    $("#edit-form").empty();
    const blocId = $(this).attr("id");
    const listRows = $.makeArray($(`#${blocId} .table-row`).get());
    let i = 0;
    const nestedListValues = [];
    let modalBloc = "";

    const listValues = $.map(listRows, function (row) {
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
      const [keyVal, labelVal, value] = item;
      const optionHidden = keyVal === "ID" ? "hidden" : "";

      if (keyVal === "State") {
        // elementSelectModal() <== helpers.js
        modalBloc += elementSelectModal({
          hashTable: DDL_STATES,
          keyValue: keyVal,
          selectedValue: value,
          labelVal,
          labelClassVal: "",
          option: "",
          optionText: "a State"
        });
      } else {
        // elementInput() <== helpers.js
        modalBloc += elementInput({
          keyVal,
          labelVal,
          value,
          labelClassVal: "",
          classVal: "",
          option: "",
          optionHidden
        });
      }
    }
    $("#edit-form").append(modalBloc);
    $("#AgencyEmail-view").attr("type", "email");
    $("#Telephone-view").attr({
      type: "tel",
      pattern: "[(]d{3}[)-]d{3}[-]d{4}",
      placeholder: "(XXX)-XXX-XXXX"
    });
    $("#AgencyName-view").prop("disabled", true);
  });

  // Save button in modal form
  $(document).on("click", "#save-button", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formID = $(this).attr("form");
    saveMods(`#${formID}`);
  });

  // Close button in modal form
  $(document).on("click", "#close-button", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    $("#modal-bloc").modal("toggle");
  });

  //* Phone numbers dynamic masking
  //* On entry, format the numbers as US phone number (XXX)-XXX-XXXX
  $(document).on("keyup", "#edit-form input[type='tel']", function (evnt) {
    evnt.stopPropagation();
    evnt.preventDefault();
    const inputValue = $(this).val();
    $(this).val(
      inputValue.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, "($1)-$2-$3")
    );
  });
});
