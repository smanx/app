import{b as W,O as A,n as E,e as G,Q as T,as as Z,aa as B,aj as ee,av as te,W as ae,f as S,X as P,aK as ie,aL as re,at as ne,aM as oe,aN as se,g as le,_ as de,o as y,c as b,z as C,F as ue,r as ce,w as me,aJ as he,C as q,A as fe}from"./index.f95248ab.2023_02_09_02_42_44.js";import{c as N}from"./config.6caa491d.js";const[ve,_]=W("slider"),ge={min:A(0),max:A(100),step:A(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:E,buttonSize:E,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}};var we=G({name:ve,props:ge,emits:["change","drag-end","drag-start","update:modelValue"],setup(e,{emit:i,slots:m}){let d,r,h;const g=T(),u=T(),s=T(),V=Z(),w=B(()=>Number(e.max)-Number(e.min)),D=B(()=>{const t=e.vertical?"width":"height";return{background:e.inactiveColor,[t]:ee(e.barHeight)}}),f=t=>e.range&&Array.isArray(t),H=()=>{const{modelValue:t,min:a}=e;return f(t)?`${(t[1]-t[0])*100/w.value}%`:`${(t-Number(a))*100/w.value}%`},L=()=>{const{modelValue:t,min:a}=e;return f(t)?`${(t[0]-Number(a))*100/w.value}%`:"0%"},O=B(()=>{const a={[e.vertical?"height":"width"]:H(),background:e.activeColor};s.value&&(a.transition="none");const n=()=>e.vertical?e.reverse?"bottom":"top":e.reverse?"right":"left";return a[n()]=L(),a}),x=t=>{const a=+e.min,n=+e.max,l=+e.step;t=se(t,a,n);const o=Math.round((t-a)/l)*l;return re(a,o)},I=(t,a)=>JSON.stringify(t)===JSON.stringify(a),X=t=>{var a,n;const l=(a=t[0])!=null?a:Number(e.min),o=(n=t[1])!=null?n:Number(e.max);return l>o?[o,l]:[l,o]},v=(t,a)=>{f(t)?t=X(t).map(x):t=x(t),I(t,e.modelValue)||i("update:modelValue",t),a&&!I(t,h)&&i("change",t)},$=t=>{if(t.stopPropagation(),e.disabled||e.readonly)return;const{min:a,reverse:n,vertical:l,modelValue:o}=e,c=P(g),j=()=>l?n?c.bottom-t.clientY:t.clientY-c.top:n?c.right-t.clientX:t.clientX-c.left,K=l?c.height:c.width,p=Number(a)+j()/K*w.value;if(f(o)){const[M,z]=o,Q=(M+z)/2;p<=Q?v([p,z],!0):v([M,p],!0)}else v(p,!0)},F=t=>{e.disabled||e.readonly||(V.start(t),r=e.modelValue,f(r)?h=r.map(x):h=x(r),s.value="start")},J=t=>{if(e.disabled||e.readonly)return;s.value==="start"&&i("drag-start",t),ne(t,!0),V.move(t),s.value="dragging";const a=P(g),n=e.vertical?V.deltaY.value:V.deltaX.value,l=e.vertical?a.height:a.width;let o=n/l*w.value;if(e.reverse&&(o=-o),f(h)){const c=e.reverse?1-d:d;r[c]=h[c]+o}else r=h+o;v(r)},U=t=>{e.disabled||e.readonly||(s.value==="dragging"&&(v(r,!0),i("drag-end",t)),s.value="")},R=t=>typeof t=="number"?_("button-wrapper",["left","right"][t]):_("button-wrapper",e.reverse?"left":"right"),Y=(t,a)=>{if(typeof a=="number"){const n=m[a===0?"left-button":"right-button"];if(n)return n({value:t})}return m.button?m.button({value:t}):S("div",{class:_("button"),style:oe(e.buttonSize)},null)},k=t=>{const a=typeof t=="number"?e.modelValue[t]:e.modelValue;return S("div",{ref:u,role:"slider",class:R(t),tabindex:e.disabled?void 0:0,"aria-valuemin":e.min,"aria-valuenow":a,"aria-valuemax":e.max,"aria-disabled":e.disabled||void 0,"aria-readonly":e.readonly||void 0,"aria-orientation":e.vertical?"vertical":"horizontal",onTouchstartPassive:n=>{typeof t=="number"&&(d=t),F(n)},onTouchend:U,onTouchcancel:U,onClick:ie},[Y(a,t)])};return v(e.modelValue),te(()=>e.modelValue),ae("touchmove",J,{target:u}),()=>S("div",{ref:g,style:D.value,class:_({vertical:e.vertical,disabled:e.disabled}),onClick:$},[S("div",{class:_("bar"),style:O.value},[e.range?[k(0),k(1)]:k()])])}});const ye=le(we);const be={data(){return{sliderValue:0,minHeight:"100vh",mySwiper:null,rows:(()=>Array.from(Array(0)).map((e,i)=>({url:require(`@/assets/test/${i+1}.jpg`)})))()}},computed:{currentItem(){return this.rows.length?this.rows[this.mySwiper.activeIndex]:null}},watch:{"mySwiper.activeIndex":{handler:function(e){this.sliderValue=e,console.log("mySwiper",e),this.videoUrlUpdate(),e>=this.rows.length-2&&this.loadData(!1)}}},created(){this.minHeight=window.innerHeight+"px",this.loadData(!0)},mounted(){this.initSwiper()},methods:{loadImage(){},onChange(e){this.mySwiper.slideTo(e)},loadData(e){return this.$axios.request({url:N.origin+"/minivod/reqlist",params:N.query()}).then(i=>{if(console.log("success",i),i.status==200&&i.data.retcode==0){var m=[];i.data.data.rows.map(d=>{d.vodrow&&d.vodrow.vodid&&(d.videoUrl="",m.push(d))}),e?this.rows=m:this.rows.push(...m),this.$nextTick(()=>{this.mySwiper.updateSlides()})}else weui.topTips(i.data.errmsg||i.statusCode||"fail")}).catch(i=>{this.isMoreLoading=!1,weui.topTips(i.message||"fail")})},videoUrlUpdate(){this.$nextTick(()=>{this.$refs.video&&this.$refs.video.forEach(e=>{e.id==this.currentItem.vodrow.vodid?e.play():e.pause()})}),this.rows.filter((e,i)=>Math.abs(this.mySwiper.activeIndex-i)<=1).forEach(e=>{e.videoUrl||this.$axios.request({url:N.origin+e.vodrow.play_url,params:N.query()}).then(i=>{e.videoUrl=i.data.data.httpurl||i.data.data.httpurl_preview})})},initSwiper(){var e=new Swiper(".swiper",{loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});this.mySwiper=Array.isArray(e)?e[e.length-1]:e}}},_e={class:"swiper"},Se={class:"swiper-wrapper"},Ve={key:0,style:{height:"100%"}},xe=["id","autoplay","src","poster"],pe={style:{"margin-left":"20px",position:"absolute",bottom:"20px",width:"calc(100% - 40px)","z-index":"100"}},Ce={class:"custom-button",style:{}};function Ne(e,i,m,d,r,h){const g=ye;return y(),b("div",{class:"minVideo3",style:he(`min-height: ${r.minHeight};`)},[C("div",_e,[C("div",Se,[(y(!0),b(ue,null,ce(r.rows,(u,s)=>(y(),b("div",{class:"swiper-slide",key:s},[r.mySwiper&&Math.abs(r.mySwiper.activeIndex-s)<=1?(y(),b("div",Ve,[Math.abs(r.mySwiper.activeIndex-s)<=1?(y(),b("video",{key:0,class:"video",id:u.vodrow.vodid,controls:"controls",ref_for:!0,ref:"video",playsinline:"",autoplay:r.mySwiper.activeIndex==s,width:"100%",src:u.videoUrl,poster:u.vodrow&&u.vodrow.coverpic},null,8,xe)):q("",!0)])):q("",!0)]))),128))])]),C("div",pe,[S(g,{modelValue:r.sliderValue,"onUpdate:modelValue":i[0]||(i[0]=u=>r.sliderValue=u),onChange:h.onChange,max:r.rows.length-1,"inactive-color":"e0e0e0"},{button:me(()=>[C("div",Ce,fe(r.sliderValue),1)]),_:1},8,["modelValue","onChange","max"])])],4)}const Te=de(be,[["render",Ne],["__scopeId","data-v-0fd46763"]]);export{Te as default};