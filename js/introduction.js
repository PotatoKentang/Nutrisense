var vid = document.getElementById("intro-vid");
vid.playbackRate = 2;

const tl = gsap.timeline();
tl.to(".video-wrap",{
    duration: 3
});
tl.to(".txt",{
    opacity: 1,
    duration: 1,
    stagger: .25
})