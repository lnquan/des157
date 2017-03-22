// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");


    mapboxgl.accessToken = 'pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/lnquan/cj031ahqh001v2rsb2qz83etk'
    });
    console.log("var map testing");
// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    }

}));
  console.log("location accuracy loaded");

  map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken

}));

});
