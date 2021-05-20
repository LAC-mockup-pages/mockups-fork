//*=================================================
//* Actions and Logic
//*=================================================

const cardText = {
  card0: `<div class="card-text">
        You have created <span class="large-num">123</span> classes for the current fiscal year.
      </div>
      <div class="card-text">
        Click
        <span>
          <button type="button" class="btn btn-default here-btn">HERE</button>
        </span>
        to display them.
      </div>`,
  card1: `<div class="card-text">
  There are  <span class="large-num">456</span>  students enrolled in these classes.
</div>
<div class="card-text">Of these, <span class="large-num">456</span> students are still active</div>
<div class="card-text">
  Click
  <span>
    <button type="button" class="btn btn-default here-btn">HERE</button>
  </span>
  to display your classes' roster.
</div>`,
  card2: `<div class="card-text"><span class="large-num">235</span> students had less than 12 hours of attendance.
</div>
  <div class="card-text">
  Click
  <span>
    <button type="button" class="btn btn-default here-btn">HERE</button>
  </span>
  to display them.
</div>`,
  card3: `<div class="card-text"><span class="large-num">123</span> of your NRS students had no pre-test.
  </div><div class="card-text"><span class="large-num">23</span> of your NYRS students had no pre-test.
  </div>
  <div class="card-text">
  Click
  <span>
    <button type="button" class="btn btn-default here-btn">HERE</button>
  </span>
  to display the NRS Students without Pre-Test report.
</div>
<div class="card-text">
  Click
  <span>
    <button type="button" class="btn btn-default here-btn">HERE</button>
  </span>
  to display the NYRS Students without Pre-Test report.
</div>`,
  card4: `<div class="card-text"><span class="large-num">123</span> of your NRS students had no post-test.
  </div><div class="card-text"><span class="large-num">23</span> of your NYRS students had no post-test.
  </div>
  <div class="card-text">
  Click
  <span>
    <button type="button" class="btn btn-default here-btn">HERE</button>
  </span>
  to display the NRS Students without Post-Test report.
</div>
<div class="card-text">
  Click
  <span>
    <button type="button" class="btn btn-default here-btn">HERE</button>
  </span>
  to display the NYRS Students without Post-Test report.
</div>`
};

const toggleSideNav = () => {
  $(
    ".sidenav .main-tab, .sidenav .close-btn, .sidenav .small-label"
  ).toggleClass("hidden");
};

const createCardContent = () => {
  for (const valueList of cardValues) {
    const indx = cardValues.indexOf(valueList);
    const cardId = `card${indx}`;
  }
};

//*=================================================
//* jQuery section
//*=================================================

$(document).ready(() => {
  //* Side nav open at home page loading
  $(".sidenav").width("20%");
  toggleSideNav();

  //* Opening side Nav
  $(document).on("click", "#menu-btn", function (evnt) {
    $(".sidenav").width("20%");
    toggleSideNav();
  });

  //* On first rendering, load the first card.
  const firstCard = cardText.card0;
  $(".card-block").empty().append(firstCard).attr("id", "card0");
  $("#go-left").prop("disabled", true);

  //* Closing sidenav by clicking close-btn or sidenav losing focus
  $(document).on("click", ".close-btn", function (evnt) {
    $(".dropdown-container").css("display", "none");
    $(".main-tab .dropdown-btn").removeClass("active");
    $(".sidenav").width("3%");
    toggleSideNav();
  });

  //* Selecting a menu item and displaying the sub-menu
  $(document).on("click", ".dropdown-btn", function (evnt) {
    $(".dropdown-container").css("display", "none");
    $(".main-tab .dropdown-btn").removeClass("active");
    $(this).siblings(".dropdown-container").css("display", "block");
    $(this).toggleClass("active");
  });

  //* Selecting a submenu item
  $(document).on("click", ".dropdown-container a", function (evnt) {
    $(".dropdown-container").css("display", "none");
    $(".main-tab .dropdown-btn").removeClass("active");
    $(".sidenav").width("3%");
    toggleSideNav();
  });

  //* Selecting another page in subnav bar
  $("#sub-nav li").on("click", function (evnt) {
    evnt.stopPropagation();
    $("#sub-nav li").removeClass("blue-light-bg blue-text");
    $(this).toggleClass("blue-light-bg blue-text");
  });

  //* Selecting next/previous card
  $(document).on("click", ".chevron", function (evnt) {
    evnt.stopPropagation();
    const direction = $(this).attr("id");
    const currentCardIndex = Number($(".card-block").attr("id").slice(4));
    const nextCardId =
      direction === "go-right"
        ? `card${currentCardIndex + 1}`
        : `card${currentCardIndex - 1}`;

    const nextCard = cardText[nextCardId];
    $(".card-block").empty().append(nextCard).attr("id", nextCardId);
    if (nextCardId === "card0") {
      $("#go-left").prop("disabled", true);
    } else if (nextCardId === `card${Object.keys(cardText).length - 1}`) {
      $("#go-right").prop("disabled", true);
    } else {
      $(".chevron").prop("disabled", false);
    }
  });
});
