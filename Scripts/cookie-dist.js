!function(e){var o;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{o=require("jquery")}catch(s){}module.exports=e(o)}else{var n=window.Cookies,i=window.Cookies=e(window.jQuery);i.noConflict=function(){return window.Cookies=n,i}}}(function(e){function o(e){return p.raw?e:encodeURIComponent(e)}function s(e){return p.raw?e:decodeURIComponent(e)}function n(e){return o(p.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(a," ")),p.json?JSON.parse(e):e}catch(o){}}function c(e,o){var s=p.raw?e:i(e);return l(o)?o(s):s}function t(){for(var e,o,s=0,n={};s<arguments.length;s++){o=arguments[s];for(e in o)n[e]=o[e]}return n}function l(e){return"[object Function]"===Object.prototype.toString.call(e)}var a=/\+/g,p=function(e,i,a){if(arguments.length>1&&!l(i)){if(a=t(p.defaults,a),"number"==typeof a.expires){var $=a.expires,r=a.expires=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*$)}return document.cookie=[o(e),"=",n(i),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var d=e?void 0:{},u=document.cookie?document.cookie.split("; "):[],m=0,k=u.length;k>m;m++){var f=u[m].split("="),g=s(f.shift()),h=f.join("=");if(e===g){d=c(h,i);break}e||void 0===(h=c(h))||(d[g]=h)}return d};return p.get=p.set=p,p.defaults={},p.remove=function(e,o){return p(e,"",t(o,{expires:-1})),!p(e)},e&&(e.cookie=p,e.removeCookie=p.remove),p});
//# sourceMappingURL=cookie-dist.js.map