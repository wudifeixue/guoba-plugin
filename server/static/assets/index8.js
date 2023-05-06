import{r as t,a8 as e,x as n,b as a,bi as s,G as o,v as r,a as u,s as l,Z as i,e as c,o as d,i as f,j as p,l as v,m,V as y,Q as C,$ as b,h as S,L as x,a0 as g,a1 as h,k as w,a9 as z}from"./index.js";import{u as B}from"./useFormItem.js";var F=u(a({name:"CountButton",components:{Button:s},props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(a){const s=t(!1),{currentCount:u,isStart:c,start:d,reset:f}=function(a){const s=t(a),o=t(!1);let r;function u(){r&&window.clearInterval(r)}function l(){o.value=!1,u(),r=null}function i(){n(o)||r||(o.value=!0,r=setInterval((()=>{1===n(s)?(l(),s.value=a):s.value-=1}),1e3))}function c(){s.value=a,l()}return e((()=>{c()})),{start:i,reset:c,restart:function(){c(),i()},clear:u,stop:l,currentCount:s,isStart:o}}(a.count),{t:p}=l(),v=o((()=>n(c)?p("component.countdown.sendText",[n(u)]):p("component.countdown.normalText")));return r((()=>{void 0===a.value&&f()})),{handleStart:function(){return t=this,e=null,n=function*(){const{beforeStartFunc:t}=a;if(t&&i(t)){s.value=!0;try{(yield t())&&d()}finally{s.value=!1}}else d()},new Promise(((a,s)=>{var o=t=>{try{u(n.next(t))}catch(e){s(e)}},r=t=>{try{u(n.throw(t))}catch(e){s(e)}},u=t=>t.done?a(t.value):Promise.resolve(t.value).then(o,r);u((n=n.apply(t,e)).next())}));var t,e,n},currentCount:u,loading:s,getButtonText:v,isStart:c}}}),[["render",function(t,e,n,a,s,o){const r=c("Button");return d(),f(r,y(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:p((()=>[v(m(t.getButtonText),1)])),_:1},16,["disabled","onClick","loading"])}]]);const A=z(u(a({name:"CountDownInput",components:{CountButton:F},inheritAttrs:!1,props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const{prefixCls:e}=C("countdown-input"),[n]=B(t);return{prefixCls:e,state:n}}}),[["render",function(t,e,n,a,s,o){const r=c("CountButton"),u=c("a-input");return d(),f(u,y(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),b({addonAfter:p((()=>[w(r,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])])),_:2},[S(Object.keys(t.$slots).filter((t=>"addonAfter"!==t)),(e=>({name:e,fn:p((n=>[x(t.$slots,e,g(h(n||{})))]))})))]),1040,["class","size","value"])}]]));z(F);export{A as C};
