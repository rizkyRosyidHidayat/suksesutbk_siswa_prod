(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6d3df2a"],{"0bc8":function(t,a,e){t.exports=e.p+"img/logo_white.3a4c1b72.png"},"3cc0":function(t,a,e){},"48d7":function(t,a,e){"use strict";var s=e("3cc0"),r=e.n(s);r.a},"4be1":function(t,a,e){"use strict";var s=e("8711"),r=e.n(s);r.a},7712:function(t,a,e){t.exports=e.p+"img/chevron_right.d534f45a.svg"},8711:function(t,a,e){},"8b1b":function(t,a,e){t.exports=e.p+"img/close.06dbed19.svg"},"979c":function(t,a,e){},"9b7c":function(t,a,e){t.exports=e.p+"img/chevron_left.f0578c4f.svg"},a0cf:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex content-between h-screen flex-wrap"},[e("Navbar",{staticClass:"w-full flex-shrink-0",attrs:{submateri:t.submateri}}),e("div",{staticClass:"w-full flex-shrink-0 body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"font-bold mb-4"},[t._v("Soal Nomor "+t._s(t.number+1))]),e("div",{staticClass:"break-words show-soal",domProps:{innerHTML:t._s(t.soal[t.number].pertanyaan)}}),e("div",{staticClass:"max-w-full sm:max-w-sm mt-6"},t._l(t.soal[t.number].jawaban,(function(a){return e("div",{key:a.huruf,staticClass:"mb-4"},[e("label",{attrs:{for:a.huruf}},[e("div",{staticClass:"card border shadow cursor-pointer transition duration-100",class:{active:t.jawabanTerpilih(a.huruf)}},[e("div",{staticClass:"card-body py-2 px-3 flex"},[e("div",{staticClass:"mr-1"},[t._v(t._s(a.huruf)+".")]),e("div",{staticClass:"break-words show-soal",domProps:{innerHTML:t._s(a.teks)}})])])])])})),0),e("h1",{staticClass:"font-bold my-4"},[t._v("Kunci Jawaban "+t._s(t.kunciJawaban(t.soal[t.number].jawaban)))]),e("div",{staticClass:"break-words show-soal",domProps:{innerHTML:t._s(t.soal[t.number].pembahasan)}})])]),e("PageNumber",{staticClass:"w-full flex-shrink-0",attrs:{soal:t.soal,number:t.number},on:{"update:number":function(a){t.number=a}}})],1)},r=[],n=(e("4de4"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",[s("img",{staticClass:"h-10 hidden sm:block",attrs:{src:e("0bc8"),alt:"logo"}}),s("div",[s("h1",{staticClass:"text-xl font-bold"},[t._v(t._s(t.submateri))])]),s("div",{staticClass:"btn-icon",on:{click:function(a){return t.$router.go(-1)}}},[s("img",{attrs:{src:e("8b1b"),alt:"icons",width:"30px"}})])])}),i=[],o={props:["submateri"],data:function(){return{time:{h:0,m:0,s:0},updateSubmateri:"",dataDurasi:[],visible:!1,dataSoal:[],namaSubmateri:""}}},c=o,u=(e("a5c2"),e("2877")),l=Object(u["a"])(c,n,i,!1,null,"0f63e81e",null),b=l.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",[t.number>0?s("div",{staticClass:"btn-primary rounded-none flex items-center order-2 sm:order-1",on:{click:function(a){return t.$emit("update:number",t.number-1)}}},[s("img",{staticClass:"-ml-3",attrs:{src:e("9b7c"),alt:"icon",width:"30"}}),t._v(" SEBELUMNYA ")]):t._e(),s("div",{staticClass:"page-number order-1 sm:order-2",class:{"xl:justify-center":t.soal.length<=20}},t._l(t.soal.length,(function(a){return s("input",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{left:["arrowleft"],right:["arrowright"]},expression:"{left: ['arrowleft'], right: ['arrowright']}"}],key:a,staticClass:"btn-page-number",class:{active:t.isPageEmpty(a-1)},attrs:{type:"button",value:a},on:{shortkey:function(a){return t.changeNumber(a)},click:function(e){return t.changeNumberClick(a-1)}}})})),0),t.number<t.soal.length-1?s("div",{staticClass:"order-3 btn-primary rounded-none flex items-center bg-orange-500",on:{click:function(a){return t.$emit("update:number",t.number+1)}}},[t._v(" SELANJUTNYA "),s("img",{staticClass:"-mr-3",attrs:{src:e("7712"),alt:"icon",width:"30"}})]):t._e()])},d=[],f={props:["soal","number"],methods:{changeNumber:function(t){var a=this.number;switch(t.srcKey){case"left":a>0&&this.$emit("update:number",a-1);break;case"right":a<this.soal.length-1&&this.$emit("update:number",a+1);break;default:break}},changeNumberClick:function(t){this.$emit("update:number",t)},isPageEmpty:function(t){return void 0!==this.soal[t].jawaban_peserta&&null!==this.soal[t].jawaban_peserta&&""!==this.soal[t].jawaban_peserta||this.number==t}}},h=f,p=(e("48d7"),Object(u["a"])(h,m,d,!1,null,"c2b397dc",null)),v=p.exports,w={components:{PageNumber:v,Navbar:b},data:function(){return{soal:{},submateri:"",number:0}},methods:{jawabanTerpilih:function(t){return this.soal[this.number].jawaban_peserta==t},kunciJawaban:function(t){return t.filter((function(t){return t.kunci}))[0].huruf}},created:function(){this.soal=JSON.parse(localStorage.pembahasan_soal).soal,this.submateri=JSON.parse(localStorage.pembahasan_soal).submateri}},g=w,_=(e("4be1"),Object(u["a"])(g,s,r,!1,null,"080b4b08",null));a["default"]=_.exports},a5c2:function(t,a,e){"use strict";var s=e("979c"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-d6d3df2a.f61caa80.js.map