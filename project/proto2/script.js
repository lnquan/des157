// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {

  help.addEventListener("click", function(){
    confirm("Do you need help?")
  })

  locate.addEventListener("click", function(){
    confirm("Share your location to your friends?")
  })
    console.log("DOM fully loaded and parsed");

    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;

    var getLocation = function() {
      if (typeof navigator !== "undefined" && typeof navigator.geolocation !== "undefined") {
        log("Asking user to get their location");
        navigator.geolocation.getCurrentPosition(geolocationCallback, errorHandler);
      } else {
        log("Your browser does not support the HTML5 Geolocation API, so this demo will not work.")
      }
    };

    var mymap = L.map('map').setView([latitude, longitude], 19);
console.log(latitude, longitude);
    L.tileLayer('https://api.mapbox.com/styles/v1/lnquan/ciz90morr001k2ss20yjnm8mz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 50,
        id: 'your.mapbox.project.id',
        accessToken: 'pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w'
    }).addTo(mymap);

    L.control.geocoder('mapzen-hEmECJd').addTo(mymap);

    var marker = L.marker([latitude, longitude]).addTo(mymap);

});
