(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tushuguan/detail"],{"30d4":function(t,e,n){"use strict";var i={"mescroll-uni":()=>Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))},s=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.swiperList,(function(e,n){var i=e.substring(0,4);return{$orig:t.__get_orig(e),g0:i}}))),i=t.isAuth("tushuguan","座位"),s=t.isAuthFront("tushuguan","座位");t.$mp.data=Object.assign({},{$root:{l0:n,m0:i,m1:s}})},u=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},"6e6d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,s,u,r){try{var a=t[u](r),c=a.value}catch(o){return void n(o)}a.done?e(c):Promise.resolve(c).then(i,s)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var r=t.apply(e,n);function a(t){u(r,i,s,a,c,"next",t)}function c(t){u(r,i,s,a,c,"throw",t)}a(void 0)}))}}var a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var e=r(i.default.mark((function e(n){var s,u,r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),s=t.getStorageSync("nowTable"),e.next=4,this.$api.session(s);case 4:u=e.sent,this.user=u.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),r=t.getStorageSync("discusstushuguanCleanType"),r&&(t.removeStorageSync("discusstushuguanCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll));case 10:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","tushuguan"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},getStoreup:function(){var t=r(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"tushuguan",userid:this.user.id,type:1},t.next=3,this.$api.list("storeup",e);case 3:n=t.sent,this.storeupFlag=n.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var e=r(i.default.mark((function e(){var n,s,u,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,s={page:1,limit:1,refid:n.detail.id,tablename:"tushuguan",userid:n.user.id,type:1},e.next=4,n.$api.list("storeup",s);case 4:if(u=e.sent,1!=u.data.list.length){e.next=9;break}return a=u.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.del("storeup",JSON.stringify([a]));case 3:n.$utils.msg("取消成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.mingcheng,picture:n.swiperList[0],refid:n.detail.id,tablename:"tushuguan",type:1});case 3:n.$utils.msg("收藏成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onAcrossTap:function(e,n,i,s,u){if(t.setStorageSync("crossTable","tushuguan"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",i),t.setStorageSync("statusColumnValue",u),t.setStorageSync("tips",s),""!=i&&!i.startsWith("[")){var r=t.getStorageSync("crossObj");for(var a in r)if(a==i&&r[a]==u)return void this.$utils.msg(s)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=r(i.default.mark((function t(){var e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("tushuguan",this.id);case 2:e=t.sent,this.detail=e.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[];case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(i.default.mark((function t(e){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discusstushuguan",{page:e.num,limit:10,refid:this.id});case 2:n=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=r(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discusstushuguan/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()}}};e.default=a}).call(this,n("543d")["default"])},"91f0":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");i(n("66fd"));var e=i(n("e46c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},bb33:function(t,e,n){"use strict";var i=n("e7ac"),s=n.n(i);s.a},cd5c:function(t,e,n){"use strict";n.r(e);var i=n("6e6d"),s=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=s.a},e46c:function(t,e,n){"use strict";n.r(e);var i=n("30d4"),s=n("cd5c");for(var u in s)"default"!==u&&function(t){n.d(e,t,(function(){return s[t]}))}(u);n("bb33");var r,a=n("f0c5"),c=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"8b4ad54c",null,!1,i["a"],r);e["default"]=c.exports},e7ac:function(t,e,n){}},[["91f0","common/runtime","common/vendor"]]]);