
// Push your limits, push your code.
// Keep coding, keep pushing.
// Grind until you find.
// Fake it 'til you make it.
// Endure to ensure success.

// Nuray - Turkish name meaning "radiant moonlight," symbolizing spiritual illumination.
// Nuryn - Arabic name meaning "radiant" or "bright," symbolizing spiritual enlightenment.

var cursor = document.querySelector(".cursor");
var cursorblur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function(dets){
    // dets is  an object containing the x and y coordinates of mouse
    // like mouse kahan py py move ho rha 
    cursor.style.left = dets.x + 10 + "px"
    cursor.style.top = dets.y + "px"
    cursorblur.style.left = dets.x - 150 +"px"
    cursorblur.style.top = dets.y - 160 + "px"
// cursor blur mn value is lie minus ki hai q k uska top-left corner ursor k sath move kr rha tha
})

var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function(elem){
    // elem current values ko lainy k lie 
    // console.log(h4all)
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale= 2
        cursor.style.border = "1px solid"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})


// This is animation is for the navigation bar
gsap.to(".nav", {
    backgroundColor : "#000", //Properties should be in CamelCase mn
    duration: 0.5,
    height:"90px",
    scrollTrigger:{
        Trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end :"top -11%",
        scrub:1 //jhtky sy jo clr change hota usko rokta and smooth way mn change krta
    }
})

// page to scrolling effect
gsap.to(".main", {
    backgroundColor:"#000",
    scrollTrigger:{
        scroller:"body",
        Trigger:".main",
        start:"top -30%",
        end:"top -80%",
        scrub:1
    }
})

gsap.from(".about-us img, .about-us-in", {
    y:50, // main property through which elements will annimate in upward direction
    opacity:0,
    duration:1,
    // stagger:4 ,//through this elements will animate one-by-one
    scrollTrigger:{
        scroller:"body",
        trigger:".about-us",
        start:"top 60%",
        end:"top 58%",
        scrub:3 // isko lgany sy har bar animate hota div
    }
})

gsap.from(".card", {
    scale:0.8,
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".card",
        strat:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        scroller:"body",
        trigger:"#colon1",
        scrub:4,
        start:"top 55%",
        end:"top 45%"
    }
})

gsap.to("#colon2", {
    y:-70,
    x:-70,
    scrollTrigger:{
        scroller:"body",
        trigger:"#colon1",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from(".page4 h1", {
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:".page4",
        start:"top 80%",
        end:"top 75%",
        scrub:2
    }
})