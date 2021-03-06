$(function(){
  //トップボタン
  var topBtn = $('#pageTop');

  topBtn.click(function(){

    $('body, html').animate({

        scrollTop : 0

    }, 'slow');

    return false;

  });

  //要素の表示アニメーション
  $('div#fade').css('visibility', 'hidden');

  $(window).scroll(function(){

    var windowTop = $(window).scrollTop();

    var windowHeight = $(window).height();

    $('div#fade').each(function(){

      var targetPosition = $(this).offset().top;

      if(windowTop > (targetPosition - windowHeight) + 150){

        $(this).addClass('fadeInDown');

      }

    });

  });

  //プラスボタン
  $('.text-hide > .text').after('<div class="plus"><a href="#">＋</a></div>');

  plusBtn();

  $(window).resize(function(){

    plusBtn();

  });

  var bool = true;

  $('.plus').click(function(){

    $(this).prev().slideToggle();

    if(bool == true){

      bool = false;

      $(this).css({
        'transform':'rotate(45deg)'
      });

    } else{

      bool = true;

      $(this).css({
        'transform':'rotate(90deg)'
      });

    }

    return false;

  });

  function plusBtn (){

    if(window.matchMedia('(max-width: 767px)').matches){

        $('.plus').show();

        $('.plus').css({
          'transform':'rotate(90deg)'
        });

        $('.text').hide();

    } else{

        $('.plus').hide();

        $('.plus').css({
          'transform':'rotate(90deg)'
        });

        $('.text').show();

    }
  }

  //モーダルウィンドウ
  $('#index').click(function(){

    $('#modal').fadeIn('slow');

    menuCenter();

    return false;

  });

  $('#close').click(function(){

    $('#modal').fadeOut('slow');

    return false;

  });

  $(window).resize(function(){

    menuCenter();

  });


  function menuCenter(){

    var w = $(window).width();

    var h = $(window).height();

    var cw = $('#modalMenu').outerWidth();

    var ch = $('#modalMenu').outerHeight();

    $('#modalMenu').css({

        'left': ((w - cw) / 2) + 'px',

        'top': ((h - ch) / 2) + 'px'

    });

  }

});
