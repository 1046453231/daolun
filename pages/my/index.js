(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{"0cf4":function(e,n,t){},"6e8b":function(e,n,t){"use strict";t.r(n);var u=t("7f03"),a=t("9a41");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("9e61");var r,c=t("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=i.exports},"7f03":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return u}));var a=function(){var e=this,n=e.$createElement;e._self._c},o=[]},"9a41":function(e,n,t){"use strict";t.r(n);var u=t("bc31"),a=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,(function(){return u[e]}))}(o);n["default"]=a.a},"9e61":function(e,n,t){"use strict";var u=t("0cf4"),a=t.n(u);a.a},b164:function(e,n,t){"use strict";(function(e){t("c22e");u(t("66fd"));var n=u(t("6e8b"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},bc31:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{imgUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-35b719a0-35b1-4be5-90fa-7b932972d8dd/6042768a-e1b3-41c8-85c4-6a2c375aed5f.png",user:null}},methods:{goLogIn:function(){if(this.user)return e.setStorageSync("user_info",null),this.user=null,void e.reLaunch({url:"/pages/login/index"});e.navigateTo({url:"/pages/login/index"})},goCollect:function(){e.navigateTo({url:"/pages/my/selected"})},goUserMoreInfo:function(){e.navigateTo({url:"/pages/my/select"})},goMyself:function(){e.navigateTo({url:"/pages/register/index"})}},onLoad:function(){var n=this;e.getStorage({key:"user_info",success:function(e){console.log(e),n.user=e.data}})}};n.default=t}).call(this,t("543d")["default"])}},[["b164","common/runtime","common/vendor"]]]);