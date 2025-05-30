$(function(){
var ua = navigator.userAgent;
	if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
		// スマホのとき
		$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />');
	}else{
		// PC・タブレットのとき
		$('head').prepend('<meta name="viewport" content="width=1200" />');
	}
})



$(function () {
    
    var h = $(window).height();
      //ページローダー起動
      $('#wrapper1').css('display', 'none');
      $('#loader-bg').height(h).css('display', 'block');
      $('#loader').height(h).fadeIn(300).css('display', 'block');
    });


    $(window).load(function () { //全ての読み込みが完了したら実行

      //画面横幅が667px以上のときの処理
      $('#loader-bg').delay(900).fadeOut(800);//ローダー背景非表示
      $('#loader').delay(600).fadeOut(300);//ローダー非表示
      $('#wrapper1').fadeIn(300).css('display', 'block');//#wrapコンテンツを表示

      //--start firstMOVE-----------------------------------------------------------------// 

// TOPモーション
let tl1 = gsap.timeline();


tl1.addLabel("start")
.from('#top .bgfire', {duration:2,opacity: 0,y:"+=100",ease:Back.easeOut})
.from('#top .copy', {duration:1.5,opacity: 0,scale:1.2,ease:Back.easeOut})
.from('#top .pict1bk', {duration:1.5,opacity: 0,scale:1.2,ease:Back.easeOut},"-=1")
.from('#top .pict1', {duration:0.1,opacity: 0})
.from('#top .light', {duration:1,opacity: 0,scale:2,ease:Back.easeOut},"-=1")
.to('#top .pict1bk', {duration:2,opacity: 0,})
.from('#top .title', {duration:1.5,opacity: 0,ease:Back.easeOut},"-=1")
.addLabel("end");
    
// #LEADモーション
let tl2 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#lead", start: "top center",
    }
  });

tl2.addLabel("start")
.from('section#lead', {duration:1,opacity: 0,width:0,ease:Back.easeOut})
.from('section#lead dl', {duration:1.5,opacity: 0,y:"+=20",ease:Back.easeOut})
.from('section#lead .mov', {duration:1.5,opacity: 0,y:"+=20",ease:Back.easeOut},"-=0.5")
.addLabel("end");
    
// SEC1モーション
let tl3 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec1", start: "top center",
    }
  });

tl3.addLabel("start")
.from('section#sec1', {duration:3.5,opacity: 0,y:"+=100",ease:Back.easeOut})
.from('section#sec1 .copy', {duration:2,opacity: 0,scale:1.3,ease:Back.easeOut},"-=2")
.addLabel("end");


// SEC2モーション
let tl4 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec2", start: "top center",
    }
  });

tl4.addLabel("start")
.from('section#sec2 h2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#sec2 p.caption', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.addLabel("end");


// SEC2モーション1
let tl41 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec2 .refine1", start: "top center",
    }
  });

tl41.addLabel("start")
.from('section#sec2 .refine1', {duration:3,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#sec2 .refine1 .point1', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut},"-=2")
.from('section#sec2 .refine1 .point1 p', {duration:1,opacity: 0,ease:Back.easeOut},"-=1.5")
.from('section#sec2 .refine1 .point2', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut},"-=1")
.from('section#sec2 .refine1 .point2 p', {duration:1,opacity: 0,ease:Back.easeOut},"-=0.5")
.addLabel("end");

// SEC2モーション2
let tl42 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec2 .refine2", start: "top center",
    }
  });

tl42.addLabel("start")
.from('section#sec2 .refine2', {duration:3,opacity: 0,x:"+=40",ease:Back.easeOut})
.from('section#sec2 .refine2 .point1', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=2")
.from('section#sec2 .refine2 .point1 p', {duration:1,opacity: 0,ease:Back.easeOut},"-=1.5")
.from('section#sec2 .refine2 .point2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=1")
.from('section#sec2 .refine2 .point2 p', {duration:1,opacity: 0,ease:Back.easeOut},"-=0.5")
.addLabel("end");

// SEC2モーション3
let tl43 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec2 .refine3", start: "top center",
    }
  });

tl43.addLabel("start")
.from('section#sec2 .refine3', {duration:3,opacity: 0,scale:1.3,ease:Back.easeOut})
.from('section#sec2 .refine3 .point1', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=2")
.from('section#sec2 .refine3 .point1 p', {duration:1,opacity: 0,ease:Back.easeOut},"-=1.5")
.from('section#sec2 .refine3 .line', {duration:1,opacity: 0,scaleY:0.5,ease:Back.easeOut},"-=1")
.from('section#sec2 .refine3 .point2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")

.addLabel("end");


// SEC3モーション1
let tl5 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec3", start: "top center",
    }
  });

