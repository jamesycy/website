$(window).scroll(function(){

  var wScroll = $(this).scrollLeft();

  console.log(wScroll);

  $(".logo2").css({
    'transform' : 'translate(0px, '+ wScroll /8 +'%)'
  });

  if(wScroll >= 650){

    $(".about").css({
      'opacity' : '1'
    });
  }
  else {

    $(".about").css({
      'opacity' : '0'
    });
  }

  if(wScroll <= 500){

    $(".intro").css({
      'opacity' : '1'
    });

  }
  else {
    $(".intro").css({
      'opacity' : '0'
    });
  }

  if(wScroll <= 400){

    $('.logo').css({
      'opacity' : '1'
    });
  }
  else {
    $('.logo').css({
      'opacity' : '0'
    });
  }

});

$( window ).load(function(){
  $(".intro").css({
    'opacity' : '1'
  });
  $(".logo").css({
    'opacity' : '1'
  });
  $('.toggle').css({
    'opacity' : '1'
  })
});

$(document).ready(function(){

  var sidebarCheck = 1;

  $(".toggle").click(function(){

    if (sidebarCheck == 1) {
      $(".sidebar").css({
        'left' : '100%'
      });
      sidebarCheck = 0;
    }
    else {
      $(".sidebar").css({
        'left' : '80%'
      });
      sidebarCheck = 1;
    }

  });


  $(".about-btn").click(function(){
    $(".sidebar").css({
      'left' : '100%'
    });
    sidebarCheck = 0;

    $("body").scrollLeft(1677);
  });

  $(".home-btn").click(function(){
    $(".sidebar").css({
      'left' : '100%'
    });

    sidebarCheck = 0;
    $(window).scrollLeft(0);
  });

});
