//*=================================
//* Functions to test
//*=================================
//* The first rendering of QUnit should show "failed" for all tests
//* in the QUnit browser tab.

// Import functions here when JS modules are enabled like so:
// import { myFunction } from "myDirectory/myFile.js"
// =================================

// Utility functions if needed
// =================================

//*=================================
//* jQuery section
//*=================================

$(document).ready(() => {
  QUnit.config.collapse = false;

  // Variables
  // =================================
  const dataList = [
    { name: "First", value: "Alan" },
    { name: "Middle", value: "S." },
    { name: "Last", value: "Smith" },
    { name: "BirthDate", value: "02/05/1987" },
    { name: "BeginDate", value: "10/20/2020" },
    { name: "Address", value: "" }
  ];
  const agency = "PRA";

  // Tests
  // =================================

  QUnit.module("");
});
