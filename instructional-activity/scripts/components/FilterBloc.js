// Block for sorting courses in main-table
import { courseList, setFiscalYear } from "../main.js";

const typeList = GetInstructionType.slice(0);
const instructorList = GetInstructor.slice(0).map((record) => {
  const { PersonnelID, InstructorName } = record;
  return { PersonnelID, InstructorName };
});
const formatList = ddlFormat.slice(0);
const fundingList = GetFundingSource.slice(0);
const levelList = ddlLevel.slice(0);

const selectList = [
  { key: "ClassType", value: "Type" },
  { key: "InstructorID", value: "Instructor" },
  { key: "Format", value: "Format" },
  { key: "UpperLevel", value: "Level" }
];

export const createFiscalYearList = () => {
  const list = [];
  const currentDate = Date.now();
  const currentYear = setFiscalYear(currentDate);
  for (let i = 0; i < 6; i++) {
    const year = (currentYear - i).toString();
    list.push({ key: year, value: year });
  }
  const lastYear = currentYear - 6;
  list.push({ key: `${lastYear}+`, value: `${lastYear} and under` });
  return list;
};

export const createFilterBloc = () => {
  const fiscalYearList = createFiscalYearList();
  const defaultYear = fiscalYearList[0].key;
  const fiscalYearSelect = elementSelectModal({
    hashTable: fiscalYearList,
    keyValue: "fiscal-year-filter",
    selectedValue: defaultYear,
    labelVal: "Fiscal Year",
    labelClassVal: "class='blue-light-text filter-select'",
    option: "",
    optionText: ""
  });

  const primarySelect = elementSelectModal({
    hashTable: selectList,
    keyValue: "primary-filter",
    selectedValue: "",
    labelVal: "Filter by: ",
    labelClassVal: "class='blue-light-text filter-select'",
    option: "",
    optionText: ""
  });

  let filteringBloc = `<form  class="form sort-select container-fluid row" role="form" id="filter-form">
    <div class="col-md-4" id="fiscal-year-select">${fiscalYearSelect}</div>
    <div class="col-md-4" id="primary-select">${primarySelect}</div>
    <div class="col-md-4" id="secondary-select">
      <div class="input-field form-group">
        <label for="secondary" class="blue-light-text filter-select">Select value: </label>
        <select class="modal-select" name="secondary" id="secondary-filter-view" disabled>
        <option>Select an option</option></select>
      </div>
    </div>
  </form>
  <div class="container-fluid row buttons-bloc-new">
  <div class="col-md-9"></div>
        <div class="col-md-3"><button type="button" id="filter-apply-btn" form="filter-form"
      class="btn dark-blue-text blue-light-bg">Apply Filters</button>
<button type="button" id="filter-cancel-btn" form="filter-form"
      class="btn btn-default">Clear Filters</button></div>
  </div>`;

  return filteringBloc;
};

export const createSecondarySelect = (year, fieldName) => {
  // Filtering on the fiscal year only
  if (!fieldName && year) return;

  // Filtering on fiscal year, selected category and selected value
  const tableList = {
    ClassType: typeList,
    InstructorID: instructorList,
    Format: formatList,
    UpperLevel: levelList
  };
  const hashTable = tableList[fieldName];

  const secondarySelect = elementSelectModal({
    hashTable,
    keyValue: "secondary-filter",
    selectedValue: "",
    labelVal: "Select value: ",
    labelClassVal: "class='blue-light-text filter-select'",
    option: `data-field=${fieldName}`,
    optionText: ""
  });

  return `<div class="col-md-4" id="secondary-select">${secondarySelect}</div>`;
};

export const createShortList = (year, category = "", categoryValue = "") => {
  //! =================================================
  //! The 3 arguments should be used for the GetCourse request
  //! =================================================
  let shortList = [];
  let recordList = courseList.filter((record) => record.FY === year);
  if (category) {
    recordList = recordList.filter(
      (record) => record[category] === categoryValue
    );
  }

  for (const record of recordList) {
    const {
      ID,
      CourseID,
      StartDate,
      EndDate,
      ClassType,
      SiteName,
      InstructorID,
      Format
    } = record;

    const typeObj = typeList.find((obj) => obj.key === ClassType);
    const instructorObj = instructorList.find(
      (obj) => obj.PersonnelID === InstructorID
    );
    const formatObj = formatList.find((obj) => (obj.key = Format));

    const shortRecord = {
      ID,
      CourseID,
      StartDate,
      EndDate,
      ClassType: typeObj.value,
      SiteName,
      InstructorID: instructorObj.InstructorName,
      Format: formatObj.value
    };

    shortList.push(shortRecord);
  }
  return shortList;
};

export const createDataSchedule = (course) => {
  const shortDayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const resultObj = {};
  Object.keys(course)
    .filter((key) => shortDayList.includes(key.slice(0, 3)))
    .forEach((prop) => {
      const value = course[prop];
      resultObj[prop] = value;
    });
  return JSON.stringify(resultObj);
};
