// User input data validation

//* Returns true if input is only alphanumerical + underscore, not empty string
const alphaNumCheck = (str) => {
  return /\w+$/i.test(str);
};

const validateUserInput = (dataList) => {
  let correct = true;
  const checkedFieldList = [];
  for (let field of dataList) {
    switch (field.name) {
      case "ReferralSiteName":
      case "ReferralSiteManager":
      case "Address":
      case "City":
        correct = alphaNumCheck(field.value);
        break;
      case "State":
        correct = field.value.length < 3 && field.value.length > 0;
      case "Zip":
        correct = field.value.length < 11 && field.value.length > 0;
        break;
      case "Telephone":
        correct = field.value.length < 13 && field.value.length > 0;
        break;
      case "ReferralSiteEmail":
        correct = field.value.length > 4 && field.value.length > 0;
        break;
      default:
        correct = true;
        break;
    }
    checkedFieldList.push({ ...field, correct });
  }

  return checkedFieldList;
};

const dataTestNewRecord = [
  { name: "ReferralSiteName", value: "lkdfjghkadhfgah" },
  { name: "ReferralSiteManager", value: "Werrr Deeer" },
  { name: "Address", value: "123 1st st" },
  { name: "City", value: "New City" },
  { name: "State", value: "AS" },
  { name: "Zip", value: "12345" },
  { name: "County", value: "36007" },
  { name: "CountyDesc", value: "36007 Broome" },
  { name: "Telephone", value: "1231231234" },
  { name: "ReferralSiteEmail", value: "myEmail@email.com" },
];
