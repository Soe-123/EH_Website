$(function() {
    $.scrollify({
      section : ".section-index",
    });

  });

  $(window).resize(function() {
    var width = $(this).width();
    if(width < 1000) {
      $.scrollify.disable();
    } else {
      $.scrollify.enable();
    }
  });
  
  $(window).trigger('resize');
  

 
  