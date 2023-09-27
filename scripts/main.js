var splide = new Splide( '.banner', {
    type: 'loop',
    drag: 'free',
    rewind: true,
    snap: true,
    autoplay: true,
  } );

  splide.mount(  );

//Animacion en scroll para el navbar
var LastScroll = document.documentElement.scrollTop || document.body.scrollTop;
window.onscroll = function (){
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(LastScroll < scroll){
    document.querySelector("nav").style.transform = "translateY(-100%)"
  }else{
    document.querySelector("nav").style.transform = "translateY(0)"
  }
  LastScroll = scroll
}

