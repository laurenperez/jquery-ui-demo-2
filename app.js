
$(function() {
    $(".draggable").draggable();
});

$(function() {
  $("#button").on("click", function() {
    $(".redDiv").toggleClass("yellowDiv", 1000);
  });
});

$(function() {
  $("#datepicker").datepicker();
});

$(function() {
  $("#accordion").accordion();
});
