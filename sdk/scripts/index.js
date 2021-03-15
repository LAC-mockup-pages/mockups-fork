// Actions and logic

const buildPeriod = () => {
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

console.log("buildPeriod :>> ", buildPeriod());
