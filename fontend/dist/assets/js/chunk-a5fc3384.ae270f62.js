(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5fc3384"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("6b75");function a(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var i=n("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||o(t)||Object(i["a"])(t)||c()}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5663:function(t,e,n){},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6e99":function(t,e,n){"use strict";var r=n("5663"),a=n.n(r);a.a},"98d7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("addr-table")},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("add-addr",{on:{getData:t.getData}}),n("a-table",{attrs:{columns:t.columns,rowKey:"id","data-source":t.data,pagination:t.pagination,loading:t.loading,bordered:""},scopedSlots:t._u([t._l(["country","city","addr"],(function(e){return{key:e,fn:function(r,a,o){return[n("div",{key:e},[a.editable?n("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:r},on:{change:function(n){return t.handleChange(n.target.value,o,e)}}}):[t._v(t._s(r))]],2)]}}})),{key:"addr_type",fn:function(e,r,a){return[n("div",{key:"addr_type"},[r.editable?n("a-select",{attrs:{"default-value":e},on:{select:t.handleSelect}},t._l(["common","other"],(function(e,r){return n("a-select-option",{key:r,attrs:{value:r}},[t._v(t._s(e))])})),1):[t._v(t._s(t._f("addrType")(e)))]],2)]}},{key:"operation",fn:function(e,r,a){return[n("div",{staticClass:"editable-row-operations"},[r.editable?n("span",[n("a",{on:{click:function(){return t.save(r.id,a)}}},[t._v("Save")]),n("a-popconfirm",{attrs:{title:"Sure to cancel?"},on:{confirm:function(){return t.cancel(a)}}},[n("a",[t._v("Cancel")])])],1):n("span",[n("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(a)}}},[t._v("Edit")]),t.data.length?n("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(r.id,a)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("Delete")])]):t._e()],1)])]}}],null,!0)})],1)},i=[],c=(n("a434"),n("2909")),s=n("5530"),d=n("f6b0"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-button",{attrs:{type:"primary"},on:{click:t.showDrawer}},[n("a-icon",{attrs:{type:"plus"}}),t._v("New Addr ")],1),n("a-drawer",{attrs:{title:"Create New Addr",visible:t.visible,width:"720","body-style":{paddingBottom:"80px"}},on:{close:t.onClose}},[n("a-form-model",{ref:"addAddrForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[n("a-form-model-item",{attrs:{label:"客户",prop:"customer"}},[n("a-select",{attrs:{size:"default"},on:{dropdownVisibleChange:t.dropdownVisibleChange},model:{value:t.form.customer,callback:function(e){t.$set(t.form,"customer",e)},expression:"form.customer"}},t._l(t.customers,(function(e,r){return n("a-select-option",{key:r,attrs:{value:e.lite_name}},[t._v(t._s(e.lite_name))])})),1)],1),n("a-form-model-item",{attrs:{label:"地址类别",prop:"addr_type"}},[n("a-select",[n("a-select-option",{attrs:{value:"0"}},[t._v("common")]),n("a-select-option",{attrs:{value:"1"}},[t._v("other")])],1)],1),n("a-form-model-item",{attrs:{label:"联系人",prop:"linkman"}},[n("a-input",{model:{value:t.form.linkman,callback:function(e){t.$set(t.form,"linkman",e)},expression:"form.linkman"}})],1),n("a-form-model-item",{attrs:{label:"国家",prop:"country"}},[n("a-input",{attrs:{placeholder:"非必填项目"},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1),n("a-form-model-item",{attrs:{label:"城市",prop:"city"}},[n("a-input",{attrs:{placeholder:"非必填项目"},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),n("a-form-model-item",{attrs:{label:"邮编",prop:"postcode"}},[n("a-input",{attrs:{placeholder:"非必填项目"},model:{value:t.form.postcode,callback:function(e){t.$set(t.form,"postcode",e)},expression:"form.postcode"}})],1),n("a-form-model-item",{attrs:{label:"详细地址",prop:"addr"}},[n("a-input",{attrs:{type:"textarea"},model:{value:t.form.addr,callback:function(e){t.$set(t.form,"addr",e)},expression:"form.addr"}})],1),n("a-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Create")])],1)],1)],1)},l=[],f={data:function(){return{visible:!1,labelCol:{span:4},wrapperCol:{span:14},customers:[],form:{customer:"",addr_type:1,country:"",city:"",addr:""},rules:{customer:[{required:!0,message:"Please select customer",trigger:"change"}],addr:[{required:!0,message:"Please input addr"}]}}},methods:{dropdownVisibleChange:function(){var t=this;0===this.customers.length&&Object(d["a"])().then((function(e){t.customers=e.data})).catch((function(t){}))},submit:function(){var t=this;Object(d["e"])(this.form).then((function(e){t.$emit("getData"),t.visible=!1}))},showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1}}},m=f,p=n("2877"),b=Object(p["a"])(m,u,l,!1,null,null,null),h=b.exports,y=[{title:"客户",dataIndex:"customer",width:"10%",scopedSlots:{customRender:"customer"}},{title:"类别",dataIndex:"addr_type",width:"10%",scopedSlots:{customRender:"addr_type"}},{title:"联系人",dataIndex:"linkman",width:"10%",scopedSlots:{customRender:"linkman"}},{title:"国家",dataIndex:"country",width:"10%",scopedSlots:{customRender:"country"}},{title:"城市",dataIndex:"city",width:"10%",scopedSlots:{customRender:"city"}},{title:"邮编",dataIndex:"postcode",width:"10%",scopedSlots:{customRender:"postcode"}},{title:"详细地址",dataIndex:"addr",scopedSlots:{customRender:"addr"}},{title:"opration",dataIndex:"opration",scopedSlots:{customRender:"operation"}}],v={components:{addAddr:h},data:function(){return{data:[],pagination:{},loading:!1,editingKey:"",editingRow:0,columns:y}},mounted:function(){this.getData()},methods:{handleSelect:function(t){this.data[this.editingRow].addr_type=t},getData:function(){var t=this;this.loading=!0,Object(d["b"])().then((function(e){var n=Object(s["a"])({},t.pagination);n.total=e.data.count,t.loading=!1,t.data=e.data.results,t.pagination=n}))},handleChange:function(t,e,n){var r=Object(c["a"])(this.data),a=r[e];a&&(a[n]=t,this.data=r)},edit:function(t){var e=Object(c["a"])(this.data),n=e[t];n&&(n.editable=!0,this.editingRow=t,this.data=e)},save:function(t,e){var n=this,r=Object(c["a"])(this.data),a=r[e];a&&Object(d["c"])(t,a).then((function(t){a.editable=!1,n.data=r,n.$message.success("修改成功")})).catch((function(t){n.$message.error("修改失败")}))},cancel:function(t){this.getData()},onDelete:function(t,e){var n=this;Object(d["c"])(t,{is_delete:1}).then((function(t){n.data.splice(e,1),n.$message.success("删除成功")})).catch((function(t){n.$message.error("删除失败")}))}}},g=v,w=(n("6e99"),Object(p["a"])(g,o,i,!1,null,"dfa41c12",null)),O=w.exports,j={components:{addrTable:O}},_=j,k=Object(p["a"])(_,r,a,!1,null,null,null);e["default"]=k.exports},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),o=n("a691"),i=n("50c4"),c=n("7b0b"),s=n("65f0"),d=n("8418"),u=n("1dde"),l=n("ae40"),f=u("splice"),m=l("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,b=Math.min,h=9007199254740991,y="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!m},{splice:function(t,e){var n,r,u,l,f,m,v=c(this),g=i(v.length),w=a(t,g),O=arguments.length;if(0===O?n=r=0:1===O?(n=0,r=g-w):(n=O-2,r=b(p(o(e),0),g-w)),g+n-r>h)throw TypeError(y);for(u=s(v,r),l=0;l<r;l++)f=w+l,f in v&&d(u,l,v[f]);if(u.length=r,n<r){for(l=w;l<g-r;l++)f=l+r,m=l+n,f in v?v[m]=v[f]:delete v[m];for(l=g;l>g-r+n;l--)delete v[l-1]}else if(n>r)for(l=g-r;l>w;l--)f=l+r-1,m=l+n-1,f in v?v[m]=v[f]:delete v[m];for(l=0;l<n;l++)v[l+w]=arguments[l+2];return v.length=g-r+n,u}})},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),o=n("56ef"),i=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),a=c.f,d=o(r),u={},l=0;while(d.length>l)n=a(r,e=d[l++]),void 0!==n&&s(u,e,n);return u}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),o=n("fc6a"),i=n("06cf").f,c=n("83ab"),s=a((function(){i(1)})),d=!c||s;r({target:"Object",stat:!0,forced:d,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},f6b0:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return u}));var r=n("6128"),a=n("4328"),o=n.n(a);function i(t){return Object(r["a"])({url:"customers/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:o.a.stringify(t)})}function c(t){return Object(r["a"])({url:"customers/",params:t})}function s(t){return Object(r["a"])({url:"customer_addr/",params:t})}function d(t){return Object(r["a"])({url:"customer_addr/",method:"post",params:{subtoken:window.sessionStorage.getItem("subtoken")},data:o.a.stringify(t)})}function u(t,e){return Object(r["a"])({url:"customer_addr/".concat(t,"/"),method:"patch",data:o.a.stringify(e)})}}}]);