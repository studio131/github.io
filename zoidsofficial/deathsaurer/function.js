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

      if (window.matchMedia("(max-width: 667px)").matches) {
        //画面横幅が667px以下のときのスマホの処理
    
const tl1 = gsap.timeline();
tl1.from(".bgFix", {duration:3,opacity: 0,x:200,ease:Back.easeOut})
               .from("#top .block2 .title",  {opacity:0,x:"+=100",scale:3,ease:Back.easeOut },"-=0.2")
ScrollTrigger.create({
    animation: tl1,
    trigger: ".bgFix",
    start: "top center-=50",
    endTrigger: ".block3",
    end: "top bottom",
    scrub: 1,
    pinSpacing: false,
});
    
let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
    trigger: ".parseBlock",scrub: 1, start: "top center", endTrigger:"#parse1",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl2.addLabel("start")
        .from(".parseBlock",  {x:"+=300",duartion:4,opacity:0,ease:Back.easeOut })
        .from(".parseBlock .title", {opacity:0,x:"-=60",ease:Back.easeOut},"-=0.2")
        .from('.parseBlock .icons', {opacity: 0,y:"+=50",stagger: 0.5})
        .addLabel("end");
    
let tl3 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse1",scrub: 1, start: "top center", endTrigger:".set1",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl3.addLabel("start")
          .from("#parse1",  {x:"+=300",duartion:4,opacity:0,ease:Back.easeOut })
          .from("#parse1 .title", {opacity:0,x:"-=60",ease:Back.easeOut})
     .to("#parse1 .maskBox", {height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse1 .lead", {opacity:0,y:"-=60",ease:Back.easeOut})
            .addLabel("end");
    
let tl4 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse1 .set1",scrub: 1, start: "top center", endTrigger:"#parse1 .set2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl4.addLabel("start")
    .from("#parse1 .set1 h2", {opacity:0,x:"-=60",ease:Back.easeOut})
    .to("#parse1 .set1 h2 .masks", {width:0,x:"+=400",stagger: 0.5,ease:Back.easeOut})
    .from("#parse1 .set1 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from("#parse1 .set1 dd img", {opacity:0,y:"-=60",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
let tl5 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".redBar",scrub: 1, start: "top center", endTrigger:".block3",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl5.addLabel("start")
.from(".redBar img", {opacity:0,x:"-=60",ease:Back.easeOut})
.from(".redBar .p1", {opacity:0,x:"-=60",ease:Back.easeOut})
.from(".redBar .p2", {opacity:0,x:"-=60",ease:Back.easeOut}) 
    .addLabel("end"); 

    
let tl6 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".set2",scrub: 1, start: "top center", endTrigger:"#detail",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl6.addLabel("start")
    .from(".set2 h2", {opacity:0,x:"-=60",ease:Back.easeOut})
    .to(".set2 h2 .masks", {width:0,x:"+=400",stagger: 0.5,ease:Back.easeOut})
    .from(".set2 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from(".set2Pict", {opacity:0,x:"+=100",ease:Back.easeOut})
    .addLabel("end");
    
    
    
let tl7 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#detail .bg",scrub: 1, start: "top center", endTrigger:"#detail2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl7.addLabel("start")
    .from("#detail h2", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from("#detail .bg", {opacity:0,y:"-=60",duration:3,ease:Back.easeOut},"-=0.5")
    .from("#detail li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut},"-=2.5")
    .addLabel("end");
    
let tl8 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#detail2",scrub: 1, start: "top center", endTrigger:"#parse2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl8.addLabel("start")
    .from("#detail2 li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut},"-=2")
    .from("#detail2 .bg", {opacity:0,y:"-=60",duration:3,ease:Back.easeOut})
    .addLabel("end");    
     
let tl9 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse2 .bg1",scrub: 1, start: "top center", endTrigger:"#parse2 dl.set1",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl9.addLabel("start")
          .from("#parse2 .bg1",  {duration:1,x:"+=300",y:"-=300",opacity:0,ease:Back.easeOut })
          .from("#parse2 .title", {opacity:0,x:"-=60",ease:Back.easeOut})
            .to("#parse2 .maskBox", {height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse2 .lead", {opacity:0,y:"-=60",ease:Back.easeOut})
            .addLabel("end");
    
let tl10 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse2 dl.set1 h2",scrub: 1, start: "top center", endTrigger:"#parse2 .cs1",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl10.addLabel("start")
    .from("#parse2 dl.set1 h2", {opacity:0,x:"-=60",ease:Back.easeOut})
    .to("#parse2 dl.set1 h2 .masks", {width:0,x:"+=400",stagger: 0.5,ease:Back.easeOut})
    .from("#parse2 dl.set1 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from("#parse2 dl.set1 dd img", {opacity:0,y:"-=60",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
    
let tl11 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".cs1",scrub: 1, start: "top center", endTrigger:"#spec2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl11.addLabel("start")
    .from(".cs1 h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".cs1 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from(".cs1 .bg2", {opacity:0,scale:2,ease:Back.easeOut})
        .from(".sl1 li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
let tl12 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#spec2",scrub: 1, start: "top center", endTrigger:".cs2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl12.addLabel("start")
    .from("#spec2 h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from("#spec2 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from(".sl2 li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
let tl13 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".cs2",scrub: 1, start: "top center", endTrigger:"#spec5",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl13.addLabel("start")
    .from(".cs2 h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".cs2 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from(".cs2 .bg3", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".sl3 li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
let tl14 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#spec5",scrub: 1, start: "top center", endTrigger:"#parse3",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl14.addLabel("start")
    .from("#spec5 h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from("#spec5 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from("#spec5 .bg4", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".sl4 li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
let tl15 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse3",scrub: 1, start: "top center-=200", endTrigger:"#repeat",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl15.addLabel("start")
          .from("#parse3 .title", {opacity:0,x:"-=60",ease:Back.easeOut})
            .to("#parse3 .maskBox", {height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse3 .lead", {opacity:0,y:"-=60",ease:Back.easeOut})
            .addLabel("end");
    
let mecha1 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#repeat",scrub: 1, start: "top center", endTrigger:".mecha2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha1.addLabel("start")
    .from("#repeat h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".mecha1 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha1 dd img", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
let mecha2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha2",scrub: 1, start: "top center", endTrigger:".mecha3",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha2.addLabel("start")
    .from(".mecha2 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha2 dd img", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
let mecha3 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha3",scrub: 1, start: "top center", endTrigger:".mecha4",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha3.addLabel("start")
    .from(".mecha3 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha3 dd img", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end"); 
    

let mecha4 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha4",scrub: 1, start: "top center", endTrigger:".mecha5",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha4.addLabel("start")
    .from(".mecha4 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha4 dd img", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end"); 
    
let mecha5 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha5",scrub: 1, start: "top center", endTrigger:".mecha6",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha5.addLabel("start")
    .from(".mecha5 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha5 dd img", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end"); 
    
let mecha6 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha6",scrub: 1, start: "top center", endTrigger:"#spec",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha5.addLabel("start")
    .from(".mecha6 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha6 dd img", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end"); 
    
    
let spec = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#spec",scrub: 1, start: "top center", endTrigger:"#pkg",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
spec.addLabel("start")
    .from("#spec .title", {opacity:0,scale:2,ease:Back.easeOut})
    .from("#spec .lead", {opacity:0,x:"+=40",ease:Back.easeOut})
    .from("#spec .bg1", {opacity:0,x:"+=40",ease:Back.easeOut})
    .from("#spec .bg2", {opacity:0,x:"-=40",ease:Back.easeOut})
    .addLabel("end"); 
    
    
let pkg = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#pkg", start: "top center",
    }
  });

// add animations and labels to the timeline
pkg.addLabel("start")
    .from("#pkg .line", {width:0,x:0,duration:0.1,})
    .addLabel("end"); 
          
          
      } else {    
 //PCの処理
    
const tl1 = gsap.timeline();
tl1.from(".bgFix", {opacity: 0,x:300,ease:Back.easeOut})

ScrollTrigger.create({
    animation: tl1,
    trigger: ".bgFix",
    start: "top -100",
    endTrigger: ".block3",
    end: "top bottom",
    pin: true,
    scrub: 1,
    pinSpacing: false,
});
    
let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
    trigger: ".parseBlock",scrub: 1, start: "top center", endTrigger:"#parse1",
    end: "top bottom-=100",
    }
  });

// add animations and labels to the timeline
tl2.addLabel("start")
          .from(".parseBlock",  {x:"+=300",duartion:4,opacity:0,ease:Back.easeOut })
          .from(".parseBlock .title", {opacity:0,x:"-=60",ease:Back.easeOut},"-=0.2")
            .from('.parseBlock .icons', {opacity: 0,y:"+=50",stagger: 0.5})
            .addLabel("end");
    
let tl3 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse1",scrub: 1, start: "top center", endTrigger:".set1",
    end: "top bottom-=100",
    }
  });

// add animations and labels to the timeline
tl3.addLabel("start")
          .from("#parse1",  {x:"+=300",duartion:4,opacity:0,ease:Back.easeOut })
          .from("#parse1 .title", {opacity:0,x:"-=60",ease:Back.easeOut})
     .to("#parse1 .maskBox", {height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse1 .lead", {opacity:0,y:"-=60",ease:Back.easeOut},"-=0.5")
            .addLabel("end");
    
let tl4 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse1 .set1",scrub: 1, start: "top center", endTrigger:"#parse1 .set2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl4.addLabel("start")
    .from("#parse1 .set1 h2", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from("#parse1 .set1 .text", {opacity:0,y:"-=60",ease:Back.easeOut},"-=0.5")
    .from("#parse1 .set1 dd img", {opacity:0,y:"-=60",stagger: 0.1,ease:Back.easeOut},"-=0.5")
    .addLabel("end");
    
let tl5 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".redBar",scrub: 1, start: "top center", endTrigger:".block3",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl5.addLabel("start")
.from(".redBar img", {opacity:0,x:"-=60",ease:Back.easeOut})
.from(".redBar .p1", {opacity:0,x:"-=60",ease:Back.easeOut})
.from(".redBar .p2", {opacity:0,x:"-=60",ease:Back.easeOut}) 
    .addLabel("end"); 

    
let tl6 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".set2",scrub: 1, start: "top center", endTrigger:"#detail",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl6.addLabel("start")
    .from(".set2 h2", {opacity:0,x:"-=60",ease:Back.easeOut})
    .to(".set2 h2 .masks", {width:0,x:"+=400",stagger: 0.5,ease:Back.easeOut})
    .from(".set2 .text", {opacity:0,y:"-=60",ease:Back.easeOut},"-=1.5")
    .from(".set2Pict", {opacity:0,x:"+=100",ease:Back.easeOut})
    .addLabel("end");
    
    
    
let tl7 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#detail .bg",scrub: 1, start: "top center", endTrigger:"#detail2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl7.addLabel("start")
    .from("#detail h2", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from("#detail .bg", {opacity:0,y:"-=60",duration:3,ease:Back.easeOut},"-=0.5")
    .from("#detail li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut},"-=2.5")
    .addLabel("end");
    
let tl8 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#detail2 .bg",scrub: 1, start: "top center", endTrigger:"#parse2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl8.addLabel("start")
    .from("#detail2 .bg", {opacity:0,y:"-=60",duration:3,ease:Back.easeOut})
    .from("#detail2 li", {opacity:0,x:"+=40",stagger: 0.5,ease:Back.easeOut},"-=2")
    .addLabel("end");    
     
let tl9 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse2",scrub: 1, start: "top center", endTrigger:"#parse2 .set1",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl9.addLabel("start")
          .from("#parse2 .bg1",  {duration:1,x:"+=300",y:"-=300",opacity:0,ease:Back.easeOut })
          .from("#parse2 .title", {opacity:0,x:"-=60",ease:Back.easeOut})
            .to("#parse2 .maskBox", {height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse2 .lead", {opacity:0,y:"-=60",ease:Back.easeOut})
            .addLabel("end");
    
let tl10 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse2 .set1",scrub: 1, start: "top center", endTrigger:"#parse1 .cs1",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl10.addLabel("start")
    .from("#parse2 .set1 h2", {opacity:0,x:"-=60",ease:Back.easeOut})
    .to("#parse2 .set1 h2 .masks", {width:0,x:"+=400",stagger: 0.5,ease:Back.easeOut})
    .from("#parse2 .set1 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from("#parse2 .set1 dd img", {opacity:0,y:"-=60",stagger: 0.5,ease:Back.easeOut})
    .addLabel("end");
    
    
let tl11 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".cs1",scrub: 1, start: "top center", endTrigger:"#spec2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl11.addLabel("start")
    .from(".cs1 h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".cs1 .bg2", {opacity:0,scale:2,ease:Back.easeOut},"-=0.2")
    .from(".cs1 .text", {opacity:0,y:"-=60",ease:Back.easeOut},"-=0.2")
    .from(".sl1", {opacity:0,y:"-=60",ease:Back.easeOut})
    .addLabel("end");
    
let tl12 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#spec2",scrub: 1, start: "top center", endTrigger:".cs2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl12.addLabel("start")
    .from("#spec2 h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from("#spec2 .text", {opacity:0,y:"-=60",ease:Back.easeOut},"-=0.3")
    .from(".sl2", {opacity:0,y:"-=60",ease:Back.easeOut},"-=0.3")
    .addLabel("end");
    
let tl13 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".cs2",scrub: 1, start: "top center", endTrigger:"#spec5",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl13.addLabel("start")
    .from(".cs2 h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".cs2 .bg3", {opacity:0,scale:2,ease:Back.easeOut},"-=0.2")
    .from(".cs2 .text", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from(".sl3", {opacity:0,y:"-=60",ease:Back.easeOut})
    .addLabel("end");
    
let tl14 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#spec5",scrub: 1, start: "top center", endTrigger:"#parse3",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl14.addLabel("start")
    .from("#spec5", {opacity:0,y:"-=60",ease:Back.easeOut})
    .from(".sl4", {opacity:0,y:"-=60",ease:Back.easeOut})
    .addLabel("end");
    
let tl15 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse3",scrub: 1, start: "top center-=200", endTrigger:"#repeat",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
tl15.addLabel("start")
          .from("#parse3 .title", {opacity:0,x:"-=60",ease:Back.easeOut})
            .to("#parse3 .maskBox", {height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse3 .lead", {opacity:0,y:"-=60",ease:Back.easeOut},"-=0.5")
            .addLabel("end");
    
let mecha1 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#repeat",scrub: 1, start: "top center", endTrigger:".mecha2",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha1.addLabel("start")
    .from("#repeat h2", {opacity:0,scale:2,ease:Back.easeOut})
    .from(".mecha1 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha1 dd", {opacity:0,x:"+=40",ease:Back.easeOut})
    .addLabel("end");
    
let mecha2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha2",scrub: 1, start: "top center", endTrigger:".mecha3",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha2.addLabel("start")
    .from(".mecha2 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha2 dd", {opacity:0,x:"+=40",ease:Back.easeOut})
    .addLabel("end");
    
let mecha3 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha3",scrub: 1, start: "top center", endTrigger:".mecha4",
    end: "top bottom-=300",
    }
  });

// add animations and labels to the timeline
mecha3.addLabel("start")
    .from(".mecha3 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha3 dd", {opacity:0,x:"+=40",ease:Back.easeOut})
    .addLabel("end"); 
    

let mecha4 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha4",scrub: 1, start: "top center", endTrigger:".mecha5",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha4.addLabel("start")
    .from(".mecha4 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha4 dd", {opacity:0,x:"+=40",ease:Back.easeOut})
    .addLabel("end"); 
    
let mecha5 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha5",scrub: 1, start: "top center", endTrigger:".mecha6",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha5.addLabel("start")
    .from(".mecha5 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha5 dd", {opacity:0,x:"+=40",ease:Back.easeOut})
    .addLabel("end"); 
    
let mecha6 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".mecha6",scrub: 1, start: "top center", endTrigger:"#spec",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
mecha5.addLabel("start")
    .from(".mecha6 dt", {opacity:0,x:"-=60",ease:Back.easeOut})
    .from(".mecha6 dd", {opacity:0,x:"+=40",ease:Back.easeOut})
    .addLabel("end"); 
    
    
let spec = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#spec",scrub: 1, start: "top center", endTrigger:"#pkg",
    end: "top bottom",
    }
  });

// add animations and labels to the timeline
spec.addLabel("start")
    .from("#spec .title", {opacity:0,scale:2,ease:Back.easeOut})
    .from("#spec .bg1", {opacity:0,x:"+=40",ease:Back.easeOut})
    .from("#spec .bg2", {opacity:0,x:"-=40",ease:Back.easeOut})
    .from("#spec .lead", {opacity:0,x:"+=40",ease:Back.easeOut})
    .addLabel("end"); 
    
    
let pkg = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#pkg", start: "top center",
    }
  });

// add animations and labels to the timeline
pkg.addLabel("start")
    .from("#pkg .line", {width:0,x:0,duration:0.1,})
    .addLabel("end"); 
          
          
      }
    
    });

