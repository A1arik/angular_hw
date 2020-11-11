$(function () {
  $('.nav_bg').click(function () {
    $('.nav').fadeToggle('slow');
    $(this).toggleClass('nav_bg_active');
  });
  $('.left_menu_btn').click(function () {
    $('.left_menu').toggleClass('left_menu_active');
    if ($(this).css("background-color") == "rgb(70, 24, 8)") {
      $(this).css("background-color", '#cba78a');
      setTimeout(function () { $('.left_menu_btn').text('Закрыть'); }, 400);
    } else {
      $(this).css("background-color", '#461808');
      $(this).text('Каталог товаров');
    };
  });
  $(".left_menu_list > li > h3").click(function (e) {
    e.preventDefault();
    var menu = $(this).closest('.left_menu_list');
    if (false == $(this).next().is(':visible')) {
      menu.find('li').removeClass('slide active');
      menu.find('ul').slideUp();
    }
    $(this).next().slideToggle();
    $(this).parent().addClass('slide');
  });
  $('.popup_tel').click(function () {
    if ($('.popup_tel_hide').css('display') == 'none') {
      $('.popup_tel_hide').fadeIn('slow');
      $('.popup_sms_hide').fadeOut('slow');
    } else {
      $('.popup_tel_hide').fadeOut('slow');
    }
  });
  $('.popup_sms').click(function () {
    if ($('.popup_sms_hide').css('display') == 'none') {
      $('.popup_sms_hide').fadeIn('slow');
      $('.popup_tel_hide').fadeOut('slow');
    } else {
      $('.popup_sms_hide').fadeOut('slow');
    }
  });
  // $('.scrollup').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 1000);
  // });
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 400) {
  //     $('.scrollup').fadeIn('slow');
  //   }
  //   else {
  //     $('.scrollup').fadeOut('slow');
  //   }
  // });
  if ($(window).width() > 992 && $(window).width() < 1200) {
    $("#lightSlider").lightSlider({
      item: 3,
      autoWidth: false,
      slideMove: 4,
      slideMargin: 3,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 4000,
      enableDrag: false,
      pager: false,
    });
    $("#lightSlider_door").lightSlider({
      item: 2,
      autoWidth: false,
      slideMove: 4,
      slideMargin: 0,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 4000,
      enableDrag: false,
      pager: false,
    });
  } else if ($(window).width() > 768 && $(window).width() < 992) {
    $("#lightSlider").lightSlider({
      item: 2,
      autoWidth: false,
      slideMove: 4,
      slideMargin: 3,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 4000,
      enableDrag: false,
      pager: false,
    });
    $("#lightSlider_door").lightSlider({
      item: 1,
      autoWidth: false,
      slideMove: 4,
      slideMargin: 0,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 4000,
      enableDrag: false,
      pager: false,
    });
  } else if ($(window).width() < 768) {
    $("#lightSlider").lightSlider({
      item: 1,
      autoWidth: false,
      slideMove: 4,
      slideMargin: 3,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 4000,
      enableDrag: false,
      pager: false,
    });
    $("#lightSliderStamps").lightSlider({
      item: 1,
      autoWidth: true,
      slideMove: 1,
      slideMargin: 10,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 2000,
      enableDrag: false,
      pager: false,
      controls: false
    });
    $("#lightSlider_door").lightSlider({
      item: 1,
      autoWidth: false,
      slideMove: 4,
      slideMargin: 0,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 4000,
      enableDrag: false,
      pager: false,
    });
  } else {
    $("#lightSlider").lightSlider({
      item: 4,
      autoWidth: false,
      slideMove: 4,
      slideMargin: 3,
      speed: 2000,
      auto: true,
      loop: true,
      pause: 4000,
      enableDrag: false,
      pager: false,
    });
  }
  $("#lightSliderReviews").lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1,
    slideMargin: 0,
    speed: 2000,
    auto: true,
    loop: true,
    pause: 8000,
    enableDrag: false,
    pager: false,
  });
  $("#lightSlider_door").lightSlider({
    item: 3,
    autoWidth: true,
    slideMove: 4,
    slideMargin: 0,
    speed: 2000,
    auto: true,
    loop: true,
    pause: 4000,
    enableDrag: false,
    pager: false,
  });
  GLightbox({
    selector: '.certificate',
  });
  $(".content_list > li > a").click(function (e) {
    e.preventDefault();
    var menu = $(this).closest('.content_list');
    if (false == $(this).next().is(':visible')) {
      menu.find('li').removeClass('slide active');
      menu.find('.list_main').slideUp(1000);
    }
    $(this).next().slideToggle(1000);
    $(this).parent().addClass('slide');
  });
  $('.content_list > li > a').hover(function () { $(this).parent().addClass('hov') },
    function () { $(this).parent().removeClass('hov') });
})