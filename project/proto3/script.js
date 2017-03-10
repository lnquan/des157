// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {

    console.log("DOM fully loaded and parsed");


  help.addEventListener("click", function(){
    confirm("Do you need help?")
  })

  locate.addEventListener("click", function(){
    confirm("Share your location to your friends?")

})
var mymap = L.map('map').setView([38.543304, -121.754189], 18);

  L.tileLayer('https://api.mapbox.com/styles/v1/lnquan/cj031ahqh001v2rsb2qz83etk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w', {
      maxZoom: 50,
      id: 'your.mapbox.project.id',
      accessToken: 'pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w'
  }).addTo(mymap);

});
