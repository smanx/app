import{c as o}from"./config.c00927f2.js";import i from"./list.169cd1ee.js";import{_ as c,r,o as d,c as n,b as s,t as l,f as p}from"./index.4c4a9a49.2022_10_27_03_16_14.js";const u={components:{list:i},data(){return{dataSource:{row:{}},spid:""}},computed:{},created(){this.spid=this.$route.query.spid,this.loadData()},methods:{loadData(){console.log("config",o,o.query()),this.$axios.request({url:o.origin+"/special/detail/"+this.spid,params:o.query()}).then(t=>{console.log("success",t),t.status==200&&t.data.retcode==0?this.dataSource=t.data.data:weui.topTips(t.data.errmsg||t.statusCode||"fail")}).catch(t=>{weui.topTips(t.message||"fail")})}}},_={class:"detail"},m=["src"];function f(t,h,g,v,e,w){const a=r("list");return d(),n("div",_,[s("img",{class:"image",mode:"widthFix",src:e.dataSource.row.pic||e.dataSource.row.coverpic},null,8,m),s("div",null,l(e.dataSource.row.intro),1),p(a,{dataList:e.dataSource.vodrows},null,8,["dataList"])])}const q=c(u,[["render",f],["__scopeId","data-v-71f8d427"]]);export{q as default};