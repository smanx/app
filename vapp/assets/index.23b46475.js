class g{constructor(n,e,{onupgradeneeded:t,onversionchange:s=this._onversionchange}={}){this._name=n,this._version=e,this._onupgradeneeded=t,this._onversionchange=s,this._db=null}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((n,e)=>{let t=!1;setTimeout(()=>{t=!0,e(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const s=indexedDB.open(this._name,this._version);s.onerror=()=>e(s.error),s.onupgradeneeded=o=>{t?(s.transaction.abort(),o.target.result.close()):this._onupgradeneeded&&this._onupgradeneeded(o)},s.onsuccess=({target:o})=>{const r=o.result;t?r.close():(r.onversionchange=this._onversionchange.bind(this),n(r))}}),this}async getKey(n,e){return(await this.getAllKeys(n,e,1))[0]}async getAll(n,e,t){return await this.getAllMatching(n,{query:e,count:t})}async getAllKeys(n,e,t){return(await this.getAllMatching(n,{query:e,count:t,includeKeys:!0})).map(({key:s})=>s)}async getAllMatching(n,{index:e,query:t=null,direction:s="next",count:o,includeKeys:r}={}){return await this.transaction([n],"readonly",(a,i)=>{const u=a.objectStore(n),p=e?u.index(e):u,c=[];p.openCursor(t,s).onsuccess=({target:b})=>{const l=b.result;if(l){const{primaryKey:y,key:_,value:h}=l;c.push(r?{primaryKey:y,key:_,value:h}:h),o&&c.length>=o?i(c):l.continue()}else i(c)}})}async transaction(n,e,t){return await this.open(),await new Promise((s,o)=>{const r=this._db.transaction(n,e);r.onabort=({target:a})=>o(a.error),r.oncomplete=()=>s(),t(r,a=>s(a))})}async _call(n,e,t,...s){const o=(r,a)=>{r.objectStore(e)[n](...s).onsuccess=({target:i})=>{a(i.result)}};return await this.transaction([e],t,o)}_onversionchange(){this.close()}close(){this._db&&(this._db.close(),this._db=null)}static async deleteDatabase(n){await new Promise((e,t)=>{const s=indexedDB.deleteDatabase(n);s.onerror=({target:o})=>{t(o.error)},s.onblocked=()=>{t(new Error("Delete blocked"))},s.onsuccess=()=>{e()}})}}g.prototype.OPEN_TIMEOUT=2e3;(function(){const d={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[n,e]of Object.entries(d))for(const t of e)t in IDBObjectStore.prototype&&(g.prototype[t]=async function(s,...o){return await this._call(t,s,n,...o)})})();export{g as D};