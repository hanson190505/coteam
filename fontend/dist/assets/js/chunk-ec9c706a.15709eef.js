(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec9c706a"],{"033e":function(e,t,r){},"5cc5":function(e,t,r){"use strict";var o=r("033e"),a=r.n(o);a.a},"995f":function(e,t,r){},aee6:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-detail"},[r("el-card",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",{attrs:{to:{path:"/orders"}}},[e._v("订单管理")]),r("el-breadcrumb-item",[e._v("订单明细")])],1),r("el-form",{ref:"form",attrs:{model:e.orderdetail,"label-width":"80px",size:"mini","inline-message":""}},[r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单编号",prop:"order_number"}},[r("el-input",{attrs:{disabled:""},model:{value:e.orderdetail.order_number,callback:function(t){e.$set(e.orderdetail,"order_number",t)},expression:"orderdetail.order_number"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"客户名称"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:e.formdisabl},on:{"visible-change":e.selectTest},model:{value:e.orderdetail.customer.lite_name,callback:function(t){e.$set(e.orderdetail.customer,"lite_name",t)},expression:"orderdetail.customer.lite_name"}},e._l(e.customerData,(function(e){return r("el-option",{key:e.lite_name,attrs:{label:e.lite_name,value:e.lite_name}})})),1)],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"汇率",prop:"ex_rate"}},[r("el-input",{attrs:{disabled:e.formdisabl},model:{value:e.orderdetail.ex_rate,callback:function(t){e.$set(e.orderdetail,"ex_rate",t)},expression:"orderdetail.ex_rate"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"完成状态",prop:"is_done"}},[r("el-select",{attrs:{size:"mini",clearable:"",disabled:e.formdisabl},model:{value:e.orderdetail.is_done,callback:function(t){e.$set(e.orderdetail,"is_done",t)},expression:"orderdetail.is_done"}},e._l(e.Options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"下单日期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:e.formdisabl},model:{value:e.orderdetail.order_date,callback:function(t){e.$set(e.orderdetail,"order_date",t)},expression:"orderdetail.order_date"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单交期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:e.formdisabl},model:{value:e.orderdetail.deliver_date,callback:function(t){e.$set(e.orderdetail,"deliver_date",t)},expression:"orderdetail.deliver_date"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"金额($)"}},[r("el-input",{attrs:{disabled:""},model:{value:e.orderdetail.order_amount,callback:function(t){e.$set(e.orderdetail,"order_amount",t)},expression:"orderdetail.order_amount"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"金额(¥)"}},[r("el-input",{attrs:{disabled:""},model:{value:e.rmbOrderAmount,callback:function(t){e.rmbOrderAmount=t},expression:"rmbOrderAmount"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"出货地址"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:e.formdisabl},on:{"visible-change":e.selectShipAddr},model:{value:e.orderdetail.ship_addr,callback:function(t){e.$set(e.orderdetail,"ship_addr",t)},expression:"orderdetail.ship_addr"}},e._l(e.customerAddr,(function(e){return r("el-option",{key:e.addr,attrs:{label:e.addr,value:e.addr}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{attrs:{disabled:e.formdisabl},model:{value:e.orderdetail.text,callback:function(t){e.$set(e.orderdetail,"text",t)},expression:"orderdetail.text"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("add-model",{on:{hideOrderTable:e.dialogStatus2,getNewModelData:e.getNewModel}})],1),r("el-col",{attrs:{span:4}},[r("a-button",{attrs:{type:"primary"},on:{click:e.selectModel}},[e._v("select model")])],1)],1),r("order-model",{attrs:{modelData:e.newModelData,checkCulumns:e.orderModelColumn},on:{deleteNewModelRow:e.deleteModel,setSalePrice:e.getSalePrice}}),r("el-row",[r("el-col",{attrs:{span:18}},[r("upload-pic",{attrs:{number:e.orderdetail.order_number,owner:"order"},on:{sendPicUrl:e.getPicUrl}}),e._l(e.orderdetail.order_image,(function(t,o){return r("div",{key:o},[r("span",[e._v(e._s(t))])])}))],2),r("el-col",{attrs:{span:6}},[r("pic-carousel",{ref:"picCar",attrs:{proPicUrl:e.picUrl}})],1)],1)],1),r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editOrder,expression:"editOrder"}],attrs:{type:"primary"},on:{click:e.editOrderDetail}},[e._v("修改订单")]),r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.saveOrder,expression:"saveOrder"}],attrs:{type:"warning"},on:{click:e.saveOrderDetail}},[e._v("保存订单")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addSubOrderRow}},[e._v("新增明细")]),r("el-button",{attrs:{type:"primary"},on:{click:e.purchaseDetail}},[e._v("采购详情")]),r("el-button",{attrs:{type:"primary"},on:{click:e.shipDetail}},[e._v("出货详情")]),r("el-table",{staticStyle:{width:"99.9%"},attrs:{data:e.suborderdetail,"show-summary":"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"产品名称",width:"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_name,callback:function(r){e.$set(t.row,"pro_name",r)},expression:"scope.row.pro_name"}}):r("span",[e._v(e._s(t.row.pro_name))])]}}])}),r("el-table-column",{attrs:{label:"类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-select",{attrs:{size:"mini",clearable:"",placeholder:"请选择"},model:{value:t.row.pro_item,callback:function(r){e.$set(t.row,"pro_item",r)},expression:"scope.row.pro_item"}},e._l(e.proOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):r("span",[e._v(e._s(e.proOptions[t.row.pro_item-1].label))])]}}])}),r("el-table-column",{attrs:{label:"产品尺寸",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_size,callback:function(r){e.$set(t.row,"pro_size",r)},expression:"scope.row.pro_size"}}):r("span",[e._v(e._s(t.row.pro_size))])]}}])}),r("el-table-column",{attrs:{label:"产品颜色",width:"200",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("add-product-color",{attrs:{parentProColor:t,addColorBtn:e.childAddColorBtn},on:{getProColor:e.handleSelect,delProColor:e.delProColor}})]}}])}),r("el-table-column",{attrs:{label:"产品包装",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_pack,callback:function(r){e.$set(t.row,"pro_pack",r)},expression:"scope.row.pro_pack"}}):r("span",[e._v(e._s(t.row.pro_pack))])]}}])}),r("el-table-column",{attrs:{label:"描述",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_desc,callback:function(r){e.$set(t.row,"pro_desc",r)},expression:"scope.row.pro_desc"}}):r("span",[e._v(e._s(t.row.pro_desc))])]}}])}),r("el-table-column",{attrs:{label:"数量",prop:"pro_qt",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_qt,callback:function(r){e.$set(t.row,"pro_qt",r)},expression:"scope.row.pro_qt"}}):r("span",[e._v(e._s(t.row.pro_qt))])]}}])}),r("el-table-column",{attrs:{label:"单价($)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},on:{blur:function(r){return e.subAmount(t.row)}},model:{value:t.row.pro_price,callback:function(r){e.$set(t.row,"pro_price",r)},expression:"scope.row.pro_price"}}):r("span",[e._v(e._s(t.row.pro_price))])]}}])}),r("el-table-column",{attrs:{label:"重量(g)",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_weight,callback:function(r){e.$set(t.row,"pro_weight",r)},expression:"scope.row.pro_weight"}}):r("span",[e._v(e._s(t.row.pro_weight))])]}}])}),r("el-table-column",{attrs:{label:"金额($)",prop:"sub_amount",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.sub_amount,callback:function(r){e.$set(t.row,"sub_amount",r)},expression:"scope.row.sub_amount"}}):r("span",[e._v(e._s(e._f("toThousandFilter")(t.row.sub_amount)))])]}}])}),r("el-table-column",{attrs:{label:"操作",width:"120",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editOrder,expression:"editOrder"}],attrs:{type:"text"},on:{click:function(r){return e.editSubOrderRow(t.$index,t.row)}}},[e._v("修改")]),r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(r){return e.delSubOrderRow(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("a-drawer",{attrs:{visible:e.visible,width:"90%",height:"50%",placement:"top","body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[r("order-tomodel",{attrs:{selectingShow:!0},on:{getNewModelData:e.getNewModel}})],1),r("el-button",{attrs:{type:"primary"},on:{click:e.firstSaveSuborder}},[e._v("保存订单明细修改")]),r("el-dialog",{attrs:{visible:e.imgdialogVisible,width:"96%"},on:{"update:visible":function(t){e.imgdialogVisible=t}}},[r("div",[r("img",{attrs:{src:e.orderdetail.order_pic,width:"99%"}})])])],1)],1)},a=[],l=(r("4de4"),r("7db0"),r("4160"),r("c975"),r("d81d"),r("a434"),r("ac1f"),r("1276"),r("159b"),r("2909")),i=r("b85c"),s=r("f6b0"),n=r("37e1"),d=r("f8b7"),c=r("2822"),u=r("4c60"),p=r("cf32"),m=r("e290"),b=r("e4e6"),f=r("7972"),_=r("f0ad"),h={name:"OrderDetail",components:{addProductColor:c["a"],uploadPic:u["a"],orderModel:p["a"],addModel:m["a"],orderTomodel:b["a"],selectModel:f["a"],picCarousel:_["a"]},data:function(){return{orderModelColumn:1,newModelData:[],submitModelData:[],customerAddr:[],childAddColorBtn:!0,btn:"btn",formdisabl:!0,orderdetail:{order_number:"",customer:"",order_date:"",deliver_date:"",ex_rate:0,order_amount:0,ship_addr:"",text:"",order_pic:""},actionUrl:"https://chinagoodgifts.com/api/upload/",rmbOrderAmount:0,suborderdetail:[],customerData:[],visible:!1,editSubOrder:!0,saveSubOrder:!1,editOrder:!0,saveOrder:!1,proOptions:[{value:1,label:"硅胶"},{value:2,label:"五金"},{value:3,label:"USB"},{value:4,label:"移动电源"},{value:5,label:"其他"}],Options:[{value:0,label:"正常"},{value:1,label:"紧急"}],fileList:[],picUrl:[],getPicUrl:function(e){},imgdialogVisible:!1,uploadData:{token:window.sessionStorage.getItem("token")}}},computed:{},methods:{selectTest:function(e){var t=this;!0===e&&Object(s["a"])().then((function(e){t.customerData=e.data}))},editOrderDetail:function(){this.formdisabl=!1,this.editOrder=!1,this.saveOrder=!0,this.uploadbtnstatus=!1,console.log("修改订单")},handleRemove:function(){},beforeRemove:function(){},uploadSuccess:function(e){this.uploadbtnstatus=!0,this.orderdetail.order_pic="https://chinagoodgifts.com/image/"+e.file},handlebeforeupload:function(){},imgLook:function(){this.imgdialogVisible=!0},saveOrderDetail:function(){var e=this;this.formdisabl=!0,this.editOrder=!0,this.saveOrder=!1,this.beforeSubmitOrder(),Object(d["f"])(this.orderdetail.order_number,"",this.orderdetail).then((function(t){e.$message("订单修改成功"),e.submitModelData.forEach((function(t){t.sale_price?Object(d["k"])(t).then((function(e){})).catch((function(e){})):e.$message("请输入模具销售价")}))})).catch((function(t){e.$message("网络错误,刷新重试")}))},sumOrderAmount:function(){var e,t=0,r=Object(i["a"])(this.suborderdetail);try{for(r.s();!(e=r.n()).done;){var o=e.value;t+=1*o.sub_amount}}catch(a){r.e(a)}finally{r.f()}this.orderdetail.order_amount=t,this.rmbOrderAmount=t*this.orderdetail.ex_rate*1},subAmount:function(e){e.sub_amount=e.pro_price*e.pro_qt*1},firstSaveSuborder:function(){var e=this;this.sumOrderAmount(),window.sessionStorage.getItem("subtoken")?this.suborderdetail.forEach((function(t){t.hasOwnProperty("id")?1===t.status&&Object(d["h"])(t.id,"",t).then((function(){t.status=0,e.saveOrderDetail()})):(t.status=0,Object(d["l"])(t).then((function(t){e.saveOrderDetail()})).catch((function(t){var r=e.$createElement;e.$notify({title:"警告",message:r("i",{style:"color: teal"},"网络错误,请刷新重试")})})))})):this.$message.error("请勿重复提交,或刷新重试"),window.sessionStorage.removeItem("subtoken")},addSubOrderRow:function(e){this.childAddColorBtn=!1;var t={pro_name:"",pro_item:1,pro_size:"",pro_color:"",pro_pack:"",pro_desc:"",pro_qt:0,pro_price:0,pro_weight:0,order_number:this.orderdetail.order_number,sub_amount:0,status:1};this.suborderdetail.push(t)},editSubOrderRow:function(e,t){t.status=1,this.childAddColorBtn=!1},delSubOrderRow:function(e,t){var r=this;t.hasOwnProperty("id")?this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(e),console.log(t),r.suborderdetail.splice(e,1),Object(d["h"])(t.id,"",{is_delete:1}).then((function(e){r.$message({type:"success",message:"删除成功!"})}))})).catch((function(){r.$message({type:"info",message:"删除失败!"})})):this.$confirm("数据未保存,确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.suborderdetail.splice(e,1),r.$message({type:"success",message:"删除成功!"})})).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},purchaseDetail:function(){},shipDetail:function(){},delProColor:function(e,t){var r="";this.suborderdetail[t].pro_color.split("|").forEach((function(t,o){-1===t.indexOf(e)&&""!==t&&(r+=t+"|")})),this.suborderdetail[t].pro_color=r},handleSelect:function(e,t){void 0===this.suborderdetail[t].pro_color?this.suborderdetail[t].pro_color=JSON.stringify(e)+"|":this.suborderdetail[t].pro_color+=JSON.stringify(e)+"|"},selectShipAddr:function(e){var t=this;!0===e&&Object(s["b"])().then((function(e){t.customerAddr=e.data.results}))},beforeSubmitOrder:function(){var e=this,t=Object(l["a"])(this.newModelData);t.forEach((function(t){e.submitModelData.push({order_number:e.orderdetail.order_number,model:t.id,sale_price:t.sale_price})}))},hideOrderTable:function(){this.dialogVisible=!1},selectModel:function(){this.visible=!0,this.hideOrderTable()},onClose:function(){this.visible=!1,this.dialogVisible=!0},dialogStatus2:function(e){this.dialogVisible=e},getNewModel:function(e){this.visible=!1,this.dialogVisible=!0,this.orderModelColumn=1,this.newModelData.push(e)},getSalePrice:function(e){var t=Object(l["a"])(this.newModelData),r=t.find((function(t){return t.id===e.id}));r&&(r.sale_price=e.val,this.newModelData=t)},deleteModel:function(e){var t=Object(l["a"])(this.newModelData);this.newModelData=t.filter((function(t){return t.id!==e}))}},beforeCreate:function(){var e=this,t=window.sessionStorage.getItem("order_number");Object(d["a"])(t).then((function(r){e.orderdetail=r.data,e.picUrl=r.data.order_image.map((function(e){return"https://chinagoodgifts.com/image/"+e})),Object(d["d"])({order_number:r.data.order_number}).then((function(t){e.orderModelColumn=2,e.newModelData=t.data})),Object(d["e"])({order_number:t}).then((function(t){e.suborderdetail=t.data,t.data.forEach((function(e){e.status=0})),t.data.length}))})),Object(n["b"])()}},w=h,v=(r("eae3"),r("2877")),g=Object(v["a"])(w,o,a,!1,null,"686aede5",null);t["default"]=g.exports},eae3:function(e,t,r){"use strict";var o=r("995f"),a=r.n(o);a.a},f0ad:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"block"},[r("el-carousel",{attrs:{trigger:"click",height:"150px"}},e._l(e.proPicUrl,(function(e,t){return r("el-carousel-item",{key:t},[r("img",{staticClass:"car-img",attrs:{src:e}})])})),1)],1)},a=[],l={name:"picCarousel",data:function(){return{picUrlList:[]}},props:{proPicUrl:Array},methods:{}},i=l,s=(r("5cc5"),r("2877")),n=Object(s["a"])(i,o,a,!1,null,null,null);t["a"]=n.exports}}]);