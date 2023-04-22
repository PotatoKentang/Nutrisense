// gsap.registerPlugin(ScrollTrigger);
// let tl = gsap.timeline()



// const video1 = {
//   max_frames: 70,
//   totalTime: 3,
//   frames: [],
//   currentFrame: 0,
//   getFrame: (index) => `./assets/car/ezgif-frame-${
//     index
//     .toString()
//     .padStart(3,"0")
//   }.jpg`
// }

// function animateOnScroll(elementID, videoInfo) {
//   const canvas = document.getElementById(elementID)
//   const ctx = canvas.getContext('2d')
//   canvas.height = window.innerHeight
//   canvas.width = window.innerWidth
//   for (let i = 1; i < videoInfo.max_frames; i++) {
//     const img = new Image()
//     img.src = videoInfo.getFrame(i)
//     videoInfo.frames.push(img)
//   }

//   videoInfo.frames[0].onload = () => {
//     ctx.drawImage(videoInfo.frames[0], 0, 0);
//     console.log('loaded')
//   };
//   let i = 0
//   function render() {
//     ctx.drawImage(videoInfo.frames[videoInfo.currentFrame], 0, 0);
//     console.log(videoInfo.currentFrame)
//     console.log('render on scroll')
//   }

//   //gsap scroll and render image
//   gsap.to(videoInfo, {
//     currentFrame: videoInfo.max_frames,
//     snap: 'currentFrame',
//     ease: 'none', //bener
//     scrollTrigger: {
//       markers: true,  //bener
//       scrub: 2, //bener
//       trigger: canvas, //bener
//       start: 'top', //bener
//       pin: true, //bener
//       end: `bottom+=${videoInfo.max_frames*videoInfo.totalTime}`,//bener
//     },
//     onUpdate: render,
//   })
// }



// animateOnScroll('car-canvas', video1)
// animateOnScroll('car-canvas2', video1)




// const sectionItem = gsap.utils.toArray('.containerWidth section')


// gsap.to(sectionItem, {
//   xPercent: -100 * (sectionItem.length - 1),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.containerWidth',
//     start: 'y-=200',
//     end: 'x+=3000',
//     scrub: 3,
//     pin: true,
//     markers: true,
//   }
// })

// const mask = $('.mask')

// gsap.to(mask, {
//   width: '100%',
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.wrapper',
//     start: "top left",
//     scrub: 1,
//     markers: true,
//   }
// })