//*=================================
//* Functions to test
//*=================================
//* The first rendering of QUnit should show "failed" for all tests
//* in the QUnit browser tab.

// Import functions here when JS modules are enabled like so:
// import { myFunction } from "../myDirectory/myFile.js"
// =================================
import { createDuplicatesTable } from "../scripts/components/duplicates.js";
import {
  transformDate,
  createStudentID,
  createShortSaveObj,
  setFiscalYearList
} from "../scripts/main.js";

// Utility functions if needed
// =================================
// Compares 2 arrays for equality. Values need to be in the same order.
const arraysAreEqual = (list1, list2) => {
  if (list1.length !== list2.length) return false;
  const string1 = JSON.stringify(list1);
  const string2 = JSON.stringify(list2);
  return string1 === string2;
};

// Initializing Luxon DateTime class for the module
const DT = luxon.DateTime;

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
  const dataList2 = [
    { name: "First", value: "Alan" },
    { name: "Middle", value: "S." },
    { name: "Last", value: "De Oliveira-Alonzo" },
    { name: "BirthDate", value: "02/01/1988" },
    { name: "BeginDate", value: "10/02/2020" },
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
          "1011980",
          "01/10/1980 ==> 1011980"
        );
      }
    );
  });

  QUnit.module("createStudentID", () => {
    const result = createStudentID(dataList, agency);

    QUnit.test("Should return a string", (assert) => {
      assert.ok(typeof result === "string", "returns a string");
    });

    QUnit.test("Should not contain any whitespace", (assert) => {
      assert.false(result.includes(" "), "No whitespace");
      assert.false(
        createStudentID(dataList2, "PRA").includes(" "),
        "No whitespace"
      );
    });

    QUnit.test("Should return a Student ID with ", (assert) => {
      assert.ok(result.includes("Alan"), "the student's first name");
      assert.ok(result.includes("Smith"), "the student's last name");
    });

    QUnit.test(
      "Should display last name - first with no whitespace",
      (assert) => {
        assert.equal(
          result.slice(0, 9),
          "SmithAlan",
          "No whitespace and displays last-first name string"
        );
        assert.equal(
          createStudentID(dataList2, agency).slice(0, 20),
          "DeOliveiraAlonzoAlan",
          "No whitespace and displays last-first name string"
        );
      }
    );

    QUnit.test(
      "Should return a string with last name, first name, begin date and DOB",
      (assert) => {
        assert.equal(
          result,
          "SmithAlanPRA20102020521987",
          `returns SmithAlanPRA20102020521987`
        );

        assert.equal(
          createStudentID(dataList2, agency),
          "DeOliveiraAlonzoAlanPRA2102020121988",
          `returns DeOliveiraAlonzoAlanPRA2102020121988`
        );
      }
    );
  });

  QUnit.module("createShortSaveObj", () => {
    const result = createShortSaveObj(dataList, agency);
    const propList = [
      "First",
      "Middle",
      "Last",
      "BirthDate",
      "BeginDate",
      "StudentID"
    ];

    QUnit.test("Should return a JS object in an array", (assert) => {
      assert.true(Array.isArray(result), "Result is an array");
      assert.true(
        result[0] instanceof Object,
        "Result is an array containing an JS object"
      );
    });

    QUnit.test("Should have all the props at that point", (assert) => {
      assert.true(
        arraysAreEqual(Object.keys(result[0]), propList),
        "Has all the props"
      );
    });
  });

  QUnit.module.only("setFiscalYearList", () => {
    // Cases for function parameter
    const dates = ["01/01/2021", "07/02/2021", "06/30/2021", "07/02/2020"];

    QUnit.test("Should return an Array with 2 strings elements", (assert) => {
      const result = setFiscalYearList(dates[0]);

      assert.true(Array.isArray(result), "Returns an array");
      assert.true(result.length === 2, "Returns an array of 2 elements");
      assert.true(
        result.every((item) => typeof item === "string"),
        "Returns an array of 2 string elements"
      );
    });
  });
  // End jQuery
});
