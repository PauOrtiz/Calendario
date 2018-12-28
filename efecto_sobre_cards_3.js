$(document).ready(function(){
  $("#fronti").mouseenter(function(){
    $(this).fadeTo("slow",1);
  }); 
   $("#fronti").mouseleave(function(){
    $(this).fadeTo("slow",0.3);
  }); 
});