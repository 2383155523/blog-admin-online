import{d as I,P as N,u as A,r as n,o as b,J as v,a2 as l,g as i,af as r,a4 as D,a as M,f as C,e as K,j as u,ad as c,w as S,ag as V,n as $,I as R}from"./vendor.be247260.js";import{i as L}from"./resize.69ee52a2.js";import{_ as H}from"./index.31c7326c.js";const T={style:{"margin-bottom":"20px"}},z=R("DeleteAll"),P=I({setup(j){N();const m={pageSize:12},y=A(),h=n([]),p=n([]),g=n(null),f=n(""),_=()=>{f.value=g.value.offsetHeight-170+""};b(()=>{_()}),v(()=>p.value.reduce((e,{columnKey:a,order:t})=>(e[a]=t,e),{}));const x=e=>{h.value=e},o=n((e=>{const a=[];for(let t=0;t<e;t++)a.push({Id:t,Name:`name${t}`,Date:new Date().toLocaleString(),AvatarUrl:`https://${t}`,BlogUrl:`https://blogaaaaaaaaaaaaaaaaaaaa/${t}`,Motto:`Motto${t}`,BlogImg:`https://blogImg/${t}`,isEdit:!1});return a})(20)),E=v(()=>[{type:"selection"},{title:"Id",key:"Id",align:"center"},{title:"Name",key:"Name",align:"center",ellipsis:{tooltip:!0},render(e,a){return e.isEdit?l(r,{value:e.Name,onUpdateValue(t){o.value[a].Name=t},onKeyup(t){if(t.code=="Enter"){const{Id:d,Name:B}=i(e);e.isEdit=!1,console.log(d,B)}}}):l("div",e.Name)}},{title:"AvatarUrl",key:"AvatarUrl",align:"center",ellipsis:{tooltip:!0},render(e,a){return e.isEdit?l(r,{value:e.AvatarUrl,onUpdateValue(t){o.value[a].AvatarUrl=t},onKeyup(t){t.code=="Enter"&&(i(e),e.isEdit=!1)}}):l("div",e.AvatarUrl)}},{title:"BlogUrl",key:"BlogUrl",align:"center",ellipsis:{tooltip:!0},render(e,a){return e.isEdit?l(r,{value:e.BlogUrl,onUpdateValue(t){o.value[a].BlogUrl=t},onKeyup(t){t.code=="Enter"&&(i(e),e.isEdit=!1)}}):l("div",e.BlogUrl)}},{title:"Motto",key:"Motto",ellipsis:{tooltip:!0},align:"center",render(e,a){return e.isEdit?l(r,{value:e.Motto,onUpdateValue(t){o.value[a].Motto=t},onKeyup(t){t.code=="Enter"&&(i(e),e.isEdit=!1)}}):l("div",e.Motto)}},{title:"BlogImg",key:"BlogImg",ellipsis:{tooltip:!0},align:"center",render(e,a){return e.isEdit?l(r,{value:e.BlogImg,onUpdateValue(t){o.value[a].BlogImg=t},onKeyup(t){t.code=="Enter"&&(i(e),e.isEdit=!1)}}):l("div",e.BlogImg)}},{title:"Date",key:"Date",align:"center",ellipsis:{tooltip:!0}},{title:"Action",key:"Action",align:"center",render(e,a){const t=()=>{e.isEdit=!e.isEdit},d=()=>{console.log("delete")};return l("div",{},{default(){return[l(c,{onClick:t,type:"primary",style:`margin-right:13px;margin-bottom:${L.value?"0":"10px"}`},{default(){return e.isEdit?"Cancel":"Edit"}}),l(c,{onClick:d,type:"error"},{default(){return"Delete"}})]}})}}]);function U(e){console.log(e),p.value=[].concat(e)}const s=n(null),k=i(o);return D(s,e=>{e==""&&(o.value=k),o.value=i(o).filter(a=>a.Name.toLocaleLowerCase().includes(e.trim().toLowerCase()))}),(e,a)=>(M(),C("div",{class:"firendBox",ref_key:"firendBox",ref:g,style:$({background:i(y).state.theme=="light"?"#fff":"#333"})},[K("div",T,[u(i(c),{type:"error",style:{"margin-right":"30px"}},{default:S(()=>[z]),_:1}),u(i(r),{value:s.value,"onUpdate:value":a[0]||(a[0]=t=>s.value=t),type:"text",placeholder:"Search About Name",clearable:"",style:{width:"200px"}},null,8,["value"])]),u(i(V),{columns:i(E),data:o.value,pagination:m,"row-key":t=>t.Id,"onUpdate:checkedRowKeys":x,"onUpdate:sorter":U,striped:"","max-height":f.value},null,8,["columns","data","row-key","max-height"])],4))}});var O=H(P,[["__scopeId","data-v-75d18da0"]]);export{O as default};
