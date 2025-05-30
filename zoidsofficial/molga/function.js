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
    
const tl1 = gsap.timeline();
tl1.from(".bgFix", {duration:3,opacity: 0,x:300,ease:Back.easeOut})
    .from(".block2 .title", {duration:1,opacity: 0,scale:1.3,ease:Back.easeOut},"-=2")   

ScrollTrigger.create({
    animation: tl1,
    trigger: ".bgFix",
    start: "top center",
//markers: true, 
});
        
        
        let tl5 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".redBar",start: "top center", 
    }
  });

// add animations and labels to the timeline
tl5.addLabel("start")
.from(".redBar img", {duration:1,opacity:0,x:"-=60",ease:Back.easeOut})
.from(".redBar .p1", {duration:0.5,opacity:0,x:"-=60",ease:Back.easeOut},"-=0.5")
.from(".redBar .p2", {duration:0.5,opacity:0,x:"-=60",ease:Back.easeOut}) 
    .addLabel("end"); 

    
let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
    trigger: ".parseBlock", start: "top center",
    }
  });

// add animations and labels to the timeline
tl2.addLabel("start")
        .from(".parseBlock .title", {duration:2.5,opacity:0,scale:1.3, ease:Back.easeOut})
          .from(".parseBlock .img",  {duration:4,x:"+=300",y:"-=150",scale:0.7,opacity:0,ease:Back.easeOut },"-=2")

let tl3 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse1", start: "top center",
    }
  });

// add animations and labels to the timeline
tl3.addLabel("start")
          .from("#parse1 .title", {duration:1,opacity:0,x:"-=60",ease:Back.easeOut})
     .to("#parse1 .maskBox", {duration:1,height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse1 .lead", {duration:1,opacity:0,y:"-=60",ease:Back.easeOut})
             .from("#parse1 .sketchImg", {duration:1,opacity:0,y:"-=60",ease:Back.easeOut},"-=0.5")
            .addLabel("end");
        
        
let tl31 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse1 .imgBox p.text", start: "top center",
    }
  });

// add animations and labels to the timeline
tl31.addLabel("start")
          .from("#parse1 h2", {duration:1,opacity:0,x:"-=60",ease:Back.easeOut})
            .from("#parse1 .imgBox p.text", {duration:1,opacity:0,y:"-=60",ease:Back.easeOut},"-=0.5")
             .from("#parse1 .imgBox .img1", {duration:1,opacity:0,x:"+=60",y:"-=40",ease:Back.easeOut},"-=0.5")
            .addLabel("end");
         

let tl9 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse2", start: "top center", 
    }
  });

// add animations and labels to the timeline
tl9.addLabel("start")
          .from("#parse2 .title", {duration:1,opacity:0,x:"-=60",ease:Back.easeOut})
            .to("#parse2 .maskBox", {duration:1,height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse2 .lead", {duration:0.5,opacity:0,x:"-=60",ease:Back.easeOut},"-=0.5")
          .from("#parse2 .bg1",  {duration:2,x:"-=60",opacity:0,ease:Back.easeOut })
            .addLabel("end");
    
let tl10 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse2 .sl1", start: "top center+=120",
    }
  });

// add animations and labels to the timeline
tl10.addLabel("start")
.from('#parse2 .sl1 li', {duration:0.5,opacity: 0,y:"+=50",stagger: 0.3})
    .addLabel("end");
    
    
let tl11 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse3", start: "top center", 
    }
  });

// add animations and labels to the timeline
tl11.addLabel("start")
          .from("#parse3 .title", {duration:1,opacity:0,x:"-=60",ease:Back.easeOut})
            .to("#parse3 .maskBox", {duration:1,height:0,y:"+=400",ease:Back.easeOut})
            .from("#parse3 .lead", {duration:0.5,opacity:0,x:"-=60",ease:Back.easeOut},"-=0.5")
          .from("#parse3 .bg1",  {duration:2,x:"+=60",opacity:0,ease:Back.easeOut })
            .addLabel("end");
        
        
let tl12 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#parse3 .sl1", start: "top center+=120",
    }
  });

// add animations and labels to the timeline
tl12.addLabel("start")
.from('#parse3 .sl1 li', {duration:0.5,opacity: 0,y:"+=50",stagger: 0.3})
    .addLabel("end");
    
        
let spec = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#spec", start: "top center", 
    }
  });

// add animations and labels to the timeline
spec.addLabel("start")
    .from("#spec .title", {duration:1,opacity:0,scale:1.3,ease:Back.easeOut})
    .from("#spec .lead", {duration:0.5,opacity:0,x:"+=40",ease:Back.easeOut})
    .from("#spec .bg1", {duration:0.5,opacity:0,x:"+=40",ease:Back.easeOut})
    .from("#spec .bg2", {duration:0.5,opacity:0,x:"-=40",ease:Back.easeOut})
    .from("#spec .lead2", {duration:0.5,opacity:0,x:"+=40",ease:Back.easeOut})

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
        
        
let info1 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
    trigger: "#info", start: "top center",
    }
  });

// add animations and labels to the timeline
info1.addLabel("start")
        .from("#info .inner", {duration:2.5,opacity:0,scale:1.3, ease:Back.easeOut})
          .from("#info .img1",  {duration:3,x:"+=100",y:"-=50",scale:0.7,opacity:0,ease:Back.easeOut },"-=2")
          
          
     
    });

