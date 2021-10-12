//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

const tileSet = [
  {
    id: "tile8",
    header: "Best + Tests",
    background: "rgba(211,228,240)",
    details: [
      ["Pre:", "300"],
      ["Post:", "180"]
    ],
    formatDetails: "tile-details-small",
    target: "../dashboard-best-plus/index.html"
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
    id: "tile7",
    header: "TABE Tests",
    background: "rgba(240,226,213,0), rgba(240,226,213,1)",
    details: [
      ["Pre:", "507"],
      ["Post:", "205"]
    ],
    formatDetails: "tile-details-small",
    target: "../dashboard-tabe/index.html"
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

// const dataSet1 = [
//   {
//     Site: "Enterprise site",
//     Enrollment: "560",
//     PostTest: "0.64",
//     ReportLink:
//       "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
//   },
//   {
//     Site: "Far site",
//     Enrollment: "560",
//     PostTest: "0.07",
//     ReportLink:
//       "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
//   },
//   {
//     Site: "Mulberry site",
//     Enrollment: "560",
//     PostTest: "0.64",
//     ReportLink:
//       "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
//   },
//   {
//     Site: "Alpha site",
//     Enrollment: "560",
//     PostTest: "0.64",
//     ReportLink:
//       "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
//   },
//   {
//     Site: "Old English site",
//     Enrollment: "560",
//     PostTest: "0.64",
//     ReportLink:
//       "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
//   },
//   {
//     Site: "Decrepit site",
//     Enrollment: "560",
//     PostTest: "0.64",
//     ReportLink:
//       "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
//   },
//   {
//     Site: "Voyager site",
//     Enrollment: "299",
//     PostTest: "0.57",
//     ReportLink:
//       "../reports/POP_Reports/POPProgramEval.aspx?st=07/01/2020&en=06/30/2021&ag=RCSD&nfc=6&tfc=MP&cf=2NYS&nfy=1"
//   }
// ];

const dataSet = [
  {
    AgencyID: "SESD",
    SiteID: "Boxing Club",
    SiteName: "Literacy Zone West Athletic and Education Center",
    Level1: 0,
    Level2: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0,
    Level3: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "ELCADVAUTO",
    SiteName: "Advanced Auto",
    Level1: 2,
    Level2: 2,
    Level3: 2,
    Level4: 0,
    Level5: 0,
    Level6: 2
  },
  {
    AgencyID: "SESD",
    SiteID: "ELCARCOM",
    SiteName: "ARCOM",
    Level1: 2,
    Level2: 4,
    Level3: 2,
    Level4: 0,
    Level5: 2,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZ",
    SiteName: "Literacy Zone FWC Grant Middle School",
    Level1: 2,
    Level2: 0,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZ6",
    SiteName: "Literacy Zone Dr. King Magnet School",
    Level1: 0,
    Level2: 0,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZEWeeks",
    SiteName: "Literacy Zone FWC East Dr. Weeks",
    Level1: 0,
    Level2: 0,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZRound2",
    SiteName: "LIteracy Zone FWC Dr. King",
    Level1: 12,
    Level2: 32,
    Level3: 10,
    Level4: 12,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "LZWEP",
    SiteName: "Literacy Zone FWC Fowler",
    Level1: 0,
    Level2: 0,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDJustice",
    SiteName: "Justice Center",
    Level1: 0,
    Level2: 0,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDProbation",
    SiteName: "Onondaga County Probation Department",
    Level1: 0,
    Level2: 0,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDRefugee",
    SiteName: "Refugee Center",
    Level1: 225,
    Level2: 156,
    Level3: 74,
    Level4: 74,
    Level5: 41,
    Level6: 9
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDRescue",
    SiteName: "Rescue Mission Motivational Learning Center",
    Level1: 0,
    Level2: 0,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDSidney",
    SiteName: "Sidney Johnson Vocational Center",
    Level1: 0,
    Level2: 0,
    Level3: 0,
    Level4: 2,
    Level5: 0,
    Level6: 0
  },
  {
    AgencyID: "SESD",
    SiteID: "SCSDWestside",
    SiteName: "Westside Learning Center",
    Level1: 32,
    Level2: 79,
    Level3: 31,
    Level4: 25,
    Level5: 41,
    Level6: 13
  },
  {
    AgencyID: "SESD",
    SiteID: "WPLGiov",
    SiteName: "Giovanni",
    Level1: 0,
    Level2: 4,
    Level3: 0,
    Level4: 0,
    Level5: 0,
    Level6: 0
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
      case "tile8":
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

  const orderedList = list.sort((item1, item2) =>
    item1.SiteName < item2.SiteName
      ? -1
      : item1.SiteName > item2.SiteName
      ? 1
      : 0
  );
  for (const obj of orderedList) {
    const row = [];
    const { SiteName } = obj;
    row.push(`<td class="cell-data">${SiteName}</td>`);
    for (const key in obj) {
      if (key.startsWith("Level"))
        row.push(`<td class="cell-data number-alignment">${obj[key]}</td>`);
    }
    body += `<tr>${row.join("")}</tr>`;
  }
  return `<tbody>${body}</tbody>`;
};

const createTable = (dataList) => {
  const tableHeader = createTableHeader([
    "Site",
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5",
    "Level 6"
  ]);
  const tableBody = createTableBody(dataList);
  return `<table class="table">${tableHeader}${tableBody}</table>`;
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Building and displaying center part
  const leftNavBar = createLeftNavBar();
  const table1 = createTable(dataSet);
  $("#side-nav").append(leftNavBar);
  $(".table1").append(table1);
});
