// Actions and logic
let selectedStaff = [];

$(document).ready(() => {
  $("#parentMenu1 li").mouseenter(function() {
    $(this).removeClass("open");
  });
  $("#nav-icon").click(function() {
    $(this).toggleClass("open");
  });

  $("#parentMenu1 li").click(() => {
    $("#nav-icon").removeClass("open");
  });

  $("#main-logo").click(() => {
    alert("Redirect to Home Page");
  });
});
