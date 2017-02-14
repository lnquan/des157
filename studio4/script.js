// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");


    function valTimer() {

        //placed dates inside the function so it also reloads on setInterval
        var today = new Date(); // today's date
        var val = new Date("Feburary 14, 2018 00:00:00"); // months are 0-11

        //set of vars to establish how many milisecs are in each
        var sec = 1000;
        var min = sec * 60;
        var hr = min * 60;
        var day = hr * 24;


        //math formulas to calculate time
        var timeDiff = Math.abs(today.getTime() - val.getTime());

        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

        var diffHrs = Math.floor((timeDiff - (diffDays * day)) / hr);

        var diffMins = Math.floor((timeDiff - (diffDays * day) - (diffHrs * hr)) / min);

        var diffSecs = Math.floor((timeDiff - (diffDays * day) - (diffHrs * hr) - (diffMins * min)) / sec);

        //display time in HTML
        document.getElementById("time").innerHTML = diffDays + " days " + diffHrs + " hours " + diffMins + " minutes " + diffSecs + " seconds ";

    }

    //constantly refreshes valTimer so it goes by seconds

    setInterval(valTimer, 1000);

    //=================================================================
    //Section of JS for tooltips
    var tipTimer;
    val.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showSalt, 1500);
    })

    val.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        single.style.opacity = 0;
    })

    function showSalt() {
        console.log('showing salt');
        single.style.opacity = 1;
        single.style.transition = 'all .5s';
    }

    s1.addEventListener('mouseover', function() {
        tipTimer = setTimeout(helpful, 1500);
    })

    s1.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        buttonTip.style.opacity = 0;
    })

    s2.addEventListener('mouseover', function() {
        tipTimer = setTimeout(helpful, 1500);
    })

    s2.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        buttonTip.style.opacity = 0;
    })

    s3.addEventListener('mouseover', function() {
        tipTimer = setTimeout(helpful, 1500);
    })

    s3.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        buttonTip.style.opacity = 0;
    })

    s4.addEventListener('mouseover', function() {
        tipTimer = setTimeout(helpful, 1500);
    })

    s4.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        buttonTip.style.opacity = 0;
    })

    function helpful() {
        console.log('actually helpful');
        buttonTip.style.opacity = 1;
        buttonTip.style.transition = 'all .5s';
    }

    sect1.addEventListener('mouseover', function() {
        tipTimer = setTimeout(openT, 1500);
    })

    sect1.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        opened.style.opacity = 0;
    })

    sect2.addEventListener('mouseover', function() {
        tipTimer = setTimeout(openT, 1500);
    })

    sect2.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        opened.style.opacity = 0;
    })

    sect3.addEventListener('mouseover', function() {
        tipTimer = setTimeout(openT, 1500);
    })

    sect3.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        opened.style.opacity = 0;
    })

    sect4.addEventListener('mouseover', function() {
        tipTimer = setTimeout(openT, 1500);
    })

    sect4.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        opened.style.opacity = 0;
    })

    function openT() {
        console.log('actually helpful');
        opened.style.opacity = 1;
        opened.style.transition = 'all .5s';
    }

    time.addEventListener('mouseover', function() {
        tipTimer = setTimeout(sass, 1500);
    })

    time.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        count.style.opacity = 0;
    })

    function sass() {
        console.log('sass');
        count.style.opacity = 1;
        count.style.transition = 'all .5s';
    }

    custom.addEventListener('mouseover', function() {
        tipTimer = setTimeout(hehe, 1500);
    })

    custom.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        haha.style.opacity = 0;
    })

    function hehe() {
        console.log('haha');
        haha.style.opacity = 1;
        haha.style.transition = 'all .5s';
    }

    portal.addEventListener('mouseover', function() {
        tipTimer = setTimeout(bbs, 1500);
    })

    portal.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        bye.style.opacity = 0;
    })

    function bbs() {
        console.log('haha');
        bye.style.opacity = 1;
        bye.style.transition = 'all .5s';
    }

    hand.addEventListener('mouseover', function() {
        tipTimer = setTimeout(diys, 1500);
    })

    hand.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        diy.style.opacity = 0;
    })

    function diys() {
        console.log('haha');
        diy.style.opacity = 1;
        diy.style.transition = 'all .5s';
    }

    // ==================================================================
    //Section for JS to open close part of the time

    function close() {
        sect1p.style.display = "none";
        sect2p.style.display = "none";
        sect3p.style.display = "none";
        sect4p.style.display = "none";
    }

    s1.addEventListener('click', function() {
        s1a.style.display = "block";
        sect1.style.display = "block";
        s2a.style.display = "none";
        sect2.style.display = "none";
        s3a.style.display = "none";
        sect3.style.display = "none";
        s4a.style.display = "none";
        sect4.style.display = "none";
        close();
        sect1.addEventListener('click', function() {
            sect1p.style.display = "block";
            if (sect1p.style.display = "block") {
                sect1.addEventListener('click', function() {
                    sect1p.style.display = "none";
                })
            }
        })

        if (s1a.style.display = "block") {
            s1a.addEventListener('click', function() {
                s1a.style.display = "none";
                sect1.style.display = "none";
                sect1p.style.dispaly = "none";
            })
        }
    })

    s2.addEventListener('click', function() {
        s2a.style.display = "block";
        sect2.style.display = "block";
        s1a.style.display = "none";
        sect1.style.display = "none";
        s3a.style.display = "none";
        sect3.style.display = "none";
        s4a.style.display = "none";
        sect4.style.display = "none";
        close();
        sect2.addEventListener('click', function() {
            sect2p.style.display = "block";
            if (sect2p.style.display = "block") {
                sect2.addEventListener('click', function() {
                    sect2p.style.display = "none";
                })
            }
        })

        if (s2a.style.display = "block") {
            s2a.addEventListener('click', function() {
                s2a.style.display = "none";
                sect2.style.display = "none";
                sect2p.style.dispaly = "none";
            })
        }
    })

    s3.addEventListener('click', function() {
        s3a.style.display = "block";
        sect3.style.display = "block";
        s1a.style.display = "none";
        sect1.style.display = "none";
        s2a.style.display = "none";
        sect2.style.display = "none";
        s4a.style.display = "none";
        sect4.style.display = "none";
        close();
        sect3.addEventListener('click', function() {
            sect3p.style.display = "block";
            if (sect3p.style.display = "block") {
                sect3.addEventListener('click', function() {
                    sect3p.style.display = "none";
                })
            }
        })

        if (s3a.style.display = "block") {
            s3a.addEventListener('click', function() {
                s3a.style.display = "none";
                sect3.style.display = "none";
                sect3p.style.dispaly = "none";
            })
        }
    })

    s4.addEventListener('click', function() {
        s4a.style.display = "block";
        sect4.style.display = "block";
        s1a.style.display = "none";
        sect1.style.display = "none";
        s2a.style.display = "none";
        sect2.style.display = "none";
        s3a.style.display = "none";
        sect3.style.display = "none";
        close();
        sect4.addEventListener('click', function() {
            sect4p.style.display = "block";
            if (sect4p.style.display = "block") {
                sect4.addEventListener('click', function() {
                    sect4p.style.display = "none";
                })
            }
        })

        if (s4a.style.display = "block") {
            s4a.addEventListener('click', function() {
                s4a.style.display = "none";
                sect4.style.display = "none";
                sect4p.style.dispaly = "none";
            })
        }
    })
});
