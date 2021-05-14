// Actions and logic

const expected = [
  { ID: "101", Student_PKID: "10", Day1: "", Day3: "", Day6: "" },
  { ID: "102", Student_PKID: "11", Day1: "", Day3: "", Day6: "" },
  { ID: "0", Student_PKID: "12", Day1: "", Day3: "", Day6: "" }
];

const propSort = (arr) => {
  return arr.sort((item1, item2) =>
    item1 < item2 ? -1 : item1 > item2 ? 1 : 0
  );
};

const testFunction = (arr) => {
  const result = new Set();
  const schedules = arr.map((student) =>
    Object.keys(student)
      .filter((prop) => prop.startsWith("Day"))
      .sort((item1, item2) => (item1 < item2 ? -1 : item1 > item2 ? 1 : 0))
      .join(" ")
  );
  schedules.forEach((str) => result.add(str));

  return result.size === 1;
};

console.log(testFunction(expected));
// console.log(propSort(Object.keys(expected[2])));
