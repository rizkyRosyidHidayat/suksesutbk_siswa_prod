(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d8d7cea"],{"9c49":function(t,a,i){"use strict";var e=i("b801"),s=i.n(e);s.a},b801:function(t,a,i){},ca08:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"riwayat overflow-hidden"},[i("FixedNavbar"),i("div",{staticClass:"mt-32 mb-24 container"},[i("p",{staticClass:"text-white font-bold text-4xl tracking-widest mb-16"},[t._v(" Riwayat Transaksi ")]),t.$store.getters.getLoading?i("div",{staticClass:"animate-pulse h-4 w-full bg-gray-400 rounded"}):i("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-4"},[i("div",{staticClass:"md:col-span-1"},[i("div",{staticClass:"card"},[i("div",{staticClass:"px-4 mt-2"},[t._v(" Status Transaksi ")]),i("ul",{staticClass:"my-2 menu-riwayat"},t._l(t.menu,(function(a,e){return i("li",{key:e,on:{click:function(i){t.selected=a}}},[t._v(" "+t._s(a.text)+" ")])})),0)])]),i("div",{staticClass:"md:col-span-2"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body bg-orange-400 text-white font-bold text-lg"},[t._v(t._s(t.selected.text))]),i("ul",{staticClass:"my-2 divide-y"},[0==t.filterData.length?i("li",[t._v("Data tidak tersedia")]):t._l(t.filterData,(function(t,a){return i("li",{key:a},[i("Invoice",{attrs:{item:t}})],1)}))],2)])])])]),i("Footer")],1)},s=[],n=(i("4de4"),i("ea75")),r=i("0462"),c=i("fd2d"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{visible:t.visible},scopedSlots:t._u([{key:"activator",fn:function(){return[e("div",{staticClass:"flex justify-between items-center cursor-pointer",on:{click:function(a){t.visible=!0}}},[e("div",[e("div",[t._v(t._s(t.item.nama_paket))])]),e("div",{staticClass:"text-red-500 font-bold"},[t._v(" "+t._s(Intl.NumberFormat("id-ID",{maximumSignificantDigits:4,style:"currency",currency:"IDR"}).format(t.item.biaya))+" ")])])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"container md:w-2/3 lg:w-1/2"},[e("div",{staticClass:"card grid grid-cols-1 divide-x"},[e("div",[e("div",{staticClass:"card-body flex items-center bg-teal-500"},[1==t.item.status?e("span",{staticClass:"font-bold text-white text-lg ml-3"},[t._v("Transaksi Berhasil")]):e("span",{staticClass:"font-bold text-white text-lg ml-3"},[t._v("Menunggu Pembayaran")]),e("div",{staticClass:"btn-icon ml-auto",on:{click:function(a){t.visible=!1}}},[e("img",{attrs:{src:i("8b1b"),alt:"icons",width:"20px"}})])]),e("div",{staticClass:"card-body px-0 py-3 divide-y"},[e("div",{staticClass:"grid grid-cols-2 px-6 py-3"},[e("div",[e("div",[t._v(t._s(t.item.nama_paket))]),e("div",{staticClass:"font-bold text-gray-700"},[t._v(t._s(t.item.order_id))])]),e("div",[e("div",[t._v("Total Pembayaran")]),e("div",{staticClass:"font-bold text-orange-500"},[t._v(" "+t._s(Intl.NumberFormat("id-ID",{maximumSignificantDigits:4,style:"currency",currency:"IDR"}).format(t.item.biaya))+" ")])])]),e("div",{staticClass:"grid grid-cols-2 px-6 py-3"},[e("div",[e("div",[t._v("Metode Pembayaran")]),e("div",{staticClass:"font-bold text-gray-700"},[t._v(t._s(t.item.payment_type))])]),e("div",[e("div",[t._v("Batas Waktu Pembayaran")]),e("div",{staticClass:"font-bold text-red-500"},[t._v(" "+t._s(t.time.h)+" Jam : "+t._s(t.time.m)+" Menit : "+t._s(t.time.s)+" Detik ")])])]),e("div",{staticClass:"grid grid-cols-2 px-6 py-3 items-center"},[e("div",[t._v("Selesaikan pembayaran")]),1==t.item.status?e("div",[e("button",{staticClass:"btn-primary bg-green-500"},[t._v(" Transaksi Berhasil ")])]):e("div",[t.expired?e("button",{staticClass:"btn-primary bg-red-500"},[t._v(" Waktu Habis ")]):e("button",{staticClass:"btn-primary",on:{click:function(a){return t.pesan(t.item.snap_token)}}},[t._v(" Bayar Paket ")])])])])])])])]},proxy:!0}])})},o=[],l=i("c1df"),u=i.n(l),m=i("714b"),v={props:["item"],components:{Modal:m["a"]},data:function(){return{visible:!1,actualTime:u()().format("X"),time:{h:0,m:0,s:0},expired:!1}},computed:{formatDurasi:function(){return u()(this.item.batas_waktu).format("X")}},methods:{getDiffInSeconds:function(){return this.formatDurasi-this.actualTime},compute:function(){var t=u.a.duration(this.getDiffInSeconds(),"seconds");t>=0?(this.time.h=t.hours()<10?"0"+t.hours():t.hours(),this.time.m=t.minutes()<10?"0"+t.minutes():t.minutes(),this.time.s=t.seconds()<10?"0"+t.seconds():t.seconds()):this.expired=!0},addOneSecondToActualTimeEverySecond:function(){var t=this;t.actualTime=u()().format("X"),setTimeout((function(){t.getDiffInSeconds(),t.compute(),t.addOneSecondToActualTimeEverySecond()}),1e3)},pesan:function(t){window.open("https://app.midtrans.com/snap/v2/vtweb/"+t,"_blank")}},mounted:function(){this.compute(),this.addOneSecondToActualTimeEverySecond()}},f=v,p=i("2877"),b=Object(p["a"])(f,d,o,!1,null,null,null),g=b.exports,y={components:{Invoice:g,Footer:c["a"],FixedNavbar:r["a"]},data:function(){return{data:[],filterData:[],menu:[{text:"Menunggu Pembayaran",status:0},{text:"Transaksi Berhasil",status:1}],selected:{text:"Menunggu Pembayaran",status:0}}},created:function(){var t=this;this.$store.dispatch("updateLoading",!0),Object(n["b"])({peserta_id:JSON.parse(window.localStorage.getItem("dataPeserta")).id}).then((function(a){200==a.status&&(t.data=a.data.data),t.$store.dispatch("updateLoading",!1)})).catch((function(){t.$store.dispatch("updateLoading",!1)}))},watch:{data:function(t){var a=this;this.filterData=t.filter((function(t){return t.status==a.selected.status}))},selected:function(t){this.filterData=this.data.filter((function(a){return a.status==t.status}))}}},_=y,h=(i("9c49"),Object(p["a"])(_,e,s,!1,null,"403d7546",null));a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d8d7cea.195c4fad.js.map