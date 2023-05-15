$(document).ready(function() {
    $("#logonap").click(function() {
      $(this).animate({
        transform: "scale(0.5)",
        top: "0",
        left: "0"
      }, 500, function() {
        $("#menù").fadeIn(500);
      });
    });
  });
  