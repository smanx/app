import{c as h}from"./config.6caa491d.js";import{a as v}from"./axios.b9f958b0.js";import{_ as p,o as d,c,z as n,F as m,r as w,aJ as _,A as u,C as g}from"./index.f95248ab.2023_02_09_02_42_44.js";const k={data(){return{rows:[],current:0,isShowMask:!0,options:{scrollY:!0},isVideoLoading:!1,isMoreLoading:!1}},computed:{currentItem(){return this.rows.length>0?this.rows[this.current]:null}},created(){console.log("created banana"),this.loadData(!0)},mounted(){},methods:{scroll(s){let e=this.$refs.scroll.scrollTop,r=this.$refs.scroll.clientHeight,t=Math.round(e/r);this.changePage(t)},touchend(s){},loadData(s){this.isMoreLoading=!0,v({url:h.origin+"/minivod/reqlist",params:h.query()}).then(e=>{if(this.isMoreLoading=!1,console.log("success",e),e.status==200&&e.data.retcode==0){var r=[];e.data.data.rows.map(t=>{t.vodrow&&t.vodrow.vodid&&(t.videoUrl="",r.push(t))}),s?(this.rows=r,this.changePage(0)):this.rows.push(r[0])}else window.$dialog.alert({title:e.data.errmsg||e.statusCode||"fail"})}).catch(e=>{this.isMoreLoading=!1,window.$dialog.alert({title:e.message||"fail"})})},clickHandler(s,e){this.isShowMask=!this.isShowMask},tipClick(s){this.$refs.video.play(),this.isShowMask=!this.isShowMask,s.stopPropagation()},changePage(s){const e=this.rows[s],r=e.vodrow.vodid;document&&(document.title=e.vodrow.title),this.current=s,!e.videoUrl&&!this.isVideoLoading?(this.isVideoLoading=!0,v({url:h.origin+"/minivod/reqplay/"+r,params:h.query()}).then(t=>{this.isVideoLoading=!1,console.log("success",t);var l=t.data.data.httpurl||t.data.data.httpurl_preview;l?(console.log(l),this.rows[s].videoUrl=l,setTimeout(()=>{this.$refs["content"+this.current][0].appendChild(this.$refs.video),this.$refs.video.play()},20)):window.$dialog.alert({title:t.data.errmsg||t.statusCode||"fail"})}).catch(t=>{this.isVideoLoading=!1,window.$dialog.alert({title:t.message||"fail"})})):this.$refs["content"+this.current][0].querySelector(".video")||this.$refs["content"+this.current][0].appendChild(this.$refs.video),s==this.rows.length-1&&!this.isMoreLoading&&this.loadData()}},watch:{}},y=["src","poster"],C=["onClick"],M={key:0,class:"itemContent"},L=["src"];function S(s,e,r,t,l,o){return d(),c("div",{class:"scroll",ref:"scroll",onScroll:e[1]||(e[1]=(...i)=>o.scroll&&o.scroll(...i)),onTouchend:e[2]||(e[2]=(...i)=>o.touchend&&o.touchend(...i))},[n("video",{class:"video",controls:"controls",ref:"video",playsinline:"",autoplay:"",src:o.currentItem&&o.currentItem.videoUrl,poster:o.currentItem&&o.currentItem.vodrow.coverpic},null,8,y),(d(!0),c(m,null,w(l.rows,(i,a)=>(d(),c("div",{class:"swiperItem",key:a,onClick:f=>o.clickHandler(i,a),ref_for:!0,ref:"index"+a},[Math.abs(a-l.current)<3?(d(),c("div",M,[n("div",{class:"content",ref_for:!0,ref:"content"+a},[n("img",{src:i.vodrow.coverpic,style:_(l.current==a?"filter: blur(20px);":"")},null,12,L)],512),l.isShowMask?(d(),c("div",{key:0,class:"mask",onClick:e[0]||(e[0]=(...f)=>o.tipClick&&o.tipClick(...f))},[n("div",null,"@"+u(i.user.nickname),1),n("div",null,u(i.vodrow.title),1),n("div",null,u(i.vodrow.updatetime),1)])):g("",!0)])):g("",!0)],8,C))),128))],544)}const q=p(k,[["render",S],["__scopeId","data-v-6719b569"]]);export{q as default};