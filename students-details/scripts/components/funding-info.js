//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Section: Funding sources
//* =======================================

import { createOptionList } from "../main.js";

// Data source: original-data/student-data.js/GetFundingInfo
export const fundingValues = (list, sources, sources2) => {
  const orderedSources = sources2.sort((record1, record2) =>
    record1.FY < record2.FY ? -1 : record1.FY > record2.FY ? 1 : 0
  );
  console.log(
    "🚀 / file: funding-info.js / line 14 / fundingValues / orderedSources",
    orderedSources
  );

  for (const obj of list) {
    const { ID, FSID, FY } = obj;
    const optionList = createOptionList(sources, FSID);
    const FYMinus1 = (Number(FY) - 1).toString();
    const selectFiscalYear = `<div class="input-field form-group col-sm-4"><select class="modal-select" disabled name="FY"><option value=${FY} selected>${FY}</option><option value=${FYMinus1}>${FYMinus1}</option></select></div>`;

    const selectSource = `
    <div class="input-field form-group col-sm-8">
      <select class="modal-select" disabled name=${FSID}>
        ${optionList}
      </select>
    </div>`;

    $(".funding-form").append(
      `<div class="row" id=${ID}>
        ${selectSource}
        ${selectFiscalYear}
      </div>`
    );
  }
};
