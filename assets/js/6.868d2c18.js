(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{412:function(t,e,r){},426:function(t,e,r){"use strict";var n=r(8),i=r(6),o=r(230),a=r(28),s=r(9),u=r(35),c=r(427),l=r(61),f=r(1),p=r(44),h=r(92).f,d=r(34).f,N=r(12).f,m=r(428).trim,g=i.Number,v=g.prototype,I="Number"==u(p(v)),b=function(t){var e,r,n,i,o,a,s,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=m(c)).charCodeAt(0))||45===e){if(88===(r=c.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,n)}return+c};if(o("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(I?f((function(){v.valueOf.call(r)})):"Number"!=u(r))?c(new g(b(e)),r,y):b(e)},E=n?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)s(g,w=E[x])&&!s(y,w)&&N(y,w,d(g,w));y.prototype=v,v.constructor=y,a(i,"Number",y)}},427:function(t,e,r){var n=r(7),i=r(132);t.exports=function(t,e,r){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(t,a),t}},428:function(t,e,r){var n=r(27),i="["+r(429)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},429:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},430:function(t,e,r){"use strict";var n=r(412);r.n(n).a},443:function(t,e,r){"use strict";r.r(e);r(135),r(24),r(232),r(134),r(426),r(90);var n=r(33),i={props:{id:{type:String,required:!0},title:{type:String},module:{type:String},initialpath:{type:String},view:{type:String,default:null,validator:function(t){return[null,"preview","editor"]}},height:{type:Number,default:500}},computed:{style:function(){return{height:this.height+"px"}},urlParams:function(){var t={title:this.title,module:this.module,initialpath:this.initialpath,view:this.view,autoresize:1,hidenavigation:1,codemirror:1,fontsize:14};return Object.keys(t).filter((function(e){return!!t[e]})).reduce((function(e,r){return[].concat(Object(n.a)(e),["".concat(r,"=").concat(encodeURIComponent(t[r]))])}),[]).join("&")}}},o=(r(430),r(3)),a=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{staticClass:"codesandbox",style:this.style,attrs:{src:"https://codesandbox.io/embed/"+this.id+"?"+this.urlParams,title:this.title,sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}})}),[],!1,null,"f76b2cc6",null);e.default=a.exports}}]);