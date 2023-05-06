var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,i=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&n(e,o,t[o]);if(s)for(var o of s(t))l.call(t,o)&&n(e,o,t[o]);return e},a=(e,s)=>t(e,o(s));import{B as d}from"./TableImg.js";import"./BasicForm.js";import{b as m,bb as p,p as c,z as u,r as g,d4 as f,x,d6 as b,k as j,e as w,a as h,o as S,i as C,j as R,V as I,ae as O,R as y}from"./index.js";import{B as _,u as v}from"./index2.js";import{s as P,u as B}from"./useSelectModal.js";/* empty css      */import"./index14.js";import"./index16.js";import"./onMountedOrActivated.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./transButton.js";import"./index5.js";import"./index6.js";import"./merge.js";import"./upperFirst.js";import"./_baseIteratee.js";import"./get.js";import"./sortable.esm.js";import"./RedoOutlined.js";import"./FullscreenOutlined.js";import"./scrollTo.js";import"./index21.js";import"./index22.js";import"./index4.js";import"./find.js";import"./useFormItem.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";function k(e){return b.get({url:"/oicq/group/list",params:e})}var F=m({name:"SelectGroupModal",components:{BasicModal:_,BasicTable:d,FormItemRest:p},props:a(i({},P),{modalTitle:c.string.def("选择群")}),emits:["register","getSelectResult"],setup(e,{emit:t}){const o=u(),s=g(),r=f(),l=Object.assign({},x(e),x(o),{canResize:!1,bordered:!0,size:"small"}),[{rowSelection:n,visibleChange:d,selectValues:m,indexColumnProps:p,getSelectResult:c,handleDeleteSelected:b,selectRows:h}]=B(k,l),S=g({x:!1}),[C,{closeModal:R}]=v((()=>{window.innerWidth<900?S.value={x:900}:S.value={x:!1},setTimeout((()=>{s.value&&s.value.setSelectedRowKeys(m.value||[])}),800)})),I=[{title:"头像",dataIndex:"group_id",width:60,customRender:({text:e})=>j(w("g-avatar"),{id:e,type:"group",qs:100},null)},{title:"群号",dataIndex:"group_id",width:120},{title:"群名",dataIndex:"group_name",ellipsis:!0,align:"left",customRender({text:e,record:t}){if(t.remark!==e){const o=t.owner_id===r.getUserInfo.userId,s=t.admin_flag,l=o?"（群主）":s?"（管理员）":"";return j("span",null,[j("span",null,[e]),j("span",{style:"color:#999;font-size:8px;"},[l])])}return e}},{title:"活跃人数",dataIndex:"active_member_count",width:80,customRender:({text:e})=>(null!=e?e:0)+"人"},{title:"总人数",dataIndex:"member_count",width:80,customRender:({text:e})=>(null!=e?e:0)+"人"}];return{handleOk:function(){c(((e,o)=>{t("getSelectResult",e,o),R()}))},searchInfo:g(e.params),register:C,indexColumnProps:p,visibleChange:d,getBindValue:l,getGroupList:k,formConfig:{baseColProps:{xs:24,sm:8,md:6,lg:8,xl:8,xxl:8},actionColOptions:{xs:24,sm:8,md:8,lg:8,xl:8,xxl:8,style:{paddingLeft:"8px",textAlign:"left"}},labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:18},schemas:[{label:"群号",field:"query_group_id",component:"Input",componentProps:{placeholder:"请输入群号"}},{label:"群名称",field:"query_name",component:"Input",componentProps:{placeholder:"请输入群名称"}}],autoSubmitOnEnter:!0},columns:I,rowSelection:n,selectRows:h,selectedTable:{rowKey:"group_id",size:"small",bordered:!0,scroll:{y:390},canResize:!1,pagination:!1,showIndexColumn:!1,columns:[I[0],a(i({},I[1]),{show:!1}),I[2]]},handleDeleteSelected:b,tableScroll:S,tableRef:s}}});const T=["onClick"];var z=h(F,[["render",function(e,t,o,s,r,l){const n=w("BasicTable"),i=w("a-col"),a=w("Icon"),d=w("a-row"),m=w("BasicModal"),p=w("FormItemRest");return S(),C(p,null,{default:R((()=>[j(m,I({width:"800px",title:e.modalTitle,onOk:e.handleOk,onRegister:e.register,onVisibleChange:e.visibleChange},e.$attrs),{default:R((()=>[j(d,null,{default:R((()=>[j(i,{span:e.showSelected?18:24},{default:R((()=>[j(n,I({ref:"tableRef",columns:e.columns,scroll:e.tableScroll},e.getBindValue,{useSearchForm:!0,formConfig:e.formConfig,api:e.getGroupList,searchInfo:e.searchInfo,rowSelection:e.rowSelection,indexColumnProps:e.indexColumnProps}),null,16,["columns","scroll","formConfig","api","searchInfo","rowSelection","indexColumnProps"])])),_:1},8,["span"]),e.showSelected?(S(),C(i,{key:0,span:6},{default:R((()=>[j(n,I(e.selectedTable,{dataSource:e.selectRows,useSearchForm:!0,formConfig:{showActionButtonGroup:!1,baseRowStyle:{minHeight:"40px"}}}),{action:R((({record:t})=>[O("a",{onClick:o=>e.handleDeleteSelected(t)},[j(a,{icon:"ant-design:delete-outlined"})],8,T)])),_:1},16,["dataSource"])])),_:1})):y("",!0)])),_:1})])),_:1},16,["title","onOk","onRegister","onVisibleChange"])])),_:1})}]]);export{z as default};
