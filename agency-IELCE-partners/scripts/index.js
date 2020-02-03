// Actions and logic

const ielcePartnersData = [
  {
    id: 1,
    PartnerName: "Cole, Mayer and Waelchi",
    PartnerID: "mxTbWVA",
    PartnerMngr: "Claire Myerscough",
    Address: {
      StreetAdrs: "46 Mifflin Parkway",
      City: "Gilbert",
      State: "AZ",
      Zip: "85297",
      County: "convallis"
    },
    Phone: "602-530-8824",
    Email: "cmyerscough0@hc360.com",
    FSID: "MORBI",
    ProjectedAmount: null,
    Amount: null,
    TrainingType: "Workforce readiness",
    Credential: "Vocational degree"
  },
  {
    id: 2,
    PartnerName: "Gulgowski-Corkery",
    PartnerID: "d3fNRMzCkVR0",
    PartnerMngr: "Carmen Dradey",
    Address: {
      StreetAdrs: "327 Valley Edge Street",
      City: "Irving",
      State: "TX",
      Zip: "75062",
      County: "magna"
    },
    Phone: "972-600-0814",
    Email: "cdradey1@diigo.com",
    FSID: "SAPIEN CURSUS",
    ProjectedAmount: "$186258.22",
    Amount: "$34617.79",
    TrainingType: "General Education",
    Credential: "Nice Diploma"
  },
  {
    id: 3,
    PartnerName: "Howell-Johns",
    PartnerID: "EXgi59f",
    PartnerMngr: "Don Dickman",
    Address: {
      StreetAdrs: "7473 Pearson Court",
      City: "Melbourne",
      State: "FL",
      Zip: "32941",
      County: "erat nulla"
    },
    Phone: "321-619-1002",
    Email: "ddickman2@rambler.ru",
    FSID: "SEMPER",
    ProjectedAmount: null,
    Amount: null,
    TrainingType: "Workforce",
    Credential: "Nice Diploma"
  },
  {
    id: 4,
    PartnerName: "Funk-Paucek",
    PartnerID: "LTrauuBECJ",
    PartnerMngr: "Ynez Bickerdicke",
    Address: {
      StreetAdrs: "6954 Russell Park",
      City: "Greensboro",
      State: "NC",
      Zip: "27499",
      County: "sapien sapien"
    },
    Phone: "336-587-7175",
    Email: "ybickerdicke3@com.com",
    FSID: "ELEIFEND",
    ProjectedAmount: "$104084.85",
    Amount: "$26832.42",
    TrainingType: "Workforce readiness",
    Credential: "Certificate"
  },
  {
    id: 5,
    PartnerName: "Ziemann Group",
    PartnerID: "e4yoiwzsSnlA",
    PartnerMngr: "Stormie Ebanks",
    Address: {
      StreetAdrs: "5 Golf Course Avenue",
      City: "Las Vegas",
      State: "NV",
      Zip: "89130",
      County: "est phasellus"
    },
    Phone: "702-360-5729",
    Email: "sebanks4@people.com.cn",
    FSID: "IN QUAM",
    ProjectedAmount: "$68179.12",
    Amount: "$137744.47",
    TrainingType: "Workforce",
    Credential: "GED"
  },
  {
    id: 6,
    PartnerName: "Kuvalis-Johnston",
    PartnerID: "rfqMRb",
    PartnerMngr: "Edan Popelay",
    Address: {
      StreetAdrs: "349 Meadow Vale Junction",
      City: "Honolulu",
      State: "HI",
      Zip: "96825",
      County: "luctus"
    },
    Phone: "808-223-8652",
    Email: "epopelay5@merriam-webster.com",
    FSID: "IPSUM",
    ProjectedAmount: "$167850.50",
    Amount: "$118038.92",
    TrainingType: "On-the-job",
    Credential: "Workforce Certification"
  },
  {
    id: 7,
    PartnerName: "Veum, Corkery and King",
    PartnerID: "3AS2qhWj",
    PartnerMngr: "Georgina Shelvey",
    Address: {
      StreetAdrs: "295 Lillian Street",
      City: "Washington",
      State: "DC",
      Zip: "20051",
      County: "hendrerit"
    },
    Phone: "202-282-3712",
    Email: "gshelvey6@usa.gov",
    FSID: "LIBERO CONVALLIS",
    ProjectedAmount: null,
    Amount: null,
    TrainingType: "General Education",
    Credential: "Workforce Certification"
  },
  {
    id: 8,
    PartnerName: "Pfannerstill-Harvey",
    PartnerID: "wsCR3aB",
    PartnerMngr: "Rafaela Schirach",
    Address: {
      StreetAdrs: "0579 Buhler Pass",
      City: "Las Vegas",
      State: "NV",
      Zip: "89150",
      County: "ac"
    },
    Phone: "702-200-4362",
    Email: "rschirach7@seattletimes.com",
    FSID: "NEQUE",
    ProjectedAmount: "$33989.93",
    Amount: "$43527.90",
    TrainingType: "On-the-job",
    Credential: "Workforce Certification"
  },
  {
    id: 9,
    PartnerName: "Jenkins, Metz and Schulist",
    PartnerID: "N7z28TQYkO",
    PartnerMngr: "Sophi Elvish",
    Address: {
      StreetAdrs: "2540 Norway Maple Place",
      City: "Joliet",
      State: "IL",
      Zip: "60435",
      County: "nunc proin"
    },
    Phone: "815-131-5685",
    Email: "selvish8@harvard.edu",
    FSID: "MAURIS EGET",
    ProjectedAmount: "$58343.10",
    Amount: "$80460.68",
    TrainingType: "On-the-job",
    Credential: "Vocational degree"
  },
  {
    id: 10,
    PartnerName: "Gleason, Harvey and Kemmer",
    PartnerID: "m1UHLX",
    PartnerMngr: "Sibley Rotte",
    Address: {
      StreetAdrs: "14377 Barby Alley",
      City: "Irvine",
      State: "CA",
      Zip: "92612",
      County: "eu nibh"
    },
    Phone: "510-664-7558",
    Email: "srotte9@patch.com",
    FSID: "MAGNIS DIS",
    ProjectedAmount: "$133617.46",
    Amount: "$124565.29",
    TrainingType: "Workshop sessions",
    Credential: "Nice Diploma"
  },
  {
    id: 11,
    PartnerName: "Purdy-Thompson",
    PartnerID: "dmp66Tw5PMaD",
    PartnerMngr: "Lorin Hamflett",
    Address: {
      StreetAdrs: "90398 John Wall Point",
      City: "Austin",
      State: "TX",
      Zip: "78754",
      County: "vestibulum ante"
    },
    Phone: "512-461-5261",
    Email: "lhamfletta@dmoz.org",
    FSID: "SAGITTIS",
    ProjectedAmount: "$159678.72",
    Amount: "$102403.12",
    TrainingType: "Workforce",
    Credential: "GED"
  },
  {
    id: 12,
    PartnerName: "Dare-Koss",
    PartnerID: "UD8Layu",
    PartnerMngr: "Major Cason",
    Address: {
      StreetAdrs: "25781 Monument Parkway",
      City: "New York City",
      State: "NY",
      Zip: "10009",
      County: "enim"
    },
    Phone: "917-249-9809",
    Email: "mcasonb@dedecms.com",
    FSID: "SED",
    ProjectedAmount: "$43940.38",
    Amount: "$156699.15",
    TrainingType: "Workforce readiness",
    Credential: "Workforce Certification"
  },
  {
    id: 13,
    PartnerName: "Pouros Inc",
    PartnerID: "8WrbjICsSmB",
    PartnerMngr: "Yurik Burkert",
    Address: {
      StreetAdrs: "88 1st Plaza",
      City: "Newark",
      State: "DE",
      Zip: "19714",
      County: "cras pellentesque"
    },
    Phone: "302-948-8531",
    Email: "yburkertc@archive.org",
    FSID: "NULLA PEDE",
    ProjectedAmount: "$101643.14",
    Amount: "$199967.10",
    TrainingType: "One-on-One",
    Credential: "GED"
  },
  {
    id: 14,
    PartnerName: "O'Keefe and Sons",
    PartnerID: "NecYSg0",
    PartnerMngr: "Zsa zsa Janusik",
    Address: {
      StreetAdrs: "998 Beilfuss Pass",
      City: "Fresno",
      State: "CA",
      Zip: "93721",
      County: "integer"
    },
    Phone: "209-916-6668",
    Email: "zzsad@newsvine.com",
    FSID: "NEQUE",
    ProjectedAmount: "$54248.17",
    Amount: "$31992.17",
    TrainingType: "Au-pair",
    Credential: "Nice Diploma"
  },
  {
    id: 15,
    PartnerName: "Fay-Metz",
    PartnerID: "019CMxxhN",
    PartnerMngr: "Elaina McCuaig",
    Address: {
      StreetAdrs: "29 Stone Corner Parkway",
      City: "Albany",
      State: "NY",
      Zip: "12262",
      County: "sodales scelerisque"
    },
    Phone: "518-318-2234",
    Email: "emccuaige@fda.gov",
    FSID: "ULTRICES ERAT",
    ProjectedAmount: "$136144.41",
    Amount: "$142989.89",
    TrainingType: "Workshop sessions",
    Credential: "GED"
  }
];

const placeholderList = [
  "Partner Name",
  "Partner Manager",
  "Street Address",
  "City",
  "State",
  "ZIP",
  "County",
  "Phone",
  "Email"
];

const headerList = [
  "id",
  "Partner Name",
  "Partner ID",
  "Partner Manager",
  "Address",
  "County",
  "Phone",
  "Email",
  "FS ID",
  "Projected Amount",
  "Amount",
  "Training Type",
  "Credential"
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
  "Email",
  "FS ID",
  "Projected Amount",
  "Amount",
  "Training Type",
  "Credential"
];

const createNewRecord = () => {
  for (let i = 0; i < placeholderList.length; i++) {
    const newLine = "";
    const $newRecord = $("#new-partner");

    $newRecord.append(`${newLine}<input
    type="text"
    class="form-control"
    placeholder='${placeholderList[i]}'
    required
  />`);
  }

  $newRecord.append(
    `<button type="submit" id="submit-btn" class="btn btn-primary">Add New Partner</button>`
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
  createNewRecord();
  viewHeaders();
  viewData(partnersData);

  // //* Adding a new partner

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
