//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

const tileSet = [
  {
    id: "tile6",
    header: "HSE",
    background: "rgba(211,228,240)",
    details: [
      ["Referred:", "37"],
      ["Passed:", "28"]
    ],
    formatDetails: "tile-details-small",
    target: "../assets/coming-soon.html"
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
    id: "tile7",
    header: "TABE Tests",
    background: "rgba(240,226,213,0), rgba(240,226,213,1)",
    details: [
      ["Pre:", "507"],
      ["Post:", "205"]
    ],
    formatDetails: "tile-details-small",
    target: "../assets/coming-soon.html"
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
  { Level: "Program Name", Referred: "250", Passed: "105" },
  { Level: "Region Name", Referred: "2700", Passed: "1805" },
  { Level: "State", Referred: "15000", Passed: "9925" }
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
  const gradient =
    classTile === "large-tile" || classTile === "medium-tile"
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
      case "tile0":
        tileClass = "large-tile";
        break;
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
    for (const key of Object.keys(obj)) {
      const value = key === "MSG" ? percentFormat(obj[key]) : obj[key];
      row += `<td class="cell-data">${value}</td>`;
    }
    body += `<tr>${row}</tr>`;
  }
  return `<tbody>${body}</tbody>`;
};

const createTable = (dataList) => {
  const tableHeader = createTableHeader(Object.keys(dataList[0]));
  const tableBody = createTableBody(dataList);
  return `<table class="table">${tableHeader}${tableBody}</table>`;
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  const leftNavBar = createLeftNavBar();
  const table1 = createTable(dataSet1);

  $("#side-nav").append(leftNavBar);
  $(".table1").append(table1);
});
