(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f354f6b"],{"0462":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"fixed w-full bg-white py-3 shadow-lg z-50"},[a("div",{staticClass:"container flex justify-between items-center"},[a("div",{staticClass:"btn-icon block sm:hidden"},[a("svg",{staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z",fill:"#14AAA7"}})])]),a("img",{staticClass:"h-10",attrs:{src:n("4ffd"),alt:"logo"}}),a("div",{staticClass:"btn-icon block sm:hidden"},[a("svg",{staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M16 17H7v-6.5C7 8 9 6 11.5 6S16 8 16 10.5m2 5.5v-5.5c0-3.07-2.14-5.64-5-6.32V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1m-8.5 4a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z",fill:"#14AAA7"}})])]),a("div",{staticClass:"items-center hidden sm:flex"},[t._l(t.nav,(function(e){return a("div",{key:e.text,staticClass:"capitalize ml-5 text-gray-700 font-bold cursor-pointer",on:{click:function(n){return t.$router.push({name:e.link})}}},[t._v(" "+t._s(e.text)+" ")])})),a("div",{staticClass:"btn-primary bg-red-500 ml-5 font-normal hover:bg-red-600",on:{click:t.logout}},[t._v(" Logout ")])],2)])])},i=[],r=(n("ac1f"),n("5319"),{data:function(){return{nav:[{text:"Beranda",link:"home"},{text:"Fitur",link:""},{text:"Cara Pemakaian",link:""},{text:"riwayat transaksi",link:""}]}},methods:{logout:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("dataPeserta"),this.$router.replace({name:"auth",params:{form:"login"}})}}}),s=r,l=n("2877"),o=Object(l["a"])(s,a,i,!1,null,null,null);e["a"]=o.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var a=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},2451:function(t,e,n){},5319:function(t,e,n){"use strict";var a=n("d784"),i=n("825a"),r=n("7b0b"),s=n("50c4"),l=n("a691"),o=n("1d80"),c=n("8aa5"),u=n("14c3"),d=Math.max,v=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var x=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,b=x?"$":"$0";return[function(n,a){var i=o(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,i,a):e.call(String(i),n,a)},function(t,a){if(!x&&g||"string"===typeof a&&-1===a.indexOf(b)){var r=n(e,t,this,a);if(r.done)return r.value}var o=i(t),f=String(this),p="function"===typeof a;p||(a=String(a));var m=o.global;if(m){var k=o.unicode;o.lastIndex=0}var w=[];while(1){var _=u(o,f);if(null===_)break;if(w.push(_),!m)break;var E=String(_[0]);""===E&&(o.lastIndex=c(f,s(o.lastIndex),k))}for(var y="",S=0,$=0;$<w.length;$++){_=w[$];for(var A=String(_[0]),R=d(v(l(_.index),f.length),0),I=[],O=1;O<_.length;O++)I.push(h(_[O]));var P=_.groups;if(p){var j=[A].concat(I,R,f);void 0!==P&&j.push(P);var T=String(a.apply(void 0,j))}else T=C(A,f,R,I,P,a);R>=S&&(y+=f.slice(S,R)+T,S=R+A.length)}return y+f.slice(S)}];function C(t,n,a,i,s,l){var o=a+t.length,c=i.length,u=m;return void 0!==s&&(s=r(s),u=p),e.call(l,u,(function(e,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(o);case"<":l=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return e;if(u>c){var d=f(u/10);return 0===d?e:d<=c?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):e}l=i[u-1]}return void 0===l?"":l}))}}))},6547:function(t,e,n){var a=n("a691"),i=n("1d80"),r=function(t){return function(e,n){var r,s,l=String(i(e)),o=a(n),c=l.length;return o<0||o>=c?t?"":void 0:(r=l.charCodeAt(o),r<55296||r>56319||o+1===c||(s=l.charCodeAt(o+1))<56320||s>57343?t?l.charAt(o):r:t?l.slice(o,o+2):s-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"6e36":function(t,e,n){"use strict";var a=n("e240"),i=n.n(a);i.a},"841c":function(t,e,n){"use strict";var a=n("d784"),i=n("825a"),r=n("1d80"),s=n("129f"),l=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var r=i(t),o=String(this),c=r.lastIndex;s(c,0)||(r.lastIndex=0);var u=l(r,o);return s(r.lastIndex,c)||(r.lastIndex=c),null===u?-1:u.index}]}))},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),i=n("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,l=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(l=function(t){var e,n,i,l,d=this,v=c&&d.sticky,f=a.call(d),p=d.source,m=0,h=t;return v&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,m++),n=new RegExp("^(?:"+p+")",f)),u&&(n=new RegExp("^"+p+"$(?!\\s)",f)),o&&(e=d.lastIndex),i=r.call(v?n:d,h),v?i?(i.input=i.input.slice(m),i[0]=i[0].slice(m),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&s.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),t.exports=l},"9f7f":function(t,e,n){"use strict";var a=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},bb0b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("div",{on:{click:function(e){t.visible=!0}}},[a("div",{staticClass:"flex"},[a("input",{staticClass:"text-field rounded-tr-none rounded-br-none cursor-pointer",attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.selectedValue}}),t._m(0)])]),t.visible?a("div",{staticClass:"option-menu z-10",class:t.position},[a("div",{staticClass:"flex px-2 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"search",placeholder:"Cari data"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("div",{staticClass:"text-field-icon bg-teal-500 border-l-0 rounded-tl-none rounded-bl-none",on:{click:function(e){return t.$emit("dataSearching",t.search)}}},[a("img",{attrs:{src:n("d103"),alt:"icon",width:"25px"}})])]),a("ul",{staticStyle:{"max-height":"200px",overflow:"auto"}},[t.loading?a("li",[a("svg",{staticClass:"animate-spin text-teal-300 mx-auto",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none"}},[a("circle",{staticClass:"opacity-50",attrs:{cx:"12px",cy:"12px",r:"10",stroke:"currentColor","stroke-width":"4"}}),a("path",{attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])]):t._l(t.dataSearch,(function(e,n){return a("li",{key:n,on:{click:function(n){return t.selected(e)}}},[t._v(" "+t._s(e[t.item.text])+" ")])}))],2)]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-field-icon border-l-0 rounded-tl-none rounded-bl-none"},[a("img",{attrs:{src:n("1ad2"),alt:"icon",width:"25px"}})])}],r=(n("4de4"),n("caad"),n("ac1f"),n("2532"),n("841c"),{props:["items","returnObject","loading","item","placeholder","position","selectedValue"],model:{props:"value",event:"input"},data:function(){return{visible:!1,search:"",text:"",value:"",data:[]}},watch:{value:function(t){this.$emit("input",t)}},computed:{dataSearch:{get:function(){var t=this;return this.items.filter((function(e){return e[t.item.text].toLowerCase().includes(t.search)}))}}},methods:{handleClickOutside:function(t){this.$el.contains(t.target)||(this.visible=!1)},selected:function(t){this.$emit("update:selected-value",t[this.item.text]),this.returnObject?this.value=t:this.value=t[this.item.value],this.visible=!1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}}),s=r,l=(n("6e36"),n("2877")),o=Object(l["a"])(s,a,i,!1,null,"733ec558",null);e["a"]=o.exports},bb63:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{on:{click:function(e){t.visible=!0}}},[n("div",{staticClass:"flex"},[n("input",{staticClass:"text-field rounded-tr-none rounded-br-none cursor-pointer",attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.selectedValue}}),t._m(0)])]),t.visible?n("ul",{staticClass:"option-menu z-10"},t._l(t.items,(function(e,a){return n("li",{key:a,staticClass:"text-gray-800",on:{click:function(n){return t.selected(e)}}},[t._v(" "+t._s(e[t.item.text])+" ")])})),0):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-field-icon border-l-0 rounded-tl-none rounded-bl-none bg-white"},[a("img",{attrs:{src:n("1ad2"),alt:"icon",width:"25px"}})])}],r={props:["items","return-object","placeholder","item","selected-value"],model:{prop:"value",event:"input"},data:function(){return{visible:!1,text:"",value:""}},watch:{value:function(t){this.$emit("input",t)}},methods:{handleClickOutside:function(t){this.$el.contains(t.target)||(this.visible=!1)},selected:function(t){this.$emit("update:selected-value",t[this.item.text]),this.value=t[this.item.value],this.visible=!1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},s=r,l=(n("d90a"),n("2877")),o=Object(l["a"])(s,a,i,!1,null,"53950712",null);e["a"]=o.exports},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("d039"),r=n("b622"),s=n("9263"),l=n("9112"),o=r("species"),c=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=r(t),m=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=m&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!m||!h||"replace"===t&&(!c||!u||v)||"split"===t&&!f){var x=/./[p],g=n(p,""[t],(function(t,e,n,a,i){return e.exec===s?m&&!i?{done:!0,value:x.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),b=g[0],C=g[1];a(String.prototype,t,b),a(RegExp.prototype,p,2==e?function(t,e){return C.call(t,this,e)}:function(t){return C.call(t,this)})}d&&l(RegExp.prototype[p],"sham",!0)}},d90a:function(t,e,n){"use strict";var a=n("2451"),i=n.n(a);i.a},e240:function(t,e,n){},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"py-12 bg-gray-800 text-white"},[a("div",{staticClass:"container"},[a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-10 gap-4"},[a("div",{staticClass:"sm:col-span-3"},[a("img",{staticClass:"h-12 mb-12",attrs:{src:n("0bc8"),alt:"logo"}}),a("div",{staticClass:"flex"},t._l(t.sosmed,(function(t){return a("a",{key:t.img,staticClass:"btn-icon bg-white mr-3",attrs:{href:t.link,target:"_blank"}},[a("img",{attrs:{src:n("67f7")("./"+t.img),alt:"sosmed",width:"25px"}})])})),0)]),a("div",{staticClass:"sm:col-span-2"},[a("h1",{staticClass:"font-bold mb-4"},[t._v("SITEMAP")]),a("ul",t._l(t.nav,(function(e){return a("li",{key:e.text,staticClass:"text-gray-500 cursor-pointer hover:underline mb-2"},[t._v(" "+t._s(e.text)+" ")])})),0)]),t._m(0),a("div",{staticClass:"sm:col-span-3"},[a("h1",{staticClass:"font-bold mb-4"},[t._v("BERITA")]),a("p",{staticClass:"text-gray-500 mb-6"},[t._v(" Berlangganan sekarang untuk mendapatkan berita dan informasi terbaru dari kami ")]),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("div",{staticClass:"flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),a("button",{staticClass:"btn-primary px-2 rounded-tl-none rounded-bl-none",attrs:{disabled:n,type:"submit"}},[a("Spinner",[t._v("KIRIM")])],1)]),a("p",{staticClass:"field-message"},[t._v(t._s(i[0]))])]}}],null,!0)}),a("Notif",{staticClass:"mb-4"})],1)]}}])})],1)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:col-span-2"},[n("h1",{staticClass:"font-bold mb-4"},[t._v("RESOURCE")]),n("p",{staticClass:"text-gray-500"},[t._v(" Lorem ipsum dolor sit amet dito ama ")])])}],r=n("5530"),s=n("7bb1"),l=n("4c93"),o=n("6959"),c=n("2375");Object(s["c"])("required",Object(r["a"])(Object(r["a"])({},l["b"]),{},{message:"Data harus di isi"})),Object(s["c"])("email",Object(r["a"])(Object(r["a"])({},l["a"]),{},{message:"Data harus berupa e-mail"}));var u={data:function(){return{sosmed:[{img:"facebook.svg",link:""},{img:"youtube.svg",link:""},{img:"twitter.svg",link:""}],nav:[{text:"Beranda",link:""},{text:"Fitur",link:""},{text:"Cara Pemakaian",link:""},{text:"riwayat transaksi",link:""}],data:{email:""}}},components:{Spinner:c["a"],Notif:o["a"]},methods:{onSubmit:function(){this.$store.dispatch("dataAuth/postDataLogin",this.data)}}},d=u,v=n("2877"),f=Object(v["a"])(d,a,i,!1,null,null,null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-4f354f6b.07b70c22.js.map