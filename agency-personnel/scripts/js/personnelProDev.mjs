import { GetProfDevRoster } from "./data-server.mjs";
import { topBanner, tableBody } from "./main.mjs";

const proDevView = () => {
  const blockName = "Professional Development";
  // Sorting data by date, most recent first
  const profDevData = GetProfDevRoster.sort(
    (a, b) => new Date(b.Date) - new Date(a.Date)
  );
  const header = topBanner(blockName, [
    ["Workshop", "col-sm-4"],
    ["Category", "col-sm-5"],
    ["Date", "col-sm-1"],
    ["Hours", "col-sm-2"],
  ]);
  const body = tableBody(profDevData, blockName, [
    "ID",
    "Provider",
    "Attended",
  ]);

  return header + body;
};

export default proDevView;
