import{_ as q,a as B,r as u,b as i,o as L,c as A,d as n,F as R,f as T,w as r,D as O,U as N,i as j,s as J,N as m,h as F,e as p,t as M,l as E,p as P,j as G}from"./index.d9e2d379.js";const z={name:"Account",components:{},setup(){B(()=>{var a;t.value=(a=JSON.parse(window.localStorage.getItem("accountList")))!=null?a:[],c.value=JSON.parse(window.localStorage.getItem("ID"))});const c=u(null),t=u([]),S=u(""),e=u(null),y=u(""),D=u(!1),_=u(!1),w=u(!1),v=()=>history.back(),f=()=>{_.value=!0,S.value="",y.value=""},k=a=>{b(a)},b=a=>{if(c.value=JSON.parse(window.localStorage.getItem("ID")),a!==c.value)return new Promise(l=>{O.confirm({title:"\u786E\u5B9A\u5207\u6362\u8D26\u6237\u5417\uFF1F"}).then(o=>{let s=t.value.find(h=>h.id==a);console.log(s);let d=new Date().getTime(),V={data:{},timestamp:d,sign:N.sisgn(d,s.sign)},U=s.serverUrl+"/config/query";j.post(U,V).then(h=>{h.data.code===200?(N.serverUrl(s.serverUrl),N.sign(s.sign),window.localStorage.setItem("ID",s.id),J.dispatch("SAVE_SERVER_URL",s.serverUrl),J.dispatch("SAVE_SIGN",s.sign),c.value=s.id,c.value=JSON.parse(window.localStorage.getItem("ID")),m({type:"success",message:"\u8D26\u6237\u5207\u6362\u6210\u529F,\u8BF7\u624B\u52A8\u5237\u65B0\u9875\u9762\u751F\u6548\u914D\u7F6E"})):m({type:"danger",message:h.data.msg})}).catch(h=>{m({type:"danger",message:"\u670D\u52A1\u5668\u8FDE\u63A5\u5931\u8D25,\u8BF7\u53F3\u6ED1\u7F16\u8F91\u68C0\u67E5\u8D26\u6237\u4FE1\u606F\u662F\u5426\u6B63\u786E"})})}).catch(()=>{})})},I=a=>{let l=t.value.map(d=>d.id),o=Math.max.apply(null,l);a.id=o+1,t.value.push(a);let s=JSON.stringify(t.value);window.localStorage.setItem("accountList",s),m({type:"success",message:"\u8D26\u6237\u6DFB\u52A0\u6210\u529F,\u8BF7\u9009\u62E9\u8D26\u6237\u8FDB\u884C\u767B\u9646\u6821\u9A8C"}),_.value=!1},C=a=>{a.id=e;let l=t.value.map(s=>s.id).indexOf(e.value);t.value.splice(l,1,a);let o=JSON.stringify(t.value);window.localStorage.setItem("accountList",o),m({type:"success",message:"\u8D26\u6237\u672C\u5730\u4FEE\u6539\u6210\u529F,\u8BF7\u9009\u62E9\u8D26\u6237\u8FDB\u884C\u767B\u9646\u6821\u9A8C"}),w.value=!1},g=a=>{if(a===JSON.parse(window.localStorage.getItem("ID")))return m({type:"warning",message:"\u8BF7\u52FF\u7F16\u8F91\u5F53\u524D\u9009\u62E9\u9879\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u65B0\u589E\u8D26\u6237"});{w.value=!0;let l=t.value.find(o=>o.id===a);S.value=l.serverUrl,y.value=l.sign,e.value=a}};return{onClickLeft:v,onAdd:f,checked:c,show:_,editId:e,editShow:w,username:S,password:y,accountList:t,onSubmit:I,passwordStatus:D,beforeClose:({position:a,name:l})=>{switch(a){case"left":return g(l);case"cell":case"outside":return!0;case"right":return new Promise(o=>{O.confirm({title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F"}).then(s=>{if(l===JSON.parse(window.localStorage.getItem("ID")))return m({type:"warning",message:"\u4E0D\u80FD\u5220\u9664\u5F53\u524D\u542F\u7528\u9879,\u8BF7\u5207\u6362\u8D26\u53F7\u518D\u5C1D\u8BD5\u5220\u9664"});{let d=t.value.map(U=>U.id).indexOf(l);t.value.splice(d,1);let V=JSON.stringify(t.value);window.localStorage.setItem("accountList",V)}}).catch(()=>{})})}},ClickChecked:k,ChangeChecked:b,onEditSubmit:C}}},H=c=>(P("data-v-718c57c0"),c=c(),G(),c),K={id:"Account"},Q={class:"accountInfo"},W={class:"custom-title"},X=H(()=>p("div",{class:"line"},null,-1)),Y={id:"AccountList"},Z={style:{margin:"16px"}},$={id:"AccountList"},ee={style:{margin:"16px"}};function te(c,t,S,e,y,D){const _=i("van-nav-bar"),w=i("van-contact-card"),v=i("van-button"),f=i("van-image"),k=i("van-radio"),b=i("van-cell"),I=i("van-swipe-cell"),C=i("van-radio-group"),g=i("van-field"),x=i("van-cell-group"),a=i("van-form"),l=i("van-action-sheet");return L(),A("div",K,[n(_,{title:"\u8D26\u6237","left-text":"","left-arrow":"",onClickLeft:e.onClickLeft},null,8,["onClickLeft"]),n(w,{type:"add",onClick:e.onAdd,"add-text":"\u6DFB\u52A0\u8D26\u6237"},null,8,["onClick"]),(L(!0),A(R,null,T(e.accountList,(o,s)=>(L(),F(C,{modelValue:e.checked,"onUpdate:modelValue":t[0]||(t[0]=d=>e.checked=d),key:s},{default:r(()=>[n(I,{"before-close":e.beforeClose,name:o.id},{left:r(()=>[n(v,{square:"",type:"primary",class:"delete-button",text:"\u7F16\u8F91"})]),right:r(()=>[n(v,{square:"",text:"\u5220\u9664",type:"danger",class:"delete-button"})]),default:r(()=>[n(b,{center:"",clickable:"",onClick:d=>e.ClickChecked(o.id)},{title:r(()=>[p("div",Q,[n(f,{round:"",width:"2.5rem",height:"2.5rem",src:"https://ui-avatars.com/api/?name="+s+"&background=random&rounded=true"},null,8,["src"]),p("span",W,M(o.serverUrl),1)])]),"right-icon":r(()=>[n(k,{"checked-color":"#ff66ff",name:o.id,onClick:d=>e.ClickChecked(o.id)},null,8,["name","onClick"])]),_:2},1032,["onClick"])]),_:2},1032,["before-close","name"]),X]),_:2},1032,["modelValue"]))),128)),n(l,{show:e.show,"onUpdate:show":t[4]||(t[4]=o=>e.show=o),title:"\u65B0\u589E\u8D26\u6237",style:{height:"50%"}},{default:r(()=>[p("div",Y,[n(f,{round:"",width:"100px",height:"100px",src:"./static/image/login.png"}),n(a,{onSubmit:e.onSubmit},{default:r(()=>[n(x,{inset:""},{default:r(()=>[n(g,{modelValue:e.username,"onUpdate:modelValue":t[1]||(t[1]=o=>e.username=o),name:"serverUrl",label:"\u670D\u52A1\u5668",placeholder:"\u670D\u52A1\u5668",rules:[{required:!0,message:"\u8BF7\u586B\u670D\u52A1\u5668\u5730\u5740"}]},null,8,["modelValue"]),n(g,{modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=o=>e.password=o),type:e.passwordStatus?"text":"password","right-icon":e.passwordStatus?"eye":"closed-eye",onClickRightIcon:t[3]||(t[3]=o=>e.passwordStatus=!e.passwordStatus),name:"sign",label:"\u79D8\u94A5",placeholder:"\u79D8\u94A5",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u79D8\u94A5"}]},null,8,["modelValue","type","right-icon"])]),_:1}),p("div",Z,[n(v,{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[E(" \u786E\u8BA4\u6DFB\u52A0 ")]),_:1})])]),_:1},8,["onSubmit"])])]),_:1},8,["show"]),n(l,{show:e.editShow,"onUpdate:show":t[8]||(t[8]=o=>e.editShow=o),title:"\u4FEE\u6539\u8D26\u6237",style:{height:"50%"}},{default:r(()=>[p("div",$,[n(f,{round:"",width:"100px",height:"100px",src:"./static/image/login.png"}),n(a,{onSubmit:e.onEditSubmit},{default:r(()=>[n(x,{inset:""},{default:r(()=>[n(g,{modelValue:e.username,"onUpdate:modelValue":t[5]||(t[5]=o=>e.username=o),name:"serverUrl",label:"\u670D\u52A1\u5668",placeholder:"\u670D\u52A1\u5668",rules:[{required:!0,message:"\u8BF7\u586B\u670D\u52A1\u5668\u5730\u5740"}]},null,8,["modelValue"]),n(g,{modelValue:e.password,"onUpdate:modelValue":t[6]||(t[6]=o=>e.password=o),type:e.passwordStatus?"text":"password","right-icon":e.passwordStatus?"eye":"closed-eye",onClickRightIcon:t[7]||(t[7]=o=>e.passwordStatus=!e.passwordStatus),name:"sign",label:"\u79D8\u94A5",placeholder:"\u79D8\u94A5",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u79D8\u94A5"}]},null,8,["modelValue","type","right-icon"])]),_:1}),p("div",ee,[n(v,{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[E(" \u786E\u8BA4\u4FEE\u6539 ")]),_:1})])]),_:1},8,["onSubmit"])])]),_:1},8,["show"])])}var ae=q(z,[["render",te],["__scopeId","data-v-718c57c0"]]);export{ae as default};