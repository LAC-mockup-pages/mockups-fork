//* Functions to test
//*=================================
//* The first rendering of QUnit should show "failed" for all tests
//* in the QUnit module.

// Import functions here when JS modules are enabled
// import myFunction from "myDirectory/myFile.js"

const adding = (num1, num2) => {
  // return num1 + num2;
};

//*=================================
//* jQuery section
//*=================================
$(document).ready(() => {
  QUnit.module("adding", () => {
    QUnit.test("should add something", (assert) => {
      assert.equal(adding(1, 1), 2, "1 + 1 = 2");
    });
  });
});
