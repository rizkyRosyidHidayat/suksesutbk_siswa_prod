(function(t){function a(a){for(var n,i,d=a[0],r=a[1],c=a[2],s=0,p=[];s<d.length;s++)i=d[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);f&&f(a);while(p.length)p.shift()();return u.push.apply(u,c||[]),e()}function e(){for(var t,a=0;a<u.length;a++){for(var e=u[a],n=!0,i=1;i<e.length;i++){var d=e[i];0!==o[d]&&(n=!1)}n&&(u.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},i={app:0},o={app:0},u=[];function d(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-24b567d4":"93f0d4b0","chunk-ca68faf0":"c26e8648","chunk-06cbf01a":"e53bf360","chunk-109b2511":"42128977","chunk-89c32fb6":"1cf873f9","chunk-0a994f51":"5a7eb14f","chunk-171eb762":"b792abcb"}[t]+".js"}function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e={"chunk-24b567d4":1,"chunk-ca68faf0":1,"chunk-06cbf01a":1,"chunk-109b2511":1,"chunk-89c32fb6":1,"chunk-0a994f51":1,"chunk-171eb762":1};i[t]?a.push(i[t]):0!==i[t]&&e[t]&&a.push(i[t]=new Promise((function(a,e){for(var n="css/"+({}[t]||t)+"."+{"chunk-24b567d4":"105f22d2","chunk-ca68faf0":"bbef88bb","chunk-06cbf01a":"a5c37981","chunk-109b2511":"a81d5608","chunk-89c32fb6":"06c53173","chunk-0a994f51":"e1f4c450","chunk-171eb762":"d7f734a5"}[t]+".css",o=r.p+n,u=document.getElementsByTagName("link"),d=0;d<u.length;d++){var c=u[d],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===o))return a()}var p=document.getElementsByTagName("style");for(d=0;d<p.length;d++){c=p[d],s=c.getAttribute("data-href");if(s===n||s===o)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var n=a&&a.target&&a.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete i[t],f.parentNode.removeChild(f),e(u)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)a.push(n[2]);else{var u=new Promise((function(a,e){n=o[t]=[a,e]}));a.push(n[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=d(t);var p=new Error;c=function(a){s.onerror=s.onload=null,clearTimeout(f);var e=o[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,e[1](p)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(a)},r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=a,c=c.slice();for(var p=0;p<c.length;p++)a(c[p]);var f=s;u.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2d16":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"a",(function(){return o})),e.d(a,"c",(function(){return u}));var n=e("e0bc");function i(t){return n["a"].get("cari/ptn?kelompok="+t.kelompok+"&nama="+t.ptn)}function o(t){return n["a"].post("ujian/cek-pilihan-ptn",t)}function u(t){return n["a"].get("cari/kelompok/ptn?kelompok="+t)}},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],u=(e("df3d"),e("2877")),d={},r=Object(u["a"])(d,i,o,!1,null,null,null),c=r.exports,s=(e("45fc"),e("b0c0"),e("d3b7"),e("8c4f"));n["a"].use(s["a"]);var p=[{path:"/",name:"home",component:function(){return Promise.all([e.e("chunk-ca68faf0"),e.e("chunk-06cbf01a"),e.e("chunk-109b2511")]).then(e.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/biodata",name:"biodata",component:function(){return Promise.all([e.e("chunk-ca68faf0"),e.e("chunk-06cbf01a"),e.e("chunk-89c32fb6")]).then(e.bind(null,"bba1"))},meta:{requiresAuth:!0}},{path:"/paket-soal",name:"paket-soal",component:function(){return Promise.all([e.e("chunk-ca68faf0"),e.e("chunk-0a994f51")]).then(e.bind(null,"86a9"))},meta:{requiresAuth:!0}},{path:"/pengerjaan-soal",name:"pengerjaan-soal",component:function(){return e.e("chunk-24b567d4").then(e.bind(null,"6451"))},meta:{requiresAuth:!0}},{path:"/auth/:form",name:"auth",component:function(){return Promise.all([e.e("chunk-ca68faf0"),e.e("chunk-171eb762")]).then(e.bind(null,"2fef"))},props:!0}],f=new s["a"]({mode:"history",base:"/",routes:p});f.beforeEach((function(t,a,e){var n=t.matched.some((function(t){return t.meta.requiresAuth})),i=window.localStorage.getItem("dataPeserta");n&&!i?e({name:"auth",params:{form:"login"}}):i&&"auth"===t.name?e({name:"home"}):e()}));var m=f,l=e("2f62"),h=e("e0bc");function g(t){return h["a"].post("login/peserta",t)}function b(t){return h["a"].post("register/peserta",t)}function k(t){return h["a"].post("cek-akun",t)}var v={namespaced:!0,state:{statusCekNomor:null},mutations:{updateStatusCekNomor:function(t,a){t.statusCekNomor=a}},actions:{postDataLogin:function(t,a){X.dispatch("updateLoading",!0),g(a).then((function(t){200===t.data.status?(window.localStorage.setItem("dataPeserta",JSON.stringify(t.data.data)),window.localStorage.setItem("token",t.data.data.token),X.dispatch("updateNotif",{visible:!0,status:!0,msg:"Login berhasil"}),X.dispatch("updateLoading",!1),window.location.reload()):(X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Login gagal"}),X.dispatch("updateLoading",!1))})).catch((function(){X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Login gagal"}),X.dispatch("updateLoading",!1)}))},postDataDaftar:function(t,a){X.dispatch("updateLoading",!0);var e={nohp:a.nohp};k(e).then((function(t){200===t.status&&(t.data.tersedia?b(a).then((function(t){201===t.status?(window.localStorage.setItem("dataPeserta",JSON.stringify(t.data.data)),window.localStorage.setItem("token",t.data.data.token),X.dispatch("updateNotif",{visible:!0,status:!0,msg:"Pendaftaran berhasil"}),X.dispatch("updateLoading",!1),window.location.reload()):(X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Pendaftaran gagal"}),X.dispatch("updateLoading",!1))})).catch((function(){X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Pendaftaran gagal"}),X.dispatch("updateLoading",!1)})):(X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Nomor HP sudah pernah dipakai"}),X.dispatch("updateLoading",!1)))})).catch((function(){X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Nomor HP sudah pernah dipakai"}),X.dispatch("updateLoading",!1)}))}}},P=v;e("c740"),e("0481"),e("d81d"),e("4069");function L(t){return h["a"].get("peserta/"+t+"/dashboard")}function w(t){return h["a"].get("peserta/"+t.id_peserta+"/paket-soal/"+t.id_paket_soal)}var S={namespaced:!0,state:{dataProgressPaket:[],dataPaket:[],cekPengerjaanPaketSoal:function(t){var a=t.paket_soal.map((function(t){return t.materi_uji.findIndex((function(t){return 0==t.complete}))})).findIndex((function(t){return-1==t}));return-1==a?"selesai":"belum"},dataBonusFasilitas:[],dataPeringkat:[],dataPaketSoal:[]},mutations:{updateDataBonusFasilitas:function(t,a){t.dataBonusFasilitas=a.bonus_fasilitas},updateDataPaketSoal:function(t,a){t.dataPaketSoal=a},updateDataPaket:function(t,a){var e=[{name:"FREE",status:0,img:"1@3x.png"},{name:"SUKSES-1",status:0,img:"3@3x.png"},{name:"SUKSES-2",status:0,img:"2@3x.png"},{name:"SUKSES-3",status:0,img:"4@3x.png"}];t.dataPaket=a.paket.map((function(n){return e.map((function(e){var i=n.nama_paket==e.name;if(i&&!0===n.status&&!0===n.is_activated&&!0===n.is_paid){window.localStorage.setItem("id_subpaket",n.subpaket.id);var o=t.cekPengerjaanPaketSoal(a.progress_tryout.detail[0].subpaket);e.status="selesai"==o?4:1}else i&&!1===n.status&&!1===n.is_activated&&!1===n.is_paid?e.status=2:i&&!1===n.status&&!1===n.is_activated&&!0===n.is_paid&&(e.status=3);return e}))})).flat()},updateDataProgressPaket:function(t,a){t.dataProgressPaket=a.progress_tryout.detail[0].subpaket.paket_soal.map((function(t){return{id_paket_soal:t.id,nama:t.nama,selesai:t.materi_uji[0].completed}}))}},actions:{getDataDashboard:function(t,a){X.dispatch("updateLoading",!0),L(a).then((function(a){200===a.status?(t.commit("updateDataPaket",a.data),t.commit("updateDataProgressPaket",a.data),t.commit("updateDataBonusFasilitas",a.data),t.commit("updateDataPaketSoal",a.data.paket[0].subpaket.paket_soal),X.dispatch("updateLoading",!1)):X.dispatch("updateLoading",!1)})).catch((function(){X.dispatch("updateLoading",!1)}))},getDataPaketSoal:function(t,a){X.dispatch("updateLoading",!0),w(a).then((function(a){200===a.status?(t.commit("updateDataPaketSoal",a.data[0]),X.dispatch("updateLoading",!1)):X.dispatch("updateLoading",!1)})).catch((function(){X.dispatch("updateLoading",!1)}))}}},D=S,_=e("2d16"),j=(e("4160"),e("159b"),e("96cf"),e("1da1")),y=e("3f4f"),N="suksesutbk",O=1;function x(t,a,e){return E.apply(this,arguments)}function E(){return E=Object(j["a"])(regeneratorRuntime.mark((function t(a,e,n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["a"])(N,O,{upgrade:function(t,i,o,u){function d(){t.createObjectStore(e,n),a.forEach((function(t){u.objectStore(e).add(t)}))}0===i&&d()}});case 2:i=t.sent,i.close();case 4:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}function A(t){return B.apply(this,arguments)}function B(){return B=Object(j["a"])(regeneratorRuntime.mark((function t(a){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["a"])(N,O);case 2:return e=t.sent,t.abrupt("return",e.getAll(a));case 4:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}var I={namespaced:!0,state:{dataPtn:[],dataPilihanPtn:[],dataProdi:[],loading:!1},mutations:{updateDataPtn:function(t,a){t.dataPtn=a.map((function(t){return{text:t.universitas,value:t.universitas}}))},updateDataProdi:function(t,a){t.dataProdi=a},updateDataPilihanPtn:function(t,a){t.dataPilihanPtn=a},updateLoading:function(t,a){t.loading=a}},actions:{getDataProdi:function(t,a){t.commit("updateLoading",!0),Object(_["b"])(a).then((function(a){200==a.status?(t.commit("updateDataProdi",a.data),t.commit("updateLoading",!1)):t.commit("updateLoading",!1)})).catch((function(){return t.commit("updateLoading",!1)}))},getDataPtn:function(t,a){t.commit("updateLoading",!0),Object(_["c"])(a).then((function(a){200==a.status?(t.commit("updateDataPtn",a.data),t.commit("updateLoading",!1)):t.commit("updateLoading",!1)})).catch((function(){return t.commit("updateLoading",!1)}))},cekPilihanPtn:function(t,a){t.commit("updateLoading",!0),Object(_["a"])(a).then((function(a){200==a.status?(t.commit("updateDataPilihanPtn",a.data.data),t.commit("updateLoading",!1)):t.commit("updateLoading",!1)})).catch((function(){return t.commit("updateLoading",!1)}))},addPilihanPtn:function(t,a){x(a,"pilihan_ptn",{autoIncrement:!0})},getDataPilihanPtn:function(t){A("pilihan_ptn").then((function(a){t.commit("updateDataPilihanPtn",a)}))}}},U=I;function C(){return h["a"].get("cari/provinsi")}function K(t){return h["a"].get("cari/kabupaten/?provinsi="+t)}function T(t){return h["a"].get("cari/sekolah/?provinsi="+t.provinsi+"&kabupaten="+t.kabupaten)}function q(t,a){return h["a"].post("peserta/"+t,a)}var R={namespaced:!0,state:{dataProv:[],dataKab:[],dataBiodata:{},loading:!1,dataSekolah:[]},mutations:{updateDataProv:function(t,a){t.dataProv=a.map((function(t){return{text:t,value:t}}))},updateDataKab:function(t,a){t.dataKab=a.map((function(t){return{text:t,value:t}}))},updateDataBiodata:function(t,a){t.dataBiodata=a},updateDataSekolah:function(t,a){t.dataSekolah=a},updateLoading:function(t,a){t.loading=a}},actions:{getDataProv:function(t){t.commit("updateLoading",!0),C().then((function(a){200===a.status?(t.commit("updateDataProv",a.data.data),t.commit("updateLoading",!1)):t.commit("updateLoading",!1)})).catch((function(){t.commit("updateLoading",!1)}))},getDataKab:function(t,a){t.commit("updateLoading",!0),K(a).then((function(a){200===a.status?(t.commit("updateDataKab",a.data.data),t.commit("updateLoading",!1)):t.commit("updateLoading",!1)})).catch((function(){t.commit("updateLoading",!1)}))},getDataSekolah:function(t,a){t.commit("updateLoading",!0),T(a).then((function(a){200===a.status?(t.commit("updateDataSekolah",a.data.data),t.commit("updateLoading",!1)):t.commit("updateLoading",!1)})).catch((function(){t.commit("updateLoading",!1)}))},postDataBiodata:function(t,a){X.dispatch("updateLoading",!0);var e=JSON.parse(window.localStorage.getItem("dataPeserta"));q(e.id,a).then((function(a){console.log(a),200===a.status?(t.commit("updateDataBiodata",a.data.data),window.localStorage.setItem("dataPeserta",JSON.stringify(a.data.data)),X.dispatch("updateLoading",!1),X.dispatch("updateNotif",{visible:!0,status:!0,msg:"Data berhasil disimpan"}),window.history.go(-1)):(X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Data gagal disimpan"}),X.dispatch("updateLoading",!1))})).catch((function(){X.dispatch("updateNotif",{visible:!0,status:!1,msg:"Data gagal disimpan"}),X.dispatch("updateLoading",!1)}))}}},F=R,J=e("bc3a"),M=e.n(J),H=M.a.create({baseURL:"https://app.suksesutbk.com/api/v2/",headers:{Authorization:"Bearer "+window.localStorage.getItem("token")}}),z=H;function V(t){return z.post("ujian/start",t)}function $(t){return z.get("ujian/soal?idu="+t.id_ujian+"&idm="+t.id_materi_uji)}var G={namespaced:!0,state:{dataUjian:[],loading:!1},mutations:{updateDataUjian:function(t,a){t.dataUjian=a}},actions:{postDataUjian:function(t,a){X.dispatch("updateLoading",!0),V(a).then((function(e){if(201==e.status){t.commit("updateDataUjian",e.data.data);var n=e.data.data;$({id_ujian:n.id,id_materi_uji:a.materiuji_id}).then((function(t){200==t.status?(X.dispatch("updateNotif",{status:!0,visible:!1,msg:""}),X.dispatch("updateLoading",!1)):(X.dispatch("updateNotif",{status:!1,visible:!1,msg:""}),X.dispatch("updateLoading",!1))})).catch((function(){X.dispatch("updateNotif",{status:!1,visible:!1,msg:""}),X.dispatch("updateLoading",!1)}))}else X.dispatch("updateNotif",{status:!1,visible:!1,msg:""}),X.dispatch("updateLoading",!1)})).catch((function(){X.dispatch("updateNotif",{status:!1,visible:!1,msg:""}),X.dispatch("updateLoading",!1)}))}}},Q=G;n["a"].use(l["a"]);var W=new l["a"].Store({state:{notif:{visible:!1,status:null,msg:""},loading:!1},mutations:{updateNotif:function(t,a){t.notif.visible=a.visible,t.notif.status=a.status,t.notif.msg=a.msg},updateLoading:function(t,a){t.loading=a}},getters:{getNotif:function(t){return t.notif},getLoading:function(t){return t.loading}},actions:{updateNotif:function(t,a){t.commit("updateNotif",a)},updateLoading:function(t,a){t.commit("updateLoading",a)}},modules:{dataSoal:Q,dataBiodata:F,dataPtn:U,dataDashboard:D,dataAuth:P}}),X=W,Y=e("7bb1");n["a"].component("ValidationProvider",Y["b"]),n["a"].component("ValidationObserver",Y["a"]),n["a"].config.productionTip=!1,new n["a"]({router:m,store:X,render:function(t){return t(c)}}).$mount("#app")},"75f8":function(t,a,e){},df3d:function(t,a,e){"use strict";var n=e("75f8"),i=e.n(n);i.a},e0bc:function(t,a,e){"use strict";var n=e("bc3a"),i=e.n(n),o=i.a.create({baseURL:"https://app.suksesutbk.com/api/v1/",headers:{Authorization:"Bearer "+window.localStorage.getItem("token")}});a["a"]=o}});
//# sourceMappingURL=app.0a4a92f0.js.map