// Actions and logic

const listOrigin = [
  { ID: "101", Student_PKID: "10" },
  { ID: "102", Student_PKID: "11" },
  { ID: "103", Student_PKID: "12" }
];

const listResult = [
  { ID: "101", Student_PKID: "10" },
  { ID: "102", Student_PKID: "11" }
];

// Compares 2 hashtables for equality
const testFunction = (list1, list2) => {
  if (list1.length !== list2.length) return false;
  const string1 = JSON.stringify(list1);
  const string2 = JSON.stringify(list2);
  return string1 === string2;
};

console.log(testFunction(listOrigin, listResult));
// console.log(typeof JSON.stringify(listOrigin));
