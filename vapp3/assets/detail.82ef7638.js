import{c as e}from"./config.6caa491d.js";import i from"./list.ee819e51.js";import{a as c}from"./axios.b9f958b0.js";import{_ as r,M as d,o as l,c as n,z as a,A as p,f as u}from"./index.f95248ab.2023_02_09_02_42_44.js";import"./index.456f9c5f.js";const _={components:{list:i},data(){return{dataSource:{row:{}},spid:""}},computed:{},created(){this.spid=this.$route.query.spid,this.loadData()},methods:{loadData(){console.log("config",e,e.query()),c.request({url:e.origin+"/special/detail/"+this.spid,params:e.query()}).then(t=>{console.log("success",t),t.status==200&&t.data.retcode==0?this.dataSource=t.data.data:window.$dialog.alert({title:t.data.errmsg||t.statusCode||"fail"})}).catch(t=>{window.$dialog.alert({title:t.message||"fail"})})}}},m={class:"detail"},f=["src"];function g(t,h,w,v,o,S){const s=d("list");return l(),n("div",m,[a("img",{class:"image",mode:"widthFix",src:o.dataSource.row.pic||o.dataSource.row.coverpic},null,8,f),a("div",null,p(o.dataSource.row.intro),1),u(s,{dataList:o.dataSource.vodrows},null,8,["dataList"])])}const $=r(_,[["render",g],["__scopeId","data-v-5b167d13"]]);export{$ as default};