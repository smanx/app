var n=Object.defineProperty;var i=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&r(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&r(e,a,t[a]);return e};import{c as s}from"./config.3d405634.js";import _ from"./list.3235c773.js";import{m as p,n as m}from"./index.0b855258.js";import"./array-method-has-species-support.79f0c820.js";var v=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"detail"},[o("img",{staticClass:"image",attrs:{mode:"widthFix",src:t.dataSource.row.pic||t.dataSource.row.coverpic}}),o("div",[t._v(t._s(t.dataSource.row.intro))]),o("list",{attrs:{dataList:t.dataSource.vodrows}})],1)},f=[];const h={components:{list:_},data(){return{dataSource:{row:{}},spid:""}},computed:c({},p({})),created(){this.spid=this.$route.query.spid,this.loadData()},methods:{loadData(){console.log("config",s,s.query()),this.$axios.request({url:s.origin+"/special/detail/"+this.spid,params:s.query()}).then(e=>{console.log("success",e),e.status==200&&e.data.retcode==0?this.dataSource=e.data.data:weui.topTips(e.data.errmsg||e.statusCode||"fail")}).catch(e=>{weui.topTips(e.message||"fail")})}}},d={};var g=m(h,v,f,!1,w,"1e8b80ee",null,null);function w(e){for(let t in d)this[t]=d[t]}var $=function(){return g.exports}();export{$ as default};