$(document).ready(function(){
  alert("asd");
});

$("#inputEmail").click(function(ev){
   $("#left").addClass("shrink");
    ev.preventDefault();
});

$("#inputEmail").keypress(function(ev){
   $("#left").addClass("shrink");
});

$("#left").click(function(ev){
  $("#left").removeClass("shrink");
   ev.preventDefault();
});
