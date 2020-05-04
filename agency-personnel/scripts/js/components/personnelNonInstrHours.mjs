import { getNonInstHours } from "../data-server.mjs";
import { topBanner } from "../main.mjs";

const nonInstrHoursView = () => {
  const blockName = "Non Instructional Hours";
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const header = topBanner(blockName, [
    ["Period", "col-sm-2"],
    ["Prep", "col-sm-2"],
    ["Travel", "col-sm-2"],
    ["Training", "col-sm-2"],
    ["Meeting", "col-sm-2"],
    ["Extra", "col-sm-1"],
    ["Total", "col-sm-1"],
  ]);

  const body = `<div></div>`;
  return header + body;
};

export default nonInstrHoursView;
