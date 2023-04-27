loadchart = () => 
{
    $(function(){
        $('.bars li .bar').each(function(key, bar){
          var percentage = $(this).data('percentage');
          $(this).animate({
            'height' : (percentage*100/1500) + '%'
          },100);
        });
      });
}

var load = false;

window.addEventListener("scroll", function()
  {
      var reveal = document.querySelector(".chart")
      var windowheight = window.innerHeight;
      var revealtop = reveal.getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop < windowheight - revealpoint && load == false)
      {
        load = true;
        loadchart();
      }
  })