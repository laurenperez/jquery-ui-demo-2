
$( function() {
    $( ".draggable" ).draggable();
  } );

$( function() {
   $( "#button" ).on( "click", function() {
     $( ".myDiv" ).toggleClass( "myClass", 1000 );
   });
 } );

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
      $( "#accordion" ).accordion();
    } );
