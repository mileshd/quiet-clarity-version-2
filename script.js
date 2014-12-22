(function($) {
  
  $('nav.navbar').waypoint('sticky');

  // Override Bootstrap default menu open onclick
  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
      }
  });

  // Navigation
  $('.page').hide();
  $('#home-page').show();

  $('.welcome a, .navbar a').click(function(e) {
    e.preventDefault();
    var page = $(this).attr('href');
    $('.page').hide();
    $(page).fadeIn(500);
  });

}(jQuery));
