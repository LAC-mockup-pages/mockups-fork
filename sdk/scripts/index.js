// Actions and logic

const days = { Day1: "2", Day3: "", Day18: "4" };

const addDays = (dayObj) => {
  const keyList = Object.keys(dayObj);
  const additionalDays = {};
  for (let i = 1; i < 32; i++) {
    const day = `Day${i}`;
    if (!keyList.includes(day)) {
      additionalDays[day] = "";
    }
  }
  return { ...dayObj, ...additionalDays };
};

console.log(addDays(days));
