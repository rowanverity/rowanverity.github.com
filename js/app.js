document.addEventListener('contextmenu', function(event){
  event.preventDefault();
});

$(document).ready(function(){
  var carousel = $('.carousel');
  carousel.carousel({
    interval: false
  });
});