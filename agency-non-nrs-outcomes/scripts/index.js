// Actions and logic
import { createFilterBloc } from "./filter-bloc.js";
export const dataOutcomes = outcomesData.slice(0);
export const categories = categoryData.slice(0).sort((cat1, cat2) => {
  return cat1.Category < cat2.Category
    ? -1
    : cat1.Category > cat2.Category
    ? 1
    : 0;
});

const rowLabels = [
  {
    ID: "ID",
    AgencyID: "agencyId",
    OutcomeSortOrder: "Category",
    Category: "Category",
    Description: "Description"
  }
];

const createNewRecord = (labelsList) => {
  let result = [];
  const labelObj = labelsList[0];
  const requiredList = ["OutcomeSortOrder", "Description"];
  const hiddenList = ["Category"];
  const keyList = Object.keys(labelObj).filter(
    (key) => !["ID", "AgencyID"].includes(key)
  );

  for (const key of keyList) {
    let element = "";
    let option = "";
    let type = "text";
    let classOption = "";
    const placehold = labelObj[key];
    if (key === "OutcomeSortOrder") {
      // elementSelectNewRecord() <== helperFunctions()
      element = elementSelectNewRecord({
        hashTable: categories,
        keyValue: key,
        option:
          " required data-toggle='tooltip' data-placement='bottom' title='Please fill this field'",
        optionText: "a category",
        classOption
      });
    } else {
      if (requiredList.includes(key)) {
        option =
          " required data-toggle='tooltip' data-placement='bottom' title='Please fill this field'";
      }
      if (hiddenList.includes(key)) classOption += " hidden";

      // inputNoLabel() <== helperFunctions()
      element = inputNoLabel({
        key,
        placehold,
        classOption,
        option,
        type
      });
    }
    result.push(element);
  }

  return result.join("");
};

const createTableHeader = (labelsObject) => {
  const list = Object.entries(labelsObject)
    .filter(
      (label) => !["ID", "AgencyID", "OutcomeSortOrder"].includes(label[0])
    )
    .map((label) => label[1]);

  // createHeaders() <== helperFunctions.js
  return createHeaders(list);
};

const displayDescriptions = (outcomeList) => {
  let descriptionBloc = "";
  const sortedList = outcomeList.sort((item1, item2) =>
    item1.Description < item2.Description
      ? -1
      : item1.Description > item2.Description
      ? 1
      : 0
  ); // Sort by alpha
  for (const desc of sortedList) {
    if (desc) {
      const { ID, OutcomeSortOrder, Category, Description } = desc;

      const dataBloc = ` id=${ID} data-order=${OutcomeSortOrder} data-cat="${Category}"`;

      descriptionBloc += `<div class="outcome-view" data-toggle='tooltip' data-placement='left' title="Click to Edit"${dataBloc}>${
        Description || ""
      }</div>`;
    }
  }
  return descriptionBloc;
};

const createCard = (dataList) => {
  let body = "";
  for (const field of categories) {
    const outcomes = dataList.filter(
      (record) => record.OutcomeSortOrder === field.OutcomeSortOrder
    );

    if (outcomes.length < 1) continue;
    const descriptions = displayDescriptions(outcomes);
    const card = `<div class="container-fluid card row" id=${field.OutcomeSortOrder}>
    <div class="category-view col-md-5">${field.Category}</div>
    <div class="description-view col-md-7">${descriptions}</div>
    </div>`;
    body += card;
  }
  return body;
};

const createViewBloc = (listOutcomes) => {
  const mainHeader = `
  <div class="container-fluid main-header blue-bg row">
    <div class="category-header col-md-5">Category</div>
    <div class="description-header col-md-7">Outcomes</div>
  </div>`;
  const outcomeCards = createCard(listOutcomes);
  const viewBloc = `${mainHeader}${outcomeCards}`;
  return viewBloc;
};

const createForm = (fieldObj) => {
  const { recordId, catId, descText } = fieldObj;
  const formContent = `
  <input type="text" class="hidden" name="ID" value=${recordId} />`;
  const selectCategory = elementSelectModal({
    hashTable: categories,
    keyValue: "OutcomeSortOrder",
    selectedValue: catId,
    labelVal: "Category",
    labelClassVal: "class='red-text'",
    option:
      " required data-toggle='tooltip' data-placement='bottom' title='Please fill this field'",
    optionText: " a category"
  });

  const inputDescription = elementInput({
    keyVal: "Description",
    labelVal: "Description",
    value: descText,
    labelClassVal: "class='red-text'",
    classVal: "",
    option:
      " required data-toggle='tooltip' data-placement='bottom' title='Please fill this field'",
    optionHidden: "form-group"
  });

  return formContent + selectCategory + inputDescription;
};

