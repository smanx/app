import{c as o}from"./config.c00927f2.js";import n from"./list.169cd1ee.js";import{a as _}from"./index.fb3eb357.js";import{_ as m,r as w,o as i,c as l,b as c,F as h,e as p,f as s,d as v,t as L}from"./index.4c4a9a49.2022_10_27_03_16_14.js";const S={name:"keepAlive",components:{list:n},data(){return{dataSource2:{}}},computed:{dataSource:t=>_.banana.home.dataSource,v2sliderows(){let t=[];return this.dataSource&&this.dataSource.v2sliderows&&this.dataSource.v2sliderows.forEach(d=>{d.scene=="special.detail"&&t.push(d)}),t}},activated(){this.loadData()},created(){this.loadData()},methods:{swiperClick(t){this.$router.push({path:"./detail?spid="+t.spid})},loadData(){console.log("config",o,o.query()),this.$axios.request({url:o.home,params:o.query()}).then(t=>{console.log("success",t),t.status==200&&t.data.retcode==0?this.$store.commit("dataSource",t.data.data):weui.topTips(t.data.errmsg||t.statusCode||"fail")}).catch(t=>{weui.topTips(t.message||"fail")})}}},f={key:0,class:"home"},g={class:"swiper"},k=["onClick"],y=["src"],C=["textContent"];function x(t,d,b,D,q,a){const e=w("list");return a.dataSource?(i(),l("div",f,[c("div",g,[(i(!0),l(h,null,p(a.v2sliderows,(r,u)=>(i(),l("div",{class:"swiperItem",key:u,onClick:B=>a.swiperClick(r)},[c("img",{class:"image",src:r.pic,mode:"widthFix"},null,8,y),c("span",{textContent:L(r.title)},null,8,C)],8,k))),128))]),s(e,{title:"\u9999\u8549\u5934\u6761dayrows",dataList:a.dataSource.dayrows},null,8,["dataList"]),s(e,{title:"\u6700\u65B0\u89C6\u9891latestrows",dataList:a.dataSource.latestrows},null,8,["dataList"]),s(e,{title:"\u731C\u4F60\u559C\u6B22likerows",dataList:a.dataSource.likerows},null,8,["dataList"]),s(e,{title:"\u5077\u62CD\u81EA\u62CDa_vodrows",dataList:a.dataSource.a_vodrows},null,8,["dataList"]),s(e,{title:"\u6210\u4EBA\u52A8\u6F2Bb_vodrows",dataList:a.dataSource.b_vodrows},null,8,["dataList"]),s(e,{title:"\u7ECF\u5178\u4F26\u7406c_vodrows",dataList:a.dataSource.c_vodrows},null,8,["dataList"]),s(e,{title:"\u4E2D\u6587\u5B57\u5E55d_vodrows",dataList:a.dataSource.d_vodrows},null,8,["dataList"]),s(e,{title:"\u4E0D\u96C5\u89C6\u9891tagvodrows",dataList:a.dataSource.tagvodrows},null,8,["dataList"]),s(e,{title:"\u70ED\u7247\u89C6\u9891hotrows",dataList:a.dataSource.hotrows},null,8,["dataList"])])):v("",!0)}const I=m(S,[["render",x],["__scopeId","data-v-bd7e68c6"]]);export{I as default};