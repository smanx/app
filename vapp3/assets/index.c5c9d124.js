import{appStore as i,useDemoStore as p}from"./index.685fbd83.js";import{_ as l,s as u,o as c,c as d,f as e,t as n}from"./index.7d095a7f.2022_10_27_10_42_17.js";import{_ as f}from"./data.84552aea.js";import{J as v}from"./index.0ae56dc1.js";const S={mixins:[f],data(){return{demo:{},mouse:{},ccc:0}},computed:{...u(p,{demo2:"data"}),appStore:()=>i},created(){let o=v.composable.useMouse();this.mouse=o;const r=p();this.demo=r}},k=e("span",null,"-",-1);function b(t,o,r,x,s,a){return c(),d("div",null,[e("div",{onClick:o[0]||(o[0]=m=>s.demo.count++)},n(s.demo.count),1),e("div",{onClick:o[1]||(o[1]=m=>t.demo2.a++)},n(t.demo2.a),1),e("div",{onClick:o[2]||(o[2]=m=>a.appStore.banana.a++)},n(a.appStore.banana.a),1),e("div",{onClick:o[3]||(o[3]=m=>s.ccc++)},n(s.ccc),1),e("div",null,[e("span",null,n(s.mouse.x),1),k,e("span",null,n(s.mouse.y),1)])])}const D=l(S,[["render",b]]);export{D as default};