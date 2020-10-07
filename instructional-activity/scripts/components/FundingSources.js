// List of funding sources available
// Choice via checkboxes
import { topBanner } from "../main.js";

export const createFundingBloc = (fundingStr) => {
  const title = "Funding";

  //TODO Top banner with Save button
  let bloc = topBanner(title);
  const agencyFundingList = fundingStr.split(",");
  const allFundingList = GetFundingSource.slice(0);

  for (const source of allFundingList) {
    const optionChecked = Boolean(agencyFundingList.includes(source.FSID))
      ? "checked"
      : "";

    const labelText = source.FundAbbrev;
    const key = source.FSID;

    bloc += `
    <div class='funding-checkboxes form-group checkbox'>
      <label for='${key}-checkbox' class="single-checkbox">
        <input type='checkbox' name='${key}-checkbox' ${optionChecked}/>
          ${labelText}
      </label>
    </div>`;
  }

  return `<form class="container-fluid funding-bloc" role="form">${bloc}</form>`;
};
