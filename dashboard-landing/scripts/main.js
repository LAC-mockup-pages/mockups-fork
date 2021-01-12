//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

export const tileSet = [
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
    background: "rgba(240,226,213,0), rgba(240,226,213,1)",
    details: ["75%"],
    formatDetails: "",
    target: "../dashboard-msg/index.html"
  },
  {
    id: "tile2",
    header: "Employment Q2",
    background: "rgba(172,143,194,0), rgba(172,143,194,1)",
    details: ["52%"],
    formatDetails: "",
    target: ""
  },
  {
    id: "tile3",
    header: "Employment Q4",
    background: "rgba(166,166,166,0), rgba(166,166,166,1)",
    details: ["23%"],
    formatDetails: "",
    target: ""
  },
  {
    id: "tile4",
    header: "EPE",
    background: "rgba(155,187,202,0), rgba(155,187,202,1)",
    details: ["Enrolled: 450", "Hours: 22,000"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile5",
    header: "Enrolled",
    background: "rgba(36,121,181,0), rgba(36,121,181,1)",
    details: ["502"],
    formatDetails: "",
    target: ""
  },
  {
    id: "tile6",
    header: "HSE",
    background: "rgba(247,224,149,0), rgba(247,224,149,1)",
    details: ["Referred: 37", "Passed: 28"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile7",
    header: "TABE Tests",
    background: "rgba(172,143,194,0), rgba(172,143,194,1)",
    details: ["Pre: 507", "Post: 205"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile8",
    header: "Best + Tests",
    background: "rgba(166,166,166,0), rgba(166,166,166,1)",
    details: ["Pre: 300", "Post: 180"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile9",
    header: "Hours",
    background: "rgba(240,226,213,0), rgba(240,226,213,1)",
    details: ["15,000"],
    formatDetails: "",
    target: ""
  }
];

export const createDetailLines = (detailList) => {
  return detailList.map((item) => `<div>${item}</div>`).join("");
};

export const createTile = (dataObj, classButton) => {
  const { id, header, background, details, formatDetails, target } = dataObj;
  const gradient = `style="background-image: linear-gradient(180deg, ${background})"`;
  const format = formatDetails ? formatDetails : "tile-details";
  const detailContent =
    details.length > 1 ? createDetailLines(details) : details[0];

  const tile = `
    <div class="${classButton}"><button class="single-tile" ${gradient} type="button" id=${id}>
      <a href=${target}  type="text/html">
        <div class="tile-header">${header}</div>
        <div class=${format}>${detailContent}</div>
      </a>
    </button></div>`;

  return tile;
};

const createBlock = (tileBloc) => {
  let block = "";
  for (const record of tileBloc) {
    block += createTile(record, "col-md-2");
  }
  return `
  <div class="container-fluid row">
    <div class="col-md-1"></div>
    ${block}
    <div class="col-md-1"></div>
  </div>`;
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  // const topBloc = createBlock(tileSet.slice(0, 5));
  // const bottomBloc = createBlock(tileSet.slice(5));

  const topBloc = createBlock(tileSet.slice(0, 2));
  const middleBloc = createBlock(tileSet.slice(2, 4));
  const bottomBloc = createBlock(tileSet.slice(4));
  $("#top-bloc").append(topBloc);
  $("#middle-bloc").append(middleBloc);
  $("#bottom-bloc").append(bottomBloc);
});
