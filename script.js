$(document).ready(function(){

$(".dono").click(function(){
    
    $(".bad").delay("600").fadeIn("800");
    $(".cover").fadeIn("400");
});

$(".cover").click(function(){
    
    $(".bad").fadeOut("400");
    $(".bad2").fadeOut("400");
    $(".cover").delay("600").fadeOut("800");
});


$(".bos").click(function(){
    
    $(".bad2").delay("600").fadeIn("800");
    $(".cover").fadeIn("400");
});

});