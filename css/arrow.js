$(function() {
  $('a[href*=#]').on('click', function(e) {
    console.log("ARE WE HERE??????")
    e.preventDefault();
    $('html, body').animate({
    scrollTop: $(".second").offset().top},
            'slow');
    });





