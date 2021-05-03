//* Functions to test
//*=================================

const adding = (num1, num2) => {
  // return num1 + num2;
};

//*=================================
//* jQuery section
//*=================================
$(document).ready(() => {
  QUnit.module("adding", () => {
    QUnit.test("should add something", (assert) => {
      assert.equal(adding(1, 1), 2, "1+1 = 2");
    });
  });
});
