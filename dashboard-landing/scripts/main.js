//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

const tileSet = [
  {
    id: "tile0",
    header: "MSG",
    background: "rgba(74,117,196,0), rgba(74,117,196,1)",
    details: ["64%"],
    formatDetails: "",
    target: "../dashboard-msg/index.html"
  },
  {
    id: "tile1",
    header: "Post Test",
    background: "rgba(247,197,162,0), rgba(247,197,162,1)",
    details: ["75%"],
    formatDetails: "",
    target: "../dashboard-msg/index.html"
  },
  {
    id: "tile2",
    header: "Employment 2nd Quarter",
    background: "rgba(187,215,167,0), rgba(187,215,167,1)",
    details: ["52%"],
    formatDetails: "",
    target: ""
  },
  {
    id: "tile3",
    header: "Employment 4th Quarter",
    background: "rgba(169,169,169,0), rgba(169,169,169,1)",
    details: ["23%"],
    formatDetails: "",
    target: ""
  },
  {
    id: "tile4",
    header: "EPE",
    background: "rgba(175,189,231,0), rgba(175,189,231,1)",
    details: ["Enrolled: 450", "Hours: 22,000"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile5",
    header: "Enrolled",
    background: "rgba(74,117,196,0), rgba(74,117,196,1)",
    details: ["502"],
    formatDetails: "",
    target: ""
  },
  {
    id: "tile6",
    header: "HSE",
    background: "rgba(255,227,143,0), rgba(255,227,143,1)",
    details: ["Referred: 37", "Passed: 28"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile7",
    header: "TABE Tests",
    background: "rgba(187,215,167,0), rgba(187,215,167,1)",
    details: ["Pre: 507", "Post: 205"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile8",
    header: "Best + Tests",
    background: "rgba(169,169,169,0), rgba(169,169,169,1)",
    details: ["Pre: 300", "Post: 180"],
    formatDetails: "tile-details-small",
    target: ""
  },
  {
    id: "tile9",
    header: "Hours",
    background: "rgba(247,197,162,0), rgba(247,197,162,1)",
    details: ["15,000"],
    formatDetails: "",
    target: ""
  }
];

const createDetailLines = (detailList) => {
  return detailList.map((item) => `<div>${item}</div>`).join("");
};

const createTile = (dataObj) => {
  const { id, header, background, details, formatDetails, target } = dataObj;
  const gradient = `style="background-image: linear-gradient(180deg, ${background})"`;
  const format = formatDetails ? formatDetails : "tile-details";
  const detailContent =
    details.length > 1 ? createDetailLines(details) : details[0];

  const tile = `
    <div class="col-md-2"><button class="single-tile" ${gradient} role="button">
      <a href=${target} id=${id} type="text/html">
        <div class="tile-header">${header}</div>
        <div class=${format}>${detailContent}</div>
      </a>
    </button></div>`;

  return tile;
};

const createBlock = (tileBloc) => {
  let block = "";
  for (const record of tileBloc) {
    block += createTile(record);
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
  const topBloc = createBlock(tileSet.slice(0, 5));
  const bottomBloc = createBlock(tileSet.slice(5));
  $("#top-bloc").append(topBloc);
  $("#bottom-bloc").append(bottomBloc);
});
