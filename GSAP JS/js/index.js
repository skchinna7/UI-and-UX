//animation powered by GSAP JS
//http:www.greensock.com/gsap-js/


$("h2").each(function(index, element){
  var animation = TweenMax.to(this, 0.2, {
    className: '+= superShadow',
    marginTop: '-10px',
    marginBottom: '10px',
    ease: Power1.easeIn,
    paused:true
  });
  element.animation = animation;
})


$('h2').hover(function(){
 this.animation.play()
}, function(){
 this.animation.reverse();
})



