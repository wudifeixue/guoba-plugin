var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&o(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&o(e,n,t[n]);return e},l=(e,t,n)=>new Promise(((r,a)=>{var i=e=>{try{s(n.next(e))}catch(t){a(t)}},o=e=>{try{s(n.throw(e))}catch(t){a(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,o);s((n=n.apply(e,t)).next())}));import{B as c,a as p}from"./index31.js";import{a as d,b as u,z as m,r as f,G as y,x as b,e as g,o as v,i as j,j as _,k as w,ae as h,m as O,f as k,R as P,a0 as x,a1 as C,l as D,af as I,u as L}from"./index.js";import"./index2.js";/* empty css      *//* empty css                                                      */import{f as S,h as B,r as R,i as z}from"./miao.api.js";import"./index11.js";import"./ArrowLeftOutlined.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./base64Conver.js";const A=u({name:"BackupDrawer",components:{BasicDrawer:c},emits:["register","reload"],setup(e,{emit:r}){const a=m(),{createMessage:i,createConfirm:o}=I(),{createPrompt:c}=L(),d=f(!1),u=f([]),[g,{closeDrawer:v,setDrawerProps:j}]=p((function(){_()}));function _(){return l(this,null,(function*(){try{h(!0),u.value=(yield S()).reverse()}finally{h(!1)}}))}function w(){v()}function h(e){d.value=e,j({confirmLoading:e})}return{getProps:y((()=>{let r={width:document.body.clientWidth>=768?700:"100%",title:"喵喵帮助备份",confirmLoading:b(d)};var i;return i=s(s(s({},b(a)),r),e),t(i,n({onOk:w,onCancel:w,onRegister:g}))})),loading:d,backupList:u,onAdd:function(){c({title:"新增备份",required:!0,placeholder:"请输入备份名称",bottomHelpMessage:"注：新版备份只会备份配置和图标，背景图片请使用“皮肤”功能。",onOk(e){return l(this,null,(function*(){yield B(e),yield _()}))}})},onRollback:function(e){return l(this,null,(function*(){let t=!1;if(2===e.version||(t=yield new Promise((e=>{o({iconType:"warning",title:"备份版本过低",content:"当前备份为旧版备份，是否要转换为新版备份？",onOk:()=>e(!0),onCancel:()=>e(!1)})})),t))try{h(!0),yield R(e.id),t&&(yield _()),r("reload")}finally{h(!1)}}))},onDelete:function(e){return l(this,null,(function*(){try{h(!0),yield z(e.id),yield _()}finally{h(!1)}}))}}}}),F={style:{"margin-bottom":"8px"}},M=D("新增备份"),W={key:0,class:"remark-old"};var q=d(A,[["render",function(e,t,n,r,a,i){const o=g("a-button"),s=g("a-popconfirm"),l=g("a-list-item-meta"),c=g("a-list-item"),p=g("a-list"),d=g("a-spin"),u=g("BasicDrawer");return v(),j(u,x(C(e.getProps)),{default:_((()=>[w(d,{wrapperClassName:"p-2",spinning:e.loading},{default:_((()=>[h("div",F,[w(o,{type:"primary",preIcon:"ant-design:plus",onClick:e.onAdd},{default:_((()=>[M])),_:1},8,["onClick"])]),w(p,{size:"large",bordered:"",dataSource:e.backupList},{renderItem:_((({item:t})=>[w(c,null,{actions:_((()=>[w(s,{title:"确定要还原吗？",placement:"left",onConfirm:()=>e.onRollback(t)},{default:_((()=>[w(o,{type:"primary",shape:"circle",preIcon:"ant-design:undo"})])),_:2},1032,["onConfirm"]),w(s,{title:"确定要删除吗？",placement:"left",onConfirm:()=>e.onDelete(t)},{default:_((()=>[w(o,{type:"primary",shape:"circle",danger:"",preIcon:"ant-design:delete"})])),_:2},1032,["onConfirm"])])),default:_((()=>[w(l,{description:t.time},{title:_((()=>[h("span",null,O(t.remark),1),2!==t.version?(v(),k("span",W,"OLD")):P("",!0)])),_:2},1032,["description"])])),_:2},1024)])),_:1},8,["dataSource"])])),_:1},8,["spinning"])])),_:1},16)}],["__scopeId","data-v-736ebd1c"]]);export{q as default};
