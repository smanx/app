var v=Object.defineProperty,p=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var s=(t,e,o)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))m.call(e,o)&&s(t,o,e[o]);if(i)for(var o of i(e))f.call(e,o)&&s(t,o,e[o]);return t},c=(t,e)=>p(t,l(e));const r="https:",d="6jwti3892pf605m004mn.lagoapps.com",a=r+"//"+d,_={device:"iPhone 7 13.4 1.0",s_device_id:"374B5729-7F3F-4C8F-B6DE-80FF0A333633",s_os_version:"13.4",s_platform:"ios",_t:"1587401036000"};var F={protocol:r,host:d,origin:a,home:a+"/index",query:()=>c(n({},_),{_t:new Date().valueOf(),s_device_id:_.s_device_id+"-"+new Date().valueOf()+"-"+Math.random().toString().slice(2,8)})};export{F as c};