(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48f5fcc5"],{"0462":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"fixed w-full bg-white py-3 shadow-lg z-50"},[n("div",{staticClass:"container flex justify-between items-center"},[n("div",{staticClass:"btn-icon block sm:hidden"},[n("svg",{staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z",fill:"#14AAA7"}})])]),n("img",{staticClass:"h-10",attrs:{src:a("4ffd"),alt:"logo"}}),n("div",{staticClass:"btn-icon block sm:hidden"},[n("svg",{staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M16 17H7v-6.5C7 8 9 6 11.5 6S16 8 16 10.5m2 5.5v-5.5c0-3.07-2.14-5.64-5-6.32V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1m-8.5 4a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z",fill:"#14AAA7"}})])]),n("div",{staticClass:"items-center hidden sm:flex"},[t._l(t.nav,(function(e){return n("div",{key:e.text,staticClass:"capitalize ml-5 text-gray-700 font-bold cursor-pointer",on:{click:function(a){return t.$router.push({name:e.link})}}},[t._v(" "+t._s(e.text)+" ")])})),n("div",{staticClass:"btn-primary bg-red-500 ml-5 font-normal hover:bg-red-600",on:{click:t.logout}},[t._v(" Logout ")])],2)])])},r=[],i=(a("ac1f"),a("5319"),{data:function(){return{nav:[{text:"Beranda",link:"home"},{text:"Fitur",link:""},{text:"Cara Pemakaian",link:""},{text:"riwayat transaksi",link:""}]}},methods:{logout:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("dataPeserta"),this.$router.replace({name:"auth",params:{form:"login"}})}}}),s=i,o=a("2877"),l=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=l.exports},1251:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paket overflow-hidden"},[a("FixedNavbar"),a("div",{staticClass:"mt-32 mb-24 px-4 w-full md:w-2/3 block mx-auto"},[a("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-8"},t._l(t.dataPaket,(function(e,n){return a("div",{key:e.id_paket,staticClass:"card"},[a("div",{staticClass:"card-body",class:t.color[n]},[a("h1",{staticClass:"text-xl font-bold text-gray-700 tracking-wider"},[t._v(t._s(e.subpaket))])]),a("div",{staticClass:"card-body"},[a("ul",{staticClass:"divide-y"},t._l(8,(function(e){return a("li",{key:e,staticClass:"py-2"},[t._v("Lorem ipsum dolor sit amet")])})),0)]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"btn-primary",class:t.btncolor[n]},[t._v(" PESAN SEKARANG ")])])])})),0)]),a("Footer")],1)},r=[],i=a("5530"),s=a("2f62"),o=a("0462"),l=a("fd2d"),c={props:["nama_paket"],components:{Footer:l["a"],FixedNavbar:o["a"]},data:function(){return{isSubmit:!1,color:["bg-orange-300","bg-blue-300"],btncolor:["bg-orange-500","bg-blue-500"]}},computed:Object(i["a"])({},Object(s["b"])("dataPaket",["dataPaket"])),created:function(){this.$store.dispatch("dataPaket/getDataPaket",this.nama_paket)}},u=c,d=(a("701d"),a("2877")),f=Object(d["a"])(u,n,r,!1,null,"fd1cba94",null);e["default"]=f.exports},"14c3":function(t,e,a){var n=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),i=a("7b0b"),s=a("50c4"),o=a("a691"),l=a("1d80"),c=a("8aa5"),u=a("14c3"),d=Math.max,f=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var x=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,h=x?"$":"$0";return[function(a,n){var r=l(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!x&&b||"string"===typeof n&&-1===n.indexOf(h)){var i=a(e,t,this,n);if(i.done)return i.value}var l=r(t),v=String(this),p="function"===typeof n;p||(n=String(n));var m=l.global;if(m){var C=l.unicode;l.lastIndex=0}var w=[];while(1){var E=u(l,v);if(null===E)break;if(w.push(E),!m)break;var _=String(E[0]);""===_&&(l.lastIndex=c(v,s(l.lastIndex),C))}for(var y="",S=0,A=0;A<w.length;A++){E=w[A];for(var R=String(E[0]),P=d(f(o(E.index),v.length),0),I=[],$=1;$<E.length;$++)I.push(g(E[$]));var O=E.groups;if(p){var T=[R].concat(I,P,v);void 0!==O&&T.push(O);var N=String(n.apply(void 0,T))}else N=k(R,v,P,I,O,n);P>=S&&(y+=v.slice(S,P)+N,S=P+R.length)}return y+v.slice(S)}];function k(t,a,n,r,s,o){var l=n+t.length,c=r.length,u=m;return void 0!==s&&(s=i(s),u=p),e.call(o,u,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(l);case"<":o=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>c){var d=v(u/10);return 0===d?e:d<=c?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):e}o=r[u-1]}return void 0===o?"":o}))}}))},6547:function(t,e,a){var n=a("a691"),r=a("1d80"),i=function(t){return function(e,a){var i,s,o=String(r(e)),l=n(a),c=o.length;return l<0||l>=c?t?"":void 0:(i=o.charCodeAt(l),i<55296||i>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?t?o.charAt(l):i:t?o.slice(l,l+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"701d":function(t,e,a){"use strict";var n=a("b212"),r=a.n(n);r.a},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),r=a("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(o=function(t){var e,a,r,o,d=this,f=c&&d.sticky,v=n.call(d),p=d.source,m=0,g=t;return f&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,m++),a=new RegExp("^(?:"+p+")",v)),u&&(a=new RegExp("^"+p+"$(?!\\s)",v)),l&&(e=d.lastIndex),r=i.call(f?a:d,g),f?r?(r.input=r.input.slice(m),r[0]=r[0].slice(m),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:l&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,a){"use strict";var n=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b212:function(t,e,a){},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),i=a("b622"),s=a("9263"),o=a("9112"),l=i("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var p=i(t),m=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=m&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return e=!0,null},a[p](""),!e}));if(!m||!g||"replace"===t&&(!c||!u||f)||"split"===t&&!v){var x=/./[p],b=a(p,""[t],(function(t,e,a,n,r){return e.exec===s?m&&!r?{done:!0,value:x.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),h=b[0],k=b[1];n(String.prototype,t,h),n(RegExp.prototype,p,2==e?function(t,e){return k.call(t,this,e)}:function(t){return k.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-12 bg-gray-800 text-white"},[n("div",{staticClass:"container"},[n("div",{staticClass:"grid grid-cols-1 sm:grid-cols-10 gap-4"},[n("div",{staticClass:"sm:col-span-3"},[n("img",{staticClass:"h-12 mb-12",attrs:{src:a("0bc8"),alt:"logo"}}),n("div",{staticClass:"flex"},t._l(t.sosmed,(function(t){return n("a",{key:t.img,staticClass:"btn-icon bg-white mr-3",attrs:{href:t.link,target:"_blank"}},[n("img",{attrs:{src:a("67f7")("./"+t.img),alt:"sosmed",width:"25px"}})])})),0)]),n("div",{staticClass:"sm:col-span-2"},[n("h1",{staticClass:"font-bold mb-4"},[t._v("SITEMAP")]),n("ul",t._l(t.nav,(function(e){return n("li",{key:e.text,staticClass:"text-gray-500 cursor-pointer hover:underline mb-2"},[t._v(" "+t._s(e.text)+" ")])})),0)]),t._m(0),n("div",{staticClass:"sm:col-span-3"},[n("h1",{staticClass:"font-bold mb-4"},[t._v("BERITA")]),n("p",{staticClass:"text-gray-500 mb-6"},[t._v(" Berlangganan sekarang untuk mendapatkan berita dan informasi terbaru dari kami ")]),n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),n("button",{staticClass:"btn-primary px-2 rounded-tl-none rounded-bl-none",attrs:{disabled:a,type:"submit"}},[n("Spinner",[t._v("KIRIM")])],1)]),n("p",{staticClass:"field-message"},[t._v(t._s(r[0]))])]}}],null,!0)}),n("Notif",{staticClass:"mb-4"})],1)]}}])})],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sm:col-span-2"},[a("h1",{staticClass:"font-bold mb-4"},[t._v("RESOURCE")]),a("p",{staticClass:"text-gray-500"},[t._v(" Lorem ipsum dolor sit amet dito ama ")])])}],i=a("5530"),s=a("7bb1"),o=a("4c93"),l=a("6959"),c=a("2375");Object(s["c"])("required",Object(i["a"])(Object(i["a"])({},o["b"]),{},{message:"Data harus di isi"})),Object(s["c"])("email",Object(i["a"])(Object(i["a"])({},o["a"]),{},{message:"Data harus berupa e-mail"}));var u={data:function(){return{sosmed:[{img:"facebook.svg",link:""},{img:"youtube.svg",link:""},{img:"twitter.svg",link:""}],nav:[{text:"Beranda",link:""},{text:"Fitur",link:""},{text:"Cara Pemakaian",link:""},{text:"riwayat transaksi",link:""}],data:{email:""}}},components:{Spinner:c["a"],Notif:l["a"]},methods:{onSubmit:function(){this.$store.dispatch("dataAuth/postDataLogin",this.data)}}},d=u,f=a("2877"),v=Object(f["a"])(d,n,r,!1,null,null,null);e["a"]=v.exports}}]);
//# sourceMappingURL=chunk-48f5fcc5.0ff63b4d.js.map