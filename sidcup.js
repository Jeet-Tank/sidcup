var csr = document.getElementById("cursor");
var blur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", function(dets){
    csr.style.top = dets.y +20.5 +"px"
    csr.style.left = dets.x +"px"
    blur.style.top = dets.y- 200 +"px"
    blur.style.left = dets.x- 200 +"px"
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        csr.style.scale = 3
        csr.style.border = "1px solid #fff"
        csr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function(){
        csr.style.scale = 1
        csr.style.border = "0px solid #95c11e"
        csr.style.backgroundColor = "#95c11e"
    });
})

let elemall = document.querySelectorAll(".elem");
elemall.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        csr.style.scale = 3
        csr.style.border = "1px solid #fff"
        csr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function(){
        csr.style.scale = 1
        csr.style.border = "0px solid #95c11e"
        csr.style.backgroundColor = "#95c11e"
    });
})

let arw = document.querySelector("#arrow");
arw.addEventListener("mouseenter", function(){
    csr.style.scale = 3
    csr.style.border = "1px solid #fff"
    csr.style.backgroundColor = "transparent"
});
arw.addEventListener("mouseleave", function(){
    csr.style.scale = 1
    csr.style.border = "0px solid #95c11e"
    csr.style.backgroundColor = "#95c11e"
});

gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -65%",
        scrub:2,
    }
})
gsap.from("#about-us img, #about-us-in",{
    y:80,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
      //  markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
       // markers:true,
        start:"top 65%",
        end:"top 60%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon2",{
    y:20,
    x:20,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
      //  markers:true,
        scrub:3
    }
})

gsap.from("#quote",{
    y:70,
    duration:0.6,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        start:"top 70%",
        end:"top 65%",
      //  markers:true,
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scoller:"body",
        start:"top 85%",
        end:"top 70%",
        //markers:true,
        scrub:2
    }
})