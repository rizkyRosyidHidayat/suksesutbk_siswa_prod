(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2f593bc"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2532:function(t,e,a){"use strict";var i=a("23e7"),n=a("5a34"),s=a("1d80"),r=a("ab13");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(s(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"26aa":function(t,e,a){"use strict";var i=a("c1ac"),n=a.n(i);n.a},"44e7":function(t,e,a){var i=a("861d"),n=a("c6b6"),s=a("b622"),r=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"52e7":function(t,e,a){},"5a34":function(t,e,a){var i=a("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6aaa":function(t,e,a){"use strict";var i=a("52e7"),n=a.n(i);n.a},"6d9d":function(t,e,a){"use strict";var i=a("a0ba"),n=a.n(i);n.a},"6e36":function(t,e,a){"use strict";var i=a("e240"),n=a.n(i);n.a},"714b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("activator"),t.visible?a("div",{staticClass:"modal z-50"},[t._t("content")],2):t._e()],2)},n=[],s={props:["visible"]},r=s,o=(a("26aa"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"58a1a307",null);e["a"]=l.exports},"78f9":function(t,e,a){},"841c":function(t,e,a){"use strict";var i=a("d784"),n=a("825a"),s=a("1d80"),r=a("129f"),o=a("14c3");i("search",1,(function(t,e,a){return[function(e){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var s=n(t),l=String(this),c=s.lastIndex;r(c,0)||(s.lastIndex=0);var d=o(s,l);return r(s.lastIndex,c)||(s.lastIndex=c),null===d?-1:d.index}]}))},"8ecc":function(t,e,a){"use strict";var i=a("999a"),n=a.n(i);n.a},"900e":function(t,e,a){"use strict";var i=a("ad84"),n=a.n(i);n.a},"96cf":function(t,e,a){var i=function(t){"use strict";var e,a=Object.prototype,i=a.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(L){l=function(t,e,a){return t[e]=a}}function c(t,e,a,i){var n=e&&e.prototype instanceof v?e:v,s=Object.create(n.prototype),r=new E(i||[]);return s._invoke=P(t,a,r),s}function d(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(L){return{type:"throw",arg:L}}}t.wrap=c;var u="suspendedStart",m="suspendedYield",p="executing",h="completed",f={};function v(){}function g(){}function b(){}var _={};_[s]=function(){return this};var x=Object.getPrototypeOf,k=x&&x(x(T([])));k&&k!==a&&i.call(k,s)&&(_=k);var y=b.prototype=v.prototype=Object.create(_);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function a(n,s,r,o){var l=d(t[n],t,s);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,r,o)}),(function(t){a("throw",t,r,o)})):e.resolve(u).then((function(t){c.value=t,r(c)}),(function(t){return a("throw",t,r,o)}))}o(l.arg)}var n;function s(t,i){function s(){return new e((function(e,n){a(t,i,e,n)}))}return n=n?n.then(s,s):s()}this._invoke=s}function P(t,e,a){var i=u;return function(n,s){if(i===p)throw new Error("Generator is already running");if(i===h){if("throw"===n)throw s;return $()}a.method=n,a.arg=s;while(1){var r=a.delegate;if(r){var o=S(r,a);if(o){if(o===f)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(i===u)throw i=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);i=p;var l=d(t,e,a);if("normal"===l.type){if(i=a.done?h:m,l.arg===f)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(i=h,a.method="throw",a.arg=l.arg)}}}function S(t,a){var i=t.iterator[a.method];if(i===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,S(t,a),"throw"===a.method))return f;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(i,t.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,f;var s=n.arg;return s?s.done?(a[t.resultName]=s.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,f):s:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var a=t[s];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function a(){while(++n<t.length)if(i.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return r.next=r}}return{next:$}}function $(){return{value:e,done:!0}}return g.prototype=y.constructor=b,b.constructor=g,g.displayName=l(b,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,o,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(C.prototype),C.prototype[r]=function(){return this},t.AsyncIterator=C,t.async=function(e,a,i,n,s){void 0===s&&(s=Promise);var r=new C(c(e,a,i,n),s);return t.isGeneratorFunction(a)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},w(y),l(y,o,"Generator"),y[s]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var i=e.pop();if(i in t)return a.value=i,a.done=!1,a}return a.done=!0,a}},t.values=T,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var a in this)"t"===a.charAt(0)&&i.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(i,n){return o.type="throw",o.arg=t,a.next=i,n&&(a.method="next",a.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var r=this.tryEntries[s],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var l=i.call(r,"catchLoc"),c=i.call(r,"finallyLoc");if(l&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var r=s?s.completion:{};return r.type=t,r.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),O(a),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var i=a.completion;if("throw"===i.type){var n=i.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,i){return this.delegate={iterator:T(t),resultName:a,nextLoc:i},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=i}catch(n){Function("r","regeneratorRuntime = r")(i)}},"999a":function(t,e,a){},"9d3e":function(t,e,a){"use strict";var i=a("78f9"),n=a.n(i);n.a},a0ba:function(t,e,a){},ab13:function(t,e,a){var i=a("b622"),n=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,"/./"[t](e)}catch(i){}}return!1}},ad84:function(t,e,a){},ba86:function(t,e,a){},bb0b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"relative"},[i("div",{on:{click:function(e){t.visible=!0}}},[i("div",{staticClass:"flex"},[i("input",{staticClass:"text-field rounded-tr-none rounded-br-none cursor-pointer",attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.selectedValue}}),t._m(0)])]),t.visible?i("div",{staticClass:"option-menu z-10",class:t.position},[i("div",{staticClass:"flex px-2 mb-2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"search",placeholder:"Cari data"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),i("div",{staticClass:"text-field-icon bg-teal-500 border-l-0 rounded-tl-none rounded-bl-none",on:{click:function(e){return t.$emit("dataSearching",t.search)}}},[i("img",{attrs:{src:a("d103"),alt:"icon",width:"25px"}})])]),i("ul",{staticStyle:{"max-height":"200px",overflow:"auto"}},[t.loading?i("li",[i("svg",{staticClass:"animate-spin text-teal-300 mx-auto",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none"}},[i("circle",{staticClass:"opacity-50",attrs:{cx:"12px",cy:"12px",r:"10",stroke:"currentColor","stroke-width":"4"}}),i("path",{attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])]):t._l(t.dataSearch,(function(e,a){return i("li",{key:a,on:{click:function(a){return t.selected(e)}}},[t._v(" "+t._s(e[t.item.text])+" ")])}))],2)]):t._e()])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-field-icon border-l-0 rounded-tl-none rounded-bl-none"},[i("img",{attrs:{src:a("1ad2"),alt:"icon",width:"25px"}})])}],s=(a("4de4"),a("caad"),a("ac1f"),a("2532"),a("841c"),{props:["items","returnObject","loading","item","placeholder","position","selectedValue"],model:{props:"value",event:"input"},data:function(){return{visible:!1,search:"",text:"",value:"",data:[]}},watch:{value:function(t){this.$emit("input",t)}},computed:{dataSearch:{get:function(){var t=this;return this.items.filter((function(e){return e[t.item.text].toLowerCase().includes(t.search)}))}}},methods:{handleClickOutside:function(t){this.$el.contains(t.target)||(this.visible=!1)},selected:function(t){this.$emit("update:selected-value",t[this.item.text]),this.returnObject?this.value=t:this.value=t[this.item.value],this.visible=!1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}}),r=s,o=(a("6e36"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"733ec558",null);e["a"]=l.exports},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home overflow-hidden"},[i("img",{staticClass:"img-banner sm:w-full",attrs:{src:a("d22d"),alt:"banner"}}),i("div",{staticClass:"absolute w-full",staticStyle:{top:"0",letf:"0"}},[i("FixedNavbar",{staticClass:"hidden",attrs:{id:"fixedHeader"}}),i("Navbar"),i("section",{staticClass:"h-screen hidden sm:flex items-center mt-12"},[i("div",{staticClass:"container"},[i("div",{staticClass:"w-1/3 text-white"},[i("p",{staticClass:"text-4xl mb-4"},[i("span",[t._v("Selamat Datang")]),t._v(" "),i("br"),i("span",{staticClass:"font-bold italic"},[t._v(t._s(t.nama))])]),i("div",[t._v(" Selamat mengikuti TryOut UTBK 2021. Dapatkan Assessment Report, soal-soal prediktif, review & pembahasan soal, penilaian IRT System, peringkat nasional, rekomendasi PTN/Prodi, statistik & progress TryOut, serta fitur-fitur unggulan lainnya sesuai regulasi UTBK terupdate. ")])])])]),i("section",{staticClass:"mt-tall sm:mt-10"},[i("div",{staticClass:"container"},[i("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-10 items-end"},[i("PaketTryout"),i("div",{staticClass:"hidden sm:block"},[i("Profil"),i("Performance")],1)],1)])]),i("section",{staticClass:"mt-12"},[i("div",{staticClass:"container"},[i("div",{staticClass:"grid grid-cols-1 sm:grid-cols-10 gap-10"},[i("div",{staticClass:"sm:col-span-4 order-2 sm:order-1"},[i("div",{staticClass:"text-gray-700 text-2xl font-bold uppercase mb-6"},[t._v("Statistik Progres")]),i("StatistikProgress")],1),i("div",{staticClass:"sm:col-span-6 order-1 sm:order-2"},[i("Simulasi")],1)])])]),i("section",{staticClass:"mt-12"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-gray-700 text-2xl font-bold uppercase mb-6"},[t._v("video favorit")]),i("Video")],1)]),i("section",{staticClass:"mt-12"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-gray-700 text-2xl font-bold uppercase"},[t._v("bonus dan fasilitas")]),i("BonusFasilitas")],1)]),i("section",{staticClass:"mt-12"},[i("div",{staticClass:"container"},[i("Peringkat")],1)]),t._m(0),i("Footer")],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mt-12 bg-cover bg-no-repeat free"},[a("div",{staticClass:"container"},[a("div",{staticClass:"flex items-center",staticStyle:{height:"400px"}},[a("div",[a("h1",{staticClass:"text-gray-700 text-3xl font-bold"},[t._v("Gratis Demonstari")]),a("p",{staticClass:"my-4"},[t._v(" Coba dan lihat cara kerja simulasi, kemudian "),a("br"),t._v(" rasakan manfaatnya secara langsung ")]),a("button",{staticClass:"btn-primary bg-orange-500 hover:bg-orange-600"},[t._v(" Coba Sekarang ")])])])])])}],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"sm:absolute w-full mt-12"},[i("div",{staticClass:"container flex justify-between items-center"},[i("div",{staticClass:"btn-icon block sm:hidden",on:{click:function(e){t.active=!0}}},[i("img",{attrs:{src:a("d17f"),alt:"icon",width:"25px"}})]),i("img",{staticClass:"h-10 hidden sm:block",attrs:{src:a("0bc8"),alt:"logo"}}),i("img",{staticClass:"h-10 sm:hidden",attrs:{src:a("4ffd"),alt:"logo"}}),t._m(0),i("div",{staticClass:"items-center hidden sm:flex"},[t._l(t.nav,(function(e){return i("a",{key:e.text,staticClass:"capitalize ml-5 text-gray-700 font-bold",attrs:{href:e.link}},[t._v(" "+t._s(e.text)+" ")])})),i("div",{staticClass:"btn-primary bg-red-500 ml-5 font-normal hover:bg-red-600",on:{click:t.logout}},[t._v(" Logout ")])],2)])]),i("Sidenav",{attrs:{nav:t.nav,active:t.active},on:{"update:active":function(e){t.active=e}}})],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn-icon block sm:hidden"},[i("img",{attrs:{src:a("3d56"),alt:"icon",width:"25px"}})])}],o=(a("ac1f"),a("5319"),a("21e0")),l={data:function(){return{nav:[{text:"Beranda",link:""},{text:"Fitur",link:""},{text:"Cara Pemakaian",link:""},{text:"riwayat transaksi",link:""}],active:!1}},components:{Sidenav:o["a"]},methods:{logout:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("dataPeserta"),this.$router.replace({name:"auth",params:{form:"login"}})}}},c=l,d=a("2877"),u=Object(d["a"])(c,s,r,!1,null,null,null),m=u.exports,p=a("0462"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"text-gray-700 text-2xl font-bold mb-6 hidden sm:block"},[t._v("PAKET TRYOUT")]),i("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-3 paket-tryout"},t._l(t.dataPaket,(function(e){return i("div",{key:e.name,staticClass:"card rounded-lg"},[i("div",{staticClass:"card-body px-2"},[i("div",{staticClass:"flex items-center"},[i("img",{staticClass:" h-16",attrs:{src:a("bb6e")("./"+e.img),alt:"paket tryout"}}),i("div",{staticClass:"text-white font-bold text-xl ml-4"},[i("h1",[t._v("UTBK")]),i("h2",[t._v(t._s(e.name))])])]),i("div",{staticClass:"mt-2 flex justify-end"},[0==e.status?i("div",{staticClass:"btn-primary text-gray-700 bg-white hover:bg-gray-200 text-sm",on:{click:function(a){return t.pesan(e.name)}}},[i("span",[t._v("PESAN")])]):1==e.status?i("Modal"):2==e.status?i("div",{staticClass:"btn-primary text-gray-700 bg-white hover:bg-gray-200 text-sm"},[i("span",[t._v("MENUNGGU PEMBAYARAN")])]):3==e.status?i("div",{staticClass:"btn-primary text-gray-700 bg-white hover:bg-gray-200 text-sm"},[i("span",[t._v("MENUNGGU AKTIVASI")])]):4==e.status?i("div",{staticClass:"btn-primary text-gray-700 bg-white hover:bg-gray-200 text-sm",on:{click:function(e){return t.$router.push({name:"assessment"})}}},[i("span",[t._v("CEK HASIL")])]):t._e()],1)])])})),0)])},f=[],v=a("5530"),g=a("2f62"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{attrs:{visible:t.visible},scopedSlots:t._u([{key:"activator",fn:function(){return[i("div",{staticClass:"btn-primary text-gray-700 bg-white hover:bg-gray-200 text-sm inline-block",on:{click:t.mulai}},[i("span",[t._v("MULAI")])])]},proxy:!0},{key:"content",fn:function(){return[i("div",{staticClass:"card max-w-full sm:max-w-md overflow-visible sm:mx-auto"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"flex justify-between items-center"},[i("div",{staticClass:"text-xl font-bold text-gray-800"},[t._v("Pilih Paket Soal dan PTN")]),i("div",{staticClass:"btn-icon",on:{click:function(e){t.visible=!1}}},[i("img",{attrs:{src:a("8b1b"),alt:"icons",width:"25px"}})])])]),i("div",{staticClass:"bg-white card-body rounded-br rounded-bl"},[i("Form")],1)])]},proxy:!0}])})},_=[],x=a("714b"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.isSelectPtn?t.loadingForm?a("div",{staticClass:"mt-4 animate-pulse w-full h-4 bg-gray-400 rounded"}):t.isSelectPtn?a("div",[a("div",{staticClass:"mb-2 font-xl font-bold text-gray-700"},[t._v("Pilihan PTN dan Prodi Pertama")]),a("PilihPtnProdi",{attrs:{pilihan_ptn:t.data.pilihan_ptn[0]},on:{"update:pilihan_ptn":function(e){return t.$set(t.data.pilihan_ptn,0,e)}}}),a("div",{staticClass:"mb-2 font-xl font-bold text-gray-700"},[t._v("Pilihan PTN dan Prodi Kedua")]),a("PilihPtnProdi",{attrs:{pilihan_ptn:t.data.pilihan_ptn[1]},on:{"update:pilihan_ptn":function(e){return t.$set(t.data.pilihan_ptn,1,e)}}}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn-primary bg-white text-teal-500",on:{click:function(e){t.isSelectPtn=!1,t.data.id_paket_soal=0}}},[t._v(" Kembali ")]),a("button",{staticClass:"btn-primary ml-4",attrs:{disabled:i}},[t._v(" Simpan ")])])],1):t._e():a("PilihPaketSoal",{attrs:{id_paket_soal:t.data.id_paket_soal},on:{"update:id_paket_soal":function(e){return t.$set(t.data,"id_paket_soal",e)}}})],1)]}}])})},y=[],w=(a("4de4"),a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-4"},[a("ValidationProvider",{attrs:{name:"paket_soal",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("Option",{attrs:{items:t.dataPaketSoal,item:{text:"nama",value:"id"},"selected-value":t.namaPaketSoal,placeholder:"Pilih Paket Soal"},on:{"update:selectedValue":function(e){t.namaPaketSoal=e},"update:selected-value":function(e){t.namaPaketSoal=e}},model:{value:t.id_paket_soal,callback:function(e){t.id_paket_soal=e},expression:"id_paket_soal"}}),a("p",{staticClass:"field-message"},[t._v(t._s(i[0]))])]}}])})],1)}),C=[],P=a("7bb1"),S=a("4c93"),j=a("bb63");Object(P["c"])("required",Object(v["a"])(Object(v["a"])({},S["b"]),{},{message:"Data harus di isi"}));var O={components:{Option:j["a"]},data:function(){return{id_paket_soal:"",namaPaketSoal:""}},watch:{id_paket_soal:function(t){this.$emit("update:id_paket_soal",t)}},computed:Object(v["a"])({},Object(g["b"])("dataDashboard",["dataPaketSoal"]))},E=O,T=Object(d["a"])(E,w,C,!1,null,null,null),$=T.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mb-4"},[a("label",{attrs:{for:""}},[t._v("Pilih PTN")]),a("ValidationProvider",{attrs:{name:"ptn",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("Autocomplete",{attrs:{items:t.dataPtn,item:{text:"text",value:"value"},loading:t.loading,"selected-value":t.nama_ptn,placeholder:"Pilih PTN",position:"top"},on:{"update:selectedValue":function(e){t.nama_ptn=e},"update:selected-value":function(e){t.nama_ptn=e}}}),a("p",{staticClass:"field-message"},[t._v(t._s(i[0]))])]}}])})],1),a("div",{staticClass:"mb-4"},[a("label",{attrs:{for:""}},[t._v("Pilih Prodi")]),a("ValidationProvider",{attrs:{name:"prodi",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("Autocomplete",{attrs:{items:t.data_prodi,item:{text:"prodi",value:"kode_prodi"},loading:t.loading,"return-object":!0,"selected-value":t.nama_prodi,placeholder:"Pilih Prodi",position:"bottom"},on:{"update:selectedValue":function(e){t.nama_prodi=e},"update:selected-value":function(e){t.nama_prodi=e}},model:{value:t.prodi,callback:function(e){t.prodi=e},expression:"prodi"}}),a("p",{staticClass:"field-message"},[t._v(t._s(i[0]))])]}}])})],1)])},N=[],I=a("2d16"),K=a("bb0b");Object(P["c"])("required",Object(v["a"])(Object(v["a"])({},S["b"]),{},{message:"Data harus di isi"}));var U={components:{Autocomplete:K["a"]},data:function(){return{nama_ptn:"",nama_prodi:"",data_prodi:[],selectedKelompokUji:"",prodi:""}},computed:Object(v["a"])(Object(v["a"])({},Object(g["b"])("dataPtn",["dataPtn","loading","dataPilihanPtn"])),Object(g["b"])("dataDashboard",["dataPaketSoal"])),watch:{nama_ptn:function(t){var e=this;this.$store.commit("dataPtn/updateLoading",!0),Object(I["b"])({kelompok:this.selectedKelompokUji,ptn:t}).then((function(t){200==t.status?(e.data_prodi=t.data,e.$store.commit("dataPtn/updateLoading",!1)):e.$store.commit("dataPtn/updateLoading",!1)})).catch((function(){return e.$store.commit("dataPtn/updateLoading",!1)}))},prodi:function(t){this.$emit("update:pilihan_ptn",{id_ptn:t.kode_ptn,id_prodi:t.kode_prodi})}},created:function(){var t=this,e=["SAINTEK","SOSHUM"];this.selectedKelompokUji=e.filter((function(e){var a=t.dataPaketSoal[0].nama.includes(e);if(a)return e}))[0]}},B=U,A=Object(d["a"])(B,L,N,!1,null,null,null),D=A.exports,M={components:{PilihPtnProdi:D,PilihPaketSoal:$},data:function(){return{selectedKelompokUji:"",data:{id_paket_soal:"",pilihan_ptn:[]},isSelectPtn:!1}},computed:Object(v["a"])(Object(v["a"])({},Object(g["b"])("dataDashboard",["dataPaketSoal"])),Object(g["b"])("dataPtn",["dataPilihanPtn","loadingForm"])),watch:{"data.id_paket_soal":function(t){t>0&&(this.isSelectPtn=!0,window.localStorage.setItem("id_paket_soal",t),this.$store.dispatch("dataPtn/cekPilihanPtn",{id_paket_soal:t,id_peserta:JSON.parse(window.localStorage.getItem("dataPeserta")).id}))},dataPilihanPtn:function(t){t.length>0?this.$router.push({name:"paket-soal",params:{id:this.data.id_paket_soal}}):this.isSelectPtn=!0}},created:function(){var t=this,e=["SAINTEK","SOSHUM"];this.selectedKelompokUji=e.filter((function(e){var a=t.dataPaketSoal[0].nama.includes(e);if(a)return e}))[0],this.$store.dispatch("dataPtn/getDataPtn",this.selectedKelompokUji)},methods:{onSubmit:function(){localStorage.pilihan_ptn=JSON.stringify(this.data.pilihan_ptn),this.$router.push({name:"paket-soal"})}}},F=M,R=Object(d["a"])(F,k,y,!1,null,null,null),G=R.exports,V={data:function(){return{visible:!1}},components:{Form:G,Modal:x["a"]},methods:{mulai:function(){var t=JSON.parse(window.localStorage.getItem("dataPeserta"));null===t.sekolah.tahun_kelulusan?this.$router.push({name:"biodata"}):this.visible=!0}}},J=V,H=Object(d["a"])(J,b,_,!1,null,null,null),z=H.exports,q={computed:Object(v["a"])({},Object(g["b"])("dataDashboard",["dataPaket"])),components:{Modal:z},methods:{pesan:function(t){var e=JSON.parse(window.localStorage.getItem("dataPeserta"));null===e.sekolah.tahun_kelulusan?this.$router.push({name:"biodata"}):this.$router.push({name:"pesan-paket",params:{nama_paket:t}})}}},Y=q,Q=(a("6d9d"),Object(d["a"])(Y,h,f,!1,null,null,null)),W=Q.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card bg-gray-300"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"font-bold text-2xl text-gray-700 italic"},[i("div",{staticClass:"flex items-center"},[i("img",{attrs:{src:a("ecec"),alt:"icon",width:"30px"}}),i("span",{staticClass:"uppercase ml-4"},[t._v(t._s(t.data.nama))])]),i("div",{staticClass:"flex items-center"},[i("img",{attrs:{src:a("30e2"),alt:"icon",width:"30px"}}),i("span",{staticClass:"ml-4"},[t._v(t._s(t.data.sekolah))])])]),i("div",{staticClass:"text-right mt-4"},[i("button",{staticClass:"btn-primary",on:{click:function(e){return t.$router.push({name:"biodata"})}}},[t._v(" EDIT PROFIL ")])])])])},Z=[],tt={computed:{data:function(){var t=JSON.parse(window.localStorage.getItem("dataPeserta"));return{nama:t.nama,sekolah:null==t.sekolah.nama?"-":t.sekolah.nama}}}},et=tt,at=Object(d["a"])(et,X,Z,!1,null,null,null),it=at.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card mt-16 border overflow-visible"},[i("div",{staticClass:"card-body"},[t._m(0),i("div",{staticClass:"grid grid-cols-5 gap-4"},t._l(t.items,(function(e){return i("div",{key:e.text},[i("img",{attrs:{src:a("bb6e")("./"+e.img),alt:"image"}}),i("div",{staticClass:"text-center text-sm mt-3",style:{color:e.color}},[t._v(" "+t._s(e.text)+" ")])])})),0)])])},st=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tabs flex mb-4"},[i("a",{staticClass:"tab mr-6",attrs:{href:"javascript:void(0)"}},[t._v(" Performance ")]),i("a",{staticClass:"tab",attrs:{href:"javascript:void(0)"}},[t._v(" Progress ")]),i("img",{staticClass:"ml-auto w-20 h-20 -mt-12",attrs:{src:a("3c32"),alt:"statistik"}})])}],rt={data:function(){return{items:[{img:"5@3x.png",text:"All",color:"#8186C1"},{img:"6@3x.png",text:"Penalaran Umum",color:"#F3766A"},{img:"7@3x.png",text:"Pemahaman Bacaan & Menulis",color:"#F99F41"},{img:"8@3x.png",text:"Pengetahuan, Pemahaman Umum",color:"#2391D0"},{img:"9@3x.png",text:"Pengetahuan Kuantitatif",color:"#6FA644"}]}}},ot=rt,lt=(a("eda1"),Object(d["a"])(ot,nt,st,!1,null,null,null)),ct=lt.exports,dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table-auto w-full"},[t._m(0),i("tbody",t._l(t.dataProgressPaket,(function(e){return i("tr",{key:e.nama},[i("td",[t._v(t._s(e.nama))]),i("td",[i("center",[e.selesai?i("img",{attrs:{src:a("c36c"),width:"25",alt:"icons"}}):i("img",{attrs:{src:a("203b"),width:"25",alt:"icons"}})])],1),i("td",[i("button",{staticClass:"btn-primary px-2 py-1",attrs:{disabled:!e.selesai},on:{click:function(e){return t.$router.push({name:"assessment"})}}},[t._v(" Result ")])])])})),0)])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"py-2"},[a("tr",[a("th",[t._v("Paket Soal")]),a("th",[t._v("Tes Potensi Skolastik (TPS)")]),a("th",[t._v("Report")])])])}],mt={computed:Object(v["a"])({},Object(g["b"])("dataDashboard",["dataProgressPaket"]))},pt=mt,ht=(a("9d3e"),Object(d["a"])(pt,dt,ut,!1,null,"2f46bd25",null)),ft=ht.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-4"},[i("img",{attrs:{src:a("5c62"),alt:"simulasi"}}),i("div",[t._m(0),i("P",{staticClass:"mb-4 text-gray-700"},[t._v(" Dapatkan fasilitas SIMULASI RASIONALISASI UTBK hanya untuk kamu yang membeli fasilitas paketpremium (Sukses-1, Sukses-2, Sukses-3).Bandingkan nilai akhir kami dengan standar nilai PTN di seluruh Indonesia ")]),i("button",{staticClass:"btn-primary bg-orange-500",on:{click:function(e){return t.$router.push({name:"simulasi-rasional"})}}},[i("div",{staticClass:"flex"},[t._v(" Selengkapnya ")])])],1)])},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-xl sm:text-2xl font-bold mb-4"},[a("span",{staticClass:"text-teal-500"},[t._v("SIMULASI")]),a("br"),a("span",{staticClass:"text-orange-500"},[t._v("RASIONALISASI UTBK 2021")])])}],bt={},_t=Object(d["a"])(bt,vt,gt,!1,null,null,null),xt=_t.exports,kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"flex flex-no-wrap overflow-hidden -mx-4"},t._l(t.videos,(function(e){return i("div",{key:e.text,staticClass:"w-full sm:w-1/3 flex-none px-4 transition duration-200",style:{transform:"translateX("+t.position+"%)"}},[i("div",{staticClass:"card relative",staticStyle:{"max-height":"200px"}},[i("img",{staticClass:"object-fill",attrs:{src:a("bb6e")("./"+e.img),alt:"video"}}),i("div",{staticClass:"card-body"},[i("div",[i("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(a){t.link=e.link,t.visible=!0}}},[i("img",{attrs:{src:a("34af"),alt:"icon",width:"50"}}),i("div",{staticClass:"ml-3 hover:underline"},[t._v(t._s(e.title))])])])])])])})),0),i("div",{staticClass:"text-center mt-8"},t._l(t.videos.length,(function(e){return i("span",{key:e,staticClass:"dot",class:{"bg-orange-500":e==t.activeSlide},on:{click:function(a){return t.changeSlide(e)}}})})),0),i("Modal",{attrs:{visible:t.visible},scopedSlots:t._u([{key:"activator",fn:function(){},proxy:!0},{key:"content",fn:function(){return[i("div",{staticClass:"card max-w-full sm:max-w-md mx-4 sm:mx-auto bg-transparent shadow-none"},[i("div",{staticClass:"flex justify-end mb-4"},[i("div",{staticClass:"btn-icon",on:{click:function(e){t.visible=!1}}},[i("img",{attrs:{src:a("8b1b"),alt:"icons",width:"25px"}})])]),i("iframe",{attrs:{width:"100%",height:"315",src:t.link,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]},proxy:!0}])})],1)},yt=[],wt={components:{Modal:x["a"]},data:function(){return{visible:!1,link:"",videos:[{video:"",img:"vid-1.jpg",title:"Protokol Covid19 untuk UTBK 2020",desc:"\n          UTBK 2020 di tengah wabah pandemi Covid19, dilaksanakan dengan protokol khusus",link:"https://www.youtube.com/embed/-BIu2ghBRjg"},{video:"",img:"vid-2.jpg",title:"Sosialisasi UTBK-SBMPTN 2020",desc:"\n          Sosialisasi Pelaksanaan UTBK-SBMPTN 2020 dalam kondisi pandemi covid-19 [20 Mei 2020]",link:"https://www.youtube.com/embed/h5woG-mCPu4"},{video:"",img:"vid-3.jpg",title:"Konferensi Pers Pelaksanaan UTBK 2020.",desc:"\n          Konferensi Pers Daring tentang Pelaksanaan UTBK pada Kondisi Normal Baru (New Normal)",link:"https://www.youtube.com/embed/P1aLwSwwEUQ"},{video:"",img:"vid-4.jpg",title:"Konferensi Pers Pelaksanaan UTBK 2020 Tahap-1.",desc:"\n          Konferensi Pers Daring tentang Pelaksanaan UTBK Tahap-1",link:"https://www.youtube.com/embed/4SwDHmhZsj0"},{video:"",img:"vid-5.jpg",title:"Tips Lolos UTBK SBMPTN",desc:"\n          Ngobrol Pendidikan : Tips Lolos UTBK PTN Bersama Wakil Ketua II LTMPT Prof.DR. Sutrisna Wibawa",link:"https://www.youtube.com/embed/Djd4ZBza-QQ"}],position:0,activeSlide:1}},methods:{changeSlide:function(t){this.position=100*(t-1)*-1,this.activeSlide=t}}},Ct=wt,Pt=(a("8ecc"),Object(d["a"])(Ct,kt,yt,!1,null,"5642e514",null)),St=Pt.exports,jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"show-more":t.showMore}},[i("div",{staticClass:"sm:text-right"},[i("button",{staticClass:"btn-primary my-6 sm:mb-6",on:{click:function(e){t.showMore=!t.showMore}}},[t.showMore?i("span",[t._v("Tampilkan lebih sedikit")]):i("span",[t._v("Tampilkan lebih banyak")])])]),i("div",{staticClass:"flex flex-no-wrap overflow-hidden -mx-4 row"},[0==t.dataBonusFasilitas.length?i("div",{staticClass:"w-full rounded py-3 mx-4 bg-blue-500 text-white text-center"},[t._v(" Data belum tersedia ")]):t._l(t.dataBonusFasilitas,(function(e){return i("div",{key:e.id,staticClass:"w-full sm:w-1/3 flex-none px-4 transition duration-200 col",style:{transform:"translateX("+t.position+"%)"}},[i("div",{staticClass:"card relative",staticStyle:{"max-height":"200px"}},[i("img",{staticClass:"object-fill",attrs:{src:e.file_gambar,alt:"video"}}),i("div",{staticClass:"card-body py-2 px-3 flex items-center justify-between"},[i("div",{staticClass:"mr-3"},[t._v(t._s(e.nama_fasilitas))]),e.has_access?i("a",{staticClass:"btn-icon bg-white",attrs:{href:e.file_url,target:"_blank"}},[i("img",{attrs:{src:a("f28e"),alt:"icon",width:"25"}})]):i("div",{staticClass:"btn-icon bg-white"},[i("img",{attrs:{src:a("9619"),alt:"icon",width:"25"}})])])])])}))],2),i("div",{staticClass:"text-center mt-8"},t._l(t.dataBonusFasilitas.length,(function(e){return i("span",{key:e,staticClass:"dot",class:{"bg-orange-500":e==t.activeSlide},on:{click:function(a){return t.changeSlide(e)}}})})),0)])},Ot=[],Et={data:function(){return{position:0,activeSlide:1,showMore:!1}},computed:Object(v["a"])({},Object(g["b"])("dataDashboard",["dataBonusFasilitas"])),methods:{changeSlide:function(t){this.position=100*(t-1)*-1,this.activeSlide=t}}},Tt=Et,$t=(a("900e"),Object(d["a"])(Tt,jt,Ot,!1,null,"df3000f6",null)),Lt=$t.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-10"},[a("div",[a("div",{staticClass:"block rounded py-2 bg-orange-500 text-xl text-white font-bold tracking-widest text-center"},[t._v(" SAINTEK ")]),a("ul",{staticClass:"border rounded mt-4 py-2 divide-y"},[0==t.peringkatSaintek.length?a("li",{staticClass:"px-4 py-2"},[a("div",{staticClass:"block rounded py-2 bg-blue-500 text-white text-center"},[t._v(" Data belum tersedia ")])]):t._l(t.peringkatSaintek,(function(e,i){return a("li",{key:i,staticClass:"flex px-4 py-2 items-center"},[a("div",{staticClass:"w-10 h-10 flex-shrink-0 rounded-full flex justify-center items-center bg-orange-300"},[t._v(" "+t._s(i+1)+" ")]),a("div",{staticClass:"ml-3"},[a("h1",[t._v(t._s(e.nama_peserta))]),a("h2",[t._v(t._s(e.sekolah.nama))])])])}))],2)]),a("div",[a("div",{staticClass:"block rounded py-2 bg-teal-500 text-xl text-white font-bold tracking-widest text-center"},[t._v(" SOSHUM ")]),a("ul",{staticClass:"border rounded mt-4 py-2 divide-y"},[0==t.peringkatSoshum.length?a("li",{staticClass:"px-4 py-2"},[a("div",{staticClass:"block rounded py-2 bg-blue-500 text-white text-center"},[t._v(" Data belum tersedia ")])]):t._l(t.peringkatSoshum,(function(e,i){return a("li",{key:i,staticClass:"flex px-4 py-2 items-center"},[a("div",{staticClass:"w-10 h-10 flex-shrink-0 rounded-full flex justify-center items-center bg-orange-300"},[t._v(" "+t._s(i+1)+" ")]),a("div",{staticClass:"ml-3"},[a("h1",[t._v(t._s(e.nama_peserta))]),a("h2",[t._v(t._s(e.sekolah.nama))])])])}))],2)])])},It=[];a("96cf"),a("d3b7");function Kt(t,e,a,i,n,s,r){try{var o=t[s](r),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(i,n)}function Ut(t){return function(){var e=this,a=arguments;return new Promise((function(i,n){var s=t.apply(e,a);function r(t){Kt(s,i,n,r,o,"next",t)}function o(t){Kt(s,i,n,r,o,"throw",t)}r(void 0)}))}}var Bt=a("0203"),At={data:function(){return{peringkatSaintek:[],peringkatSoshum:[]}},created:function(){this.getDataPeringkat()},methods:{getDataPeringkat:function(){var t=Ut(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(Bt["c"])({nama:"",kelompok:"soshum",id_ptn:0,id_prodi:0,page:1}).then((function(t){if(200==t.status){var a=0;for(var i in t.data.data)e.peringkatSoshum[a]=t.data.data[i],a++}})).catch((function(t){return t}));case 2:return t.next=4,Object(Bt["c"])({nama:"",kelompok:"saintek",id_ptn:0,id_prodi:0,page:1}).then((function(t){200==t.status&&(e.peringkatSaintek=t.data.data)})).catch((function(t){return t}));case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},Dt=At,Mt=Object(d["a"])(Dt,Nt,It,!1,null,null,null),Ft=Mt.exports,Rt=a("fd2d"),Gt={components:{Footer:Rt["a"],Peringkat:Ft,BonusFasilitas:Lt,Video:St,Simulasi:xt,StatistikProgress:ft,Performance:ct,Profil:it,PaketTryout:W,FixedNavbar:p["a"],Navbar:m},created:function(){var t=JSON.parse(window.localStorage.getItem("dataPeserta"));this.$store.dispatch("dataDashboard/getDataDashboard",t.id)},computed:{nama:function(){return JSON.parse(window.localStorage.getItem("dataPeserta")).nama}}},Vt=Gt,Jt=(a("6aaa"),Object(d["a"])(Vt,i,n,!1,null,"63dc44c0",null));e["default"]=Jt.exports},c1ac:function(t,e,a){},caad:function(t,e,a){"use strict";var i=a("23e7"),n=a("4d64").includes,s=a("44d2"),r=a("ae40"),o=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!o},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},e240:function(t,e,a){},eda1:function(t,e,a){"use strict";var i=a("ba86"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-d2f593bc.b1ef4302.js.map