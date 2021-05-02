//* Functions to test
//*=================================

//*=================================
//* jQuery section
//*=================================
$(document).ready(() => {
  QUnit.module("add", () => {
    QUnit.test("should add two numbers", (assert) => {
      assert.equal(adding(1, 1), 2);
      assert.notEqual(adding(1, "1"), 2, "Failing test as 1 param is a string");
    });
  });

  QUnit.module("setFiscalYear", () => {
    QUnit.test("should return a string", (assert) => {
      const testDate = "";

      assert.ok(typeof setFiscalYear(testDate) === "string");
      assert.equal(setFiscalYear(testDate), "2020", `${testDate} ==> "2020"`);
    });
  });
});
