// Actions and logic

const positionList = {
  1: "Administrative",
  2: "Case Manager",
  3: "Counselor",
  4: "Counselor / Case Manager",
  5: "Managerial / Counselor",
  6: "Managerial / Supervisory",
  7: "Managerial / Teacher",
  8: "Paraprofessional",
  9: "Teacher",
  10: "Teacher / Counselor",
  11: "Other",
  12: "Place Holder",
  13: "Trainer",
  14: "Tutor",
  15: "Board Member",
  16: "Trainer & Tutor",
  17: "Board Member & Tutor",
  18: "Admin Support & Tutor",
  19: "Substitute",
  20: "Clerical",
  27: "Fundraiser",
  28: "Board Member & Trainer"
};

const subjectList = {
  B: "B BE",
  BE: "BE BE (NRS and/or EPE)",
  BEES: "BEES Both (BE & ES)",
  BN: "BN BENL",
  CL: "CL Computer Lab (EPE)",
  CLS: "CLs Career & Life Skills",
  E: "E ESOL",
  EB: "EB ESOL-B (NRS)",
  ES: "ES ESOL (NRS and/or EPE)",
  GE: "GE GED (NRS and/or EPE)",
  H: "H HSE (NRS and/or EPE)",
  J: "J J",
  MA: "MA Maths (NRS and/or EPE)",
  NI: "NI Non-Instructional",
  O: "O Other (EPE)",
  OS: "OS Office Skills",
  W: "W",
  X: "X",
  Y: "Y"
};

const paidList = {
  P: "Paid",
  V: "Volunteer"
};

const timeStatusList = {
  F: "Full-time",
  P: "Part-time"
};

const yearsXPlist = {
  1: "Less than one year",
  2: "One to three years",
  3: "More than three years"
};

const placeholderList = [
  "First Name",
  "Last Name",
  "Start Date",
  "Seniority",
  ["Position", positionList],
  ["Subject", subjectList],
  ["Paid / Volunteer", paidList],
  ["Time Status", timeStatusList],
  ["Experience", yearsXPlist]
];

const headerList = [
  "id",
  "Partner Name",
  "Partner ID",
  "Partner Manager",
  "Address",
  "County",
  "Phone",
  "Email"
];

const labelList = [
  "id",
  "Partner Name",
  "Partner ID",
  "Partner Manager",
  "Street Address",
  "City",
  "State",
  "ZIP",
  "County",
  "Phone",
  "Email"
];

const createNewRecord = () => {
  for (let i = 0; i < placeholderList.length; i++) {
    const elmnt = placeholderList[i];
    const optionReq = elmnt !== "Length of Stay (yrs)" ? "required" : "";

    if (elmnt instanceof Array) {
      const [nameElmnt, elmntValues] = elmnt;
      let options = `<option class='red-text' selected disabled>Select ${nameElmnt}</option>`;

      for (value in elmntValues) {
        options += `<option class='blue-text' value=${value}>${elmntValues[value]}</option> `;
      }

      $("#new-personnel").append(
        `<select name=${nameElmnt} class='form-control red-text' required>${options}</select>`
      );
    } else {
      let optionClass = "";
      if (elmnt === "Start Date" || elmnt === "Seniority")
        optionClass = "medium-cell";
      $("#new-personnel").append(`<input
    type="text"
    class="form-control ${optionClass}"
    placeholder='${elmnt}'
    ${optionReq}
  />`);
    }
  }

  $("#new-personnel").append(
    `<button type="submit" id="submit-btn" class="btn btn-primary">Add</button>`
  );
};

const viewHeaders = () => {
  for (let i = 1; i < headerList.length; i++) {
    $(".table thead").append(`<th>${headerList[i]}</th>`);
  }
};

const createDataRow = (...args) => {
  const rowData = Array.from(args);
  const classList = headerList.slice(1);
  let row = "";

  for (let i = 0; i < rowData.length; i++) {
    const option = classList[i].replace(/\s/gi, "-").toLowerCase();
    row += `<td class="cell-data ${option}">${rowData[i]}</td>`;
  }

  return row;
};

const viewData = arr => {
  for (record of arr) {
    const {
      id,
      PartnerName,
      PartnerID,
      PartnerMngr,
      Address,
      Phone,
      Email
    } = record;

    const { StreetAdrs, City, State, Zip, County } = Address;
    const fullAddress = `${StreetAdrs}<br>${City.toUpperCase()}<br>${State} - ${Zip}`;

    $(".table tbody").append(
      `<tr class='table-row' id=${id} title='click to Edit'></tr>`
    );

    $(".table tbody tr:last-child").append(
      `${createDataRow(
        PartnerName,
        PartnerID,
        PartnerMngr,
        fullAddress,
        County,
        Phone,
        Email
      )}`
    );
  }
};

//* Flattens a nested JSON object
const flatten = (obj, path = "") => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, "")]: obj };

  return Object.keys(obj).reduce((output, key) => {
    return obj instanceof Array
      ? { ...output, ...flatten(obj[key], path) }
      : { ...output, ...flatten(obj[key], key + ".") };
  }, {});
};

const createListFields = num => {
  const selectedRecord = partnersData.filter(record => record.id === num);
  const flattenedRecord = flatten(selectedRecord);
  const keyList = Object.keys(flattenedRecord);
  const list = keyList.map((key, indx) => [
    key,
    labelList[indx],
    flattenedRecord[key]
  ]);

  return list;
};

$(document).ready(() => {
  //* Back to Top button
  const btnToTop = $("#btn-top");
  $("window").scroll(() => {
    btnToTop.style.display =
      $("window").scrollTop() > 600 || $("body".scrollTop() > 600)
        ? "inline-block"
        : "none";
  });
  btnToTop.click(e => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  // * data viewing
  createNewRecord();
  // viewHeaders();
  // viewData(partnersData);

  //* Adding a new team member
  $("#add-new-member").click(function() {
    $("#new-personnel").toggleClass("hidden");
  });

  // //* Select partner
  $("[title^='click'").click(function() {
    const rowID = Number($(this).attr("id"));
    const listFields = createListFields(rowID);
    $("#modalBloc").modal("toggle");
    $(".modal-body form").remove();
    $(".modal-body").append("<form id='modal-form'></form>");

    for (field of listFields) {
      const key = field[1],
        idVal = field[0];
      let option = "",
        classOption = "",
        val = field[2];

      if (["id", "PartnerID"].includes(idVal)) option = "disabled";
      if (placeholderList.includes(key)) classOption = "class='red-text'";
      if (!val) val = "";
      $(".modal-body>form").append(
        `<div class="input-field">
            <label for=${idVal} ${classOption}>${key}</label>
            <input type="text" id=${idVal} value='${val}' ${option}>
          </div>`
      );
    }
  });

  // //* Deleting source
});
