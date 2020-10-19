$( document ).ready(function() {
    console.log( "ready!" );

    $( ".burgericon" ).click(function() {
        $( ".burgermenu" ).toggleClass("active");
      });
});