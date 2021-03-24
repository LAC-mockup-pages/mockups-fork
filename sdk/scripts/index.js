// Actions and logic

const buildPeriods = () => {
  const firstSemester = [];
  const secondSemester = [];
  for (let i = 7, j = 1; i < 13, j < 7; i++, j++) {
    const month2 = i < 10 ? `0${i}01` : `${i}01`;
    const month1 = `0${j}01`;
    firstSemester.push(month1);
    secondSemester.push(month2);
  }
  return [...secondSemester, ...firstSemester];
};
const buildHashTable = (num, fiscalYear) => {
  const periods = buildPeriods();
  // const agency = SESSION_VARIABLE[0].AgencyID.includes("%= Session")
  //   ? "PRA"
  //   : SESSION_VARIABLE[0].AgencyID;
  const agency = "PRA";
  const hashTable = [];

  for (let i = 0; i < num; i++) {
    const calendarYear = i < 6 ? fiscalYear - 1 : fiscalYear;
    const PeriodID = `${agency}${calendarYear}${periods[i]}`;
    const month = `${periods[i]} ${calendarYear}`;
    hashTable.push({ PeriodID, month });
  }
  return hashTable;
};

console.log(buildHashTable(9, 2021));