tl5.addLabel("start")
.from('section#sec3 h2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#sec3 p.caption', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 .img1', {duration:1,opacity: 0,x:"+=40",y:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 p.cap2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")


// SEC3モーション1
let tl6 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec3 .transform1", start: "top center",
    }
  });

tl6.addLabel("start")
.from('section#sec3 .transform1 .point1img', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut})
.from('section#sec3 .transform1 .point1', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 .transform1 .point2img', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 .transform1 .point2', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut},"-=0.5")


// SEC4モーション
let tl7 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec4", start: "top center",
    }
  });

tl7.addLabel("start")
.from('section#sec4 h2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#sec4 p.caption', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")

// SEC4モーション1
let tl71 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec4 .movable2pict.num1", start: "top center",
    }
  });

tl71.addLabel("start")
.from('section#sec4 .movable2pict.num1 .img1', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut})
.from('section#sec4 .movable2pict.num1 .img2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec4 .movable2pict.num1 p', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")


// SEC4モーション2
let tl72 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec4 .movable2pict.num2", start: "top center",
    }
  });

tl72.addLabel("start")
.from('section#sec4 .movable2pict.num2 .img1', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut})
.from('section#sec4 .movable2pict.num2 .img2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")

// SEC4モーション3
let tl73 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec4 .movable2pict.num3", start: "top center",
    }
  });

tl73.addLabel("start")
.from('section#sec4 .movable2pict.num3 .img1', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut})
.from('section#sec4 .movable2pict.num3 .img2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")


// WEAPONモーション1
let tl8 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#weapon.wp1", start: "top center",
    }
  });

tl8.addLabel("start")
.from('section#weapon.wp1 .img1main', {duration:2,opacity: 0,scale:1.5,ease:Back.easeOut})
.from('section#weapon.wp1 h3', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut},"-=1")
.from('section#weapon.wp1 .cap', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp1 .img2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp1 .img3', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp1 p.cap2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")


// WEAPONモーション2
let tl81 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#weapon.wp2", start: "top center",
    }
  });

tl81.addLabel("start")
.from('section#weapon.wp2 .img1main', {duration:2,opacity: 0,scale:1.5,ease:Back.easeOut})
.from('section#weapon.wp2 h3', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut},"-=1")
.from('section#weapon.wp2 .cap', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp2 .img3', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")

// WEAPONモーション3
let tl82 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#weapon.wp3", start: "top center",
    }
  });

tl82.addLabel("start")
.from('section#weapon.wp3 .img1main', {duration:2,opacity: 0,scale:1.5,ease:Back.easeOut})
.from('section#weapon.wp3 h3', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut},"-=1")
.from('section#weapon.wp3 .cap', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp3 .img3', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp3 .img2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")

// WEAPONモーション4
let tl83 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#weapon.wp4", start: "top center",
    }
  });

tl83.addLabel("start")
.from('section#weapon.wp4 .img1main', {duration:2,opacity: 0,scale:1.5,ease:Back.easeOut})
.from('section#weapon.wp4 h3', {duration:1,opacity: 0,x:"+=40",ease:Back.easeOut},"-=1")
.from('section#weapon.wp4 .cap', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp4 .img3', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#weapon.wp4 .img2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")




// PKGモーション
let tl10 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#pkg", start: "top center",
    }
  });

tl10.addLabel("start")
.from('section#pkg h2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#pkg .img1', {opacity: 0,duration:0.5,scale:1.3,stagger: 0.3},"-=0.5")


// INFOモーション
let tl11 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#info", start: "top center",
    }
  });

tl11.addLabel("start")
.from('section#info .copy', {duration:1.5,opacity: 0,scale:1.2,ease:Back.easeOut})
.from('section#info .pict1bk', {duration:1.5,opacity: 0,scale:1.2,ease:Back.easeOut},"-=1")
.from('section#info .pict1', {duration:0.1,opacity: 0})
.from('section#info .light', {duration:1,opacity: 0,scale:2,ease:Back.easeOut},"-=1")
.to('section#info .pict1bk', {duration:1,opacity: 0,})
.from('section#info .text1', {opacity: 0,duration:0.5,scale:1.3,stagger: 0.3},"-=0.5")
.from('section#info p', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})


  });