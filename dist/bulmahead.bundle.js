!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){var r=n(1).Symbol;t.exports=r},function(t,e,n){var r=n(11),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(2),o=n(12),i=n(9),u="Expected a function",a=Math.max,c=Math.min;t.exports=function(t,e,n){var l,f,s,d,v,p,y=0,b=!1,m=!1,x=!0;if("function"!=typeof t)throw new TypeError(u);function g(e){var n=l,r=f;return l=f=void 0,y=e,d=t.apply(r,n)}function h(t){var n=t-p;return void 0===p||n>=e||n<0||m&&t-y>=s}function j(){var t=o();if(h(t))return w(t);v=setTimeout(j,function(t){var n=e-(t-p);return m?c(n,s-(t-y)):n}(t))}function w(t){return v=void 0,x&&l?g(t):(l=f=void 0,d)}function O(){var t=o(),n=h(t);if(l=arguments,f=this,p=t,n){if(void 0===v)return function(t){return y=t,v=setTimeout(j,e),b?g(t):d}(p);if(m)return v=setTimeout(j,e),g(p)}return void 0===v&&(v=setTimeout(j,e)),d}return e=i(e)||0,r(n)&&(b=!!n.leading,s=(m="maxWait"in n)?a(i(n.maxWait)||0,e):s,x="trailing"in n?!!n.trailing:x),O.cancel=function(){void 0!==v&&clearTimeout(v),y=0,l=p=f=v=void 0},O.flush=function(){return void 0===v?d:w(o())},O}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(0),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[a]=n:delete t[a]),o}},function(t,e,n){var r=n(0),o=n(6),i=n(5),u="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:u:c&&c in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(7),o=n(4),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},function(t,e,n){var r=n(2),o=n(8),i=NaN,u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=c.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):a.test(t)?i:+t}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(10))},function(t,e,n){var r=n(1);t.exports=function(){return r.Date.now()}},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);const i=(t,e,n,r,i,u=2)=>{const a=document.getElementById(t),c=document.getElementById(e);c.innerHTML='<div class="dropdown-content"></div>';const l=t=>{t.preventDefault();var e=t.target.text,n=t.target.dataset.value;return a.value=e,c.style.display="none",r&&r({label:e,value:n}),!1},f=t=>{const e=t.target.value;c.style.display="none",c.innerHTML='<div class="dropdown-content"></div>',e.length<=u||n(e).then(t=>{t.map(({label:t,value:e})=>{const n=document.createElement("a");return n.href="#",n.classList.add("dropdown-item"),n.innerHTML=t,n.dataset.value=e,n.addEventListener("click",l),n}).map(t=>{c.childNodes[0].appendChild(t)}),t.length>0&&(c.style.display="block")})};a.addEventListener("input",o()(f,i)),a.addEventListener("focusout",t=>{null!==t.relatedTarget&&t.relatedTarget.classList.contains("dropdown-item")||(c.style.display="none")}),a.addEventListener("focusin",t=>{f(t)}),a.addEventListener("keydown",function(t){"Escape"===t.key&&(a.value="",t.preventDefault())})};e.default=i,window.bulmahead=i}]);
//# sourceMappingURL=bulmahead.bundle.js.map