var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,a=(e,t,l)=>new Promise(((o,n)=>{var a=e=>{try{s(l.next(e))}catch(t){n(t)}},r=e=>{try{s(l.throw(e))}catch(t){n(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,r);s((l=l.apply(e,t)).next())}));import{k as r,ac as s,b as i,p as u,ad as c,r as d,e as p,o as m,f,F as v,h as y,ae as b,m as g,R as j,x as h,U as w,af as O,ag as P,G as k,i as x,j as R,V as _,l as A,Q as C,w as F,ah as S}from"./index.js";import{u as M,B,a as I}from"./index2.js";import{B as z}from"./BasicForm.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./index4.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index5.js";import"./index6.js";import"./useFormItem.js";/* empty css      */import"./transButton.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";var G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};function U(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),o.forEach((function(t){D(e,t,l[t])}))}return e}function D(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var E=function(e,t){var l=U({},e,t.attrs);return r(s,U({},l,{icon:G}),null)};E.displayName="MinusCircleFilled",E.inheritAttrs=!1;var H=E;const V=Symbol(),W=Symbol();const $={key:0,class:"card-item"},q={class:"label"},L={class:"value"},N=i({__name:"SettingCard",props:{models:u.object.def((()=>({}))),allowRemove:u.bool.def(!1)},emits:["remove"],setup(e,{emit:t}){const l=c(W),o=c(V,d([])),{createConfirmSync:n}=O();function s(e){return a(this,null,(function*(){e.stopPropagation(),(yield n({title:"删除",content:"确定删除吗？"}))&&t("remove")}))}return(t,n)=>{const a=p("GSpan");return m(),f("div",{class:w([`${h(l)}-card`])},[(m(!0),f(v,null,y(h(o),(t=>(m(),f(v,null,["Divider"!==t.component?(m(),f("div",$,[b("div",q,g(t.label),1),b("div",L,[r(a,{value:e.models[t.field],password:"InputPassword"===t.component},null,8,["value","password"])])])):j("",!0)],64)))),256)),e.allowRemove?(m(),f("div",{key:0,class:"remove",onClick:s},[r(h(H))])):j("",!0)],2)}}}),Q=i({__name:"SubFormModal",props:{modalProps:{type:Object,default:()=>({})}},emits:["register","ok"],setup(e,{emit:s}){const i=e,u=c(V,d([])),p=d(null),[f,v]=M((function(e){return a(this,null,(function*(){p.value=e.payload,yield b.resetFields(),yield b.setFieldsValue(e.models)}))})),[y,b]=P({labelWidth:120,schemas:u,labelAlign:"right",showActionButtonGroup:!1,baseColProps:{span:24}}),g=k((()=>((e,a)=>{for(var r in a||(a={}))l.call(a,r)&&n(e,r,a[r]);if(t)for(var r of t(a))o.call(a,r)&&n(e,r,a[r]);return e})({title:"子表单",width:800,minHeight:100,onOk:j},i.modalProps)));function j(){return a(this,null,(function*(){let e=yield b.validate();s("ok",{values:e,payload:p.value}),v.closeModal()}))}return(e,t)=>(m(),x(h(B),_(h(g),{onRegister:h(f)}),{default:R((()=>[r(h(z),{onRegister:h(y)},null,8,["onRegister"])])),_:1},16,["onRegister"]))}}),J={style:{padding:"10px"}},K=A("新增"),T=A("关闭"),X=i({__name:"FormListModal",props:{modalProps:{type:Object,default:()=>({})}},emits:["register","ok"],setup(e,{emit:t}){const l=d([]),[o,n]=M((function(e){return a(this,null,(function*(){l.value=e.list}))})),[s,i]=I(),u=k((()=>({title:"填写列表",width:800,onOk:g})));function c(){O({})}function g(){return a(this,null,(function*(){t("ok",l.value),n.closeModal()}))}function w(){n.closeModal()}function O(e,t){i.openModal(!0,{models:e,payload:t})}function P({values:e,payload:{isUpdate:t,modelIndex:o}}){t?l.value[o]=e:l.value.push(e)}return(t,n)=>{const a=p("a-empty"),i=p("a-button"),d=p("a-col"),g=p("a-row");return m(),f(v,null,[r(h(B),_(h(u),{onRegister:h(o)}),{footer:R((()=>[r(g,{type:"flex",justify:"space-between"},{default:R((()=>[r(d,null,{default:R((()=>[r(i,{type:"primary",preIcon:"ant-design:plus",onClick:c},{default:R((()=>[K])),_:1})])),_:1}),r(d,null,{default:R((()=>[r(i,{onClick:w},{default:R((()=>[T])),_:1})])),_:1})])),_:1})])),default:R((()=>[b("div",J,[0===l.value.length?(m(),x(a,{key:0,description:"暂无数据，请点击下方的“新增”按钮添加"})):j("",!0),(m(!0),f(v,null,y(l.value,((e,t)=>(m(),x(N,{models:e,allowRemove:"",onClick:l=>function(e,t){O(e,{modelIndex:t,isUpdate:!0})}(e,t)},null,8,["models","onClick"])))),256))])])),_:1},16,["onRegister"]),r(Q,{modalProps:e.modalProps,onRegister:h(s),onOk:P},null,8,["modalProps","onRegister"])],64)}}});const Y=i({__name:"SubForm",props:{value:{type:[Array,Object]},schemas:{type:Array,default:()=>[]},multiple:u.bool.def(!1),alwaysArray:u.bool.def(!1),modalProps:{type:Object,default:()=>({})}},emits:["change","update:value"],setup(e,{emit:t}){const l=e,{prefixCls:o}=C("g-sub-form"),n=d(),a=k((()=>l.schemas)),s=k((()=>l.alwaysArray||l.multiple)),i=k((()=>{const{value:e,multiple:t}=l;if(null==e||0===e.length)return s.value?[]:{};if(t){if(!Array.isArray(e))return[e]}else if(s.value&&!Array.isArray(e))return[e];return e})),u=k((()=>{var e;return null!=(e=Array.isArray(i.value)?i.value[0]:i.value)?e:{}})),c=k((()=>{var e,t;const{multiple:o}=l;return o?`已配置 ${null!=(t=null==(e=i.value)?void 0:e.length)?t:0} 项`:""}));F(n,(()=>{var e;const t=null==(e=n.value)?void 0:e.input;t&&t.setAttribute("readonly","readonly")}),{immediate:!0});const[v,y]=I();function b(){y.openModal(!0,{list:i.value})}function g(e){t("change",e)}const[j,O]=I();function P(){O.openModal(!0,{models:u.value})}function x({values:e}){s.value&&(e=[e]),t("change",e)}return S(W,o),S(V,a),(t,l)=>{const a=p("a-input");return m(),f("div",{class:w([h(o)])},[e.multiple?(m(),f("div",{key:0,class:"multiple-mode",onClick:b},[r(a,{ref_key:"inputRef",ref:n,value:h(c)},null,8,["value"])])):(m(),f("div",{key:1,class:"single-mode",onClick:P},[r(N,{models:h(u)},null,8,["models"])])),r(X,{modalProps:e.modalProps,onRegister:h(v),onOk:g},null,8,["modalProps","onRegister"]),r(Q,{modalProps:e.modalProps,onRegister:h(j),onOk:x},null,8,["modalProps","onRegister"])],2)}}});export{Y as default};
