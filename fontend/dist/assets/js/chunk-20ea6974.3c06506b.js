(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20ea6974"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"45fc":function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").some,n=r("a640"),l=r("ae40"),s=n("some"),i=l("some");a({target:"Array",proto:!0,forced:!s||!i},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},6681:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:function(t){return e.dateRangeChange(e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},o=[],n={name:"dateSearch",data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-7776e6),e.$emit("pick",[r,t])}}]}}},methods:{dateRangeChange:function(e){this.$emit("dateSearchDate",e)}}},l=n,s=r("2877"),i=Object(s["a"])(l,a,o,!1,null,"57cc3ee9",null);t["a"]=i.exports},"685c":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return l}));var a=r("6128");function o(e){return Object(a["a"])({url:"upload/",params:e})}function n(e){return Object(a["a"])({url:"upload/".concat(e,"/"),method:"DELETE"})}function l(e,t){return Object(a["a"])({url:"upload/".concat(e,"/"),method:"patch",data:t})}},"841c":function(e,t,r){"use strict";var a=r("d784"),o=r("825a"),n=r("1d80"),l=r("129f"),s=r("14c3");a("search",1,(function(e,t,r){return[function(t){var r=n(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var n=o(e),i=String(this),c=n.lastIndex;l(c,0)||(n.lastIndex=0);var d=s(n,i);return l(n.lastIndex,c)||(n.lastIndex=c),null===d?-1:d.index}]}))},9466:function(e,t,r){"use strict";var a=r("b069"),o=r.n(a);o.a},b069:function(e,t,r){},d928:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("订单管理")]),r("el-breadcrumb-item",[e._v("订单列表")])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{size:"mini",placeholder:"关键字搜索:订单/日期/客户/地址/备注"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary"},on:{click:e.clearnSearchText}},[e._v("清除")])],1),r("el-col",{attrs:{span:2}},[r("add-order")],1),r("el-col",{attrs:{span:6}},[r("date-search",{on:{dateSearchDate:e.dateSearchDate}})],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{},attrs:{data:e.handlePage(e.page,e.pagesize),border:"","show-summary":"","highlight-current-row":"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"60"}}),r("el-table-column",{attrs:{label:"订单编号",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.order_number))}})]}}])}),r("el-table-column",{attrs:{label:"客户名称",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.customer.lite_name))}})]}}])}),r("el-table-column",{attrs:{label:"下单日期",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.order_date))}})]}}])}),r("el-table-column",{attrs:{label:"订单交期",prop:"deliver_date",width:"100",align:"center"}}),r("el-table-column",{attrs:{label:"汇率",width:"70",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.ex_rate))])]}}])}),r("el-table-column",{attrs:{label:"订单金额($)",prop:"order_amount",width:"100",align:"center"}}),r("el-table-column",{attrs:{label:"出货地址",width:"300","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.ship_addr))}})]}}])}),r("el-table-column",{attrs:{label:"备注",width:"150","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"col-cont",domProps:{innerHTML:e._s(e.showDate(t.row.text))}})]}}])}),r("el-table-column",{attrs:{label:"业务",prop:"sales",width:"80",align:"center"}}),r("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{attrs:{size:"mini",clearable:"",disabled:""},model:{value:t.row.is_done,callback:function(r){e.$set(t.row,"is_done",r)},expression:"scope.row.is_done"}},e._l(e.Options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),r("el-table-column",{attrs:{label:"操作",fixed:"right",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(r){return e.handleClick(t.row)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[1,2,5,10],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},o=[],n=(r("4de4"),r("c975"),r("d81d"),r("fb6a"),r("45fc"),r("a434"),r("b64b"),r("ac1f"),r("5319"),r("841c"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-order"},[r("el-button",{attrs:{type:"primary"},on:{click:e.dialogStatus}},[e._v("新增订单")]),r("el-dialog",{attrs:{title:"新增订单",visible:e.dialogVisible,width:"96%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"addOrderForm",attrs:{model:e.orderData,"label-width":"80px",size:"mini",rules:e.addOrderFormRoles,"inline-message":""}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单编号",prop:"order_number"}},[r("el-input",{model:{value:e.orderData.order_number,callback:function(t){e.$set(e.orderData,"order_number",t)},expression:"orderData.order_number"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"客户名称"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.selectTest},model:{value:e.orderData.customer,callback:function(t){e.$set(e.orderData,"customer",t)},expression:"orderData.customer"}},e._l(e.customerData,(function(e){return r("el-option",{key:e.lite_name,attrs:{label:e.lite_name,value:e.lite_name}})})),1)],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"汇率",prop:"ex_rate"}},[r("el-input",{model:{value:e.orderData.ex_rate,callback:function(t){e.$set(e.orderData,"ex_rate",t)},expression:"orderData.ex_rate"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"状态"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.orderData.is_done,callback:function(t){e.$set(e.orderData,"is_done",t)},expression:"orderData.is_done"}},e._l(e.Orderoptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"下单日期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.orderData.order_date,callback:function(t){e.$set(e.orderData,"order_date",t)},expression:"orderData.order_date"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单交期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.orderData.deliver_date,callback:function(t){e.$set(e.orderData,"deliver_date",t)},expression:"orderData.deliver_date"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"金额"}},[r("el-input",{model:{value:e.orderData.order_amount,callback:function(t){e.$set(e.orderData,"order_amount",t)},expression:"orderData.order_amount"}})],1)],1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"出货地址"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.selectShipAddr},model:{value:e.orderData.ship_addr,callback:function(t){e.$set(e.orderData,"ship_addr",t)},expression:"orderData.ship_addr"}},e._l(e.customerAddr,(function(e){return r("el-option",{key:e.addr,attrs:{label:e.addr,value:e.addr}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{model:{value:e.orderData.text,callback:function(t){e.$set(e.orderData,"text",t)},expression:"orderData.text"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("add-model",{on:{hideOrderTable:e.dialogStatus2,getNewModelData:e.getNewModel}})],1),r("el-col",{attrs:{span:4}},[r("a-button",{attrs:{type:"primary"},on:{click:e.selectModel}},[e._v("select model")])],1)],1),r("order-model",{attrs:{modelData:e.newModelData,checkCulumns:1},on:{deleteNewModelRow:e.deleteModel,setSalePrice:e.getSalePrice}}),r("el-row",[r("el-col",{attrs:{span:8}},[r("upload-pic",{attrs:{number:e.orderData.order_number,owner:"order"},on:{sendPicUrl:e.getPicUrl}})],1),r("el-col",{attrs:{span:16}},[r("div",{staticClass:"order-img"},[r("img",{staticClass:"orderImg",attrs:{src:this.orderData.order_pic},on:{click:e.imgLook}})])])],1),r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addSubOrder()}}},[e._v("新增明细")]),r("el-table",{staticStyle:{width:"99.9%"},attrs:{data:e.subOrderData,"highlight-current-row":""}},[r("el-table-column",{attrs:{label:"产品名称",width:"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_name,callback:function(r){e.$set(t.row,"pro_name",r)},expression:"scope.row.pro_name"}}):r("span",[e._v(e._s(t.row.pro_name))])]}}])}),r("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-select",{attrs:{size:"mini",clearable:"",placeholder:"请选择"},model:{value:t.row.pro_item,callback:function(r){e.$set(t.row,"pro_item",r)},expression:"scope.row.pro_item"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):r("span",[e._v(e._s(e.options[t.row.pro_item-1].label))])]}}])}),r("el-table-column",{attrs:{label:"产品尺寸",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_size,callback:function(r){e.$set(t.row,"pro_size",r)},expression:"scope.row.pro_size"}}):r("span",[e._v(e._s(t.row.pro_size))])]}}])}),r("el-table-column",{attrs:{width:"250",label:"产品颜色",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("add-product-color",{attrs:{parentProColor:t,addColorBtn:e.childAddColorBtn},on:{getProColor:e.handleSelect,delProColor:e.delProColor}})]}}])}),r("el-table-column",{attrs:{label:"产品包装",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_pack,callback:function(r){e.$set(t.row,"pro_pack",r)},expression:"scope.row.pro_pack"}}):r("span",[e._v(e._s(t.row.pro_pack))])]}}])}),r("el-table-column",{attrs:{label:"详细说明",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini",type:"textarea",autosize:""},model:{value:t.row.pro_desc,callback:function(r){e.$set(t.row,"pro_desc",r)},expression:"scope.row.pro_desc"}}):r("span",[e._v(e._s(t.row.pro_desc))])]}}])}),r("el-table-column",{attrs:{label:"数量",prop:"pro_qt",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_qt,callback:function(r){e.$set(t.row,"pro_qt",r)},expression:"scope.row.pro_qt"}}):r("span",[e._v(e._s(t.row.pro_qt))])]}}])}),r("el-table-column",{attrs:{label:"单价($)",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},on:{blur:function(r){return e.subAmount(t.row)}},model:{value:t.row.pro_price,callback:function(r){e.$set(t.row,"pro_price",r)},expression:"scope.row.pro_price"}}):r("span",[e._v(e._s(t.row.pro_price))])]}}])}),r("el-table-column",{attrs:{label:"重量(g)",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_weight,callback:function(r){e.$set(t.row,"pro_weight",r)},expression:"scope.row.pro_weight"}}):r("span",[e._v(e._s(t.row.pro_weight))])]}}])}),r("el-table-column",{attrs:{label:"汇率",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.sub_ex_rate,callback:function(r){e.$set(t.row,"sub_ex_rate",r)},expression:"scope.row.sub_ex_rate"}}):r("span",[e._v(e._s(t.row.sub_ex_rate))])]}}])}),r("el-table-column",{attrs:{label:"金额($)",prop:"sub_amount",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.sub_amount,callback:function(r){e.$set(t.row,"sub_amount",r)},expression:"scope.row.sub_amount"}}):r("span",[e._v(e._s(t.row.sub_amount))])]}}])}),r("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.addSubOrderRow(t.row)}}},[e._v("新增")]),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.editSubOrderRow(t.row)}}},[e._v("修改")]),r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(r){return e.delSubOrderRow(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1),r("el-dialog",{attrs:{visible:e.imgdialogVisible,width:"96%"},on:{"update:visible":function(t){e.imgdialogVisible=t}}},[r("div",[r("img",{attrs:{src:this.orderData.order_pic,width:"99%"}})])]),r("a-drawer",{attrs:{visible:e.visible,width:"90%",height:"50%",placement:"top","body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[r("order-tomodel",{attrs:{selectingShow:!0},on:{getNewModelData:e.getNewModel}})],1)],1)}),l=[],s=(r("7db0"),r("4160"),r("d3b7"),r("1276"),r("159b"),r("b85c")),i=r("2909"),c=r("f6b0"),d=r("37e1"),u=r("4328"),p=r.n(u),b=r("f8b7"),m=r("685c"),f=r("2822"),h=r("4c60"),_=r("e290"),w=r("ee20"),g=r("7972"),v=r("e4e6"),D=r("cf32"),k={name:"AddOrder",components:{addProductColor:f["a"],uploadPic:h["a"],addModel:_["a"],modelTable:w["a"],selectModel:g["a"],orderTomodel:v["a"],orderModel:D["a"]},data:function(){return{newModelData:[],submitModelData:[],childAddColorBtn:!0,customerData:[],customerAddr:[],orderData:{order_number:"",customer:"",order_date:"",deliver_date:"",ex_rate:0,order_amount:0,ship_addr:"",text:"",order_pic:""},subOrderData:[],addOrderFormRoles:{order_number:[{required:!0,message:"请输入订单编号",trigger:"blur"}]},Orderoptions:[{value:0,label:"正常"},{value:1,label:"紧急"}],options:[{value:1,label:"硅胶"},{value:2,label:"五金"},{value:3,label:"USB"},{value:4,label:"移动电源"},{value:5,label:"其他"}],dialogVisible:!1,visible:!1,onSubmitStatus:!1,dialogImageUrl:"",imagedialogVisible:!1,disabled:!1,fileList:[],imgdialogVisible:!1,pic_id:""}},methods:{hideOrderTable:function(){this.dialogVisible=!1},imgLook:function(){this.imgdialogVisible=!0},getPicUrl:function(e){this.orderData.order_pic=e.url,this.pic_id=e.id},beforeRemove:function(){},handleRemove:function(e){},dialogStatus:function(e){this.dialogVisible=!this.dialogVisible,Object(d["b"])()},dialogStatus2:function(e){this.dialogVisible=e},getNewModel:function(e){this.visible=!1,this.dialogVisible=!0,this.newModelData.push(e)},getSalePrice:function(e){var t=Object(i["a"])(this.newModelData),r=t.find((function(t){return t.id===e.id}));r&&(r.sale_price=e.val,this.newModelData=t)},deleteModel:function(e){var t=Object(i["a"])(this.newModelData);this.newModelData=t.filter((function(t){return t.id!==e}))},sumOrderAmount:function(){var e,t=0,r=Object(s["a"])(this.subOrderData);try{for(r.s();!(e=r.n()).done;){var a=e.value;t+=1*a.sub_amount}}catch(o){r.e(o)}finally{r.f()}this.orderData.order_amount=t},beforeSubmitOrder:function(){var e=this,t=Object(i["a"])(this.newModelData);t.forEach((function(t){e.submitModelData.push({order_number:e.orderData.order_number,model:t.id,sale_price:t.sale_price})}))},onSubmit:function(){var e=this;this.beforeSubmitOrder(),this.sumOrderAmount();var t,r=Object(s["a"])(this.subOrderData);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.status=0}}catch(n){r.e(n)}finally{r.f()}if(this.orderData.order_number)if(window.sessionStorage.getItem("subtoken")){var o=new Promise((function(t,r){Object(b["j"])(e.orderData).then((function(a){e.submitModelData.forEach((function(e){Object(b["l"])(e).then((function(e){})).catch((function(e){r(e)}))})),""!==a.data.order_pic&&Object(m["c"])(e.pic_id,{order_number:a.data.order_number}).then((function(t){e.$notify({message:"创建成功",type:"success"})}));var o,l=Object(s["a"])(e.subOrderData);try{for(l.s();!(o=l.n()).done;){var i=o.value;Object(b["m"])(i).then((function(e){})).catch((function(t){var a=p.a.parse(t.response.request.response,{delimiter:","});e.responseMessage(a),r(a)}))}}catch(n){l.e(n)}finally{l.f()}t(a)})).catch((function(t){console.log(t.response.request);var a=p.a.parse(t.response.request.response,{delimiter:","});e.responseMessage(a),r(a)}))}));o.then((function(t){window.sessionStorage.removeItem("subtoken"),window.sessionStorage.setItem("order_number",t.data.order_number),e.$router.replace("orders/"+t.data.order_number+"/")}))}else this.$message.error("请勿重复提交,或刷新重试");else this.$message.error("请完整填写订单信息!")},responseMessage:function(e){this.$notify({title:"警告",message:e,position:"top-left"})},handleClose:function(e){var t=this;this.$confirm("请确认数据已保存!").then((function(r){e(),t.orderData={},t.subOrderData=[],t.fileList=[]})).catch((function(e){}))},delSubOrderRow:function(e,t){this.subOrderData.splice(e,1)},addSubOrder:function(){if(this.orderData.order_number){this.childAddColorBtn=!1;var e={pro_name:"",pro_item:1,pro_size:"",pro_color:"",pro_pack:"",pro_desc:"",pro_qt:0,pro_price:0,pro_weight:0,order_number:this.orderData.order_number,sub_ex_rate:this.orderData.ex_rate,sub_amount:0,status:1};this.subOrderData.push(e)}else this.$message.error("请完整填写订单信息!")},addSubOrderRow:function(e){this.childAddColorBtn=!1;var t={pro_name:"",pro_item:1,pro_size:"",pro_color:"",pro_pack:"",pro_desc:"",pro_qt:0,pro_price:0,pro_weight:0,order_number:this.orderData.order_number,sub_ex_rate:this.orderData.ex_rate,sub_amount:0,status:1};this.subOrderData.push(t)},editSubOrderRow:function(e){e.status=1},delProColor:function(e,t){var r="";this.subOrderData[t].pro_color.split("|").forEach((function(t,a){-1===t.indexOf(e)&&""!==t&&(r+=t+"|")})),this.subOrderData[t].pro_color=r},handleSelect:function(e,t){void 0===this.subOrderData[t].pro_color?this.subOrderData[t].pro_color=JSON.stringify(e)+"|":this.subOrderData[t].pro_color+=JSON.stringify(e)+"|"},subAmount:function(e){e.sub_amount=e.pro_price*e.pro_qt*1},selectTest:function(e){var t=this;!0===e&&Object(c["a"])().then((function(e){t.customerData=e.data}))},selectShipAddr:function(e){var t=this;!0===e&&Object(c["b"])().then((function(e){t.customerAddr=e.data.results}))},selectModel:function(){this.visible=!0,this.hideOrderTable()},onClose:function(){this.visible=!1,this.dialogVisible=!0}},created:function(){}},x=k,y=(r("9466"),r("2877")),O=Object(y["a"])(x,n,l,!1,null,"b6591896",null),S=O.exports,$=r("6681"),C={components:{AddOrder:S,dateSearch:$["a"]},data:function(){return{tableData:[],sliceTableData:[],count:0,pagesize:10,page:1,input1:"",select:"",Options:[{value:0,label:"正常"},{value:1,label:"紧急"}],multipleSelection:[],search:"",loading:!0}},methods:{handleClick:function(e){this.$store.state.order_number=e.order_number,window.sessionStorage.setItem("order_number",e.order_number),this.$router.push("orders/".concat(e.order_number,"/"))},handleDelete:function(e,t){var r=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(b["f"])(t.order_number,{is_delete:1}).then((function(a){r.tableData.splice(e,1),t.sub_orders.map((function(e){Object(b["i"])(e,{is_delete:1}).then((function(e){}))})),r.$message({type:"success",message:"删除成功!"})}))})).catch((function(){r.$message({type:"info",message:"删除失败!"})}))},handleSelectionChange:function(e){this.multipleSelection=e},dateSearchDate:function(e){var t=this;e?Object(b["b"])({start_date:e[0],end_date:e[1],argument:"order_date"}).then((function(e){t.tableData=e.data})):Object(b["b"])().then((function(e){t.tableData=e.data,t.count=e.data.length}))},handleSizeChange:function(e){this.pagesize=e,this.handlePage(this.page,e)},handleCurrentChange:function(e){this.page=e,this.handlePage(e,this.pagesize)},handlePage:function(e,t){var r=this.search;return r?this.tableData.filter((function(e){return Object.keys(e).some((function(t){return String(e[t]).toLowerCase().indexOf(r)>-1}))})).slice((e-1)*t,e*t*1):this.tableData.slice((e-1)*t,e*t*1)},showDate:function(e){return e+="",-1!==e.indexOf(this.search)&&""!==this.search?e.replace(this.search,'<font color="#ff4400">'+this.search+"</font>"):e},clearnSearchText:function(){this.search=null},getOrderList:function(){var e=this;Object(b["b"])().then((function(t){e.loading=!1,e.tableData=t.data.results,e.count=t.data.count})).catch((function(e){}))}},created:function(){this.getOrderList()}},M=C,z=Object(y["a"])(M,a,o,!1,null,"6312608f",null);t["default"]=z.exports}}]);