$(function () {
    
    var h = $(window).height();
      //ページローダー起動
      $('#wrapper').css('display', 'none');
      $('#loader-bg').height(h).css('display', 'block');
      $('#loader').height(h).fadeIn(300).css('display', 'block');
    });


    $(window).load(function () { //全ての読み込みが完了したら実行

      //画面横幅が667px以上のときの処理
      $('#loader-bg').delay(900).fadeOut(800);//ローダー背景非表示
      $('#loader').delay(600).fadeOut(300);//ローダー非表示
      $('#wrapper').fadeIn(300).css('display', 'block');//#wrapコンテンツを表示

      //--start firstMOVE-----------------------------------------------------------------// 
        
var tl = gsap.timeline();
tl.from('#top .fadeSet', {duration:1,opacity: 0,y:"+=50",stagger: 0.5},"+=1")


 //PCの処理
        
        let tl5 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".redBar",start: "top center", 
    }
  });

// add animations and labels to the timeline
    
let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
    trigger: ".parseBlock", start: "top center",
    }
  });

// add animations and labels to the timeline
tl2.addLabel("start")
        .from(".parseBlock .title", {duration:2.5,opacity:0,scale:1.3, ease:Back.easeOut})
    });

    // スクロール×ブラー
    $(function () {
      var scrollAnimationElm = document.querySelectorAll('.Blur');
      var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
          var triggerMargin = 100;
          if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollAnimationElm[i].classList.add('on');
          }
        }
      }
      window.addEventListener('load', scrollAnimationFunc);
      window.addEventListener('scroll', scrollAnimationFunc);
    });

    // スクロール×フェードイン
    $(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
            $(".fadeInRight").each(function () {
                const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });
});
