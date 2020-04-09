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

const createNewRecord = () => {
  for (let i = 0; i < placeholderList.length; i++) {
    const newLine = "";

    $("#new-partner").append(`${newLine}<input
    type="text"
    class="form-control"
    placeholder='${placeholderList[i]}'
    required
  />`);
  }

  $("#new-partner").append(
    `<button type="submit" id="submit-btn" class="btn btn-primary">Add New Partner</button>`
  );
};

const createHeaders = (labels) => {
  const headers = labels.map((label) => `<th>${label}</th>`).join("");
  return `<thead>${headers}</thead>`;
};
const createBody = (dataList, labels) => {
  let rows = "";
  for (const record of dataList) {
    const identifier = `${record.ID}-${record.AgencyID}`;
    const zipCode = record.Zip.replace(/_/g, "").replace(/-/, " ").trim();
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

  $(".City, .State, .Zip, .County").toggleClass("hidden");
};

const createForm = (elmnt) => {
  const idArray = $(elmnt).attr("id").split("-");
  const formData = labelObj;
  formData.ID = [formData.ID, idArray[0]];
  formData.AgencyID = [formData.AgencyID, idArray[1]];

  const tdList = elmnt[0].cells;
  // console.log("tdList :", tdList);
  const length = tdList.length;
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
  // createNewRecord();

  //* Adding a new partner

  //* Select partner
  $("[title^='Click']").click(function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();

    const rowID = "#" + $(this).attr("id");
    const selectedElement = $(rowID).get();
    const listFields = createForm(selectedElement);
    $("#modalBloc").modal("toggle");
    $(".modal-body form").remove();
    $(".modal-body").append(
      "<form id='modal-form' role='form'>" + listFields + "</form>"
    );

    // for (field of listFields) {
    //   const key = field[1],
    //     idVal = field[0];
    //   let option = "",
    //     classOption = "",
    //     val = field[2];

    //   if (["id", "PartnerID"].includes(idVal)) option = "disabled";
    //   if (placeholderList.includes(key)) classOption = "class='red-text'";
    //   if (!val) val = "";
    //   $(".modal-body>form").append(
    //     `<div class="input-field">
    //         <label for=${idVal} ${classOption}>${key}</label>
    //         <input type="text" id=${idVal} value='${val}' ${option}>
    //       </div>`
    //   );
    // }
  });

  // //* Deleting source
});