// Used for new site and edited site data set
const saveMods = (fields, formName, tableName = "") => {
  const { AgencyID, AuditUserID } = SESSION_VARIABLE[0];
  const result = { AgencyID, AuditUserID };
  $(`${formName} input, select`).removeClass("yellow-bg");

  const fieldList = fields.slice(0);
  // Data validation
  // validateRecord() <== data-check.js
  const validatedList = validateRecord(fieldList);

  // Background color change for invalid field values
  const checkFlag = validatedList.some((item) => !item.correct);
  if (checkFlag) {
    const list = validatedList.filter((obj) => obj.correct === false);
    for (let field of list) {
      const fieldId =
        formName === "#new-entry" ? `#${field.name}` : `#${field.name}-view`;
      $(fieldId).addClass("yellow-bg");
    }
    return;
  } else {
    for (const field of fieldList) {
      result[field.name] = field.value;
    }
    const target = tableName ? tableName : "No table name";
    const resultList = [formName, target, JSON.stringify(result)];
    console.table(result);
    //! =================================================
    //! JSON Object to send back to database
    console.log("result :", resultList);
    //! =================================================

    //ToDO Reloading/resetting with new data

    if (formName === "#edit-form") $("#modalBloc").modal("toggle");
    if (formName === "#new-entry") {
      $(formName)[0].reset();
      $("#OutcomeSortOrder-view, #Description")
        .toggleClass("dark-text")
        .prop("required", true);
      $("#view-bloc .card").remove();
      $("#view-bloc").append(createViewBloc());
    }
  }
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function () {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  //* Back to Top button
  const btnToTop = $("#btn-top");
  $("window").scroll(() => {
    btnToTop.style.display =
      $("window").scrollTop() > 600 || $("body".scrollTop() > 600)
        ? "inline-block"
        : "none";
  });
  btnToTop.click((e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  //* Data viewing
  $("#new-entry").append(createNewRecord(rowLabels));
  $("#filter-bloc").append(createFilterBloc());
  $("#view-bloc").append(createViewBloc(dataOutcomes));
  //   $(".outcome-entry").append(`<div class="container-fluid buttons-bloc-new">
  //   <button type="button" id="cancel-btn" form="new-entry"
  //     class="btn btn-default pull-right">Cancel</button>
  //   <button type="button" id="submit-btn" form="new-entry"
  //     class="btn dark-blue-text blue-light-bg pull-right">Add</button>
  // </div>`);
  // Enables customized tooltips
  $("[data-toggle='tooltip']").tooltip();

  // Change text color from red (required) to black
  // when a value is entered
  $(document).on(
    "focusin",
    "#OutcomeSortOrder-view, #Description",
    function (evnt) {
      evnt.stopPropagation();
      $(this).toggleClass("dark-text").prop("required", false);
    }
  );

  //* Adding a new outcome ==> selecting a category to display
  $(document).on("focusout", "#OutcomeSortOrder", function (evnt) {
    evnt.stopPropagation();
    $(this).toggleClass("dark-text").prop("required", false);
    const selectedOption = $(this).val();
    const card = $(`#${selectedOption}`).get();
    $("#view-bloc .card").remove();
    $("#view-bloc").append(card);
  });

  //* New entry Cancel button and Clear Filter button
  $(document).on("click", "#cancel-btn, #filter-cancel-btn", function (evnt) {
    evnt.stopPropagation();
    location.reload();
  });

  //* Change event in filter bloc
  $(document).on("change", "#OutcomeSortOrder-view", function (evnt) {
    evnt.stopPropagation();
    const selectedCategory = $(this).val();
    const selectedList = dataOutcomes.filter(
      (record) => record.OutcomeSortOrder === selectedCategory
    );
    $("#view-bloc").empty().append(createViewBloc(selectedList));
  });

  //* Select outcome for editing
  $(document).on("click", "#view-bloc .card .outcome-view", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const catId = $(this).attr("data-order");
    const catText = $(this).attr("data-cat");
    const recordId = $(this).attr("id");
    const descText = $(this).text();
    const editForm = createForm({ recordId, catId, catText, descText });
    $("#modalBloc").modal("toggle");
    $("#edit-form").empty().append(editForm);
  });

  //* Saving after new entry or record modification in modal
  $(document).on("click", "#save-btn, #submit-btn", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const formId = `#${$(this).attr("form")}`;
    const modifiedRecord = $(formId).serializeArray();
    saveMods(modifiedRecord, formId, "outcomesData");
  });
  //* Focus on first visible and enabled input or select element in modal
  $("#modalBloc").on("shown.bs.modal", function () {
    $(this)
      .find(".input-field")
      .filter(":visible")
      .children(":input:enabled")
      .first()
      .focus()
      .select();
  });
});
