(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1af2d0b0"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"3c4d":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a("6128"),r=a("4328"),o=a.n(r);function i(e){return Object(n["a"])({url:"packs/",params:e})}function l(e){return Object(n["a"])({url:"packs/",method:"post",data:o.a.stringify(e)})}},"4c60":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.picdialogVisible=!0}}},[e._v("上传图片")]),a("el-dialog",{attrs:{title:"",visible:e.picdialogVisible,width:"50%","append-to-body":!0},on:{"update:visible":function(t){e.picdialogVisible=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"首页"}},[a("el-select",{attrs:{placeholder:""},model:{value:e.uploadData.is_home,callback:function(t){e.$set(e.uploadData,"is_home",t)},expression:"uploadData.is_home"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"首页顺序"}},[a("el-input",{model:{value:e.uploadData.home_index,callback:function(t){e.$set(e.uploadData,"home_index",t)},expression:"uploadData.home_index"}})],1),a("el-form-item",{attrs:{label:"banner"}},[a("el-select",{attrs:{placeholder:""},model:{value:e.uploadData.is_banner,callback:function(t){e.$set(e.uploadData,"is_banner",t)},expression:"uploadData.is_banner"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"alt"}},[a("el-input",{model:{value:e.uploadData.image_alt,callback:function(t){e.$set(e.uploadData,"image_alt",t)},expression:"uploadData.image_alt"}})],1),a("el-form-item",{attrs:{label:"所属产品"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.productSelect},model:{value:e.uploadData.pro_number,callback:function(t){e.$set(e.uploadData,"pro_number",t)},expression:"uploadData.pro_number"}},e._l(e.productDataSelect,(function(t){return a("el-option",{key:t.id,attrs:{label:t.pro_number,value:t.id}},[a("span",[e._v(e._s(t.sub_type))]),e._v("- "),a("span",[e._v(e._s(t.pro_number))]),e._v("- "),a("span",[e._v(e._s(t.pro_name))])])})),1)],1),a("el-form-item",{attrs:{label:"所属包装"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.packNumberSelect},model:{value:e.uploadData.pack_number,callback:function(t){e.$set(e.uploadData,"pack_number",t)},expression:"uploadData.pack_number"}},e._l(e.packDataSelect,(function(t){return a("el-option",{key:t.id,attrs:{label:t.pack_number,value:t.id}},[a("span",[e._v(e._s(t.pack_number))]),e._v("- "),a("span",[e._v(e._s(t.size))]),e._v("- "),a("span",[e._v(e._s(t.material))])])})),1)],1),a("el-form-item",{attrs:{label:"所属订单"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.orderNumberSelect},model:{value:e.uploadData.order_number,callback:function(t){e.$set(e.uploadData,"order_number",t)},expression:"uploadData.order_number"}},e._l(e.orderDataSelect,(function(t){return a("el-option",{key:t.id,attrs:{label:t.order_number,value:t.id}},[a("span",[e._v(e._s(t.order_number)+"-"+e._s(t.customer.lite_name))])])})),1)],1)],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.actionUrl,"on-success":e.uploadSuccess,"file-list":e.fileList,limit:1,data:e.uploadData,headers:e.myheaders,accept:"image/jpg, image/jpeg, image/png","auto-upload":!1,"on-exceed":e.handleExceed}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.uploadBtn}},[e._v("上传到服务器")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1)],1)},r=[],o=(a("a9e3"),a("4c79")),i=a("3c4d"),l=a("f8b7"),s={name:"uploadPic",props:{owner:{type:String,default:"public"},index:{type:Number,default:99},number:{type:String,default:"default"}},data:function(){return{picdialogVisible:!1,actionUrl:"https://chinagoodgifts.com/api/upload/",fileList:[],uploadData:{owner:this.owner,number:this.number},myheaders:{authorization:window.localStorage.getItem("token")},options:[{value:"0",label:"否"},{value:"1",label:"是"}],productDataSelect:[],packDataSelect:[],orderDataSelect:[]}},methods:{productSelect:function(e){var t=this;!0===e&&Object(o["b"])().then((function(e){t.productDataSelect=e.data.results}))},packNumberSelect:function(e){var t=this;!0===e&&Object(i["a"])().then((function(e){t.packDataSelect=e.data.results}))},orderNumberSelect:function(e){var t=this;!0===e&&Object(l["b"])().then((function(e){t.orderDataSelect=e.data.results}))},uploadSuccess:function(e){switch(e.status){case 1e3:this.$message("上传成功"),this.$emit("sendPicUrl",{url:"https://chinagoodgifts.com/image/"+e.file,index:this.index,id:e.id});break;case 1001:this.$message.error("图片尺寸太大,请选择500kb以下的图片");break;case 1002:this.$message.error("非法的文件格式,或图片已损坏");break;case 1003:this.$message("找到相同的图片"),this.$emit("sendPicUrl",{url:"https://chinagoodgifts.com/image/"+e.file,index:this.index,id:e.id});default:break}},handleExceed:function(){this.$message.error("单次只能上传一张图片")},uploadBtn:function(){void 0===this.uploadData.home_index&&(this.uploadData.home_index=0),void 0===this.uploadData.is_home&&(this.uploadData.is_home=0),void 0===this.uploadData.is_banner&&(this.uploadData.is_banner=0),""===this.number?this.$message.error("请完整填写订单信息!"):(this.uploadData.number=this.number,this.$refs.upload.submit())}}},c=s,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);t["a"]=d.exports},"4c79":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return d}));var n=a("6128"),r=a("4328"),o=a.n(r);function i(e){return Object(n["a"])({url:"product_type/",params:e})}function l(e){return Object(n["a"])({url:"product_type/",method:"post",data:o.a.stringify(e)})}function s(e,t){return Object(n["a"])({url:"product_type/".concat(e,"/"),method:"patch",data:o.a.stringify(t)})}function c(e){return Object(n["a"])({url:"products/",params:e})}function u(e){return Object(n["a"])({url:"products/",method:"post",data:o.a.stringify(e)})}function d(e,t){return Object(n["a"])({url:"products/".concat(e,"/"),method:"patch",data:o.a.stringify(t)})}},6681:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:function(t){return e.dateRangeChange(e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},r=[],o={name:"dateSearch",data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},methods:{dateRangeChange:function(e){this.$emit("dateSearchDate",e)}}},i=o,l=a("2877"),s=Object(l["a"])(i,n,r,!1,null,"57cc3ee9",null);t["a"]=s.exports},"685c":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return i}));var n=a("6128");function r(e){return Object(n["a"])({url:"upload/",params:e})}function o(e){return Object(n["a"])({url:"upload/".concat(e,"/"),method:"DELETE"})}function i(e,t){return Object(n["a"])({url:"upload/".concat(e,"/"),method:"patch",data:t})}},"738d":function(e,t,a){"use strict";var n=a("c035"),r=a.n(n);r.a},"841c":function(e,t,a){"use strict";var n=a("d784"),r=a("825a"),o=a("1d80"),i=a("129f"),l=a("14c3");n("search",1,(function(e,t,a){return[function(t){var a=o(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a):new RegExp(t)[e](String(a))},function(e){var n=a(t,e,this);if(n.done)return n.value;var o=r(e),s=String(this),c=o.lastIndex;i(c,0)||(o.lastIndex=0);var u=l(o,s);return i(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]}))},b59b:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-input",{attrs:{size:"mini",clearable:"",placeholder:"请输入关键字..."},on:{clear:e.handleSearchClear,input:e.handleInput},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendSearch(t)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.sendSearch},slot:"append"})],1)],1)},r=[],o=(a("4160"),a("ac1f"),a("841c"),a("159b"),{name:"backendSearch",props:{keyWords:Array},data:function(){return{search:""}},methods:{handleInput:function(){""===this.search&&this.$emit("parentMethod")},sendSearch:function(){var e=this.search,t={};this.keyWords.forEach((function(a){t[a]=e})),e&&this.$emit("parentMethod",t)},handleSearchClear:function(){this.$emit("parentMethod")}}}),i=o,l=a("2877"),s=Object(l["a"])(i,n,r,!1,null,"0f6c9048",null);t["a"]=s.exports},c035:function(e,t,a){},d2c0:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,50,100,200],"page-size":e.page_size,layout:"total, sizes, prev, pager, next, jumper",total:e.getDataTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"prev-click":e.handleprevious,"next-click":e.handlenext}})],1)},r=[],o=(a("a9e3"),{name:"pagiNation",data:function(){return{page_size:10,currentPage:1}},props:{getDataTotal:{type:Number,default:0}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:1,page_size:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,page_size:this.page_size})},handleprevious:function(e){this.$emit("pagination",{page:e,page_size:this.page_size})},handlenext:function(e){this.$emit("pagination",{page:e,page_size:this.page_size})}}}),i=o,l=a("2877"),s=Object(l["a"])(i,n,r,!1,null,"212aea47",null);t["a"]=s.exports},f719:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:4}},[a("backend-searchVue",{attrs:{keyWords:e.keyWords},on:{parentMethod:e.pagination}})],1),a("el-col",{attrs:{span:8}},[a("date-search",{on:{dateSearchDate:e.dateSearchDate}})],1),a("el-col",{attrs:{span:4}},[a("upload-pic",{on:{sendPicUrl:e.getPicUrl}})],1)],1),a("el-table",{ref:"imageTableData",attrs:{data:e.imageData,border:"",stripe:""},on:{select:e.handleSelect,"select-all":e.handleSelect}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"所属产品",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.selectTest},model:{value:t.row.pro_number,callback:function(a){e.$set(t.row,"pro_number",a)},expression:"scope.row.pro_number"}},e._l(e.productDataSelect,(function(e){return a("el-option",{key:e.id,attrs:{label:e.pro_number,value:e.id}})})),1):a("span",[e._v(e._s(t.row.pro_number))])]}}])}),a("el-table-column",{attrs:{label:"所属包装",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.packNumberSelect},model:{value:t.row.pack_number,callback:function(a){e.$set(t.row,"pack_number",a)},expression:"scope.row.pack_number"}},e._l(e.packDataSelect,(function(e){return a("el-option",{key:e.id,attrs:{label:e.pack_number,value:e.id}})})),1):a("span",[e._v(e._s(t.row.pack_number))])]}}])}),a("el-table-column",{attrs:{label:"所属订单",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.orderNumberSelect},model:{value:t.row.order_number,callback:function(a){e.$set(t.row,"order_number",a)},expression:"scope.row.order_number"}},e._l(e.orderDataSelect,(function(e){return a("el-option",{key:e.id,attrs:{label:e.order_number,value:e.id}})})),1):a("span",[e._v(e._s(t.row.order_number))])]}}])}),a("el-table-column",{attrs:{label:"上传日期",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.up_date))])]}}])}),a("el-table-column",{attrs:{label:"所属",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-input",{model:{value:t.row.owner,callback:function(a){e.$set(t.row,"owner",a)},expression:"scope.row.owner"}}):a("span",[e._v(e._s(t.row.owner))])]}}])}),a("el-table-column",{attrs:{label:"首页展示",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-input",{model:{value:t.row.is_home,callback:function(a){e.$set(t.row,"is_home",a)},expression:"scope.row.is_home"}}):a("span",[e._v(e._s(t.row.is_home))])]}}])}),a("el-table-column",{attrs:{label:"首页顺序",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-input",{model:{value:t.row.home_index,callback:function(a){e.$set(t.row,"home_index",a)},expression:"scope.row.home_index"}}):a("span",[e._v(e._s(t.row.home_index))])]}}])}),a("el-table-column",{attrs:{label:"banner",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-input",{model:{value:t.row.is_banner,callback:function(a){e.$set(t.row,"is_banner",a)},expression:"scope.row.is_banner"}}):a("span",[e._v(e._s(t.row.is_banner))])]}}])}),a("el-table-column",{attrs:{label:"alt",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-input",{model:{value:t.row.image_alt,callback:function(a){e.$set(t.row,"image_alt",a)},expression:"scope.row.image_alt"}}):a("span",[e._v(e._s(t.row.image_alt))])]}}])}),a("el-table-column",{attrs:{label:"banner_title",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-input",{attrs:{autosize:""},model:{value:t.row.banner_title,callback:function(a){e.$set(t.row,"banner_title",a)},expression:"scope.row.banner_title"}}):a("span",[e._v(e._s(t.row.banner_title))])]}}])}),a("el-table-column",{attrs:{label:"banner_desc",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.is_edit?a("el-input",{attrs:{autosize:""},model:{value:t.row.banner_desc,callback:function(a){e.$set(t.row,"banner_desc",a)},expression:"scope.row.banner_desc"}}):a("span",[e._v(e._s(t.row.banner_desc))])]}}])}),a("el-table-column",{attrs:{label:"是否占用",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.is_used))])]}}])}),a("el-table-column",{attrs:{label:"图片",align:"center",width:"300",fiexd:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticClass:"image",attrs:{src:e.baseurl+t.row.path,alt:t.row.path}})]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleDel(t.row)}}},[e._v("删除")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0===t.row.is_edit,expression:"scope.row.is_edit === 0"}],attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleChange(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1===t.row.is_edit,expression:"scope.row.is_edit === 1"}],attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleSave(t.row)}}},[e._v("保存")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1===t.row.is_edit,expression:"scope.row.is_edit === 1"}],attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleCancel(t.row)}}},[e._v("取消")])]}}])})],1),a("pagi-nation",{attrs:{getDataTotal:e.dataTotal},on:{pagination:e.pagination}})],1)},r=[],o=a("d2c0"),i=a("6681"),l=a("b59b"),s=a("4c60"),c=a("685c"),u=a("4c79"),d=a("3c4d"),p=a("f8b7"),f={name:"imageTable",components:{pagiNation:o["a"],backendSearchVue:l["a"],dateSearch:i["a"],uploadPic:s["a"]},data:function(){return{imageData:[],dataTotal:0,baseurl:"https://chinagoodgifts.com/image/",productDataSelect:[],packDataSelect:[],orderDataSelect:[],keyWords:["owner","is_banner","image_alt"],tempData:{}}},methods:{selectTest:function(e){var t=this;!0===e&&Object(u["b"])().then((function(e){t.productDataSelect=e.data.results}))},packNumberSelect:function(e){var t=this;!0===e&&Object(d["a"])().then((function(e){t.packDataSelect=e.data.results}))},orderNumberSelect:function(e){var t=this;!0===e&&Object(p["b"])().then((function(e){t.orderDataSelect=e.data.results}))},handleSelect:function(e){this.$emit("patchImageTable",e)},dateSearchDate:function(e){e?this.pagination({start_date:e[0],end_date:e[1],argument:"date_search"}):this.pagination()},pagination:function(e){var t=this;e||(e={page:1,page_size:10}),Object(c["b"])(e).then((function(e){t.loading=!1,t.imageData=e.data.results,t.dataTotal=e.data.count}))},handleDel:function(e){var t=this;Object(c["a"])(e.id).then((function(e){t.pagination()}))},handleChange:function(e){e.is_edit=1,this.tempData=e},handleSave:function(e){var t=this;e.is_edit=0,Object(c["c"])(e.id,e).then((function(e){t.pagination()}))},handleCancel:function(e){e.is_edit=0,this.row=this.tempData},clearSelect:function(){this.$refs.imageTableData.clearSelection()},getPicUrl:function(e){this.$message("图片上传成功!")}},created:function(){this.pagination()}},m=f,b=(a("738d"),a("2877")),h=Object(b["a"])(m,n,r,!1,null,null,null);t["a"]=h.exports},f8b7:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"j",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"i",(function(){return d})),a.d(t,"m",(function(){return p})),a.d(t,"c",(function(){return f})),a.d(t,"g",(function(){return m})),a.d(t,"k",(function(){return b})),a.d(t,"d",(function(){return h})),a.d(t,"l",(function(){return _})),a.d(t,"h",(function(){return g}));var n=a("6128"),r=a("4328"),o=a.n(r);function i(e){return Object(n["a"])({url:"orders/",params:e})}function l(e,t){return Object(n["a"])({url:"orders/".concat(e,"/"),params:t})}function s(e){return Object(n["a"])({url:"orders/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:o.a.stringify(e)})}function c(e,t){return Object(n["a"])({url:"orders/".concat(e,"/"),method:"patch",data:o.a.stringify(t)})}function u(e){return Object(n["a"])({url:"suborders/",params:e})}function d(e,t){return Object(n["a"])({url:"suborders/".concat(e,"/"),method:"patch",data:o.a.stringify(t)})}function p(e){return Object(n["a"])({url:"suborders/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:o.a.stringify(e)})}function f(e){return Object(n["a"])({url:"order_model/",params:e})}function m(e,t){return Object(n["a"])({url:"order_model/".concat(e,"/"),method:"patch",data:o.a.stringify(t)})}function b(e){return Object(n["a"])({url:"order_model/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:o.a.stringify(e)})}function h(e){return Object(n["a"])({url:"order_to_model/",params:e})}function _(e){return Object(n["a"])({url:"order_to_model/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:o.a.stringify(e)})}function g(e,t){return Object(n["a"])({url:"order_to_model/".concat(e,"/"),method:"patch",data:o.a.stringify(t)})}}}]);