// List of funding sources available
// Choice via checkboxes
import { topBanner } from "../main.js";

export const createFundingBloc = (fundingStr) => {
  const title = "Funding";

  const banner = topBanner(title);
  let leftBloc = "";
  let rightBloc = "";
  const agencyFundingList = fundingStr.split(",");
  const allFundingList = GetFundingSource.slice(0);

  for (const source of allFundingList) {
    const optionChecked = Boolean(agencyFundingList.includes(source.FSID))
      ? "checked"
      : "";
    const labelText = source.FundAbbrev;
    const key = source.FSID;
    const field = `
    <div class='funding-checkboxes form-group checkbox'>
      <label for='${key}-checkbox' class="single-checkbox">
        <input type='checkbox' name='${key}-checkbox' ${optionChecked}/>
          ${labelText}
      </label>
    </div>`;

    allFundingList.indexOf(source) % 2 === 0
      ? (leftBloc += field)
      : (rightBloc += field);
  }

  return `
  <form class="container-fluid funding-bloc" role="form">
    ${banner}
    <div class="container-fluid row sub-blocs">
      <div class="left-bloc col-sm-6">${leftBloc}</div>
      <div class="right-bloc col-sm-6">${rightBloc}</div>
    </div>
  </form>`;
};
