import{b as e,r as t,e as a,o as n,f as r,i as o,R as s,d6 as u}from"./index.js";import{_ as l}from"./MarkdownViewer.js";import"./onMountedOrActivated.js";const i=e({__name:"LoadGitee",setup(e){const i="/helper/transit?url="+encodeURIComponent("https://gitee.com/guoba-yunzai/resources/raw/master/other/TODO.md");let c,v=new Promise((e=>c=e));const m=t(!1),d=t("");function p(){c()}return function(){return e=this,t=null,a=function*(){m.value=!0,d.value=yield u.get({url:i},{isTransformResponse:!1}),yield v,m.value=!1},new Promise(((n,r)=>{var o=e=>{try{u(a.next(e))}catch(t){r(t)}},s=e=>{try{u(a.throw(e))}catch(t){r(t)}},u=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);u((a=a.apply(e,t)).next())}));var e,t,a}(),(e,t)=>{const u=a("a-skeleton");return n(),r("div",null,[m.value?(n(),o(u,{key:0,active:""})):s("",!0),d.value?(n(),o(l,{key:1,value:d.value,onInitOk:p},null,8,["value"])):s("",!0)])}}});export{i as default};
