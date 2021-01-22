// List of funding sources available
// Choice via checkboxes
import { topBanner } from "../../main.js";

export const createFundingBloc = (fundingStr) => {
  const title = "Funding";

  const banner = topBanner(title);
  let leftBloc = "";
  let rightBloc = "";
  const agencyFundingList = fundingStr.split(",");

  // Ordered by alpha
  const allFundingList = GetFundingSource.slice(0).sort((item1, item2) =>
    item1.FSID < item2.FSID ? -1 : item1.FSID > item2.FSID ? 1 : 0
  );

  for (const source of allFundingList) {
    const optionChecked = Boolean(agencyFundingList.includes(source.FSID))
      ? "checked"
      : "";
    const labelText = source.FundAbbrev;
    const key = source.FSID;
    const field = `
    <div class='funding-checkboxes form-group checkbox'>
      <label for='${key}' class="single-checkbox">
        <input type='checkbox' name='${key}' ${optionChecked}/>
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

export const saveFundingSources = () => {
  const $inputList = $(".funding-bloc input").clone();
  console.log("inputList :>> ", $inputList);
  let fundingString = "";

  $inputList.each(function (index) {
    const sourceCode = $(this).prop("checked")
      ? $(this).attr("name") + ","
      : "";
    fundingString += sourceCode;
  });
  const classId = $(".course-details").attr("id");
  return [
    { name: "ID", value: classId },
    { name: "FSID", value: fundingString }
  ];
};
