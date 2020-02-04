// Actions and logic

const outcomesData = [
  {
    id: 1,
    CategoryName: "Social Services",
    Descriptions: [
      { Text: "Operative tertiary application" },
      { Text: "Organic foreground task-force" },
      { Text: "User-friendly optimal orchestration" },
      { Text: "Switchable 24 hour Graphic Interface" }
    ]
  },
  {
    id: 2,
    CategoryName: "Functional Literacy",
    Descriptions: [{ Text: "Reactive real-time pricing structure" }]
  },
  {
    id: 3,
    CategoryName: "Community Outcomes",
    Descriptions: [
      { Text: "Enhanced encompassing toolset" },
      { Text: "Synchronised reciprocal approach" }
    ]
  },
  {
    id: 4,
    CategoryName: "School Relations",
    Descriptions: [
      { Text: "Vision-oriented radical help-desk" },
      { Text: "Optional well-modulated help-desk" },
      { Text: "Distributed asymmetric data-warehouse" },
      { Text: "Monitored regional productivity" }
    ]
  },
  {
    id: 5,
    CategoryName: "Health Literacy",
    Descriptions: [
      { Text: "Enterprise-wide foreground strategy" },
      { Text: "Networked next generation capacity" },
      { Text: "Streamlined 5th generation installation" }
    ]
  },
  {
    id: 6,
    CategoryName: "Workforce Readiness",
    Descriptions: [
      { Text: "Self-enabling next generation open architecture" },
      { Text: "Diverse even-keeled leverage" },
      { Text: "Assimilated composite info-mediaries" },
      { Text: "Fully-configurable exuding synergy" }
    ]
  },
  {
    id: 7,
    CategoryName: "Financial Literacy",
    Descriptions: [
      { Text: "Fundamental even-keeled database" },
      { Text: "Upgradable heuristic middleware" },
      { Text: "Distributed multi-state internet solution" },
      { Text: "Assimilated high-level application" }
    ]
  },
  {
    id: 8,
    CategoryName: "Legal Services",
    Descriptions: [
      { Text: "Decentralized empowering flexibility" },
      { Text: "Reverse-engineered cohesive challenge" },
      { Text: "Down-sized upward-trending superstructure" },
      { Text: "De-engineered uniform architecture" }
    ]
  },
  {
    id: 9,
    CategoryName: "Citizenship",
    Descriptions: [
      { Text: "Advanced value-added intranet" },
      { Text: "Public-key zero administration implementation" },
      { Text: "Right-sized context-sensitive intranet" }
    ]
  }
];

const placeholderList = ["id", "Category", "Description"];

const headerList = ["id", "Category", "Description"];

const labelList = ["id", "Category", "Description"];

const createNewRecord = () => {
  for (let i = 0; i < placeholderList.length; i++) {
    const newLine = "";

    $("#new-partner").append(`${newLine}<input
    type="text"
    class="form-control"
    placeholder='${placeholderList[i]}'
    required
  />`);
  }

  $("#new-partner").append(
    `<button type="submit" id="submit-btn" class="btn btn-primary">Add New Partner</button>`
  );
};

const viewHeaders = () => {
  for (let i = 1; i < headerList.length; i++) {
    $(".table thead").append(`<th>${headerList[i]}</th>`);
  }
};

const createDataRow = arrText => {
  let insideRow = "";
  for (let textLine of arrText.sort((a, b) => (a.Text > b.Text ? 1 : -1))) {
    insideRow += `<tr class="inside-row"><td>${textLine.Text}</td></tr>`;
  }
  return insideRow;
};

const viewData = arr => {
  for (record of arr.sort((a, b) =>
    a.CategoryName > b.CategoryName ? 1 : -1
  )) {
    const { id, CategoryName, Descriptions } = record;
    const row = createDataRow(Descriptions);
    $(".table-body").append(
      `<tr id=${id}><td class="cell-data">${CategoryName}</td><td><table>${row}</table></td></tr>`
    );
  }
};

//* Flattens a nested JSON object
const flatten = (obj, path = "") => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, "")]: obj };

  return Object.keys(obj).reduce((output, key) => {
    return obj instanceof Array
      ? { ...output, ...flatten(obj[key], path) }
      : { ...output, ...flatten(obj[key], key + ".") };
  }, {});
};

const createListFields = num => {
  const selectedRecord = partnersData.filter(record => record.id === num);
  const flattenedRecord = flatten(selectedRecord);
  const keyList = Object.keys(flattenedRecord);
  const list = keyList.map((key, indx) => [
    key,
    labelList[indx],
    flattenedRecord[key]
  ]);

  return list;
};

$(document).ready(() => {
  // * from navBar/index.js
  $("#nav-icon").click(function() {
    $(this).toggleClass("open");
  });

  $("#parentMenu1 li").click(() => {
    $("#nav-icon").removeClass("open");
  });

  $("#main-logo").click(() => {
    alert("Redirect to Home Page");
  });

  // * sub-navbar/index.js
  $("#sub-nav li").click(function() {
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  //* Back to Top button
  const btnToTop = $("#btn-top");
  $("window").scroll(() => {
    btnToTop.style.display =
      $("window").scrollTop() > 600 || $("body".scrollTop() > 600)
        ? "inline-block"
        : "none";
  });
  btnToTop.click(e => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  // * data viewing
  createNewRecord();
  viewHeaders();
  viewData(outcomesData);

  // //* Adding a new outcome

  // //* Select outcome
  $("[title^='click'").click(function() {
    const rowID = Number($(this).attr("id"));
    const listFields = createListFields(rowID);
    $("#modalBloc").modal("toggle");
    $(".modal-body form").remove();
    $(".modal-body").append("<form id='modal-form'></form>");

    for (field of listFields) {
      const key = field[1],
        idVal = field[0];
      let option = "",
        classOption = "",
        val = field[2];

      if (["id", "PartnerID"].includes(idVal)) option = "disabled";
      if (placeholderList.includes(key)) classOption = "class='red-text'";
      if (!val) val = "";
      $(".modal-body>form").append(
        `<div class="input-field">
            <label for=${idVal} ${classOption}>${key}</label>
            <input type="text" id=${idVal} value='${val}' ${option}>
          </div>`
      );
    }
  });
});
