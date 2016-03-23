//This is the JQuery function that will go back to the top
$(document).ready(function(){
 	$(".back-to-top").click(function(){
 	$('html, body').animate({
        scrollTop: $(".top").offset().top
      },500);
});
 });