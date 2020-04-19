//* Test for modules
import TestComponent from "./test1.mjs";

$(document).ready(() => {
  $(".data-view").empty().append(`<h2>Something happening here</h2>`);

  $(".data-view").append(TestComponent("color:white"));
});
