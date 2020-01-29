// Actions and logic
const sitesData = [
  {
    id: 1,
    SiteName: "Rice, Upton and Predovic",
    SiteID: "SnDwkYNRtVtd",
    SiteMngr: "Giustino Blumsom",
    Adress: {
      StreetAdrs: "79 Jenifer Lane",
      City: "Miami",
      State: "FL",
      Zip: "33169",
      County: "ipsum primis"
    },
    Telephone: "786-435-4240",
    CSD: 3,
    CPD: 21,
    CD: 13,
    AD: 18,
    SD: 6
  },
  {
    id: 2,
    SiteName: "Goyette-Hodkiewicz",
    SiteID: "v4aPENK",
    SiteMngr: "Cathie Lumley",
    Adress: {
      StreetAdrs: "07302 Starling Trail",
      City: "Houston",
      State: "TX",
      Zip: "77085",
      County: "platea"
    },
    Telephone: "713-460-0761",
    CSD: 2,
    CPD: 19,
    CD: 19,
    AD: 3,
    SD: 3
  },
  {
    id: 3,
    SiteName: "Thompson-Shields",
    SiteID: "BPygCzAS",
    SiteMngr: "Parker Mitie",
    Adress: {
      StreetAdrs: "0 Eliot Road",
      City: "Shawnee Mission",
      State: "KS",
      Zip: "66205",
      County: "nullam"
    },
    Telephone: "913-436-4702",
    CSD: 20,
    CPD: 5,
    CD: 7,
    AD: 7,
    SD: 20
  },
  {
    id: 4,
    SiteName: "Lowe, Collier and Fritsch",
    SiteID: "Ldotx0eQC",
    SiteMngr: "Sheila-kathryn Harbidge",
    Adress: {
      StreetAdrs: "690 Florence Plaza",
      City: "Erie",
      State: "PA",
      Zip: "16522",
      County: "cubilia"
    },
    Telephone: "814-527-3743",
    CSD: 5,
    CPD: 17,
    CD: 4,
    AD: 9,
    SD: 1
  },
  {
    id: 5,
    SiteName: "Rodriguez LLC",
    SiteID: "ywK62Kye479F",
    SiteMngr: "Marlena Hoyte",
    Adress: {
      StreetAdrs: "1 Village Court",
      City: "San Francisco",
      State: "CA",
      Zip: "94177",
      County: "in"
    },
    Telephone: "415-320-0318",
    CSD: 1,
    CPD: 21,
    CD: 21,
    AD: 17,
    SD: 2
  },
  {
    id: 6,
    SiteName: "Zulauf LLC",
    SiteID: "Qpp2mdRKUujl",
    SiteMngr: "Beck Notman",
    Adress: {
      StreetAdrs: "16667 Bluejay Alley",
      City: "Galveston",
      State: "TX",
      Zip: "77554",
      County: "non"
    },
    Telephone: "281-634-4795",
    CSD: 14,
    CPD: 21,
    CD: 18,
    AD: 16,
    SD: 25
  },
  {
    id: 7,
    SiteName: "Simonis, Yost and Bayer",
    SiteID: "zsno5J",
    SiteMngr: "Susette Spellissy",
    Adress: {
      StreetAdrs: "1 Westport Drive",
      City: "Fort Lauderdale",
      State: "FL",
      Zip: "33305",
      County: "ac"
    },
    Telephone: "954-828-2111",
    CSD: 19,
    CPD: 10,
    CD: 15,
    AD: 20,
    SD: 14
  },
  {
    id: 8,
    SiteName: "Wilkinson-Osinski",
    SiteID: "ozA2XHK",
    SiteMngr: "Leyla Bratch",
    Adress: {
      StreetAdrs: "4 Continental Road",
      City: "Van Nuys",
      State: "CA",
      Zip: "91406",
      County: null
    },
    Telephone: null,
    CSD: null,
    CPD: null,
    CD: null,
    AD: null,
    SD: null
  },
  {
    id: 9,
    SiteName: "Pollich, Ratke and Huel",
    SiteID: "JH0oMA",
    SiteMngr: "Patricio Achurch",
    Adress: {
      StreetAdrs: "192 Derek Avenue",
      City: "Hampton",
      State: "VA",
      Zip: "23668",
      County: null
    },
    Telephone: null,
    CSD: null,
    CPD: null,
    CD: null,
    AD: null,
    SD: null
  },
  {
    id: 10,
    SiteName: "Grant, Homenick and Grady",
    SiteID: "ENjuRmizof6v",
    SiteMngr: "Tonia Yakuntsov",
    Adress: {
      StreetAdrs: "9 Golf View Alley",
      City: "Pittsburgh",
      State: "PA",
      Zip: "15255",
      County: null
    },
    Telephone: null,
    CSD: null,
    CPD: null,
    CD: null,
    AD: null,
    SD: null
  },
  {
    id: 11,
    SiteName: "Osinski, Parisian and Wuckert",
    SiteID: "bzIMN5WJvD",
    SiteMngr: "Bram Hovell",
    Adress: {
      StreetAdrs: "6 Pine View Way",
      City: "Tallahassee",
      State: "FL",
      Zip: "32314",
      County: "lorem vitae"
    },
    Telephone: "850-660-3045",
    CSD: 22,
    CPD: 25,
    CD: 25,
    AD: 16,
    SD: 15
  },
  {
    id: 12,
    SiteName: "Volkman-Senger",
    SiteID: "veJweesjPz",
    SiteMngr: "Lorne Murrish",
    Adress: {
      StreetAdrs: "21599 Rutledge Park",
      City: "Detroit",
      State: "MI",
      Zip: "48224",
      County: "donec"
    },
    Telephone: "586-509-3603",
    CSD: 8,
    CPD: 5,
    CD: 12,
    AD: 22,
    SD: 10
  },
  {
    id: 13,
    SiteName: "Mann and Sons",
    SiteID: "e9SwZDrUmC",
    SiteMngr: "Mirabella Volante",
    Adress: {
      StreetAdrs: "12 Cascade Parkway",
      City: "Houston",
      State: "TX",
      Zip: "77255",
      County: "sapien"
    },
    Telephone: "713-955-9019",
    CSD: 9,
    CPD: 11,
    CD: 16,
    AD: 13,
    SD: 2
  },
  {
    id: 14,
    SiteName: "Franecki LLC",
    SiteID: "OH0gj82Ao",
    SiteMngr: "Ravid Zupa",
    Adress: {
      StreetAdrs: "247 Mallard Terrace",
      City: "Washington",
      State: "DC",
      Zip: "20268",
      County: "amet nunc"
    },
    Telephone: "202-771-6672",
    CSD: 6,
    CPD: 2,
    CD: 12,
    AD: 5,
    SD: 25
  },
  {
    id: 15,
    SiteName: "Zboncak-Langosh",
    SiteID: "zEsZQoN9LvPd",
    SiteMngr: "Teodoro Quig",
    Adress: {
      StreetAdrs: "686 Sage Pass",
      City: "San Francisco",
      State: "CA",
      Zip: "94105",
      County: "porta"
    },
    Telephone: "650-606-2277",
    CSD: 25,
    CPD: 9,
    CD: 23,
    AD: 8,
    SD: 13
  },
  {
    id: 16,
    SiteName: "Barrows Group",
    SiteID: "K2gBXmsuIm",
    SiteMngr: "Page Harvey",
    Adress: {
      StreetAdrs: "7960 Crescent Oaks Street",
      City: "Portland",
      State: "OR",
      Zip: "97216",
      County: "erat volutpat"
    },
    Telephone: "503-644-6951",
    CSD: 11,
    CPD: 16,
    CD: 12,
    AD: 22,
    SD: 6
  },
  {
    id: 17,
    SiteName: "Hand, Barton and Ernser",
    SiteID: "mwGvLqR1eu",
    SiteMngr: "Maximilian Plumptre",
    Adress: {
      StreetAdrs: "6 Rowland Trail",
      City: "Sacramento",
      State: "CA",
      Zip: "94207",
      County: "semper est"
    },
    Telephone: "916-510-1566",
    CSD: 16,
    CPD: 19,
    CD: 4,
    AD: 6,
    SD: 21
  },
  {
    id: 18,
    SiteName: "Hoppe-Yundt",
    SiteID: "XAoLJGmMkv0a",
    SiteMngr: "Lesley McPhilemy",
    Adress: {
      StreetAdrs: "233 Hazelcrest Parkway",
      City: "Memphis",
      State: "TN",
      Zip: "38119",
      County: "vitae nisl"
    },
    Telephone: "901-745-5713",
    CSD: 1,
    CPD: 16,
    CD: 15,
    AD: 14,
    SD: 11
  },
  {
    id: 19,
    SiteName: "Renner Group",
    SiteID: "Zbx0hLeaKR",
    SiteMngr: "Cosimo Buss",
    Adress: {
      StreetAdrs: "2 Anthes Way",
      City: "East Saint Louis",
      State: "IL",
      Zip: "62205",
      County: "risus semper"
    },
    Telephone: "618-815-8088",
    CSD: 8,
    CPD: 12,
    CD: 1,
    AD: 22,
    SD: 4
  },
  {
    id: 20,
    SiteName: "Bruen, Schaefer and Hahn",
    SiteID: "W9ru4J5a",
    SiteMngr: "Leonid Orta",
    Adress: {
      StreetAdrs: "7 Menomonie Street",
      City: "San Bernardino",
      State: "CA",
      Zip: "92415",
      County: "nonummy integer"
    },
    Telephone: "760-639-0320",
    CSD: 2,
    CPD: 11,
    CD: 8,
    AD: 21,
    SD: 6
  },
  {
    id: 21,
    SiteName: "Erdman, Ratke and Schamberger",
    SiteID: "uL4xNQXFTq5",
    SiteMngr: "Carena Campanelli",
    Adress: {
      StreetAdrs: "8323 Susan Way",
      City: "Sterling",
      State: "VA",
      Zip: "20167",
      County: "dis"
    },
    Telephone: "571-371-8442",
    CSD: 11,
    CPD: 24,
    CD: 11,
    AD: 8,
    SD: 20
  },
  {
    id: 22,
    SiteName: "Daniel LLC",
    SiteID: "OJSJQyL5",
    SiteMngr: "Annamarie Verma",
    Adress: {
      StreetAdrs: "0762 Lighthouse Bay Center",
      City: "Akron",
      State: "OH",
      Zip: "44329",
      County: "quam pharetra"
    },
    Telephone: "330-195-0564",
    CSD: 17,
    CPD: 22,
    CD: 23,
    AD: 23,
    SD: 19
  },
  {
    id: 23,
    SiteName: "Yundt, Stoltenberg and Ritchie",
    SiteID: "5eJryvI5q",
    SiteMngr: "Giustino McLaine",
    Adress: {
      StreetAdrs: "35 Bluejay Lane",
      City: "New Orleans",
      State: "LA",
      Zip: "70129",
      County: "nisl aenean"
    },
    Telephone: "504-988-9742",
    CSD: 9,
    CPD: 3,
    CD: 23,
    AD: 22,
    SD: 25
  },
  {
    id: 24,
    SiteName: "Pacocha, Schmidt and Predovic",
    SiteID: "LSgsjmK7llQ4",
    SiteMngr: "Georgie De Haven",
    Adress: {
      StreetAdrs: "714 Utah Crossing",
      City: "Columbus",
      State: "OH",
      Zip: "43284",
      County: "vulputate"
    },
    Telephone: "614-598-0506",
    CSD: 18,
    CPD: 2,
    CD: 25,
    AD: 15,
    SD: 7
  },
  {
    id: 25,
    SiteName: "Lang Group",
    SiteID: "uqtHMhAuUD",
    SiteMngr: "Ganny Woollett",
    Adress: {
      StreetAdrs: "4761 Hoard Parkway",
      City: "Philadelphia",
      State: "PA",
      Zip: "19146",
      County: null
    },
    Telephone: null,
    CSD: null,
    CPD: null,
    CD: null,
    AD: null,
    SD: null
  },
  {
    id: 26,
    SiteName: "Torphy-Schuster",
    SiteID: "IrDeCgD",
    SiteMngr: "Lora Lazer",
    Adress: {
      StreetAdrs: "2 6th Park",
      City: "San Francisco",
      State: "CA",
      Zip: "94105",
      County: null
    },
    Telephone: null,
    CSD: null,
    CPD: null,
    CD: null,
    AD: null,
    SD: null
  },
  {
    id: 27,
    SiteName: "Harber Group",
    SiteID: "Y4djnOO22V",
    SiteMngr: "Koenraad Rubenovic",
    Adress: {
      StreetAdrs: "3 Everett Drive",
      City: "El Paso",
      State: "TX",
      Zip: "79911",
      County: "duis"
    },
    Telephone: "915-853-3857",
    CSD: 4,
    CPD: 23,
    CD: 16,
    AD: 3,
    SD: 3
  },
  {
    id: 28,
    SiteName: "Schowalter-D'Amore",
    SiteID: "CUliYwg4HGf",
    SiteMngr: "Cully Josuweit",
    Adress: {
      StreetAdrs: "347 Becker Crossing",
      City: "West Palm Beach",
      State: "FL",
      Zip: "33411",
      County: null
    },
    Telephone: null,
    CSD: null,
    CPD: null,
    CD: null,
    AD: null,
    SD: null
  },
  {
    id: 29,
    SiteName: "Kovacek Group",
    SiteID: "ulL8OBW",
    SiteMngr: "Malvin Oaks",
    Adress: {
      StreetAdrs: "7 Jenna Pass",
      City: "Fresno",
      State: "CA",
      Zip: "93750",
      County: "vel nisl"
    },
    Telephone: "559-497-3426",
    CSD: 17,
    CPD: 24,
    CD: 18,
    AD: 8,
    SD: 17
  },
  {
    id: 30,
    SiteName: "Cole-Zboncak",
    SiteID: "t0wIJqo8NPW",
    SiteMngr: "Johna Neeves",
    Adress: {
      StreetAdrs: "0 Summer Ridge Plaza",
      City: "Elizabeth",
      State: "NJ",
      Zip: "07208",
      County: "integer"
    },
    Telephone: "908-779-9086",
    CSD: 22,
    CPD: 18,
    CD: 14,
    AD: 17,
    SD: 3
  },
  {
    id: 31,
    SiteName: "Kuhn LLC",
    SiteID: "eZNrbrwwhmBm",
    SiteMngr: "Jerrold Brunesco",
    Adress: {
      StreetAdrs: "0341 Spenser Park",
      City: "Vancouver",
      State: "WA",
      Zip: "98682",
      County: "turpis"
    },
    Telephone: "360-386-3663",
    CSD: 25,
    CPD: 4,
    CD: 24,
    AD: 2,
    SD: 16
  },
  {
    id: 32,
    SiteName: "Smith, Botsford and Hane",
    SiteID: "DkOc5oAc",
    SiteMngr: "Tina Cano",
    Adress: {
      StreetAdrs: "33 Trailsway Trail",
      City: "New York City",
      State: "NY",
      Zip: "10014",
      County: "augue"
    },
    Telephone: "347-115-3580",
    CSD: 23,
    CPD: 18,
    CD: 3,
    AD: 17,
    SD: 7
  },
  {
    id: 33,
    SiteName: "D'Amore LLC",
    SiteID: "wRQMk2j5U7Qf",
    SiteMngr: "Hestia Crannell",
    Adress: {
      StreetAdrs: "01172 Walton Avenue",
      City: "Cincinnati",
      State: "OH",
      Zip: "45208",
      County: "augue"
    },
    Telephone: "513-833-6980",
    CSD: 13,
    CPD: 16,
    CD: 11,
    AD: 10,
    SD: 3
  },
  {
    id: 34,
    SiteName: "Sanford LLC",
    SiteID: "nxP5xM",
    SiteMngr: "Bibi Fewtrell",
    Adress: {
      StreetAdrs: "69 Graedel Pass",
      City: "Greenville",
      State: "SC",
      Zip: "29615",
      County: null
    },
    Telephone: null,
    CSD: null,
    CPD: null,
    CD: null,
    AD: null,
    SD: null
  },
  {
    id: 35,
    SiteName: "Padberg, Cronin and Auer",
    SiteID: "QTFcL0qt6",
    SiteMngr: "Margette Dimitriades",
    Adress: {
      StreetAdrs: "77 Bobwhite Plaza",
      City: "Aurora",
      State: "CO",
      Zip: "80045",
      County: "vitae consectetuer"
    },
    Telephone: "303-753-5864",
    CSD: 5,
    CPD: 17,
    CD: 3,
    AD: 22,
    SD: 12
  },
  {
    id: 36,
    SiteName: "Erdman, Moen and Quigley",
    SiteID: "dM2EB42pD",
    SiteMngr: "Janine Shory",
    Adress: {
      StreetAdrs: "9 Union Point",
      City: "Richmond",
      State: "VA",
      Zip: "23260",
      County: "orci"
    },
    Telephone: "804-226-9705",
    CSD: 5,
    CPD: 8,
    CD: 16,
    AD: 16,
    SD: 16
  },
  {
    id: 37,
    SiteName: "Lueilwitz, Hand and Upton",
    SiteID: "JNShPbk4",
    SiteMngr: "Corina Regelous",
    Adress: {
      StreetAdrs: "50 Welch Avenue",
      City: "Shawnee Mission",
      State: "KS",
      Zip: "66225",
      County: "non mauris"
    },
    Telephone: "913-929-7639",
    CSD: 9,
    CPD: 11,
    CD: 3,
    AD: 5,
    SD: 9
  },
  {
    id: 38,
    SiteName: "Gerhold, Watsica and Durgan",
    SiteID: "D3Vz34O",
    SiteMngr: "Gustave McGann",
    Adress: {
      StreetAdrs: "823 Dayton Street",
      City: "Montgomery",
      State: "AL",
      Zip: "36195",
      County: "sit"
    },
    Telephone: "334-942-6762",
    CSD: 6,
    CPD: 6,
    CD: 24,
    AD: 6,
    SD: 7
  },
  {
    id: 39,
    SiteName: "Bednar, Macejkovic and Batz",
    SiteID: "pTcItkkB",
    SiteMngr: "Morey Blunderfield",
    Adress: {
      StreetAdrs: "830 Bowman Trail",
      City: "Davenport",
      State: "IA",
      Zip: "52809",
      County: "donec"
    },
    Telephone: "563-939-0083",
    CSD: 14,
    CPD: 9,
    CD: 24,
    AD: 7,
    SD: 5
  },
  {
    id: 40,
    SiteName: "Steuber-Blanda",
    SiteID: "J6RoipVJ20",
    SiteMngr: "Zak Trahar",
    Adress: {
      StreetAdrs: "73 Basil Street",
      City: "Pittsburgh",
      State: "PA",
      Zip: "15225",
      County: "a libero"
    },
    Telephone: "412-318-1548",
    CSD: 23,
    CPD: 9,
    CD: 13,
    AD: 17,
    SD: 24
  }
];

