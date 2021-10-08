//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

const tileSet = [
  {
    id: "tile7",
    header: "TABE Tests",
    background: "rgba(211,228,240)",
    details: [
      ["Pre:", "507"],
      ["Post:", "205"]
    ],
    formatDetails: "tile-details-small",
    target: "../dashboard-tabe/index.html"
  },

  {
    id: "tile0",
    header: "MSG",
    background: "rgba(36,121,181,0), rgba(36,121,181,1)",
    details: ["64%"],
    formatDetails: "",
    target: "../dashboard-msg/index.html"
  },
  {
    id: "tile1",
    header: "Post Test",
    background: "rgba(247,224,149,0), rgba(247,224,149,1)",
    details: ["75%"],
    formatDetails: "",
    target: "../dashboard-post/index.html"
  },
  {
    id: "tile2",
    header: "Employment Q2",
    background: "rgba(172,143,194,0), rgba(172,143,194,1)",
    details: ["52%"],
    formatDetails: "",
    target: "../dashboard-eq2/index.html"
  },
  {
    id: "tile3",
    header: "Employment Q4",
    background: "rgba(166,166,166,0), rgba(166,166,166,1)",
    details: ["23%"],
    formatDetails: "",
    target: "../dashboard-eq4/index.html"
  },
  {
    id: "tile4",
    header: "EPE",
    background: "rgb(211,228,240)",
    details: [
      ["Enrolled:", "450"],
      ["Hours:", "22,000"]
    ],
    formatDetails: "tile-details-small",
    target: "../assets/coming-soon.html"
  },
  {
    id: "tile5",
    header: "Enrolled",
    background: "rgba(211,228,240,0), rgba(211,228,240,1)",
    details: ["502"],
    formatDetails: "tile-details-small",
    target: "../assets/coming-soon.html"
  },
  {
    id: "tile6",
    header: "HSE",
    background: "rgba(240,226,213,0), rgba(240,226,213,1)",
    details: [
      ["Referred:", "37"],
      ["Passed:", "28"]
    ],
    formatDetails: "tile-details-small",
    target: "../dashboard-hse/index.html"
  },
  {
    id: "tile8",
    header: "Best + Tests",
    background: "rgba(240,226,213,0), rgba(240,226,213,1)",
    details: [
      ["Pre:", "300"],
      ["Post:", "180"]
    ],
    formatDetails: "tile-details-small",
    target: "../assets/coming-soon.html"
  },
  {
    id: "tile9",
    header: "Hours",
    background: "rgba(240,226,213,0), rgba(240,226,213,1)",
    details: ["15,000"],
    formatDetails: "tile-details-small",
    target: "../assets/coming-soon.html"
  }
];

const dataSet1 = [
  {
    Site: "Enterprise site",
    Enrollment: "560",
    PostTest: "0.64",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
  },
  {
    Site: "Far site",
    Enrollment: "560",
    PostTest: "0.07",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
  },
  {
    Site: "Mulberry site",
    Enrollment: "560",
    PostTest: "0.64",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
  },
  {
    Site: "Alpha site",
    Enrollment: "560",
    PostTest: "0.64",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
  },
  {
    Site: "Old English site",
    Enrollment: "560",
    PostTest: "0.64",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
  },
  {
    Site: "Decrepit site",
    Enrollment: "560",
    PostTest: "0.64",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
  },
  {
    Site: "Voyager site",
    Enrollment: "299",
    PostTest: "0.57",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
  }
];

const dataSet2 = [
  {
    Teacher: "James T. Kirk",
    Enrollment: "18",
    PostTest: "0.22",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=5&tfc=BaduraDonaldRCSD9&cf=2NYS&nfy=1"
  },
  {
    Teacher: "Katherine Janway",
    Enrollment: "22",
    PostTest: "0.72",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=5&tfc=BaduraDonaldRCSD9&cf=2NYS&nfy=1"
  },
  {
    Teacher: "Phillippa Gorgious",
    Enrollment: "31",
    PostTest: "0.66",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=5&tfc=BaduraDonaldRCSD9&cf=2NYS&nfy=1"
  },
  {
    Teacher: "New Kid",
    Enrollment: "31",
    PostTest: "0.66",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=5&tfc=BaduraDonaldRCSD9&cf=2NYS&nfy=1"
  },
  {
    Teacher: "Peter Cetera",
    Enrollment: "31",
    PostTest: "0.66",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=5&tfc=BaduraDonaldRCSD9&cf=2NYS&nfy=1"
  },
  {
    Teacher: "Alan Greenspan",
    Enrollment: "31",
    PostTest: "0.66",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=5&tfc=BaduraDonaldRCSD9&cf=2NYS&nfy=1"
  },
  {
    Teacher: "Ben Sisko",
    Enrollment: "22",
    PostTest: "0.35",
    ReportLink:
      "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=5&tfc=BaduraDonaldRCSD9&cf=2NYS&nfy=1"
  }
];

