import{c as l}from"./ccImg.b8ec102b.js";import{_ as i,o as d,c as u,z as r}from"./index.f95248ab.2023_02_09_02_42_44.js";import"./index.375de215.js";const p={components:{ccImg:l},data(){return{src:"http://122.9.132.112/img/bf.e763d6ea.png",url:"https://spectacular-youtiao-f4e424.netlify.app/api/file",videoUrl:"http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8",videoOptions:{autoplay:!0,controls:!0,sources:[{src:"https://hls-hw.xvideos-cdn.com/videos/hls/b7/c5/c3/b7c5c38fa6c14e0296420eb5955862a4/hls-250p-4c069.m3u8?e=1666277676&l=0&h=da15d1b09c669f48686ff9d688014e1a"}]}}},async created(){},methods:{async buttonClick(o){let c=await fetch(o).then(a=>a.json()),n=this.$util.trans.stringToUint8Array(c.str),s=new Blob([n]);debugger;let e=window.URL.createObjectURL(s),t=document.createElement("a");t.href=e,t.download=`buttonClick${Date.now()}`,t.click()}}},m=["src"],f=r("video",{src:"https://d2zihajmogu5jn.cloudfront.net/big-buck-bunny/rendition/rendition.m3u8",width:"100%",controls:"controls",playsinline:"","picture-in-picture-mode":["push","pop"],autoplay:!1},null,-1);function h(o,c,n,s,e,t){return d(),u("div",null,[r("img",{src:e.src,alt:""},null,8,m),f])}const y=i(p,[["render",h]]);export{y as default};