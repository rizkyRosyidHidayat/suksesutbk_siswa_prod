(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ac76b1"],{"0d6d":function(t,a,e){"use strict";var s=e("9e88"),i=e.n(s);i.a},"26aa":function(t,a,e){"use strict";var s=e("c1ac"),i=e.n(s);i.a},"714b":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._t("activator"),t.visible?e("div",{staticClass:"modal z-50"},[t._t("content")],2):t._e()],2)},i=[],o={props:["visible"]},n=o,l=(e("26aa"),e("2877")),r=Object(l["a"])(n,s,i,!1,null,"58a1a307",null);a["a"]=r.exports},"86a9":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"paket-soal overflow-hidden"},[e("FixedNavbar"),e("div",{staticClass:"mt-32 mb-24 px-4 w-full md:w-1/2 block mx-auto"},[e("div",{staticClass:"card bg-blue-400 text-white mb-8"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-lg"},[t._v(" Untuk bisa melihat Assessment Report kamu harus menyelesaikan semua Tes terlebih dahulu. ")]),e("button",{staticClass:"btn-primary bg-white text-blue-500 mt-4",on:{click:t.lihat}},[t._v(" Lihat Asessment Report ")])])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body flex justify-between items-center bg-orange-300"},[e("div",{staticClass:"text-lg font-bold text-gray-700"},[t._v(t._s(t.dataPaketSoal.materi_uji))]),e("ModalDownloadSoal",{attrs:{data:t.dataPaketSoal}})],1),e("div",{staticClass:"card-body"},[t.$store.getters.getLoading?e("div",{staticClass:"animate-pulse h-4 w-full bg-gray-400 rounded mt-4"}):e("table",{staticClass:"table-auto w-full divide-y"},[t._m(0),e("tbody",{staticClass:"divide-y"},t._l(t.dataPaketSoal.submateri,(function(a,s){return e("tr",{key:a.nama},[e("td",{staticClass:"text-center"},[t._v(t._s(s+1))]),e("td",[t._v(t._s(a.nama))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.butir_soal))])])})),0)])])])]),e("Footer")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("No")]),e("th",[t._v("Materi Uji")]),e("th",[t._v("Butir Soal")])])])}],o=e("5530"),n=e("2f62"),l=e("0462"),r=e("fd2d"),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("Modal",{attrs:{visible:t.visible},scopedSlots:t._u([{key:"activator",fn:function(){return[s("div",{staticClass:"btn-primary px-2 py-1",on:{click:function(a){return t.mulai(t.data)}}},[1==t.data.completed?s("span",[t._v("Selesai")]):s("span",[t._v("Mulai")])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"card max-w-full sm:max-w-md mx-auto text-white",class:t.color},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"flex justify-end items-center"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.status,expression:"!status"}],staticClass:"btn-icon",on:{click:function(a){t.visible=!1}}},[s("img",{attrs:{src:e("8b1b"),alt:"icons",width:"25px"}})])])]),s("div",{staticClass:"card-body rounded-br rounded-bl text-center pt-0"},[t.$store.getters.getLoading?s("div",[s("center",[s("img",{staticClass:"h-16 animate-bounce mb-6",attrs:{src:e("4ffd"),alt:"logo"}})])],1):s("div",[t.status?t._e():s("div",[s("svg",{staticClass:"block mx-auto animate-bounce",staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"64px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z",fill:"white"}}),s("rect",{attrs:{x:"0",y:"0",width:"24",height:"24",fill:"rgba(0, 0, 0, 0)"}})]),s("div",{staticClass:"my-4"},[t._v("Maaf proses download soal gagal, mohon periksa koneksi internet anda")]),s("div",{staticClass:"btn-primary bg-white text-red-500 inline-block",on:{click:function(a){return t.mulai(t.data)}}},[t._v(" Ulangi Download ")])])])])])]},proxy:!0}])})},c=[],u=e("714b"),m={props:["data"],data:function(){return{visible:!1,color:"bg-transparant",pilihan_ptn:[]}},computed:{status:function(){return this.$store.getters.getNotif.status}},watch:{status:function(t){t||(this.color="bg-red-500")}},components:{Modal:u["a"]},methods:{mulai:function(t){0==t.completed&&(localStorage.soal?this.$router.push({name:"pengerjaan-soal",params:{id:t.id_materi_uji}}):(this.visible=!0,this.$store.dispatch("dataSoal/postDataUjian",{ptn:this.pilihan_ptn,subpaket_id:window.localStorage.getItem("id_subpaket"),paketsoal_id:window.localStorage.getItem("id_paket_soal"),materiuji_id:t.id_materi_uji})))}},created:function(){this.pilihan_ptn=localStorage.pilihan_ptn}},p=m,b=e("2877"),v=Object(b["a"])(p,d,c,!1,null,null,null),h=v.exports,f={components:{Footer:r["a"],FixedNavbar:l["a"],ModalDownloadSoal:h},computed:Object(o["a"])({},Object(n["b"])("dataDashboard",["dataPaketSoal"])),methods:{lihat:function(){1==this.dataPaketSoal.completed&&this.$router.push({name:"assessment-report"})}},created:function(){this.$store.dispatch("dataDashboard/getDataPaketSoal",{id_peserta:JSON.parse(window.localStorage.getItem("dataPeserta")).id,id_paket_soal:window.localStorage.getItem("id_paket_soal")})}},_=f,w=(e("0d6d"),Object(b["a"])(_,s,i,!1,null,"653e76fb",null));a["default"]=w.exports},"9e88":function(t,a,e){},c1ac:function(t,a,e){}}]);
//# sourceMappingURL=chunk-62ac76b1.01a43423.js.map