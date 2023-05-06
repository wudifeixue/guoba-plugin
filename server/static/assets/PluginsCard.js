import{a as i,b as e,fr as s,b$ as t,bj as o,e as r,o as a,i as l,j as n,k as p,f as d,h as c,F as u,ae as m,m as j,R as f,V as g,l as y}from"./index.js";import{a as x}from"./index2.js";import{G as k}from"./GPluginModal.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./index15.js";import"./get.js";import"./onMountedOrActivated.js";import"./MarkdownViewer.js";import"./guoba.js";import"./BasicForm.js";import"./index4.js";import"./find.js";import"./_baseIteratee.js";import"./index5.js";import"./index6.js";import"./useFormItem.js";/* empty css      */import"./transButton.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";import"./common.js";const h=e({components:{Card:s,CardGrid:s.Grid,Icon:t,Tag:o,GPluginModal:k},props:{plugins:{type:Array,required:!0}},setup(){const[i,{openModal:e}]=x();return{onClick:function(i){e(!0,{plugin:i})},parseAuthor:function(i){return Array.isArray(i)?i.join(" "):i},registerModal:i}}}),C=y("更多"),_={class:"flex"},w=["src"],b=["title"],M={key:0,style:{"text-decoration":"line-through"}},G={key:1},v={class:"flex mt-2 h-10 text-secondary"},A=["title"],F={class:"flex justify-between text-secondary ellipsis",style:{"max-width":"100%"}},I={class:"ellipsis",style:{"max-width":"calc(100% - 100px)"}},P=y("可配置"),z=y("已安装"),B=y("未安装");var R=i(h,[["render",function(i,e,s,t,o,y){const x=r("router-link"),k=r("a-button"),h=r("Icon"),R=r("Tag"),q=r("CardGrid"),O=r("GPluginModal"),T=r("Card");return a(),l(T,g({title:"插件"},i.$attrs),{extra:n((()=>[p(k,{type:"link",size:"small"},{default:n((()=>[p(x,{to:"/plugins"},{default:n((()=>[C])),_:1})])),_:1})])),default:n((()=>[(a(!0),d(u,null,c(i.plugins,((e,s)=>(a(),d(u,{key:e.name},[s<12?(a(),l(q,{key:0,class:"!md:w-1/3 !w-full plugin-item",onClick:()=>i.onClick(e)},{default:n((()=>[m("span",_,[e.iconPath?(a(),d("img",{key:0,class:"icon-image",src:e.iconPath,alt:""},null,8,w)):e.icon?(a(),l(h,{key:1,icon:e.icon,color:e.iconColor,size:"30"},null,8,["icon","color"])):(a(),l(h,{key:2,icon:"clarity:plugin-line",size:"30"})),m("span",{class:"text-lg ml-4 ellipsis",title:e.title},[e.isDeleted?(a(),d("span",M,j(e.title),1)):(a(),d("span",G,j(e.title),1))],8,b)]),m("div",v,[m("div",{class:"ellipsis",title:e.description},j(e.description),9,A)]),m("div",F,[m("span",I,j(i.parseAuthor(e.author)),1),m("span",null,[e.hasConfig?(a(),l(R,{key:0,color:"purple"},{default:n((()=>[P])),_:1})):f("",!0),e.installed?(a(),l(R,{key:1,color:"green"},{default:n((()=>[z])),_:1})):(a(),l(R,{key:2},{default:n((()=>[B])),_:1}))])])])),_:2},1032,["onClick"])):f("",!0)],64)))),128)),p(O,{onRegister:i.registerModal},null,8,["onRegister"])])),_:1},16)}],["__scopeId","data-v-4ee2b1a2"]]);export{R as default};
