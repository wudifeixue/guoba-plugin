import{b as e,r as a,G as s,e as n,o as t,i as l,j as r,k as i,ae as o,N as u,x as m,fr as c,d6 as d}from"./index.js";const p=e({__name:"SaleRadar",setup(e){const p=a(""),v=a(!1),g=a(500),h=s((()=>{let e={};return e.backgroundImage=`url(${p.value})`,e.height=`${g.value}px`,e}));return function(){return e=this,a=null,s=function*(){try{v.value=!0;let e=yield d.get({url:"/home/random-image",responseType:"blob"},{isTransformResponse:!1,isReturnNativeResponse:!0}),a=new Image;p.value=URL.createObjectURL(e.data),a.src=p.value,yield new Promise((e=>a.onload=e)),g.value=500}finally{v.value=!1}},new Promise(((n,t)=>{var l=e=>{try{i(s.next(e))}catch(a){t(a)}},r=e=>{try{i(s.throw(e))}catch(a){t(a)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,r);i((s=s.apply(e,a)).next())}));var e,a,s}(),(e,a)=>{const s=n("a-spin");return t(),l(m(c),{class:"random-iamge-card",title:"随机美图",style:{"min-height":"300px"}},{default:r((()=>[i(s,{spinning:v.value,style:{"min-height":"150px"}},{default:r((()=>[o("div",{class:"img",style:u(m(h))},null,4)])),_:1},8,["spinning"])])),_:1})}}});export{p as default};
