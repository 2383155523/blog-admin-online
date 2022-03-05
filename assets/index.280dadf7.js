import{d as T,u as z,aj as N,r as u,a4 as j,o as U,a as d,f as x,e as o,n as m,g as e,j as i,R as _,w as r,X as V,$ as M,b as Y,ak as J,H as v,al as W,ae as q,am as b,ac as C,c as f,a9 as k,I as p,K as H}from"./vendor.8862a4d3.js";import{s as K,t as L,u as O,v as Q,w as R,x as $,y as G,z as X,b as P,a as Z}from"./index.1099f9c6.js";import{_ as ee,g as te,s as se}from"./index.1cbd102e.js";const w=[{text:"\u63D2\u5165\u97F3\u4E50",component:K,template:`<my-music id="1899705498"></my-music>
`},{text:"\u63D2\u5165\u89C6\u9891",component:L,template:`<my-video src="https://fuyouplus.oss-cn-beijing.aliyuncs.com/video/zuozhu.mp4"></my-video>
`},{text:"\u63D2\u5165\u56FE\u7247",component:O,template:`<my-img src="http://m.qpic.cn/psc?/V51noezu0WxJjn3TxupB3Z8gB92qiTAu/45NBuzDIW489QBoVep5mcSVIeOvTUqveUJWIgdnFCive.FzFurRb1QkmeQpmp4hwGdM0ocxcJrNgYSfYxYHgu0Jbaxc1MCXk1F*YGWxNdRw!/b&bo=lwY4BAAAAAABF50!&rf=viewer_4"></my-img>
`},{text:"\u63D2\u5165\u4EE3\u7801",component:Q,template:`<my-code lang="js">
    const a = 20;
    function fn (){
        return a;
    }
</my-code>
`},{text:"\u63D2\u5165\u677F\u5757\u6846",component:R,template:`<my-text-block color="#409EFFFF" title="Use" theme="light">
    theme\u7684\u53EF\u9009\u503C: light || dark 
    \u76EE\u524D\u662F\u6D45\u8272\u6A21\u5F0F light
</my-text-block>
`},{text:"\u63D2\u5165Iframe",component:$,template:`<my-iframe src="https://fuyouplus.cn/" h="900px"></my-iframe>
`},{text:"\u63D2\u5165\u94FE\u63A5",component:G,template:'<my-a color="#409EFFFF" size="16px" weight="bold" href="https://fuyouplus.cn/" line>\u5FAE\u82E5\u8709\u8763</my-a>'},{text:"\u63D2\u5165\u63D0\u793A",component:X,template:`<my-tips type="primary">
    tpye\u7684\u53EF\u9009\u503C\u6709 info | warn | error | success
    </my-tips>

    <my-tips type="info">
    <div slot="title">
    \u5C0F\u8763\u8BF4:
    </div>
    tpye\u7684\u53EF\u9009\u503C\u6709 info | warn | error | success
</my-tips>
`}];const le={class:"editOuterContainer"},oe={class:"writeBox"},ae=p(" \u6C89\u6D78\u6A21\u5F0F "),ue={class:"options"},ne={class:"title"},ie={class:"classify"},re={class:"tag"},ce={class:"submit"},de=p("\u6682\u5B58"),pe=p("\u53D1\u5E03"),me=T({setup(ve){console.log(w);const s=z(),E=N(),g=u(null),c=u(""),n=u(!1),h=u(null),y=u(null),B=u([]),F=u(null),D=u([{label:"js",value:"js"},{label:"vue",value:"vue"},{label:"es6",value:"es6"},{label:"css",value:"css"}]),I=()=>{n.value=!n.value};j(c,a=>{g.value.innerHTML=a,se("blogContent",a)});const A=()=>{const a=te("blogContent");a&&E.info({title:"\u56DE\u6EAF\u535A\u6587",content:"\u662F\u5426\u56DE\u6EAF\u535A\u6587?",positiveText:"\u662F",negativeText:"\u7B97\u4E86",onPositiveClick:()=>{c.value=a},onNegativeClick:()=>{}})},S=a=>{c.value+=a};return U(()=>{A()}),(a,l)=>(d(),x("div",le,[o("div",{class:v(["editBox",{FullScreen:n.value}]),onKeyup:l[1]||(l[1]=W(t=>n.value=!1,["esc"]))},[o("div",oe,[o("div",{class:"utils",style:m({"border-color":e(s).state.theme=="light"?"#dddddd":"#575050",background:e(s).state.theme=="light"?"#fff":"#333"})},[i(e(_),{trigger:"hover"},{trigger:r(()=>[(d(),f(k(n.value?e(P):e(Z)),{size:"22",color:e(s).state.theme=="light"?"#333":"#fff",onClick:I},null,8,["color"]))]),default:r(()=>[ae]),_:1}),(d(!0),x(V,null,M(e(w),t=>(d(),f(e(_),{trigger:"hover"},{trigger:r(()=>[(d(),f(k(t.component),{size:"22",color:e(s).state.theme=="light"?"#333":"#fff",onClick:fe=>S(t.template)},null,8,["color","onClick"]))]),default:r(()=>[p(" "+H(t.text),1)]),_:2},1024))),256))],4),Y(o("textarea",{name:"write",class:v(["write",{FullScreen2:n.value}]),spellcheck:"false","onUpdate:modelValue":l[0]||(l[0]=t=>c.value=t),placeholder:"writing something !",style:m({background:e(s).state.theme=="light"?"#fff":"#333",color:e(s).state.theme=="light"?"#333":"#fff","border-color":e(s).state.theme=="light"?"#dddddd":"#575050"})},null,6),[[J,c.value]])]),o("div",{class:v(["previewBox",{FullScreen2:n.value}]),ref_key:"preview",ref:g,style:m({background:e(s).state.theme=="light"?"#fff":"#333",color:e(s).state.theme=="light"?"#333":"#fff","border-color":e(s).state.theme=="light"?"#dddddd":"#575050"})},null,6)],34),o("div",ue,[o("div",ne,[i(e(q),{value:h.value,"onUpdate:value":l[2]||(l[2]=t=>h.value=t),type:"text",placeholder:"Title"},null,8,["value"])]),o("div",ie,[i(e(b),{value:y.value,"onUpdate:value":l[3]||(l[3]=t=>y.value=t),options:B.value,loading:!1,placeholder:"Classify"},null,8,["value","options"])]),o("div",re,[i(e(b),{value:F.value,"onUpdate:value":l[4]||(l[4]=t=>F.value=t),multiple:"",options:D.value,loading:!1,placeholder:"Tag",clearable:!0},null,8,["value","options"])]),o("div",ce,[i(e(C),{type:"warning",class:"btn"},{default:r(()=>[de]),_:1}),i(e(C),{type:"primary",class:"btn"},{default:r(()=>[pe]),_:1})])])]))}});var Fe=ee(me,[["__scopeId","data-v-88970834"]]);export{Fe as default};
