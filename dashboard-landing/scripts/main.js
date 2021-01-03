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
    format: "",
    target: "../dashboard-msg/index.html"
  },
  {
    id: "tile1",
    header: "Post Test",
    background: "rgba(247,197,162,0), rgba(247,197,162,1)",
    details: ["75%"],
    format: "",
    target: "../dashboard-msg/index.html"
  },
  {
    id: "tile2",
    header: "Employment 2nd Quarter",
    background: "rgba(187,215,167,0), rgba(187,215,167,1)",
    details: ["52%"],
    format: "",
    target: ""
  },
  {
    id: "tile3",
    header: "Employment 4th Quarter",
    background: "rgba(169,169,169,0), rgba(169,169,169,1)",
    details: ["23%"],
    format: "",
    target: ""
  },
  {
    id: "tile4",
    header: "EPE",
    background: "rgba(175,189,231,0), rgba(175,189,231,1)",
    details: ["Enrolled: 450", "Hours: 22,000"],
    format: "",
    target: ""
  },
  {
    id: "tile5",
    header: "Enrolled",
    background: "rgba(74,117,196,0), rgba(74,117,196,1)",
    details: ["502"],
    format: "",
    target: ""
  },
  {
    id: "tile6",
    header: "HSE",
    background: "rgba(255,227,143,0), rgba(255,227,143,1)",
    details: ["Referred: 37", "Passed: 28"],
    format: "",
    target: ""
  },
  {
    id: "tile7",
    header: "TABE Tests",
    background: "rgba(187,215,167,0), rgba(187,215,167,1)",
    details: ["Pre: 507", "Post: 205"],
    format: "",
    target: ""
  },
  {
    id: "tile8",
    header: "Best + Tests",
    background: "rgba(169,169,169,0), rgba(169,169,169,1)",
    details: ["Pre: 300", "Post: 180"],
    format: "",
    target: ""
  },
  {
    id: "tile9",
    header: "Hours",
    background: "rgba(247,197,162,0), rgba(247,197,162,1)",
    details: ["15,000"],
    format: "",
    target: ""
  }
];

const createTile = (dataObj) => {
  const { id, header, background, details, format, target } = dataObj;

  const gradient = `style="background-image: linear-gradient(45deg, ${background})"`;

  const tile = `
    <div class="col-md-2"><button class="single-tile" ${gradient} role="button">
      <a href=${target} id=${id} type="text/html">
        ${header}
        ${details}
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
