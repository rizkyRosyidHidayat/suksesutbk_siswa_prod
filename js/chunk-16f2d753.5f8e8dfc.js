(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f2d753"],{1251:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"paket overflow-hidden"},[e("FixedNavbar"),e("div",{staticClass:"mt-32 mb-24 px-4 w-full md:w-2/3 block mx-auto"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"},a._l(a.dataPaket,(function(t,i){return e("div",{key:t.id_paket,staticClass:"card"},[e("div",{staticClass:"card-body",class:a.color[i]},[e("h1",{staticClass:"text-xl font-bold text-gray-700 tracking-wider"},[a._v(a._s(t.subpaket))])]),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"divide-y"},a._l(a.benefit[a.nama_paket],(function(t){return e("li",{key:t,staticClass:"py-2"},[a._v(a._s(t))])})),0)]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"btn-primary",class:a.btncolor[i],on:{click:function(e){return a.pesan(t.id_subpaket)}}},[e("Spinner",[a._v(" PESAN SEKARANG ")])],1)])])})),0),e("Notif")],1),e("Footer")],1)},s=[],n=e("5530"),r=e("2f62"),o=e("ea75"),d=e("0462"),c=e("fd2d"),l=e("6959"),p=e("2375"),u={props:["nama_paket"],components:{Spinner:p["a"],Notif:l["a"],Footer:c["a"],FixedNavbar:d["a"]},data:function(){return{isSubmit:!1,color:["bg-orange-300","bg-blue-300"],btncolor:["bg-orange-500","bg-blue-500"],benefit:{"SUKSES-1":["2X TryOut","Penilaian sistem IRT","Materi Uji Standar LTMPT","Peringkat Nasional","Rekomendasi PTN/Prodi","Assessment Report Lengkap","Rasionalisasi UTBK 2021","Review & Pembahasan Soal","Target & Pencapaian Nilai","Statistik Progress TryOut","Bank Soal Lengkap"],"SUKSES-2":["3X TryOut","Penilaian sistem IRT","Materi Uji Standar LTMPT","Peringkat Nasional","Rekomendasi PTN/Prodi","Assessment Report Lengkap","Rasionalisasi UTBK 2021","Review & Pembahasan Soal","Target & Pencapaian Nilai","Statistik Progress TryOut","Bank Soal Lengkap"],"SUKSES-3":["4X TryOut","Penilaian sistem IRT","Materi Uji Standar LTMPT","Peringkat Nasional","Rekomendasi PTN/Prodi","Assessment Report Lengkap","Rasionalisasi UTBK 2021","Review & Pembahasan Soal","Target & Pencapaian Nilai","Statistik Progress TryOut","Bank Soal Lengkap"]}}},computed:Object(n["a"])({},Object(r["b"])("dataPaket",["dataPaket"])),created:function(){this.$store.dispatch("dataPaket/getDataPaket",this.nama_paket)},methods:{pesan:function(a){var t=this;this.$store.dispatch("updateLoading",!0),Object(o["a"])({user_id:JSON.parse(localStorage.dataPeserta).id,item_id:a}).then((function(a){if(200==a.status){var e=a.data.token;window.open("https://app.midtrans.com/snap/v2/vtweb/"+e,"_self"),t.$store.dispatch("updateLoading",!1)}else t.$store.dispatch("updateNotif",{visible:!0,status:!1,msg:"Transaksi gagal"}),t.$store.dispatch("updateLoading",!1)})).catch((function(){t.$store.dispatch("updateNotif",{visible:!0,status:!1,msg:"Transaksi gagal"}),t.$store.dispatch("updateLoading",!1)}))}}},k=u,b=(e("308f"),e("2877")),g=Object(b["a"])(k,i,s,!1,null,"58719e3e",null);t["default"]=g.exports},"308f":function(a,t,e){"use strict";var i=e("a480"),s=e.n(i);s.a},a480:function(a,t,e){},ea75:function(a,t,e){"use strict";e.d(t,"a",(function(){return n})),e.d(t,"b",(function(){return r}));var i=e("e0bc"),s=e("dfb4");function n(a){return s["a"].post("payment/create-token",a)}function r(a){return i["a"].post("payment",a)}}}]);
//# sourceMappingURL=chunk-16f2d753.5f8e8dfc.js.map