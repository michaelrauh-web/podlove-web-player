// [AIV_SHORT]  Build version: 5.1.11 - Sunday, July 19th, 2020, 4:01:07 PM  
 !function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/extensions/external-events.js")}({"../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":function(e,n){e.exports=function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}},"../../node_modules/@babel/runtime/helpers/defineProperty.js":function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},"../../node_modules/@babel/runtime/helpers/iterableToArray.js":function(e,n){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},"../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"../../node_modules/@babel/runtime/helpers/toConsumableArray.js":function(e,n,t){var r=t("../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"),a=t("../../node_modules/@babel/runtime/helpers/iterableToArray.js"),u=t("../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");e.exports=function(e){return r(e)||a(e)||u()}},"../../node_modules/invariant/browser.js":function(e,n,t){"use strict";e.exports=function(e,n,t,r,a,u,o,c){if(!e){var s;if(void 0===n)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[t,r,a,u,o,c],d=0;(s=new Error(n.replace(/%s/g,(function(){return i[d++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},"../../node_modules/ramda/es/compose.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_arity.js");function a(e,n){return function(){return n.call(this,e.apply(this,arguments))}}var u=t("../../node_modules/ramda/es/reduce.js"),o=t("../../node_modules/ramda/es/tail.js");function c(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(r.a)(arguments[0].length,Object(u.a)(a,arguments[0],Object(o.a)(arguments)))}var s=t("../../node_modules/ramda/es/internal/_curry1.js"),i=t("../../node_modules/ramda/es/internal/_isString.js"),d=Object(s.a)((function(e){return Object(i.a)(e)?e.split("").reverse().join(""):Array.prototype.slice.call(e,0).reverse()}));function l(){if(0===arguments.length)throw new Error("compose requires at least one argument");return c.apply(this,d(arguments))}t.d(n,"a",(function(){return l}))},"../../node_modules/ramda/es/curry.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry1.js"),a=t("../../node_modules/ramda/es/curryN.js"),u=Object(r.a)((function(e){return Object(a.a)(e.length,e)}));n.a=u},"../../node_modules/ramda/es/curryN.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_arity.js"),a=t("../../node_modules/ramda/es/internal/_curry1.js"),u=t("../../node_modules/ramda/es/internal/_curry2.js"),o=t("../../node_modules/ramda/es/internal/_isPlaceholder.js");var c=Object(u.a)((function(e,n){return 1===e?Object(a.a)(n):Object(r.a)(e,function e(n,t,a){return function(){for(var u=[],c=0,s=n,i=0;i<t.length||c<arguments.length;){var d;i<t.length&&(!Object(o.a)(t[i])||c>=arguments.length)?d=t[i]:(d=arguments[c],c+=1),u[i]=d,Object(o.a)(d)||(s-=1),i+=1}return s<=0?a.apply(this,u):Object(r.a)(s,e(n,u,a))}}(e,[],n))}));n.a=c},"../../node_modules/ramda/es/equals.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js");function a(e){for(var n,t=[];!(n=e.next()).done;)t.push(n.value);return t}function u(e,n,t){for(var r=0,a=t.length;r<a;){if(e(n,t[r]))return!0;r+=1}return!1}var o=t("../../node_modules/ramda/es/internal/_has.js");var c="function"==typeof Object.is?Object.is:function(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n},s=t("../../node_modules/ramda/es/keys.js"),i=t("../../node_modules/ramda/es/internal/_curry1.js"),d=Object(i.a)((function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}));function l(e,n,t,r){var o=a(e);function c(e,n){return f(e,n,t.slice(),r.slice())}return!u((function(e,n){return!u(c,n,e)}),a(n),o)}function f(e,n,t,r){if(c(e,n))return!0;var a,u,i=d(e);if(i!==d(n))return!1;if(null==e||null==n)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof n.equals)return"function"==typeof e.equals&&e.equals(n)&&"function"==typeof n.equals&&n.equals(e);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(a=e.constructor,null==(u=String(a).match(/^function (\w*)/))?"":u[1]))return e===n;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof n||!c(e.valueOf(),n.valueOf()))return!1;break;case"Date":if(!c(e.valueOf(),n.valueOf()))return!1;break;case"Error":return e.name===n.name&&e.message===n.message;case"RegExp":if(e.source!==n.source||e.global!==n.global||e.ignoreCase!==n.ignoreCase||e.multiline!==n.multiline||e.sticky!==n.sticky||e.unicode!==n.unicode)return!1}for(var _=t.length-1;_>=0;){if(t[_]===e)return r[_]===n;_-=1}switch(i){case"Map":return e.size===n.size&&l(e.entries(),n.entries(),t.concat([e]),r.concat([n]));case"Set":return e.size===n.size&&l(e.values(),n.values(),t.concat([e]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var O=Object(s.a)(e);if(O.length!==Object(s.a)(n).length)return!1;var j=t.concat([e]),E=r.concat([n]);for(_=O.length-1;_>=0;){var m=O[_];if(!Object(o.a)(m,n)||!f(n[m],e[m],j,E))return!1;_-=1}return!0}var _=Object(r.a)((function(e,n){return f(e,n,[],[])}));n.a=_},"../../node_modules/ramda/es/filter.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js"),a=t("../../node_modules/ramda/es/internal/_dispatchable.js");var u=t("../../node_modules/ramda/es/internal/_isObject.js"),o=t("../../node_modules/ramda/es/internal/_reduce.js"),c=t("../../node_modules/ramda/es/internal/_xfBase.js"),s=function(){function e(e,n){this.xf=n,this.f=e}return e.prototype["@@transducer/init"]=c.a.init,e.prototype["@@transducer/result"]=c.a.result,e.prototype["@@transducer/step"]=function(e,n){return this.f(n)?this.xf["@@transducer/step"](e,n):e},e}(),i=Object(r.a)((function(e,n){return new s(e,n)})),d=t("../../node_modules/ramda/es/keys.js"),l=Object(r.a)(Object(a.a)(["filter"],i,(function(e,n){return Object(u.a)(n)?Object(o.a)((function(t,r){return e(n[r])&&(t[r]=n[r]),t}),{},Object(d.a)(n)):function(e,n){for(var t=0,r=n.length,a=[];t<r;)e(n[t])&&(a[a.length]=n[t]),t+=1;return a}(e,n)})));n.a=l},"../../node_modules/ramda/es/head.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js"),a=t("../../node_modules/ramda/es/internal/_isString.js"),u=Object(r.a)((function(e,n){var t=e<0?n.length+e:e;return Object(a.a)(n)?n.charAt(t):n[t]}))(0);n.a=u},"../../node_modules/ramda/es/identity.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry1.js");function a(e){return e}var u=Object(r.a)(a);n.a=u},"../../node_modules/ramda/es/internal/_arity.js":function(e,n,t){"use strict";function r(e,n){switch(e){case 0:return function(){return n.apply(this,arguments)};case 1:return function(e){return n.apply(this,arguments)};case 2:return function(e,t){return n.apply(this,arguments)};case 3:return function(e,t,r){return n.apply(this,arguments)};case 4:return function(e,t,r,a){return n.apply(this,arguments)};case 5:return function(e,t,r,a,u){return n.apply(this,arguments)};case 6:return function(e,t,r,a,u,o){return n.apply(this,arguments)};case 7:return function(e,t,r,a,u,o,c){return n.apply(this,arguments)};case 8:return function(e,t,r,a,u,o,c,s){return n.apply(this,arguments)};case 9:return function(e,t,r,a,u,o,c,s,i){return n.apply(this,arguments)};case 10:return function(e,t,r,a,u,o,c,s,i,d){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}t.d(n,"a",(function(){return r}))},"../../node_modules/ramda/es/internal/_curry1.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("../../node_modules/ramda/es/internal/_isPlaceholder.js");function a(e){return function n(t){return 0===arguments.length||Object(r.a)(t)?n:e.apply(this,arguments)}}},"../../node_modules/ramda/es/internal/_curry2.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("../../node_modules/ramda/es/internal/_curry1.js"),a=t("../../node_modules/ramda/es/internal/_isPlaceholder.js");function u(e){return function n(t,u){switch(arguments.length){case 0:return n;case 1:return Object(a.a)(t)?n:Object(r.a)((function(n){return e(t,n)}));default:return Object(a.a)(t)&&Object(a.a)(u)?n:Object(a.a)(t)?Object(r.a)((function(n){return e(n,u)})):Object(a.a)(u)?Object(r.a)((function(n){return e(t,n)})):e(t,u)}}}},"../../node_modules/ramda/es/internal/_curry3.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("../../node_modules/ramda/es/internal/_curry1.js"),a=t("../../node_modules/ramda/es/internal/_curry2.js"),u=t("../../node_modules/ramda/es/internal/_isPlaceholder.js");function o(e){return function n(t,o,c){switch(arguments.length){case 0:return n;case 1:return Object(u.a)(t)?n:Object(a.a)((function(n,r){return e(t,n,r)}));case 2:return Object(u.a)(t)&&Object(u.a)(o)?n:Object(u.a)(t)?Object(a.a)((function(n,t){return e(n,o,t)})):Object(u.a)(o)?Object(a.a)((function(n,r){return e(t,n,r)})):Object(r.a)((function(n){return e(t,o,n)}));default:return Object(u.a)(t)&&Object(u.a)(o)&&Object(u.a)(c)?n:Object(u.a)(t)&&Object(u.a)(o)?Object(a.a)((function(n,t){return e(n,t,c)})):Object(u.a)(t)&&Object(u.a)(c)?Object(a.a)((function(n,t){return e(n,o,t)})):Object(u.a)(o)&&Object(u.a)(c)?Object(a.a)((function(n,r){return e(t,n,r)})):Object(u.a)(t)?Object(r.a)((function(n){return e(n,o,c)})):Object(u.a)(o)?Object(r.a)((function(n){return e(t,n,c)})):Object(u.a)(c)?Object(r.a)((function(n){return e(t,o,n)})):e(t,o,c)}}}},"../../node_modules/ramda/es/internal/_dispatchable.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_isArray.js");function a(e){return null!=e&&"function"==typeof e["@@transducer/step"]}function u(e,n,t){return function(){if(0===arguments.length)return t();var u=Array.prototype.slice.call(arguments,0),o=u.pop();if(!Object(r.a)(o)){for(var c=0;c<e.length;){if("function"==typeof o[e[c]])return o[e[c]].apply(o,u);c+=1}if(a(o)){var s=n.apply(null,u);return s(o)}}return t.apply(this,arguments)}}t.d(n,"a",(function(){return u}))},"../../node_modules/ramda/es/internal/_has.js":function(e,n,t){"use strict";function r(e,n){return Object.prototype.hasOwnProperty.call(n,e)}t.d(n,"a",(function(){return r}))},"../../node_modules/ramda/es/internal/_includes.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/equals.js");function a(e,n){return function(e,n,t){var a,u;if("function"==typeof e.indexOf)switch(typeof n){case"number":if(0===n){for(a=1/n;t<e.length;){if(0===(u=e[t])&&1/u===a)return t;t+=1}return-1}if(n!=n){for(;t<e.length;){if("number"==typeof(u=e[t])&&u!=u)return t;t+=1}return-1}return e.indexOf(n,t);case"string":case"boolean":case"function":case"undefined":return e.indexOf(n,t);case"object":if(null===n)return e.indexOf(n,t)}for(;t<e.length;){if(Object(r.a)(e[t],n))return t;t+=1}return-1}(n,e,0)>=0}t.d(n,"a",(function(){return a}))},"../../node_modules/ramda/es/internal/_isArguments.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_has.js"),a=Object.prototype.toString,u=function(){return"[object Arguments]"===a.call(arguments)?function(e){return"[object Arguments]"===a.call(e)}:function(e){return Object(r.a)("callee",e)}}();n.a=u},"../../node_modules/ramda/es/internal/_isArray.js":function(e,n,t){"use strict";n.a=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},"../../node_modules/ramda/es/internal/_isFunction.js":function(e,n,t){"use strict";function r(e){return"[object Function]"===Object.prototype.toString.call(e)}t.d(n,"a",(function(){return r}))},"../../node_modules/ramda/es/internal/_isObject.js":function(e,n,t){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}t.d(n,"a",(function(){return r}))},"../../node_modules/ramda/es/internal/_isPlaceholder.js":function(e,n,t){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}t.d(n,"a",(function(){return r}))},"../../node_modules/ramda/es/internal/_isString.js":function(e,n,t){"use strict";function r(e){return"[object String]"===Object.prototype.toString.call(e)}t.d(n,"a",(function(){return r}))},"../../node_modules/ramda/es/internal/_map.js":function(e,n,t){"use strict";function r(e,n){for(var t=0,r=n.length,a=Array(r);t<r;)a[t]=e(n[t]),t+=1;return a}t.d(n,"a",(function(){return r}))},"../../node_modules/ramda/es/internal/_reduce.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry1.js"),a=t("../../node_modules/ramda/es/internal/_isArray.js"),u=t("../../node_modules/ramda/es/internal/_isString.js"),o=Object(r.a)((function(e){return!!Object(a.a)(e)||!!e&&("object"==typeof e&&(!Object(u.a)(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))})),c=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,n){return this.f(e,n)},e}();var s=t("../../node_modules/ramda/es/internal/_arity.js"),i=t("../../node_modules/ramda/es/internal/_curry2.js"),d=Object(i.a)((function(e,n){return Object(s.a)(e.length,(function(){return e.apply(n,arguments)}))}));function l(e,n,t){for(var r=t.next();!r.done;){if((n=e["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=t.next()}return e["@@transducer/result"](n)}function f(e,n,t,r){return e["@@transducer/result"](t[r](d(e["@@transducer/step"],e),n))}t.d(n,"a",(function(){return O}));var _="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function O(e,n,t){if("function"==typeof e&&(e=function(e){return new c(e)}(e)),o(t))return function(e,n,t){for(var r=0,a=t.length;r<a;){if((n=e["@@transducer/step"](n,t[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return e["@@transducer/result"](n)}(e,n,t);if("function"==typeof t["fantasy-land/reduce"])return f(e,n,t,"fantasy-land/reduce");if(null!=t[_])return l(e,n,t[_]());if("function"==typeof t.next)return l(e,n,t);if("function"==typeof t.reduce)return f(e,n,t,"reduce");throw new TypeError("reduce: list must be array or iterable")}},"../../node_modules/ramda/es/internal/_xfBase.js":function(e,n,t){"use strict";n.a={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},"../../node_modules/ramda/es/invoker.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js"),a=t("../../node_modules/ramda/es/internal/_isFunction.js"),u=t("../../node_modules/ramda/es/curryN.js"),o=t("../../node_modules/ramda/es/toString.js"),c=Object(r.a)((function(e,n){return Object(u.a)(e+1,(function(){var t=arguments[e];if(null!=t&&Object(a.a)(t[n]))return t[n].apply(t,Array.prototype.slice.call(arguments,0,e));throw new TypeError(Object(o.a)(t)+' does not have a method named "'+n+'"')}))}));n.a=c},"../../node_modules/ramda/es/join.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/invoker.js"),a=Object(r.a)(1,"join");n.a=a},"../../node_modules/ramda/es/keys.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry1.js"),a=t("../../node_modules/ramda/es/internal/_has.js"),u=t("../../node_modules/ramda/es/internal/_isArguments.js"),o=!{toString:null}.propertyIsEnumerable("toString"),c=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),i=function(e,n){for(var t=0;t<e.length;){if(e[t]===n)return!0;t+=1}return!1},d="function"!=typeof Object.keys||s?Object(r.a)((function(e){if(Object(e)!==e)return[];var n,t,r=[],d=s&&Object(u.a)(e);for(n in e)!Object(a.a)(n,e)||d&&"length"===n||(r[r.length]=n);if(o)for(t=c.length-1;t>=0;)n=c[t],Object(a.a)(n,e)&&!i(r,n)&&(r[r.length]=n),t-=1;return r})):Object(r.a)((function(e){return Object(e)!==e?[]:Object.keys(e)}));n.a=d},"../../node_modules/ramda/es/map.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js"),a=t("../../node_modules/ramda/es/internal/_dispatchable.js"),u=t("../../node_modules/ramda/es/internal/_map.js"),o=t("../../node_modules/ramda/es/internal/_reduce.js"),c=t("../../node_modules/ramda/es/internal/_xfBase.js"),s=function(){function e(e,n){this.xf=n,this.f=e}return e.prototype["@@transducer/init"]=c.a.init,e.prototype["@@transducer/result"]=c.a.result,e.prototype["@@transducer/step"]=function(e,n){return this.xf["@@transducer/step"](e,this.f(n))},e}(),i=Object(r.a)((function(e,n){return new s(e,n)})),d=t("../../node_modules/ramda/es/curryN.js"),l=t("../../node_modules/ramda/es/keys.js"),f=Object(r.a)(Object(a.a)(["fantasy-land/map","map"],i,(function(e,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return Object(d.a)(n.length,(function(){return e.call(this,n.apply(this,arguments))}));case"[object Object]":return Object(o.a)((function(t,r){return t[r]=e(n[r]),t}),{},Object(l.a)(n));default:return Object(u.a)(e,n)}})));n.a=f},"../../node_modules/ramda/es/path.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js"),a=Object(r.a)((function(e,n){for(var t=n,r=0;r<e.length;){if(null==t)return;t=t[e[r]],r+=1}return t}));n.a=a},"../../node_modules/ramda/es/prop.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js"),a=t("../../node_modules/ramda/es/path.js"),u=Object(r.a)((function(e,n){return Object(a.a)([e],n)}));n.a=u},"../../node_modules/ramda/es/reduce.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry3.js"),a=t("../../node_modules/ramda/es/internal/_reduce.js"),u=Object(r.a)(a.a);n.a=u},"../../node_modules/ramda/es/tail.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_isArray.js");function a(e,n){return function(){var t=arguments.length;if(0===t)return n();var a=arguments[t-1];return Object(r.a)(a)||"function"!=typeof a[e]?n.apply(this,arguments):a[e].apply(a,Array.prototype.slice.call(arguments,0,t-1))}}var u=t("../../node_modules/ramda/es/internal/_curry1.js"),o=t("../../node_modules/ramda/es/internal/_curry3.js"),c=Object(o.a)(a("slice",(function(e,n,t){return Array.prototype.slice.call(t,e,n)}))),s=Object(u.a)(a("tail",c(1,1/0)));n.a=s},"../../node_modules/ramda/es/toString.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry1.js"),a=t("../../node_modules/ramda/es/internal/_includes.js"),u=t("../../node_modules/ramda/es/internal/_map.js");function o(e){return'"'+e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}var c=function(e){return(e<10?"0":"")+e},s="function"==typeof Date.prototype.toISOString?function(e){return e.toISOString()}:function(e){return e.getUTCFullYear()+"-"+c(e.getUTCMonth()+1)+"-"+c(e.getUTCDate())+"T"+c(e.getUTCHours())+":"+c(e.getUTCMinutes())+":"+c(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"},i=t("../../node_modules/ramda/es/keys.js");var d=t("../../node_modules/ramda/es/internal/_curry2.js"),l=t("../../node_modules/ramda/es/filter.js"),f=Object(d.a)((function(e,n){return Object(l.a)((t=e,function(){return!t.apply(this,arguments)}),n);var t}));var _=Object(r.a)((function(e){return function e(n,t){var r=function(r){var u=t.concat([n]);return Object(a.a)(r,u)?"<Circular>":e(r,u)},c=function(e,n){return Object(u.a)((function(n){return o(n)+": "+r(e[n])}),n.slice().sort())};switch(Object.prototype.toString.call(n)){case"[object Arguments]":return"(function() { return arguments; }("+Object(u.a)(r,n).join(", ")+"))";case"[object Array]":return"["+Object(u.a)(r,n).concat(c(n,f((function(e){return/^\d+$/.test(e)}),Object(i.a)(n)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof n?"new Boolean("+r(n.valueOf())+")":n.toString();case"[object Date]":return"new Date("+(isNaN(n.valueOf())?r(NaN):o(s(n)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof n?"new Number("+r(n.valueOf())+")":1/n==-1/0?"-0":n.toString(10);case"[object String]":return"object"==typeof n?"new String("+r(n.valueOf())+")":o(n);case"[object Undefined]":return"undefined";default:if("function"==typeof n.toString){var d=n.toString();if("[object Object]"!==d)return d}return"{"+c(n,Object(i.a)(n)).join(", ")+"}"}}(e,[])}));n.a=_},"../../node_modules/ramda/es/toUpper.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/invoker.js"),a=Object(r.a)(0,"toUpperCase");n.a=a},"../../node_modules/redux-actions/es/createAction.js":function(e,n,t){"use strict";var r=t("../../node_modules/invariant/browser.js"),a=t.n(r),u=t("../../node_modules/redux-actions/es/utils/isFunction.js"),o=t("../../node_modules/redux-actions/es/utils/identity.js"),c=function(e){return null===e};function s(e,n,t){void 0===n&&(n=o.a),a()(Object(u.a)(n)||c(n),"Expected payloadCreator to be a function, undefined or null");var r=c(n)||n===o.a?o.a:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return e instanceof Error?e:n.apply(void 0,[e].concat(r))},s=Object(u.a)(t),i=e.toString(),d=function(){var n=r.apply(void 0,arguments),a={type:e};return n instanceof Error&&(a.error=!0),void 0!==n&&(a.payload=n),s&&(a.meta=t.apply(void 0,arguments)),a};return d.toString=function(){return i},d}t.d(n,"a",(function(){return s}))},"../../node_modules/redux-actions/es/utils/identity.js":function(e,n,t){"use strict";n.a=function(e){return e}},"../../node_modules/redux-actions/es/utils/isFunction.js":function(e,n,t){"use strict";n.a=function(e){return"function"==typeof e}},"../../packages/player/actions/play.js":function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return o}));var r=t("../../node_modules/redux-actions/es/createAction.js"),a=t("../../packages/player/actions/types.js"),u=Object(r.a)(a.Q),o=(Object(r.a)(a.h),Object(r.a)(a.P));Object(r.a)(a.g),Object(r.a)(a.S),Object(r.a)(a.f),Object(r.a)(a.e),Object(r.a)(a.a),Object(r.a)(a.c),Object(r.a)(a.d)},"../../packages/player/actions/tabs.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("../../node_modules/redux-actions/es/createAction.js"),a=t("../../packages/player/actions/types.js"),u=Object(r.a)(a.Eb)},"../../packages/player/actions/timepiece.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("../../node_modules/redux-actions/es/createAction.js"),a=t("../../packages/player/actions/types.js"),u=(Object(r.a)(a.i),Object(r.a)(a.R));Object(r.a)(a.Db),Object(r.a)(a.b)},"../../packages/player/actions/types.js":function(e,n,t){"use strict";t.d(n,"j",(function(){return a})),t.d(n,"M",(function(){return u})),t.d(n,"O",(function(){return o})),t.d(n,"T",(function(){return c})),t.d(n,"hb",(function(){return s})),t.d(n,"lb",(function(){return i})),t.d(n,"gb",(function(){return d})),t.d(n,"mb",(function(){return l})),t.d(n,"ib",(function(){return f})),t.d(n,"eb",(function(){return _})),t.d(n,"fb",(function(){return O})),t.d(n,"Y",(function(){return j})),t.d(n,"cb",(function(){return E})),t.d(n,"bb",(function(){return m})),t.d(n,"X",(function(){return b})),t.d(n,"db",(function(){return p})),t.d(n,"ab",(function(){return S})),t.d(n,"Z",(function(){return T})),t.d(n,"jb",(function(){return y})),t.d(n,"nb",(function(){return N})),t.d(n,"ob",(function(){return I})),t.d(n,"kb",(function(){return A})),t.d(n,"V",(function(){return g})),t.d(n,"W",(function(){return v})),t.d(n,"q",(function(){return h})),t.d(n,"u",(function(){return P})),t.d(n,"o",(function(){return R})),t.d(n,"v",(function(){return C})),t.d(n,"r",(function(){return L})),t.d(n,"p",(function(){return H})),t.d(n,"m",(function(){return D})),t.d(n,"n",(function(){return M})),t.d(n,"l",(function(){return B})),t.d(n,"s",(function(){return U})),t.d(n,"w",(function(){return w})),t.d(n,"x",(function(){return x})),t.d(n,"t",(function(){return W})),t.d(n,"k",(function(){return k})),t.d(n,"Ab",(function(){return V})),t.d(n,"yb",(function(){return F})),t.d(n,"zb",(function(){return Y})),t.d(n,"xb",(function(){return G})),t.d(n,"Bb",(function(){return q})),t.d(n,"Cb",(function(){return K})),t.d(n,"ub",(function(){return Q})),t.d(n,"wb",(function(){return z})),t.d(n,"tb",(function(){return X})),t.d(n,"vb",(function(){return Z})),t.d(n,"sb",(function(){return $})),t.d(n,"qb",(function(){return J})),t.d(n,"rb",(function(){return ee})),t.d(n,"pb",(function(){return ne})),t.d(n,"J",(function(){return te})),t.d(n,"H",(function(){return re})),t.d(n,"I",(function(){return ae})),t.d(n,"G",(function(){return ue})),t.d(n,"K",(function(){return oe})),t.d(n,"L",(function(){return ce})),t.d(n,"D",(function(){return se})),t.d(n,"F",(function(){return ie})),t.d(n,"C",(function(){return de})),t.d(n,"E",(function(){return le})),t.d(n,"B",(function(){return fe})),t.d(n,"z",(function(){return _e})),t.d(n,"A",(function(){return Oe})),t.d(n,"y",(function(){return je})),t.d(n,"d",(function(){return Ee})),t.d(n,"Db",(function(){return me})),t.d(n,"Q",(function(){return be})),t.d(n,"h",(function(){return pe})),t.d(n,"P",(function(){return Se})),t.d(n,"g",(function(){return Te})),t.d(n,"S",(function(){return ye})),t.d(n,"a",(function(){return Ne})),t.d(n,"f",(function(){return Ie})),t.d(n,"e",(function(){return Ae})),t.d(n,"c",(function(){return ge})),t.d(n,"b",(function(){return ve})),t.d(n,"i",(function(){return he})),t.d(n,"R",(function(){return Pe})),t.d(n,"N",(function(){return Re})),t.d(n,"U",(function(){return Ce})),t.d(n,"Eb",(function(){return Le}));var r=function(e){return"".concat("PLAYER","_").concat(e)},a=r("CONSTRUCTED"),u=r("INIT"),o=r("READY"),c=r("RESTORE"),s=(r("SET_CHAPTERS_LIST"),r("NEXT_CHAPTER"),r("PREVIOUS_CHAPTER"),r("SET_CHAPTER"),r("UPDATE_CHAPTER"),r("STEP_FORWARD"),r("STEP_BACKWARDS"),r("SHOW_COMPONENT_INFO")),i=r("SHOW_COMPONENT_SHOW_TITLE"),d=r("SHOW_COMPONENT_EPISODE_TITLE"),l=r("SHOW_COMPONENT_SUBTITLE"),f=r("SHOW_COMPONENT_INFO_POSTER"),_=r("SHOW_COMPONENT_CONTROLS_CHAPTERS"),O=r("SHOW_COMPONENT_CONTROLS_STEPPERS"),j=r("SHOW_COMPONENT_CONTROLS_BUTTON_LOADING"),E=r("SHOW_COMPONENT_CONTROLS_BUTTON_REPLAY"),m=r("SHOW_COMPONENT_CONTROLS_BUTTON_REMAINING"),b=r("SHOW_COMPONENT_CONTROLS_BUTTON_DURATION"),p=r("SHOW_COMPONENT_CONTROLS_BUTTON_RETRY"),S=r("SHOW_COMPONENT_CONTROLS_BUTTON_PLAYING"),T=r("SHOW_COMPONENT_CONTROLS_BUTTON_PAUSE"),y=r("SHOW_COMPONENT_PROGRESSBAR"),N=r("SHOW_COMPONENT_TAB"),I=r("SHOW_COMPONENT_VOLUME_SLIDER"),A=r("SHOW_COMPONENT_RATE_SLIDER"),g=r("SHOW_COMPONENT_CHANNELS"),v=r("SHOW_COMPONENT_CONTROLS_BUTTON"),h=r("HIDE_COMPONENT_INFO"),P=r("HIDE_COMPONENT_SHOW_TITLE"),R=r("HIDE_COMPONENT_EPISODE_TITLE"),C=r("HIDE_COMPONENT_SUBTITLE"),L=r("HIDE_COMPONENT_INFO_POSTER"),H=r("HIDE_COMPONENT_ERROR"),D=r("HIDE_COMPONENT_CONTROLS_CHAPTERS"),M=r("HIDE_COMPONENT_CONTROLS_STEPPERS"),B=r("HIDE_COMPONENT_CONTROLS_BUTTON"),U=r("HIDE_COMPONENT_PROGRESSBAR"),w=r("HIDE_COMPONENT_TAB"),x=r("HIDE_COMPONENT_VOLUME_SLIDER"),W=r("HIDE_COMPONENT_RATE_SLIDER"),k=r("HIDE_COMPONENT_CHANNELS"),V=r("SHOW_VISIBLE_COMPONENTS_TAB_INFO"),F=r("SHOW_VISIBLE_COMPONENTS_TAB_CHAPTERS"),Y=r("SHOW_VISIBLE_COMPONENTS_TAB_FILES"),G=r("SHOW_VISIBLE_COMPONENTS_TAB_AUDIO"),q=r("SHOW_VISIBLE_COMPONENTS_TAB_SHARE"),K=r("SHOW_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS"),Q=(r("SHOW_VISIBLE_COMPONENTS_TAB_PLAYLIST"),r("SHOW_VISIBLE_COMPONENTS_HEADER_POSTER")),z=r("SHOW_VISIBLE_COMPONENTS_HEADER_TITLE"),X=r("SHOW_VISIBLE_COMPONENTS_HEADER_EPISODE"),Z=r("SHOW_VISIBLE_COMPONENTS_HEADER_SUBTITLE"),$=r("SHOW_VISIBLE_COMPONENTS_CONTROLS_STEPPER"),J=r("SHOW_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS"),ee=r("SHOW_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR"),ne=r("SHOW_SHARE_PLAYTIME"),te=r("HIDE_VISIBLE_COMPONENTS_TAB_INFO"),re=r("HIDE_VISIBLE_COMPONENTS_TAB_CHAPTERS"),ae=r("HIDE_VISIBLE_COMPONENTS_TAB_FILES"),ue=r("HIDE_VISIBLE_COMPONENTS_TAB_AUDIO"),oe=r("HIDE_VISIBLE_COMPONENTS_TAB_SHARE"),ce=r("HIDE_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS"),se=(r("HIDE_VISIBLE_COMPONENTS_TAB_PLAYLIST"),r("HIDE_VISIBLE_COMPONENTS_HEADER_POSTER")),ie=r("HIDE_VISIBLE_COMPONENTS_HEADER_TITLE"),de=r("HIDE_VISIBLE_COMPONENTS_HEADER_EPISODE"),le=r("HIDE_VISIBLE_COMPONENTS_HEADER_SUBTITLE"),fe=r("HIDE_VISIBLE_COMPONENTS_CONTROLS_STEPPER"),_e=r("HIDE_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS"),Oe=r("HIDE_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR"),je=r("HIDE_SHARE_PLAYTIME"),Ee=r("BACKEND_ERROR"),me=(r("NETWORK_EMPTY"),r("NETWORK_NO_SOURCE"),r("ERROR_MISSING_AUDIO_FILES"),r("ERROR_POSTER_LOAD"),r("SIMULATE_PLAYTIME")),be=(r("ENABLE_GHOST_MODE"),r("DISABLE_GHOST_MODE"),r("REQUEST_PLAY")),pe=r("BACKEND_PLAY"),Se=r("REQUEST_PAUSE"),Te=r("BACKEND_PAUSE"),ye=r("REQUEST_RESTART"),Ne=r("BACKEND_BUFFER"),Ie=(r("STOP"),r("IDLE"),r("BACKEND_LOADING_START")),Ae=r("BACKEND_LOADING_END"),ge=(r("REQUEST_LOAD"),r("LOADED"),r("BACKEND_END")),ve=(r("MUTE"),r("UNMUTE"),r("SET_VOLUME"),r("SET_RATE"),r("BACKEND_DURATION")),he=r("BACKEND_PLAYTIME"),Pe=r("REQUEST_PLAYTIME"),Re=(r("UPDATE_PLAYTIME"),r("LOAD_QUANTILES")),Ce=r("SET_QUANTILE"),Le=(r("SET_RUNTIME"),r("SET_LANGUAGE"),r("SET_VERSION"),r("SET_MODE"),r("SELECT_CONTENT"),r("SELECT_CHANNEL"),r("SELECT_EMBED_SIZE"),r("TOGGLE_TAB"));r("SET_TABS"),r("SET_THEME"),r("SET_TRANSCRIPTS_TIMELINE"),r("UPDATE_TRANSCRIPTS"),r("TOGGLE_FOLLOW_TRANSCRIPTS"),r("SEARCH_TRANSCRIPTS"),r("SET_SEARCH_TRANSCRIPTS_RESULTS"),r("NEXT_SEARCH_RESULT"),r("PREVIOUS_SEARCH_RESULT"),r("RESET_SEARCH_TRANSCRIPTS"),r("SHOW_ERROR"),r("HIDE_ERROR"),r("RETRY_PLAY"),r("ERROR_CONFIG_MEDIA"),r("ERROR_CONFIG_MISSING"),r("KEY_UP"),r("KEY_DOWN"),r("NEXT_PLAYLIST_ENTRY"),r("SELECT_PLAYLIST_ENTRY"),r("MARK_PLAYLIST_ENTRY_ACTIVE"),r("FILE_HOVER"),r("FILE_SELECT")},"../../packages/utils/helper.js":function(e,n,t){"use strict";var r=t("../../node_modules/@babel/runtime/helpers/defineProperty.js"),a=t.n(r),u=t("../../node_modules/ramda/es/curry.js"),o=t("../../node_modules/ramda/es/map.js"),c=t("../../node_modules/ramda/es/identity.js"),s=t("../../node_modules/ramda/es/compose.js"),i=t("../../node_modules/ramda/es/join.js"),d=t("../../node_modules/ramda/es/internal/_curry1.js"),l=t("../../node_modules/ramda/es/internal/_curry2.js"),f=t("../../node_modules/ramda/es/internal/_map.js"),_=t("../../node_modules/ramda/es/curryN.js"),O=Object(l.a)((function(e,n){return n>e?n:e})),j=t("../../node_modules/ramda/es/prop.js"),E=Object(l.a)((function(e,n){return Object(o.a)(Object(j.a)(e),n)})),m=t("../../node_modules/ramda/es/reduce.js"),b=Object(l.a)((function(e,n){return Object(_.a)(Object(m.a)(O,0,E("length",n)),(function(){var t=arguments,r=this;return e.apply(r,Object(f.a)((function(e){return e.apply(r,t)}),n))}))})),p=Object(d.a)((function(e){return b((function(){return Array.prototype.slice.call(arguments,0)}),e)})),S=t("../../node_modules/ramda/es/toUpper.js"),T=t("../../node_modules/ramda/es/head.js"),y=t("../../node_modules/ramda/es/tail.js");t("../../packages/utils/predicates.js");function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,"c",(function(){return A})),t.d(n,"b",(function(){return g})),t.d(n,"a",(function(){return v}));var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return isNaN(parseInt(e,10))?0:parseInt(e,10)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return isNaN(parseFloat(e))?0:parseFloat(e)},v=Object(u.a)((function(e,n){return Object(o.a)((function(e){return e(n)}),e)})),h=(Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.a;return Object.keys(e).reduce((function(t,r){return I(I({},t),{},a()({},r,Object(s.a)(e[r],n)))}),{})})),Object(u.a)((function(e,n){return n.startsWith(e)}))),P=Object(u.a)((function(e,n){return n.endsWith(e)})),R=Object(u.a)((function(e,n){return h(e,n)?n.slice(e.length):n})),C=Object(u.a)((function(e,n){return P(e,n)?n.slice(0,n.length-e.length):n}));Object(u.a)((function(e,n){return R(e,C(e,n))})),Object(s.a)(Object(i.a)(""),p([Object(s.a)(S.a,T.a),y.a]))},"../../packages/utils/predicates.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry1.js"),a=Object(r.a)((function(e){return null==e}));t.d(n,"a",(function(){return s}));var u,o,c,s=(u=function(e){return void 0===e},o=a,function(e){return u(e)||o(e)});c=s},"../../packages/utils/time.js":function(e,n,t){"use strict";var r=t("../../node_modules/ramda/es/internal/_curry2.js"),a=Object(r.a)((function(e,n){return null!=n&&n.constructor===e||n instanceof e})),u=t("../../node_modules/ramda/es/compose.js"),o=t("../../packages/utils/helper.js"),c=t("../../packages/utils/predicates.js");t.d(n,"a",(function(){return i}));var s=new RegExp(/^(?:(\d{1,2}):)?(?:(\d{1,2}):)?(\d{1,2})(?:\.(\d{1,3}))?$/),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0";if(a(Number,e)||Object(c.a)(e))return e;var n=s.exec(e);if(!n)return 0;var t=parseInt(n[2]?n[1]:0),r=parseInt(n[2]?n[2]:n[1]||0),u=parseInt(n[3]||0),o=parseInt(n[4]||0);return 60*t*60*1e3+60*r*1e3+1e3*u+o},d=(Object(u.a)(o.c,(function(e){return 1e3*e}),o.b),Object(u.a)(o.b,(function(e){return e/1e3}),o.c));Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return parseInt(e%60)}),d),Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return parseInt(e/60)%60}),d),Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return parseInt(e/3600)%24}),d)},"./src/extensions/external-events.js":function(e,n,t){"use strict";t.r(n);var r=t("../../node_modules/@babel/runtime/helpers/toConsumableArray.js"),a=t.n(r),u=t("../../node_modules/ramda/es/compose.js"),o=t("../../node_modules/ramda/es/prop.js"),c=t("../../packages/utils/time.js"),s=t("../../packages/player/actions/timepiece.js"),i=t("../../packages/player/actions/tabs.js"),d=t("../../packages/player/actions/play.js"),l=function(e,n){return Object(u.a)(function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.time&&e.dispatch(Object(s.a)(Object(c.a)(n.time))),n}}(n),function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.tab&&e.dispatch(Object(i.a)(n.tab)),n}}(n),function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(n.action){case"play":e.dispatch(Object(d.b)());break;case"pause":e.dispatch(Object(d.a)())}return n}}(n),function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.ref===e?n:{}}}(e),Object(o.a)("dataset"),Object(o.a)("target"))};void 0===window.registerExternalEvents&&(window.registerExternalEvents=function(e){return function(n){return a()(document.querySelectorAll('[rel="podlove-web-player"]')).forEach((function(t){return t.addEventListener("click",l(e,n))})),n}})}}); 