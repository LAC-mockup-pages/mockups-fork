// Actions and logic

const dataPartners = partnersData;
const countyList = countyData;
const labelObj = {
  ID: "ID",
  AgencyID: "agencyId",
  ReferralSiteID: "Partner ID",
  ReferralSiteName: "Partner Name",
  ReferralSiteManager: "Manager",
  Address: "Address",
  City: "City",
  State: "State",
  Zip: "ZIP",
  County: "County Code",
  CountyDesc: "County",
  Telephone: "Phone",
  ReferralSiteEmail: "Email",
};

const zipCodeFormat = (str) => {
  return str.replace(/_/g, "").replace(/-/, " ").trim();
};

const createHeaders = (labels) => {
  const headers = labels.map((label) => `<th>${label}</th>`).join("");
  return `<thead>${headers}</thead>`;
};

const createBody = (dataList, labels) => {
  let rows = "";
  for (const record of dataList) {
    const identifier = `${record.ID}-${record.AgencyID}`;
    const zipCode = zipCodeFormat(record.Zip);
    const fullAddress = `${record.Address}<br>${record.City}<br>
                          ${record.State} ${zipCode}`;

    // phoneFormat() <== helperFunctions.js
    const phoneNumber = record.Telephone
      ? phoneFormat(phoneFormat(record.Telephone))
      : "";

    const fieldsArray = Object.keys(record).filter((fieldName) =>
      labels.includes(labelObj[fieldName])
    );

    const row = fieldsArray
      .map((key) => {
        let value = "";
        switch (key) {
          case "Address":
            value = fullAddress;
            break;
          case "Telephone":
            value = phoneNumber;
            break;
          default:
            value = record[key];
            break;
        }
        return `<td class="cell-data ${key}">${value}</td>`;
      })
      .join("");

    rows += `<tr id=${identifier} title="Click to edit">${row}</tr>`;
  }
  return `<tbody>${rows}</tbody>`;
};

const createViewBloc = (dataObj, labels) => {
  const labelList = [];
  for (let label in labels) {
    const value = labels[label];
    const excludedLabels = [
      "ID",
      "agencyId",
      "City",
      "State",
      "ZIP",
      "County Code",
    ];
    if (!excludedLabels.includes(value)) {
      labelList.push(value);
    }
  }
  const bodyLabelList = labelList
    .slice(0, 4)
    .concat(["City", "State", "ZIP", "County Code"], labelList.slice(4));
  const headerLine = createHeaders(labelList);
  const tableBody = createBody(dataObj, bodyLabelList);

  $("#view-bloc").append(
    `<table class="table">${headerLine}${tableBody}</table>`
  );

  // Elements hidden so they are included in the selection used to
  // create the modal form for editing.
  $(".City, .State, .Zip, .County").toggleClass("hidden");
};

const createSelect = (hashTable, keyValue, selectedValue = "", numSelected) => {
  const [primary, secondary] = Object.keys(hashTable[0]);
  const optionList = hashTable
    .map((item) => {
      const selected = item[primary] === selectedValue ? " selected" : "";
      return `<option value=${item[primary]}${selected}>
          ${item[secondary]}</option>`;
    })
    .join("");
  const elementChoice = [
    `<div class="form-group input-field">
  <label for=${keyValue}>County</label>
  <select id=${keyValue} class="modal-select" name=${keyValue}>${optionList}</select>
</div>`,
    `<select id=${keyValue} class="modal-select form-control" name=${keyValue}><option selected disabled>Select an option</option>${optionList}</select>`,
  ];

  return elementChoice[numSelected];
};

const createNewRecord = (labelsObject) => {
  let result = [];
  const keyList = Object.keys(labelsObject);
  for (key of keyList) {
    let option = " required";
    let classOption = "";
    if (["ID", "AgencyID", "County"].includes(key)) {
      option = "";
      classOption = " hidden";
    }
    let inputElement = `<input type="text" class="form-control${classOption}" id=${key} name="${key}" placeholder="${labelsObject[key]}"${option}>`;

    if (key === "CountyDesc") {
      inputElement = createSelect(countyData, key, "", 1);
    }
    result.push(inputElement);
  }
  result.push(
    '<button type="button" id="submit-btn" form="new-partner" class="btn btn-primary">Add</button><button type="button" id="cancel-btn" class="btn btn-default">Cancel</button>'
  );
  $("#new-partner").append(result.join(""));
};

const createForm = (elmnt) => {
  const idArray = $(elmnt).attr("id").split("-");
  const formData = {};
  formData.ID = [labelObj.ID, idArray[0]];
  formData.AgencyID = [labelObj.AgencyID, idArray[1]];

  const tdList = elmnt[0].cells;

  for (let item of tdList) {
    const key = $(item).attr("class").split(" ")[1];
    let value = $(item).text();
    formData[key] = [labelObj[key], value];
  }

  const fieldList = Object.keys(formData).filter((item) => item !== "County");

  const formFields = fieldList
    .map((fieldName) => {
      let fieldText = "";
      let option = "";
      if (fieldName === "CountyDesc") {
        return createSelect(countyList, fieldName, formData.County[1], 0);
      }

      switch (fieldName) {
        case "Address":
          fieldText = formData.Address[1].slice(
            0,
            formData.Address[1].indexOf(formData.City[1])
          );
          break;
        case "ReferralSiteID":
          fieldText = formData[fieldName][1];
          option = "disabled";
          break;
        case "Zip":
          fieldText = zipCodeFormat(formData.Zip[1]);
          break;

        default:
          fieldText = formData[fieldName][1];
          break;
      }

      // createInputField() <== helperFunctions.js
      return createInputField(
        fieldName,
        formData[fieldName][0],
        fieldText,
        "",
        "",
        option
      );
    })
    .join("");

  return formFields;
};

const saveMods = (form) => {
  const result = {};
  const submittedData = $(form).serializeArray();
  for (let field of submittedData) {
    if (field.name === "CountyDesc") {
      result.County = field.value;
      countyDescValue = countyList.filter(
        (item) => item.FIPS === field.value
      )[0].CountyDesc;
      field.value = countyDescValue;
    }
    if (field.name === "Telephone") field.value = phoneFormat(field.value);
    result[field.name] = field.value;
  }
  // alphaNumCheck() <== data-check.js
  // if (!alphaNumCheck(result.Description)) {
  //   $(form)[0].reset();
  //   return;
  // }

  //! =================================================
  //! JSON Object to send back to database
  console.log("result :", JSON.stringify(result));
  //! =================================================

  //ToDO Reloading/resetting with new data
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
  createViewBloc(dataPartners, labelObj);
  createNewRecord(labelObj);

  //* Adding a new partner

  //* Select partner
  $("[title^='Click']").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();

    const rowID = "#" + $(this).attr("id");
    console.log("rowID :", rowID);
    const selectedElement = $(rowID).get();
    const editForm = createForm(selectedElement);
    $("#modalBloc").modal("toggle");
    $("#modal-form").empty().append(editForm);

    // Elements ID and AgencyID hidden so they are included in the
    // serialization creating the data Object sent back to database
    $(".input-field").slice(0, 2).toggleClass("hidden");
  });

  //* Saving mods after editing selected outcome
  $("#save-btn").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    const form = `#${$(this).attr("form")}`;
    saveMods(form);
    $("#modalBloc").modal("toggle");
  });
});
