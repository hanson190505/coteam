(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-420996f6"],{6511:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("el-container",[s("el-header",{attrs:{height:"60px"}},[s("el-row",[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"logo"},[s("span",[e._v("CMS管理系统")])])]),s("el-col",{attrs:{span:14}},[s("nav-bar")],1),s("el-col",{attrs:{span:3}},[s("div",{staticClass:"userinfo"},[s("span",{staticClass:"username"},[e._v(e._s(this.$store.getters.name))]),s("el-button",{attrs:{type:"info",size:"medium"},on:{click:e.logout}},[e._v("退出")])],1)])],1)],1),s("el-main",{attrs:{height:""}},[s("router-view")],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-menu",{staticClass:"el-menu-home",attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{select:e.handleSelect}},[s("el-menu-item",{attrs:{index:"/dash"}},[e._v("首页")]),s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[e._v("客户管理")]),s("el-menu-item",{attrs:{index:"/customers"}},[e._v("客户列表")])],2),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[e._v("订单管理")]),s("el-menu-item",{attrs:{index:"/orders"}},[e._v("订单列表")]),s("el-menu-item",{attrs:{index:"/suborders"}},[e._v("订单明细")])],2),s("el-submenu",{attrs:{index:"3"}},[s("template",{slot:"title"},[e._v("采购管理")]),s("el-menu-item",{attrs:{index:"/purchases"}},[e._v("采购列表")]),s("el-menu-item",{attrs:{index:"/purchasedetails"}},[e._v("采购明细")])],2),s("el-submenu",{attrs:{index:"4"}},[s("template",{slot:"title"},[e._v("出货管理")]),s("el-menu-item",{attrs:{index:"/shiporders"}},[e._v("出货列表")]),s("el-menu-item",{attrs:{index:"/shipdetails"}},[e._v("出货明细")])],2),s("el-submenu",{attrs:{index:"5"}},[s("template",{slot:"title"},[e._v("产品管理")]),s("el-menu-item",{attrs:{index:"/products"}},[e._v("产品列表")]),s("el-menu-item",{attrs:{index:"/upload"}},[e._v("图片列表")])],2),e.checkpermission()?s("el-submenu",{attrs:{index:"6"}},[s("template",{slot:"title"},[e._v("系统管理")]),s("el-menu-item",{attrs:{index:"/staffs"}},[e._v("用户列表")])],2):e._e()],1)],1)},l=[],r={name:"navBar",data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(e,t){},checkpermission:function(){return 1===this.$store.getters.permissions}},created:function(){}},o=r,u=s("2877"),c=Object(u["a"])(o,i,l,!1,null,"235825a5",null),m=c.exports,d={name:"home",components:{navBar:m},data:function(){return{}},methods:{logout:function(){this.$store.dispatch("userInfo/logout"),this.$router.push("/login")}},created:function(){}},v=d,p=(s("764e"),Object(u["a"])(v,n,a,!1,null,"f8facef6",null));t["default"]=p.exports},"70c5":function(e,t,s){},"764e":function(e,t,s){"use strict";var n=s("70c5"),a=s.n(n);a.a}}]);