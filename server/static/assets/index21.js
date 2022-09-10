import{b as e,r as t,e as i,o as s,i as n,j as o,z as r,x as l,k as a,f as u,h as p,F as c,Y as d,Z as g,l as v,dI as m,aT as y}from"./index.js";import{P as f}from"./index13.js";import{u as b,D as h}from"./index14.js";import{G as j,D as k,S as x,a as w}from"./siteSetting.js";import z from"./LoadGitee.js";import"./index15.js";import"./onMountedOrActivated.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./transButton.js";import"./get.js";import"./MarkdownViewer.js";const B={class:"flex items-center justify-between"},G={class:"flex-1"},V=["href"],_=v(" 是一个 "),q=r("a",{href:"https://github.com/Le-niao/Yunzai-Bot",target:"_blank"},"Yunzai-Bot",-1),R=v(" 的插件，主要用于提供后台管理界面。 基于Vue-VBen-Admin、Vue3.0、Vite、Ant-Design-Vue、TypeScript开发。 "),T={key:"about",class:"p-4"},D={key:"todo",class:"p-4 bg-white"},A=e({__name:"index",setup(e){const{pkg:v,lastBuildTime:A}={pkg:{dependencies:{"@ant-design/colors":"^6.0.0","@ant-design/icons-vue":"^6.1.0","@iconify/iconify":"^2.2.1","@logicflow/core":"^1.1.13","@logicflow/extension":"^1.1.13","@vue/runtime-core":"^3.2.33","@vue/shared":"^3.2.33","@vueuse/core":"^8.3.0","@vueuse/shared":"^8.3.0","@zxcvbn-ts/core":"^2.0.1","ant-design-vue":"^3.2.0",axios:"^0.26.1",codemirror:"^5.65.3",cropperjs:"^1.5.12","crypto-js":"^4.1.1",dayjs:"^1.11.1",echarts:"^5.3.2","intro.js":"^5.1.0","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.0",pinia:"2.0.12","print-js":"^1.6.0",qrcode:"^1.5.0",qs:"^6.10.3","resize-observer-polyfill":"^1.5.1",showdown:"^2.1.0",sortablejs:"^1.15.0",tinymce:"^5.10.3",vditor:"^3.8.13",vue:"^3.2.33","vue-i18n":"^9.1.9","vue-json-pretty":"^2.0.6","vue-picture-cropper":"^0.5.1","vue-router":"^4.0.14","vue-types":"^4.1.1",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^16.2.3","@commitlint/config-conventional":"^16.2.1","@iconify/json":"^2.1.30","@purge-icons/generated":"^0.8.1","@types/codemirror":"^5.60.5","@types/crypto-js":"^4.1.1","@types/fs-extra":"^9.0.13","@types/inquirer":"^8.2.1","@types/intro.js":"^3.0.2","@types/lodash-es":"^4.17.6","@types/mockjs":"^1.0.6","@types/node":"^17.0.25","@types/nprogress":"^0.2.0","@types/qrcode":"^1.4.2","@types/qs":"^6.9.7","@types/showdown":"^1.9.4","@types/sortablejs":"^1.10.7","@typescript-eslint/eslint-plugin":"^5.20.0","@typescript-eslint/parser":"^5.20.0","@vitejs/plugin-legacy":"^1.8.1","@vitejs/plugin-vue":"^2.3.1","@vitejs/plugin-vue-jsx":"^1.3.10","@vue/compiler-sfc":"^3.2.33","@vue/test-utils":"^2.0.0-rc.21",autoprefixer:"^10.4.4","conventional-changelog-cli":"^2.2.2","cross-env":"^7.0.3","cz-git":"^1.3.9",czg:"^1.3.9",dotenv:"^16.0.0",eslint:"^8.13.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.6.0",esno:"^0.14.1","fs-extra":"^10.1.0",husky:"^7.0.4",inquirer:"^8.2.2",less:"^4.1.2","lint-staged":"12.3.7","npm-run-all":"^4.1.5",picocolors:"^1.0.0",postcss:"^8.4.12","postcss-html":"^1.4.1","postcss-less":"^6.0.0",prettier:"^2.6.2",rimraf:"^3.0.2",rollup:"^2.70.2","rollup-plugin-visualizer":"^5.6.0",stylelint:"^14.7.1","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended":"^7.0.0","stylelint-config-recommended-vue":"^1.4.0","stylelint-config-standard":"^25.0.0","stylelint-order":"^5.0.0","ts-node":"^10.7.0",typescript:"^4.6.3",vite:"^2.9.5","vite-plugin-compression":"^0.5.1","vite-plugin-html":"^3.2.0","vite-plugin-imagemin":"^0.6.1","vite-plugin-mkcert":"^1.6.0","vite-plugin-mock":"^2.9.6","vite-plugin-purge-icons":"^0.8.1","vite-plugin-pwa":"^0.11.13","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-theme":"^0.8.6","vite-plugin-vue-setup-extend":"^0.4.0","vite-plugin-windicss":"^1.8.4","vue-eslint-parser":"^8.3.0","vue-tsc":"^0.33.9"},name:"guoba-plugin-web",version:"1.0.0"},lastBuildTime:"2022-09-10 20:28:03"},{dependencies:O,devDependencies:S,name:K,version:L}=v,Y=[],C=[],E=e=>t=>m(y,{color:e},(()=>t)),F=e=>t=>m("a",{href:t,target:"_blank"},e),M=t("about"),P=t([{key:"about",title:"关于"},{key:"todo",title:"咕咕咕"}]),H=[{label:"版本",field:"version",render:E("blue")},{label:"最后编译时间",field:"lastBuildTime",render:E("blue")},{label:"Github",field:"github",render:F("Github仓库地址")},{label:"Gitee",field:"gitee",render:F("Gitee仓库地址")}],I={version:L,lastBuildTime:A,doc:k,preview:x,github:j,gitee:w};Object.keys(O).forEach((e=>{Y.push({field:e,label:e})})),Object.keys(S).forEach((e=>{C.push({field:e,label:e})}));const[U]=b({title:"生产环境依赖",data:O,schema:Y,column:3}),[W]=b({title:"开发环境依赖",data:S,schema:C,column:3}),[Z]=b({title:"项目信息",data:I,schema:H,column:2});return(e,t)=>{const v=i("a-tab-pane"),m=i("a-tabs");return s(),n(l(f),{title:"关于",sticky:"",dense:""},{headerContent:o((()=>[r("div",B,[r("span",G,[r("a",{href:l(j),target:"_blank"},"Guoba-Plugin",8,V),_,q,R])])])),footer:o((()=>[a(m,{activeKey:M.value,"onUpdate:activeKey":t[0]||(t[0]=e=>M.value=e)},{default:o((()=>[(s(!0),u(c,null,p(P.value,(e=>(s(),n(v,{key:e.key,tab:e.title},null,8,["tab"])))),128))])),_:1},8,["activeKey"])])),default:o((()=>[d(r("div",T,[a(l(h),{onRegister:l(Z),class:"enter-y"},null,8,["onRegister"]),a(l(h),{onRegister:l(U),class:"my-4 enter-y"},null,8,["onRegister"]),a(l(h),{onRegister:l(W),class:"enter-y"},null,8,["onRegister"])],512),[[g,"about"===M.value]]),d(r("div",D,[a(z)],512),[[g,"todo"===M.value]])])),_:1})}}});export{A as default};
