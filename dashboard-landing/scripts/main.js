//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

const tileSet = [
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
      ["Hours:", "22890"]
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

//* Creates bloc of large tiles, 2 tiles per bloc.
const createLargeTileBloc = (tileList) => {
  let block = "";
  for (const tile of tileList) {
    block += createTile(tile, "col-md-4", "large-tile");
  }
  return `
  <div class="container-fluid row">
    <div class="col-md-2"></div>
    ${block}
    <div class="col-md-2"></div>
  </div>`;
};

//* Creates bottom bloc of small tiles with 6 tiles.
const createSmallTileBloc = (tileList) => {
  let block = "";
  for (const tile of tileList) {
    block += createTile(tile, "col-md-2", "small-tile");
  }
  return block;
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  const topBloc = createLargeTileBloc(tileSet.slice(0, 2));
  const middleBloc = createLargeTileBloc(tileSet.slice(2, 4));
  const bottomBloc = createSmallTileBloc(tileSet.slice(4));
  $("#top-bloc").append(topBloc);
  $("#middle-bloc").append(middleBloc);
  $("#bottom-bloc").append(bottomBloc);
});
