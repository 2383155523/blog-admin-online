import{d as B,P as w,u as A,r as o,o as N,J as d,a1 as p,g as l,a4 as D,a as U,f as b,e as C,j as s,ac as g,w as I,ae as S,af as T,n as R,I as L}from"./vendor.949f6402.js";import{_ as E}from"./index.737822c7.js";const H={style:{"margin-bottom":"20px"}},M=L("DeleteAll"),$=B({setup(z){w();const f={pageSize:12},h=A(),v=o([]),i=o([]),c=o(null),u=o(""),m=()=>{u.value=c.value.offsetHeight-170+""};N(()=>{m()}),d(()=>i.value.reduce((t,{columnKey:a,order:e})=>(t[a]=e,t),{}));const y=t=>{v.value=t},r=o((t=>{const a=[];for(let e=0;e<t;e++)a.push({Id:e,Name:`name${e}`,Date:new Date().toLocaleString(),AvatarUrl:`https://${e}`,BlogUrl:`https://blogaaaaaaaaaaaaaaaaaaaa/${e}`,Tag:e%3==0?"\u53CB\u4EBA":"\u6E38\u5BA2"});return a})(200)),_=d(()=>[{type:"selection"},{title:"Id",key:"Id",align:"center"},{title:"Name",key:"Name",align:"center",ellipsis:{tooltip:!0}},{title:"AvatarUrl",key:"AvatarUrl",align:"center",ellipsis:{tooltip:!0}},{title:"BlogUrl",key:"BlogUrl",ellipsis:{tooltip:!0},align:"center"},{title:"Tag",key:"Tag",align:"center",ellipsis:{tooltip:!0}},{title:"Date",key:"Date",align:"center",ellipsis:{tooltip:!0}},{title:"Action",key:"Action",align:"center",render(t,a){const e=()=>{console.log("delete")};return p("div",{},{default(){return[p(g,{onClick:e,type:"error"},{default(){return"Delete"}})]}})}}]);function x(t){console.log(t),i.value=[].concat(t)}const n=o(null),k=l(r);return D(n,t=>{t==""&&(r.value=k),r.value=l(r).filter(a=>a.Name.toLocaleLowerCase().includes(t.trim().toLowerCase()))}),(t,a)=>(U(),b("div",{class:"firendBox",ref_key:"firendBox",ref:c,style:R({background:l(h).state.theme=="light"?"#fff":"#333"})},[C("div",H,[s(l(g),{type:"error",style:{"margin-right":"30px"}},{default:I(()=>[M]),_:1}),s(l(S),{value:n.value,"onUpdate:value":a[0]||(a[0]=e=>n.value=e),type:"text",placeholder:"Search About Name",clearable:"",style:{width:"200px"}},null,8,["value"])]),s(l(T),{columns:l(_),data:r.value,pagination:f,"row-key":e=>e.Id,"onUpdate:checkedRowKeys":y,"onUpdate:sorter":x,striped:"","max-height":u.value},null,8,["columns","data","row-key","max-height"])],4))}});var J=E($,[["__scopeId","data-v-785274b6"]]);export{J as default};
//# sourceMappingURL=index.6e273611.js.map
