(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6c3139"],{"0c19":function(t,e,a){},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2451:function(t,e,a){},2532:function(t,e,a){"use strict";var n=a("23e7"),s=a("5a34"),i=a("1d80"),r=a("ab13");n({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(i(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"3a60":function(t,e,a){(function(e,a){t.exports=a()})(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,a){"use strict";function n(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var s=a(2),i=a(0),r=a.n(i);e.a=function(t,e){var i=e.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:r.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var o=t.getElementsByTagName("input");if(1!==o.length)throw new Error("v-mask directive requires 1 input, found "+o.length);t=o[0]}t.oninput=function(e){if(e.isTrusted){var r=t.selectionEnd,o=t.value[r-1];for(t.value=a.i(s.a)(t.value,i.mask,!0,i.tokens);r<t.value.length&&t.value.charAt(r-1)!==o;)r++;t===document.activeElement&&(t.setSelectionRange(r,r),setTimeout((function(){t.setSelectionRange(r,r)}),0)),t.dispatchEvent(n("input"))}};var l=a.i(s.a)(t.value,i.mask,!0,i.tokens);l!==t.value&&(t.value=l,t.dispatchEvent(n("input")))}},function(t,e,a){"use strict";var n=a(6),s=a(5);e.a=function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];return Array.isArray(e)?a.i(s.a)(n.a,e,r)(t,e,i,r):a.i(n.a)(t,e,i,r)}},function(t,e,a){"use strict";function n(t){t.component(l.a.name,l.a),t.directive("mask",r.a)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(0),i=a.n(s),r=a(1),o=a(7),l=a.n(o);a.d(e,"TheMask",(function(){return l.a})),a.d(e,"mask",(function(){return r.a})),a.d(e,"tokens",(function(){return i.a})),a.d(e,"version",(function(){return u}));var u="0.11.1";e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),s=a(0),i=a.n(s),r=a(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=a.i(r.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,a){"use strict";function n(t,e,a){return e=e.sort((function(t,e){return t.length-e.length})),function(n,s){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=0;r<e.length;){var o=e[r];r++;var l=e[r];if(!(l&&t(n,l,!0,a).length>o.length))return t(n,o,i,a)}return""}}e.a=n},function(t,e,a){"use strict";function n(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];t=t||"",e=e||"";for(var s=0,i=0,r="";s<e.length&&i<t.length;){var o=e[s],l=n[o],u=t[i];l&&!l.escape?(l.pattern.test(u)&&(r+=l.transform?l.transform(u):u,s++),i++):(l&&l.escape&&(s++,o=e[s]),a&&(r+=o),u===o&&i++,s++)}for(var d="";s<e.length&&a;){o=e[s];if(n[o]){d="";break}d+=o,s++}return r+d}e.a=n},function(t,e,a){var n=a(8)(a(4),a(9),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,a,n){var s,i=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var l=o.computed||(o.computed={});Object.keys(n).forEach((function(t){var e=n[t];l[t]=function(){return e}}))}return{esModule:s,exports:i,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,a){t.exports=a(3)}])}))},"3d50":function(t,e,a){"use strict";var n=a("0c19"),s=a.n(n);s.a},"44e7":function(t,e,a){var n=a("861d"),s=a("c6b6"),i=a("b622"),r=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6e36":function(t,e,a){"use strict";var n=a("e240"),s=a.n(n);s.a},"841c":function(t,e,a){"use strict";var n=a("d784"),s=a("825a"),i=a("1d80"),r=a("129f"),o=a("14c3");n("search",1,(function(t,e,a){return[function(e){var a=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var i=s(t),l=String(this),u=i.lastIndex;r(u,0)||(i.lastIndex=0);var d=o(i,l);return r(i.lastIndex,u)||(i.lastIndex=u),null===d?-1:d.index}]}))},ab13:function(t,e,a){var n=a("b622"),s=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,"/./"[t](e)}catch(n){}}return!1}},bb0b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{on:{click:function(e){t.visible=!0}}},[n("div",{staticClass:"flex"},[n("input",{staticClass:"text-field rounded-tr-none rounded-br-none cursor-pointer",attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.selectedValue}}),t._m(0)])]),t.visible?n("div",{staticClass:"option-menu z-10",class:t.position},[n("div",{staticClass:"flex px-2 mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"text-field rounded-tr-none rounded-br-none",attrs:{type:"search",placeholder:"Cari data"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("div",{staticClass:"text-field-icon bg-teal-500 border-l-0 rounded-tl-none rounded-bl-none",on:{click:function(e){return t.$emit("dataSearching",t.search)}}},[n("img",{attrs:{src:a("d103"),alt:"icon",width:"25px"}})])]),n("ul",{staticStyle:{"max-height":"200px",overflow:"auto"}},[t.loading?n("li",[n("svg",{staticClass:"animate-spin text-teal-300 mx-auto",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none"}},[n("circle",{staticClass:"opacity-50",attrs:{cx:"12px",cy:"12px",r:"10",stroke:"currentColor","stroke-width":"4"}}),n("path",{attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])]):t._l(t.dataSearch,(function(e,a){return n("li",{key:a,on:{click:function(a){return t.selected(e)}}},[t._v(" "+t._s(e[t.item.text])+" ")])}))],2)]):t._e()])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-field-icon border-l-0 rounded-tl-none rounded-bl-none"},[n("img",{attrs:{src:a("1ad2"),alt:"icon",width:"25px"}})])}],i=(a("4de4"),a("caad"),a("ac1f"),a("2532"),a("841c"),{props:["items","returnObject","loading","item","placeholder","position","selectedValue"],model:{props:"value",event:"input"},data:function(){return{visible:!1,search:"",text:"",value:"",data:[]}},watch:{value:function(t){this.$emit("input",t)}},computed:{dataSearch:{get:function(){var t=this;return this.items.filter((function(e){return e[t.item.text].toLowerCase().includes(t.search)}))}}},methods:{handleClickOutside:function(t){this.$el.contains(t.target)||(this.visible=!1)},selected:function(t){this.$emit("update:selected-value",t[this.item.text]),this.returnObject?this.value=t:this.value=t[this.item.value],this.visible=!1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}}),r=i,o=(a("6e36"),a("2877")),l=Object(o["a"])(r,n,s,!1,null,"733ec558",null);e["a"]=l.exports},bb63:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("div",{on:{click:function(e){t.visible=!0}}},[a("div",{staticClass:"flex"},[a("input",{staticClass:"text-field rounded-tr-none rounded-br-none cursor-pointer",attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.selectedValue}}),t._m(0)])]),t.visible?a("ul",{staticClass:"option-menu z-10"},t._l(t.items,(function(e,n){return a("li",{key:n,staticClass:"text-gray-800",on:{click:function(a){return t.selected(e)}}},[t._v(" "+t._s(e[t.item.text])+" ")])})),0):t._e()])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-field-icon border-l-0 rounded-tl-none rounded-bl-none bg-white"},[n("img",{attrs:{src:a("1ad2"),alt:"icon",width:"25px"}})])}],i={props:["items","return-object","placeholder","item","selected-value"],model:{prop:"value",event:"input"},data:function(){return{visible:!1,text:"",value:""}},watch:{value:function(t){this.$emit("input",t)}},methods:{handleClickOutside:function(t){this.$el.contains(t.target)||(this.visible=!1)},selected:function(t){this.$emit("update:selected-value",t[this.item.text]),this.value=t[this.item.value],this.visible=!1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},r=i,o=(a("d90a"),a("2877")),l=Object(o["a"])(r,n,s,!1,null,"53950712",null);e["a"]=l.exports},bba1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biodata overflow-hidden"},[a("FixedNavbar",{attrs:{id:"fixedHeader"}}),a("section",{staticClass:"px-4 w-full md:w-1/2 block mx-auto mb-24"},[a("p",{staticClass:"mt-32 text-white font-bold text-4xl tracking-widest mb-16"},[t._v(" Biodata Siswa ")]),a("div",{staticClass:"card overflow-visible"},[a("div",{staticClass:"card-body"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"w-full text-2xl font-bold text-gray-700 mb-4 ml-3"},[t._v(" Data Pribadi ")]),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Nama Lengkap ")]),a("div",{staticClass:"px-3 w-full md:w-3/4 mb-4"},[a("ValidationProvider",{attrs:{name:"nama",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.nama_lengkap,expression:"data.nama_lengkap"}],staticClass:"text-field",attrs:{type:"text",placeholder:"Nama Lengkap"},domProps:{value:t.data.nama_lengkap},on:{input:function(e){e.target.composing||t.$set(t.data,"nama_lengkap",e.target.value)}}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" E-mail ")]),a("div",{staticClass:"px-3 w-full md:w-3/4 mb-4"},[a("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"text-field",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Nomor Handphone ")]),a("div",{staticClass:"px-3 w-full sm:w-3/4 md:w-1/4 mb-4"},[a("ValidationProvider",{attrs:{name:"nohp",rules:"required|nohp"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.nohp,expression:"data.nohp"},{name:"mask",rawName:"v-mask",value:"#############",expression:"'#############'"}],staticClass:"text-field",attrs:{type:"text",placeholder:"No. HP (sebagai username)"},domProps:{value:t.data.nohp},on:{input:function(e){e.target.composing||t.$set(t.data,"nohp",e.target.value)}}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Nomor Whatsapp ")]),a("div",{staticClass:"px-3 w-full sm:w-3/4 md:w-1/4 mb-4"},[a("ValidationProvider",{attrs:{name:"nohp",rules:"nohp"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.nohp_wa,expression:"data.nohp_wa"},{name:"mask",rawName:"v-mask",value:"#############",expression:"'#############'"}],staticClass:"text-field",attrs:{type:"text",placeholder:"No. Whatsapp"},domProps:{value:t.data.nohp_wa},on:{input:function(e){e.target.composing||t.$set(t.data,"nohp_wa",e.target.value)}}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Facebook ")]),a("div",{staticClass:"px-3 w-full sm:w-3/4 md:w-1/4 mb-4"},[a("ValidationProvider",{attrs:{name:"fb"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.sosmed_fb,expression:"data.sosmed_fb"}],staticClass:"text-field",attrs:{type:"text",placeholder:"Facebook"},domProps:{value:t.data.sosmed_fb},on:{input:function(e){e.target.composing||t.$set(t.data,"sosmed_fb",e.target.value)}}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Instagram ")]),a("div",{staticClass:"px-3 w-full sm:w-3/4 md:w-1/4 mb-4"},[a("ValidationProvider",{attrs:{name:"ig"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.sosmed_ig,expression:"data.sosmed_ig"}],staticClass:"text-field",attrs:{type:"text",placeholder:"Instagram"},domProps:{value:t.data.sosmed_ig},on:{input:function(e){e.target.composing||t.$set(t.data,"sosmed_ig",e.target.value)}}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"mb-4 h-px w-full bg-gray-400"}),a("div",{staticClass:"w-full text-2xl font-bold text-gray-700 mb-4 ml-3"},[t._v(" Data Asal Sekolah ")]),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Provinsi ")]),a("div",{staticClass:"px-3 w-full md:w-3/4 mb-4"},[a("Autocomplete",{attrs:{items:t.dataProv,item:{text:"text",value:"value"},"selected-value":t.provinsi,loading:t.loading,placeholder:"Pilih Provinsi",position:"top"},on:{"update:selectedValue":function(e){t.provinsi=e},"update:selected-value":function(e){t.provinsi=e}},model:{value:t.provinsi,callback:function(e){t.provinsi=e},expression:"provinsi"}})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Kabupaten ")]),a("div",{staticClass:"px-3 w-full md:w-3/4 mb-4"},[a("Autocomplete",{attrs:{items:t.dataKab,item:{text:"text",value:"value"},"selected-value":t.kabupaten,loading:t.loading,placeholder:"Pilih Kabupaten",position:"bottom"},on:{"update:selectedValue":function(e){t.kabupaten=e},"update:selected-value":function(e){t.kabupaten=e}},model:{value:t.kabupaten,callback:function(e){t.kabupaten=e},expression:"kabupaten"}})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Sekolah ")]),a("div",{staticClass:"px-3 w-full md:w-3/4 mb-4"},[a("ValidationProvider",{attrs:{name:"sekolah",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("Autocomplete",{attrs:{items:t.dataSekolah,item:{text:"nama",value:"id"},"selected-value":t.sekolah,loading:t.loading,placeholder:"Pilih Sekolah",position:"bottom"},on:{"update:selectedValue":function(e){t.sekolah=e},"update:selected-value":function(e){t.sekolah=e}},model:{value:t.data.id_sekolah,callback:function(e){t.$set(t.data,"id_sekolah",e)},expression:"data.id_sekolah"}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"px-3 w-full md:w-1/4 mb-4"},[t._v(" Tahun Kelulusan ")]),a("div",{staticClass:"px-3 w-full md:w-3/4 mb-4"},[a("div",{staticClass:"w-full md:w-2/6"},[a("ValidationProvider",{attrs:{name:"tahun_lulus",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("Option",{attrs:{items:t.tahunLulus,item:{text:"text",value:"value"},"selected-value":t.tahun_lulus,placeholder:"Pilih Tahun"},on:{"update:selectedValue":function(e){t.tahun_lulus=e},"update:selected-value":function(e){t.tahun_lulus=e}},model:{value:t.data.tahun_kelulusan,callback:function(e){t.$set(t.data,"tahun_kelulusan",e)},expression:"data.tahun_kelulusan"}}),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"px-3 hidden md:block w-1/4 mb-4"}),a("div",{staticClass:"px-3 w-full md:w-3/4 mb-4"},[a("ValidationProvider",{attrs:{name:"checkbox",rules:{required:{allowFalse:!1}}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("div",{staticClass:"flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkbox,expression:"checkbox"}],staticClass:"mr-3 mt-1",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checkbox)?t._i(t.checkbox,null)>-1:t.checkbox},on:{change:function(e){var a=t.checkbox,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.checkbox=a.concat([i])):r>-1&&(t.checkbox=a.slice(0,r).concat(a.slice(r+1)))}else t.checkbox=s}}}),a("div",[t._v(" Saya menyetujui "),a("a",{staticClass:"underline text-orange-600",attrs:{href:"#"}},[t._v("Kebijakan Privasi")]),t._v(" serta syarat dan "),a("a",{staticClass:"underline text-orange-600",attrs:{href:"#"}},[t._v("Ketentuan")]),t._v(" oleh Tim Edubrand ")])]),a("p",{staticClass:"field-message"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),a("Notif",{staticClass:"mb-4"}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn-primary",attrs:{disabled:n,type:"submit"}},[a("Spinner",[t._v(" SIMPAN ")])],1)])],1)]}}])})],1)])]),a("Footer")],1)},s=[],i=a("5530"),r=a("0462"),o=a("fd2d"),l=a("7bb1"),u=a("4c93"),d=a("3a60"),c=a("2f62"),p=a("6959"),v=a("2375"),m=a("bb0b"),f=a("bb63");Object(l["c"])("nohp",{validate:function(t){return t.length>10},message:"No Hp harus kurang dari 11"}),Object(l["c"])("required",Object(i["a"])(Object(i["a"])({},u["b"]),{},{message:"Data harus di isi"})),Object(l["c"])("email",Object(i["a"])(Object(i["a"])({},u["a"]),{},{message:"Data harus berupa e-mail"}));var h={directives:{mask:d["mask"]},components:{Footer:o["a"],FixedNavbar:r["a"],Option:f["a"],Autocomplete:m["a"],Spinner:v["a"],Notif:p["a"]},data:function(){return{data:{},provinsi:"",kabupaten:"",sekolah:"",tahun_lulus:"",checkbox:!1}},watch:{provinsi:function(t){this.$store.dispatch("dataBiodata/getDataKab",t)},kabupaten:function(t){this.$store.dispatch("dataBiodata/getDataSekolah",{kabupaten:t,provinsi:this.provinsi})}},created:function(){var t=JSON.parse(window.localStorage.getItem("dataPeserta"));this.data.nama_lengkap=t.nama,this.data.nohp=t.nohp,this.data.email=t.sosmed.email,this.data.nohp_wa=t.sosmed.whatsapp,this.data.sosmed_ig=t.sosmed.instagram,this.data.sosmed_fb=t.sosmed.facebook,this.data.tahun_kelulusan=t.sekolah.tahun_kelulusan,this.tahun_lulus=t.sekolah.tahun_kelulusan,this.data.id_sekolah=t.sekolah.id,this.provinsi=t.sekolah.provinsi,this.kabupaten=t.sekolah.kabupaten,this.sekolah=t.sekolah.nama,this.$store.dispatch("dataBiodata/getDataProv")},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])("dataBiodata",["dataProv","loading","dataSekolah","dataKab"])),{},{tahunLulus:function(){var t=(new Date).getUTCFullYear();return[{text:t+1,value:t+1},{text:t,value:t},{text:t-1,value:t-1},{text:t-2,value:t-2}]}}),methods:{onSubmit:function(){this.$store.dispatch("dataBiodata/postDataBiodata",this.data)}}},b=h,x=(a("3d50"),a("2877")),k=Object(x["a"])(b,n,s,!1,null,"4efaf330",null);e["default"]=k.exports},caad:function(t,e,a){"use strict";var n=a("23e7"),s=a("4d64").includes,i=a("44d2"),r=a("ae40"),o=r("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d90a:function(t,e,a){"use strict";var n=a("2451"),s=a.n(n);s.a},e240:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5f6c3139.0ea7bf40.js.map