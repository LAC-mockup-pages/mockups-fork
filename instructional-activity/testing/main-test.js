//* Functions to test
//*=================================
//* The first rendering of QUnit should show "failed" for all tests
//* in the QUnit browser tab.

// Import functions here when JS modules are enabled
// import { myFunction } from "myDirectory/myFile.js"
import { checkHashtable } from "../scripts/components/hours/DailyHours.js";

//*=================================
//* jQuery section
//*=================================
$(document).ready(() => {
  QUnit.module("checkHashtable", () => {
    QUnit.test("should check an Array of objects", (assert) => {
      assert.equal(checkHashtable([{}], "ID"), false, "false if list = [{}]");
      assert.equal(checkHashtable([{ ID: "1" }], "ID"), "1", "value of ID");
    });
  });
});
