$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
});
$(function(){
  var str = '#len'; 
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4;
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500);
  });
});
