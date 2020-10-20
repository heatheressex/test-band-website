$( document ).ready(function() {
    console.log( "ready!" );

    $( ".hamburger" ).click(function() {

      if ($( ".hamburger" ).hasClass( "is-active" )) {
        $( ".burgermenu" ).slideUp( "slow", function() {
          console.log( "Slide up" );
        });
      } else {
        $( ".burgermenu" ).slideDown( "slow", function() {
          console.log( "Slide down" );
        });
      }

      $( ".hamburger" ).toggleClass("is-active");
      $( ".burgermenu" ).toggleClass("active");
    });

    setTimeout(function(){

      console.log( "Opening pop-up" );
      $( ".popupouter" ).toggleClass("active");

    }, 5); /* reset back to 5000 */
});