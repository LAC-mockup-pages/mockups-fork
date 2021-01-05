//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

import {
  tileSet,
  createDetailLines,
  createTile
} from "../../dashboard-landing/scripts/main.js";

const createLeftNavBar = () => {};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  const leftNavBar = createLeftNavBar();

  $("#side-nav").append(leftNavBar);
});
