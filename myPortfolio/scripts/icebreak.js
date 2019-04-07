// Makes sure the document is loaded and ready before code execution.
$(document).ready(function() {
    // Takes all break class divs and adds a click function that changes their color from blue to dark gray
    $('.break').click(function() {
      $(this).css('background-color', "darkgray");
      });
    // Makes the reset function work when trying to play again. Turn class is selected and click function reloads the page from cache since the default value of reload from cache rather than the server.
    $('.turn').click(function() {
        location.reload();
    }) 
  });