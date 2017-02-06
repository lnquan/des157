// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var backpack = document.getElementById('backpack');
    var bigH = document.getElementById('bigH');
    var bigPocket = document.getElementById("bigPocket");
    var bigp_h1 = document.getElementById("bigp_h1");


    //when you click on the big bag, the contents open
    bigH.addEventListener('click', function() {
        bigPocket.style.display = "block";
        topPocket.style.display = "none";
        bottomPocket.style.display = "none";
        rightPocket.style.display = "none";
        leftPocket.style.display = "none";
        
    });

    //when you click on the top pocket, the contents open
    topH.addEventListener('click', function() {
        topPocket.style.display = "block";
        bigPocket.style.display = "none";
        bottomPocket.style.display = "none";
        rightPocket.style.display = "none";
        leftPocket.style.display = "none";
    });

    //when you click on the bottom pocket, the contents open
    bottomH.addEventListener('click', function() {
        bottomPocket.style.display = "block";
        topPocket.style.display = "none";
        bigPocket.style.display = "none";
        rightPocket.style.display = "none";
        leftPocket.style.display = "none";
    });

    //when you click on the right pocket, the contents open
    rightH.addEventListener('click', function() {
        rightPocket.style.display = "block";
        bottomPocket.style.display = "none";
        topPocket.style.display = "none";
        bigPocket.style.display = "none";
        leftPocket.style.display = "none";
    });

    //when you click on the left pocket, the contents open
    leftH.addEventListener('click', function() {
        leftPocket.style.display = "block";
        rightPocket.style.display = "none";
        bottomPocket.style.display = "none";
        topPocket.style.display = "none";
        bigPocket.style.display = "none";
    });
    // if bigPocket is displayed than let hover work for highlight the objects and selection


});
