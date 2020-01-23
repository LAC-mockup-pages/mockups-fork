// Actions and logic

$(document).ready(() => {
  $("#nav-icon").click(function() {
    $(this).toggleClass("open");
  });

  $("#parentMenu1 li").click(() => {
    $("#nav-icon").removeClass("open");
  });

  $("#main-logo").click(()=>{
    alert("Redirect to Home Page")
  })
});
