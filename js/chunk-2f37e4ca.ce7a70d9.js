(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f37e4ca"],{"02e0":function(t,e,n){t.exports=n.p+"img/eye-off-outline.ef500b55.svg"},"0462":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"fixed w-full bg-white py-3 shadow-lg z-50"},[i("div",{staticClass:"container flex justify-between items-center"},[i("div",{staticClass:"btn-icon block sm:hidden",on:{click:function(e){t.active=!t.active}}},[t.active?i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z",fill:"#14AAA7"}})]):i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z",fill:"#14AAA7"}})])]),i("img",{staticClass:"h-10",attrs:{src:n("4ffd"),alt:"logo"},on:{click:function(e){return t.$router.push({name:"home"})}}}),i("div",{staticClass:"btn-icon block sm:hidden"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16 17H7v-6.5C7 8 9 6 11.5 6S16 8 16 10.5m2 5.5v-5.5c0-3.07-2.14-5.64-5-6.32V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1m-8.5 4a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z",fill:"#14AAA7"}})])]),i("div",{staticClass:"items-center hidden sm:flex"},[t._l(t.nav,(function(e){return i("div",{key:e.text,staticClass:"capitalize ml-5 text-gray-700 font-bold cursor-pointer",on:{click:function(n){return t.$router.push({name:e.link})}}},[t._v(" "+t._s(e.text)+" ")])})),i("div",{staticClass:"btn-primary bg-red-500 ml-5 font-normal hover:bg-red-600",on:{click:t.logout}},[t._v(" Logout ")])],2)])]),i("Sidenav",{attrs:{nav:t.nav,active:t.active},on:{"update:active":function(e){t.active=e}}})],1)},a=[],r=(n("ac1f"),n("5319"),n("21e0")),s={data:function(){return{nav:[{text:"Beranda",link:"home"},{text:"Fitur",link:"fitur"},{text:"Cara Pemakaian",link:"cara-pemakaian"},{text:"riwayat transaksi",link:"riwayat"}],active:!1}},methods:{logout:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("dataPeserta"),this.$router.replace({name:"auth",params:{form:"login"}})}},components:{Sidenav:r["a"]}},o=s,c=n("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},"0bc8":function(t,e,n){t.exports=n.p+"img/logo_white.3a4c1b72.png"},"11ef":function(t,e,n){t.exports=n.p+"img/youtube.e2773696.svg"},"14c3":function(t,e,n){var i=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1ad2":function(t,e,n){t.exports=n.p+"img/menu-down.eab8285e.svg"},"203b":function(t,e,n){t.exports=n.p+"img/close_circle.9c242bd5.svg"},"21e0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"screen",class:{active:t.active},on:{click:function(e){return t.$emit("update:active",!1)}}}),i("section",{staticClass:"sidenav",class:{active:t.active}},[i("div",{staticClass:"flex justify-between py-4 px-6"},[i("img",{staticClass:"h-10",attrs:{src:n("4ffd"),alt:"logo"},on:{click:function(e){return t.$router.push({name:"home"})}}}),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16 17H7v-6.5C7 8 9 6 11.5 6S16 8 16 10.5m2 5.5v-5.5c0-3.07-2.14-5.64-5-6.32V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1m-8.5 4a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z",fill:"#14AAA7"}})])]),i("ul",[t._l(t.nav,(function(e){return i("li",{key:e.text,on:{click:function(n){return t.$router.push({name:e.link})}}},[t._v(" "+t._s(e.text)+" ")])})),i("li",[i("div",{staticClass:"btn-primary bg-red-500 inline-block font-normal hover:bg-red-600",on:{click:t.logout}},[t._v(" Logout ")])])],2)])])},a=[],r=(n("b0c0"),n("ac1f"),n("5319"),{props:["nav","active","full"],methods:{logout:function(){window.localStorage.clear(),this.$router.replace({name:"auth",params:{form:"login"}})}},computed:{route:function(){return this.$route.name}},watch:{route:function(){this.$emit("update:active",!1)}}}),s=r,o=(n("87f1"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"5c678e9b",null);e["a"]=c.exports},2375:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center"},[t.$store.getters.getLoading?n("svg",{staticClass:"animate-spin text-white",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12px",cy:"12px",r:"10",stroke:"currentColor","stroke-width":"4"}}),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._t("default")],2)},a=[],r=n("2877"),s={},o=Object(r["a"])(s,i,a,!1,null,null,null);e["a"]=o.exports},2613:function(t,e,n){},"30e2":function(t,e,n){t.exports=n.p+"img/school.38b7ae87.svg"},"34af":function(t,e,n){t.exports=n.p+"img/play_circle.f641e02c.svg"},"379e":function(t,e,n){t.exports=n.p+"img/fullscreen.587b7a6d.svg"},"3d56":function(t,e,n){t.exports=n.p+"img/bell.cedce602.svg"},4104:function(t,e,n){t.exports=n.p+"img/marker.e36d4dd2.svg"},"4c93":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return d}));
/**
  * vee-validate v3.3.8
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */
var i=function(t,e){var n=(void 0===e?{}:e).multiple,i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return n&&!Array.isArray(t)&&(t=String(t).split(",").map((function(t){return t.trim()}))),Array.isArray(t)?t.every((function(t){return i.test(String(t))})):i.test(String(t))},a=[{name:"multiple",default:!1}],r={validate:i,params:a};function s(t){return null===t||void 0===t}function o(t){return Array.isArray(t)&&0===t.length}var c=function(t,e){var n=(void 0===e?{allowFalse:!0}:e).allowFalse,i={valid:!1,required:!0};return s(t)||o(t)?i:!1!==t||n?(i.valid=!!String(t).trim().length,i):i},l=!0,u=[{name:"allowFalse",default:!0}],d={validate:c,params:u,computesRequired:l}},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.e8431302.png"},5319:function(t,e,n){"use strict";var i=n("d784"),a=n("825a"),r=n("7b0b"),s=n("50c4"),o=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),d=Math.max,f=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,n,i){var h=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=i.REPLACE_KEEPS_$0,b=h?"$":"$0";return[function(n,i){var a=c(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,a,i):e.call(String(a),n,i)},function(t,i){if(!h&&x||"string"===typeof i&&-1===i.indexOf(b)){var r=n(e,t,this,i);if(r.done)return r.value}var c=a(t),v=String(this),g="function"===typeof i;g||(i=String(i));var p=c.global;if(p){var k=c.unicode;c.lastIndex=0}var _=[];while(1){var y=u(c,v);if(null===y)break;if(_.push(y),!p)break;var C=String(y[0]);""===C&&(c.lastIndex=l(v,s(c.lastIndex),k))}for(var E="",A=0,$=0;$<_.length;$++){y=_[$];for(var S=String(y[0]),R=d(f(o(y.index),v.length),0),I=[],O=1;O<y.length;O++)I.push(m(y[O]));var L=y.groups;if(g){var N=[S].concat(I,R,v);void 0!==L&&N.push(L);var P=String(i.apply(void 0,N))}else P=w(S,v,R,I,L,i);R>=A&&(E+=v.slice(A,R)+P,A=R+S.length)}return E+v.slice(A)}];function w(t,n,i,a,s,o){var c=i+t.length,l=a.length,u=p;return void 0!==s&&(s=r(s),u=g),e.call(o,u,(function(e,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(c);case"<":o=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return e;if(u>l){var d=v(u/10);return 0===d?e:d<=l?void 0===a[d-1]?r.charAt(1):a[d-1]+r.charAt(1):e}o=a[u-1]}return void 0===o?"":o}))}}))},"55c7":function(t,e,n){t.exports=n.p+"img/fb.9bc54a6e.svg"},"644b":function(t,e,n){t.exports=n.p+"img/pause.416f8d35.svg"},6547:function(t,e,n){var i=n("a691"),a=n("1d80"),r=function(t){return function(e,n){var r,s,o=String(a(e)),c=i(n),l=o.length;return c<0||c>=l?t?"":void 0:(r=o.charCodeAt(c),r<55296||r>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):r:t?o.slice(c,c+2):s-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"67f7":function(t,e,n){var i={"./account.svg":"ecec","./bell.svg":"3d56","./check_circle.svg":"c36c","./chevron_left.svg":"9b7c","./chevron_right.svg":"7712","./circle_outline.svg":"83b6","./clock.svg":"755b","./close.svg":"8b1b","./close_circle.svg":"203b","./download.svg":"f28e","./eye-off-outline.svg":"02e0","./eye-outline.svg":"9b44","./facebook.svg":"8485","./fb.svg":"55c7","./fullscreen.svg":"379e","./fullscreen_exit.svg":"c9eb","./google.svg":"d950","./home.svg":"ac9d","./instagram.svg":"bd6c","./lock.svg":"9619","./marker.svg":"4104","./menu-down.svg":"1ad2","./menu.svg":"d17f","./pause.svg":"644b","./play_circle.svg":"34af","./school.svg":"30e2","./search.svg":"d103","./whatsapp.svg":"7583","./youtube.svg":"11ef"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="67f7"},6959:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.$store.getters.getNotif.visible?i("div",{staticClass:"notif",class:{"bg-green-500":t.$store.getters.getNotif.status,"bg-red-500":!t.$store.getters.getNotif.status}},[i("div",[t._v(t._s(t.$store.getters.getNotif.msg))]),i("div",{staticClass:"btn-icon flex-shrink-0 ml-2",on:{click:t.close}},[i("img",{attrs:{src:n("8b1b"),alt:"icon"}})])]):t._e()},a=[],r={computed:{visible:function(){return this.$store.getters.getNotif.visible}},watch:{visible:function(){this.autoclose()}},methods:{close:function(){this.$store.dispatch("updateNotif",{visible:!1,status:null,msg:""})},autoclose:function(){var t=this;setTimeout((function(){t.$store.dispatch("updateNotif",{visible:!1,status:null,msg:""})}),3e3)}}},s=r,o=(n("6efa"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,null,null);e["a"]=c.exports},"6efa":function(t,e,n){"use strict";var i=n("2613"),a=n.n(i);a.a},"755b":function(t,e,n){t.exports=n.p+"img/clock.07b27084.svg"},7583:function(t,e,n){t.exports=n.p+"img/whatsapp.01230b99.svg"},7712:function(t,e,n){t.exports=n.p+"img/chevron_right.d534f45a.svg"},"83b6":function(t,e,n){t.exports=n.p+"img/circle_outline.983550d0.svg"},8485:function(t,e,n){t.exports=n.p+"img/facebook.76467214.svg"},"87f1":function(t,e,n){"use strict";var i=n("be99"),a=n.n(i);a.a},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"8b1b":function(t,e,n){t.exports=n.p+"img/close.06dbed19.svg"},9263:function(t,e,n){"use strict";var i=n("ad6d"),a=n("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,o=r,c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(t){var e,n,a,o,d=this,f=l&&d.sticky,v=i.call(d),g=d.source,p=0,m=t;return f&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,p++),n=new RegExp("^(?:"+g+")",v)),u&&(n=new RegExp("^"+g+"$(?!\\s)",v)),c&&(e=d.lastIndex),a=r.call(f?n:d,m),f?a?(a.input=a.input.slice(p),a[0]=a[0].slice(p),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&s.call(a[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),t.exports=o},9619:function(t,e,n){t.exports=n.p+"img/lock.a6b4a58b.svg"},"9b44":function(t,e,n){t.exports=n.p+"img/eye-outline.14a90b54.svg"},"9b7c":function(t,e,n){t.exports=n.p+"img/chevron_left.f0578c4f.svg"},"9f7f":function(t,e,n){"use strict";var i=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var i=n("23e7"),a=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ac9d:function(t,e,n){t.exports=n.p+"img/home.d1b7aa14.svg"},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},bd6c:function(t,e,n){t.exports=n.p+"img/instagram.fe2d69ba.svg"},be99:function(t,e,n){},c36c:function(t,e,n){t.exports=n.p+"img/check_circle.6946fbe0.svg"},c9eb:function(t,e,n){t.exports=n.p+"img/fullscreen_exit.2c50fb62.svg"},d103:function(t,e,n){t.exports=n.p+"img/search.d830554b.svg"},d17f:function(t,e,n){t.exports=n.p+"img/menu.42242c38.svg"},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),a=n("d039"),r=n("b622"),s=n("9263"),o=n("9112"),c=r("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var g=r(t),p=!a((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),m=p&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!p||!m||"replace"===t&&(!l||!u||f)||"split"===t&&!v){var h=/./[g],x=n(g,""[t],(function(t,e,n,i,a){return e.exec===s?p&&!a?{done:!0,value:h.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=x[0],w=x[1];i(String.prototype,t,b),i(RegExp.prototype,g,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}d&&o(RegExp.prototype[g],"sham",!0)}},d950:function(t,e,n){t.exports=n.p+"img/google.3084be34.svg"},ecec:function(t,e,n){t.exports=n.p+"img/account.e40d0b25.svg"},f28e:function(t,e,n){t.exports=n.p+"img/download.8255a5be.svg"},fd2d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"pt-12 bg-gray-800 text-white"},[i("div",{staticClass:"container"},[i("div",{staticClass:"grid grid-cols-1 sm:grid-cols-9 gap-4"},[i("div",{staticClass:"sm:col-span-3 hidden md:block"},[i("img",{staticClass:"h-12 mb-12",attrs:{src:n("0bc8"),alt:"logo"}}),i("div",{staticClass:"flex"},t._l(t.sosmed,(function(t){return i("a",{key:t.img,staticClass:"btn-icon bg-white mr-3",attrs:{href:t.link,target:"_blank"}},[i("img",{attrs:{src:n("67f7")("./"+t.img),alt:"sosmed",width:"25px"}})])})),0)]),i("div",{staticClass:"sm:col-span-3"},[i("h1",{staticClass:"font-bold mb-4 hidden md:block"},[t._v("SITEMAP")]),i("ul",{staticClass:"grid grid-cols-2 md:grid-cols-1"},t._l(t.nav,(function(e){return i("li",{key:e.text,staticClass:"text-gray-500 cursor-pointer hover:underline mb-2",on:{click:function(n){return t.$router.push({name:e.link})}}},[t._v(" "+t._s(e.text)+" ")])})),0)]),i("div",{staticClass:"sm:col-span-3 hidden md:block"},[i("h1",{staticClass:"font-bold mb-4"},[t._v("BERITA")]),i("p",{staticClass:"text-gray-500 mb-6"},[t._v(" Berlangganan sekarang untuk mendapatkan berita dan informasi terbaru dari kami ")]),i("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[i("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[i("div",{staticClass:"flex"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),i("button",{staticClass:"btn-primary px-2 rounded-tl-none rounded-bl-none",attrs:{disabled:n,type:"submit"}},[i("Spinner",[t._v("KIRIM")])],1)]),i("p",{staticClass:"field-message"},[t._v(t._s(a[0]))])]}}],null,!0)}),i("Notif",{staticClass:"mb-4"})],1)]}}])})],1)])]),i("div",{staticClass:"py-6 mt-6 text-center bg-gray-700"},[i("div",{staticClass:"mt-3"},[t._v("© "+t._s((new Date).getFullYear())+". All Rights Reserved")])])])},a=[],r=n("5530"),s=n("7bb1"),o=n("4c93"),c=n("6959"),l=n("2375");Object(s["c"])("required",Object(r["a"])(Object(r["a"])({},o["b"]),{},{message:"Data harus di isi"})),Object(s["c"])("email",Object(r["a"])(Object(r["a"])({},o["a"]),{},{message:"Data harus berupa e-mail"}));var u={data:function(){return{sosmed:[{img:"facebook.svg",link:"https://web.facebook.com/edubrand.id"},{img:"youtube.svg",link:"http://live.edubrand.id"},{img:"instagram.svg",link:"https://instagram.com/edubrand.id"}],nav:[{text:"Beranda",link:"home"},{text:"Fitur",link:"fitur"},{text:"Cara Pemakaian",link:"cara-pemakaian"},{text:"Riwayat Transaksi",link:"riwayat"}],data:{email:""}}},components:{Spinner:l["a"],Notif:c["a"]},methods:{onSubmit:function(){this.$store.dispatch("dataAuth/postDataLogin",this.data)}}},d=u,f=n("2877"),v=Object(f["a"])(d,i,a,!1,null,null,null);e["a"]=v.exports}}]);
//# sourceMappingURL=chunk-2f37e4ca.ce7a70d9.js.map