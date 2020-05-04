import { getPersInstHours } from "../data-server.mjs";
import { topBanner, tableBody } from "../main.mjs";

const accumulatedHours = (dataList) => {
  let totalInstrHours = 0;
  let className = "";
  let result = [];
  for (const record of dataList) {
    for (const key in record) {
      if (key.includes("Hours")) record[key] = Number(record[key]);
    }
    const {
      ClassID,
      InstHours,
      TestHours,
      TestContHours,
      LabHours,
      ExtraHoursLT12,
    } = record;
    totalInstrHours =
      InstHours + TestHours + TestContHours + LabHours + ExtraHoursLT12;
    className = ClassID;
    result.push({ className, totalInstrHours });
  }
  return result;
};

const totalHoursLine = (dataList) => {
  const result = dataList.reduce((accumulator, record) => {
    return accumulator + record.totalInstrHours;
  }, 0);

  const totalInstrHrsView = `<div class="instr-hours-view">
  <div class="instr-hours total-banner blue-light-bg dark-blue-text">Total Instructional hours:
  <span> ${result} hrs</span>
  </div>
</div>`;
  return totalInstrHrsView;
};

const instructionalHoursView = () => {
  const blockName = "Instructional Hours";
  const header = topBanner(blockName, [
    ["Class", "col-sm-9"],
    ["Hours", "col-m-3"],
  ]);
  const addedHours = accumulatedHours(getPersInstHours);
  const body = tableBody(addedHours, blockName, ["ID"]);
  const totalHours = totalHoursLine(addedHours);

  return header + body + totalHours;
};

export default instructionalHoursView;
