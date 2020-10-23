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
      console.log( "(Un)Hidden" );
    });

    $( ".close-popup" ).click(function() {
      $( ".popup" ).toggleClass("active");
      console.log( "Closed pop-up" );
    });

    var firstvisit = localStorage.getItem('firstvisit');
    if (firstvisit == null) {

      console.log( "New visitor" );

      localStorage.setItem('firstvisit', 1);

      setTimeout(function(){

        console.log( "Opening pop-up" );
        $( ".popup" ).toggleClass("active");

      }, 3000);
    }
});