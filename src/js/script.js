
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.c-pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 770) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.p-header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.p-header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  //ドロワーメニュー
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });

    // ハンバーガーメニュー
    $(".js-hamburger").on("click", function () {
      if ($(".js-hamburger").hasClass('is-active')) {
        $(".js-nav-menu").fadeOut();
        $(".js-hamburger").removeClass("is-active");
      } else {
        $(".js-nav-menu").fadeIn();
        $(".js-hamburger").addClass("is-active");
      }
      // $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効
    });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });



});
