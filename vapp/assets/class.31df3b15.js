import{c as o}from"./config.959b753b.js";import d from"./list.3680ef69.js";import n from"./tagSelect.096eff72.js";import{n as l}from"./index.f08dcb0d.js";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"class"},[e._l(e.tags,function(i,s){return a("tagSelect",{key:s,ref:`tagSelect${s}`,refInFor:!0,attrs:{dataSource:i},on:{tagClick:function(g){return e.tagClick(s,arguments)}}})}),a("list",{attrs:{dataList:e.vodrows}}),e.dataSource.action?a("infinite-loading",{ref:"infiniteLoading",attrs:{identifier:e.identifier},on:{infinite:e.infinite}}):e._e()],2)},u=[];const p={components:{list:d,tagSelect:n},data(){return{page:0,identifier:0,vodrows:[],dataSource:{params:{},action:""},classList:[{key:"categories",query:"cateid",id:0},{key:"areas",query:"areaid",id:0},{key:"years",query:"yearid",id:0},{key:"definitions",query:"definition",id:0},{key:"durations",query:"duration",id:0},{key:"freetypes",query:"freetype",id:0},{key:"mosaics",query:"mosaic",id:0},{key:"langvoices",query:"langvoice",id:0},{key:"orders",query:"order",id:0}]}},computed:{tags(){let e=[];return this.classList.forEach(t=>{let a=this.dataSource[t.key];a&&e.push({items:[{id:0,title:"\u5168\u90E8"}].concat(a.map(i=>{let s=i.keyid||i.cateid||i.areaid||i.yearid;return{...i,id:s}})),id:t.id})}),e}},created(){this.loadBaseData()},methods:{tagClick(e,t){let a=0;t?a=t[0]:a=this.$refs["tagSelect"+e][0].idx,this.classList[e].id=this.tags[e].items[a].id},itemClick(e){e.spid&&uni.navigateTo({url:"./detail?spid="+e.spid})},infinite(e){console.log("onReachBottom"),this.loadPageData(this.page+1,e)},loadBaseData(){this.$axios.request({url:o.origin+"/vod/recommend",params:o.query()}).then(e=>{console.log("success",e),e.status==200&&e.data.retcode==0?this.dataSource=e.data.data:weui.topTips(e.data.errmsg||e.statusCode||"fail")}).catch(e=>{weui.topTips(e.message||"fail")})},loadPageData(e,t){this.$axios.request({url:o.origin+"/vod/listing-"+this.classList.map(a=>a.id).join("-")+"-"+this.page,params:o.query()}).then(a=>{console.log("success",a),a.status==200&&a.data.retcode==0?(this.page=e,this.page==1?this.vodrows=a.data.data.vodrows:this.vodrows=this.vodrows.concat(a.data.data.vodrows),a.data.data.vodrows.length<16?t&&t.complete():t&&t.loaded()):(weui.topTips(a.data.errmsg||a.statusCode||"fail"),t&&t.loaded())}).catch(a=>{t&&t.loaded(),weui.topTips(a.message||"fail")})}},watch:{classList:{deep:!0,handler(e){console.log("classList",e),this.page=0,this.vodrows=[],this.identifier=new Date().valueOf()}}}},r={};var f=l(p,c,u,!1,h,"2b8a5772",null,null);function h(e){for(let t in r)this[t]=r[t]}var w=function(){return f.exports}();export{w as default};