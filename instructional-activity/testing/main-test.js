//* Functions to test
//*=================================
//* The first rendering of QUnit should show "failed" for all tests
//* in the QUnit browser tab.

// Import functions here when JS modules are enabled
// import { myFunction } from "myDirectory/myFile.js"
import { checkHashtable } from "../scripts/components/hours/DailyHours.js";

// Compares 2 hashtables for equality
const arraysAreEqual = (list1, list2) => {
  if (list1.length !== list2.length) return false;
  const string1 = JSON.stringify(list1);
  const string2 = JSON.stringify(list2);
  return string1 === string2;
};

//*=================================
//* jQuery section
//*=================================
$(document).ready(() => {
  QUnit.config.collapse = false;
  const roster = [
    { ID: "01", Student_PKID: "10" },
    { ID: "02", Student_PKID: "11" },
    { ID: "03", Student_PKID: "12" }
  ];
  QUnit.module("checkHashtable", () => {
    QUnit.test("should check an Array of objects", (assert) => {
      assert.equal(checkHashtable([{}]), false, "false if list = [{}]");
      assert.equal(checkHashtable([{ ID: "1" }]), "1", "value of ID exists");
    });

    QUnit.test(
      "should return listDailyHours if all students in roster are in DailyHours",
      (assert) => {
        const listDailyHours1 = [
          { ID: "101", Student_PKID: "10" },
          { ID: "102", Student_PKID: "11" },
          { ID: "103", Student_PKID: "12" }
        ];

        const result1 = checkHashtable(listDailyHours1, roster) | [{}];

        assert.ok(
          arraysAreEqual(result1, listDailyHours1),
          "Output is equal to Daily Hours input"
        );
      }
    );

    QUnit.test(
      "should add missing students to listDailyHours with ID = '0'",
      (assert) => {
        const listDailyHours2 = [
          { ID: "101", Student_PKID: "10" },
          { ID: "102", Student_PKID: "11" }
        ];
        const result2 = [
          { ID: "101", Student_PKID: "10" },
          { ID: "102", Student_PKID: "11" },
          { ID: "0", Student_PKID: "12" }
        ];
      }
    );
  });
});
