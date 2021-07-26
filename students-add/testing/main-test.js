//*=================================
//* Functions to test
//*=================================
//* The first rendering of QUnit should show "failed" for all tests
//* in the QUnit browser tab.

// Import functions here when JS modules are enabled like so:
// import { myFunction } from "myDirectory/myFile.js"
// =================================
import { transformDate } from "../scripts/main.js";

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

  QUnit.module("transformDate", () => {
    QUnit.test("Should return a string", (assert) => {
      assert.ok(
        typeof transformDate("01/10/1980") === "string",
        "returns a string"
      );
    });
    QUnit.test(
      "Should return a date without symbols nor leading zeros",
      (assert) => {
        assert.equal(
          transformDate("01/10/1980"),
          "1101980",
          "01/10/1980 ==> 1101980"
        );
      }
    );
  });
});
