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
          

// add animations and labels to the timeline


// add animations and labels to the timeline
// tl9.addLabel("start")
//           .from("#parse2 .title", {duration:1,opacity:0,x:"-=60",ease:Back.easeOut})
//             .to("#parse2 .maskBox", {duration:1,height:0,y:"+=400",ease:Back.easeOut})
//             .from("#parse2 .lead", {duration:0.5,opacity:0,x:"-=60",ease:Back.easeOut},"-=0.5")
//           .from("#parse2 .bg1",  {duration:2,x:"-=60",opacity:0,ease:Back.easeOut })
//             .addLabel("end");
    
// let tl10 = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: "#parse2 .sl1", start: "top center+=120",
//     }
//   });

// // add animations and labels to the timeline
// tl10.addLabel("start")
// .from('#parse2 .sl1 li', {duration:0.5,opacity: 0,y:"+=50",stagger: 0.3})
//     .addLabel("end");
    
    
// let tl11 = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: "#parse3", start: "top center", 
//     }
//   });

// // add animations and labels to the timeline
// tl11.addLabel("start")
//           .from("#parse3 .title", {duration:1,opacity:0,x:"-=60",ease:Back.easeOut})
//             .to("#parse3 .maskBox", {duration:1,height:0,y:"+=400",ease:Back.easeOut})
//             .from("#parse3 .lead", {duration:0.5,opacity:0,x:"-=60",ease:Back.easeOut},"-=0.5")
//           .from("#parse3 .bg1",  {duration:2,x:"+=60",opacity:0,ease:Back.easeOut })
//             .addLabel("end");
        
        
// let tl12 = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: "#parse3 .sl1", start: "top center+=120",
//     }
//   });

// // add animations and labels to the timeline
// tl12.addLabel("start")
// .from('#parse3 .sl1 li', {duration:0.5,opacity: 0,y:"+=50",stagger: 0.3})
//     .addLabel("end");
    
        
// let spec = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: "#spec", start: "top center", 
//     }
//   });

// // add animations and labels to the timeline
// spec.addLabel("start")
//     .from("#spec .title", {duration:1,opacity:0,scale:1.3,ease:Back.easeOut})
//     .from("#spec .lead", {duration:0.5,opacity:0,x:"+=40",ease:Back.easeOut})
//     .from("#spec .bg1", {duration:0.5,opacity:0,x:"+=40",ease:Back.easeOut})
//     .from("#spec .bg2", {duration:0.5,opacity:0,x:"-=40",ease:Back.easeOut})
//     .from("#spec .lead2", {duration:0.5,opacity:0,x:"+=40",ease:Back.easeOut})

//     .addLabel("end"); 
    
    
// let pkg = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: "#pkg", start: "top center",
//     }
//   });

// // add animations and labels to the timeline
// pkg.addLabel("start")
//     .from("#pkg .line", {width:0,x:0,duration:0.1,})
//     .addLabel("end"); 
        
        
// let info1 = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//     trigger: "#info", start: "top center",
//     }
//   });

// // add animations and labels to the timeline
// info1.addLabel("start")
//         .from("#info .inner", {duration:2.5,opacity:0,scale:1.3, ease:Back.easeOut})
//           .from("#info .img1",  {duration:3,x:"+=100",y:"-=50",scale:0.7,opacity:0,ease:Back.easeOut },"-=2")
          
          
     
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
