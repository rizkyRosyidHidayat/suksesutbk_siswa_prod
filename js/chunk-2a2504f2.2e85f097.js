(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a2504f2"],{"0462":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("nav",{staticClass:"fixed w-full bg-white py-3 shadow-lg z-50"},[i("div",{staticClass:"container flex justify-between items-center"},[i("div",{staticClass:"btn-icon block sm:hidden"},[i("svg",{staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z",fill:"#14AAA7"}})])]),i("img",{staticClass:"h-10",attrs:{src:e("4ffd"),alt:"logo"}}),i("div",{staticClass:"btn-icon block sm:hidden"},[i("svg",{staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16 17H7v-6.5C7 8 9 6 11.5 6S16 8 16 10.5m2 5.5v-5.5c0-3.07-2.14-5.64-5-6.32V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1m-8.5 4a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z",fill:"#14AAA7"}})])]),i("div",{staticClass:"items-center hidden sm:flex"},[t._l(t.nav,(function(a){return i("div",{key:a.text,staticClass:"capitalize ml-5 text-gray-700 font-bold cursor-pointer",on:{click:function(e){return t.$router.push({name:a.link})}}},[t._v(" "+t._s(a.text)+" ")])})),i("div",{staticClass:"btn-primary bg-red-500 ml-5 font-normal hover:bg-red-600",on:{click:t.logout}},[t._v(" Logout ")])],2)])])},n=[],s=(e("ac1f"),e("5319"),{data:function(){return{nav:[{text:"Beranda",link:"home"},{text:"Fitur",link:""},{text:"Cara Pemakaian",link:""},{text:"riwayat transaksi",link:""}]}},methods:{logout:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("dataPeserta"),this.$router.replace({name:"auth",params:{form:"login"}})}}}),r=s,o=e("2877"),l=Object(o["a"])(r,i,n,!1,null,null,null);a["a"]=l.exports},"0d6d":function(t,a,e){"use strict";var i=e("9e88"),n=e.n(i);n.a},"14c3":function(t,a,e){var i=e("c6b6"),n=e("9263");t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var s=e.call(t,a);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,a)}},"26aa":function(t,a,e){"use strict";var i=e("c1ac"),n=e.n(i);n.a},5319:function(t,a,e){"use strict";var i=e("d784"),n=e("825a"),s=e("7b0b"),r=e("50c4"),o=e("a691"),l=e("1d80"),c=e("8aa5"),d=e("14c3"),u=Math.max,v=Math.min,m=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,a,e,i){var h=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=i.REPLACE_KEEPS_$0,x=h?"$":"$0";return[function(e,i){var n=l(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,n,i):a.call(String(n),e,i)},function(t,i){if(!h&&b||"string"===typeof i&&-1===i.indexOf(x)){var s=e(a,t,this,i);if(s.done)return s.value}var l=n(t),m=String(this),f="function"===typeof i;f||(i=String(i));var p=l.global;if(p){var _=l.unicode;l.lastIndex=0}var k=[];while(1){var C=d(l,m);if(null===C)break;if(k.push(C),!p)break;var y=String(C[0]);""===y&&(l.lastIndex=c(m,r(l.lastIndex),_))}for(var S="",E=0,A=0;A<k.length;A++){C=k[A];for(var R=String(C[0]),$=u(v(o(C.index),m.length),0),I=[],P=1;P<C.length;P++)I.push(g(C[P]));var j=C.groups;if(f){var M=[R].concat(I,$,m);void 0!==j&&M.push(j);var L=String(i.apply(void 0,M))}else L=w(R,m,$,I,j,i);$>=E&&(S+=m.slice(E,$)+L,E=$+R.length)}return S+m.slice(E)}];function w(t,e,i,n,r,o){var l=i+t.length,c=n.length,d=p;return void 0!==r&&(r=s(r),d=f),a.call(o,d,(function(a,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":o=r[s.slice(1,-1)];break;default:var d=+s;if(0===d)return a;if(d>c){var u=m(d/10);return 0===u?a:u<=c?void 0===n[u-1]?s.charAt(1):n[u-1]+s.charAt(1):a}o=n[d-1]}return void 0===o?"":o}))}}))},6547:function(t,a,e){var i=e("a691"),n=e("1d80"),s=function(t){return function(a,e){var s,r,o=String(n(a)),l=i(e),c=o.length;return l<0||l>=c?t?"":void 0:(s=o.charCodeAt(l),s<55296||s>56319||l+1===c||(r=o.charCodeAt(l+1))<56320||r>57343?t?o.charAt(l):s:t?o.slice(l,l+2):r-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"714b":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._t("activator"),t.visible?e("div",{staticClass:"modal z-50"},[t._t("content")],2):t._e()],2)},n=[],s={props:["visible"]},r=s,o=(e("26aa"),e("2877")),l=Object(o["a"])(r,i,n,!1,null,"58a1a307",null);a["a"]=l.exports},"86a9":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"paket-soal overflow-hidden"},[e("FixedNavbar"),e("div",{staticClass:"mt-32 mb-24 px-4 w-full md:w-1/2 block mx-auto"},[e("div",{staticClass:"card bg-blue-400 text-white mb-8"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-lg"},[t._v(" Untuk bisa melihat Assessment Report kamu harus menyelesaikan semua Tes terlebih dahulu. ")]),e("button",{staticClass:"btn-primary bg-white text-blue-500 mt-4",on:{click:t.lihat}},[t._v(" Lihat Asessment Report ")])])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body flex justify-between items-center bg-orange-300"},[e("div",{staticClass:"text-lg font-bold text-gray-700"},[t._v(t._s(t.dataPaketSoal.materi_uji))]),e("ModalDownloadSoal",{attrs:{data:t.dataPaketSoal}})],1),e("div",{staticClass:"card-body"},[t.$store.getters.getLoading?e("div",{staticClass:"animate-pulse h-4 w-full bg-gray-400 rounded mt-4"}):e("table",{staticClass:"table-auto w-full divide-y"},[t._m(0),e("tbody",{staticClass:"divide-y"},t._l(t.dataPaketSoal.submateri,(function(a,i){return e("tr",{key:a.nama},[e("td",{staticClass:"text-center"},[t._v(t._s(i+1))]),e("td",[t._v(t._s(a.nama))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.butir_soal))])])})),0)])])])]),e("Footer")],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("No")]),e("th",[t._v("Materi Uji")]),e("th",[t._v("Butir Soal")])])])}],s=e("5530"),r=e("2f62"),o=e("0462"),l=e("fd2d"),c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("Modal",{attrs:{visible:t.visible},scopedSlots:t._u([{key:"activator",fn:function(){return[i("div",{staticClass:"btn-primary px-2 py-1",on:{click:function(a){return t.mulai(t.data)}}},[1==t.data.completed?i("span",[t._v("Selesai")]):i("span",[t._v("Mulai")])])]},proxy:!0},{key:"content",fn:function(){return[i("div",{staticClass:"card max-w-full sm:max-w-md mx-auto text-white",class:t.color},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"flex justify-between items-center"},[i("div",{staticClass:"text-xl font-bold tracking-wider"},[t._v("Proses Download Soal")]),i("div",{staticClass:"btn-icon",on:{click:function(a){t.visible=!1}}},[i("img",{attrs:{src:e("8b1b"),alt:"icons",width:"25px"}})])])]),i("div",{staticClass:"card-body rounded-br rounded-bl text-center pt-0"},[t.$store.getters.getLoading?i("div",[i("svg",{staticClass:"animate-bounce w-16 h-16 text-white block mx-auto",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{d:"M19 14l-7 7m0 0l-7-7m7 7V3"}})]),i("div",{staticClass:"mt-6"},[t._v("Sedang mendownload soal mohon tunggu sebentar")])]):i("div",[t.status?i("div",[i("svg",{staticClass:"block mx-auto animate-bounce",staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"64px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"white"}})]),i("div",{staticClass:"my-4"},[t._v("Proses download soal berhasil, silahkan memulai ujian dengan semangat")]),i("div",{staticClass:"btn-primary bg-white text-green-500 inline-block",on:{click:function(a){return t.$router.push({name:"pengerjaan-soal",params:{id:t.data.id_materi_uji}})}}},[t._v("Mulai Ujian")])]):i("div",[i("svg",{staticClass:"block mx-auto animate-bounce",staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"64px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z",fill:"white"}}),i("rect",{attrs:{x:"0",y:"0",width:"24",height:"24",fill:"rgba(0, 0, 0, 0)"}})]),i("div",{staticClass:"my-4"},[t._v("Maaf proses download soal gagal, mohon periksa koneksi internet anda")]),i("div",{staticClass:"btn-primary bg-white text-red-500 inline-block",on:{click:function(a){return t.mulai(t.data)}}},[t._v(" Ulangi Download ")])])])])])]},proxy:!0}])})},d=[],u=e("714b"),v={props:["data"],data:function(){return{visible:!1,color:"bg-teal-400",pilihan_ptn:[]}},computed:{status:function(){return this.$store.getters.getNotif.status}},watch:{status:function(t){this.color=t?"bg-green-500":"bg-red-500"}},components:{Modal:u["a"]},methods:{mulai:function(t){0==t.completed&&(this.visible=!0,localStorage.soal?this.$store.dispatch("updateNotif",{status:!0,visible:!1,msg:""}):this.$store.dispatch("dataSoal/postDataUjian",{ptn:this.pilihan_ptn,subpaket_id:window.localStorage.getItem("id_subpaket"),paketsoal_id:window.localStorage.getItem("id_paket_soal"),materiuji_id:t.id_materi_uji}))}},created:function(){this.pilihan_ptn=localStorage.pilihan_ptn}},m=v,f=e("2877"),p=Object(f["a"])(m,c,d,!1,null,null,null),g=p.exports,h={components:{Footer:l["a"],FixedNavbar:o["a"],ModalDownloadSoal:g},computed:Object(s["a"])({},Object(r["b"])("dataDashboard",["dataPaketSoal"])),methods:{lihat:function(){1==this.dataPaketSoal.completed&&this.$router.push({name:"assessment-report"})}},created:function(){this.$store.dispatch("dataDashboard/getDataPaketSoal",{id_peserta:JSON.parse(window.localStorage.getItem("dataPeserta")).id,id_paket_soal:window.localStorage.getItem("id_paket_soal")})}},b=h,x=(e("0d6d"),Object(f["a"])(b,i,n,!1,null,"653e76fb",null));a["default"]=x.exports},"8aa5":function(t,a,e){"use strict";var i=e("6547").charAt;t.exports=function(t,a,e){return a+(e?i(t,a).length:1)}},9263:function(t,a,e){"use strict";var i=e("ad6d"),n=e("9f7f"),s=RegExp.prototype.exec,r=String.prototype.replace,o=s,l=function(){var t=/a/,a=/b*/g;return s.call(t,"a"),s.call(a,"a"),0!==t.lastIndex||0!==a.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=l||d||c;u&&(o=function(t){var a,e,n,o,u=this,v=c&&u.sticky,m=i.call(u),f=u.source,p=0,g=t;return v&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),g=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(f="(?: "+f+")",g=" "+g,p++),e=new RegExp("^(?:"+f+")",m)),d&&(e=new RegExp("^"+f+"$(?!\\s)",m)),l&&(a=u.lastIndex),n=s.call(v?e:u,g),v?n?(n.input=n.input.slice(p),n[0]=n[0].slice(p),n.index=u.lastIndex,u.lastIndex+=n[0].length):u.lastIndex=0:l&&n&&(u.lastIndex=u.global?n.index+n[0].length:a),d&&n&&n.length>1&&r.call(n[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=o},"9e88":function(t,a,e){},"9f7f":function(t,a,e){"use strict";var i=e("d039");function n(t,a){return RegExp(t,a)}a.UNSUPPORTED_Y=i((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a.BROKEN_CARET=i((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,a,e){"use strict";var i=e("23e7"),n=e("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(t,a,e){"use strict";var i=e("825a");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},c1ac:function(t,a,e){},d784:function(t,a,e){"use strict";e("ac1f");var i=e("6eeb"),n=e("d039"),s=e("b622"),r=e("9263"),o=e("9112"),l=s("species"),c=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=s("replace"),v=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),m=!n((function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,a,e,u){var f=s(t),p=!n((function(){var a={};return a[f]=function(){return 7},7!=""[t](a)})),g=p&&!n((function(){var a=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[l]=function(){return e},e.flags="",e[f]=/./[f]),e.exec=function(){return a=!0,null},e[f](""),!a}));if(!p||!g||"replace"===t&&(!c||!d||v)||"split"===t&&!m){var h=/./[f],b=e(f,""[t],(function(t,a,e,i,n){return a.exec===r?p&&!n?{done:!0,value:h.call(a,e,i)}:{done:!0,value:t.call(e,a,i)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),x=b[0],w=b[1];i(String.prototype,t,x),i(RegExp.prototype,f,2==a?function(t,a){return w.call(t,this,a)}:function(t){return w.call(t,this)})}u&&o(RegExp.prototype[f],"sham",!0)}},fd2d:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("footer",{staticClass:"py-12 bg-gray-800 text-white"},[i("div",{staticClass:"container"},[i("div",{staticClass:"grid grid-cols-1 sm:grid-cols-10 gap-4"},[i("div",{staticClass:"sm:col-span-3"},[i("img",{staticClass:"h-12 mb-12",attrs:{src:e("0bc8"),alt:"logo"}}),i("div",{staticClass:"flex"},t._l(t.sosmed,(function(t){return i("a",{key:t.img,staticClass:"btn-icon bg-white mr-3",attrs:{href:t.link,target:"_blank"}},[i("img",{attrs:{src:e("67f7")("./"+t.img),alt:"sosmed",width:"25px"}})])})),0)]),i("div",{staticClass:"sm:col-span-2"},[i("h1",{staticClass:"font-bold mb-4"},[t._v("SITEMAP")]),i("ul",t._l(t.nav,(function(a){return i("li",{key:a.text,staticClass:"text-gray-500 cursor-pointer hover:underline mb-2"},[t._v(" "+t._s(a.text)+" ")])})),0)]),t._m(0),i("div",{staticClass:"sm:col-span-3"},[i("h1",{staticClass:"font-bold mb-4"},[t._v("BERITA")]),i("p",{staticClass:"text-gray-500 mb-6"},[t._v(" Berlangganan sekarang untuk mendapatkan berita dan informasi terbaru dari kami ")]),i("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[i("form",{on:{submit:function(a){return a.preventDefault(),t.onSubmit(a)}}},[i("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors;return[i("div",{staticClass:"flex"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:t.data.email},on:{input:function(a){a.target.composing||t.$set(t.data,"email",a.target.value)}}}),i("button",{staticClass:"btn-primary px-2 rounded-tl-none rounded-bl-none",attrs:{disabled:e,type:"submit"}},[i("Spinner",[t._v("KIRIM")])],1)]),i("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)}),i("Notif",{staticClass:"mb-4"})],1)]}}])})],1)])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sm:col-span-2"},[e("h1",{staticClass:"font-bold mb-4"},[t._v("RESOURCE")]),e("p",{staticClass:"text-gray-500"},[t._v(" Lorem ipsum dolor sit amet dito ama ")])])}],s=e("5530"),r=e("7bb1"),o=e("4c93"),l=e("6959"),c=e("2375");Object(r["c"])("required",Object(s["a"])(Object(s["a"])({},o["b"]),{},{message:"Data harus di isi"})),Object(r["c"])("email",Object(s["a"])(Object(s["a"])({},o["a"]),{},{message:"Data harus berupa e-mail"}));var d={data:function(){return{sosmed:[{img:"facebook.svg",link:""},{img:"youtube.svg",link:""},{img:"twitter.svg",link:""}],nav:[{text:"Beranda",link:""},{text:"Fitur",link:""},{text:"Cara Pemakaian",link:""},{text:"riwayat transaksi",link:""}],data:{email:""}}},components:{Spinner:c["a"],Notif:l["a"]},methods:{onSubmit:function(){this.$store.dispatch("dataAuth/postDataLogin",this.data)}}},u=d,v=e("2877"),m=Object(v["a"])(u,i,n,!1,null,null,null);a["a"]=m.exports}}]);
//# sourceMappingURL=chunk-2a2504f2.2e85f097.js.map