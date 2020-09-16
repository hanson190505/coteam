(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91d8db2c"],{3334:function(e,t,r){},"37e1":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return s}));var a=r("6128");function o(){Object(a["a"])({url:"orders/",params:{st:"addorder"}}).then((function(e){window.sessionStorage.setItem("subtoken",e.data.subtoken)}))}function s(){window.sessionStorage.removeItem("subtoken")}},"4f8a":function(e,t,r){"use strict";var a=r("3334"),o=r.n(a);o.a},8175:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{attrs:{visible:e.dialogVisible,width:"90%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("h3",{staticClass:"purchase-title"},[e._v("采 购 单")]),r("hr"),r("el-form",{ref:"addPurchaseData",attrs:{model:e.addPurchaseData,"label-width":"80px"}},[r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"采购单号:"}},[r("el-input",{directives:[{name:"show",rawName:"v-show",value:e.purchaserShow,expression:"purchaserShow"}],model:{value:e.addPurchaseData.purchase_number,callback:function(t){e.$set(e.addPurchaseData,"purchase_number",t)},expression:"addPurchaseData.purchase_number"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.purchaserShow,expression:"!purchaserShow"}]},[e._v(" "+e._s(e.addPurchaseData.purchase_number)+" ")])],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"供应商:"}},[r("el-select",{directives:[{name:"show",rawName:"v-show",value:e.purchaserShow,expression:"purchaserShow"}],attrs:{filterable:"",placeholder:"请选择"},on:{"visible-change":e.selectTest},model:{value:e.addPurchaseData.purchaser,callback:function(t){e.$set(e.addPurchaseData,"purchaser",t)},expression:"addPurchaseData.purchaser"}},e._l(e.customerData,(function(e){return r("el-option",{key:e.lite_name,attrs:{label:e.lite_name,value:e.lite_name}})})),1),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.purchaserShow,expression:"!purchaserShow"}]},[e._v(e._s(e.purchaser))])],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"采购日期:"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.addPurchaseData.purchase_date,callback:function(t){e.$set(e.addPurchaseData,"purchase_date",t)},expression:"addPurchaseData.purchase_date"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"采购交期:"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.addPurchaseData.deliver_date,callback:function(t){e.$set(e.addPurchaseData,"deliver_date",t)},expression:"addPurchaseData.deliver_date"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注:"}},[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"选填"},model:{value:e.addPurchaseData.text,callback:function(t){e.$set(e.addPurchaseData,"text",t)},expression:"addPurchaseData.text"}})],1)],1)],1)],1),r("el-button",{attrs:{type:"primary"},on:{click:e.addPurchaseDetail}},[e._v("新增明细")]),r("el-table",{staticStyle:{width:"99.9%"},attrs:{data:e.subPurchaseOrderData,"show-summary":"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"订单编号",width:"140",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.order_number.order_number))])]}}])}),r("el-table-column",{attrs:{label:"产品名称",width:"100",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.pro_name))])]}}])}),r("el-table-column",{attrs:{label:"产品尺寸",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.pro_size))])]}}])}),r("el-table-column",{attrs:{label:"产品颜色",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.pro_color))])]}}])}),r("el-table-column",{attrs:{label:"产品包装",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.pro_pack))])]}}])}),r("el-table-column",{attrs:{label:"产品描述",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.pro_desc))])]}}])}),r("el-table-column",{attrs:{label:"订单数量",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("toThousandFilter")(t.row.pro_qt)))])]}}])}),r("el-table-column",{attrs:{label:"产品单价($)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.pro_price))])]}}])}),r("el-table-column",{attrs:{label:"产品重量(g)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.pro_weight))])]}}])}),r("el-table-column",{attrs:{label:"订单金额($)",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("toThousandFilter")(t.row.sub_amount)))])]}}])}),r("el-table-column",{attrs:{label:"采购数量",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.purchase_qt,callback:function(r){e.$set(t.row,"purchase_qt",r)},expression:"scope.row.purchase_qt"}})]}}])}),r("el-table-column",{attrs:{label:"采购单价(¥)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{on:{blur:function(r){return e.subAmount(t.row)}},model:{value:t.row.purchase_price,callback:function(r){e.$set(t.row,"purchase_price",r)},expression:"scope.row.purchase_price"}})]}}])}),r("el-table-column",{attrs:{label:"采购金额(¥)",width:"120",prop:"purchase_amount"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.purchase_amount,callback:function(r){e.$set(t.row,"purchase_amount",r)},expression:"scope.row.purchase_amount"}})]}}])}),r("el-table-column",{attrs:{label:"采购毛利(¥)",width:"100",prop:"profit_rmb"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("toThousandFilter")(t.row.profit_rmb)))])]}}])}),r("el-table-column",{attrs:{label:"采购毛利($)",width:"100",prop:"profit_usd"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("toThousandFilter")(t.row.profit_usd)))])]}}])}),r("el-table-column",{attrs:{label:"备注",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.text,callback:function(r){e.$set(t.row,"text",r)},expression:"scope.row.text"}})]}}])}),r("el-table-column",{attrs:{label:"操作",fixed:"right",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("el-button",{attrs:{type:"primary"},on:{click:e.submitPurchaseDetail}},[e._v("保 存")]),r("el-dialog",{attrs:{visible:e.subdialogVisable,width:"99%","append-to-body":!0},on:{"update:visible":function(t){e.subdialogVisable=t}}},[r("suborder-detail",{on:{getSelectSuborder:e.getSelectSuborder}}),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.addNewPurchaseDetail}},[e._v("确 定")])],1)],1)],1)],1)},o=[],s=(r("99af"),r("4160"),r("a434"),r("b680"),r("d3b7"),r("159b"),r("b85c")),n=r("f8b7"),u=r("f6b0"),c=r("6d0b"),i=r("37e1");r("25f0");function l(e){var t=new Date,r=t.getFullYear(),a=t.getMonth()+1,o=t.getDate();1===String(a).length&&(a="0"+a),1===String(o).length&&(o="0"+o);var s="".concat(r).concat(a).concat(o),n=e+s+"-"+Math.random().toString(36).substr(2,4);return window.sessionStorage.setItem("orderNumber",n),n}var d=r("4876"),h={name:"addPurchaseorder",components:{suborderDetail:d["default"]},data:function(){return{customerData:[],customerList:[],dialogVisible:!1,addPurchaseData:{},subdialogVisable:!1,subPurchaseOrderData:[],subOrderData:[],purchaserShow:!0,purchaser:"",isAdd:!0}},methods:{purchaseDetaiCheck:function(e){this.dialogVisible=!0,this.purchaserShow=!1,this.isAdd=!1,this.addPurchaseData=e.purchase_number,this.purchaser=e.purchase_number.purchaser.lite_name,this.getPurchaseDetaiData({purchase_number:e.purchase_number.purchase_number})},getPurchaseNumber:function(e){this.dialogVisible=!0,this.purchaserShow=!1,this.isAdd=!1,this.addPurchaseData=e,this.purchaser=e.purchaser.lite_name,this.getPurchaseDetaiData({purchase_number:e.purchase_number})},getPurchaseDetaiData:function(e){var t=this;Object(c["a"])(e).then((function(e){e.data.forEach((function(e){t.subPurchaseOrderData.push({order_number:e.sub_order.order_number,pro_name:e.sub_order.pro_name,pro_size:e.sub_order.pro_size,pro_color:e.sub_order.pro_color,pro_pack:e.sub_order.pro_pack,pro_desc:e.sub_order.pro_desc,pro_qt:e.sub_order.pro_qt,pro_price:e.sub_order.pro_price,pro_weight:e.sub_order.pro_weight,sub_amount:e.sub_order.sub_amount,purchase_qt:e.purchase_qt,purchase_price:e.purchase_price,purchase_amount:e.purchase_amount,profit_rmb:(e.sub_order.sub_amount*e.sub_order.order_number.ex_rate-e.purchase_amount).toFixed(2),profit_usd:(e.sub_order.sub_amount-e.purchase_amount/e.sub_order.order_number.ex_rate).toFixed(2),text:e.text,id:e.id})}))}))},addNewPurchase:function(){this.dialogVisible=!0,Object(i["b"])(),this.addPurchaseData.purchase_number=l("PC")},selectTest:function(e){var t=this;!0===e&&Object(u["a"])().then((function(e){t.customerData=e.data}))},handleClose:function(e){var t=this;this.$confirm("确认关闭？").then((function(r){t.addPurchaseData={},t.subPurchaseOrderData=[],t.subOrderData=[],e()})).catch((function(e){}))},addPurchaseDetail:function(){this.subdialogVisable=!0,Object(i["b"])()},getSelectSuborder:function(e){this.subOrderData=e},addNewPurchaseDetail:function(){var e=this;this.subdialogVisable=!1,this.subOrderData.forEach((function(t){e.subPurchaseOrderData.push({order_number:t.order_number,pro_name:t.pro_name,pro_size:t.pro_size,pro_color:t.pro_color,pro_pack:t.pro_pack,pro_desc:t.pro_desc,pro_qt:t.pro_qt,pro_price:t.pro_price,pro_weight:t.pro_weight,sub_amount:t.sub_amount,purchase_qt:t.pro_qt,purchase_price:"",purchase_amount:"",profit_rmb:"",profit_usd:"",text:"选填",status:1,id:t.id})}))},subAmount:function(e){e.purchase_amount=e.purchase_qt*e.purchase_price*1,e.profit_rmb=(e.sub_amount*e.order_number.ex_rate-e.purchase_amount).toFixed(2),e.profit_usd=(e.sub_amount-e.purchase_amount/e.order_number.ex_rate).toFixed(2)},submitPurchaseDetail:function(){var e=this;if(this.addPurchaseData.purchaser&&this.addPurchaseData.purchase_date&&this.addPurchaseData.deliver_date)if(window.sessionStorage.getItem("subtoken")){var t=new Promise((function(t,r){e.isAdd?e.$store.dispatch("purchaseStore/addPurchaseOrder",e.addPurchaseData).then((function(r){t(r);var a,o=Object(s["a"])(e.subPurchaseOrderData);try{var u=function(){var t=a.value;t.purchase_number=e.addPurchaseData.purchase_number,t.sub_order=t.id,Object(c["f"])(t).then((function(r){Object(n["e"])(t.id,"",{is_purchase:1}).then((function(r){e.$notify({title:"succsess",message:"".concat(t.order_number.order_number,"-").concat(t.pro_name,"提交成功"),type:"success"})}))})).catch((function(r){e.$notify.error({title:"error",message:"".concat(t.order_number.order_number,"-").concat(t.pro_name," 提交失败,请刷新重录"),duration:0})}))};for(o.s();!(a=o.n()).done;)u()}catch(i){o.e(i)}finally{o.f()}})).catch((function(t){e.$notify.error({title:"error",message:"提交失败!请刷新重试"})})):Object(c["c"])(e.addPurchaseData.purchase_number,e.addPurchaseData).then((function(t){var r,a=Object(s["a"])(e.subPurchaseOrderData);try{var o=function(){var t=r.value;t.status?(t.purchase_number=e.addPurchaseData.purchase_number,t.sub_order=t.id,Object(c["f"])(t).then((function(r){Object(n["e"])(t.id,"",{is_purchase:0}).then((function(r){e.$notify({title:"succsess",message:"".concat(t.order_number.order_number,"-").concat(t.pro_name,"提交成功"),type:"success"})}))})).catch((function(r){e.$notify.error({title:"error",message:"".concat(t.order_number.order_number,"-").concat(t.pro_name," 提交失败,请刷新重录"),duration:0})}))):Object(c["d"])(t.id,t).then((function(r){e.$notify({title:"succsess",message:"".concat(t.order_number.order_number,"-").concat(t.pro_name,"修改成功"),type:"success"})}))};for(a.s();!(r=a.n()).done;)o()}catch(u){a.e(u)}finally{a.f()}}))}));t.then((function(e){Object(i["a"])()}))}else this.$message.error("请勿重复提交,或刷新重试");else this.$message.error("请完整填写采购信息!")},handleDelete:function(e,t){var r=this;t.hasOwnProperty("id")?this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.subPurchaseOrderData.splice(e,1),Object(c["d"])(t.id,{is_delete:1}).then((function(e){r.$message({type:"success",message:"删除成功!"})}))})).catch((function(){r.$message({type:"info",message:"已取消删除"})})):this.$confirm("数据未保存,确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.subPurchaseOrderData.splice(e,1),r.$message({type:"success",message:"删除成功!"})})).catch((function(){r.$message({type:"info",message:"已取消删除"})}))}},watch:{},computed:{}},p=h,b=(r("4f8a"),r("2877")),f=Object(b["a"])(p,a,o,!1,null,"3667b56b",null);t["a"]=f.exports},"99af":function(e,t,r){"use strict";var a=r("23e7"),o=r("d039"),s=r("e8b5"),n=r("861d"),u=r("7b0b"),c=r("50c4"),i=r("8418"),l=r("65f0"),d=r("1dde"),h=r("b622"),p=r("2d00"),b=h("isConcatSpreadable"),f=9007199254740991,_="Maximum allowed index exceeded",m=p>=51||!o((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),w=d("concat"),v=function(e){if(!n(e))return!1;var t=e[b];return void 0!==t?!!t:s(e)},g=!m||!w;a({target:"Array",proto:!0,forced:g},{concat:function(e){var t,r,a,o,s,n=u(this),d=l(n,0),h=0;for(t=-1,a=arguments.length;t<a;t++)if(s=-1===t?n:arguments[t],v(s)){if(o=c(s.length),h+o>f)throw TypeError(_);for(r=0;r<o;r++,h++)r in s&&i(d,h,s[r])}else{if(h>=f)throw TypeError(_);i(d,h++,s)}return d.length=h,d}})},a434:function(e,t,r){"use strict";var a=r("23e7"),o=r("23cb"),s=r("a691"),n=r("50c4"),u=r("7b0b"),c=r("65f0"),i=r("8418"),l=r("1dde"),d=r("ae40"),h=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,f=Math.min,_=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!h||!p},{splice:function(e,t){var r,a,l,d,h,p,w=u(this),v=n(w.length),g=o(e,v),y=arguments.length;if(0===y?r=a=0:1===y?(r=0,a=v-g):(r=y-2,a=f(b(s(t),0),v-g)),v+r-a>_)throw TypeError(m);for(l=c(w,a),d=0;d<a;d++)h=g+d,h in w&&i(l,d,w[h]);if(l.length=a,r<a){for(d=g;d<v-a;d++)h=d+a,p=d+r,h in w?w[p]=w[h]:delete w[p];for(d=v;d>v-a+r;d--)delete w[d-1]}else if(r>a)for(d=v-a;d>g;d--)h=d+a-1,p=d+r-1,h in w?w[p]=w[h]:delete w[p];for(d=0;d<r;d++)w[d+g]=arguments[d+2];return w.length=v-a+r,l}})},b85c:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("a630"),r("fb6a"),r("b0c0"),r("25f0");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=o(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,u=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,n=e},f:function(){try{u||null==r["return"]||r["return"]()}finally{if(c)throw n}}}}},f6b0:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return u}));var a=r("6128"),o=r("4328"),s=r.n(o);function n(e){return Object(a["a"])({url:"customers/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:s.a.stringify(e)})}function u(e){return Object(a["a"])({url:"customers/",params:e})}}}]);