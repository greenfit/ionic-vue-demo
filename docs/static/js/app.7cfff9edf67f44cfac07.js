webpackJsonp([3],{"D2/0":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r=t("Xxa5"),a=t.n(r),i=t("exGp"),c=t.n(i),s=(t("D2/0"),t("YPXY"),t("YaEn")),u={data:function(){return{items:s.a.options.routes,userInfo:{name:"Gay"}}},methods:{goToPath:function(e){this.$router.push(e),this.$parent.closeMenu()}},mounted:function(){}},l={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ion-menu",{attrs:{side:"start"}},[t("ion-header",[t("ion-toolbar",[t("ion-title",[e._v("菜单")])],1)],1),e._v(" "),t("ion-content",{staticClass:"mobile-menu-page"},[t("div",{staticClass:"spacer",staticStyle:{height:"1px"}}),e._v(" "),t("h3",{staticStyle:{color:"#000000","text-align":"center"},attrs:{"data-componentid":"heading1"}},[e._v("Welcome, "+e._s(e.userInfo.name))]),e._v(" "),t("ion-list",e._l(e.items,function(n){return n.component?t("ion-item",{key:n.path,on:{click:function(t){e.goToPath(n.path,n.component)}}},[t("ion-icon",{attrs:{name:n.icon,color:"primary"}}),t("ion-label",[e._v(e._s(n.name))])],1):e._e()}))],1)],1)},staticRenderFns:[]},p={name:"App",data:function(){return{title:"Ionic & VueJS Demo"}},components:{LeftMenu:t("VU/8")(u,l,!1,null,null,null).exports},methods:{openMenu:function(){document.querySelector("ion-menu-controller").open("start")},closeMenu:function(){document.querySelector("ion-menu-controller").close("start")},setTitle:function(e){this.title=e},showDialogAlert:function(e,n){var t=this;return c()(a.a.mark(function o(){var r,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector("ion-alert-controller"),t.next=3,r.componentOnReady();case 3:return t.next=5,r.create({header:e,message:n,buttons:["OK"]});case 5:return i=t.sent,t.next=8,i.present();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},o,t)}))()},showToast:function(e,n){var t=this;return c()(a.a.mark(function o(){var r,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector("ion-toast-controller"),t.next=3,r.componentOnReady();case 3:return t.next=5,r.create({message:n,duration:1e3,position:e,cssClass:"toast"});case 5:return i=t.sent,t.next=8,i.present(i);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},o,t)}))()},getLoading:function(){var e=this;return c()(a.a.mark(function n(){var t,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("ion-loading-controller"),e.next=3,t.componentOnReady();case 3:return e.next=5,t.create({spinner:"bubbles",duration:1e4,message:"数据加载中"});case 5:return o=e.sent,e.next=8,o;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},n,e)}))()}}},m={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("ion-app",[t("left-menu"),e._v(" "),t("div",{staticClass:"ion-page",attrs:{main:""}},[t("ion-header",[t("ion-toolbar",{attrs:{color:"primary"}},[t("ion-button",{attrs:{"icon-only":""},on:{click:function(n){e.openMenu()}}},[t("ion-icon",{attrs:{name:"menu"}})],1),e._v(" "),t("ion-title",[e._v(e._s(e.title))])],1)],1),e._v(" "),t("router-view")],1)],1),e._v(" "),t("ion-menu-controller"),e._v(" "),t("ion-alert-controller"),e._v(" "),t("ion-toast-controller"),e._v(" "),t("ion-loading-controller")],1)},staticRenderFns:[]},d=t("VU/8")(p,m,!1,null,null,null).exports;o.a.config.ignoredElements=[/^ion-/],o.a.config.productionTip=!1,new o.a({el:"#app",router:s.a,components:{App:d},template:"<App/>"})},YPXY:function(e,n){},YaEn:function(e,n,t){"use strict";var o=t("7+uW"),r=t("/ocq");o.a.use(r.a),o.a.config.ignoredElements=[/^ion-/],n.a=new r.a({routes:[{path:"/",name:"首页",icon:"home",homeDisable:!0,component:function(){return t.e(1).then(t.bind(null,"lO7g"))}},{path:"/list",name:"静态列表",icon:"list"},{path:"/query",name:"查询模板",icon:"cloud-outline",component:function(){return t.e(0).then(t.bind(null,"dEEB"))}},{path:"/chat",name:"图表模板",icon:"stats"},{path:"/userSetting",name:"个性化设置",icon:"construct",homeDisable:!0}]})}},["NHnr"]);
//# sourceMappingURL=app.7cfff9edf67f44cfac07.js.map