gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector(".Aim-container");
const sections = gsap.utils.toArray(".sec-items");
let x;
var a = document.getElementById("dot1");
var b = document.getElementById("dot2");
var c = document.getElementById("dot3");
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".Aim",
    pin: true,
    scrub: 2,
    snap: 1 / (sections.length - 1),
    end: "+=1000",
    // markers: true,
    // onUpdate: self => console.log("progress:", self.progress)
    onUpdate: self => {if (self.progress>0.25 && self.progress<0.75) {
      b.setAttribute("width", "30");
      b.setAttribute("height", "30");
    } else{
      b.setAttribute("width", "20");
      b.setAttribute("height", "20");
    }
    // else if(self.progress<0.5){
    //   b.setAttribute("width", "20");
    //   b.setAttribute("height", "20");
    // }
    if(self.progress<0.25 || self.progress==0){
      a.setAttribute("width", "30");
      a.setAttribute("height", "30");
    }else{
      a.setAttribute("width", "20");
      a.setAttribute("height", "20");
    }
    if(self.progress >0.75){
      c.setAttribute("width", "30");
      c.setAttribute("height", "30");
    }else{
      c.setAttribute("width", "20");
      c.setAttribute("height", "20");
    }
    // else if(self.progress<1){
    //   c.setAttribute("width", "20");
    //   c.setAttribute("height", "20");
    // }
  }
}});

class TypeWriter {

  constructor(headline, selector) {

      /*The text content*/
      this.heading = headline;
    
      /*The element with the text content*/
      this.elemSelector = selector;

      /*I'm showing the "cursor" using borderRight.*/
      gsap.set(".blinkCursorEnd", {
          borderRight: "2px solid black"

      })

      /*Set this width to the size of the startingCursor, to make it show.*/
      gsap.set(this.elemSelector, {
          width: "2px"
      });

      gsap.set(".blinkCursorStart", {
          
          borderRight: "2px solid black",
          opacity: 1

      });

      /*The starting cursor animation. When complete to the actual typeeffect.*/
      gsap.to(".blinkCursorStart", {
          borderRightColor: "transparent",
          duration: .5,
          /*Change repeat to make the initial animation shorter or longer*/
          repeat: 10,
          yoyo: true,
          ease: "steps(1)",
          onComplete: () => {
           
              this.makeTypeWritingEffect();



          
          }
      });     


  }

  makeTypeWritingEffect() {

    /*Hiding the first cursor*/
      gsap.to(".blinkCursorStart", {
        scrollTrigger: {
          trigger: "#futureBenefit"},
          opacity: 0
      })
      
    /*Showing the second cursor, making it run in an infinite loop*/
      gsap.to(".blinkCursorEnd", {
        scrollTrigger: {
          trigger: "#futureBenefit"},
          borderRightColor: "transparent",
          duration: .5,
          repeat: -1,
          yoyo: true,
          /*Change/remove this ease if you want the cursor to fade instead.*/
          ease: "steps(1)"
      });
      
      /*The actual text being animated.*/
      gsap.to(this.elemSelector, {
        scrollTrigger: {
          trigger: "#futureBenefit",
          // markers: true,
        },
          width: `${this.heading.length + .2}ch`,
          duration: 10,
          ease: `steps(${this.heading.length})`
      })

  }

};



window.addEventListener("load", function () {
let typeWriter = new TypeWriter(document.getElementById("my-text").textContent, document.getElementById("my-text"));
let typeWriter1 = new TypeWriter(document.getElementById("my-text1").textContent, document.getElementById("my-text1"));
let typeWriter2 = new TypeWriter(document.getElementById("my-text2").textContent, document.getElementById("my-text2"));
let typeWriter3 = new TypeWriter(document.getElementById("my-text3").textContent, document.getElementById("my-text3"));
let typeWriter4 = new TypeWriter(document.getElementById("my-text4").textContent, document.getElementById("my-text4"));
let typeWriter5 = new TypeWriter(document.getElementById("my-text5").textContent, document.getElementById("my-text5"));
let typeWriter6 = new TypeWriter(document.getElementById("my-text6").textContent, document.getElementById("my-text6"));

})


