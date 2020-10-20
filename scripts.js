$( document ).ready(function() {
    console.log( "ready!" );

    $( ".hamburger" ).click(function() {

      if ($( ".hamburger" ).hasClass( "is-active" )) {
        $( ".burgermenu" ).slideUp( "slow", function() {
          console.log( "slide up" );
        });
      } else {
        $( ".burgermenu" ).slideDown( "slow", function() {
          console.log( "slide down" );
        });
      }

      $( ".hamburger" ).toggleClass("is-active");
      $( ".burgermenu" ).toggleClass("active");
    });
});