$(window).on('load', function () {
    setTimeout(function() {
      $('#preloader').addClass('fade-out');
    }, 2000); // Delay to show preloader for at least 1 second
    setTimeout(function() {
      $('#preloader').remove();
    }, 4800); // This should match the duration of the CSS transition
  });
  