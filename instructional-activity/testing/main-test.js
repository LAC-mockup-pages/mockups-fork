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
  QUnit.module("checkHashtable", () => {
    QUnit.test("should check an Array of objects", (assert) => {
      assert.equal(checkHashtable([{}]), false, "false if list = [{}]");
      assert.equal(checkHashtable([{ ID: "1" }]), "1", "value of ID exists");
    });

    QUnit.test("should return an array of objects", (assert) => {
      const roster = [
        { ID: "01", Student_PKID: "10" },
        { ID: "02", Student_PKID: "11" },
        { ID: "03", Student_PKID: "12" }
      ];
      const listDailyHours = [
        { ID: "101", Student_PKID: "10" },
        { ID: "102", Student_PKID: "11" },
        { ID: "103", Student_PKID: "12" }
      ];
      const result = checkHashtable(listDailyHours, roster) | [{}];

      assert.ok(
        arraysAreEqual(result, listDailyHours),
        "Result is equal to input of Daily Hours"
      );
    });
  });
});
