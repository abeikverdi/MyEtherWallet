(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f68450"],{"113e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transfer-registrar-container"},[n("div",{staticClass:"transfer-registrar-content"},[n("h3",[t._v(t._s(t.$t("ens.commit.is-available",{domain:t.fullDomainName})))]),n("p",[t._v(t._s(t.$t("ens.commit.register-domain",{domain:t.fullDomainName})))]),n("div",{staticClass:"secret-phrase-container"},[n("label",{attrs:{for:"range-slider"}},[t._v(t._s(t.$t("ens.commit.how-many-years")))]),n("b-form-input",{attrs:{id:"range-slider",type:"range",min:"1",max:"20",step:"1"},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),n("div",[t._v("\n        "+t._s(t.duration>1?t.$tc("ens.commit.year",2,{duration:t.duration}):t.$tc("ens.commit.year",1))+"\n      ")])],1),n("div",{staticClass:"transfer-registrar-button"},[n("button",{class:["large-round-button-green-filled",t.loading?"disabled":"",t.info.disable?"disabled":""],on:{click:t.createCommitment}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("\n          "+t._s(t.$t("ens.register"))+"\n        ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.info.disable,expression:"info.disable"}]},[t._v(" "+t._s(t.info.msg)+" ")])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("c5f6"),n("bd86")),o=n("539d"),s=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={components:{"interface-bottom-text":o["a"]},props:{hostName:{type:String,default:""},createCommitment:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},data:function(){return{duration:"1"}},computed:l({},Object(s["b"])(["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},info:function(){var t=this.account.balance;return"0"===t?{disable:!0,msg:this.$t("ens.commit.no-balance")}:{disable:!1,msg:""}}}),watch:{duration:function(t){this.$emit("updateDuration",Number(t))}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},d=u,m=(n("bed1"),n("2877")),f=Object(m["a"])(d,a,r,!1,null,"5213b29a",null),p=f.exports;n.d(e,"default",(function(){return p}))},"9f40":function(t,e,n){},bed1:function(t,e,n){"use strict";var a=n("9f40"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-19f68450.5524e31f.js.map