$(function () {

  var TXT = ['HOME', '01', '02', '03', '04', 'the portpolio of Bae']
  //fullpage
  $('.main').fullpage({
    anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
    css3:false, //background fixed되게 해줌 
    loopHorizontal:false,
    afterLoad: function (page, num) {
      setTimeout(() => { //첫페이지에애니가 안붙는걸 딜레이 줘서 해결함
        $('.section').eq(num - 1).addClass('on').siblings().removeClass('on')
      }, 500)


      // javascript로 한다면 이렇게
      // document.querySelectorAll('.section').forEach(el=>{
      //   document.querySelectorAll('.section').forEach(el=>{
      //     el.classList.remove('on')
      //   })
      //   el.classList.add('on')
      // })

      $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on')
      $('.this_page').text(TXT[num - 1]); // page는 해당페이지의 anchor값 나옴

      // $('.this_bg').css({ 숫자 나오게 하는거
      //   backgroundPositionY: - 100 * (num - 1) + "px"
      // });
      // $('.this_pic img').attr({ 그림 attr소스 변경
      //   src: `assets/img/lesedilarona0${num}.jpg`
      // })
      // $('.this_tp').css({ 그림 배경으로 깔기
      //   backgroundImage: `url(assets/img/lesedilarona0${num}.jpg)`
      //   // 그냥 background라고 주면 축약형 전체를 못가지고 오므로 Image라고 써줘야함
      // })
    }
  })



  $('.page03').on('wheel', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $.fn.fullpage.moveSlideLeft();
    }
    else {
      $.fn.fullpage.moveSlideRight();
    }
  })


})