const dataSet3 = [
  {
    AgencyID: "SESD",
    SiteID: "Boxing Club",
    SiteName: "Literacy Zone West Athletic and Education Center",
    TRL: 0,
    TRE: 4,
    TRM: 12,
    TRD: 14,
    TRA: 0,
    TML: 0,
    TME: 4,
    TMM: 22,
    TMD: 4,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "ELCADVAUTO",
    SiteName: "Advanced Auto",
    TRL: 0,
    TRE: 0,
    TRM: 0,
    TRD: 0,
    TRA: 0,
    TML: 0,
    TME: 0,
    TMM: 0,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "ELCARCOM",
    SiteName: "ARCOM",
    TRL: 0,
    TRE: 0,
    TRM: 0,
    TRD: 0,
    TRA: 0,
    TML: 0,
    TME: 0,
    TMM: 0,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZ",
    SiteName: "Literacy Zone FWC Grant Middle School",
    TRL: 0,
    TRE: 14,
    TRM: 16,
    TRD: 12,
    TRA: 0,
    TML: 0,
    TME: 30,
    TMM: 16,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZ6",
    SiteName: "Literacy Zone Dr. King Magnet School",
    TRL: 0,
    TRE: 0,
    TRM: 6,
    TRD: 6,
    TRA: 0,
    TML: 0,
    TME: 2,
    TMM: 6,
    TMD: 2,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZEWeeks",
    SiteName: "Literacy Zone FWC East Dr. Weeks",
    TRL: 2,
    TRE: 4,
    TRM: 10,
    TRD: 20,
    TRA: 0,
    TML: 2,
    TME: 4,
    TMM: 30,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZRound2",
    SiteName: "LIteracy Zone FWC Dr. King",
    TRL: 2,
    TRE: 13,
    TRM: 25,
    TRD: 22,
    TRA: 0,
    TML: 2,
    TME: 16,
    TMM: 34,
    TMD: 6,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZWEP",
    SiteName: "Literacy Zone FWC Fowler",
    TRL: 0,
    TRE: 0,
    TRM: 6,
    TRD: 2,
    TRA: 0,
    TML: 0,
    TME: 0,
    TMM: 6,
    TMD: 2,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDJustice",
    SiteName: "Justice Center",
    TRL: 0,
    TRE: 0,
    TRM: 5,
    TRD: 2,
    TRA: 0,
    TML: 0,
    TME: 0,
    TMM: 4,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDProbation",
    SiteName: "Onondaga County Probation Department",
    TRL: 0,
    TRE: 2,
    TRM: 2,
    TRD: 0,
    TRA: 0,
    TML: 0,
    TME: 0,
    TMM: 4,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDRefugee",
    SiteName: "Refugee Center",
    TRL: 0,
    TRE: 4,
    TRM: 0,
    TRD: 0,
    TRA: 0,
    TML: 0,
    TME: 4,
    TMM: 0,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDRescue",
    SiteName: "Rescue Mission Motivational Learning Center",
    TRL: 0,
    TRE: 2,
    TRM: 2,
    TRD: 0,
    TRA: 0,
    TML: 0,
    TME: 3,
    TMM: 1,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDSidney",
    SiteName: "Sidney Johnson Vocational Center",
    TRL: 0,
    TRE: 27,
    TRM: 61,
    TRD: 121,
    TRA: 0,
    TML: 0,
    TME: 30,
    TMM: 138,
    TMD: 62,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDWestside",
    SiteName: "Westside Learning Center",
    TRL: 0,
    TRE: 0,
    TRM: 0,
    TRD: 0,
    TRA: 0,
    TML: 0,
    TME: 0,
    TMM: 0,
    TMD: 0,
    TMA: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "WPLGiov",
    SiteName: "Giovanni",
    TRL: 0,
    TRE: 0,
    TRM: 0,
    TRD: 0,
    TRA: 0,
    TML: 0,
    TME: 0,
    TMM: 0,
    TMD: 0,
    TMA: 0
  }
];

