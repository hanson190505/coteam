(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29aae506"],{"3c4d":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var n=a("6128"),o=a("4328"),r=a.n(o);function i(t){return Object(n["a"])({url:"packs/",params:t})}function s(t){return Object(n["a"])({url:"packs/",method:"post",data:r.a.stringify(t)})}},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");var n=a("ade3");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"83a8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{attrs:{type:"primary"},on:{click:t.addPack}},[t._v(" 新增 ")]),a("packs-table"),a("post-pack",{attrs:{postPackDrawerVisible:t.postPackDrawerVisible},on:{addPack:t.addPack}})],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-table",{attrs:{columns:t.columns,rowKey:"id","data-source":t.packData,pagination:t.pagination,loading:t.loading}})},i=[],s=a("5530"),c=a("3c4d"),l=[{title:"编号",dataIndex:"pack_number",key:"pack_number",width:"10%",scopedSlots:{customRender:"pack_number"}},{title:"尺寸",dataIndex:"size",key:"size",width:"10%",scopedSlots:{customRender:"size"}},{title:"材质",dataIndex:"material",key:"material",width:"10%",scopedSlots:{customRender:"material"}},{title:"重量",dataIndex:"weight",key:"weight",width:"10%",scopedSlots:{customRender:"weight"}},{title:"描述",dataIndex:"description",key:"description",width:"60%",scopedSlots:{customRender:"description"}}],u={data:function(){return{columns:l,packData:[],pagination:{},loading:!0}},methods:{getData:function(){var t=this;Object(c["a"])().then((function(e){var a=Object(s["a"])({},t.pagination);a.total=e.data.count,t.packData=e.data.results,t.loading=!1,t.pagination=a}))}},mounted:function(){this.getData()}},p=u,d=a("2877"),m=Object(d["a"])(p,r,i,!1,null,null,null),b=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{placement:"right",closeabel:!1,visible:t.postPackDrawerVisible,width:"40%"},on:{close:t.onClose}},[a("a-form-model",{attrs:{model:t.postData}},[a("a-form-model-item",{attrs:{label:"编号"}},[a("a-input",{model:{value:t.postData.pack_number,callback:function(e){t.$set(t.postData,"pack_number",e)},expression:"postData.pack_number"}})],1),a("a-form-model-item",{attrs:{label:"尺寸"}},[a("a-input",{model:{value:t.postData.size,callback:function(e){t.$set(t.postData,"size",e)},expression:"postData.size"}})],1),a("a-form-model-item",{attrs:{label:"材质",prop:"material"}},[a("a-select",[a("a-select-option",{attrs:{value:"Tinplate"}},[t._v("Tinplate")]),a("a-select-option",{attrs:{value:"Aluminum"}},[t._v("Aluminum")]),a("a-select-option",{attrs:{value:"Carton"}},[t._v("Carton")]),a("a-select-option",{attrs:{value:"Plastic"}},[t._v("Plastic")]),a("a-select-option",{attrs:{value:"Tinplate&Sponge"}},[t._v("Tinplate&Sponge")]),a("a-select-option",{attrs:{value:"Aluminum&Sponge"}},[t._v("Aluminum&Sponge")]),a("a-select-option",{attrs:{value:"Carton&Sponge"}},[t._v("Carton&Sponge")]),a("a-select-option",{attrs:{value:"custom"}},[t._v("custom")])],1)],1),a("a-form-model-item",{attrs:{label:"重量"}},[a("a-input",{model:{value:t.postData.weight,callback:function(e){t.$set(t.postData,"weight",e)},expression:"postData.weight"}})],1),a("a-form-model-item",{attrs:{label:"描述"}},[a("a-input",{attrs:{type:"textarea"},model:{value:t.postData.description,callback:function(e){t.$set(t.postData,"description",e)},expression:"postData.description"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" Create ")]),a("a-button",{staticStyle:{"margin-left":"10px"}},[t._v(" Cancel ")])],1)],1)],1)},k=[],v={props:{postPackDrawerVisible:{type:Boolean,default:!1}},data:function(){return{postData:{}}},methods:{onClose:function(){this.$emit("addPack")},onSubmit:function(){var t=this;Object(c["b"])(this.postData).then((function(e){t.$emit("addPack")}))}}},g=v,h=Object(d["a"])(g,f,k,!1,null,null,null),w=h.exports,D={components:{PacksTable:b,PostPack:w},data:function(){return{postPackDrawerVisible:!1}},methods:{addPack:function(){this.postPackDrawerVisible=!this.postPackDrawerVisible}}},O=D,P=Object(d["a"])(O,n,o,!1,null,null,null);e["default"]=P.exports},ade3:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))},dbb4:function(t,e,a){var n=a("23e7"),o=a("83ab"),r=a("56ef"),i=a("fc6a"),s=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,a,n=i(t),o=s.f,l=r(n),u={},p=0;while(l.length>p)a=o(n,e=l[p++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var n=a("23e7"),o=a("d039"),r=a("fc6a"),i=a("06cf").f,s=a("83ab"),c=o((function(){i(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(r(t),e)}})}}]);