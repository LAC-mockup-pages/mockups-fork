//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

import { tileSet, createTile } from "../../dashboard-landing/scripts/main.js";

const createLeftNavBar = () => {
  let block = "";

  for (const record of tileSet) {
    block += createTile(record, "container-fluid button-block-sidenav");
  }

  return block;
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  const leftNavBar = createLeftNavBar();

  $("#side-nav").append(leftNavBar);
});