const headerList = [
  "id",
  "Site Name",
  "Site ID",
  "Site Manager",
  "Address",
  "County",
  "Phone",
  "CSD",
  "CPD",
  "CD",
  "AD",
  "SD"
];

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
  for (site of arr) {
    const {
      id,
      SiteName,
      SiteID,
      SiteMngr,
      Adress,
      Telephone,
      CSD,
      CPD,
      CD,
      AD,
      SD
    } = site;

    const { StreetAdrs, City, State, Zip, County } = Adress;
    const fullAddress = `${StreetAdrs}<br>${City.toUpperCase()}<br>${State} - ${Zip}`;

    $(".table tbody").append(
      `<tr class='table-row' id=${id} title='click to Edit'></tr>`
    );

    $(".table tbody tr:last-child").append(
      `${createDataRow(
        SiteName,
        SiteID,
        SiteMngr,
        fullAddress,
        County,
        Telephone,
        CSD,
        CPD,
        CD,
        AD,
        SD
      )}`
    );
  }
};

// const createListFields = row => {
//   const { FundSources, CurrentFY } = agencyDataFund;
//   const sourceName = Object.keys(FundSources)[row];
//   const listValues = Object.keys(FundSources[sourceName]).map(
//     key => FundSources[sourceName][key]
//   );
//   listValues.push(CurrentFY);
//   listValues.unshift(sourceName);

