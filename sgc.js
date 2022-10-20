$(function () {

  // var TXT = ['MAIN', '01', '02', '03', '04', '05']
  //fullpage
  $('.main').fullpage({
    anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
    css3: false,
    afterLoad: function (page, num) {
      setTimeout(() => {
        $('.section').eq(num - 1).addClass('on').siblings().removeClass('on')
      })
      $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on')
      // $('.this_page').text(TXT[num - 1]); // 

      num !== 1
        ? $('.Header').addClass('on')
        : $('.Header').removeClass('on')
    }
  })

  $('.basicSlider').slick({
    arrows: false,
    asNavFor: '.basicSlider',
    // autoplay:true,
    pauseOnHover: true,
  })

  $('.basicSlider').on('afterChange', function (e, s, c) {
    $('.productSlider .slide_menu li').eq(c).addClass('on').siblings().removeClass('on')
  })

  $('.productSlider .slide_menu li').on('click', function () {
    var idx = $(this).index();
    $('.basicSlider').slick('slickGoTo', idx)
  })

  $('.allOpen').on('click', function () {
    $(this).addClass('on');
    $('.cover').addClass('on');
    if ($('.cover').hasclass('on')) {
      $('html, body').css({ 'overflow': 'hidden', 'height': '100%' });
    }
  })

  $('.cover button').on('click', function () {
    $('.allOpen').removeClass('on')
    $('.cover').removeClass('on');
  })
})