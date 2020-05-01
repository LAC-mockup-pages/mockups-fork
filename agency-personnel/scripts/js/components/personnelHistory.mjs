import { GetPersStatusHistory } from "../data-server.mjs";
import { topBanner, tableBody } from "../main.mjs";

const historyView = () => {
  const blockName = "History";
  // Sorting data by date, most recent first
  const historyData = GetPersStatusHistory.sort(
    (a, b) => new Date(b.PersStatusDate) - new Date(a.PersStatusDate)
  );

  const header = topBanner(blockName, [
    ["Date", "col-sm-2"],
    ["Status", "col-sm-10"],
  ]);

  const body = tableBody(historyData, blockName, [
    "ID",
    "PersonnelID",
    "PersonnelStatID",
  ]);

  return header + body;
};

export default historyView;
