// Actions and logic

const partnersData = [
  {
    id: 1,
    PartnerName: "Bode, Botsford and Lang",
    PartnerID: "EOaYKXrOQ",
    PartnerMngr: "Mommy Ferronet",
    Address: {
      StreetAdrs: "9911 Lyons Street",
      City: "Hartford",
      State: "CT",
      Zip: "06183",
      County: "vestibulum aliquet"
    },
    Phone: "860-665-6263",
    Email: "mferronet0@craigslist.org"
  },
  {
    id: 2,
    PartnerName: "Kertzmann, Maggio and Turner",
    PartnerID: "uCZtcn4ICF",
    PartnerMngr: "Aron Merrigan",
    Address: {
      StreetAdrs: "5782 Bultman Point",
      City: "Fort Wayne",
      State: "IN",
      Zip: "46896",
      County: "leo rhoncus"
    },
    Phone: "260-217-9398",
    Email: "amerrigan1@cnbc.com"
  },
  {
    id: 3,
    PartnerName: "Murphy, Gaylord and Shields",
    PartnerID: "CGj1CYmoy",
    PartnerMngr: "Humfrid Unwin",
    Address: {
      StreetAdrs: "264 Fair Oaks Plaza",
      City: "Scranton",
      State: "PA",
      Zip: "18505",
      County: "primis in"
    },
    Phone: "570-189-5962",
    Email: "hunwin2@drupal.org"
  },
  {
    id: 4,
    PartnerName: "Boehm, Stoltenberg and Pagac",
    PartnerID: "gGBqug",
    PartnerMngr: "Babbie Calderon",
    Address: {
      StreetAdrs: "5 Haas Plaza",
      City: "Fort Worth",
      State: "TX",
      Zip: "76110",
      County: "integer"
    },
    Phone: "682-831-9529",
    Email: "bcalderon3@tamu.edu"
  },
  {
    id: 5,
    PartnerName: "McKenzie-Mante",
    PartnerID: "ZQmI9GoED",
    PartnerMngr: "Dacey Greenard",
    Address: {
      StreetAdrs: "48 Muir Drive",
      City: "Humble",
      State: "TX",
      Zip: "77346",
      County: "duis"
    },
    Phone: "281-731-7041",
    Email: "dgreenard4@dion.ne.jp"
  },
  {
    id: 6,
    PartnerName: "O'Reilly-Considine",
    PartnerID: "6Yfx91Q56uxo",
    PartnerMngr: "Manon Paylie",
    Address: {
      StreetAdrs: "381 Atwood Pass",
      City: "Wichita",
      State: "KS",
      Zip: "67236",
      County: "condimentum"
    },
    Phone: "316-824-4869",
    Email: "mpaylie5@infoseek.co.jp"
  },
  {
    id: 7,
    PartnerName: "Mayer-Dooley",
    PartnerID: "Zhu0mlv6X7a",
    PartnerMngr: "Trixy Dunbobin",
    Address: {
      StreetAdrs: "61 Sunfield Center",
      City: "Merrifield",
      State: "VA",
      Zip: "22119",
      County: "ipsum primis"
    },
    Phone: "571-318-8380",
    Email: "tdunbobin6@nymag.com"
  },
  {
    id: 8,
    PartnerName: "Deckow, Jerde and Torphy",
    PartnerID: "ZoLybd",
    PartnerMngr: "Nora Lambarth",
    Address: {
      StreetAdrs: "05 Cordelia Drive",
      City: "Wilmington",
      State: "DE",
      Zip: "19897",
      County: "risus dapibus"
    },
    Phone: "302-738-8959",
    Email: "nlambarth7@wp.com"
  },
  {
    id: 9,
    PartnerName: "Leffler, Wiza and Bogan",
    PartnerID: "aOfn827En",
    PartnerMngr: "Hector Foulger",
    Address: {
      StreetAdrs: "3 Green Hill",
      City: "Buffalo",
      State: "NY",
      Zip: "14220",
      County: "praesent"
    },
    Phone: "716-824-7541",
    Email: "hfoulger8@meetup.com"
  },
  {
    id: 10,
    PartnerName: "Dach Group",
    PartnerID: "qjRsjd7B1Z",
    PartnerMngr: "Kary Cutts",
    Address: {
      StreetAdrs: "6 Chive Plaza",
      City: "Maple Plain",
      State: "MN",
      Zip: "55572",
      County: "arcu libero"
    },
    Phone: "763-948-3985",
    Email: "kcutts9@webmd.com"
  },
  {
    id: 11,
    PartnerName: "Doyle and Sons",
    PartnerID: "12p3kv07i7CE",
    PartnerMngr: "Timotheus Grisbrook",
    Address: {
      StreetAdrs: "9 Golden Leaf Junction",
      City: "Terre Haute",
      State: "IN",
      Zip: "47812",
      County: "platea dictumst"
    },
    Phone: "812-486-6198",
    Email: "tgrisbrooka@techcrunch.com"
  },
  {
    id: 12,
    PartnerName: "Ullrich, Lowe and Koepp",
    PartnerID: "jcOM66DQBz",
    PartnerMngr: "Marylou Swatradge",
    Address: {
      StreetAdrs: "536 Kinsman Terrace",
      City: "Nashville",
      State: "TN",
      Zip: "37205",
      County: "eget"
    },
    Phone: "615-190-2112",
    Email: "mswatradgeb@geocities.jp"
  },
  {
    id: 13,
    PartnerName: "O'Connell, Schulist and Will",
    PartnerID: "vAKPRzmh",
    PartnerMngr: "Gigi Bramwich",
    Address: {
      StreetAdrs: "648 Forest Run Court",
      City: "Aurora",
      State: "CO",
      Zip: "80015",
      County: "cursus urna"
    },
    Phone: "720-591-3998",
    Email: "gbramwichc@cdc.gov"
  },
  {
    id: 14,
    PartnerName: "Rau-Heller",
    PartnerID: "m1oRNZyjH97i",
    PartnerMngr: "Iorgo Faithfull",
    Address: {
      StreetAdrs: "1 Banding Place",
      City: "Chattanooga",
      State: "TN",
      Zip: "37450",
      County: "nullam varius"
    },
    Phone: "423-174-2562",
    Email: "ifaithfulld@hubpages.com"
  },
  {
    id: 15,
    PartnerName: "Padberg-Marvin",
    PartnerID: "ngYYOMfZ",
    PartnerMngr: "Kandace Seiler",
    Address: {
      StreetAdrs: "334 Melvin Terrace",
      City: "San Diego",
      State: "CA",
      Zip: "92115",
      County: "et ultrices"
    },
    Phone: "619-548-1017",
    Email: "kseilere@hp.com"
  },
  {
    id: 16,
    PartnerName: "Hammes-Rice",
    PartnerID: "9FXEn2DFQQah",
    PartnerMngr: "Karlik Greyes",
    Address: {
      StreetAdrs: "74028 West Circle",
      City: "Grand Rapids",
      State: "MI",
      Zip: "49544",
      County: "mauris"
    },
    Phone: "616-988-5562",
    Email: "kgreyesf@scribd.com"
  },
  {
    id: 17,
    PartnerName: "Rath, Adams and Kling",
    PartnerID: "QLqBKkL",
    PartnerMngr: "Ulrikaumeko Temperley",
    Address: {
      StreetAdrs: "89962 Village Plaza",
      City: "Cleveland",
      State: "OH",
      Zip: "44125",
      County: "morbi"
    },
    Phone: "216-510-5294",
    Email: "utemperleyg@pinterest.com"
  },
  {
    id: 18,
    PartnerName: "Bradtke and Sons",
    PartnerID: "CmSOQv",
    PartnerMngr: "Web Binton",
    Address: {
      StreetAdrs: "6019 Sachs Trail",
      City: "Vancouver",
      State: "WA",
      Zip: "98687",
      County: "congue"
    },
    Phone: "360-596-9544",
    Email: "wbintonh@devhub.com"
  },
  {
    id: 19,
    PartnerName: "Grimes and Sons",
    PartnerID: "lPdOZcvXeIx",
    PartnerMngr: "Shaughn Lusk",
    Address: {
      StreetAdrs: "19092 Crownhardt Way",
      City: "Boca Raton",
      State: "FL",
      Zip: "33487",
      County: "ante"
    },
    Phone: "561-329-6967",
    Email: "sluski@stumbleupon.com"
  },
  {
    id: 20,
    PartnerName: "Ebert-Schultz",
    PartnerID: "sAE6TH3z3gzt",
    PartnerMngr: "Ezekiel Scanterbury",
    Address: {
      StreetAdrs: "1 Beilfuss Place",
      City: "Reading",
      State: "PA",
      Zip: "19605",
      County: "donec"
    },
    Phone: "610-889-9584",
    Email: "escanterburyj@skyrock.com"
  },
  {
    id: 21,
    PartnerName: "Zboncak Group",
    PartnerID: "GeIdTVE0YFP",
    PartnerMngr: "Parnell Haskell",
    Address: {
      StreetAdrs: "3 Scofield Street",
      City: "Warren",
      State: "MI",
      Zip: "48092",
      County: "maecenas leo"
    },
    Phone: "810-451-7407",
    Email: "phaskellk@businessinsider.com"
  },
  {
    id: 22,
    PartnerName: "Johnston Group",
    PartnerID: "hBfmDEiCF",
    PartnerMngr: "Stefano Gilliver",
    Address: {
      StreetAdrs: "867 Esker Park",
      City: "Wichita",
      State: "KS",
      Zip: "67236",
      County: "magna"
    },
    Phone: "316-761-7333",
    Email: "sgilliverl@pcworld.com"
  },
  {
    id: 23,
    PartnerName: "Champlin-O'Reilly",
    PartnerID: "hd8XsedV",
    PartnerMngr: "Eloise Rathmell",
    Address: {
      StreetAdrs: "13439 Spaight Point",
      City: "El Paso",
      State: "TX",
      Zip: "79916",
      County: "ante"
    },
    Phone: "915-994-2111",
    Email: "erathmellm@newyorker.com"
  },
  {
    id: 24,
    PartnerName: "Crist-Jast",
    PartnerID: "j07TnR",
    PartnerMngr: "Parrnell Keeling",
    Address: {
      StreetAdrs: "90488 Declaration Hill",
      City: "Evansville",
      State: "IN",
      Zip: "47732",
      County: "eget vulputate"
    },
    Phone: "812-119-0311",
    Email: "pkeelingn@geocities.com"
  },
  {
    id: 25,
    PartnerName: "Schumm and Sons",
    PartnerID: "1SyRgD",
    PartnerMngr: "Carly Ife",
    Address: {
      StreetAdrs: "80518 Vahlen Plaza",
      City: "Pittsburgh",
      State: "PA",
      Zip: "15274",
      County: "at vulputate"
    },
    Phone: "412-913-5420",
    Email: "cifeo@va.gov"
  },
  {
    id: 26,
    PartnerName: "Braun, Bailey and Krajcik",
    PartnerID: "HvlFPCib",
    PartnerMngr: "Clarissa Frango",
    Address: {
      StreetAdrs: "234 Packers Crossing",
      City: "Lincoln",
      State: "NE",
      Zip: "68510",
      County: "ipsum primis"
    },
    Phone: "402-201-8769",
    Email: "cfrangop@godaddy.com"
  },
  {
    id: 27,
    PartnerName: "Friesen-Gorczany",
    PartnerID: "AdH6PrlyUQEY",
    PartnerMngr: "Pearline Pincott",
    Address: {
      StreetAdrs: "6 Norway Maple Pass",
      City: "Indianapolis",
      State: "IN",
      Zip: "46202",
      County: "augue"
    },
    Phone: "765-612-5372",
    Email: "ppincottq@abc.net.au"
  },
  {
    id: 28,
    PartnerName: "Littel-Dicki",
    PartnerID: "e4fcFL",
    PartnerMngr: "Addison Redmille",
    Address: {
      StreetAdrs: "9367 Meadow Valley Point",
      City: "Topeka",
      State: "KS",
      Zip: "66699",
      County: "vestibulum"
    },
    Phone: "785-775-4136",
    Email: "aredmiller@psu.edu"
  },
  {
    id: 29,
    PartnerName: "Welch-Runolfsson",
    PartnerID: "wshX8h",
    PartnerMngr: "Becca Acutt",
    Address: {
      StreetAdrs: "83 Vera Park",
      City: "San Francisco",
      State: "CA",
      Zip: "94132",
      County: "at velit"
    },
    Phone: "415-765-6267",
    Email: "bacutts@unc.edu"
  },
  {
    id: 30,
    PartnerName: "Gleichner and Sons",
    PartnerID: "QLh6igr",
    PartnerMngr: "Britt Gamblin",
    Address: {
      StreetAdrs: "4071 Fulton Street",
      City: "Charleston",
      State: "WV",
      Zip: "25305",
      County: "ligula sit"
    },
    Phone: "304-500-8703",
    Email: "bgamblint@army.mil"
  },
  {
    id: 31,
    PartnerName: "Price, Reinger and Erdman",
    PartnerID: "C6CejNCY",
    PartnerMngr: "Chase Pirozzi",
    Address: {
      StreetAdrs: "2 Harper Alley",
      City: "Atlanta",
      State: "GA",
      Zip: "30328",
      County: "cursus"
    },
    Phone: "770-416-0470",
    Email: "cpirozziu@cafepress.com"
  },
  {
    id: 32,
    PartnerName: "Effertz, Murphy and Turner",
    PartnerID: "ojJAlZiv09d",
    PartnerMngr: "Ewan Raye",
    Address: {
      StreetAdrs: "31885 Ludington Street",
      City: "Portland",
      State: "OR",
      Zip: "97232",
      County: "sit"
    },
    Phone: "971-501-9953",
    Email: "erayev@dailymail.co.uk"
  },
  {
    id: 33,
    PartnerName: "Auer, Prohaska and Dickens",
    PartnerID: "QynDeIK",
    PartnerMngr: "Corrianne Letham",
    Address: {
      StreetAdrs: "872 Merchant Parkway",
      City: "Atlanta",
      State: "GA",
      Zip: "31165",
      County: "pellentesque viverra"
    },
    Phone: "404-709-4231",
    Email: "clethamw@cornell.edu"
  },
  {
    id: 34,
    PartnerName: "Schultz Group",
    PartnerID: "XzqmQv",
    PartnerMngr: "Cletis Schroter",
    Address: {
      StreetAdrs: "497 Cottonwood Pass",
      City: "Glendale",
      State: "AZ",
      Zip: "85311",
      County: "consectetuer eget"
    },
    Phone: "602-252-3076",
    Email: "cschroterx@dell.com"
  },
  {
    id: 35,
    PartnerName: "Bartoletti Inc",
    PartnerID: "luWlN0",
    PartnerMngr: "Vikky Crone",
    Address: {
      StreetAdrs: "508 Twin Pines Plaza",
      City: "Los Angeles",
      State: "CA",
      Zip: "90045",
      County: "diam vitae"
    },
    Phone: "323-226-1125",
    Email: "vcroney@blog.com"
  },
  {
    id: 36,
    PartnerName: "Mills-Klein",
    PartnerID: "HqaiXtQn8N",
    PartnerMngr: "Brendin Mitham",
    Address: {
      StreetAdrs: "013 Kinsman Park",
      City: "Houston",
      State: "TX",
      Zip: "77045",
      County: "tincidunt"
    },
    Phone: "713-610-6432",
    Email: "bmithamz@fc2.com"
  },
  {
    id: 37,
    PartnerName: "Bode Inc",
    PartnerID: "KviylreFyO",
    PartnerMngr: "Terrye Tolwood",
    Address: {
      StreetAdrs: "7975 Dottie Avenue",
      City: "Peoria",
      State: "IL",
      Zip: "61629",
      County: "volutpat"
    },
    Phone: "309-930-4505",
    Email: "ttolwood10@fda.gov"
  },
  {
    id: 38,
    PartnerName: "Hammes, Ullrich and Gaylord",
    PartnerID: "7crG8e27H",
    PartnerMngr: "Dulcy Posthill",
    Address: {
      StreetAdrs: "4 Hoepker Plaza",
      City: "Irvine",
      State: "CA",
      Zip: "92612",
      County: "pede venenatis"
    },
    Phone: "714-986-5040",
    Email: "dposthill11@hhs.gov"
  },
  {
    id: 39,
    PartnerName: "Rohan-Bechtelar",
    PartnerID: "eC6IuAq63",
    PartnerMngr: "Maury Dufaire",
    Address: {
      StreetAdrs: "6404 Park Meadow Street",
      City: "Young America",
      State: "MN",
      Zip: "55551",
      County: "mattis"
    },
    Phone: "952-712-4485",
    Email: "mdufaire12@cloudflare.com"
  },
  {
    id: 40,
    PartnerName: "Bode, Mertz and Beatty",
    PartnerID: "9a4zM65Sk",
    PartnerMngr: "Sidnee Mockes",
    Address: {
      StreetAdrs: "9442 Butterfield Place",
      City: "Midland",
      State: "TX",
      Zip: "79705",
      County: "enim"
    },
    Phone: "432-438-3692",
    Email: "smockes13@mac.com"
  }
];

const placeholderList = [
  "First Name",
  "Last Name",
  "Start Date",
  "Length of Stay (yrs)",
  "Position",
  "Subject",
  "Paid / Volunteer",
  "Time Status",
  "Experience"
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
    const optionReq =
      placeholderList[i] !== "Length of Stay (yrs)" ? "required" : "";
    $("#new-personnel").append(`<input
    type="text"
    class="form-control"
    placeholder='${placeholderList[i]}'
    ${optionReq}
  />`);
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
  // $("#sub-nav li").click(function() {
  //   $("#sub-nav li").removeClass("blue-light-bg blue-text");
  //   $(this).toggleClass("blue-light-bg blue-text");
  // });

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
