import{_ as u}from"./data.84552aea.js";import _ from"./axios.226d1664.js";import d from"./utils.384f32c3.js";import{_ as f,r as o,o as a,c as i,h,w as k,F as v,b as x,a as C}from"./index.7d095a7f.2022_10_27_10_42_17.js";import"./index.0ae56dc1.js";import"./axios.91e25212.js";import"./config.f31e076d.js";import"./index.b805869b.js";const $={mixins:[u],data(){return{items:[{title:"Home",path:"./home"},{title:"Star",path:"./star"},{title:"Detail",path:"./detail"}]}},async created(){let e=window.$toast.loading({duration:0}),l=await _();e.clear();let r=d.format.all(l.data);this.items=r.findV},methods:{itemClick(e){this.$router.push({path:"./list",query:{href:btoa(e.href)}})}}};function g(e,l,r,w,n,s){const c=o("van-cell"),m=o("van-cell-group");return a(),i("div",null,[h(m,null,{default:k(()=>[(a(!0),i(v,null,x(n.items,(t,p)=>(a(),C(c,{key:p,title:t.title||t.title,value:t.href||t.title,"is-link":"",onClick:y=>s.itemClick(t)},null,8,["title","value","onClick"]))),128))]),_:1})])}const L=f($,[["render",g]]);export{L as default};