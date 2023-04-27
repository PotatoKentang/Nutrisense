loadphone = () => 
{
    gsap.to('.phone',{
        scrollTrigger: {
          trigger: '.nutrisense-explanation',
        //   markers: true,
        },
        delay:2,
        x:150,
      })
}

var loadphones = false;

window.addEventListener("scroll", function()
  {
      var reveal = document.querySelector(".phone")
      var windowheight = window.innerHeight;
      var revealtop = reveal.getBoundingClientRect().top;
      var revealpoint = 100;
      if(revealtop < windowheight - revealpoint && loadphones == false)
      {
        loadphones = true;
        loadphone();
      }
  })