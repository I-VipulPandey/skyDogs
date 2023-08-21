function show() {
    gsap.registerPlugin(ScrollTrigger);
  
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  
}

function scrollTextAnimation() {
  var RightJayega = document.querySelectorAll(".right-jayega");
  var LeftJayega = document.querySelectorAll(".row-left");


  for (let i = 0; i < RightJayega.length; i++) {

    gsap.from(RightJayega[i], {

      scrollTrigger: {
        trigger: RightJayega[i],
        scroller: "#main",
        scrub: true,
      },
      x: '20vw',

    })
  }

  for (let i = 0; i < LeftJayega.length; i++) {

    gsap.from(LeftJayega[i], {

      scrollTrigger: {
        trigger: LeftJayega[i],
        scroller: "#main",
        scrub: true,
      },
      x: '-30vw',

    })

  }



}

function videoBlurAnimation() {

  gsap.to('.box', {
    scrollTrigger: {
      trigger: '.hero-video',
      scroller: "#main",
      start: '90% 10%',
      end: 'bottom 10%',
      scrub: true,
      // markers:true
    },
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  })
}
  
show();
scrollTextAnimation();
videoBlurAnimation();