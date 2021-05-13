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

  const completeList = [
    { ID: "101", Student_PKID: "10", Day1: "", Day3: "", Day6: "" },
    { ID: "102", Student_PKID: "11", Day1: "", Day3: "", Day6: "" },
    { ID: "103", Student_PKID: "12", Day1: "", Day3: "", Day6: "" }
  ];

  const incompleteList = [
    { ID: "101", Student_PKID: "10", Day1: "", Day3: "", Day6: "" },
    { ID: "102", Student_PKID: "11", Day1: "", Day3: "", Day6: "" }
  ];

  QUnit.module("checkHashtable", () => {
    QUnit.test("should check an Array of objects", (assert) => {
      assert.equal(checkHashtable([{}], roster), false, "false if list = [{}]");
    });

    QUnit.test(
      "should return listDailyHours if all students in roster are in DailyHours",
      (assert) => {
        const result = checkHashtable(completeList, roster);

        assert.ok(
          arraysAreEqual(result, completeList),
          "Output is equal to Daily Hours input"
        );
      }
    );

    QUnit.test(
      "should add missing students to listDailyHours with ID = '0'",
      (assert) => {
        const expected = [
          { ID: "101", Student_PKID: "10", Day1: "", Day3: "", Day6: "" },
          { ID: "102", Student_PKID: "11", Day1: "", Day3: "", Day6: "" },
          { ID: "0", Student_PKID: "12", Day1: "", Day3: "", Day6: "" }
        ];
        const result = checkHashtable(incompleteList, roster) || [{}];
        const missingStudent = result.find(
          (item) => item.Student_PKID === "12"
        );

        assert.ok(
          arraysAreEqual(result, expected),
          "Output is equal to Daily Hours + missing student"
        );
        assert.equal(
          missingStudent.ID,
          "0",
          "Missing student is added with ID = '0'"
        );
      }
    );

    QUnit.test("should show the same schedule for each student", (assert) => {
      const listDailyHours = [
        { ID: "101", Student_PKID: "10", Day1: "", Day3: "", Day6: "" },
        { ID: "102", Student_PKID: "11", Day1: "", Day3: "", Day6: "" }
      ];

      // Filters the schedule props in array of POJOs.
      // Returns the number of different schedules.
      // Should return true.
      const checkClassDays = (arr) => {
        const result = new Set();
        const schedules = arr.map((student) =>
          Object.keys(student)
            .filter((prop) => prop.startsWith("Day"))
            .join(" ")
        );
        schedules.forEach((str) => result.add(str));
        return result.size === 1;
      };

      assert.true(
        !checkClassDays(checkHashtable(incompleteList, roster) || [{}]),
        "All objects have the same schedule props"
      );
    });
  });
});
