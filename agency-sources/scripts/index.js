// Actions and logic

const agencyDataFund = {
  FundSources: {
    ALE: {
      FSID: "ALE - Adult Literacy Education",
      Amount: "1000",
      FundStart: "7/1/2019",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: "Some nefarious purpose"
    },
    AdoLitDY: {
      FSID: "Adolescent Literacy DYCD1",
      Amount: "100000",
      FundStart: "7/1/2020",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: ""
    },
    CASP3DSS: {
      FSID: "CASP 3 DSS",
      Amount: "0",
      FundStart: "1/1/2020",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: ""
    },
    EPE: {
      FSID: "EPE",
      Amount: "500000",
      FundStart: "7/9/2019",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: "RS Test 12.5"
    },
    IELCE: {
      FSID: "Integ Eng Lang Civics Edu",
      Amount: "0",
      FundStart: "10/5/2019",
      FundEnd: "6/30/2020",
      FundNumber: "IELCE2020/4",
      Purpose: "ASISTS 13.1"
    },
    PERKINS: {
      FSID: "Perkins",
      Amount: "0",
      FundStart: "7/1/2019",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: ""
    },
    UNITWAY: {
      FSID: "United Way",
      Amount: "0",
      FundStart: "7/1/2019",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: ""
    },
    WIAWIOA: {
      FSID: "WIA / WIOA",
      Amount: "100000",
      FundStart: "7/1/2019",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: "RS Test 12.5"
    },
    WIOAT2: {
      FSID: "WIOA - Title II",
      Amount: "100000",
      FundStart: "7/1/2019",
      FundEnd: "6/30/2020",
      FundNumber: "",
      Purpose: ""
    }
  },
  CurrentFY: "2020"
};

const currencyFormat = str => {
  return str === "0"
    ? ""
    : "$" +
        Number(str)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const viewData = (sources, fiscalYear) => {
  for (item in sources) {
    const { FSID, Amount, FundStart, FundEnd, FundNumber, Purpose } = sources[
      item
    ];
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

$(document).ready(() => {
  // * from navBar/index.js
  $("#nav-icon").click(function() {
    $(this).toggleClass("open");
  });

  $("#parentMenu1 li").click(() => {
    $("#nav-icon").removeClass("open");
  });

  $("#main-logo").click(() => {
    alert("Redirect to Home Page");
  });

  // * sub-navbar/index.js
  $("#sub-nav li").click(function() {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  // * data viewing
  const { FundSources, CurrentFY } = agencyDataFund;
  viewData(FundSources, CurrentFY);

  //* Saving modified data while keeping track of original data
});
