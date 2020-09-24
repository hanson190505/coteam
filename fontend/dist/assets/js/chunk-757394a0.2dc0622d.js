(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-757394a0"],{"06c5":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var r=a("6b75");function n(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r["a"])(e,t):void 0}}},"37e1":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));var r=a("6128");function n(){Object(r["a"])({url:"orders/",params:{st:"addorder"}}).then((function(e){window.sessionStorage.setItem("subtoken",e.data.subtoken)}))}function s(){window.sessionStorage.removeItem("subtoken")}},"39ee":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ship-order")],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"text"},on:{click:e.addNewShip}},[e._v("新增出货")])],1),a("el-col",{attrs:{span:6}},[a("backend-searchVue",{on:{parentMethod:e.pagination}})],1)],1),a("add-ship",{ref:"addship"}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"shipOrderTable",staticStyle:{},attrs:{data:this.$store.getters.shipOrderData.results,"highlight-current-row":"",border:"","show-summary":"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{type:"index",width:"60",align:"center"}}),a("el-table-column",{attrs:{label:"出货单号",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ship_number))])]}}])}),a("el-table-column",{attrs:{label:"出货方式",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.shipType[t.row.ship_plan-1]))])]}}])}),a("el-table-column",{attrs:{label:"货运公司",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ship_customer))])]}}])}),a("el-table-column",{attrs:{label:"出货日期",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ship_date))])]}}])}),a("el-table-column",{attrs:{label:"出货重量(kg)",align:"center",width:"120",prop:"ship_weight"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ship_weight))])]}}])}),a("el-table-column",{attrs:{label:"出货费用(¥)",align:"center",width:"100",prop:"ship_cost"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ship_cost))])]}}])}),a("el-table-column",{attrs:{label:"目的地",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.destination))])]}}])}),a("el-table-column",{attrs:{label:"备注",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.text))])]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.checkShipOrder(t.row)}}},[e._v("查看")])]}}])})],1),a("pagi-nation",{attrs:{getDataTotal:e.dataTotal},on:{pagination:e.pagination}}),a("check-ship",{ref:"checkship"})],1)},i=[],l=a("d2c0"),o=a("b59b"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{visible:e.addshipDisplay,width:"90%","before-close":e.handleClose},on:{"update:visible":function(t){e.addshipDisplay=t}}},[a("h3",{staticClass:"purchase-title"},[e._v("出 货 单")]),a("hr"),a("el-form",{ref:"addShipData",attrs:{model:e.addShipData,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出货单号"}},[a("el-input",{attrs:{placeholder:"请输入单号"},model:{value:e.addShipData.ship_number,callback:function(t){e.$set(e.addShipData,"ship_number",t)},expression:"addShipData.ship_number"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出货方式"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.addShipData.ship_plan,callback:function(t){e.$set(e.addShipData,"ship_plan",t)},expression:"addShipData.ship_plan"}},e._l(e.shipType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"货运公司"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.selectTest},model:{value:e.addShipData.ship_customer,callback:function(t){e.$set(e.addShipData,"ship_customer",t)},expression:"addShipData.ship_customer"}},e._l(e.customerData,(function(e){return a("el-option",{key:e.lite_name,attrs:{label:e.lite_name,value:e.lite_name}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出货日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.addShipData.ship_date,callback:function(t){e.$set(e.addShipData,"ship_date",t)},expression:"addShipData.ship_date"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"重量(kg)"}},[a("el-input",{model:{value:e.addShipData.ship_weight,callback:function(t){e.$set(e.addShipData,"ship_weight",t)},expression:"addShipData.ship_weight"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"费用(¥)"}},[a("el-input",{model:{value:e.addShipData.ship_cost,callback:function(t){e.$set(e.addShipData,"ship_cost",t)},expression:"addShipData.ship_cost"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"目的地"}})],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{placeholder:"选填"},model:{value:e.addShipData.text,callback:function(t){e.$set(e.addShipData,"text",t)},expression:"addShipData.text"}})],1)],1)],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:e.addShipDetail}},[e._v("新增明细")]),a("el-table",{staticStyle:{width:"99.9%"},attrs:{data:e.shipDetailData,"show-summary":"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"订单编号",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.order_number.order_number))])]}}])}),a("el-table-column",{attrs:{label:"产品名称",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pro_name))])]}}])}),a("el-table-column",{attrs:{label:"产品尺寸",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pro_size))])]}}])}),a("el-table-column",{attrs:{label:"产品颜色",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pro_color))])]}}])}),a("el-table-column",{attrs:{label:"产品包装",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pro_pack))])]}}])}),a("el-table-column",{attrs:{label:"产品描述",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pro_desc))])]}}])}),a("el-table-column",{attrs:{label:"订单数量",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pro_qt))])]}}])}),a("el-table-column",{attrs:{label:"产品重量(kg)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(1*t.row.pro_weight*t.row.pro_qt/1e3))])]}}])}),a("el-table-column",{attrs:{label:"出货重量(kg)",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.ship_weight,callback:function(a){e.$set(t.row,"ship_weight",a)},expression:"scope.row.ship_weight"}})]}}])}),a("el-table-column",{attrs:{label:"出货费用(¥)",width:"100",prop:"ship_cost"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ship_cost))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-button",{attrs:{type:"primary"},on:{click:e.submitShipData}},[e._v("保 存")]),a("el-dialog",{attrs:{visible:e.subdialogVisable,width:"99%","append-to-body":!0},on:{"update:visible":function(t){e.subdialogVisable=t}}},[a("suborder-detail",{on:{getSelectSuborder:e.getSelectSuborder}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.subdialogVisable=!1}}},[e._v("确 定")])],1)],1)],1)],1)},u=[],d=(a("a434"),a("b680"),a("d3b7"),a("b85c")),p=a("4876"),h=a("37e1"),f=a("f6b0"),b=a("fe27"),_=a("f8b7"),m={name:"addShip",components:{suborderDetail:p["default"]},data:function(){return{addshipDisplay:!1,customerData:[],addShipData:{},subdialogVisable:!1,shipDetailData:[],subOrderData:[],pre_ship:0,shipType:[{value:1,label:"UPS"},{value:2,label:"FedEx"},{value:3,label:"DHL"},{value:4,label:"国内快递"},{value:5,label:"船运"},{value:6,label:"自提"},{value:7,label:"第三方"},{value:8,label:"其他"}]}},methods:{addNewship:function(){this.addshipDisplay=!0,Object(h["b"])()},selectTest:function(e){var t=this;!0===e&&Object(f["a"])().then((function(e){t.customerData=e.data}))},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},getSelectSuborder:function(e){this.shipDetailData=e},addShipDetail:function(){this.addShipData.ship_weight&&this.addShipData.ship_cost?(this.pre_ship=1*this.addShipData.ship_cost/this.addShipData.ship_weight,this.subdialogVisable=!0):this.$message.error("请完整填写出货信息")},subAmount:function(e){console.log(e),e.purchase_amount=e.purchase_qt*e.purchase_price},submitShipData:function(){var e=this;if(window.sessionStorage.getItem("subtoken")){var t=new Promise((function(t,a){Object(b["g"])(e.addShipData).then((function(a){var r,n=a.data.id,s=Object(d["a"])(e.shipDetailData);try{var i=function(){var t=r.value;t.ship_number=n,t.ship_cost=1*(t.ship_weight*e.pre_ship).toFixed(2),t.sub_order=t.id,Object(b["f"])(t).then((function(a){Object(_["h"])(t.id,"",{is_ship:1}).then((function(a){e.$notify({title:"succsess",message:"".concat(t.order_number.order_number," 提交成功"),type:"success"})})).catch((function(a){e.$notify.error({title:"error",message:"".concat(t.order_number.order_number," 提交失败,请刷新重录"),duration:0})}))}))};for(s.s();!(r=s.n()).done;)i()}catch(l){s.e(l)}finally{s.f()}t(a)})).catch((function(t){e.$notify.error({title:"error",message:"提交失败!请刷新重试"})}))}));t.then((function(e){Object(h["a"])()}))}else this.$message.error("请勿重复提交,或刷新重试")},handleDelete:function(e,t){this.shipDetailData.splice(e,1)}},watch:{},computed:{}},g=m,w=a("2877"),v=Object(w["a"])(g,c,u,!1,null,"d246e04c",null),y=v.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{visible:e.checkshipDisplay,width:"90%","before-close":e.handleClose},on:{"update:visible":function(t){e.checkshipDisplay=t}}},[a("h3",{staticClass:"purchase-title"},[e._v("出 货 单")]),a("hr"),a("el-form",{ref:"shipOrderData",attrs:{model:e.shipOrderData,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出货单号"}},[a("el-input",{attrs:{placeholder:"请输入单号",disabled:e.shipOrderChange},model:{value:e.shipOrderData.ship_number,callback:function(t){e.$set(e.shipOrderData,"ship_number",t)},expression:"shipOrderData.ship_number"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出货方式"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:e.shipOrderChange},model:{value:e.shipOrderData.ship_plan,callback:function(t){e.$set(e.shipOrderData,"ship_plan",t)},expression:"shipOrderData.ship_plan"}},e._l(e.shipType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"货运公司"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:e.shipOrderChange},on:{"visible-change":e.selectTest},model:{value:e.shipOrderData.ship_customer,callback:function(t){e.$set(e.shipOrderData,"ship_customer",t)},expression:"shipOrderData.ship_customer"}},e._l(e.customerData,(function(e){return a("el-option",{key:e.lite_name,attrs:{label:e.lite_name,value:e.lite_name}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出货日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:e.shipOrderChange},model:{value:e.shipOrderData.ship_date,callback:function(t){e.$set(e.shipOrderData,"ship_date",t)},expression:"shipOrderData.ship_date"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"重量(kg)"}},[a("el-input",{attrs:{disabled:e.shipOrderChange},model:{value:e.shipOrderData.ship_weight,callback:function(t){e.$set(e.shipOrderData,"ship_weight",t)},expression:"shipOrderData.ship_weight"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"费用(¥)"}},[a("el-input",{attrs:{disabled:e.shipOrderChange},model:{value:e.shipOrderData.ship_cost,callback:function(t){e.$set(e.shipOrderData,"ship_cost",t)},expression:"shipOrderData.ship_cost"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"选填",disabled:e.shipOrderChange},model:{value:e.shipOrderData.text,callback:function(t){e.$set(e.shipOrderData,"text",t)},expression:"shipOrderData.text"}})],1)],1)],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:e.changeShipOrder}},[e._v("修改出货")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addShipDetail}},[e._v("新增明细")]),a("el-table",{staticStyle:{width:"99.9%"},attrs:{data:e.shipDetailData,"show-summary":"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"订单编号",width:"140",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sub_order.order_number.order_number))])]}}])}),a("el-table-column",{attrs:{label:"产品名称",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sub_order.pro_name))])]}}])}),a("el-table-column",{attrs:{label:"产品尺寸",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sub_order.pro_size))])]}}])}),a("el-table-column",{attrs:{label:"产品颜色",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sub_order.pro_color))])]}}])}),a("el-table-column",{attrs:{label:"产品包装",width:"100",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sub_order.pro_pack))])]}}])}),a("el-table-column",{attrs:{label:"产品描述",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sub_order.pro_desc))])]}}])}),a("el-table-column",{attrs:{label:"订单数量",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sub_order.pro_qt))])]}}])}),a("el-table-column",{attrs:{label:"产品重量(kg)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(1*t.row.sub_order.pro_weight*t.row.sub_order.pro_qt/1e3)+" ")])]}}])}),a("el-table-column",{attrs:{label:"出货重量(kg)",width:"120",prop:"ship_weight"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.ship_weight,callback:function(a){e.$set(t.row,"ship_weight",a)},expression:"scope.row.ship_weight"}})]}}])}),a("el-table-column",{attrs:{label:"出货费用(¥)",width:"100",prop:"ship_cost"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((t.row.ship_weight*e.pre_ship).toFixed(2)))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-button",{attrs:{type:"primary"},on:{click:e.submitShipData}},[e._v("提 交")]),a("el-dialog",{attrs:{visible:e.subdialogVisable,width:"99%","append-to-body":!0},on:{"update:visible":function(t){e.subdialogVisable=t}}},[a("suborder-detail",{on:{getSelectSuborder:e.getSelectSuborder}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleSelectSuborder}},[e._v("确 定")])],1)],1)],1)],1)},S=[],k=(a("4160"),a("159b"),{name:"addShip",components:{suborderDetail:p["default"]},data:function(){return{shipOrderChange:!0,checkshipDisplay:!1,customerData:[],shipOrderData:{},subdialogVisable:!1,shipDetailData:[],subOrderData:[],pre_ship:0,shipType:[{value:1,label:"UPS"},{value:2,label:"FedEx"},{value:3,label:"DHL"},{value:4,label:"国内快递"},{value:5,label:"船运"},{value:6,label:"自提"},{value:7,label:"第三方"},{value:8,label:"其他"}]}},methods:{changeShipOrder:function(){this.shipOrderChange=!1,Object(h["b"])()},checkShip:function(e){var t=this;this.checkshipDisplay=!0,Object(b["c"])(e).then((function(a){t.shipOrderData=a.data,t.pre_ship=a.data.ship_cost/a.data.ship_weight,Object(b["a"])({ship_number:e}).then((function(e){t.shipDetailData=e.data}))}))},selectTest:function(e){var t=this;!0===e&&Object(f["a"])().then((function(e){t.customerData=e.data}))},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},getSelectSuborder:function(e){this.subOrderData=e},handleSelectSuborder:function(){var e=this;this.subdialogVisable=!1,this.subOrderData.forEach((function(t){e.shipDetailData.push({sub_order:t})}))},addShipDetail:function(){this.shipOrderData.ship_weight&&this.shipOrderData.ship_cost?(this.pre_ship=1*this.shipOrderData.ship_cost/this.shipOrderData.ship_weight,this.subdialogVisable=!0):this.$message.error("请完整填写出货信息")},submitShipData:function(){var e=this;if(this.pre_ship=this.shipOrderData.ship_cost/this.shipOrderData.ship_weight,window.sessionStorage.getItem("subtoken")){var t=new Promise((function(t,a){Object(b["e"])(e.shipOrderData.id,e.shipOrderData).then((function(a){var r,n=a.data.id,s=Object(d["a"])(e.shipDetailData);try{var i=function(){var t=r.value;t.ship_cost=1*(t.ship_weight*e.pre_ship).toFixed(2),t.id?Object(b["d"])(t.id,t).then((function(a){e.$notify({title:"succsess",message:"".concat(t.sub_order.order_number," 修改成功"),type:"success"})})).catch((function(a){e.$notify.error({title:"error",message:"".concat(t.sub_order.order_number," 修改失败,请刷新重录"),duration:0})})):(t.ship_number=n,t.sub_order=t.sub_order.id,Object(b["f"])(t).then((function(a){Object(_["h"])(t.sub_order.id,"",{is_ship:0}).then((function(a){e.$notify({title:"succsess",message:"".concat(t.order_number.order_number," 提交成功"),type:"success"})})).catch((function(a){e.$notify.error({title:"error",message:"".concat(t.order_number.order_number," 提交失败,请刷新重录"),duration:0})}))})))};for(s.s();!(r=s.n()).done;)i()}catch(l){s.e(l)}finally{s.f()}t(a)})).catch((function(t){e.$notify.error({title:"error",message:"提交失败!请刷新重试"})}))}));t.then((function(e){console.log("123456"),Object(h["a"])()}))}else this.$message.error("请勿重复提交,或刷新重试")},handleDelete:function(e,t){var a=this;t.hasOwnProperty("id")?this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.shipDetailData.splice(e,1),Object(b["d"])(t.id,{is_delete:1}).then((function(e){a.$message({type:"success",message:"删除成功!"})}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})})):this.$confirm("数据未保存,确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.shipDetailData.splice(e,1),a.$message({type:"success",message:"删除成功!"})})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))}},computed:{},created:function(){}}),O=k,x=Object(w["a"])(O,D,S,!1,null,"53c135a1",null),$=x.exports,j={name:"shipOrder",components:{pagiNation:l["a"],backendSearchVue:o["a"],addShip:y,checkShip:$},data:function(){return{dataTotal:0,loading:!0,shipType:["UPS","FedEx","DHL","国内快递","船运","自提","第三方","其他"]}},methods:{addNewShip:function(){this.$refs.addship.addNewship()},pagination:function(e){var t=this;e||(e={page:1,page_size:10}),this.$store.dispatch("shipStore/setShipOrderData",e).then((function(e){t.loading=!1,t.dataTotal=e.data.count}))},handleCurrentChange:function(){},checkShipOrder:function(e){this.$refs.checkship.checkShip(e.id),Object(h["b"])()}},created:function(){this.pagination({page:1,page_size:10})}},C=j,T=Object(w["a"])(C,s,i,!1,null,"5735da2c",null),V=T.exports,E={components:{shipOrder:V},data:function(){return{}},methods:{}},A=E,I=Object(w["a"])(A,r,n,!1,null,"74830830",null);t["default"]=I.exports},"6b75":function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},a434:function(e,t,a){"use strict";var r=a("23e7"),n=a("23cb"),s=a("a691"),i=a("50c4"),l=a("7b0b"),o=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,b=Math.min,_=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!h},{splice:function(e,t){var a,r,u,d,p,h,g=l(this),w=i(g.length),v=n(e,w),y=arguments.length;if(0===y?a=r=0:1===y?(a=0,r=w-v):(a=y-2,r=b(f(s(t),0),w-v)),w+a-r>_)throw TypeError(m);for(u=o(g,r),d=0;d<r;d++)p=v+d,p in g&&c(u,d,g[p]);if(u.length=r,a<r){for(d=v;d<w-r;d++)p=d+r,h=d+a,p in g?g[h]=g[p]:delete g[h];for(d=w;d>w-r+a;d--)delete g[d-1]}else if(a>r)for(d=w-r;d>v;d--)p=d+r-1,h=d+a-1,p in g?g[h]=g[p]:delete g[h];for(d=0;d<a;d++)g[d+v]=arguments[d+2];return g.length=w-r+a,u}})},b85c:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");var r=a("06c5");function n(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,i=e},f:function(){try{l||null==a["return"]||a["return"]()}finally{if(o)throw i}}}}},f6b0:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return u}));var r=a("6128"),n=a("4328"),s=a.n(n);function i(e){return Object(r["a"])({url:"customers/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:s.a.stringify(e)})}function l(e){return Object(r["a"])({url:"customers/",params:e})}function o(e){return Object(r["a"])({url:"customer_addr/",params:e})}function c(e){return Object(r["a"])({url:"customer_addr/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:s.a.stringify(e)})}function u(e,t){return Object(r["a"])({url:"customer_addr/".concat(e,"/"),method:"patch",data:s.a.stringify(t)})}}}]);