import{r,z as f,w as h,b as M,q as E,j as D,o as b,d as P,x as F}from"./@vue.3182ba0d.js";import{a as l,o as c}from"./evtd.5b1ed12a.js";function $(e){const n=r(!!e.value);if(n.value)return f(n);const t=h(e,u=>{u&&(n.value=!0,t())});return f(n)}function q(e){const n=M(e),t=r(n.value);return h(n,u=>{t.value=u}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(u){e.set(u)}}}function T(){return E()!==null}const I=typeof window!="undefined";let d,k;const R=()=>{var e,n;d=I?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,k=!1,d!==void 0?d.then(()=>{k=!0}):k=!0};R();function z(e){if(k)return;let n=!1;D(()=>{k||d==null||d.then(()=>{n||e()})}),b(()=>{n=!0})}const v=r(null);function _(e){if(e.clientX>0||e.clientY>0)v.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:u,width:s,height:i}=n.getBoundingClientRect();t>0||u>0?v.value={x:t+s/2,y:u+i/2}:v.value={x:0,y:0}}else v.value=null}}let p=0,B=!0;function K(){if(!I)return f(r(null));p===0&&l("click",document,_,!0);const e=()=>{p+=1};return B&&(B=T())?(P(e),b(()=>{p-=1,p===0&&c("click",document,_,!0)})):e(),f(v)}const S=r(void 0);let y=0;function H(){S.value=Date.now()}let j=!0;function V(e){if(!I)return f(r(!1));const n=r(!1);let t=null;function u(){t!==null&&window.clearTimeout(t)}function s(){u(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}y===0&&l("click",window,H,!0);const i=()=>{y+=1,l("click",window,s,!0)};return j&&(j=T())?(P(i),b(()=>{y-=1,y===0&&c("click",window,H,!0),c("click",window,s,!0),u()})):i(),f(n)}function A(e,n){return h(e,t=>{t!==void 0&&(n.value=t)}),M(()=>e.value===void 0?n.value:e.value)}function G(){const e=r(!1);return D(()=>{e.value=!0}),f(e)}function J(e,n){return M(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const U=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function L(){return U}function N(e={},n){const t=F({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:u,keyup:s}=e,i=o=>{switch(o.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}u!==void 0&&Object.keys(u).forEach(m=>{if(m!==o.key)return;const a=u[m];if(typeof a=="function")a(o);else{const{stop:g=!1,prevent:C=!1}=a;g&&o.stopPropagation(),C&&o.preventDefault(),a.handler(o)}})},w=o=>{switch(o.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}s!==void 0&&Object.keys(s).forEach(m=>{if(m!==o.key)return;const a=s[m];if(typeof a=="function")a(o);else{const{stop:g=!1,prevent:C=!1}=a;g&&o.stopPropagation(),C&&o.preventDefault(),a.handler(o)}})},x=()=>{(n===void 0||n.value)&&(l("keydown",document,i),l("keyup",document,w)),n!==void 0&&h(n,o=>{o?(l("keydown",document,i),l("keyup",document,w)):(c("keydown",document,i),c("keyup",document,w))})};return T()?(P(x),b(()=>{(n===void 0||n.value)&&(c("keydown",document,i),c("keyup",document,w))})):x(),f(t)}export{L as a,A as b,J as c,N as d,V as e,K as f,$ as g,G as i,z as o,q as u};
