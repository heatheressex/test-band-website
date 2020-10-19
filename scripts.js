$( document ).ready(function() {
    console.log( "ready!" );


    $( ".test" ).click(function() {
        $( ".test" ).toggleClass("active");
      });
});