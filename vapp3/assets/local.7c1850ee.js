import{_ as w,a as y,r as d,o as I,c as x,b as u,w as h}from"./index.28bb9798.2022_10_26_04_14_06.js";import c from"./axios.1b521d90.js";import"./index.b805869b.js";import V from"./zip.c927a719.js";import{m as f}from"./index.afc22236.js";import"./axios.91e25212.js";import"./config.56e9fedd.js";const{zip:O,unzip:v}=V,p="http://192.168.123.1:888/Windows8/win11/91",S={components:{ccItem:()=>y(()=>import("./ccItem.fcd7d0f4.js"),["ccItem.fcd7d0f4.js","ccItem.384daec2.css","ccImg.7796a887.js","index.28bb9798.2022_10_26_04_14_06.js","index.11785688.css"],import.meta.url)},data(){return{inputText:"",page:0,pageSize:20,list:[],value1:"Favorites",value0:0,value2:2,option2:[{text:"\u5012\u5E8F",value:0},{text:"\u6B63\u5E8F",value:1}],option3:[{text:"\u5168\u90E8",value:0},{text:"\u5B58\u5728img",value:1},{text:"\u5B58\u5728video",value:2},{text:"\u5B58\u5728video2",value:3}],refreshing:!1,loading:!1,finished:!1,current:{},placeholder:0}},computed:{listV(){return this.list.map(e=>e)},option1(){let e=[];return this.list.length&&Object.keys(this.list[0]).forEach(t=>{e.includes(t)||e.push(t)}),e.map(t=>({text:t,value:t}))},showKeys(){let e=[{key:"Views",type:"primary"},{key:"From",type:"success"},{key:"Added",type:"danger"},{key:"duration",type:"warning"}];return this.value1&&e.push({key:this.value1,type:"primary"}),e}},watch:{page(){clearTimeout(this.timer),this.timer=setTimeout(()=>{let e=this.getPageList();(this.list.length=e.length&&this.page>1)&&(this.finished=!0),this.list=e},100)}},async created(){let e=await c({url:`${p}/filenames.gzip`,responseType:"arraybuffer",responseEncoding:"utf8"}),t=JSON.parse(v(e.data));window.nine_file=t,this.getSourceData()},methods:{loadData(e){setTimeout(()=>{this.page=e,this.loading=!1},300)},async getSourceData(){let e=await c({url:`${p}/dataSourceNine.txt`,responseType:"arraybuffer",responseEncoding:"utf8"}),t=JSON.parse(v(e.data));t=this.addFileInfo(t),window.nine_data=t},addFileInfo(e){return window.nine_file.forEach(t=>{this.existInfoPath(e,t)}),e},existInfoPath(e,t){let s=t.split("/").reverse()[1],l=t.split("/").pop();if(l.split(".")[0],l&&e[s]){if(l.endsWith(".jpg")&&!l.startsWith("._")){let i=`${p}/video/${s}/${t.split("/").pop()}`;e[s].fileInfo={...e[s].fileInfo,img:i}}else if(l.endsWith(".m3u8")&&!l.startsWith("._")){let i=`${p}/video/${s}/${t.split("/").pop()}`;e[s].fileInfo={...e[s].fileInfo,src:i}}}},existInfo(e,t,s){let l=e.img.split("/").pop(),i=l.split(".")[0],o=t.find(r=>r.endsWith(l)&&!r.startsWith("._")),n=t.find(r=>r.endsWith(i+".m3u8")&&!r.startsWith("._"));return o&&(o=`${p}/video/${e.viewkey}/${o.split("/").pop()}`),n&&(n=`${p}/video/${e.viewkey}/${n.split("/").pop()}`),{img:o,src:n}},search(){this.list=[],setTimeout(()=>{this.page=1,this.list=this.getPageList()},300)},getPageList(){this.page<=1&&(this.finished=!1);let e=window.nine_data;if(typeof e!="object")return[];let s=Object.keys(e).map(l=>(e[l].fileInfo&&(e[l].img=e[l].fileInfo.img,e[l].fileInfo_src=e[l].fileInfo.src),e[l])).filter(l=>{let i=!0;return this.value2==1&&(i=i&&l.fileInfo&&l.fileInfo.img),this.value2==2&&(i=i&&l.fileInfo&&l.fileInfo.src),this.value2==3&&(i=i&&l.fileInfo&&l.fileInfo.src),this.inputText&&(i=i&&[l.title,l[this.value1]].some(o=>(o+"").toLowerCase().includes(this.inputText.toLowerCase()))),i}).sort((l,i)=>parseFloat(l[this.value1])==l[this.value1]&&parseFloat(i[this.value1])==i[this.value1]?this.value0==0?i[this.value1]-l[this.value1]:l[this.value1]-i[this.value1]:this.value0==0?String(i[this.value1]).localeCompare(String(l[this.value1])):String(l[this.value1]).localeCompare(String(i[this.value1])));return this.placeholder=s.length,s=s.slice(0,this.page*this.pageSize),console.log("keys",s.map(l=>l[this.value1]).slice(0,this.pageSize)),s},async open(e,t){if(e&&t.href&&!t.detail_src&&!t.fileInfo_src){let s=weui.loading(),l=await f.axios({params:{uuu:t.href}});s.hide();let i=f.utils.format.all(l.data);this.$set(t,"detail_src",i.detail.src)}},async itemClick(e){if(!(e.detail||e.fileInfo.src)){let t=weui.loading(),s=await f.axios({params:{uuu:e.href}});t.hide();let l=f.utils.format.all(s.data);this.$set(e,"detail",l.detail)}this.current=e.detai||e.fileInfo}}};function C(e,t,s,l,i,o){const n=d("van-dropdown-item"),r=d("van-dropdown-menu"),m=d("van-search"),g=d("ccItem"),_=d("van-list");return I(),x("div",null,[u(r,null,{default:h(()=>[u(n,{modelValue:i.value1,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value1=a),options:o.option1,onChange:o.search},null,8,["modelValue","options","onChange"]),u(n,{modelValue:i.value0,"onUpdate:modelValue":t[1]||(t[1]=a=>i.value0=a),options:i.option2,onChange:o.search},null,8,["modelValue","options","onChange"]),u(n,{modelValue:i.value2,"onUpdate:modelValue":t[2]||(t[2]=a=>i.value2=a),options:i.option3,onChange:o.search},null,8,["modelValue","options","onChange"])]),_:1}),u(m,{modelValue:i.inputText,"onUpdate:modelValue":t[3]||(t[3]=a=>i.inputText=a),placeholder:i.placeholder+"",onSearch:o.search},null,8,["modelValue","placeholder","onSearch"]),u(_,{modelValue:i.loading,"onUpdate:modelValue":t[4]||(t[4]=a=>i.loading=a),finished:i.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:t[5]||(t[5]=a=>o.loadData(i.page+1))},{default:h(()=>[u(g,{dataSource:o.listV,onOpen:o.open,showKeys:o.showKeys},null,8,["dataSource","onOpen","showKeys"])]),_:1},8,["modelValue","finished"])])}const b=w(S,[["render",C],["__scopeId","data-v-c43d5e72"]]);export{b as default};