const createDetailLines = (detailList) => {
  let rows = "";
  for (const list of detailList) {
    const [key, value] = list;
    const detailValue = key === "Hours:" ? Math.round(Number(value)) : value;
    rows += `<tr><td>${key}</td><td>${detailValue}</td></tr>`;
  }

  return `
  <table class="table table-condensed detail-table">
    <tbody>
      ${rows}
    </tbody>
  </table>`;
};
const createTile = (dataObj, classButton, classTile) => {
  const { id, header, background, details, formatDetails, target } = dataObj;
  console.log("classButton :>> ", id, classButton);
  console.log("classTile :>> ", classTile);
  // Reserves gradient for the main tiles, tile0 to tile3
  const gradient = !["tile0", "tile1", "tile2", "tile3"].includes(id)
    ? ""
    : classTile === "large-tile" || classTile === "medium-tile"
    ? `style="background-image: linear-gradient(180deg, ${background})"`
    : "";
  const format = formatDetails ? formatDetails : "tile-details";
  const detailContent =
    details.length > 1 ? createDetailLines(details) : details[0];

  const tile = `
    <div class="${classButton}">
      <button class=${classTile} ${gradient} type="button" id=${id}>
        <a href=${target}  type="text/html">
          <div class="tile-header">${header}</div>
          <div class=${format}>${detailContent}</div>
        </a>
      </button>
    </div>`;

  return tile;
};

const createLeftNavBar = () => {
  let block = "";
  for (const record of tileSet) {
    let buttonClass = "side-navbar-button";
    let tileClass = "";

    switch (record.id) {
      case "tile7":
        tileClass = "large-tile";
        break;
      case "tile0":
      case "tile1":
      case "tile2":
      case "tile3":
        tileClass = "medium-tile";
        break;
      default:
        tileClass = "small-tile";
        break;
    }

    block += createTile(record, buttonClass, tileClass);
  }
  return block;
};

//TODO Add logic to reorder the tiles depending on the selected
//TODO dashboard. Tiles 0 to 3 are always on top.
//TODO If the top tile is not a large tile in the landing page
//TODO tiles 0 to 3 come right after.
const shuffleTileSet = (list, tileId) => {
  const majorTiles = ["tile0", "tile1", "tile2", "tile3"];
  let shuffledList = [];

  if (majorTiles.includes(tileId)) {
  }
  return shuffledList;
};

// Input is a decimal number as a string, fraction of 1.
// Output a percentage number as a string. "0.70"==>"70%"
const percentFormat = (str) => {
  return `${Math.round(Number(str) * 100)}%`;
};

const createTableHeader = (list) => {
  const headers = list.map((str) => `<th>${str}</th>`).join("");
  return `<thead><tr>${headers}</tr></thead>`;
};

// list = dataSet#
const createTableBody = (list) => {
  let body = "";
  let orderedList = [];
  if (list === dataSet1) {
    orderedList = list.sort((item1, item2) =>
      item1.Site < item2.Site ? -1 : item1.Site > item2.Site ? 1 : 0
    );
  } else {
    orderedList = list.sort((item1, item2) =>
      item1.Teacher < item2.Teacher ? -1 : item1.Teacher > item2.Teacher ? 1 : 0
    );
  }

  for (const obj of orderedList) {
    let row = "";
    const link = ` href=${obj.ReportLink}`;
    for (const key of Object.keys(obj)) {
      if (key === "ReportLink") continue;
      const value = key === "PostTest" ? percentFormat(obj[key]) : obj[key];
      row += `<td class="cell-data">${value}</td>`;
    }
    body += `<tr${link}>${row}</tr$>`;
  }
  return `<tbody>${body}</tbody>`;
};

const createTable = (dataList) => {
  const tableHeader = createTableHeader(
    Object.keys(dataList[0]).filter((str) => str !== "ReportLink")
  ).replace("PostTest", "Post Test");
  const tableBody = createTableBody(dataList);
  return `<table class="table">${tableHeader}${tableBody}</table>`;
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Building and displaying center part
  const leftNavBar = createLeftNavBar();
  // const table1 = createTable(dataSet1);
  // const table2 = createTable(dataSet2);

  $("#side-nav").append(leftNavBar);
  // $(".table1").append(table1);
  // $(".table2").append(table2);

  //* Displaying report in a new browser tab when a table row is clicked
  $(document).on("click", ".table tbody tr", function () {
    const selectedReport = $(this).attr("href");
    console.log("selectedReport :>> ", selectedReport);
    window.open(selectedReport);
  });
});
