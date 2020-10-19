$( document ).ready(function() {
    console.log( "ready!" );

    $( ".hamburger" ).click(function() {
      $( ".burgermenu" ).toggleClass("active");
      $( ".hamburger" ).toggleClass("is-active");
    });
});