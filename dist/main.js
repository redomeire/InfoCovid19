(()=>{var n={594:(n,t,r)=>{"use strict";r.d(t,{Z:()=>o});var e=r(81),a=r.n(e),s=r(645),i=r.n(s)()(a());i.push([n.id,".card {\r\n    background: rgba(255, 255, 255, 0.19);\r\n}\r\n\r\n@media screen and (max-device-width: 768px){\r\n    .card {\r\n        margin-top: 40px;\r\n    }\r\n}",""]);const o=i},832:(n,t,r)=>{"use strict";r.d(t,{Z:()=>o});var e=r(81),a=r.n(e),s=r(645),i=r.n(s)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);"]),i.push([n.id,"body {\r\n    font-family: 'Poppins';\r\n}\r\n\r\n.jumbotron {\r\n    margin-top: 100px;\r\n}\r\n\r\n.jumbotron h1 {\r\n    font-size: 48px;\r\n}\r\n\r\n.jumbotron-details p {\r\n    font-size: 18px;\r\n    width: 75%;\r\n}\r\n\r\n.input1 {\r\n    width: 45%;\r\n}\r\n\r\n.input1 input {\r\n    border: 1px solid rgba(40, 40, 40, 0.17);\r\n    border-radius: 10px;\r\n    height: 50px;\r\n}\r\n\r\n.input2 {\r\n    width: 45%;\r\n}\r\n\r\n.input2 input {\r\n    border: 1px solid rgba(40, 40, 40, 0.17);\r\n    border-radius: 10px;\r\n    height: 50px;\r\n}\r\n\r\nselect {\r\n    border: 1px solid rgba(40, 40, 40, 0.17);\r\n    border-radius: 5px;\r\n}\r\n\r\n.result .card {\r\n    width: 40%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.footer-details {\r\n    width: 50%;\r\n}\r\n\r\n@media screen and (max-device-width: 768px) {\r\n    .jumbotron {\r\n        flex-direction: column-reverse;\r\n        text-align: center;\r\n    }\r\n\r\n    .jumbotron-details {\r\n        margin-top: 30px;\r\n    }\r\n\r\n    .jumbotron-details p {\r\n        text-align: justify;\r\n        width: 100%;\r\n    }\r\n\r\n    .input-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .input1 {\r\n        width: 100%;\r\n    }\r\n\r\n    .input2 {\r\n        width: 100%;\r\n    }\r\n\r\n    .result .card {\r\n        width: 100%;\r\n    }\r\n\r\n    .footer-upper {\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .footer-details {\r\n        text-align: justify;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .footer-details h1 {\r\n    text-align: center;\r\n}\r\n\r\n    .footer-bottom {\r\n        flex-direction: column;\r\n    }\r\n}",""]);const o=i},326:(n,t,r)=>{"use strict";r.d(t,{Z:()=>o});var e=r(81),a=r.n(e),s=r(645),i=r.n(s)()(a());i.push([n.id,".navbar-toggler {\r\n    border: none;\r\n}\r\n\r\n.navbar-toggler input {\r\n    position: absolute;\r\n    margin-left: -27px;\r\n    top: 12px;\r\n    width: 50px;\r\n    height: 35px;\r\n    opacity: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.spans {\r\n    position: relative;\r\n}\r\n\r\n.spans span {\r\n    background-color: black;width: 20px; height: 1px; display: block;\r\n    padding: 1px;\r\n    transition: ease 0.4s;\r\n}\r\n\r\n.spans span:nth-child(2){\r\n    margin-top: 5px;\r\n    transition: ease 0.2s;\r\n}\r\n\r\n.spans span:nth-child(3){\r\n    margin-top: 5px;\r\n}\r\n\r\n.navbar-toggler input:checked ~ .spans span:nth-child(1){\r\n    transform: rotate(45deg) translate(1px,8.6px);\r\n}\r\n\r\n.navbar-toggler input:checked ~ .spans span:nth-child(2){\r\n    opacity: 0;\r\n    padding: 0;\r\n}\r\n\r\n.navbar-toggler input:checked ~ .spans span:nth-child(3){\r\n    transform: rotate(-45deg) translate(0px,-8px);\r\n}",""]);const o=i},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,a,s){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);e&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var s={},i=[],o=0;o<n.length;o++){var l=n[o],c=e.base?l[0]+e.base:l[0],d=s[c]||0,p="".concat(c," ").concat(d);s[c]=d+1;var u=r(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,e);e.byIndex=o,t.splice(o,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,a){var s=e(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<s.length;i++){var o=r(s[i]);t[o].references--}for(var l=e(n,a),c=0;c<s.length;c++){var d=r(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},569:n=>{"use strict";var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,r)=>{"use strict";n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,a&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},182:()=>{class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='<div class="cards d-flex flex-wrap justify-content-center mt-4 px-4">\n        <div class="card m-sm-1 p-4 border-0 d-flex flex-column align-items-center justify-content-center"\n            style="width: 380px; border-radius: 20px;">\n            <img src="../src/assets/jaga-jarak.png" height="145" alt="...">\n            <div class="card-body">\n                <h6 class="text-white fw-bold text-center mt-3">Jaga jarak anda</h6>\n                <p class="card-text text-center text-white mt-3">Selalu jaga jarak aman dari orang lain (minimal 1 meter) meskipun mereka tidak nampak sakit</p>\n            </div>\n        </div>\n        <div class="card m-sm-1 p-3 border-0 d-flex flex-column align-items-center justify-content-center"\n            style="width: 380px; border-radius: 20px;">\n            <img src="../src/assets/hand-sanitizer.png" height="145" alt="...">\n            <div class="card-body">\n                <h6 class="text-white fw-bold text-center mt-3">Gunakan Hand Sanitizer</h6>\n                <p class="card-text text-center text-white mt-3">Setidaknya, hand sanitizer membantu mensterilkan tangan anda, namun lebih baik gunakan sabun</p>\n            </div>\n        </div>\n        <div class="card m-sm-1 p-3 border-0 d-flex flex-column align-items-center justify-content-center"\n            style="width: 380px; border-radius: 20px;">\n            <img src="../src/assets/orang-batuk.png" height="145" alt="...">\n            <div class="card-body">\n                <h6 class="text-white fw-bold text-center mt-3">Tutup Mulut Saat Batuk</h6>\n                <p class="card-text text-center text-white mt-3">Batuk bisa menjadi langkah awal bagi seseorang menularkan penyakit kepada orang lain.</p>\n            </div>\n        </div>\n    </div>'}}customElements.define("card-details",n)},386:n=>{n.exports=(n,t,r,e)=>`<div data-aos="fade-up" data-aos-duration="500" class="card m-sm-2 rounded-3 p-3 bg-primary d-flex flex-column align-items-center">\n    <h6 class="text-white" style="font-size: 24px;">Kasus Terkonfirmasi</h6>\n    <p class="result-number mt-3" style="color: #05FF87;">+${n}</p>\n    <p class="result-total text-white">total : ${r}</p>\n</div>\n<div data-aos="fade-up" data-aos-duration="500" class="card m-sm-2 rounded-3 p-3 bg-primary d-flex flex-column align-items-center">\n    <h6 class="text-white" style="font-size: 24px;">Kasus Meninggal</h6>\n    <p class="result-number mt-3" style="color: #D63908;">+${t}</p>\n    <p class="result-total text-white">total : ${e}</p>\n</div>`},302:()=>{class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white fw-bold">\n        <div class="container">\n            <a class="navbar-brand text-primary fw-bold" href="#">\n                InfoCovid\n            </a>\n            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"\n                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n                <input type="checkbox">\n                <div class="spans">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n            </button>\n            <div class="collapse navbar-collapse" id="navbarNav">\n\n                <ul class="navbar-nav ms-auto">\n                    <li class="nav-item" style="margin-left: 20px;">\n                        <a class="nav-a text-decoration-none text-primary" aria-current="page" href="#">Covid\n                            19 Info</a>\n                    </li>\n                    <li class="nav-item" style="margin-left: 20px;">\n                        <a class="nav-a text-decoration-none text-primary" href="#">Vaccine Center</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>'}}customElements.define("navbar-details",n)},49:n=>{const t=document.querySelector(".input1 input"),r=document.querySelector(".input2 input"),e=document.querySelector(".data-display select"),a=document.querySelector(".result"),s=document.querySelector(".btn-submit");n.exports={inputOne:t,inputTwo:r,select:e,resultDiv:a,searchButton:s}}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var s=t[e]={id:e,exports:{}};return n[e](s,s.exports,r),s.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";r(302),r(182);var n=r(386),t=r.n(n),e=r(49);e.searchButton.addEventListener("click",(async()=>{await fetch(`https://api.covid19api.com/world?from=${e.inputOne.value}T00:00:00Z&to=${e.inputTwo.value}T00:00:00Z`).then((n=>n.json())).then((n=>{if(e.inputOne.value<e.inputTwo.value){let r="";console.log(n);let a=0,s=0,i=0,o=0;for(let t=0;t<n.length;t++)a+=n[t].NewConfirmed,s+=n[t].NewDeaths;i+=n[n.length-1].TotalConfirmed,o+=n[n.length-1].TotalDeaths,r+=t()(a,s,i,o),e.resultDiv.innerHTML=r}else alert("Tanggal 'from' tidak boleh lebih atau sama dengan tanggal 'to'"),e.resultDiv.innerHTML=""})).catch((n=>{console.log(n)}))}));var a=r(379),s=r.n(a),i=r(795),o=r.n(i),l=r(569),c=r.n(l),d=r(565),p=r.n(d),u=r(216),m=r.n(u),h=r(589),f=r.n(h),v=r(326),x={};x.styleTagTransform=f(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),s()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;var g=r(594),b={};b.styleTagTransform=f(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m(),s()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;var y=r(832),w={};w.styleTagTransform=f(),w.setAttributes=p(),w.insert=c().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=m(),s()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals})()})();