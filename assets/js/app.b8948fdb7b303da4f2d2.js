!function(t){function e(e){for(var n,i,u=e[0],c=e[1],s=e[2],f=0,v=[];f<u.length;f++)i=u[f],o[i]&&v.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(l&&l(e);v.length;)v.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={0:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;a.push([41,1]),r()}({1:function(t,e,r){var n=r(39);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(5)(n,o);n.locals&&(t.exports=n.locals)},19:function(t,e,r){var n=r(20);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(5)(n,o);n.locals&&(t.exports=n.locals)},20:function(t,e,r){},38:function(t,e,r){"use strict";var n=r(1);r.n(n).a},39:function(t,e,r){},40:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"table-box"},[r("table",{attrs:{cellpadding:"10"}},[t._m(0),t._v(" "),r("tbody",t._l(t.currencies,function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.rank))]),t._v(" "),r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(" "+t._s(t._f("currency")(e.priceUsd)))]),t._v(" "),r("td",[t._v("$"+t._s(t.abbreviateNumber(e.marketCapUsd)))]),t._v(" "),r("td",[t._v("$"+t._s(t.abbreviateNumber(e.volumeUsd24Hr)))])])}),0)])])])])};n._withStripped=!0;var o=r(15),a=r.n(o),i={data:function(){return{loading:!0,currencies:[]}},created:function(){var t=this;a.a.get("https://api.coincap.io/v2/assets").then(function(e){t.currencies=e.data.data.slice(0,15)})},methods:{intlFormat:function(t){return(new Intl.NumberFormat).format(Math.round(100*t)/100)},abbreviateNumber:function(t){var e=Math.floor(t);return e>=1e9?this.intlFormat(e/1e9)+"b":e>=1e6?this.intlFormat(e/1e6)+"m":e>=1e3?this.intlFormat(e/1e3)+"k":this.intlFormat(e)}}},u=(r(38),r(16)),c=Object(u.a)(i,n,[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Rank")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Price\t")]),t._v(" "),r("th",[t._v("Market Cap")]),t._v(" "),r("th",[t._v("Volume (24Hr)")])])])}],!1,null,"783f90ce",null);c.options.__file="src/components/Table.vue";e.default=c.exports},41:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r.n(n),a=r(14),i=r.n(a);o.a.use(i.a);r(19);window.Vue=r(3),Vue.component("table-component",r(40).default);new Vue({el:"#app"})}});