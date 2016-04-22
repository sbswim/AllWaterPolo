// JQUERY

$(document).ready(function() {

  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbar-fixed');
      $('.content').addClass('content-navbar');
    }
    if ($(window).scrollTop() < 100.1) {
      $('.navbar').removeClass('navbar-fixed');
      $('.content').removeClass('content-navbar');
    }
  });

});

//JAVASCRIPT
