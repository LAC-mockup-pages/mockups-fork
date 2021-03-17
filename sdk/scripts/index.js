// Actions and logic

const checkUnique = (str) => {
  const list = new Set();
  for (const character of str.split("")) {
    // If character is already present in list, it will
    // be ignored
    list.add(character);
  }
  return str.length === list.size;
};

console.log(checkUnique("abcde")); // ==> true
console.log(checkUnique("abecade")); // ==> false