//   return headerList.map((item, indx) => [item, listValues[indx]]);
// };

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
  viewHeaders();
  viewData(sitesData);

  // //* Adding a new funding source

  // //* Select funding source
  // $("[title^='Click'").click(function() {
  //   const rowIndx = $(this)[0].rowIndex - 1;

  //   const listFields = createListFields(rowIndx);

  //   $("#modalBloc").modal("toggle");
  //   $(".modal-body form").remove();
  //   $(".modal-body").append("<form id='modal-form'></form>");

  //   for (field of listFields) {
  //     const key = field[0],
  //       val = field[1],
  //       indx = listFields.indexOf(field);

  //     let option = "";

  //     if (!indx) option = "disabled";
  //     if ([1, 3, 4].includes(indx)) option = "required";

  //     $(".modal-body>form").append(
  //       `<div class="input-field">
  //         <label for=${indx}>${key}</label>
  //         <input type="text" id=${indx} value='${val}' ${option}>
  //       </div>`
  //     );
  //   }
  // });

  // //* Deleting source
  // $("#delete-btn").click(() => {
  //   const deleteConfirm = $(".modal-footer>h3");
  //   const sourceLabel = $("input#0").val();

  //   if (deleteConfirm.length === 0) {
  //     $(".modal-footer").prepend(
  //       "<h3 class='delete-msg'>Confirm deletion by clicking again the DELETE button</h3>"
  //     );
  //   } else {
  //     deleteConfirm.remove();
  //   }
  // });
});
