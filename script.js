var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

    blur.style.left = dets.x - 130 +"px"
    blur.style.top = dets.y - 130 +"px"
})




gsap.to(".nav", {
    backgroundColor: "black", // Change to black
    height:"110px",
    duration: 0.5, // Animation duration (1 second)
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
      //  markers:true,//
        start:"top -10%",
        end:"top -11%",
        scrub:1  
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
      // markers:true,//
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }

})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us ,#about-us-in",
        scroller:"body",
       /* markers:true,*/
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from(".card",{
    y:50,
    opacity:0,
    duration:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:0
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",  
        scrub:2
      }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",  
        scrub:2
      }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",  
        scrub:2
      }
})
