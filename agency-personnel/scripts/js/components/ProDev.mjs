import { GetProfDevRoster, sessionVariable } from "../data-server.mjs";
import { topBanner, tableBody } from "../main.mjs";

const totalProDevHrs = (dataList) => {
  let result = 0;
  const { FiscalYear } = sessionVariable;

  for (const item of dataList) {
    const year = new Date(item.Date).getFullYear().toString();
    if (FiscalYear.includes(year)) {
      result += Number(item.Hours);
    }
  }
  const optionText = result < 14 ? "class='red-text'" : "";
  const totalProDevHrsView = `<div class="proDev-hours-view">
      <div class="proDev-hours total-banner blue-light-bg dark-blue-text">Total PD hours for the current Fiscal Year:
      <span ${optionText}> ${result} hrs</span>
      </div>
    </div>`;
  return totalProDevHrsView;
};

const proDevView = () => {
  const blockName = "Professional Development";

  // Sorting data by date, most recent first
  const profDevData = GetProfDevRoster.sort(
    (a, b) => new Date(b.Date) - new Date(a.Date)
  );
  const header = topBanner(blockName, [
    ["Workshop", "col-sm-4"],
    ["Category", "col-sm-5"],
    ["Date", "col-sm-2"],
    ["Hrs", "col-sm-1"],
  ]);
  const body = tableBody(profDevData, blockName, [
    "ID",
    "Provider",
    "Attended",
  ]);
  const profDevHours = totalProDevHrs(profDevData);

  return header + body + profDevHours;
};

export default proDevView;
