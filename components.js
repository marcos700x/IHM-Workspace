fetch("./components/Navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("Navbar").innerHTML = data;
 });


 