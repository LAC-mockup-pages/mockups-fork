// Actions and logic

const createObject = (list) => {
  const resultObj = {};
  for (const record of list) {
    const { name, value } = record;
    resultObj[name] = value;
  }
  return resultObj;
};

console.log(
  makeObject([
    { name: "New1", value: "Paul" },
    { name: "New2", value: "Peter" },
    { name: "New3", value: "John" },
    { name: "New4", value: "Bill" },
    { name: "New5", value: "Alfred" }
  ])
);
