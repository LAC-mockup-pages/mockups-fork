// User input data validation

//* Returns true if input is only alphanumerical + underscore, not empty string
const alphaNumCheck = (str) => {
  return /\w+$/i.test(str);
};
