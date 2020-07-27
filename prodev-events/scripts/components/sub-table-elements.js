// Creates header with Add button, optional column headers
// (from list parameter)
export const topBanner = (title, list = null) => {
  let headerLine = "";
  const blockName = title.toLowerCase().replace(/\W/gi, "-");

  const formName = `form="${blockName}"`;
  let headerButton = `<button type='button' class="btn btn-default add-record-btn col-sm-2" ${formName}>Add</button>`;

  if (list) {
    headerLine +=
      "<div class='container-fluid row sub-header-labels blue-light-bg blue-text'>";
    for (const item of list) {
      const cellName = item[0].toLowerCase().replace(/\W/gi, "-");
      headerLine += ` <div class='bloc-${blockName}-${cellName} ${item[1]}'>${item[0]}</div>`;
    }
    headerLine += "</div>";
  }
  return `
  <div class='sub-header blue-bg blue-light-text'>
    <div class="container-fluid row">
      ${headerButton}
      <div class='sub-header-title'>${title}</div>
    </div>
    ${headerLine}
  </div>
  `;
};

// Returns a table body with hidden cells, label object and table name
export const subTableBody = (
  dataList,
  block,
  hiddenList,
  obj = {},
  tableName = ""
) => {
  block = block.toLowerCase().replace(/\W/gi, "-");

  const rows = dataList
    .map((record, indx) => {
      let cells = "";
      const tableData = tableName ? `data-table=${tableName}` : "";
      for (const key in record) {
        const optionHidden = hiddenList.includes(key) ? " hidden" : "";
        const label = obj[key] ? `data-label='${obj[key]}'` : "";

        cells += `<td class="cell-data${optionHidden}" data-field=${key} ${label}>${record[key]}</td>`;
      }

      return `<tr id="${block}-${indx}" ${tableData}>${cells}</tr>`;
    })
    .join("");
  return `<div class="${block}-table">
            <table class="table">
              <tbody class='${block}-body'>${rows}</tbody>
            </table>
          </div>`;
};
