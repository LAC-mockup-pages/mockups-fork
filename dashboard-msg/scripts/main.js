//*=================================================
//* Action and logic for the page.
//* JS and jQuery
//*=================================================

import { tileSet, createTile } from "../../dashboard-landing/scripts/main.js";

const dataSet1 = [
  { Site: "Enterprise site", Enrollment: "560", MSG: "0.64" },
  { Site: "Voyager site", Enrollment: "299", MSG: "0.57" }
];

const dataSet2 = [
  { Teacher: "James T. Kirk", Enrollment: "18", MSG: "0.22" },
  { Teacher: "Katherine Janway", Enrollment: "22", MSG: "0.72" },
  { Teacher: "Phillippa Gorgious", Enrollment: "31", MSG: "0.66" },
  { Teacher: "Ben Sisko", Enrollment: "22", MSG: "0.35" }
];

const createLeftNavBar = () => {
  let block = "";
  for (const record of tileSet) {
    block += createTile(record, "container-fluid button-block-sidenav");
  }
  return block;
};

const percentFormat = (str) => {
  return `${str.replace("0.", "")}%`;
};

const createTableHeader = (list) => {
  const headers = list.map((str) => `<th>${str}</th>`).join("");
  console.log("headers :>> ", headers);
  return `<thead><tr>${headers}</tr></thead>`;
};

// list = dataSet#
const createTableBody = (list) => {
  let body = "";
  for (const obj of list) {
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
  const table2 = createTable(dataSet2);

  $("#side-nav").append(leftNavBar);
  $(".table1").append(table1);
  $(".table2").append(table2);
});
