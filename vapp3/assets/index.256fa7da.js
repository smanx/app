import{appStore as p}from"./index.685fbd83.js";import{_ as n,o,c}from"./index.7d095a7f.2022_10_27_10_42_17.js";const a={mounted(){},methods:{click(e){var t=this.step;e.pageY<window.innerHeight/2?this.step<=1&&this.step++:this.step>1&&this.step<=3&&this.step++,this.step==t&&(e.pageX<window.innerWidth/2?this.step>3&&this.step<=5&&this.step++:this.step>5&&this.step<=7&&this.step++),this.step==t?this.step=0:this.step==8&&(p.isShow=!0,this.$router.push({path:"/views/entry"})),console.log("click1",e.pageX,e.pageY,t,this.step)}}};function h(e,t,r,d,l,s){return o(),c("div",{class:"index",onClick:t[0]||(t[0]=(...i)=>s.click&&s.click(...i))},"index")}const u=n(a,[["render",h],["__scopeId","data-v-8a2392ac"]]);export{u as default};