!function(e){var t={};function n(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(l,c,function(t){return e[t]}.bind(null,c));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=(e,t)=>{const n=document.querySelectorAll(e),l=document.querySelector(t);n.forEach(e=>e.addEventListener("click",()=>l.style.display="block")),l.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?l.style.display="none":(t=t.closest(".popup-content"),t||(l.style.display="none"))})};var c=e=>{const t=document.getElementById(e),n=document.getElementById("myonoffswitch");t.addEventListener("click",e=>{const l=e.target.closest(".panel-default"),c=l.querySelector(".construct-btn");if(l.querySelector(".panel-collapse").classList.contains("in")){if(!c)return;if(null!==e.target.closest(".construct-btn")&&null!==t.querySelector(c.getAttribute("href"))){if(e.preventDefault(),t.querySelectorAll(".panel-collapse").forEach(e=>e.classList.remove("in")),t.querySelector(c.getAttribute("href")).classList.add("in"),"collapseTwo"===t.querySelector(c.getAttribute("href")).getAttribute("id")){const e=t.querySelector(c.getAttribute("href")).querySelector(".panel-body");if(n.checked)for(let e=3;e<=5;e++)t.querySelector(c.getAttribute("href")).children[0].children[e].style.display="none";else e.children[3].style.display="block",e.children[4].style.display="inline-block",e.children[5].style.display="inline-block"}return}}else if(e.preventDefault(),t.querySelectorAll(".panel-collapse").forEach(e=>e.classList.remove("in")),l.querySelector(".panel-collapse").classList.add("in"),"collapseTwo"===l.querySelector(".panel-collapse").getAttribute("id"))if(n.checked)for(let e=3;e<=5;e++)l.querySelector(".panel-body").children[e].style.display="none";else l.querySelector(".panel-body").children[3].style.display="block",l.querySelector(".panel-body").children[4].style.display="inline-block",l.querySelector(".panel-body").children[5].style.display="inline-block"})};function o(){const e=document.getElementById("myonoffswitch"),t=document.querySelectorAll(".expand"),n=document.getElementById("myonoffswitch-two"),l=document.getElementById("calc-result");return{well_type:e.checked?1:2,well_diameter_single_circuit:t[0].options[t[0].selectedIndex].value,well_count_single_circuit:t[1].options[t[1].selectedIndex].value,well_diameter_double_circuit:t[2].options[t[2].selectedIndex].value,well_count_double_circuit:t[3].options[t[3].selectedIndex].value,is_well_bottom:n.checked,calc_result:l.value}}var r=()=>{const e=(e,t,n)=>{e.querySelectorAll(".status-message").forEach(e=>e.parentNode.removeChild(e));const l=document.createElement("div");l.className="status-message",l.style.cssText="font-size: 2rem; color: #000;",l.innerHTML=t,e.appendChild(l),n&&setTimeout(()=>{l.parentNode.removeChild(l)},n)},t={user_name:/^[а-я]+$/i,user_quest:/.*/,user_phone:/^\+\d{11}$/,well_type:/.*/,well_diameter_single_circuit:/.*/,well_count_single_circuit:/.*/,well_diameter_double_circuit:/.*/,well_count_double_circuit:/.*/,is_well_bottom:/.*/,calc_result:/.*/},n=n=>{n.preventDefault();const l=n.target,c=l.querySelectorAll("input");e(l,"Загрузка...");const o=new FormData(l);if(null!==((e,t)=>{const n=[];return e.forEach((e,l)=>{t[l].test(e)||n.push(l)}),n.length?n:null})(o,t))return n.preventDefault(),void e(l,"Введите корректные данные");(e=>{const t={};return e.forEach((e,n)=>t[n]=e),fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})(o).then(t=>{if(200!==t.status)throw new Error("status network is not 200");e(l,"Спасибо! Мы скоро с вами свяжемся",3e3)}).catch(t=>{e(l,"Что то пошло не так..."),console.error(t)}).finally(()=>{c.forEach(e=>{e.value="",e.classList.remove("success")})})};[document.getElementById("form1"),document.getElementById("form2"),document.getElementById("form3"),document.getElementById("form4"),document.getElementById("form11"),document.getElementById("form12"),document.getElementById("form13")].forEach(e=>{e.addEventListener("submit",n)})};var s=()=>{const e=document.querySelector(".sentence"),t=document.querySelectorAll(".col-sm-6");e.addEventListener("click",n=>{if(null!==n.target.closest(".add-sentence-btn")){for(let e=6;e<=8;e++)t[e].classList.remove("visible-sm-block"),t[e].classList.remove("hidden");e.querySelector(".add-sentence-btn").style.display="none"}})},i=function(e,t,n){function l(e,n){const l=document.createElement("input");l.type="hidden",l.name=e,l.value=n,document.querySelector(t).append(l)}function c(){document.querySelectorAll(t+" input[type=hidden]").forEach(e=>e.remove());const e=n();for(const t of Object.keys(e))l(t,e[t])}const o=document.querySelectorAll(e);return o.forEach(e=>e.addEventListener("click",c)),function(){o.forEach(e=>e.removeEventListener("click",c))}};i(".call-btn.construct-btn","#form11",o),i(".discount-btn","#form11",()=>({total:"33500"})),i(".consultation-btn","#form13",(function(){return{user_quest:document.querySelector('input[name="user_quest"]').value}})),l(".call-btn:not(.construct-btn)",".popup-call"),l(".call-btn.construct-btn",".popup-discount"),l(".discount-btn",".popup-discount"),l(".check-btn",".popup-check"),l(".consultation-btn",".popup-consultation"),c("accordion"),c("accordion-two"),(()=>{const e=document.getElementById("accordion"),t=document.getElementById("calc-result");e.addEventListener("change",e=>{const n=e.target;(n.matches("select")||n.matches("input"))&&(()=>{const{well_type:e,well_diameter_single_circuit:n,well_count_single_circuit:l,well_diameter_double_circuit:c,well_count_double_circuit:r,is_well_bottom:s}=o();let i=0;const u=1===e?1e4:15e3;let a=0,d=0;if(1===e?"2"===n&&(a+=u/5):("2"===n&&(a+=u/5),"2"===c&&(a+=u/5)),1===e)switch(l){case"2":d+=3*u/10;break;case"3":d+=u/2}else{switch(l){case"2":d+=3*u/10;break;case"3":d+=u/2}switch(r){case"2":d+=3*u/10;break;case"3":d+=u/2}}i=Math.floor(u+a+d),1===e?s&&(i+=1e3):s&&(i+=2e3),t.value=i})()})})(),r(),s()}]);