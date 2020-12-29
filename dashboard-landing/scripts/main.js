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
    target: ""
  },
  {
    id: "tile1",
    header: "Post Test",
    background: "rgba(247,197,162,0), rgba(247,197,162,1)",
    details: ["75%"],
    format: "",
    target: ""
  }
  // {
  //   id: "tile2",
  //   header: "Employment 2nd Quarter",
  //   background: "rgb(187,215,167)",
  //   details: ["52%"],
  //   format: "",
  //   target: ""
  // },
  // {
  //   id: "tile3",
  //   header: "Employment 4th Quarter",
  //   background: "rgb(169,169,169)",
  //   details: ["23%"],
  //   format: "",
  //   target: ""
  // },
  // {
  //   id: "tile4",
  //   header: "EPE",
  //   background: "rgb(175,189,231)",
  //   details: ["Enrolled: 450", "Hours: 22,000"],
  //   format: "",
  //   target: ""
  // },
  // {
  //   id: "tile5",
  //   header: "Enrolled",
  //   background: "rgb(74,117,196)",
  //   details: ["502"],
  //   format: "",
  //   target: ""
  // },
  // {
  //   id: "tile6",
  //   header: "HSE",
  //   background: "rgb(255,227,143)",
  //   details: ["Referred: 37", "Passed: 28"],
  //   format: "",
  //   target: ""
  // },
  // {
  //   id: "tile7",
  //   header: "TABE Tests",
  //   background: "rgb(187,215,167)",
  //   details: ["Pre: 507", "Post: 205"],
  //   format: "",
  //   target: ""
  // },
  // {
  //   id: "tile8",
  //   header: "Best + Tests",
  //   background: "rgb(169,169,169)",
  //   details: ["Pre: 300", "Post: 180"],
  //   format: "",
  //   target: ""
  // },
  // {
  //   id: "tile9",
  //   header: "Hours",
  //   background: "rgb(247,197,162)",
  //   details: ["15,000"],
  //   format: "",
  //   target: ""
  // }
];

const createTile = (dataObj) => {
  const { id, header, background, details, format, target } = dataObj;

  const gradient = `style="background-image: linear-gradient(180deg, ${background})"`;

  const tile = `
    <li class="single-tile">
      <a href=${target} id=${id} ${gradient} role="button" type="text/html">
        ${header}
      </a>
    </li>`;

  return tile;
};

const createBlock = () => {
  let block = "";
  for (const record of tileSet) {
    block += createTile(record);
  }
  return `
  <ul class="nav nav-justified">
    ${block}
  </ul>`;
};
//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  const bloc = createBlock();
  $("#top-bloc").append(bloc);
  $("#bottom-bloc").append(bloc);
});
