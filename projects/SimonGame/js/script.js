function matchArrays(t,e){if(t.length===e.length){for(var o=!1,s=0;s<e.length;s++)e[s]!==t[s]?(o=!1,onErrorLights(),errorScreen=!0,gameLevel--,loop=0,simonArr.pop(),userArr=[],getRandomIndex()):(o=!0,userArr=[],loop=0,btnLightsTimer());!1===o?console.log("sameArr === false"):(getRandomIndex(),console.log("sameArr === true"))}}function getRandomIndex(){setTimeout(function(){var t=Math.floor(3*Math.random())+1;gameLevel++,console.log(gameLevel+" level"),simonArr.push(t),console.log(t+" numbers"),btnLightsTimer()},1500)}function smallScreenAdd(){$(".top-left").removeClass("top-left").addClass("top-left-active"),$(".top-right").removeClass("top-right").addClass("top-right-active"),$(".bottom-left").removeClass("bottom-left").addClass("bottom-left-active"),$(".bottom-right").removeClass("bottom-right").addClass("bottom-right-active")}function smallScreenDelete(){$(".top-left-active").removeClass("top-left-active").addClass("top-left"),$(".top-right-active").removeClass("top-right-active").addClass("top-right"),$(".bottom-left-active").removeClass("bottom-left-active").addClass("bottom-left"),$(".bottom-right-active").removeClass("bottom-right-active").addClass("bottom-right"),!0===errorScreen?$(".level").text("ERROR").css("font-size","10px").css("padding-top","33px"):$(".level").text("ON").css("font-size","10px").css("padding-top","33px"),setTimeout(function(){$(".level").text(gameLevel).css("font-size","15px").css("padding-top","28px")},1e3)}function bigScreenAdd(){$(".top-left").removeClass("top-left").addClass("top-left-active-big"),$(".top-right").removeClass("top-right").addClass("top-right-active-big"),$(".bottom-left").removeClass("bottom-left").addClass("bottom-left-active-big"),$(".bottom-right").removeClass("bottom-right").addClass("bottom-right-active-big")}function bigScreenDelete(){$(".top-left-active-big").removeClass("top-left-active-big").addClass("top-left"),$(".top-right-active-big").removeClass("top-right-active-big").addClass("top-right"),$(".bottom-left-active-big").removeClass("bottom-left-active-big").addClass("bottom-left"),$(".bottom-right-active-big").removeClass("bottom-right-active-big").addClass("bottom-right"),!0===errorScreen?$(".level").text("ERROR").css("font-size","10px").css("padding-top","33px"):$(".level").text("ON").css("font-size","10px").css("padding-top","33px"),setTimeout(function(){$(".level").text(gameLevel).css("font-size","15px").css("padding-top","28px")},1e3)}function btnLights(t){1===t&&(soundTopLeft.play(),$(".top-left").removeClass("top-left").addClass("top-left-active"),topLeftTimer=setInterval(function(){$(".top-left-active").removeClass("top-left-active").addClass("top-left"),clearInterval(topLeftTimer)},800)),2===t&&(soundTopRight.play(),$(".top-right").removeClass("top-right").addClass("top-right-active"),topRightTimer=setInterval(function(){$(".top-right-active").removeClass("top-right-active").addClass("top-right"),clearInterval(topRightTimer)},800)),3===t&&(soundBottomLeft.play(),$(".bottom-left").removeClass("bottom-left").addClass("bottom-left-active"),bottomLeftTimer=setInterval(function(){$(".bottom-left-active").removeClass("bottom-left-active").addClass("bottom-left"),clearInterval(bottomLeftTimer)},800)),4===t&&(soundBottomRight.play(),$(".bottom-right").removeClass("bottom-right").addClass("bottom-right-active"),bottomRightTimer=setInterval(function(){$(".bottom-right-active").removeClass("bottom-right-active").addClass("bottom-right"),clearInterval(bottomRightTimer)},800))}function btnLightsTimer(){console.log(loop+" loop HERE"+gameLevel+" --game level"),1===gameLevel?console.log("gameLevel === 1"):$(".level").text(gameLevel),setTimeout(function(){console.log("------------------------------------------------------------------------------------------"),btnLights(simonArr[loop]),++loop<=simonArr.length&&setTimeout(btnLightsTimer(),900)},2200)}function onErrorLights(){var t=setInterval(function(){soundError.play(),$(window).width()<1430?smallScreenAdd():bigScreenAdd(),clearInterval(t)},300);setTimeout(function(){$(window).width()<1430?smallScreenDelete():bigScreenDelete()},800)}var startBtn=!1,errorScreen=!1,strictBtn=!1,restartBtn=!1,userArr=[],simonArr=[],gameLevel=0,loop=0,starting=$("#starting")[0],btnSound=$("#sound")[0],soundTopLeft=$("#sound1")[0],soundTopRight=$("#sound2")[0],soundBottomLeft=$("#sound3")[0],soundBottomRight=$("#sound4")[0],soundError=$("#error")[0],topLeftTimer=0,bottomLeftTimer=0,topRightTimer=0,bottomRightTimer=0;$(document).ready(function(){$(".on-btn").click(function(){if(!1===startBtn){errorScreen=!1,getRandomIndex(),btnSound.play(),$(".level").text("START").css("font-size","10px").css("padding-top","33px"),$(".upper-lines").css("color","#d50000"),$(".lower-lines").css("color","#d50000"),$(".inner-display>p").css("color","#d50000");var t=setInterval(function(){starting.play(),$(window).width()<1430?smallScreenAdd():bigScreenAdd(),clearInterval(t)},1e3);setTimeout(function(){$(window).width()<1430?smallScreenDelete():bigScreenDelete()},1600),startBtn=!0,restartBtn=!1}}),$(".off-btn").click(function(){startBtn=!1,$(".level").text(" ").css("font-size","10px").css("padding-top","33px"),$(".upper-lines").css("color","rgba(213, 0, 0, 0.24)"),$(".lower-lines").css("color","rgba(213, 0, 0, 0.24)"),$(".inner-display>p").css("color","rgba(213, 0, 0, 0.24)"),btnSound.play(),gameLevel=0,loop=0,simonArr=[],userArr=[]}),$(".restart-btn").click(function(){!0===startBtn?(btnSound.play(),$(".level").text("RESTART").css("font-size","8px").css("padding-top","35px"),restartBtn=!0):$(".level").text(" "),gameLevel=0}),$(".strict-btn").click(function(){!0===startBtn?(btnSound.play(),$(".level").text("STRICT").css("font-size","10px").css("padding-top","33px"),strictBtn=!0):$(".level").text(" ")}),$(".top-left").click(function(){!0===startBtn?(console.log("top-left"),soundTopLeft.play(),userArr.push(1),matchArrays(simonArr,userArr),console.log(userArr+"userArr"),console.log(simonArr+"simonArr")):console.log("startBtn=false")}),$(".top-right").click(function(){!0===startBtn?(console.log("top-right"),soundTopRight.play(),userArr.push(2),matchArrays(simonArr,userArr),console.log(userArr+"userArr"),console.log(simonArr+"simonArr")):console.log("startBtn=false")}),$(".bottom-left").click(function(){!0===startBtn?(console.log("bottom-left"),soundBottomLeft.play(),userArr.push(3),matchArrays(simonArr,userArr),console.log(userArr+"userArr"),console.log(simonArr+"simonArr")):console.log("startBtn=false")}),$(".bottom-right").click(function(){!0===startBtn?(console.log("bottom-right"),soundBottomRight.play(),userArr.push(4),matchArrays(simonArr,userArr),console.log(userArr+"userArr"),console.log(simonArr+"simonArr")):console.log("startBtn=false")})});