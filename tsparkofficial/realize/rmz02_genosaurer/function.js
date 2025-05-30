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

// TOPモーション
let tl1 = gsap.timeline({
    scrollTrigger: {
    trigger: "#top", start: "top center",
    }
  });

tl1.addLabel("start")
.from('#top', {duration:3,opacity: 0,y:"+=100",ease:Back.easeOut})
.from('#top .copy', {duration:1.5,opacity: 0,y:"+=20",ease:Back.easeOut},"-=2")
.from('#top .title', {duration:1.5,opacity: 0,x:"-=40",ease:Back.easeOut},"-=1")
.from('#top .pict1', {duration:1.5,opacity: 0,x:"+=40",ease:Back.easeOut},"-=1")
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
.from('section#sec1 h2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=2.5")
.from('section#sec1 .copy', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=2")
.from('section#sec1 .title', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=1.5")
.from('section#sec1 .caption', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=1")
.from('section#sec1 .capStrong', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.7")
.from('section#sec1 li', {opacity: 0,duration:0.4,y:"+=30",scale:1.5,stagger: 0.3},"-=0.5")
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
.from('section#sec2 ul', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.addLabel("end");


// SEC3モーション1
let tl5 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec3", start: "top center",
    }
  });

tl5.addLabel("start")
.from('section#sec3 h2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#sec3 dl.num1', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 dl.points.p1', {opacity: 0,duration:0.5,x:"-=40",stagger: 0.3},"-=0.5")

// SEC3モーション1
let tl6 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec3 dl.nums.num2", start: "top center",
    }
  });

tl6.addLabel("start")
.from('section#sec3 dl.num2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 ul.point2 li', {opacity: 0,duration:0.5,x:"-=40",stagger: 0.3},"-=0.5")

// SEC3モーション2
let tl7 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec3 dl.nums.num3", start: "top center",
    }
  });

tl7.addLabel("start")
.from('section#sec3 dl.nums.num3', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 dl.points.num3', {opacity: 0,duration:0.5,x:"-=40",stagger: 0.3},"-=0.5")


// SEC3モーション3
let tl8 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#sec3 dl.nums.num4", start: "top center",
    }
  });

tl8.addLabel("start")
.from('section#sec3 dl.nums.num4', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut},"-=0.5")
.from('section#sec3 .options div', {opacity: 0,duration:0.5,scale:1.3,stagger: 0.3},"-=0.5")

// SPECモーション
let tl9 = gsap.timeline({
    scrollTrigger: {
    trigger: "section#spec", start: "top center",
    }
  });

tl9.addLabel("start")
.from('section#spec h2', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#spec p.heading', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})
.from('section#spec .img', {opacity: 0,duration:0.5,scale:1.3,stagger: 0.3},"-=0.5")

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
.from('section#info .img1', {opacity: 0,duration:0.5,scale:1.3,stagger: 0.3})
.from('section#info .text', {opacity: 0,duration:0.5,scale:1.3,stagger: 0.3})
.from('section#info p', {duration:1,opacity: 0,x:"-=40",ease:Back.easeOut})

.addLabel("end");