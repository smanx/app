import{_ as c}from"./ccList.b4a80526.js";import{A as i,_ as p,o as m,c as d,f as _}from"./index.60d2c820.2024_04_03_04_20_21.js";import{_ as f}from"./data.95548b4f.js";import"./index.2fcfd625.js";import"./index.9e56f7ef.js";import"./ccItem.00431e4e.js";import"./index.28ffb25b.js";import"./ccImg.614e814e.js";import"./index.f25c3be7.js";import"./index.e217a46f.js";import"./use-id.3ab2d7ab.js";import"./index.fb0110d9.js";const l=Object.assign({"./axios.js":()=>i(()=>import("./axios.13c44745.js"),["./axios.13c44745.js","./axios.8446186b.js","./config.f31e076d.js"],import.meta.url),"./config.js":()=>i(()=>import("./config.f31e076d.js"),[],import.meta.url),"./utils.js":()=>i(()=>import("./utils.3e3c7601.js"),["./utils.3e3c7601.js","./index.2e893300.js"],import.meta.url)}),s={};for(const t in l){const e=l[t];let a=t.replace("./","").replace(".js","");s[a]=(await e()).default}const h={mixins:[f],components:{ccList:c},data(){return{dataSource:[],params:{title:"",page:1,size:20,text:"",menus:[{value:"",options:[{text:"all",value:""},{text:"jp",value:"jp"},{text:"kr",value:"kr"}]}]}}},computed:{showKeys(){return[]}},async created(){atob(this.$route.query.href).includes("cc=us")||(this.params.menus=[])},methods:{async loadData(t){let e=atob(this.$route.query.href);t.menus.length&&(e=e.replace("cc=us",`cc=${t.menus[0].value}`)),t.text&&(e="/video/search?search="+t.text),t.page>1&&(e+=e.includes("?")?`&page=${t.page}`:`?page=${t.page}`);let a=await s.axios({params:{uuu:e}}),o=s.utils.format.list(a.data);t.callback(o.list)},async open(t,e){if(console.log("open",e),t&&e.href&&!e.detail){let a=await s.axios({params:{uuu:e.href}}),{detail:o}=s.utils.format.detail(a.data);e.detail=o,e.mediaDefinitions=o.mediaDefinitions}}}};function g(t,e,a,o,n,r){const u=c;return m(),d("div",null,[_(u,{dataSource:n.dataSource,params:n.params,showKeys:r.showKeys,onLoadData:r.loadData,onOpen:r.open,onChange:r.loadData},null,8,["dataSource","params","showKeys","onLoadData","onOpen","onChange"])])}const K=p(h,[["render",g]]);export{K as default};