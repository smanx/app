import{n as _,_ as s}from"./index.21b53d46.js";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"entry"},[i("div",{staticClass:"weui-cells__title"},[e._v(e._s(e.title))]),i("div",{staticClass:"weui-cells"},e._l(e.items,function(n,l){return i("router-link",{key:l,staticClass:"weui-cell weui-cell_access",attrs:{to:n.path,href:"javascript:"}},[i("div",{staticClass:"weui-cell__bd"},[i("p",[e._v(e._s(n.title))])]),i("div",{staticClass:"weui-cell__ft"},[e._v(e._s(n.desc||n.path))])])}),1)])},o=[];const c={"../../banana/views/index.vue":()=>s(()=>import("./index.f33ae689.js"),["assets/index.f33ae689.js","assets/index.21b53d46.js","assets/index.70ce4827.css"]),"../../entry/views/index.vue":()=>s(()=>Promise.resolve().then(function(){return m}),void 0),"../../nine/views/index.vue":()=>s(()=>import("./index.6b4aaf82.js"),["assets/index.6b4aaf82.js","assets/index.21b53d46.js","assets/index.70ce4827.css"]),"../../ppp/views/index.vue":()=>s(()=>import("./index.46f6b99b.js"),["assets/index.46f6b99b.js","assets/axios.c107535b.js","assets/index.21b53d46.js","assets/index.70ce4827.css","assets/config.f31e076d.js","assets/utils.cd430cb3.js","assets/index.99da5c49.js"]),"../../xv/views/index.vue":()=>s(()=>import("./index.8c58a0aa.js"),["assets/index.8c58a0aa.js","assets/index.21b53d46.js","assets/index.70ce4827.css"])},u={components:{},data(){return{title:"Hello",items:Object.keys(c).map(e=>{let t=e.replace("../../","");return{title:t.split("/")[0],path:`/${t.replace(".vue","")}`,desc:"desc"}})}},created(){},methods:{itemClick(e){},loadData(){return this.$request.find("Data",{where:'{"type":"webapp_find"}',limit:"100",order:"index"}).then(e=>{console.log("then",e),this.items=e}).catch(e=>{console.log("catch",e)})}},destroyed(){console.log("destroyed")}},r={};var d=_(u,a,o,!1,v,null,null,null);function v(e){for(let t in r)this[t]=r[t]}var p=function(){return d.exports}(),m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));export{p as default};