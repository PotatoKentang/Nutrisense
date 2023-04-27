gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const SEGMENTS = 50
let animationTrigger
const timelineCards = gsap.utils.toArray('.timeline-card')

timelineCards[0].onload = () =>
{
  render(2)
  console.log('loaded')
}

const render = (index) => {
  gsap.set(timelineCards, {
    opacity: 0,
    display: 'none',
  });
  gsap.to(timelineCards[index], {
    opacity: 1,
    display: 'block',
    duration: 0.5,
    y: 15,
    ease: 'elastic',
    scrollTrigger: {
      containerAnimation: animationTrigger,
    }
  })
}
let state = -1

const revealTimeline = (checkPoint) => {
  if (checkPoint == state)
  {
    return;
  };
  render(checkPoint)
  state = checkPoint
}

animationTrigger = gsap.to("#rect", {
  width: "100%",
  height: "100%",
  ease: 'none',
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  },
  scrollTrigger: {
    trigger: "#timeline",
    start: "top top",
    end: "bottom+=5000",
    scrub: 3,
    pin: true,
    // markers: true,
    onUpdate: (self) => {
      const progress = Math.round((self.progress * SEGMENTS))
      const checkPoints = [0, 15, 25,38,48].map((checkPoint,index) => checkPoint==progress?revealTimeline(index):null)
    },
  },
});
