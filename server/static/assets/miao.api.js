var e=(e,t,n)=>new Promise(((r,o)=>{var a=e=>{try{i(n.next(e))}catch(t){o(t)}},l=e=>{try{i(n.throw(e))}catch(t){o(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,l);i((n=n.apply(e,t)).next())}));import{d3 as t,x as n,bV as r}from"./index.js";function o(){return t.get({url:"/plugin/miao/help"},{errorMessageMode:"modal"})}function a(o,a,l,i){return e(this,null,(function*(){let u=new FormData;return u.append("helpCfg",JSON.stringify(n(o),null,2)),u.append("helpList",JSON.stringify(n(a),null,2)),u.append("icon",yield function(t){return e(this,null,(function*(){let{createMessage:e}=r(),n=document.createElement("canvas");n.width=1e3,n.height=100*Math.ceil((t.length-1)/10);let o,a,l=n.getContext("2d");for(let r=0;r<t.length;r++){let n=t[r+1];if(!n)continue;let u=new Image;a=Math.floor(r/10),o=r-10*a,u.src=n;try{yield c(u)}catch(i){e.error(`第 ${r+1} 个图标保存失败`);continue}l.drawImage(u,100*o,100*a,100,100)}return new Promise((e=>n.toBlob(e)))}))}(n(l))),u.append("main",yield function(e){const t=e.split(","),n=t[0].match(/:(.*?);/)[1],r=window.atob(t[1]);let o=r.length;const a=new Uint8Array(o);for(;o--;)a[o]=r.charCodeAt(o);return new Blob([a],{type:n})}(n(i))),t.post({url:"/plugin/miao/help",params:u},{errorMessageMode:"modal"})}))}function l(){return u("/plugin/miao/help/theme/main")}function i(){return u("/plugin/miao/help/theme/bg")}function u(n){return e(this,null,(function*(){let e=(yield t.get({url:n,responseType:"blob"},{isTransformResponse:!1,isReturnNativeResponse:!0,errorMessageMode:"modal"})).data;return yield function(e){return new Promise((t=>{let n=new FileReader;n.readAsDataURL(e),n.onload=function(e){t(e.target.result)}}))}(e)}))}function s(t){return e(this,null,(function*(){t||(t=yield u("/plugin/miao/help/icon"));let e=new Image;return e.src=t,yield c(e),yield function(e){return new Promise((t=>{e.setAttribute("crossOrigin","Anonymous");let n=document.createElement("canvas");n.width=100,n.height=100;let r=n.getContext("2d");if(r){let o,a,l=[],i=Math.round(e.height/10);for(let t=0;t<i;t++)a=Math.floor(t/10),o=t-10*a,r.drawImage(e,100*o,100*a,100,100,0,0,100,100),l[t+1]=n.toDataURL(),r.clearRect(0,0,100,100);t(l)}else t(null)}))}(e)}))}function c(t){return e(this,null,(function*(){return new Promise(((e,n)=>{t.onload=e,t.onerror=n}))}))}function d(){return t.get({url:"/plugin/miao/help/backup/list"},{errorMessageMode:"modal"})}function p(e){return t.post({url:"/plugin/miao/help/backup",params:{remark:e}},{errorMessageMode:"modal"})}function m(e){return t.post({url:"/plugin/miao/help/backup/restore",params:{id:e}},{errorMessageMode:"modal"})}function h(e){return t.delete({url:"/plugin/miao/help/backup/delete",params:{id:e}},{errorMessageMode:"modal"})}export{i as a,l as b,s as c,d,p as e,h as f,o as g,m as r,a as s};
