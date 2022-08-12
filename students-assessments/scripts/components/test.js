const evalTM = (testLevel, testScore, testForm) => {
  const reference =
    testForm === "11"
      ? { L: [0, 35], E: [0, 35], M: [11, 39], D: [10, 37], A: [11, 39] }
      : { L: [0, 35], E: [0, 35], M: [10, 39], D: [10, 37], A: [11, 39] };
  const list = [...reference[testLevel], Number(testScore)];
  const indx = list
    .sort((num1, num2) => (num1 < num2 ? -1 : num1 > num2 ? 1 : 0))
    .lastIndexOf(testScore);
  return indx === 1 ? indx : 0;
};

console.log(evalTM("L", 20, "11")); // 1
console.log(evalTM("L", 41, "11")); // 0
console.log(evalTM("L", 30, "12")); // 1
console.log(evalTM("M", 10, "11")); // 0
console.log(evalTM("M", 10, "12")); // 1
console.log(evalTM("D", 30, "12")); // 1
console.log(evalTM("D", 40, "12")); // 0
console.log(evalTM("D", 11, "12")); // 1
