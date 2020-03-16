// Actions and logic

// const agencyDataFund = {
//   FundSources: {
//     ALE: {
//       FSID: "ALE - Adult Literacy Education",
//       Amount: "1000",
//       FundStart: "7/1/2019",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: "Some nefarious purpose"
//     },
//     AdoLitDY: {
//       FSID: "Adolescent Literacy DYCD1",
//       Amount: "100000",
//       FundStart: "7/1/2020",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: ""
//     },
//     CASP3DSS: {
//       FSID: "CASP 3 DSS",
//       Amount: "0",
//       FundStart: "1/1/2020",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: ""
//     },
//     EPE: {
//       FSID: "EPE",
//       Amount: "500000",
//       FundStart: "7/9/2019",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: "RS Test 12.5"
//     },
//     IELCE: {
//       FSID: "Integ Eng Lang Civics Edu",
//       Amount: "0",
//       FundStart: "10/5/2019",
//       FundEnd: "6/30/2020",
//       FundNumber: "IELCE2020/4",
//       Purpose: "ASISTS 13.1"
//     },
//     PERKINS: {
//       FSID: "Perkins",
//       Amount: "0",
//       FundStart: "7/1/2019",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: ""
//     },
//     UNITWAY: {
//       FSID: "United Way",
//       Amount: "0",
//       FundStart: "7/1/2019",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: ""
//     },
//     WIAWIOA: {
//       FSID: "WIA / WIOA",
//       Amount: "100000",
//       FundStart: "7/1/2019",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: "RS Test 12.5"
//     },
//     WIOAT2: {
//       FSID: "WIOA - Title II",
//       Amount: "100000",
//       FundStart: "7/1/2019",
//       FundEnd: "6/30/2020",
//       FundNumber: "",
//       Purpose: ""
//     }
//   },
//   CurrentFY: "2020"
// };

let updatedAgencyDataFund = {};

const headerList = [
  "Label",
  "FS ID",
  "Amount",
  "Begin Date",
  "End Date",
  "Contrat / Grant #",
  "Purpose",
  "FY"
];

const currencyFormat = str => {
  return !str
    ? ""
    : "$" +
        Number(str)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const dateFormat = str => {
  const date = new Date(str);
  const month =
    date.getMonth() < 9
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString();

  const day =
    date.getDate() < 10
      ? "0" + date.getDate().toString()
      : date.getDate().toString();

  return `${month}/${day}/${date.getFullYear()}`;
};

const viewData = (sources, fiscalYear) => {
  for (let item of sources) {
    const FSID = item.ID;
    const Amount = item.Amount;
    const Purpose = item.Purpose;
    const FundNumber = item.FundNumber;
    const FundStart = dateFormat(item.FundStart);
    const FundEnd = dateFormat(item.FundEnd);

    $("tbody").append(`
    <tr class="table-row" title="Click to Edit">
        <td>${FSID}</td>
        <td>${currencyFormat(Amount)}</td>
        <td class="date">${FundStart}</td>
        <td class="date">${FundEnd}</td>
        <td class="fiscalYear">${fiscalYear}</td>
        <td>${FundNumber}</td>
        <td class="purpose">${Purpose}</td>
    </tr>`);
  }
};

const createListFields = row => {
  const sourceName = Object.keys(agencyDataFund)[row];
  const listValues = Object.keys(agencyDataFund[sourceName]).map(
    key => agencyDataFund[sourceName][key]
  );
  listValues.push(CurrentFY);
  listValues.unshift(sourceName);

  return headerList.map((item, indx) => [item, listValues[indx]]);
};

$(document).ready(() => {
  // * sub-navbar/index.js
  $("#sub-nav li").click(function() {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing
  viewData(agencyDataFund, CurrentFY);

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
