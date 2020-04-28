import { GetPersStatusHistory } from "./data-server.mjs";
import { topBanner } from "./main.mjs";

const historyView = () => {
  const blockName = "History";
  const labels = {
    ID: "id",
    PersonnelID: "Personnel id",
    PersStatusDate: "Date",
    PersonnelStatID: "Code",
    personnelStatDesc: "Status",
  };

  // Sorting data by date, most recent first
  const historyData = GetPersStatusHistory.sort(
    (a, b) => new Date(b.PersStatusDate) - new Date(a.PersStatusDate)
  );

  const header = topBanner(blockName, [
    ["Date", "col-sm-4"],
    ["Status", "col-sm-8"],
  ]);

  const body = tableBody(historyData, "History", [
    "ID",
    "PersonnelID",
    "PersonnelStatID",
  ]);

  return header + body;
};

export default historyView;
