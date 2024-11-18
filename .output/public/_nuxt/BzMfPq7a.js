import{aL as R,r as b,aM as T,aN as B,aO as F,aP as M,a as O,w as U,G as j,aQ as L,u as $,e as z,aR as h,aS as H,aT as q,aU as x}from"./CEFpPj_H.js";const K=s=>s==="defer"||s===!1;function N(...s){var v;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,i,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=j(),l=i,y=()=>null,g=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??y,a.getCachedData=a.getCachedData??g,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??R.deep,a.dedupe=a.dedupe??"cancel";const m=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(v=e.payload._errors)[t]??(v[t]=null);const c=a.deep?b:T;e._asyncData[t]={data:c(a.getCachedData(t,e)??a.default()),pending:b(!m()),error:B(e.payload._errors,t),status:b("idle")}}const r={...e._asyncData[t]};r.refresh=r.execute=(c={})=>{if(e._asyncDataPromises[t]){if(K(c.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((c._initial||e.isHydrating&&c._initial!==!1)&&m())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const f=new Promise((o,u)=>{try{o(l(e))}catch(_){u(_)}}).then(async o=>{if(f.cancelled)return e._asyncDataPromises[t];let u=o;a.transform&&(u=await a.transform(o)),a.pick&&(u=G(u,a.pick)),e.payload.data[t]=u,r.data.value=u,r.error.value=null,r.status.value="success"}).catch(o=>{if(f.cancelled)return e._asyncDataPromises[t];r.error.value=L(o),r.data.value=$(a.default()),r.status.value="error"}).finally(()=>{f.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=f,e._asyncDataPromises[t]},r.clear=()=>S(e,t);const p=()=>r.refresh({_initial:!0}),w=a.server!==!1&&e.payload.serverRendered;{const c=F();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const o=c._nuxtOnBeforeMountCbs;c&&(M(()=>{o.forEach(u=>{u()}),o.splice(0,o.length)}),O(()=>o.splice(0,o.length)))}w&&e.isHydrating&&(r.error.value||m())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(p):a.immediate&&p(),a.watch&&U(a.watch,()=>r.refresh());const f=e.hook("app:data:refresh",async o=>{(!o||o.includes(t))&&await r.refresh()});c&&O(f)}const D=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(D,r),D}function S(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function G(s,n){const t={};for(const i of n)t[i]=s[i];return t}function W(s,n,t){const[i={},a]=typeof n=="string"?[{},n]:[n,t],e=z(()=>h(s)),l=i.key||H([a,typeof e.value=="string"?e.value:"",...I(i)]);if(!l||typeof l!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+l);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const y=l===a?"$f"+l:l;if(!i.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:g,lazy:m,default:r,transform:p,pick:w,watch:D,immediate:v,getCachedData:c,deep:f,dedupe:o,...u}=i,_=q({...x,...u,cache:typeof i.cache=="boolean"?void 0:i.cache}),E={server:g,lazy:m,default:r,transform:p,pick:w,immediate:v,getCachedData:c,deep:f,dedupe:o,watch:D===!1?[]:[_,e,...D||[]]};let d;return N(y,()=>{var C;(C=d==null?void 0:d.abort)==null||C.call(d),d=typeof AbortController<"u"?new AbortController:{};const P=h(i.timeout);return P&&setTimeout(()=>d.abort(),P),(i.$fetch||globalThis.$fetch)(e.value,{signal:d.signal,..._})},E)}function I(s){var t;const n=[((t=h(s.method))==null?void 0:t.toUpperCase())||"GET",h(s.baseURL)];for(const i of[s.params||s.query]){const a=h(i);if(!a)continue;const e={};for(const[l,y]of Object.entries(a))e[h(l)]=h(y);n.push(e)}return n}export{W as u};