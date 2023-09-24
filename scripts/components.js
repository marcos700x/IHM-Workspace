
fetch("./components/Navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("Navbar").innerHTML = data;
 });

 fetch("./components/Banner.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("Banner").innerHTML = data;
    var splide = new Splide( '.banner', {
      type: 'loop',
      drag: 'free',
      rewind: true,
      snap: true,
      autoplay: true,
    } );
  
    splide.mount(  );
 });


 