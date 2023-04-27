var vid = document.getElementById("intro-vid");
vid.playbackRate = 2;

const tl = gsap.timeline();
tl.to(".txt",{
    opacity: 1,
    delay: 15,
    duration: 2,
    stagger: .25
})