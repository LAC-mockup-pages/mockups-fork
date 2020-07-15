// Actions and logic

// Isolate work objects and arrays from data source.
const dataSource = ProfDevEventsInfo.slice(0);
const facilitatorList = Facilitator.slice(0);
const providerList = Providers.slice(0);
const locationList = Locations.slice(0);
const fiscalYearList = FiscalYear.slice(0);
const categoryList = Categories.slice(0);
const subjectList = Subjects.slice(0);
const sessionList = [{ morning: "morning" }, { afternoon: "afternoon" }];
const stateList = States.slice(0);

const rowLabels = [
  {
    ID: "ID",
    ProfDevActivityName: "Name",
    ProfDevDate: "Date",
    ProfDevDescription: "Session",
    ProfDevProviderID: "Provider ID",
    profdevProvider: "Provider",
    ProfDevLocationID: "LocationID",
    profdevLocation: "Location",
    ProfDevFY: "Fiscal Year",
    ProfDevCategoryID: "Category ID",
    profdevCategory: "Category",
    ProfDevSubjectID: "Subject ID",
    profdevSubject: "Subject",
    ProfDevHours: "Hours",
    ProfDevFacilitator1: "Facilitator1 ID",
    ProfDevFacilitator2: "Facilitator2 ID",
    ProfDevFacilitator3: "Facilitator3 ID",
    ProfDevFeeCharged: "Fee",
    RAENEvent: "RAEN Event",
    ProfDevComments: "Comments",
    ProfDevTimeFrom: "Start Time",
    ProfDevTimeTo: "End Time",
  },
];

const createNewRecord = (labelsList) => {
  let result = [];
  const labelObj = labelsList[0];
  const requiredList = [
    "ProfDevActivityName",
    "ProfDevDescription",
    "ProfDevDate",
    "ProfDevFY",
    "ProfDevProviderID",
    "ProfDevCategoryID",
    "ProfDevSubjectID",
    "ProfDevFacilitator1",
    "ProfDevLocationID",
  ];
  const hiddenList = [
    "ProfDevHours",
    "ProfDevFacilitator2",
    "ProfDevFacilitator3",
    "ProfDevFeeCharged",
    "ProfDevComments",
    "ProfDevTimeFrom",
    "ProfDevTimeTo",
  ];
  const keyList = Object.keys(labelObj).filter(
    (key) =>
      ![
        "ID",
        "profdevProvider",
        "profdevCategory",
        "profdevSubject",
        "profdevLocation",
        "RAENEvent",
      ].includes(key)
  );
  for (key of keyList) {
    let element = "";
    let option = "";
    let type = "text";
    let classOption = " input-field";
    const placehold = labelObj[key];
    if (key === "ProfDevProviderID") {
      const shortList = providerList.map((provider) => {
        return { ID: provider.ID, name: provider.ProviderName };
      });
      option = " required title='Please fill this field'";
      // elementSelectNewRecord() <== helperFunctions()
      element = elementSelectNewRecord({
        hashTable: shortList,
        keyValue: key,
        option,
        optionText: "a provider",
        classOption,
      });
    } else {
      if (requiredList.includes(key)) {
        option = " required title='Please fill this field'";
      }
      if (hiddenList.includes(key)) classOption += " hidden";
      if (key === "Email") type = "email";

      // inputNoLabel() <== helperFunctions()
      element = inputNoLabel({
        key,
        placehold,
        classOption,
        option,
        type,
      });
    }
    result.push(element);
  }
  result.push(
    `<button type="button" id="submit-btn" form="new-entry" class="btn btn-primary">Add</button>
    <button type="button" id="cancel-btn" form="new-entry" class="btn btn-default">Cancel</button>`
  );
  return result.join("");
};

const createTableHeader = (labelsObject) => {
  const list = Object.entries(labelsObject)
    .filter(
      (label) =>
        ![
          "ID",
          "ProfDevProviderID",
          "ProfDevFY",
          "ProfDevCategoryID",
          "ProfDevSubjectID",
          "ProfDevLocationID",
          "ProfDevFacilitator1",
          "ProfDevFacilitator2",
          "ProfDevFacilitator3",
          "ProfDevFeeCharged",
          "RAENEvent",
          "ProfDevComments",
          "ProfDevTimeFrom",
          "ProfDevTimeTo",
        ].includes(label[0])
    )
    .map((label) => label[1]);

  // createHeaders() <== helperFunctions.js
  return createHeaders(list);
};

const createViewBloc = () => {
  const tableHeader = createTableHeader(rowLabels[0]);

  // Sorting list of sites by descending ID
  // const list = dataSource.sort((site1, site2) => site2.ID - site1.ID);
  // const tableBody = createTableBody(list, rowLabels[0]);
  // const viewBloc = tableHeader + tableBody;
  // return viewBloc;

  return tableHeader;
};

const getRequired = () => {
  const list = $("#new-entry input, select").get();
  const requiredList = list
    .filter((item) => $(item).prop("required"))
    .map((item) => $(item).attr("id"));
  return requiredList;
};

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
  $("#main-table").append(createViewBloc());

  // Change text color from red (required) to black
  // when a value is entered
  $(document).on("focusin", "#ProfDevProviderID-view", function (evnt) {
    evnt.stopPropagation();
    $(this).toggleClass("dark-text").prop("required", false);
  });

  //* Adding a new partner
  // $(document).on("click", "#submit-btn", function (evnt) {
  //   evnt.preventDefault();
  //   evnt.stopPropagation();
  //   const formId = "#" + $(this).attr("form");
  //   const newSource = $(formId).serializeArray();
  //   saveMods(newSource, formId, "Facilitator");
  // });

  //* Canceling
  $(document).on("click", "#cancel-btn", function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    location.reload();
  });

  //* Select record to edit + display modal
  // $(document).on("click", ".table tbody tr", function (evnt) {
  //   evnt.preventDefault();
  //   evnt.stopPropagation();

  //   const rowID = "#" + $(this).attr("id");
  //   const selectedRow = $(`${rowID} td`).get();
  //   const editForm = createModalForm(selectedRow);
  //   $("#modalBloc").modal("toggle");
  //   $("#edit-form").empty().append(editForm);
  // });

  //* Saving mods after editing selected record
  // $(document).on("click", "#save-btn", function (evnt) {
  //   evnt.preventDefault();
  //   evnt.stopPropagation();
  //   const formId = "#" + $(this).attr("form");
  //   const newSource = $(formId).serializeArray();
  //   saveMods(newSource, formId, "Facilitator");
  // });
});
