(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50832b10"],{"129f":function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},2451:function(t,a,e){},2532:function(t,a,e){"use strict";var i=e("23e7"),s=e("5a34"),n=e("1d80"),l=e("ab13");i({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~String(n(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,a,e){var i=e("861d"),s=e("c6b6"),n=e("b622"),l=n("match");t.exports=function(t){var a;return i(t)&&(void 0!==(a=t[l])?!!a:"RegExp"==s(t))}},5393:function(t,a,e){},"5a34":function(t,a,e){var i=e("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"63e6":function(t,a,e){"use strict";var i=e("5393"),s=e.n(i);s.a},"6e36":function(t,a,e){"use strict";var i=e("e240"),s=e.n(i);s.a},"758b":function(t,a,e){},"841c":function(t,a,e){"use strict";var i=e("d784"),s=e("825a"),n=e("1d80"),l=e("129f"),r=e("14c3");i("search",1,(function(t,a,e){return[function(a){var e=n(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,e):new RegExp(a)[t](String(e))},function(t){var i=e(a,t,this);if(i.done)return i.value;var n=s(t),o=String(this),d=n.lastIndex;l(d,0)||(n.lastIndex=0);var c=r(n,o);return l(n.lastIndex,d)||(n.lastIndex=d),null===c?-1:c.index}]}))},ab13:function(t,a,e){var i=e("b622"),s=i("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(e){try{return a[s]=!1,"/./"[t](a)}catch(i){}}return!1}},ad54:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"simulasi overflow-hidden"},[e("FixedNavbar"),e("div",{staticClass:"mt-32 mb-24 px-4 w-full md:w-2/3 block mx-auto"},[e("div",{staticClass:"card overflow-visible"},[t._m(0),e("div",{staticClass:"card-body"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-4"},[e("Profil"),e("div",[e("Form")],1)],1)])]),t.$store.getters["dataSimulasi/getVisible"]?e("HasilRasionalisasi"):t._e()],1),e("Footer")],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-body"},[e("h1",{staticClass:"text-2xl font-bold text-gray-700"},[t._v(" Simulasi Rasionalisasi UTBK ")])])}],n=e("0462"),l=e("fd2d"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.onSubmit(a)}}},[e("PilihPaketSoal",{attrs:{id_ujian:t.data.id_ujian},on:{"update:id_ujian":function(a){return t.$set(t.data,"id_ujian",a)}}}),e("div",{staticClass:"mb-2 font-xl text-gray-700"},[t._v("Ubah target program studimu")]),e("PilihPtnProdi",{attrs:{id_ptn:t.data.id_ptn,id_prodi:t.data.id_prodi},on:{"update:id_ptn":function(a){return t.$set(t.data,"id_ptn",a)},"update:id_prodi":function(a){return t.$set(t.data,"id_prodi",a)}}}),e("button",{staticClass:"btn-primary mb-4",attrs:{disabled:i}},[e("Spinner",[t._v(" Simpan ")])],1),e("Notif")],1)]}}])})},o=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-4"},[e("ValidationProvider",{attrs:{name:"paket_soal",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("Option",{attrs:{items:t.dataPaketSoal,item:{text:"paket_soal",value:"id_ujian"},"selected-value":t.namaPaketSoal,placeholder:"Pilih Paket Soal"},on:{"update:selectedValue":function(a){t.namaPaketSoal=a},"update:selected-value":function(a){t.namaPaketSoal=a}},model:{value:t.id_ujian,callback:function(a){t.id_ujian=a},expression:"id_ujian"}}),e("p",{staticClass:"field-message"},[t._v(t._s(i[0]))])]}}])})],1)},c=[],u=e("5530"),p=e("7bb1"),m=e("4c93"),v=e("2f62"),f=e("bb63");Object(p["c"])("required",Object(u["a"])(Object(u["a"])({},m["b"]),{},{message:"Data harus di isi"}));var h={components:{Option:f["a"]},data:function(){return{id_ujian:"",namaPaketSoal:""}},watch:{id_ujian:function(t){this.$emit("update:id_ujian",t)}},computed:Object(u["a"])({},Object(v["b"])("dataSimulasi",["dataPaketSoal"]))},_=h,b=e("2877"),g=Object(b["a"])(_,d,c,!1,null,null,null),x=g.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"mb-4"},[e("ValidationProvider",{attrs:{name:"ptn",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("Autocomplete",{attrs:{items:t.dataPtn,item:{text:"text",value:"value"},loading:t.loading,"selected-value":t.nama_ptn,placeholder:"Pilih PTN",position:"top"},on:{"update:selectedValue":function(a){t.nama_ptn=a},"update:selected-value":function(a){t.nama_ptn=a}}}),e("p",{staticClass:"field-message"},[t._v(t._s(i[0]))])]}}])})],1),e("div",{staticClass:"mb-4"},[e("ValidationProvider",{attrs:{name:"prodi",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("Autocomplete",{attrs:{items:t.dataProdi,item:{text:"prodi",value:"kode_prodi"},loading:t.loading,"return-object":!0,"selected-value":t.nama_prodi,placeholder:"Pilih Prodi",position:"top"},on:{"update:selectedValue":function(a){t.nama_prodi=a},"update:selected-value":function(a){t.nama_prodi=a}},model:{value:t.prodi,callback:function(a){t.prodi=a},expression:"prodi"}}),e("p",{staticClass:"field-message"},[t._v(t._s(i[0]))])]}}])})],1)])},C=[],S=e("bb0b");Object(p["c"])("required",Object(u["a"])(Object(u["a"])({},m["b"]),{},{message:"Data harus di isi"}));var P={components:{Autocomplete:S["a"]},data:function(){return{nama_ptn:"",nama_prodi:"",prodi:""}},computed:Object(u["a"])(Object(u["a"])({},Object(v["b"])("dataSimulasi",["dataPtn","dataPaketSoal","dataKelompokUji"])),Object(v["b"])("dataPtn",["loading","dataProdi"])),watch:{nama_ptn:function(t){this.$store.commit("dataPtn/updateLoading",!0),this.$store.commit("dataSimulasi/updateNamaPtnTerpilih",t),this.$store.dispatch("dataPtn/getDataProdi",{kelompok:this.dataKelompokUji,ptn:t})},prodi:function(t){this.$emit("update:id_ptn",t.kode_ptn),this.$emit("update:id_prodi",t.kode_prodi)}}},y=P,j=Object(b["a"])(y,k,C,!1,null,null,null),w=j.exports,O=e("2375"),$=e("6959"),E={components:{Notif:$["a"],Spinner:O["a"],PilihPtnProdi:w,PilihPaketSoal:x},data:function(){return{data:{id_ujian:"",id_ptn:"",id_prodi:""}}},methods:{onSubmit:function(){this.$store.dispatch("dataSimulasi/postDataSimulasi",this.data)}}},N=E,L=Object(b["a"])(N,r,o,!1,null,null,null),T=L.exports,V=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ul",[i("li",[i("img",{staticClass:"w-6",attrs:{src:e("ac9d"),alt:"icons"}}),i("span",{staticClass:"ml-3"},[t._v(t._s(t.data.sekolah.nama))])]),i("li",[i("img",{staticClass:"w-6",attrs:{src:e("4104"),alt:"icons"}}),i("span",{staticClass:"ml-3"},[t._v(t._s(t.data.sekolah.kabupaten+", "+t.data.sekolah.provinsi))])]),i("li",[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",fill:"#2683C6"}}),i("rect",{attrs:{x:"0",y:"0",width:"24",height:"24",fill:"rgba(0, 0, 0, 0)"}})]),i("span",{staticClass:"ml-3"},[t._v(t._s(t.$store.getters["dataSimulasi/getNamaPtnTerpilih"]))])])])},A=[],U={data:function(){return{data:""}},created:function(){this.data=JSON.parse(localStorage.dataPeserta)}},D=U,F=(e("c325"),Object(b["a"])(D,V,A,!1,null,"6361d404",null)),I=F.exports,K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card mt-16"},[e("div",{staticClass:"card-body pb-8"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-10 gap-4"},[e("div",{staticClass:"md:col-span-3 text-center"},[e("span",[t._v("NILAI UTBK ANDA")]),e("h1",{staticClass:"text-6xl font-bold text-yellow-500 -mt-4"},[t._v(" "+t._s(t.dataSimulasi.nilai_utbk.skor_akhir.toFixed(2))+" ")])]),t._m(0),e("div",{staticClass:"md:col-span-4"},[e("ul",[e("li",[t._v(t._s(t.dataSimulasi.ptn.nama))]),e("li",[t._v(t._s(t.dataSimulasi.ptn.prodi))]),e("li",[t._v(t._s(t.dataSimulasi.nilai_utbk.kelompok))])])])]),e("div",{staticClass:"mt-8"},[e("h1",{staticClass:"text-lg font-bold text-gray-700"},[t._v(" "+t._s(t.dataSimulasi.analisis.materi_uji)+" ")]),e("table",{staticClass:"table-fixed w-full md:w-1/2 mt-4"},[e("tbody",t._l(t.dataSimulasi.analisis.submateri,(function(a){return e("tr",{key:a.submateri,staticClass:"odd:bg-gray-200"},[e("td",{staticClass:"w-4/5"},[t._v(t._s(a.submateri))]),e("td",{staticClass:"w-1/5 text-right font-bold"},[t._v(t._s(a.skor))])])})),0)])]),e("div",{staticClass:"mt-16"},[e("p",{staticClass:"text-center gap-4text-lg font-bold text-gray-700"},[t._v(" Program Studi "+t._s(t.dataSimulasi.ptn.prodi)+" di "+t._s(t.dataSimulasi.ptn.nama)+", Memiliki ")]),e("div",{staticClass:"w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mt-8"},[e("div",{staticClass:"text-center"},[e("span",[t._v("Daya Tampung")]),e("h1",{staticClass:"text-3xl font-bold text-gray-700"},[t._v(t._s(t.dataSimulasi.ptn.stats.daya_tampung))])]),e("div",{staticClass:"text-center"},[e("span",[t._v("Peminat")]),e("h1",{staticClass:"text-3xl font-bold text-gray-700"},[t._v(t._s(t.dataSimulasi.ptn.stats.peminat))])]),e("div",{staticClass:"text-center"},[e("span",[t._v("Indeks Ketetapan")]),e("h1",{staticClass:"text-3xl font-bold text-gray-700"},[t._v(t._s(t.dataSimulasi.ptn.stats.indeks_keketatan.value.toFixed(2))+"%")])])])]),e("div",{staticClass:"mt-8 peringkat"},[e("p",{staticClass:"text-xl font-bold text-gray-700 mb-3"},[t._v(" Peringkatmu ")]),e("div",[e("span",{staticClass:"dot"}),t._v(" Peringkat "+t._s(t.dataSimulasi.peringkat.peringkat.kelompok_uji.self)+" dari "+t._s(t.dataSimulasi.peringkat.peringkat.kelompok_uji.all)+", yang memilih kelompok uji yang sama ")]),e("div",[e("span",{staticClass:"dot"}),t._v(" Peringkat "+t._s(t.dataSimulasi.peringkat.peringkat.ptn.self)+" dari "+t._s(t.dataSimulasi.peringkat.peringkat.ptn.all)+", yang memilih kelompok uji dan PTN yang sama ")]),e("div",[e("span",{staticClass:"dot"}),t._v(" Peringkat "+t._s(t.dataSimulasi.peringkat.peringkat.ptn_prodi.self)+" dari "+t._s(t.dataSimulasi.peringkat.peringkat.ptn_prodi.all)+", yang memilih kelompok uji, PTN, dan program studi yang sama ")])]),e("div",{staticClass:"mt-16 text-center"},[e("b",[t._v("Status Pilihan")]),t.dataSimulasi.ptn.memenuhi?e("div",[e("h1",{staticClass:"text-6xl font-bold text-green-500"},[t._v("LULUS")]),e("p",[t._v("Selamat kamu dinyatakan lulus dalam simulasi tes UTBK")])]):e("div",[e("h1",{staticClass:"text-4xl font-bold text-red-500"},[t._v("TIDAK LULUS")]),e("p",[t._v("Ayo berjuang lebih keras untuk bisa masuk PTN")])])])])])},R=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"md:col-span-3 hidden md:block"},[e("ul",[e("li",[t._v("Perguruan Tinggi")]),e("li",[t._v("Program Studi")]),e("li",[t._v("Kelompok Uji")])])])}],M={computed:Object(u["a"])({},Object(v["b"])("dataSimulasi",["dataSimulasi"]))},q=M,z=(e("bfc2"),Object(b["a"])(q,K,R,!1,null,"0a6e8698",null)),B=z.exports,H={components:{HasilRasionalisasi:B,Profil:I,Form:T,Footer:l["a"],FixedNavbar:n["a"]},data:function(){return{isSubmit:!1}},created:function(){var t=JSON.parse(localStorage.dataPeserta);this.$store.dispatch("dataSimulasi/getDataHistory",t.id)}},J=H,Y=(e("63e6"),Object(b["a"])(J,i,s,!1,null,"b9a7ad72",null));a["default"]=Y.exports},bb0b:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"relative"},[i("div",{on:{click:function(a){t.visible=!0}}},[i("div",{staticClass:"flex"},[i("input",{staticClass:"text-field rounded-tr-none rounded-br-none cursor-pointer",attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.selectedValue}}),t._m(0)])]),t.visible?i("div",{staticClass:"option-menu z-10",class:t.position},[i("div",{staticClass:"flex px-2 mb-2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"search",placeholder:"Cari data"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}}),i("div",{staticClass:"text-field-icon bg-teal-500 border-l-0 rounded-tl-none rounded-bl-none",on:{click:function(a){return t.$emit("dataSearching",t.search)}}},[i("img",{attrs:{src:e("d103"),alt:"icon",width:"25px"}})])]),i("ul",{staticStyle:{"max-height":"200px",overflow:"auto"}},[t.loading?i("li",[i("svg",{staticClass:"animate-spin text-teal-300 mx-auto",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none"}},[i("circle",{staticClass:"opacity-50",attrs:{cx:"12px",cy:"12px",r:"10",stroke:"currentColor","stroke-width":"4"}}),i("path",{attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])]):t._l(t.dataSearch,(function(a,e){return i("li",{key:e,on:{click:function(e){return t.selected(a)}}},[t._v(" "+t._s(a[t.item.text])+" ")])}))],2)]):t._e()])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"text-field-icon border-l-0 rounded-tl-none rounded-bl-none"},[i("img",{attrs:{src:e("1ad2"),alt:"icon",width:"25px"}})])}],n=(e("4de4"),e("caad"),e("ac1f"),e("2532"),e("841c"),{props:["items","returnObject","loading","item","placeholder","position","selectedValue"],model:{props:"value",event:"input"},data:function(){return{visible:!1,search:"",text:"",value:"",data:[]}},watch:{value:function(t){this.$emit("input",t)}},computed:{dataSearch:{get:function(){var t=this;return this.items.filter((function(a){return a[t.item.text].toLowerCase().includes(t.search)}))}}},methods:{handleClickOutside:function(t){this.$el.contains(t.target)||(this.visible=!1)},selected:function(t){this.$emit("update:selected-value",t[this.item.text]),this.returnObject?this.value=t:this.value=t[this.item.value],this.visible=!1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}}),l=n,r=(e("6e36"),e("2877")),o=Object(r["a"])(l,i,s,!1,null,"733ec558",null);a["a"]=o.exports},bb63:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"relative"},[e("div",{on:{click:function(a){t.visible=!0}}},[e("div",{staticClass:"flex"},[e("input",{staticClass:"text-field rounded-tr-none rounded-br-none cursor-pointer",attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.selectedValue}}),t._m(0)])]),t.visible?e("ul",{staticClass:"option-menu z-10"},t._l(t.items,(function(a,i){return e("li",{key:i,staticClass:"text-gray-800",on:{click:function(e){return t.selected(a)}}},[t._v(" "+t._s(a[t.item.text])+" ")])})),0):t._e()])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"text-field-icon border-l-0 rounded-tl-none rounded-bl-none bg-white"},[i("img",{attrs:{src:e("1ad2"),alt:"icon",width:"25px"}})])}],n={props:["items","return-object","placeholder","item","selected-value"],model:{prop:"value",event:"input"},data:function(){return{visible:!1,text:"",value:""}},watch:{value:function(t){this.$emit("input",t)}},methods:{handleClickOutside:function(t){this.$el.contains(t.target)||(this.visible=!1)},selected:function(t){this.$emit("update:selected-value",t[this.item.text]),this.value=t[this.item.value],this.visible=!1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},l=n,r=(e("d90a"),e("2877")),o=Object(r["a"])(l,i,s,!1,null,"53950712",null);a["a"]=o.exports},bfc2:function(t,a,e){"use strict";var i=e("cfd0"),s=e.n(i);s.a},c325:function(t,a,e){"use strict";var i=e("758b"),s=e.n(i);s.a},caad:function(t,a,e){"use strict";var i=e("23e7"),s=e("4d64").includes,n=e("44d2"),l=e("ae40"),r=l("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!r},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},cfd0:function(t,a,e){},d90a:function(t,a,e){"use strict";var i=e("2451"),s=e.n(i);s.a},e240:function(t,a,e){}}]);
//# sourceMappingURL=chunk-50832b10.a7295ce7.js.map