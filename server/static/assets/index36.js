import{k as e,ac as t,b as n,c as o,w as a,r as i,H as l,G as r,ak as s,f_ as c,aO as p,f$ as u,aj as d,_ as f,ap as v,av as y,fv as m,am as g,aR as b,aP as h,q as x,v as C,ai as O,aT as w,aU as S,an as T,F as j,a4 as k,ff as N,T as P,bK as E,bu as B,g0 as D,fg as A,ft as z,bj as I,Q as R,a as _,c9 as M,x as G,e as K,o as L,i as F,j as H,f as U,h as $,ae as q,N as V,l as W,m as X,R as J,U as Q,c_ as Y,f8 as Z,af as ee}from"./index.js";import{B as te}from"./index21.js";import{T as ne}from"./transButton.js";import{C as oe}from"./CopyOutlined.js";import"./index22.js";var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"};function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){le(e,t,n[t])}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(n,o){var a=ie({},n,o.attrs);return e(t,ie({},a,{icon:ae}),null)};re.displayName="BellOutlined",re.inheritAttrs=!1;var se=re,ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){ue(e,t,n[t])}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=function(n,o){var a=pe({},n,o.attrs);return e(t,pe({},a,{icon:ce}),null)};de.displayName="EditOutlined",de.inheritAttrs=!1;var fe=de,ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){me(e,t,n[t])}))}return e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge=function(n,o){var a=ye({},n,o.attrs);return e(t,ye({},a,{icon:ve}),null)};ge.displayName="EnterOutlined",ge.inheritAttrs=!1;var be,he=ge,xe=n({name:"Editable",props:{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String},setup:function(t,n){var u=n.emit,d=n.slots,f=o({current:t.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});a((function(){return t.value}),(function(e){f.current=e}));var v=i();function y(e){v.value=e}function m(e){var t=e.target.value;f.current=t.replace(/[\r\n]/g,""),u("change",f.current)}function g(){f.inComposition=!0}function b(){f.inComposition=!1}function h(e){var t=e.keyCode;t===p.ENTER&&e.preventDefault(),f.inComposition||(f.lastKeyCode=t)}function x(e){var n=e.keyCode,o=e.ctrlKey,a=e.altKey,i=e.metaKey,l=e.shiftKey;f.lastKeyCode!==n||f.inComposition||o||a||i||l||(n===p.ENTER?(O(),u("end")):n===p.ESC&&(f.current=t.originContent,u("cancel")))}function C(){O()}function O(){u("save",f.current.trim())}l((function(){var e;if(v.value){var t=null===(e=v.value)||void 0===e?void 0:e.resizableTextArea,n=null==t?void 0:t.textArea;n.focus();var o=n.value.length;n.setSelectionRange(o,o)}}));var w=r((function(){var e;return s(e={},"".concat(t.prefixCls),!0),s(e,"".concat(t.prefixCls,"-edit-content"),!0),s(e,"".concat(t.prefixCls,"-rtl"),"rtl"===t.direction),e}));return function(){return e("div",{class:w.value},[e(c,{ref:y,maxlength:t.maxlength,value:f.current,onChange:m,onKeydown:h,onKeyup:x,onCompositionstart:g,onCompositionend:b,onBlur:C,rows:1,autoSize:void 0===t.autoSize||t.autoSize},null),d.enterIcon?d.enterIcon({className:"".concat(t.prefixCls,"-edit-content-confirm")}):e(he,{class:"".concat(t.prefixCls,"-edit-content-confirm")},null)])}}}),Ce={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Oe(e,t){e.setAttribute("aria-hidden","true");var n,o=window.getComputedStyle(t),a=(n=o,Array.prototype.slice.apply(n).map((function(e){return"".concat(e,": ").concat(n.getPropertyValue(e),";")})).join(""));e.setAttribute("style",a),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.borderTopWidth="0",e.style.borderBottomWidth="0",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}var we=function(t,n,o,a,i){be||((be=document.createElement("div")).setAttribute("aria-hidden","true"),document.body.appendChild(be));var l=n.rows,r=n.suffix,s=void 0===r?"":r,c=function(e){var t=document.createElement("div");Oe(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}(t),p=Math.round(c*l*100)/100;Oe(be,t);var d=u({render:function(){return e("div",{style:Ce},[e("span",{style:Ce},[o,s]),e("span",{style:Ce},[a])])}});function f(){return Math.round(100*be.getBoundingClientRect().height)/100-.1<=p}if(d.mount(be),f())return d.unmount(),{content:o,text:be.innerHTML,ellipsis:!1};var v=Array.prototype.slice.apply(be.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){var t=e.nodeType,n=e.data;return 8!==t&&""!==n})),y=Array.prototype.slice.apply(be.childNodes[0].childNodes[1].cloneNode(!0).childNodes);d.unmount();var m=[];be.innerHTML="";var g=document.createElement("span");be.appendChild(g);var b=document.createTextNode(i+s);function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=Math.floor((n+o)/2),l=t.slice(0,i);if(e.textContent=l,n>=o-1)for(var r=o;r>=n;r-=1){var s=t.slice(0,r);if(e.textContent=s,f()||!s)return r===t.length?{finished:!1,vNode:t}:{finished:!0,vNode:s}}return f()?h(e,t,i,o,i):h(e,t,n,i,a)}function x(e){var t;if(3===e.nodeType){var n=e.textContent||"",o=document.createTextNode(n);return t=o,g.insertBefore(t,b),h(o,n)}return{finished:!1,vNode:null}}return g.appendChild(b),y.forEach((function(e){be.appendChild(e)})),v.some((function(e){var t=x(e),n=t.finished,o=t.vNode;return o&&m.push(o),n})),{content:m,text:be.innerHTML,ellipsis:!0}},Se=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Te=n({name:"ATypography",inheritAttrs:!1,props:{prefixCls:String,direction:String,component:String},setup:function(t,n){var o=n.slots,a=n.attrs,i=d("typography",t),l=i.prefixCls,r=i.direction;return function(){var n,i=f(f({},t),a);i.prefixCls,i.class,i.direction;var c=i.component,p=void 0===c?"article":c,u=Se(i,["prefixCls","class","direction","component"]);return e(p,v({class:y(l.value,s({},"".concat(l.value,"-rtl"),"rtl"===r.value),a.class)},u),{default:function(){return[null===(n=o.default)||void 0===n?void 0:n.call(o)]}})}}}),je=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}},ke={"text/plain":"Text","text/html":"Url",default:"Text"};function Ne(e,t){var n,o,a,i,l,r=!1;t||(t={});t.debug;try{if(o=je(),a=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){window.clipboardData.clearData();var o=ke[t.format]||ke.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),a.selectNodeContents(l),i.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");r=!0}catch(s){try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),r=!0}catch(c){n=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(a):i.removeAllRanges()),l&&document.body.removeChild(l),o()}return r}var Pe=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Ee=m("webkitLineClamp"),Be=m("textOverflow"),De=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},Ae=n({name:"Base",inheritAttrs:!1,props:De(),setup:function(t,n){var c=n.slots,p=n.attrs,u=n.emit,y=d("typography",t),m=y.prefixCls,D=y.direction,A=o({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),z=i(),I=i(),R=r((function(){var e=t.ellipsis;return e?f({rows:1,expandable:!1},"object"===g(e)?e:null):{}}));function _(e){var t=R.value.onExpand;A.expanded=!0,null==t||t(e)}function M(e){e.preventDefault(),A.originContent=t.content,W(!0)}function G(e){K(e),W(!1)}function K(e){var n=H.value.onChange;e!==t.content&&(u("update:content",e),null==n||n(e))}function L(){var e,t;null===(t=(e=H.value).onCancel)||void 0===t||t.call(e),W(!1)}function F(e){e.preventDefault();var n,o,a=t.copyable,i=f({},"object"===g(a)?a:null);void 0===i.text&&(i.text=t.ellipsis||t.editable?t.content:null===(o=null===(n=z.value)||void 0===n?void 0:n.$el)||void 0===o?void 0:o.innerText),Ne(i.text||""),A.copied=!0,x((function(){i.onCopy&&i.onCopy(),A.copyId=setTimeout((function(){A.copied=!1}),3e3)}))}l((function(){A.clientRendered=!0})),b((function(){clearTimeout(A.copyId),h.cancel(A.rafId)})),a([function(){return R.value.rows},function(){return t.content}],(function(){x((function(){X()}))}),{flush:"post",deep:!0,immediate:!0}),C((function(){void 0===t.content&&(O(!t.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),O(!t.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))}));var H=r((function(){var e=t.editable;return e?f({},"object"===g(e)?e:null):{editing:!1}})),U=w(!1,{value:r((function(){return H.value.editing}))}),$=S(U,2),q=$[0],V=$[1];function W(e){var t=H.value.onStart;e&&t&&t(),V(e)}function X(){h.cancel(A.rafId),A.rafId=h((function(){Q()}))}a(q,(function(e){var t;e||null===(t=I.value)||void 0===t||t.focus()}),{flush:"post"});var J=r((function(){var e=R.value,n=e.rows,o=e.expandable,a=e.suffix,i=e.onEllipsis,l=e.tooltip;return!a&&!l&&(!(t.editable||t.copyable||o||i)&&(1===n?Be:Ee))})),Q=function(){var e,n,o=A.ellipsisText,a=A.isEllipsis,i=R.value,l=i.rows,r=i.suffix,s=i.onEllipsis;if(l&&!(l<0)&&(null===(e=z.value)||void 0===e?void 0:e.$el)&&!A.expanded&&void 0!==t.content&&!J.value){var c=we(null===(n=z.value)||void 0===n?void 0:n.$el,{rows:l,suffix:r},t.content,te(!0),"..."),p=c.content,u=c.text,d=c.ellipsis;o===u&&A.isEllipsis===d||(A.ellipsisText=u,A.ellipsisContent=p,A.isEllipsis=d,a!==d&&s&&s(d))}};function Y(t){var n=R.value,o=n.expandable,a=n.symbol;if(!o)return null;if(!t&&(A.expanded||!A.isEllipsis))return null;var i=(c.ellipsisSymbol?c.ellipsisSymbol():a)||A.expandStr;return e("a",{key:"expand",class:"".concat(m.value,"-expand"),onClick:_,"aria-label":A.expandStr},[i])}function Z(){if(t.editable){var n=t.editable,o=n.tooltip,a=n.triggerType,i=void 0===a?["icon"]:a,l=c.editableIcon?c.editableIcon():e(fe,{role:"button"},null),r=c.editableTooltip?c.editableTooltip():A.editStr,s="string"==typeof r?r:"";return-1!==i.indexOf("icon")?e(P,{key:"edit",title:!1===o?"":r},{default:function(){return[e(ne,{ref:I,class:"".concat(m.value,"-edit"),onClick:M,"aria-label":s},{default:function(){return[l]}})]}}):null}}function ee(){if(t.copyable){var n=t.copyable.tooltip,o=A.copied?A.copiedStr:A.copyStr,a=c.copyableTooltip?c.copyableTooltip({copied:A.copied}):o,i="string"==typeof a?a:"",l=A.copied?e(B,null,null):e(oe,null,null),r=c.copyableIcon?c.copyableIcon({copied:!!A.copied}):l;return e(P,{key:"copy",title:!1===n?"":a},{default:function(){return[e(ne,{class:["".concat(m.value,"-copy"),s({},"".concat(m.value,"-copy-success"),A.copied)],onClick:F,"aria-label":i},{default:function(){return[r]}})]}})}}function te(e){return[Y(e),Z(),ee()].filter((function(e){return e}))}return function(){var n,o,a,i,l,r,u,d=H.value.triggerType,y=void 0===d?["icon"]:d,g=t.ellipsis||t.editable?void 0!==t.content?t.content:null===(n=c.default)||void 0===n?void 0:n.call(c):c.default?c.default():t.content;return q.value?(o=p.class,a=p.style,i=H.value,l=i.maxlength,r=i.autoSize,u=i.onEnd,e(xe,{class:o,style:a,prefixCls:m.value,value:t.content,originContent:A.originContent,maxlength:l,autoSize:r,onSave:G,onChange:K,onCancel:L,onEnd:u,direction:D.value},{enterIcon:c.editableEnterIcon})):e(E,{componentName:"Text",children:function(n){var o,a=f(f({},t),p),i=a.type,l=a.disabled;a.content;var r=a.class,u=a.style,d=Pe(a,["type","disabled","content","class","style"]),b=R.value,h=b.rows,x=b.suffix,C=b.tooltip,O=n.edit,w=n.copy,S=n.copied,E=n.expand;A.editStr=O,A.copyStr=w,A.copiedStr=S,A.expandStr=E;var B=T(d,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),I=J.value,_=1===h&&I,G=h&&h>1&&I,K=g;if(h&&A.isEllipsis&&!A.expanded&&!I){var L=d.title,F=L||"";L||"string"!=typeof g&&"number"!=typeof g||(F=String(g)),F=null==F?void 0:F.slice(String(A.ellipsisContent||"").length),K=e(j,null,[k(A.ellipsisContent),e("span",{title:F,"aria-hidden":"true"},["..."]),x])}else K=e(j,null,[g,x]);K=function(t,n){var o=t.mark,a=t.code,i=t.underline,l=t.delete,r=t.strong,s=t.keyboard,c=n;function p(t,n){if(t){var o=c;c=e(n,null,{default:function(){return[o]}})}}return p(r,"strong"),p(i,"u"),p(l,"del"),p(a,"code"),p(o,"mark"),p(s,"kbd"),c}(t,K);var H=C&&h&&A.isEllipsis&&!A.expanded&&!I,U=c.ellipsisTooltip?c.ellipsisTooltip():C;return e(N,{onResize:X,disabled:!h},{default:function(){return[e(Te,v({ref:z,class:[(o={},s(o,"".concat(m.value,"-").concat(i),i),s(o,"".concat(m.value,"-disabled"),l),s(o,"".concat(m.value,"-ellipsis"),h),s(o,"".concat(m.value,"-single-line"),1===h&&!A.isEllipsis),s(o,"".concat(m.value,"-ellipsis-single-line"),_),s(o,"".concat(m.value,"-ellipsis-multiple-line"),G),o),r],style:f(f({},u),{WebkitLineClamp:G?h:void 0}),"aria-label":undefined,direction:D.value,onClick:-1!==y.indexOf("text")?M:function(){}},B),{default:function(){return[H?e(P,{title:!0===C?g:U},{default:function(){return[e("span",null,[K])]}}):K,te()]}})]}})}},null)}}}),ze=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Ie=function(t,n){var o=n.slots,a=n.attrs,i=f(f({},t),a),l=i.ellipsis,r=i.rel,s=ze(i,["ellipsis","rel"]);O("object"!==g(l),"Typography.Link","`ellipsis` only supports boolean value.");var c=f(f({},s),{rel:void 0===r&&"_blank"===s.target?"noopener noreferrer":r,ellipsis:!!l,component:"a"});return delete c.navigate,e(Ae,c,o)};Ie.displayName="ATypographyLink",Ie.inheritAttrs=!1,Ie.props=T(f(f({},De()),{ellipsis:{type:Boolean,default:void 0}}),["component"]);var Re=Ie,_e=function(t,n){var o=n.slots,a=n.attrs,i=f(f(f({},t),{component:"div"}),a);return e(Ae,i,o)};_e.displayName="ATypographyParagraph",_e.inheritAttrs=!1,_e.props=T(De(),["component"]);var Me=_e,Ge=function(t,n){var o=n.slots,a=n.attrs,i=t.ellipsis;O("object"!==g(i)||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var l=f(f(f({},t),{ellipsis:i&&"object"===g(i)?T(i,["expandable","rows"]):i,component:"span"}),a);return e(Ae,l,o)};Ge.displayName="ATypographyText",Ge.inheritAttrs=!1,Ge.props=f(f({},T(De(),["component"])),{ellipsis:{type:[Boolean,Object],default:void 0}});var Ke=Ge,Le=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Fe=D(1,2,3,4,5),He=function(t,n){var o,a=n.slots,i=n.attrs,l=t.level,r=void 0===l?1:l,s=Le(t,["level"]);-1!==Fe.indexOf(r)?o="h".concat(r):(O(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),o="h1");var c=f(f(f({},s),{component:o}),i);return e(Ae,c,a)};He.displayName="ATypographyTitle",He.inheritAttrs=!1,He.props=f(f({},T(De(),["component","strong"])),{level:Number});var Ue=He;Te.Text=Ke,Te.Title=Ue,Te.Paragraph=Me,Te.Link=Re,Te.Base=Ae,Te.install=function(e){return e.component(Te.name,Te),e.component(Te.Text.displayName,Ke),e.component(Te.Title.displayName,Ue),e.component(Te.Paragraph.displayName,Me),e.component(Te.Link.displayName,Re),e};const $e=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}];const qe=n({components:{[A.name]:A,[z.name]:z,[z.Item.name]:z.Item,AListItemMeta:z.Item.Meta,ATypographyParagraph:Te.Paragraph,[I.name]:I},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(e,{emit:t}){const{prefixCls:n}=R("header-notify-list"),o=i(e.currentPage||1),l=r((()=>{const{pageSize:t,list:n}=e;if(!1===t)return[];let a=M(t)?t:5;return n.slice(a*(G(o)-1),a*G(o))}));a((()=>e.currentPage),(e=>{o.value=e}));const s=r((()=>!!e.onTitleClick));return{prefixCls:n,getPagination:r((()=>{const{list:n,pageSize:a}=e;return!!(a>0&&n&&n.length>a)&&{total:n.length,pageSize:a,current:G(o),onChange(e){o.value=e,t("update:currentPage",e)}}})),getData:l,handleTitleClick:function(t){e.onTitleClick&&e.onTitleClick(t)},isTitleClickable:s}}}),Ve={class:"title"},We={key:0,class:"extra"},Xe={key:1},Je={key:0,class:"description"},Qe={class:"datetime"};var Ye=_(qe,[["render",function(t,n,o,a,i,l){const r=K("a-typography-paragraph"),s=K("a-tag"),c=K("a-avatar"),p=K("a-list-item-meta"),u=K("a-list-item"),d=K("a-list");return L(),F(d,{class:Q(t.prefixCls),bordered:"",pagination:t.getPagination},{default:H((()=>[(L(!0),U(j,null,$(t.getData,(n=>(L(),F(u,{key:n.id,class:"list-item"},{default:H((()=>[e(p,null,{title:H((()=>[q("div",Ve,[e(r,{onClick:e=>t.handleTitleClick(n),style:V([{width:"100%","margin-bottom":"0 !important"},{cursor:t.isTitleClickable?"pointer":""}]),delete:!!n.titleDelete,ellipsis:!!(t.$props.titleRows&&t.$props.titleRows>0)&&{rows:t.$props.titleRows,tooltip:!!n.title},content:n.title},null,8,["onClick","style","delete","ellipsis","content"]),n.extra?(L(),U("div",We,[e(s,{class:"tag",color:n.color},{default:H((()=>[W(X(n.extra),1)])),_:2},1032,["color"])])):J("",!0)])])),avatar:H((()=>[n.avatar?(L(),F(c,{key:0,class:"avatar",src:n.avatar},null,8,["src"])):(L(),U("span",Xe,X(n.avatar),1))])),description:H((()=>[q("div",null,[n.description?(L(),U("div",Je,[e(r,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:!!(t.$props.descRows&&t.$props.descRows>0)&&{rows:t.$props.descRows,tooltip:!!n.description},content:n.description},null,8,["ellipsis","content"])])):J("",!0),q("div",Qe,X(n.datetime),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["class","pagination"])}],["__scopeId","data-v-737c3776"]]);const Ze=n({components:{Popover:Y,BellOutlined:se,Tabs:Z,TabPane:Z.TabPane,Badge:te,NoticeList:Ye},setup(){const{prefixCls:e}=R("header-notify"),{createMessage:t}=ee();return{prefixCls:e,listData:i($e),count:r((()=>{let e=0;for(let t=0;t<$e.length;t++)e+=$e[t].list.length;return e})),onNoticeClick:function(e){t.success("你点击了通知，ID="+e.id),e.titleDelete=!e.titleDelete},numberStyle:{}}}}),et={key:0};var tt=_(Ze,[["render",function(t,n,o,a,i,l){const r=K("BellOutlined"),s=K("Badge"),c=K("NoticeList"),p=K("TabPane"),u=K("Tabs"),d=K("Popover");return L(),U("div",{class:Q(t.prefixCls)},[e(d,{title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:H((()=>[e(u,null,{default:H((()=>[(L(!0),U(j,null,$(t.listData,(e=>(L(),F(p,{key:e.key},{tab:H((()=>[W(X(e.name)+" ",1),0!==e.list.length?(L(),U("span",et,"("+X(e.list.length)+")",1)):J("",!0)])),default:H((()=>["1"===e.key?(L(),F(c,{key:0,list:e.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])):(L(),F(c,{key:1,list:e.list},null,8,["list"]))])),_:2},1024)))),128))])),_:1})])),default:H((()=>[e(s,{count:t.count,dot:"",numberStyle:t.numberStyle},{default:H((()=>[e(r)])),_:1},8,["count","numberStyle"])])),_:1},8,["overlayClassName"])],2)}]]);export{tt as default};
