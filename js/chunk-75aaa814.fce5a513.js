(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75aaa814"],{"0632":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),i("section",[i("div",{staticClass:"w-full sm:w-1/2 card"},[i("div",{staticClass:"card-body"},[i("h1",{staticClass:"text-2xl font-bold text-gray-700 text-center"},[t._v("Selamat Skor Ujian Kamu adalah")]),i("div",{staticClass:"mt-8 grid grid-cols-1 md:grid-cols-2 items-center"},[i("div",{staticClass:"text-center text-6xl font-bold text-yellow-500"},[t._v(" "+t._s(t.skor.score.toFixed(2))+" ")]),i("div",[i("ul",[i("li",{staticClass:"flex items-center"},[i("img",{staticClass:"w-6",attrs:{src:a("755b"),alt:"icons"}}),i("span",{staticClass:"ml-3"},[t._v(t._s(t.durasi)+" Menit jumlah durasi")])]),i("li",{staticClass:"flex items-center"},[i("img",{staticClass:"w-6",attrs:{src:a("c36c"),alt:"icons"}}),i("span",{staticClass:"ml-3"},[t._v(t._s(t.skor.detail.benar)+" Jumlah soal benar")])]),i("li",{staticClass:"flex items-center"},[i("img",{staticClass:"w-6",attrs:{src:a("203b"),alt:"icons"}}),i("span",{staticClass:"ml-3"},[t._v(t._s(t.skor.detail.salah)+" Jumlah soal salah")])]),i("li",{staticClass:"flex items-center"},[i("img",{staticClass:"w-6",attrs:{src:a("83b6"),alt:"icons"}}),i("span",{staticClass:"ml-3"},[t._v(t._s(t.skor.detail.tidak_dijawab)+" Jumlah soal kosong")])])])])]),i("center",[i("div",{staticClass:"btn-primary inline-block my-4",on:{click:t.assessment}},[i("Spinner",[t._v(" Lihat Assessment ")])],1)])],1)])])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("nav",[i("img",{staticClass:"h-10",attrs:{src:a("0bc8"),alt:"logo"}})])}],c=a("2375"),l={components:{Spinner:c["a"]},data:function(){return{skor:""}},computed:{durasi:function(){return parseInt(this.skor.duration.value/60)}},created:function(){this.skor=JSON.parse(localStorage.skor_soal)},methods:{assessment:function(){this.$store.dispatch("dataSoal/postFinishUjian")}}},n=l,r=(a("2c54"),a("2877")),o=Object(r["a"])(n,i,e,!1,null,"77d5d284",null);s["default"]=o.exports},"0bc8":function(t,s,a){t.exports=a.p+"img/logo_white.3a4c1b72.png"},"203b":function(t,s,a){t.exports=a.p+"img/close_circle.9c242bd5.svg"},2375:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"flex justify-center"},[t.$store.getters.getLoading?a("svg",{staticClass:"animate-spin text-white",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none"}},[a("circle",{staticClass:"opacity-25",attrs:{cx:"12px",cy:"12px",r:"10",stroke:"currentColor","stroke-width":"4"}}),a("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._t("default")],2)},e=[],c=a("2877"),l={},n=Object(c["a"])(l,i,e,!1,null,null,null);s["a"]=n.exports},"2c54":function(t,s,a){"use strict";var i=a("736b"),e=a.n(i);e.a},"736b":function(t,s,a){},"755b":function(t,s,a){t.exports=a.p+"img/clock.d9cfec1b.svg"},"83b6":function(t,s,a){t.exports=a.p+"img/circle_outline.983550d0.svg"},c36c:function(t,s,a){t.exports=a.p+"img/check_circle.6946fbe0.svg"}}]);
//# sourceMappingURL=chunk-75aaa814.fce5a513.js.map