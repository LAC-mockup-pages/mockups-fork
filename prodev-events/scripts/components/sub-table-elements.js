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
  const orderedList = [...Object.keys(obj), ...hiddenList];
  const rows = dataList
    .map((record, indx) => {
      let cells = "";
      const tableData = tableName ? `data-table=${tableName}` : "";
      for (const key of orderedList) {
        const optionHidden = hiddenList.includes(key) ? " hidden" : "";
        const label = obj[key] ? `data-label='${obj[key]}'` : "";
        let insideText = record[key];
        if (["Attended", "FeesPaid"].includes(key)) {
          insideText = record[key] === "True" ? "Yes" : "No";
        }
        cells += `<td class="cell-data${optionHidden} col-sm-2" data-field=${key} ${label}>${insideText}</td>`;
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
