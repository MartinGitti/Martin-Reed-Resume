//===============================================TASK 14=========================================//
/*jQuery code*/
// Function to alert user once page has loaded.
$(document).ready(function () {
    alert("Hi, I'm Martin, welcome to my page! The page has fully loaded, click okay to continue.");
});

// Function to hide page links until user clicks on Icon(div).
$(document).ready(function () {

    $(".navbarList").hide();
  });

  $(".navbar-div").click(function () {
    $(".navbarList").slideToggle("slow");
  });

// Functions which create dropdown box to show information.
$(document).ready(function () {
    $(".aboutMe").click(function () {
        $(".panel").slideToggle("slow");
    });
});

$(document).ready(function () {
  $(".education").click(function () {
      $(".education-div").slideToggle("slow");
  });
});

$(document).ready(function () {
  $(".experience").click(function () {
      $(".experience-div").slideToggle("slow");
  });
});

$(document).ready(function () {
  $(".workEthics").click(function () {
      $(".list").slideToggle("slow");
  });
});

$(document).ready(function () {
  $(".contactForm").click(function () {
      $(".container").slideToggle("slow");
  });
});
//==============================================THE END==========================================//



