(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-327300cb"],{"033e":function(e,t,r){},"20ec6":function(e,t,r){"use strict";var a=r("eedc"),o=r.n(a);o.a},"3c4d":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return u}));var a=r("6128"),o=r("4328"),l=r.n(o);function i(e){return Object(a["a"])({url:"packs/",params:e})}function n(e){return Object(a["a"])({url:"packs/".concat(e,"/")})}function s(e){return Object(a["a"])({url:"packs/",method:"post",data:l.a.stringify(e)})}function d(e){return Object(a["a"])({url:"product_to_pack/",params:e})}function u(e){return Object(a["a"])({url:"product_to_pack/",method:"post",data:l.a.stringify(e)})}},4369:function(e,t,r){},"4c60":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.picdialogVisible=!0}}},[e._v("上传图片")]),r("el-dialog",{attrs:{title:"",visible:e.picdialogVisible,width:"50%","append-to-body":!0},on:{"update:visible":function(t){e.picdialogVisible=t}}},[r("el-form",{attrs:{"label-width":"80px"}},[r("el-form-item",{attrs:{label:"首页"}},[r("el-select",{attrs:{placeholder:"",clearable:""},model:{value:e.uploadData.is_home,callback:function(t){e.$set(e.uploadData,"is_home",t)},expression:"uploadData.is_home"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"首页顺序"}},[r("el-input",{model:{value:e.uploadData.home_index,callback:function(t){e.$set(e.uploadData,"home_index",t)},expression:"uploadData.home_index"}})],1),r("el-form-item",{attrs:{label:"banner"}},[r("el-select",{attrs:{placeholder:"",clearable:""},model:{value:e.uploadData.is_banner,callback:function(t){e.$set(e.uploadData,"is_banner",t)},expression:"uploadData.is_banner"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"cover"}},[r("el-select",{attrs:{placeholder:"",clearable:""},model:{value:e.uploadData.is_cover,callback:function(t){e.$set(e.uploadData,"is_cover",t)},expression:"uploadData.is_cover"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"alt"}},[r("el-input",{model:{value:e.uploadData.image_alt,callback:function(t){e.$set(e.uploadData,"image_alt",t)},expression:"uploadData.image_alt"}})],1),r("el-form-item",{attrs:{label:"所属产品"}},[r("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择"},on:{"visible-change":e.productSelect},model:{value:e.uploadData.pro_number,callback:function(t){e.$set(e.uploadData,"pro_number",t)},expression:"uploadData.pro_number"}},e._l(e.productDataSelect,(function(t){return r("el-option",{key:t.id,attrs:{label:t.pro_number,value:t.id}},[r("span",[e._v(e._s(t.sub_type))]),e._v("- "),r("span",[e._v(e._s(t.pro_number))]),e._v("- "),r("span",[e._v(e._s(t.pro_name))])])})),1)],1),r("el-form-item",{attrs:{label:"所属包装"}},[r("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择"},on:{"visible-change":e.packNumberSelect},model:{value:e.uploadData.pack_number,callback:function(t){e.$set(e.uploadData,"pack_number",t)},expression:"uploadData.pack_number"}},e._l(e.packDataSelect,(function(t){return r("el-option",{key:t.id,attrs:{label:t.pack_number,value:t.id}},[r("span",[e._v(e._s(t.pack_number))]),e._v("- "),r("span",[e._v(e._s(t.size))]),e._v("- "),r("span",[e._v(e._s(t.material))])])})),1)],1),r("el-form-item",{attrs:{label:"所属订单"}},[r("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择"},on:{"visible-change":e.orderNumberSelect},model:{value:e.uploadData.order_number,callback:function(t){e.$set(e.uploadData,"order_number",t)},expression:"uploadData.order_number"}},e._l(e.orderDataSelect,(function(t){return r("el-option",{key:t.id,attrs:{label:t.order_number,value:t.id}},[r("span",[e._v(e._s(t.order_number)+"-"+e._s(t.customer.lite_name))])])})),1)],1)],1),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.actionUrl,"on-success":e.uploadSuccess,"file-list":e.fileList,limit:1,data:e.uploadData,headers:e.myheaders,accept:"image/jpg, image/jpeg, image/png, image/jpf","auto-upload":!1,"on-exceed":e.handleExceed}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.uploadBtn}},[e._v("上传到服务器")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1)],1)},o=[],l=(r("a9e3"),r("4c79")),i=r("3c4d"),n=r("f8b7"),s={name:"uploadPic",props:{owner:{type:String,default:"public"},index:{type:Number,default:99},number:{type:String,default:"default"}},data:function(){return{picdialogVisible:!1,actionUrl:"https://chinagoodgifts.com/api/upload/",fileList:[],uploadData:{owner:this.owner,number:this.number},myheaders:{authorization:window.localStorage.getItem("token")},options:[{value:"0",label:"否"},{value:"1",label:"是"}],productDataSelect:[],packDataSelect:[],orderDataSelect:[]}},methods:{productSelect:function(e){var t=this;!0===e&&Object(l["c"])().then((function(e){t.productDataSelect=e.data.results}))},packNumberSelect:function(e){var t=this;!0===e&&Object(i["b"])().then((function(e){t.packDataSelect=e.data.results}))},orderNumberSelect:function(e){var t=this;!0===e&&Object(n["b"])().then((function(e){t.orderDataSelect=e.data.results}))},uploadSuccess:function(e){switch(e.status){case 1e3:this.$message("上传成功"),this.$emit("sendPicUrl",{url:"https://chinagoodgifts.com/image/"+e.file,index:this.index,id:e.id});break;case 1001:this.$message.error("图片尺寸太大,请选择500kb以下的图片");break;case 1002:this.$message.error("非法的文件格式,或图片已损坏");break;case 1003:this.$message("找到相同的图片"),this.$emit("sendPicUrl",{url:"https://chinagoodgifts.com/image/"+e.file,index:this.index,id:e.id});default:break}},handleExceed:function(){this.$message.error("单次只能上传一张图片")},uploadBtn:function(){void 0===this.uploadData.home_index&&(this.uploadData.home_index=0),void 0===this.uploadData.is_home&&(this.uploadData.is_home=0),void 0===this.uploadData.is_banner&&(this.uploadData.is_banner=0),""===this.number?this.$message.error("请完整填写订单信息!"):(this.uploadData.number=this.number,this.$refs.upload.submit())}}},d=s,u=r("2877"),c=Object(u["a"])(d,a,o,!1,null,null,null);t["a"]=c.exports},"4c79":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"g",(function(){return n})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"h",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return p})),r.d(t,"f",(function(){return m}));var a=r("6128"),o=r("4328"),l=r.n(o);r("2b0e");Object.prototype.hasOwnProperty;function i(e){return Object(a["a"])({url:"product_type/",params:e})}function n(e){return Object(a["a"])({url:"product_type/",method:"post",data:l.a.stringify(e)})}function s(e,t){return Object(a["a"])({url:"product_type/".concat(e,"/"),method:"patch",data:l.a.stringify(t)})}function d(e){return Object(a["a"])({url:"products/",params:e})}function u(e){return Object(a["a"])({url:"products/",method:"post",data:l.a.stringify(e)})}function c(e,t){return Object(a["a"])({url:"products/".concat(e,"/"),method:"patch",data:l.a.stringify(t)})}function p(e){return Object(a["a"])({url:"product_text/",params:e})}function m(e){return Object(a["a"])({url:"product_text/",method:"post",data:l.a.stringify(e)})}},"5cc5":function(e,t,r){"use strict";var a=r("033e"),o=r.n(a);o.a},a9e1:function(e,t,r){"use strict";var a=r("4369"),o=r.n(a);o.a},aee6:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-detail"},[r("el-card",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",{attrs:{to:{path:"/orders"}}},[e._v("订单管理")]),r("el-breadcrumb-item",[e._v("订单明细")])],1),r("el-form",{ref:"form",attrs:{model:e.orderdetail,"label-width":"80px",size:"mini","inline-message":""}},[r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单编号",prop:"order_number"}},[r("el-input",{attrs:{disabled:""},model:{value:e.orderdetail.order_number,callback:function(t){e.$set(e.orderdetail,"order_number",t)},expression:"orderdetail.order_number"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"客户名称"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:e.formdisabl},on:{"visible-change":e.selectTest},model:{value:e.orderdetail.customer.lite_name,callback:function(t){e.$set(e.orderdetail.customer,"lite_name",t)},expression:"orderdetail.customer.lite_name"}},e._l(e.customerData,(function(e){return r("el-option",{key:e.lite_name,attrs:{label:e.lite_name,value:e.lite_name}})})),1)],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"汇率",prop:"ex_rate"}},[r("el-input",{attrs:{disabled:e.formdisabl},model:{value:e.orderdetail.ex_rate,callback:function(t){e.$set(e.orderdetail,"ex_rate",t)},expression:"orderdetail.ex_rate"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"完成状态",prop:"is_done"}},[r("el-select",{attrs:{size:"mini",clearable:"",disabled:e.formdisabl},model:{value:e.orderdetail.is_done,callback:function(t){e.$set(e.orderdetail,"is_done",t)},expression:"orderdetail.is_done"}},e._l(e.Options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"下单日期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:e.formdisabl},model:{value:e.orderdetail.order_date,callback:function(t){e.$set(e.orderdetail,"order_date",t)},expression:"orderdetail.order_date"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单交期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:e.formdisabl},model:{value:e.orderdetail.deliver_date,callback:function(t){e.$set(e.orderdetail,"deliver_date",t)},expression:"orderdetail.deliver_date"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"金额($)"}},[r("el-input",{attrs:{disabled:""},model:{value:e.orderdetail.order_amount,callback:function(t){e.$set(e.orderdetail,"order_amount",t)},expression:"orderdetail.order_amount"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{label:"金额(¥)"}},[r("el-input",{attrs:{disabled:""},model:{value:e.rmbOrderAmount,callback:function(t){e.rmbOrderAmount=t},expression:"rmbOrderAmount"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"出货地址"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:e.formdisabl},on:{"visible-change":e.selectShipAddr},model:{value:e.orderdetail.ship_addr,callback:function(t){e.$set(e.orderdetail,"ship_addr",t)},expression:"orderdetail.ship_addr"}},e._l(e.customerAddr,(function(e){return r("el-option",{key:e.addr,attrs:{label:e.addr,value:e.addr}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{attrs:{disabled:e.formdisabl},model:{value:e.orderdetail.text,callback:function(t){e.$set(e.orderdetail,"text",t)},expression:"orderdetail.text"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("add-model",{on:{hideOrderTable:e.dialogStatus2,getNewModelData:e.getNewModel}})],1),r("el-col",{attrs:{span:4}},[r("a-button",{attrs:{type:"primary"},on:{click:e.selectModel}},[e._v("select model")])],1)],1),r("order-model",{attrs:{modelData:e.newModelData,checkCulumns:e.orderModelColumn},on:{deleteNewModelRow:e.deleteModel,setSalePrice:e.getSalePrice}}),r("add-order-model",{attrs:{visible:e.addOrderModelVisible,addOrderModelData:e.addOrderModelData},on:{pushModelData:e.pushModelData,delNewAddModel:e.delNewAddModel}}),r("el-row",[r("el-col",{attrs:{span:18}},[r("upload-pic",{attrs:{number:e.orderdetail.order_number,owner:"order"},on:{sendPicUrl:e.getPicUrl}}),e._l(e.orderdetail.order_image,(function(t,a){return r("div",{key:a},[r("span",[e._v(e._s(t))])])}))],2),r("el-col",{attrs:{span:6}},[r("pic-carousel",{ref:"picCar",attrs:{proPicUrl:e.picUrl}})],1)],1)],1),r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editOrder,expression:"editOrder"}],attrs:{type:"primary"},on:{click:e.editOrderDetail}},[e._v("修改订单")]),r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.saveOrder,expression:"saveOrder"}],attrs:{type:"warning"},on:{click:e.saveOrderDetail}},[e._v("保存订单")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addSubOrderRow}},[e._v("新增明细")]),r("el-button",{attrs:{type:"primary"},on:{click:e.purchaseDetail}},[e._v("采购详情")]),r("el-button",{attrs:{type:"primary"},on:{click:e.shipDetail}},[e._v("出货详情")]),r("el-table",{staticStyle:{width:"99.9%"},attrs:{data:e.suborderdetail,"show-summary":"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"产品名称",width:"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_name,callback:function(r){e.$set(t.row,"pro_name",r)},expression:"scope.row.pro_name"}}):r("span",[e._v(e._s(t.row.pro_name))])]}}])}),r("el-table-column",{attrs:{label:"类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-select",{attrs:{size:"mini",clearable:"",placeholder:"请选择"},model:{value:t.row.pro_item,callback:function(r){e.$set(t.row,"pro_item",r)},expression:"scope.row.pro_item"}},e._l(e.proOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):r("span",[e._v(e._s(e.proOptions[t.row.pro_item-1].label))])]}}])}),r("el-table-column",{attrs:{label:"产品尺寸",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_size,callback:function(r){e.$set(t.row,"pro_size",r)},expression:"scope.row.pro_size"}}):r("span",[e._v(e._s(t.row.pro_size))])]}}])}),r("el-table-column",{attrs:{label:"产品颜色",width:"200",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("add-product-color",{attrs:{parentProColor:t,addColorBtn:e.childAddColorBtn},on:{getProColor:e.handleSelect,delProColor:e.delProColor}})]}}])}),r("el-table-column",{attrs:{label:"产品包装",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_pack,callback:function(r){e.$set(t.row,"pro_pack",r)},expression:"scope.row.pro_pack"}}):r("span",[e._v(e._s(t.row.pro_pack))])]}}])}),r("el-table-column",{attrs:{label:"描述",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_desc,callback:function(r){e.$set(t.row,"pro_desc",r)},expression:"scope.row.pro_desc"}}):r("span",[e._v(e._s(t.row.pro_desc))])]}}])}),r("el-table-column",{attrs:{label:"数量",prop:"pro_qt",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_qt,callback:function(r){e.$set(t.row,"pro_qt",r)},expression:"scope.row.pro_qt"}}):r("span",[e._v(e._s(t.row.pro_qt))])]}}])}),r("el-table-column",{attrs:{label:"单价($)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},on:{blur:function(r){return e.subAmount(t.row)}},model:{value:t.row.pro_price,callback:function(r){e.$set(t.row,"pro_price",r)},expression:"scope.row.pro_price"}}):r("span",[e._v(e._s(t.row.pro_price))])]}}])}),r("el-table-column",{attrs:{label:"重量(g)",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.pro_weight,callback:function(r){e.$set(t.row,"pro_weight",r)},expression:"scope.row.pro_weight"}}):r("span",[e._v(e._s(t.row.pro_weight))])]}}])}),r("el-table-column",{attrs:{label:"金额($)",prop:"sub_amount",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.status?r("el-input",{attrs:{size:"mini"},model:{value:t.row.sub_amount,callback:function(r){e.$set(t.row,"sub_amount",r)},expression:"scope.row.sub_amount"}}):r("span",[e._v(e._s(e._f("toThousandFilter")(t.row.sub_amount)))])]}}])}),r("el-table-column",{attrs:{label:"操作",width:"120",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editOrder,expression:"editOrder"}],attrs:{type:"text"},on:{click:function(r){return e.editSubOrderRow(t.$index,t.row)}}},[e._v("修改")]),r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(r){return e.delSubOrderRow(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("a-drawer",{attrs:{visible:e.visible,width:"90%",height:"50%",placement:"top","body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[r("model-table",{ref:"modelref",attrs:{selectingShow:!0},on:{getNewModelData:e.getNewModel}})],1),r("el-button",{attrs:{type:"primary"},on:{click:e.firstSaveSuborder}},[e._v("保存订单明细修改")]),r("el-dialog",{attrs:{visible:e.imgdialogVisible,width:"96%"},on:{"update:visible":function(t){e.imgdialogVisible=t}}},[r("div",[r("img",{attrs:{src:e.orderdetail.order_pic,width:"99%"}})])])],1)],1)},o=[],l=(r("4de4"),r("7db0"),r("4160"),r("c975"),r("d81d"),r("a434"),r("d3b7"),r("ac1f"),r("1276"),r("159b"),r("2909")),i=r("b85c"),n=r("f6b0"),s=r("37e1"),d=r("f8b7"),u=r("2822"),c=r("4c60"),p=r("cf32"),m=r("e290"),b=r("e4e6"),f=r("7972"),h=r("ee20"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-table",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{columns:e.columns,rowKey:"id","data-source":e.addOrderModelData,pagination:{size:"small"},bordered:"",size:"small"},scopedSlots:e._u([{key:"sale_price",fn:function(t,a,o){return[r("a-input",{model:{value:a.sale_price,callback:function(t){e.$set(a,"sale_price",t)},expression:"record.sale_price"}})]}},{key:"operation",fn:function(t,a,o){return[r("div",{staticClass:"editable-row-operations"},[r("span",[r("a",{on:{click:function(){return e.save(a.id,o)}}},[e._v("Save")])]),r("span",[r("a",{on:{click:function(){return e.onDelete(a.id,o)}}},[e._v("Delete")])])])]}}])})],1)},v=[],w=[{title:"供应商",dataIndex:"supplier",width:"8%",scopedSlots:{customRender:"supplier"}},{title:"编号",dataIndex:"number",width:"10%",scopedSlots:{customRender:"number"}},{title:"构造",dataIndex:"construct",width:"5%",scopedSlots:{customRender:"construct"}},{title:"生产日期",dataIndex:"pro_date",width:"10%",scopedSlots:{customRender:"pro_date"}},{title:"采购单价",dataIndex:"price",width:"8%",scopedSlots:{customRender:"price"}},{title:"销售单价($)",dataIndex:"sale_price",width:"13%",scopedSlots:{customRender:"sale_price"}},{title:"备注",dataIndex:"remarks",width:"15%",scopedSlots:{customRender:"remarks"}},{title:"opration",dataIndex:"opration",scopedSlots:{customRender:"operation"}}],g={props:{visible:{type:Boolean,default:!1},addOrderModelData:{type:Array,default:[]}},data:function(){return{editingKey:"",editingRow:0,salePrice:0,columns:w}},mounted:function(){},computed:{},methods:{save:function(e,t){var r=this,a=this.addOrderModelData[t].sale_price,o=window.sessionStorage.getItem("order_number"),l={};0===a?this.$message.error("请输入模具销售单价"):(l.sale_price=a,l.order_number=o,l.model=e,Object(d["l"])(l).then((function(t){r.$message.success("模具添加成功"),r.$emit("pushModelData"),r.$emit("delNewAddModel",e)})))},onDelete:function(e,t){this.$emit("delNewAddModel",e)}}},O=g,k=(r("a9e1"),r("2877")),y=Object(k["a"])(O,_,v,!1,null,"4511018d",null),D=y.exports,x=r("f0ad"),S={name:"OrderDetail",components:{addProductColor:u["a"],uploadPic:c["a"],orderModel:p["a"],addModel:m["a"],orderTomodel:b["a"],selectModel:f["a"],modelTable:h["a"],addOrderModel:D,picCarousel:x["a"]},data:function(){return{orderModelColumn:1,newModelData:[],submitModelData:[],customerAddr:[],childAddColorBtn:!0,btn:"btn",formdisabl:!0,orderdetail:{order_number:"",customer:"",order_date:"",deliver_date:"",ex_rate:0,order_amount:0,ship_addr:"",text:"",order_pic:""},actionUrl:"https://chinagoodgifts.com/api/upload/",rmbOrderAmount:0,suborderdetail:[],customerData:[],visible:!1,addOrderModelVisible:!1,addOrderModelData:[],editSubOrder:!0,saveSubOrder:!1,editOrder:!0,saveOrder:!1,proOptions:[{value:1,label:"硅胶"},{value:2,label:"五金"},{value:3,label:"USB"},{value:4,label:"移动电源"},{value:5,label:"其他"}],Options:[{value:0,label:"正常"},{value:1,label:"紧急"}],fileList:[],picUrl:[],getPicUrl:function(e){},imgdialogVisible:!1,uploadData:{token:window.sessionStorage.getItem("token")}}},computed:{},methods:{selectTest:function(e){var t=this;!0===e&&Object(n["a"])().then((function(e){t.customerData=e.data}))},editOrderDetail:function(){this.formdisabl=!1,this.editOrder=!1,this.saveOrder=!0,this.uploadbtnstatus=!1},handleRemove:function(){},beforeRemove:function(){},uploadSuccess:function(e){this.uploadbtnstatus=!0,this.orderdetail.order_pic="https://chinagoodgifts.com/image/"+e.file},handlebeforeupload:function(){},imgLook:function(){this.imgdialogVisible=!0},saveOrderDetail:function(){var e=this;this.formdisabl=!0,this.editOrder=!0,this.saveOrder=!1,this.beforeSubmitOrder(),Object(d["f"])(this.orderdetail.order_number,"",this.orderdetail).then((function(t){e.$message.success("订单修改成功"),e.submitModelData.forEach((function(t){t.sale_price?t.hasOwnProperty("id")?Object(d["h"])(t.id,t).then((function(t){e.$message.success("模具更新成功"),e.getData()})).catch((function(e){})):Object(d["l"])(t).then((function(t){e.$message.success("新增模具成功"),e.getData()})).catch((function(e){})):e.$message("请输入模具销售价")}))})).catch((function(t){e.$message("网络错误,刷新重试")}))},sumOrderAmount:function(){var e,t=0,r=Object(i["a"])(this.suborderdetail);try{for(r.s();!(e=r.n()).done;){var a=e.value;t+=1*a.sub_amount}}catch(o){r.e(o)}finally{r.f()}this.orderdetail.order_amount=t,this.rmbOrderAmount=t*this.orderdetail.ex_rate*1},subAmount:function(e){e.sub_amount=e.pro_price*e.pro_qt*1},firstSaveSuborder:function(){var e=this;this.sumOrderAmount(),window.sessionStorage.getItem("subtoken")?this.suborderdetail.forEach((function(t){t.hasOwnProperty("id")?1===t.status&&Object(d["i"])(t.id,"",t).then((function(){t.status=0,e.saveOrderDetail()})):(t.status=0,Object(d["m"])(t).then((function(t){e.saveOrderDetail()})).catch((function(t){var r=e.$createElement;e.$notify({title:"警告",message:r("i",{style:"color: teal"},"网络错误,请刷新重试")})})))})):this.$message.error("请勿重复提交,或刷新重试"),window.sessionStorage.removeItem("subtoken")},addSubOrderRow:function(e){this.childAddColorBtn=!1;var t={pro_name:"",pro_item:1,pro_size:"",pro_color:"",pro_pack:"",pro_desc:"",pro_qt:0,pro_price:0,pro_weight:0,order_number:this.orderdetail.order_number,sub_amount:0,status:1};this.suborderdetail.push(t)},editSubOrderRow:function(e,t){t.status=1,this.childAddColorBtn=!1},delSubOrderRow:function(e,t){var r=this;t.hasOwnProperty("id")?this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.suborderdetail.splice(e,1),Object(d["i"])(t.id,"",{is_delete:1}).then((function(e){r.$message({type:"success",message:"删除成功!"})}))})).catch((function(){r.$message({type:"info",message:"删除失败!"})})):this.$confirm("数据未保存,确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.suborderdetail.splice(e,1),r.$message({type:"success",message:"删除成功!"})})).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},purchaseDetail:function(){},shipDetail:function(){},delProColor:function(e,t){var r="";this.suborderdetail[t].pro_color.split("|").forEach((function(t,a){-1===t.indexOf(e)&&""!==t&&(r+=t+"|")})),this.suborderdetail[t].pro_color=r},handleSelect:function(e,t){void 0===this.suborderdetail[t].pro_color?this.suborderdetail[t].pro_color=JSON.stringify(e)+"|":this.suborderdetail[t].pro_color+=JSON.stringify(e)+"|"},selectShipAddr:function(e){var t=this;!0===e&&Object(n["b"])().then((function(e){t.customerAddr=e.data.results}))},beforeSubmitOrder:function(){var e=this,t=Object(l["a"])(this.newModelData);t.forEach((function(t){t.hasOwnProperty("id")?e.submitModelData.push({order_number:e.orderdetail.order_number,model:t.model.id,sale_price:t.sale_price,id:t.id}):e.submitModelData.push({order_number:e.orderdetail.order_number,model:t.model.id,sale_price:t.sale_price})}))},hideOrderTable:function(){this.dialogVisible=!1},selectModel:function(){this.visible=!0,this.hideOrderTable()},onClose:function(){this.visible=!1,this.dialogVisible=!0},dialogStatus2:function(e){this.dialogVisible=e},getNewModel:function(e){var t=[];this.newModelData.forEach((function(e){t.push(e.model.number)})),-1!==t.indexOf(e.number)?this.$message.error("".concat(e.number,"已存在,请重新选择")):(this.addOrderModelData.push(e),this.visible=!1,this.dialogVisible=!0,this.addOrderModelVisible=!0)},pushModelData:function(){var e=this;Object(d["d"])({order_number:window.sessionStorage.getItem("order_number")}).then((function(t){e.newModelData=t.data}))},delNewAddModel:function(e){var t=this,r=Object(l["a"])(this.addOrderModelData);new Promise((function(a,o){t.addOrderModelData=r.filter((function(t){return t.id!==e})),a(!0)})).then((function(){0===t.addOrderModelData.length&&(t.addOrderModelVisible=!1)}))},getSalePrice:function(e){var t=Object(l["a"])(this.newModelData),r=t.find((function(t){return t.id===e.id}));r&&(r.sale_price=e.val,this.newModelData=t)},deleteModel:function(e){var t=this,r=Object(l["a"])(this.newModelData);this.newModelData=r.filter((function(t){return t.id!==e})),Object(d["h"])(e,{is_delete:1}).then((function(e){t.$message.success("删除成功")})).catch((function(e){t.$message.error("删除失败,刷新重试")}))},getData:function(){var e=this,t=window.sessionStorage.getItem("order_number");Object(d["a"])(t).then((function(r){e.orderdetail=r.data,e.picUrl=r.data.order_image.map((function(e){return"https://chinagoodgifts.com/image/"+e})),Object(d["d"])({order_number:r.data.order_number}).then((function(t){e.orderModelColumn=2,e.newModelData=t.data})),Object(d["e"])({order_number:t}).then((function(t){e.suborderdetail=t.data,t.data.forEach((function(e){e.status=0})),t.data.length}))})),Object(s["b"])()}},mounted:function(){this.getData()}},$=S,j=(r("20ec6"),Object(k["a"])($,a,o,!1,null,"100fcf83",null));t["default"]=j.exports},eedc:function(e,t,r){},f0ad:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"block"},[r("el-carousel",{attrs:{trigger:"click"}},e._l(e.proPicUrl,(function(e,t){return r("el-carousel-item",{key:t},[r("img",{staticClass:"car-img",attrs:{src:e,height:"auto"}})])})),1)],1)},o=[],l={name:"picCarousel",data:function(){return{picUrlList:[]}},props:{proPicUrl:Array},computed:{},methods:{}},i=l,n=(r("5cc5"),r("2877")),s=Object(n["a"])(i,a,o,!1,null,null,null);t["a"]=s.exports},f8b7:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"j",(function(){return s})),r.d(t,"f",(function(){return d})),r.d(t,"e",(function(){return u})),r.d(t,"i",(function(){return c})),r.d(t,"m",(function(){return p})),r.d(t,"c",(function(){return m})),r.d(t,"g",(function(){return b})),r.d(t,"k",(function(){return f})),r.d(t,"d",(function(){return h})),r.d(t,"l",(function(){return _})),r.d(t,"h",(function(){return v}));var a=r("6128"),o=r("4328"),l=r.n(o);function i(e){return Object(a["a"])({url:"orders/",params:e})}function n(e,t){return Object(a["a"])({url:"orders/".concat(e,"/"),params:t})}function s(e){return Object(a["a"])({url:"orders/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:l.a.stringify(e)})}function d(e,t){return Object(a["a"])({url:"orders/".concat(e,"/"),method:"patch",data:l.a.stringify(t)})}function u(e){return Object(a["a"])({url:"suborders/",params:e})}function c(e,t){return Object(a["a"])({url:"suborders/".concat(e,"/"),method:"patch",data:l.a.stringify(t)})}function p(e){return Object(a["a"])({url:"suborders/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:l.a.stringify(e)})}function m(e){return Object(a["a"])({url:"order_model/",params:e})}function b(e,t){return Object(a["a"])({url:"order_model/".concat(e,"/"),method:"patch",data:l.a.stringify(t)})}function f(e){return Object(a["a"])({url:"order_model/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:l.a.stringify(e)})}function h(e){return Object(a["a"])({url:"order_to_model/",params:e})}function _(e){return Object(a["a"])({url:"order_to_model/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:l.a.stringify(e)})}function v(e,t){return Object(a["a"])({url:"order_to_model/".concat(e,"/"),method:"patch",data:l.a.stringify(t)})}}}]);