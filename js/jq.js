alert("hello! is anybody out there?");

$(document).ready(function(){

    $("#Slider_Content").fadeIn(500);
    $("#1").fadeIn(500);
    
    $("#controle1").click(function(e){
          $("#1").fadeIn();
      $("#2").fadeOut();
      $("#3").fadeOut();
      });
    
    $("#controle2").click(function(e){
          $("#1").fadeOut();
      $("#2").fadeIn();
      $("#3").fadeOut();
      });
  
    $("#controle3").click(function(e){
          $("#1").fadeOut();
      $("#2").fadeOut();
      $("#3").fadeIn();
      });
  
  });