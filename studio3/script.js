// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
            console.log("DOM fully loaded and parsed");

            var backpack = document.getElementById('backpack');
            var bigH = document.getElementById('bigH');
            var bigPocket = document.getElementById("bigPocket");
            // var bigp_h = document.getElementById("bigp_h");



            //when you click on the big bag, the contents open
            bigH.addEventListener('click', function() {
                        if (document.getElementById('rightPocket').style.display = "block") {
                            rp_h.style.display = "none";
                          }
                            if (document.getElementById('leftPocket').style.display = "block") {
                                lp_h.style.display = "none";
                              }
                              if (document.getElementById('bottomPocket').style.display = "block") {
                                  botp_h.style.display = "none";
                              }

                                if (document.getElementById('topPocket').style.display = "block") {
                                    topp_h.style.display = "none";
                                }

                                bigPocket.style.display = "block";
                                if (document.getElementById('bigPocket').style.display = "block") {
                                    bigp_h.style.display = "block";
                                    bigp_h1.addEventListener('mouseover', function() {
                                        bigp_h1.style.opacity = 1;
                                    })
                                    bigp_h1.addEventListener('mouseout', function() {
                                        bigp_h1.style.opacity = 0;
                                    })

                                    bigp_h2.addEventListener('mouseover', function() {
                                        bigp_h2.style.opacity = 1;
                                    })
                                    bigp_h2.addEventListener('mouseout', function() {
                                        bigp_h2.style.opacity = 0;
                                    })

                                    bigp_h3.addEventListener('mouseover', function() {
                                        bigp_h3.style.opacity = 1;
                                    })
                                    bigp_h3.addEventListener('mouseout', function() {
                                        bigp_h3.style.opacity = 0;
                                    })

                                    bigp_h4.addEventListener('mouseover', function() {
                                        bigp_h4.style.opacity = 1;
                                    })
                                    bigp_h4.addEventListener('mouseout', function() {
                                        bigp_h4.style.opacity = 0;
                                    })

                                    bigp_h5.addEventListener('mouseover', function() {
                                        bigp_h5.style.opacity = 1;
                                    })
                                    bigp_h5.addEventListener('mouseout', function() {
                                        bigp_h5.style.opacity = 0;
                                    })
                                }
                                topPocket.style.display = "none";

                                bottomPocket.style.display = "none";
                                rightPocket.style.display = "none";
                                leftPocket.style.display = "none";
                            });




                        //when you click on the top pocket, the contents open
                        topH.addEventListener('click', function() {
                                    if (document.getElementById('rightPocket').style.display = "block") {
                                        rp_h.style.display = "none";
                                      }
                                        if (document.getElementById('leftPocket').style.display = "block") {
                                            lp_h.style.display = "none";
                                          }
                                            if (document.getElementById('bigPocket').style.display = "block") {
                                                bigp_h.style.display = "none";
                                            }
                                            if (document.getElementById('bottomPocket').style.display = "block") {
                                                botp_h.style.display = "none";
                                            }
                                            topPocket.style.display = "block";
                                            if (document.getElementById('topPocket').style.display = "block") {
                                                topp_h.style.display = "block";
                                                tp_h1.addEventListener('mouseover', function() {
                                                    tp_h1.style.opacity = 1;
                                                })
                                                tp_h1.addEventListener('mouseout', function() {
                                                    tp_h1.style.opacity = 0;
                                                })

                                                tp_h2.addEventListener('mouseover', function() {
                                                    tp_h2.style.opacity = 1;
                                                })
                                                tp_h2.addEventListener('mouseout', function() {
                                                    tp_h2.style.opacity = 0;
                                                })

                                                tp_h3.addEventListener('mouseover', function() {
                                                    tp_h3.style.opacity = 1;
                                                })
                                                tp_h3.addEventListener('mouseout', function() {
                                                    tp_h3.style.opacity = 0;
                                                })

                                                tp_h4.addEventListener('mouseover', function() {
                                                    tp_h4.style.opacity = 1;
                                                })
                                                tp_h4.addEventListener('mouseout', function() {
                                                    tp_h4.style.opacity = 0;
                                                })

                                                tp_h5.addEventListener('mouseover', function() {
                                                    tp_h5.style.opacity = 1;
                                                })
                                                tp_h5.addEventListener('mouseout', function() {
                                                    tp_h5.style.opacity = 0;
                                                })

                                                tp_h6.addEventListener('mouseover', function() {
                                                    tp_h6.style.opacity = 1;
                                                })
                                                tp_h6.addEventListener('mouseout', function() {
                                                    tp_h6.style.opacity = 0;
                                                })
                                            }

                                            bigPocket.style.display = "none";
                                            bottomPocket.style.display = "none";
                                            rightPocket.style.display = "none";
                                            leftPocket.style.display = "none";
                                        });

                                    //when you click on the bottom pocket, the contents open
                                    bottomH.addEventListener('click', function() {
                                                if (document.getElementById('rightPocket').style.display = "block") {
                                                    rp_h.style.display = "none";
                                                  }
                                                    if (document.getElementById('leftPocket').style.display = "block") {
                                                        lp_h.style.display = "none";
                                                    }
                                                    if (document.getElementById('topPocket').style.display = "block") {
                                                        topp_h.style.display = "none";
                                                    }
                                                    bigPocket.style.display = "none";
                                                    if (document.getElementById('bigPocket').style.display = "block") {
                                                        bigp_h.style.display = "none";
                                                    }

                                                    bottomPocket.style.display = "block";
                                                    if (document.getElementById('topPocket').style.display = "block") {
                                                        botp_h.style.display = "block";
                                                        bp_h1.addEventListener('mouseover', function() {
                                                            bp_h1.style.opacity = 1;
                                                        })
                                                        bp_h1.addEventListener('mouseout', function() {
                                                            bp_h1.style.opacity = 0;
                                                        })

                                                        bp_h2.addEventListener('mouseover', function() {
                                                            bp_h2.style.opacity = 1;
                                                        })
                                                        bp_h2.addEventListener('mouseout', function() {
                                                            bp_h2.style.opacity = 0;
                                                        })
                                                    }
                                                    topPocket.style.display = "none";
                                                    rightPocket.style.display = "none";
                                                    leftPocket.style.display = "none";
                                                });

                                            //when you click on the right pocket, the contents open
                                            rightH.addEventListener('click', function() {
                                                    if (document.getElementById('leftPocket').style.display = "block") {
                                                        lp_h.style.display = "none";
                                                      }
                                                        if(document.getElementById('topPocket').style.display = "block") {
                                                            topp_h.style.display = "none";
                                                        }
                                                        if (document.getElementById('bottomPocket').style.display = "block") {
                                                            botp_h.style.display = "none";
                                                        }
                                                        bigPocket.style.display = "none";
                                                        if (document.getElementById('bigPocket').style.display = "block") {
                                                            bigp_h.style.display = "none";
                                                        }

                                                        rightPocket.style.display = "block";
                                                        if (document.getElementById('rightPocket').style.display = "block") {
                                                            rp_h.style.display = "block";
                                                            rp_h1.addEventListener('mouseover', function() {
                                                                rp_h1.style.opacity = 1;
                                                            })
                                                            rp_h1.addEventListener('mouseout', function() {
                                                                rp_h1.style.opacity = 0;
                                                            })
                                                        }
                                                        bottomPocket.style.display = "none";
                                                        topPocket.style.display = "none";

                                                        bigPocket.style.display = "none";

                                                        leftPocket.style.display = "none";
                                                    });

                                                //when you click on the left pocket, the contents open
                                                leftH.addEventListener('click', function() {
                                                        if (document.getElementById('leftPocket').style.display = "block") {
                                                            lp_h.style.display = "none";}
                                                            if (document.getElementById('topPocket').style.display = "block") {
                                                                topp_h.style.display = "none";
                                                            }
                                                            if (document.getElementById('bottomPocket').style.display = "block") {
                                                                botp_h.style.display = "none";
                                                            }
                                                            bigPocket.style.display = "none";
                                                            if (document.getElementById('bigPocket').style.display = "block") {
                                                                bigp_h.style.display = "none";
                                                            }

                                                            leftPocket.style.display = "block";
                                                            if (document.getElementById('leftPocket').style.display = "block") {
                                                                lp_h.style.display = "block";
                                                                lp_h1.addEventListener('mouseover', function() {
                                                                    lp_h1.style.opacity = 1;
                                                                })
                                                                lp_h1.addEventListener('mouseout', function() {
                                                                    lp_h1.style.opacity = 0;
                                                                })
                                                                lp_h2.addEventListener('mouseover', function() {
                                                                    lp_h2.style.opacity = 1;
                                                                })
                                                                lp_h2.addEventListener('mouseout', function() {
                                                                    lp_h2.style.opacity = 0;
                                                                })
                                                            }

                                                            rightPocket.style.display = "none";
                                                            bottomPocket.style.display = "none";
                                                            topPocket.style.display = "none";

                                                            bigPocket.style.display = "none";

                                                        });
                                                    // if bigPocket is displayed than let hover work for highlight the objects and selection


                                                });
