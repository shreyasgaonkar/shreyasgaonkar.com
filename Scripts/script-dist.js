$(function(){function e(){o+=1,o>1&&($(".sleepy-overlay").fadeIn("slow"),o=0)}$("#fadein").fadeIn(2e3),$("div").hasClass("Home")&&!$.cookie("seen")&&($.cookie("seen","step1",{expires:120,path:"/"}),console.log($.cookie("seen"))),"step1"!==$.cookie("seen")||$("div").hasClass("Home")||($.cookie("seen","step2",{expires:120,path:"/"}),console.log($.cookie("seen"))),"step2"===$.cookie("seen")&&$("div").hasClass("Home")&&($(".signup-modal").addClass("is-open"),console.log("Step 3")),$(".signup-modal .close").click(function(){$(".signup-modal").removeClass("is-open"),$.cookie("seen","complete",{expires:120,path:"/"}),console.log($.cookie("seen"))}),$(".signup-modal .close-modal").click(function(){$(".signup-modal").removeClass("is-open"),$.cookie("seen","complete",{expires:120,path:"/"}),console.log($.cookie("seen"))});var o=0;$(document).ready(function(){setInterval(e,2e4);$(this).mousemove(function(){o=0}),$(this).keypress(function(){o=0}),$(".sleepy-close, .sleepy-overlay, .sleepy-wake-up").click(function(){$(".sleepy-overlay").hide(),o=0}),$(".sleepy-modal").click(function(e){e.stopPropagation()})})});
var Elevator=function(e){"use strict";function o(e,o,s,n){return e/=n/2,1>e?s/2*e*e+o:(e--,-s/2*(e*(e-2)-1)+o)}function s(e,o){for(var s in o){var n=void 0===e[s]&&"function"!=typeof s;n&&(e[s]=o[s])}return e}function n(e){for(var o=0;e;)o+=e.offsetTop||0,e=e.offsetParent;return o}function i(e){y||(y=e);var s=e-y,n=o(s,C,w-C,h);window.scrollTo(0,n),h>s?v=requestAnimationFrame(i):a()}function l(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function c(){y=null,C=null,I=!1}function t(){x&&(w=n(x))}function a(){c(),d&&(d.pause(),d.currentTime=0),m&&m.play(),k&&k()}function p(){I&&(cancelAnimationFrame(v),c(),d&&(d.pause(),d.currentTime=0),t(),window.scrollTo(0,w))}function u(e){e.addEventListener?e.addEventListener("click",H.elevate,!1):e.attachEvent("onclick",function(){t(),document.documentElement.scrollTop=w,document.body.scrollTop=w,window.scroll(0,w)})}function $(e){f=document.body;var o={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};e=s(e,o),e.element&&u(e.element),l()&&(e.duration&&(g=!0,h=e.duration),e.targetElement&&(x=e.targetElement),window.addEventListener("blur",p,!1),e.mainAudio&&(d=new Audio(e.mainAudio),d.setAttribute("preload",e.preloadAudio),d.setAttribute("loop",e.loopAudio)),e.endAudio&&(m=new Audio(e.endAudio),m.setAttribute("preload","true")),e.endCallback&&(k=e.endCallback),e.startCallback&&(r=e.startCallback))}var r,d,m,k,f=null,v=null,h=null,g=!1,y=null,C=null,w=0,x=null,I=!1,H=this;this.elevate=function(){I||(I=!0,C=document.documentElement.scrollTop||f.scrollTop,t(),g||(h=1.5*Math.abs(w-C)),requestAnimationFrame(i),d&&d.play(),r&&r())},$(e)};
//# sourceMappingURL=script-dist.js.map