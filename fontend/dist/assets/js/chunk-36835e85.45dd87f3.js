(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36835e85"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"1f18":function(e,t,a){},"37e1":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}));var r=a("6128");function o(){Object(r["a"])({url:"orders/",params:{st:"addorder"}}).then((function(e){window.sessionStorage.setItem("subtoken",e.data.subtoken)}))}function n(){window.sessionStorage.removeItem("subtoken")}},"45fc":function(e,t,a){"use strict";var r=a("23e7"),o=a("b727").some,n=a("a640"),l=a("ae40"),s=n("some"),i=l("some");r({target:"Array",proto:!0,forced:!s||!i},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"4c60":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.picdialogVisible=!0}}},[e._v("上传图片")]),a("el-dialog",{attrs:{title:"",visible:e.picdialogVisible,width:"50%","append-to-body":!0},on:{"update:visible":function(t){e.picdialogVisible=t}}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("span",[e._v("首页")])]),a("el-col",{attrs:{span:4}},[a("span",[e._v("首页顺序")])]),a("el-col",{attrs:{span:4}},[e._v("banner")]),a("el-col",{attrs:{span:12}},[e._v("alt(首页,首页顺序,banner,alt非必填项)")])],1),a("el-row",[a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:""},model:{value:e.uploadData.is_home,callback:function(t){e.$set(e.uploadData,"is_home",t)},expression:"uploadData.is_home"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-col",{attrs:{span:4}},[a("el-input",{model:{value:e.uploadData.home_index,callback:function(t){e.$set(e.uploadData,"home_index",t)},expression:"uploadData.home_index"}})],1),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:""},model:{value:e.uploadData.is_banner,callback:function(t){e.$set(e.uploadData,"is_banner",t)},expression:"uploadData.is_banner"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-col",{attrs:{span:12}},[a("el-input",{model:{value:e.uploadData.image_alt,callback:function(t){e.$set(e.uploadData,"image_alt",t)},expression:"uploadData.image_alt"}})],1)],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.actionUrl,"on-success":e.uploadSuccess,"file-list":e.fileList,limit:1,data:e.uploadData,headers:e.myheaders,accept:"image/jpg, image/jpeg, image/png","auto-upload":!1,"on-exceed":e.handleExceed}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.uploadBtn}},[e._v("上传到服务器")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1)],1)},o=[],n=(a("a9e3"),{name:"uploadPic",props:{owner:{type:String,default:"public"},index:{type:Number,default:99},number:{type:String,default:"default"}},data:function(){return{picdialogVisible:!1,actionUrl:"https://chinagoodgifts.com/api/upload/",fileList:[],uploadData:{owner:this.owner,number:this.number},myheaders:{authorization:window.localStorage.getItem("token")},options:[{value:"0",label:"否"},{value:"1",label:"是"}]}},methods:{uploadSuccess:function(e){switch(e.status){case 1e3:this.$message("上传成功"),this.$emit("sendPicUrl",{url:"https://chinagoodgifts.com/image/"+e.file,index:this.index,id:e.id});break;case 1001:this.$message.error("图片尺寸太大,请选择500kb以下的图片");break;case 1002:this.$message.error("非法的文件格式,或图片已损坏");break;case 1003:this.$message("找到相同的图片"),this.$emit("sendPicUrl",{url:"https://chinagoodgifts.com/image/"+e.file,index:this.index,id:e.id});default:break}},handleExceed:function(){this.$message.error("单次只能上传一张图片")},uploadBtn:function(){void 0===this.uploadData.home_index&&(this.uploadData.home_index=0),void 0===this.uploadData.is_home&&(this.uploadData.is_home=0),void 0===this.uploadData.is_banner&&(this.uploadData.is_banner=0),""===this.number?this.$message.error("请完整填写订单信息!"):(this.uploadData.number=this.number,this.$refs.upload.submit())}}}),l=n,s=a("2877"),i=Object(s["a"])(l,r,o,!1,null,null,null);t["a"]=i.exports},6681:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:function(t){return e.dateRangeChange(e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},o=[],n={name:"dateSearch",data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},methods:{dateRangeChange:function(e){this.$emit("dateSearchDate",e)}}},l=n,s=a("2877"),i=Object(s["a"])(l,r,o,!1,null,"57cc3ee9",null);t["a"]=i.exports},"685c":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return l}));var r=a("6128");function o(e){return Object(r["a"])({url:"upload/",params:e})}function n(e){return Object(r["a"])({url:"upload/".concat(e,"/"),method:"DELETE"})}function l(e,t){return Object(r["a"])({url:"upload/".concat(e,"/"),method:"patch",data:t})}},"841c":function(e,t,a){"use strict";var r=a("d784"),o=a("825a"),n=a("1d80"),l=a("129f"),s=a("14c3");r("search",1,(function(e,t,a){return[function(t){var a=n(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](String(a))},function(e){var r=a(t,e,this);if(r.done)return r.value;var n=o(e),i=String(this),u=n.lastIndex;l(u,0)||(n.lastIndex=0);var c=s(n,i);return l(n.lastIndex,u)||(n.lastIndex=u),null===c?-1:c.index}]}))},"93d9":function(e,t,a){"use strict";var r=a("1f18"),o=a.n(r);o.a},a434:function(e,t,a){"use strict";var r=a("23e7"),o=a("23cb"),n=a("a691"),l=a("50c4"),s=a("7b0b"),i=a("65f0"),u=a("8418"),c=a("1dde"),d=a("ae40"),p=c("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,m=Math.min,h=9007199254740991,_="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var a,r,c,d,p,f,g=s(this),v=l(g.length),w=o(e,v),k=arguments.length;if(0===k?a=r=0:1===k?(a=0,r=v-w):(a=k-2,r=m(b(n(t),0),v-w)),v+a-r>h)throw TypeError(_);for(c=i(g,r),d=0;d<r;d++)p=w+d,p in g&&u(c,d,g[p]);if(c.length=r,a<r){for(d=w;d<v-r;d++)p=d+r,f=d+a,p in g?g[f]=g[p]:delete g[f];for(d=v;d>v-r+a;d--)delete g[d-1]}else if(a>r)for(d=v-r;d>w;d--)p=d+r-1,f=d+a-1,p in g?g[f]=g[p]:delete g[f];for(d=0;d<a;d++)g[d+w]=arguments[d+2];return g.length=v-r+a,c}})},b85c:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0"),a("a630"),a("fb6a"),a("b0c0"),a("25f0");function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function o(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}function n(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=o(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){i=!0,l=e},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(i)throw l}}}}},d928:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("订单管理")]),a("el-breadcrumb-item",[e._v("订单列表")])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{size:"mini",placeholder:"关键字搜索:订单/日期/客户/地址/备注"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:e.clearnSearchText}},[e._v("清除")])],1),a("el-col",{attrs:{span:2}},[a("add-order")],1),a("el-col",{attrs:{span:6}},[a("date-search",{on:{dateSearchDate:e.dateSearchDate}})],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{},attrs:{data:e.handlePage(e.page,e.pagesize),border:"","show-summary":"","highlight-current-row":"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),a("el-table-column",{attrs:{label:"订单编号",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.order_number))}})]}}])}),a("el-table-column",{attrs:{label:"客户名称",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.customer.lite_name))}})]}}])}),a("el-table-column",{attrs:{label:"下单日期",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.order_date))}})]}}])}),a("el-table-column",{attrs:{label:"订单交期",prop:"deliver_date",width:"100",align:"center"}}),a("el-table-column",{attrs:{label:"汇率",width:"70",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ex_rate))])]}}])}),a("el-table-column",{attrs:{label:"订单金额($)",prop:"order_amount",width:"100",align:"center"}}),a("el-table-column",{attrs:{label:"出货地址",width:"300","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.ship_addr))}})]}}])}),a("el-table-column",{attrs:{label:"备注",width:"150","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.text))}})]}}])}),a("el-table-column",{attrs:{label:"业务",prop:"sales",width:"80",align:"center"}}),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",clearable:"",disabled:""},model:{value:t.row.is_done,callback:function(a){e.$set(t.row,"is_done",a)},expression:"scope.row.is_done"}},e._l(e.Options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("查看")])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[1,2,5,10],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},o=[],n=(a("4de4"),a("c975"),a("fb6a"),a("45fc"),a("b64b"),a("ac1f"),a("5319"),a("841c"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-order"},[a("el-button",{attrs:{type:"primary"},on:{click:e.dialogStatus}},[e._v("新增订单")]),a("el-dialog",{attrs:{title:"新增订单",visible:e.dialogVisible,width:"96%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"addOrderForm",attrs:{model:e.orderData,"label-width":"80px",size:"mini",rules:e.addOrderFormRoles,"inline-message":""}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"订单编号",prop:"order_number"}},[a("el-input",{model:{value:e.orderData.order_number,callback:function(t){e.$set(e.orderData,"order_number",t)},expression:"orderData.order_number"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"客户名称"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.selectTest},model:{value:e.orderData.customer,callback:function(t){e.$set(e.orderData,"customer",t)},expression:"orderData.customer"}},e._l(e.customerData,(function(e){return a("el-option",{key:e.lite_name,attrs:{label:e.lite_name,value:e.lite_name}})})),1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"汇率",prop:"ex_rate"}},[a("el-input",{model:{value:e.orderData.ex_rate,callback:function(t){e.$set(e.orderData,"ex_rate",t)},expression:"orderData.ex_rate"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.orderData.is_done,callback:function(t){e.$set(e.orderData,"is_done",t)},expression:"orderData.is_done"}},e._l(e.Orderoptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"下单日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.orderData.order_date,callback:function(t){e.$set(e.orderData,"order_date",t)},expression:"orderData.order_date"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"订单交期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.orderData.deliver_date,callback:function(t){e.$set(e.orderData,"deliver_date",t)},expression:"orderData.deliver_date"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"金额"}},[a("el-input",{model:{value:e.orderData.order_amount,callback:function(t){e.$set(e.orderData,"order_amount",t)},expression:"orderData.order_amount"}})],1)],1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"出货地址"}},[a("el-input",{model:{value:e.orderData.ship_addr,callback:function(t){e.$set(e.orderData,"ship_addr",t)},expression:"orderData.ship_addr"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.orderData.text,callback:function(t){e.$set(e.orderData,"text",t)},expression:"orderData.text"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("upload-pic",{attrs:{number:e.orderData.order_number,owner:"order"},on:{sendPicUrl:e.getPicUrl}})],1),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"order-img"},[a("img",{staticClass:"orderImg",attrs:{src:this.orderData.order_pic},on:{click:e.imgLook}})])])],1),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addSubOrder()}}},[e._v("新增明细")]),a("el-table",{staticStyle:{width:"99.9%"},attrs:{data:e.subOrderData,"highlight-current-row":""}},[a("el-table-column",{attrs:{label:"产品名称",width:"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_name,callback:function(a){e.$set(t.row,"pro_name",a)},expression:"scope.row.pro_name"}}):a("span",[e._v(e._s(t.row.pro_name))])]}}])}),a("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-select",{attrs:{size:"mini",clearable:"",placeholder:"请选择"},model:{value:t.row.pro_item,callback:function(a){e.$set(t.row,"pro_item",a)},expression:"scope.row.pro_item"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):a("span",[e._v(e._s(e.options[t.row.pro_item-1].label))])]}}])}),a("el-table-column",{attrs:{label:"产品尺寸",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_size,callback:function(a){e.$set(t.row,"pro_size",a)},expression:"scope.row.pro_size"}}):a("span",[e._v(e._s(t.row.pro_size))])]}}])}),a("el-table-column",{attrs:{width:"250",label:"产品颜色",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("add-product-color",{attrs:{parentProColor:t,addColorBtn:e.childAddColorBtn},on:{getProColor:e.handleSelect,delProColor:e.delProColor}})]}}])}),a("el-table-column",{attrs:{label:"产品包装",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_pack,callback:function(a){e.$set(t.row,"pro_pack",a)},expression:"scope.row.pro_pack"}}):a("span",[e._v(e._s(t.row.pro_pack))])]}}])}),a("el-table-column",{attrs:{label:"详细说明",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini",type:"textarea",autosize:""},model:{value:t.row.pro_desc,callback:function(a){e.$set(t.row,"pro_desc",a)},expression:"scope.row.pro_desc"}}):a("span",[e._v(e._s(t.row.pro_desc))])]}}])}),a("el-table-column",{attrs:{label:"数量",prop:"pro_qt",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_qt,callback:function(a){e.$set(t.row,"pro_qt",a)},expression:"scope.row.pro_qt"}}):a("span",[e._v(e._s(t.row.pro_qt))])]}}])}),a("el-table-column",{attrs:{label:"单价($)",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},on:{blur:function(a){return e.subAmount(t.row)}},model:{value:t.row.pro_price,callback:function(a){e.$set(t.row,"pro_price",a)},expression:"scope.row.pro_price"}}):a("span",[e._v(e._s(t.row.pro_price))])]}}])}),a("el-table-column",{attrs:{label:"重量(g)",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_weight,callback:function(a){e.$set(t.row,"pro_weight",a)},expression:"scope.row.pro_weight"}}):a("span",[e._v(e._s(t.row.pro_weight))])]}}])}),a("el-table-column",{attrs:{label:"汇率",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},model:{value:t.row.sub_ex_rate,callback:function(a){e.$set(t.row,"sub_ex_rate",a)},expression:"scope.row.sub_ex_rate"}}):a("span",[e._v(e._s(t.row.sub_ex_rate))])]}}])}),a("el-table-column",{attrs:{label:"金额($)",prop:"sub_amount",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?a("el-input",{attrs:{size:"mini"},model:{value:t.row.sub_amount,callback:function(a){e.$set(t.row,"sub_amount",a)},expression:"scope.row.sub_amount"}}):a("span",[e._v(e._s(t.row.sub_amount))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.addSubOrderRow(t.row)}}},[e._v("新增")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.editSubOrderRow(t.row)}}},[e._v("修改")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.delSubOrderRow(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1),a("el-dialog",{attrs:{visible:e.imgdialogVisible,width:"96%"},on:{"update:visible":function(t){e.imgdialogVisible=t}}},[a("div",[a("img",{attrs:{src:this.orderData.order_pic,width:"99%"}})])])],1)}),l=[],s=(a("4160"),a("a434"),a("d3b7"),a("1276"),a("159b"),a("b85c")),i=a("f6b0"),u=a("37e1"),c=a("4328"),d=a.n(c),p=a("f8b7"),f=a("685c"),b=a("2822"),m=a("4c60"),h={name:"AddOrder",components:{addProductColor:b["a"],uploadPic:m["a"]},data:function(){return{childAddColorBtn:!0,customerData:[],orderData:{order_number:"",customer:"",order_date:"",deliver_date:"",ex_rate:0,order_amount:0,ship_addr:"",text:"",order_pic:""},subOrderData:[],addOrderFormRoles:{order_number:[{required:!0,message:"请输入订单编号",trigger:"blur"}]},Orderoptions:[{value:0,label:"正常"},{value:1,label:"紧急"}],options:[{value:1,label:"硅胶"},{value:2,label:"五金"},{value:3,label:"USB"},{value:4,label:"移动电源"},{value:5,label:"其他"}],dialogVisible:!1,onSubmitStatus:!1,dialogImageUrl:"",imagedialogVisible:!1,disabled:!1,fileList:[],imgdialogVisible:!1,pic_id:""}},methods:{imgLook:function(){this.imgdialogVisible=!0},getPicUrl:function(e){this.orderData.order_pic=e.url,this.pic_id=e.id,console.log(this.pic_id)},beforeRemove:function(){},handleRemove:function(e){},dialogStatus:function(){this.dialogVisible=!0,Object(u["b"])()},sumOrderAmount:function(){var e,t=0,a=Object(s["a"])(this.subOrderData);try{for(a.s();!(e=a.n()).done;){var r=e.value;t+=1*r.sub_amount}}catch(o){a.e(o)}finally{a.f()}this.orderData.order_amount=t},onSubmit:function(){var e=this;this.sumOrderAmount();var t,a=Object(s["a"])(this.subOrderData);try{for(a.s();!(t=a.n()).done;){var r=t.value;r.status=0}}catch(n){a.e(n)}finally{a.f()}if(this.orderData.order_number)if(window.sessionStorage.getItem("subtoken")){var o=new Promise((function(t,a){Object(p["f"])(e.orderData).then((function(t){console.log(t),Object(f["c"])(e.pic_id,{order_number:t.data.order_number}).then((function(t){e.$notify({message:"创建成功",type:"success"})}));var a,r=Object(s["a"])(e.subOrderData);try{for(r.s();!(a=r.n()).done;){var o=a.value;Object(p["g"])(o).then((function(e){})).catch((function(t){var a=d.a.parse(t.response.request.response,{delimiter:","});e.responseMessage(a)}))}}catch(n){r.e(n)}finally{r.f()}})).catch((function(t){console.log(t.response.request);var a=d.a.parse(t.response.request.response,{delimiter:","});e.responseMessage(a)}))}));o.then((function(t){window.sessionStorage.removeItem("subtoken"),window.sessionStorage.setItem("order_number",t.data.order_number),e.$router.replace("orders/"+t.data.order_number+"/")}))}else this.$message.error("请勿重复提交,或刷新重试");else this.$message.error("请完整填写订单信息!")},responseMessage:function(e){this.$notify({title:"警告",message:e,position:"top-left"})},handleClose:function(e){var t=this;this.$confirm("请确认数据已保存!").then((function(a){e(),t.orderData={},t.subOrderData=[],t.fileList=[]})).catch((function(e){}))},delSubOrderRow:function(e,t){this.subOrderData.splice(e,1)},addSubOrder:function(){if(this.orderData.order_number){this.childAddColorBtn=!1;var e={pro_name:"",pro_item:1,pro_size:"",pro_color:"",pro_pack:"",pro_desc:"",pro_qt:0,pro_price:0,pro_weight:0,order_number:this.orderData.order_number,sub_ex_rate:this.orderData.ex_rate,sub_amount:0,status:1};this.subOrderData.push(e)}else this.$message.error("请完整填写订单信息!")},addSubOrderRow:function(e){this.childAddColorBtn=!1;var t={pro_name:"",pro_item:1,pro_size:"",pro_color:"",pro_pack:"",pro_desc:"",pro_qt:0,pro_price:0,pro_weight:0,order_number:this.orderData.order_number,sub_ex_rate:this.orderData.ex_rate,sub_amount:0,status:1};this.subOrderData.push(t)},editSubOrderRow:function(e){e.status=1},delProColor:function(e,t){var a="";this.subOrderData[t].pro_color.split("|").forEach((function(t,r){-1===t.indexOf(e)&&""!==t&&(a+=t+"|")})),this.subOrderData[t].pro_color=a},handleSelect:function(e,t){void 0===this.subOrderData[t].pro_color?this.subOrderData[t].pro_color=JSON.stringify(e)+"|":this.subOrderData[t].pro_color+=JSON.stringify(e)+"|"},subAmount:function(e){e.sub_amount=e.pro_price*e.pro_qt*1},selectTest:function(e){var t=this;!0===e&&Object(i["a"])().then((function(e){t.customerData=e.data}))}},created:function(){}},_=h,g=(a("93d9"),a("2877")),v=Object(g["a"])(_,n,l,!1,null,"1d41e1d2",null),w=v.exports,k=a("6681"),y={components:{AddOrder:w,dateSearch:k["a"]},data:function(){return{tableData:[],sliceTableData:[],count:0,pagesize:10,page:1,input1:"",select:"",Options:[{value:0,label:"正常"},{value:1,label:"紧急"}],multipleSelection:[],search:"",loading:!0}},methods:{handleClick:function(e){this.$store.state.order_number=e.order_number,window.sessionStorage.setItem("order_number",e.order_number),this.$router.push("orders/".concat(e.order_number,"/"))},handleSelectionChange:function(e){this.multipleSelection=e},dateSearchDate:function(e){var t=this;e?Object(p["b"])({start_date:e[0],end_date:e[1],argument:"order_date"}).then((function(e){t.tableData=e.data})):Object(p["b"])().then((function(e){t.tableData=e.data,t.count=e.data.length}))},handleSizeChange:function(e){this.pagesize=e,this.handlePage(this.page,e)},handleCurrentChange:function(e){this.page=e,this.handlePage(e,this.pagesize)},handlePage:function(e,t){var a=this.search;return a?this.tableData.filter((function(e){return Object.keys(e).some((function(t){return String(e[t]).toLowerCase().indexOf(a)>-1}))})).slice((e-1)*t,e*t*1):this.tableData.slice((e-1)*t,e*t*1)},showDate:function(e){return e+="",-1!==e.indexOf(this.search)&&""!==this.search?e.replace(this.search,'<font color="#ff4400">'+this.search+"</font>"):e},clearnSearchText:function(){this.search=null},getOrderList:function(){var e=this;Object(p["b"])().then((function(t){e.loading=!1,e.tableData=t.data,e.count=t.data.length})).catch((function(e){}))}},created:function(){this.getOrderList()}},D=y,x=Object(g["a"])(D,r,o,!1,null,"23ae7cc3",null);t["default"]=x.exports},f6b0:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var r=a("6128"),o=a("4328"),n=a.n(o);function l(e){return Object(r["a"])({url:"customers/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:n.a.stringify(e)})}function s(e){return Object(r["a"])({url:"customers/",params:e})}},f8b7:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return d})),a.d(t,"g",(function(){return p}));var r=a("6128"),o=a("4328"),n=a.n(o);function l(e){return Object(r["a"])({url:"orders/",params:e})}function s(e,t){return Object(r["a"])({url:"orders/".concat(e,"/"),params:t})}function i(e){return Object(r["a"])({url:"orders/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:n.a.stringify(e)})}function u(e,t,a){return Object(r["a"])({url:"orders/".concat(e,"/"),method:"patch",params:t,data:n.a.stringify(a)})}function c(e){return Object(r["a"])({url:"suborders/",params:e})}function d(e,t,a){return Object(r["a"])({url:"suborders/".concat(e,"/"),method:"patch",params:t,data:n.a.stringify(a)})}function p(e){return Object(r["a"])({url:"suborders/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:n.a.stringify(e)})}}}]);