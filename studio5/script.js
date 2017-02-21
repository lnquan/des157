// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");



    var mymap = L.map('map').setView([38.543304, -121.754189], 19);

    L.tileLayer('https://api.mapbox.com/styles/v1/lnquan/ciz90morr001k2ss20yjnm8mz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 50,
        id: 'your.mapbox.project.id',
        accessToken: 'pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w'
    }).addTo(mymap);

    L.control.geocoder('mapzen-hEmECJd').addTo(mymap);

    var marker = L.marker([38.543304, -121.754189]).addTo(mymap);
});
