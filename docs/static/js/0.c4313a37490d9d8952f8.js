webpackJsonp([0],{U2V0:function(t,e){},dEEB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("U2V0");var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ion-content",[n("ion-list",[n("ion-list-header",[t._v("\n      内容的字体大小:"+t._s(t.fontSize)+"px\n    ")]),t._v(" "),n("ion-item",[n("ion-range",{attrs:{step:"1",snaps:"true",min:"10",max:"30",value:t.fontSize},on:{ionChange:t.changeFontSize}},[n("ion-label",{attrs:{slot:"start"},slot:"start"},[n("p",{staticStyle:{"font-size":"10px"}},[t._v("A")])]),t._v(" "),n("ion-label",{attrs:{slot:"end"},slot:"end"},[n("p",{staticStyle:{"font-size":"30px"}},[t._v("A")])])],1)],1)],1),t._v(" "),n("ion-card",[n("ion-card-content",{staticClass:"query-card"},[n("ion-select",{attrs:{interface:"action-sheet",placeholder:"选择平台"},on:{ionChange:t.changePlatform}},t._l(t.platformList,function(e,o){return n("ion-select-option",{key:o},[t._v(t._s(e))])})),t._v(" "),n("ion-searchbar",{attrs:{placeholder:"查询关键词"},on:{ionChange:t.changeContent}}),t._v(" "),t.error.display?n("ion-label",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e()],1)],1),t._v(" "),t._l(t.gameList,function(e){return n("ion-card",{key:t.gameList.id},[n("ion-card-content",[n("p",[t._v("游戏名称: "+t._s(e.info))]),t._v(" "),n("p",[t._v("游戏平台: "+t._s(e.platform))]),t._v(" "),n("p",[t._v("上市时间: "+t._s(e.onlineTime))]),t._v(" "),n("p",[t._v("游戏价格: "+t._s(e.price))]),t._v(" "),n("p",[t._v("游戏介绍: ")]),n("p",{style:t.fontStyle},[t._v(t._s(e.info))]),n("p")])],1)}),t._v(" "),n("ion-card",[n("ion-card-content",[n("p",[t._v("游戏名称: 暗黑破坏神Ⅲ")]),t._v(" "),n("p",[t._v("游戏平台: Swtich")]),t._v(" "),n("p",[t._v("上市时间: 2018-12-30 00:00:00")]),t._v(" "),n("p",[t._v("游戏价格: 8848")]),t._v(" "),n("p",[t._v("游戏介绍: "),n("span",{style:t.fontStyle},[t._v("暴雪爸爸, 这个有点贵啊~~~")])])])],1),t._v(" "),n("ion-infinite-scroll",{attrs:{threshold:"1px"},on:{ionInfinite:t.loadData}},[n("ion-infinite-scroll-content",{attrs:{"loading-spinner":"bubbles","loading-text":"加载中..."}})],1)],2)},staticRenderFns:[]},a=n("VU/8")({data:function(){return{fontSize:14,platformList:[],gameList:[],queryParam:{platform:"",keyword:"",pageNo:1,pageSize:10},error:{message:"",display:!1}}},computed:{fontStyle:function(){return"font-size: "+this.fontSize+"px"}},methods:{loadPlatformList:function(){this.platformList=["Switch","PS4","XBox"]},changeFontSize:function(t){this.fontSize=t.detail.value},changePlatform:function(t){this.error.display=!1,this.queryParam.platform=t.detail.value,this.queryParam.keyword.length>0&&this.queryGameInfo(!1)},changeContent:function(t){this.error.display=!1,this.queryParam.keyword=t.detail.value,this.queryParam.keyword.length>0&&(this.queryParam.platform.length<=0?(this.error.message="请选择要查询的平台",this.error.display=!0):this.queryGameInfo())},queryGameInfo:function(t,e){this.$parent.showToast("top","没有查询到内容")},loadData:function(t){var e=t.target;this.queryParam.pageNo+=this.queryParam.pageNo,this.queryGameInfo(!0,function(){e.complete()})}},mounted:function(){this.loadPlatformList(),this.$parent.setTitle("查询模板")}},o,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=0.c4313a37490d9d8952f8.js.map