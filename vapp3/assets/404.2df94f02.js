import{appStore as p}from"./index.c71eea99.js";import{_ as o,o as n,c}from"./index.c3a0b934.2023_02_16_00_46_06.js";const h={mounted(){},methods:{click(s){var t=this.step;s.pageY<window.innerHeight/2?this.step<=1&&this.step++:this.step>1&&this.step<=3&&this.step++,this.step==t&&(s.pageX<window.innerWidth/2?this.step>3&&this.step<=5&&this.step++:this.step>5&&this.step<=7&&this.step++),this.step==t?this.step=0:this.step==8&&(p.isShow=!0,this.$router.push({path:"/views/entry"})),console.log("click1",s.pageX,s.pageY,t,this.step)}}};function a(s,t,r,d,_,e){return n(),c("div",{class:"notFound",onClick:t[0]||(t[0]=(...i)=>e.click&&e.click(...i))}," notFound ")}const u=o(h,[["render",a],["__scopeId","data-v-d4ced9ab"]]);export{u as default};