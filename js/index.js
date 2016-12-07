$(document).ready(function(){
  $("#newor").click(function(){
     $(this).toggleClass("active");
    $(".cards").toggleClass("neworigin");
   
    
  });
  $("#infinite").click(function(){
    $(".cards").toggleClass("rotate");
    $(this).toggleClass("active");
    
  });
});