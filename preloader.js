$(window).on('load', function () {
    setTimeout(function() {
      $('#preloader').addClass('fade-out');
    }, 1000); 
    setTimeout(function() {
      $('#preloader').remove();
    }, 1600); 
  });
  