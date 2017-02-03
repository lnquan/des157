// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

  var backpack =document.getElementById('backpack');
  var bigH = document.getElementById('bigH');
  var bigPocket = document.getElementById('bigPocket');

  bigH.addEventListener('click', function(){
    bigPocket.style.display="block";
  });

  backpack.addEventListener('click', function(){
    bigPocket.style.display="none";
  });

});
