import{_ as y,o as r,c as u,a as l,w as i,F as S,r as w,C as m,f as d}from"./index.c3a0b934.2023_02_16_00_46_06.js";import{P as b}from"./index.95ea9eff.js";import{L as k}from"./index.60e50b8a.js";import{_ as h}from"./ccItem.0d389956.js";import"./index.16440a63.js";import{S as D}from"./index.106378a7.js";import{D as L,a as R}from"./index.eed96014.js";const C={components:{ccItem:h},props:{dataSource:{default:[]},itemKey:{},showKeys:{},params:{default:{title:"",page:1,size:20,text:"",menus:[]}}},data(){return{refreshing:!1,loading:!1,finished:!1,error:!1,text:"",menus:[{value:"",options:this.options1},{value:"desc",options:[{text:"\u6B63\u5E8F",value:"ase"},{text:"\u5012\u5E8F",value:"desc"}]}]}},computed:{options1(){return Object.keys(this.dataSource.reduce((t,e)=>({...t,...e}),{})).map(t=>({text:t,value:t}))}},watch:{text(){this.params.text=this.text}},created(){this.text=this.params.text},methods:{onConfirm(){},onRefresh(){this.loadData({page:1})},loadNextPage(){this.loading||(console.log("loadNextPage"),this.loadData({page:this.dataSource.length===0?1:this.params.page+1}))},loadData(t){t={...this.params,...t,order:"desc",sort:""},this.loading=!0,this.$emit("loadData",{...t,callback:e=>{Array.isArray(e)?e.length==0?this.finished=!0:(this.params.page=t.page,t.page===1?(this.finished=!1,this.dataSource.splice(0,this.dataSource.length,...e)):this.dataSource.splice(this.dataSource.length,0,...e)):this.error=!0,this.loading=!1,this.refreshing=!1,this.error=!1}})},open(){this.$emit("open",...arguments)}}},K={class:"ccList"};function N(t,e,a,P,s,n){const c=L,p=R,f=D,_=h,g=k,x=b;return r(),u("div",K,[a.params.menus&&a.params.menus.length?(r(),l(p,{key:0},{default:i(()=>[(r(!0),u(S,null,w(a.params.menus,(o,v)=>(r(),l(c,{key:v,modelValue:o.value,"onUpdate:modelValue":V=>o.value=V,options:o.options,onChange:n.onRefresh},null,8,["modelValue","onUpdate:modelValue","options","onChange"]))),128))]),_:1})):m("",!0),a.params&&a.params.text!==void 0?(r(),l(f,{key:1,modelValue:s.text,"onUpdate:modelValue":e[0]||(e[0]=o=>s.text=o),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",onSearch:n.onRefresh},null,8,["modelValue","onSearch"])):m("",!0),d(x,{modelValue:s.refreshing,"onUpdate:modelValue":e[2]||(e[2]=o=>s.refreshing=o),onRefresh:n.onRefresh},{default:i(()=>[d(g,{modelValue:s.loading,"onUpdate:modelValue":e[1]||(e[1]=o=>s.loading=o),finished:s.finished,error:s.error,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:n.loadNextPage,style:{"min-height":"50vh"}},{default:i(()=>[d(_,{title:a.params.title,dataSource:a.dataSource,onOpen:n.open,showKeys:a.showKeys},null,8,["title","dataSource","onOpen","showKeys"])]),_:1},8,["modelValue","finished","error","onLoad"])]),_:1},8,["modelValue","onRefresh"])])}const z=y(C,[["render",N],["__scopeId","data-v-db686b7b"]]);export{z as _};