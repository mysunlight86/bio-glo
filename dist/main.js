!function(e){var t={};function l(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var r=(e,t)=>{const l=document.querySelectorAll(e),r=document.querySelector(t);l.forEach(e=>e.addEventListener("click",()=>r.style.display="block")),r.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?r.style.display="none":(t=t.closest(".popup-content"),t||(r.style.display="none"))})};var n=e=>{const t=e=>{e.checked?e.checked=!1:e.checked=!0},l=document.getElementById(e),r=document.getElementById("myonoffswitch"),n=document.getElementById("myonoffswitch-two");l.addEventListener("click",e=>{e.preventDefault();const o=e.target.closest(".panel-default"),c=o.querySelector(".construct-btn");if(o.querySelector(".panel-collapse").classList.contains("in")){if(!c)return;if(null!==e.target.closest(".construct-btn")&&null!==l.querySelector(c.getAttribute("href"))){if(l.querySelectorAll(".panel-collapse").forEach(e=>e.classList.remove("in")),l.querySelector(c.getAttribute("href")).classList.add("in"),"collapseTwo"===l.querySelector(c.getAttribute("href")).getAttribute("id")){const e=l.querySelector(c.getAttribute("href")).querySelector(".panel-body");if(r.checked)for(let e=3;e<=5;e++)l.querySelector(c.getAttribute("href")).children[0].children[e].style.display="none";else e.children[3].style.display="block",e.children[4].style.display="inline-block",e.children[5].style.display="inline-block"}return}return null!==e.target.closest(".onoffswitch")&&null!==e.target.closest("#collapseOne")?void t(r):null!==e.target.closest(".onoffswitch")&&null!==e.target.closest("#collapseThree")?void t(n):void 0}if(l.querySelectorAll(".panel-collapse").forEach(e=>e.classList.remove("in")),o.querySelector(".panel-collapse").classList.add("in"),"collapseTwo"===o.querySelector(".panel-collapse").getAttribute("id"))if(r.checked)for(let e=3;e<=5;e++)o.querySelector(".panel-body").children[e].style.display="none";else o.querySelector(".panel-body").children[3].style.display="block",o.querySelector(".panel-body").children[4].style.display="inline-block",o.querySelector(".panel-body").children[5].style.display="inline-block"})};var o=()=>{const e=(e,t,l)=>{e.querySelectorAll(".status-message").forEach(e=>e.parentNode.removeChild(e));const r=document.createElement("div");r.className="status-message",r.style.cssText="font-size: 2rem; color: #000;",r.innerHTML=t,e.appendChild(r),l&&setTimeout(()=>{r.parentNode.removeChild(r)},l)},t={user_name:/^[а-я]+$/i,user_quest:/^[а-я\s]+$/i,user_phone:/^\+\d{11}$/},l=l=>{l.preventDefault();const r=l.target,n=r.querySelectorAll("input");e(r,"Загрузка...");const o=new FormData(r);null===((e,t)=>{const l=[];return e.forEach((e,r)=>{t[r].test(e)||l.push(r)}),l.length?l:null})(o,t)?(e=>{const t={};return e.forEach((e,l)=>t[l]=e),fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})(o).then(t=>{if(200!==t.status)throw new Error("status network is not 200");e(r,"Спасибо! Мы скоро с вами свяжемся",3e3)}).catch(t=>{e(r,"Что то пошло не так..."),console.error(t)}).finally(()=>{n.forEach(e=>{e.value="",e.classList.remove("success")})}):e(r,"Что то пошло не так...")};document.body.addEventListener("click",e=>{const t=e.target.closest("form");null!==t&&t.addEventListener("submit",l)})};r(".call-btn",".popup-call"),r(".discount-btn",".popup-discount"),r(".check-btn",".popup-check"),n("accordion"),n("accordion-two"),o()}]);