import{b as e,c as s,o as t,f as o,k as i,j as a,x as m,bD as r,da as d,ae as p}from"./index.js";import{a as n}from"./hooks.js";import l from"./ModeBox.js";import j from"./StepBtn.js";import"./BasicForm.js";import"./index4.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index5.js";import"./index6.js";import"./useFormItem.js";/* empty css      */import"./transButton.js";import"./index2.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";import"./lodash.default.js";import"./throttle.js";import"./merge.js";const u={class:"step-box"},c=p("div",{class:"step-tip"},"请选择迁移模式",-1),f={key:0,class:"s-tip"},x=[p("span",null,"全量迁移会完整复制“data”文件夹，以及redis中用户uid的绑定关系。",-1)],k={key:1,class:"s-tip"},y=[p("span",{style:{color:"red"}},"[不推荐] ",-1),p("span",null," 选择迁移可选择迁移哪些项目。由于plugin可能会将数据存放到data文件夹， 如果使用选择迁移，锅巴无法考虑到所有插件，极有可能导致数据丢失！ ",-1)],v={key:2},g=e({__name:"Step1-2",emits:["prev","next"],setup(e,{emit:p}){const[g,{models:h}]=n({},{emit:p}),B=s({mode:[{key:"full",title:"全量迁移",desc:"完整复制“data”文件夹",recommended:!0},{key:"choose",title:"选择迁移",desc:"选择要迁移的项目"}]});return(e,s)=>(t(),o("div",u,[c,i(d,{name:"fade-slide",mode:"out-in",appear:""},{default:a((()=>[i(l,{active:m(h).mode,"onUpdate:active":s[0]||(s[0]=e=>m(h).mode=e),modeList:B.mode,key:"trans-mode"},null,8,["active","modeList"]),i(r,{name:"fade-slide",mode:"out-in",appear:"",key:"trans-1"},{default:a((()=>["full"===m(h).mode?(t(),o("div",f,x)):"choose"===m(h).mode?(t(),o("div",k,y)):(t(),o("span",v))])),_:1})])),_:1}),i(j,{onRegister:m(g)},null,8,["onRegister"])]))}});export{g as default};
