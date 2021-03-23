// Actions and logic

const testDate = () => {
  const firstSemester = [];
  const secondSemester = [];
  for (let i = 6, j = 0; i < 12, j < 6; i++, j++) {
    const date1 = new Date("2021", i, "01");
    const date2 = new Date("2021", j, "01");

    const month1 = `${date1.toDateString().substr(4, 3)}Hours`;
    const month2 = `${date2.toDateString().substr(4, 3)}Hours`;

    firstSemester.push(month1);
    secondSemester.push(month2);
  }
  return [...secondSemester, ...firstSemester];
};

const testDate2 = () => {
  const createMonthList = (num) => {
    return new Array(6).fill("Hours", 0, 6).map((item, indx) => {
      const month = new Date("2021", indx + num, "01")
        .toDateString()
        .substr(4, 3);
      return month + item;
    });
  };
  const first = createMonthList(0);
  const second = createMonthList(6);
  return [...second, ...first];
};

// console.log("testDate() :>> ", testDate());
console.log("testDate2() :>> ", testDate2());
