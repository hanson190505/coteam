(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{164:function(t,e,n){var content=n(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("647dd6a7",content,!0,{sourceMap:!1})},169:function(t,e,n){"use strict";var r=n(164);n.n(r).a},170:function(t,e,n){(e=n(35)(!1)).push([t.i,"h1{font-weight:700;font-size:2rem}.nuxt-content h2{font-weight:700;font-size:1.5rem}.nuxt-content h3{font-weight:700;font-size:1.2rem}.nuxt-content p{font-size:1rem}",""]),t.exports=e},189:function(t,e,n){"use strict";n.r(e);var r=n(45),c=(n(21),n(2)),o={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,f,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("cssbasic",c.slug).fetch();case 3:return o=e.sent,e.next=6,n("cssbasic").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return l=e.sent,f=Object(r.a)(l,2),d=f[0],v=f[1],e.abrupt("return",{bodyData:o,prev:d,next:v});case 11:case"end":return e.stop()}}),e)})))()}},l=(n(169),n(28)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-12 gap-4"},[n("div",{staticClass:"col-span-12"},[n("h1",[t._v(t._s(t.bodyData.title))])]),t._v(" "),n("div",{staticClass:"col-span-2"},[n("nav",[n("ul",t._l(t.bodyData.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])]),t._v(" "),n("div",{staticClass:"col-span-10"},[n("nuxt-content",{attrs:{document:t.bodyData}}),t._v(" "),n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);