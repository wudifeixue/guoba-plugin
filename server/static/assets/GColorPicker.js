import{cY as e,a,o as t,f as l,K as s,cZ as n,ae as o,m as r,N as i,U as h,e as c,k as u,i as d,R as v,ay as g,b as p,Q as b,c as m,r as f,G as C,bG as w,w as x,x as y,j as $,c_ as k}from"./index.js";import{t as L}from"./throttle.js";function D(a,t){var l,s=a&&a.a;!(l=a&&a.hsl?e(a.hsl):a&&a.hex&&a.hex.length>0?e(a.hex):a&&a.hsv?e(a.hsv):a&&a.rgba?e(a.rgba):a&&a.rgb?e(a.rgb):e(a))||void 0!==l._a&&null!==l._a||l.setAlpha(s||1);var n=l.toHsl(),o=l.toHsv();return 0===n.s&&(o.h=n.h=a.h||a.hsl&&a.hsl.h||t||0),{hsl:n,hex:l.toHexString().toUpperCase(),hex8:l.toHex8String().toUpperCase(),rgba:l.toRgb(),hsv:o,oldHue:a.h||t||n.h,source:a.source,a:a.a||l.getAlpha()}}var M={props:["value"],data(){return{val:D(this.value)}},computed:{colors:{get(){return this.val},set(e){this.val=e,this.$emit("input",e)}}},watch:{value(e){this.val=D(e)}},methods:{colorChange(e,a){this.oldHue=this.colors.hsl.h,this.colors=D(e,a||this.oldHue)},isValidHex:a=>e(a).isValid(),simpleCheckForValidColor(e){for(var a=["r","g","b","a","h","s","l","v"],t=0,l=0,s=0;s<a.length;s++){var n=a[s];e[n]&&(t++,isNaN(e[n])||l++)}if(t===l)return e},paletteUpperCase:e=>e.map((e=>e.toUpperCase())),isTransparent:a=>0===e(a).getAlpha()}};const E={class:"vc-editable-input"},_=["aria-labelledby"],S=["for","id"],U={class:"vc-input__desc"};var H=a({name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(e){if(void 0===this.max)return e;+e>this.max?this.$refs.input.value=this.max:+e<this.min&&(this.$refs.input.value=this.min)}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(e){this.handleChange(e.target.value)},handleChange(e){let a={};a[this.label]=e,(void 0===a.hex&&void 0===a["#"]||e.length>5)&&this.$emit("change",a)},handleKeyDown(e){let a=this.val,t=Number(a);if(t){let l=this.arrowOffset||1;38===e.keyCode&&(a=t+l,this.handleChange(a),e.preventDefault()),40===e.keyCode&&(a=t-l,this.handleChange(a),e.preventDefault())}}}},[["render",function(e,a,i,h,c,u){return t(),l("div",E,[s(o("input",{"aria-labelledby":u.labelId,class:"vc-input__input","onUpdate:modelValue":a[0]||(a[0]=e=>u.val=e),onKeydown:a[1]||(a[1]=(...e)=>u.handleKeyDown&&u.handleKeyDown(...e)),onInput:a[2]||(a[2]=(...e)=>u.update&&u.update(...e)),ref:"input"},null,40,_),[[n,u.val]]),o("span",{for:i.label,class:"vc-input__label",id:u.labelId},r(u.labelSpanText),9,S),o("span",U,r(i.desc),1)])}]]),A=function(e,a,t){return a<t?e<a?a:e>t?t:e:e<t?t:e>a?a:e};const I={name:"Saturation",props:{value:Object},computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:L(((e,a)=>{e(a)}),20,{leading:!0,trailing:!1}),handleChange(e,a){!a&&e.preventDefault();var t=this.$refs.container;if(t){var l=t.clientWidth,s=t.clientHeight,n=t.getBoundingClientRect().left+window.pageXOffset,o=t.getBoundingClientRect().top+window.pageYOffset,r=e.pageX||(e.touches?e.touches[0].pageX:0),i=e.pageY||(e.touches?e.touches[0].pageY:0),h=A(r-n,0,l),c=A(i-o,0,s),u=h/l,d=A(-c/s+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:u,v:d,a:this.colors.hsv.a,source:"hsva"})}},onChange(e){this.$emit("change",e)},handleMouseDown(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},T=o("div",{class:"vc-saturation--white"},null,-1),F=o("div",{class:"vc-saturation--black"},null,-1),N=[o("div",{class:"vc-saturation-circle"},null,-1)];var O=a(I,[["render",function(e,a,s,n,r,h){return t(),l("div",{class:"vc-saturation",style:i({background:h.bgColor}),ref:"container",onMousedown:a[0]||(a[0]=(...e)=>h.handleMouseDown&&h.handleMouseDown(...e)),onTouchmove:a[1]||(a[1]=(...e)=>h.handleChange&&h.handleChange(...e)),onTouchstart:a[2]||(a[2]=(...e)=>h.handleChange&&h.handleChange(...e))},[T,F,o("div",{class:"vc-saturation-pointer",style:i({top:h.pointerTop,left:h.pointerLeft})},N,4)],36)}]]);const R={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:()=>({oldHue:0,pullDirection:""}),computed:{colors(){const e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange(e,a){!a&&e.preventDefault();var t=this.$refs.container;if(t){var l,s=t.clientWidth,n=t.clientHeight,o=t.getBoundingClientRect().left+window.pageXOffset,r=t.getBoundingClientRect().top+window.pageYOffset,i=(e.pageX||(e.touches?e.touches[0].pageX:0))-o,h=(e.pageY||(e.touches?e.touches[0].pageY:0))-r;"vertical"===this.direction?(l=h<0?360:h>n?0:360*(-100*h/n+100)/100,this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(l=i<0?0:i>s?360:360*(100*i/s)/100,this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},j=["aria-valuenow"],B=[o("div",{class:"vc-hue-picker"},null,-1)];var X=a(R,[["render",function(e,a,s,n,r,c){return t(),l("div",{class:h(["vc-hue",c.directionClass])},[o("div",{class:"vc-hue-container",role:"slider","aria-valuenow":c.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360",ref:"container",onMousedown:a[0]||(a[0]=(...e)=>c.handleMouseDown&&c.handleMouseDown(...e)),onTouchmove:a[1]||(a[1]=(...e)=>c.handleChange&&c.handleChange(...e)),onTouchstart:a[2]||(a[2]=(...e)=>c.handleChange&&c.handleChange(...e))},[o("div",{class:"vc-hue-pointer",style:i({top:c.pointerTop,left:c.pointerLeft}),role:"presentation"},B,4)],40,j)],2)}]]);let Y={};function z(e,a,t){var l=e+","+a+","+t;if(Y[l])return Y[l];var s=function(e,a,t){if("undefined"==typeof document)return null;var l=document.createElement("canvas");l.width=l.height=2*t;var s=l.getContext("2d");return s?(s.fillStyle=e,s.fillRect(0,0,l.width,l.height),s.fillStyle=a,s.fillRect(0,0,t,t),s.translate(t,t),s.fillRect(0,0,t,t),l.toDataURL()):null}(e,a,t);return Y[l]=s,s}var K=a({name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":"url("+z(this.white,this.grey,this.size)+")"}}}},[["render",function(e,a,s,n,o,r){return t(),l("div",{class:"vc-checkerboard",style:i(r.bgStyle)},null,4)}]]);const V={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:K},computed:{colors(){return this.value},gradientColor(){var e=this.colors.rgba,a=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+a+", 0) 0%, rgba("+a+", 1) 100%)"}},methods:{handleChange(e,a){!a&&e.preventDefault();var t=this.$refs.container;if(t){var l,s=t.clientWidth,n=t.getBoundingClientRect().left+window.pageXOffset,o=(e.pageX||(e.touches?e.touches[0].pageX:0))-n;l=o<0?0:o>s?1:Math.round(100*o/s)/100,this.colors.a!==l&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:l,source:"rgba"})}},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},G={class:"vc-alpha"},P={class:"vc-alpha-checkboard-wrap"},W=[o("div",{class:"vc-alpha-picker"},null,-1)];var Q=a(V,[["render",function(e,a,s,n,r,h){const d=c("checkboard");return t(),l("div",G,[o("div",P,[u(d)]),o("div",{class:"vc-alpha-gradient",style:i({background:h.gradientColor})},null,4),o("div",{class:"vc-alpha-container",ref:"container",onMousedown:a[0]||(a[0]=(...e)=>h.handleMouseDown&&h.handleMouseDown(...e)),onTouchmove:a[1]||(a[1]=(...e)=>h.handleChange&&h.handleChange(...e)),onTouchstart:a[2]||(a[2]=(...e)=>h.handleChange&&h.handleChange(...e))},[o("div",{class:"vc-alpha-pointer",style:i({left:100*h.colors.a+"%"})},W,4)],544)])}]]);const Z={name:"Chrome",mixins:[M],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:O,hue:X,alpha:Q,"ed-in":H,CheckBoard:K},data:()=>({fieldsIndex:1,highlight:!1}),computed:{hsl(){const{h:e,s:a,l:t}=this.colors.hsl;return{h:e.toFixed(),s:`${(100*a).toFixed()}%`,l:`${(100*t).toFixed()}%`}},activeColor(){const e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"},hasAlpha(){return this.colors.a<1}},methods:{childChange(e){this.colorChange(e)},inputChange(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){const a=e.s?e.s.replace("%","")/100:this.colors.hsl.s,t=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:a,l:t,source:"hsl"})}},showHighlight(){this.highlight=!0},hideHighlight(){this.highlight=!1}}},q={class:"vc-chrome-saturation-wrap"},J={class:"vc-chrome-body"},ee={class:"vc-chrome-controls"},ae={class:"vc-chrome-color-wrap"},te=["aria-label"],le={class:"vc-chrome-sliders"},se={class:"vc-chrome-hue-wrap"},ne={key:0,class:"vc-chrome-alpha-wrap"},oe={key:0,class:"vc-chrome-fields-wrap"},re={class:"vc-chrome-fields"},ie={class:"vc-chrome-field"},he={class:"vc-chrome-field"},ce={class:"vc-chrome-field"},ue={key:0,class:"vc-chrome-field"};var de=a(Z,[["render",function(e,a,n,r,p,b){const m=c("saturation"),f=c("CheckBoard"),C=c("hue"),w=c("alpha"),x=c("ed-in");return t(),l("div",{role:"application","aria-label":"Chrome color picker",class:h(["vc-chrome",n.disableAlpha?"vc-chrome__disable-alpha":""])},[o("div",q,[u(m,{value:e.colors,"onUpdate:value":a[0]||(a[0]=a=>e.colors=a),onChange:b.childChange},null,8,["value","onChange"])]),o("div",J,[o("div",ee,[o("div",ae,[o("div",{"aria-label":`current color is ${e.colors.hex}`,class:"vc-chrome-active-color",style:i({background:b.activeColor})},null,12,te),n.disableAlpha?v("",!0):(t(),d(f,{key:0}))]),o("div",le,[o("div",se,[u(C,{value:e.colors,"onUpdate:value":a[1]||(a[1]=a=>e.colors=a),onChange:b.childChange},null,8,["value","onChange"])]),n.disableAlpha?v("",!0):(t(),l("div",ne,[u(w,{value:e.colors,"onUpdate:value":a[2]||(a[2]=a=>e.colors=a),onChange:b.childChange},null,8,["value","onChange"])]))])]),n.disableFields?v("",!0):(t(),l("div",oe,[s(o("div",re,[o("div",ie,[u(x,{label:"r",value:e.colors.rgba.r,onChange:b.inputChange},null,8,["value","onChange"])]),o("div",he,[u(x,{label:"g",value:e.colors.rgba.g,onChange:b.inputChange},null,8,["value","onChange"])]),o("div",ce,[u(x,{label:"b",value:e.colors.rgba.b,onChange:b.inputChange},null,8,["value","onChange"])]),n.disableAlpha?v("",!0):(t(),l("div",ue,[u(x,{label:"a",value:e.colors.a,"arrow-offset":.01,max:1,onChange:b.inputChange},null,8,["value","arrow-offset","onChange"])]))],512),[[g,1===p.fieldsIndex]])]))])],2)}]]);const ve={class:"vc-chrome-field custom"},ge={class:"vc-chrome-field custom"},pe={class:"vc-chrome-field custom"},be={key:0,class:"vc-chrome-field custom"},me={class:"vc-chrome-field"},fe={class:"vc-color-view"},Ce=p({__name:"GColorPicker",props:{value:String},emits:["change"],setup(e,{emit:a}){const s=e,n={rgb:/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/,rgba:/rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?([10]?\.?\d+)\)/,hex:/#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/,hex8:/#([0-9a-fA-F]{8})/},{prefixCls:r}=b("g-color-picker"),c={r:0,g:0,b:0,a:1},d=m({rgba:c,hex8:"#000000FF"}),g=f("rgba"),p=C((()=>d.rgba)),L=C((()=>["rgb","hex"].includes(g.value))),D=w(U,100);function M(e,a=!1){let t;t=a?e.match(n.rgba):e.match(n.rgb),d.rgba.r=parseInt(t[1]),d.rgba.g=parseInt(t[2]),d.rgba.b=parseInt(t[3]),d.rgba.a=a?parseFloat(t[4]):1}function E(e,a=!1){let t,l;if(a){if(t=e.match(n.hex8),l=t[1],8!==l.length)return void(d.rgba=c)}else t=e.match(n.hex),l=t[1],3===l.length&&(l=l.replace(/(.)/g,"$1$1"));d.rgba.r=parseInt(l.slice(0,2),16),d.rgba.g=parseInt(l.slice(2,4),16),d.rgba.b=parseInt(l.slice(4,6),16),d.rgba.a=a?parseInt(l.slice(6,8),16)/255:1}function _(e){e.hex8&&e.rgba&&(d.rgba=e.rgba,d.hex8=e.hex8,D())}function S(e,a){if(!e.target){for(let[a,t]of Object.entries(e)){let e=parseFloat(t);isNaN(e)&&(e=0),d.rgba[a]=e}D()}}function U(){if("rgb"===g.value){let{r:e,g:t,b:l}=d.rgba;a("change",`rgb(${e}, ${t}, ${l})`)}else if("hex"===g.value){let e=d.hex8;a("change",e.slice(0,7))}else if("hex8"===g.value){let e=d.hex8;a("change",e)}else{let{r:e,g:t,b:l,a:s}=d.rgba;a("change",`rgba(${e}, ${t}, ${l}, ${s})`)}}return x((()=>s.value),(e=>{e?n.rgb.test(e)?(g.value="rgb",M(e)):n.rgba.test(e)?(g.value="rgba",M(e,!0)):n.hex.test(e)?(g.value="hex",E(e)):n.hex8.test(e)?(g.value="hex8",E(e,!0)):(d.rgba=c,U()):(d.rgba=c,U())}),{immediate:!0}),(e,a)=>(t(),l("div",{class:h([y(r),"vc-chrome-fields"])},[o("div",ve,[u(y(H),{label:"r",value:y(p).r,min:0,max:255,onChange:S},null,8,["value"])]),o("div",ge,[u(y(H),{label:"g",value:y(p).g,min:0,max:255,onChange:S},null,8,["value"])]),o("div",pe,[u(y(H),{label:"b",value:y(p).b,min:0,max:255,onChange:S},null,8,["value"])]),y(L)?v("",!0):(t(),l("div",be,[u(y(H),{label:"a",value:y(p).a,min:0,max:1,"arrow-offset":.01,onChange:S},null,8,["value","arrow-offset"])])),o("div",me,[u(y(k),{trigger:"click",placement:"bottom",getPopupContainer:e=>e.parentNode},{content:$((()=>[u(y(de),{value:d,onInput:_,disableAlpha:y(L)},null,8,["value","disableAlpha"])])),default:$((()=>[o("div",fe,[o("div",{style:i(`height:100%;background:rgba(${y(p).r},${y(p).g},${y(p).b},${y(p).a})`)},null,4)])])),_:1},8,["getPopupContainer"])])],2))}});export{Ce as default};
