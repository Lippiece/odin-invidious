import"./notFound-428a0f51.js";import{r as D,b as rg,c as ig,R as sg,d as og,e as Jo,g as ag}from"./react-118562ef.js";import{c as yl,B as ci,M as Pa,D as lg,d as ug,L as Wu,e as Ns,N as wn,f as cg,O as hg,S as Sa,g as dg,r as Zh,h as hs,H as fg,i as pg,T as Ms,j as ed,k as Gr,l as mg}from"./blueprintjs-7b0c2518.js";var td={exports:{}},lo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg=D,yg=Symbol.for("react.element"),_g=Symbol.for("react.fragment"),vg=Object.prototype.hasOwnProperty,Eg=gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wg={key:!0,ref:!0,__self:!0,__source:!0};function nd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vg.call(e,r)&&!wg.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yg,type:t,key:s,ref:o,props:i,_owner:Eg.current}}lo.Fragment=_g;lo.jsx=nd;lo.jsxs=nd;td.exports=lo;var I=td.exports,ba={},Ku=rg;ba.createRoot=Ku.createRoot,ba.hydrateRoot=Ku.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we.apply(this,arguments)}var Se;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Se||(Se={}));const Gu="popstate";function Tg(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return hi("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:On(i)}return Rg(e,n,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ig(){return Math.random().toString(36).substr(2,8)}function Qu(t,e){return{usr:t.state,key:t.key,idx:e}}function hi(t,e,n,r){return n===void 0&&(n=null),we({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yt(e):e,{state:n,key:e&&e.key||r||Ig()})}function On(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yt(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Rg(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Se.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(we({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){l=Se.Pop;let R=c(),L=R==null?null:R-u;u=R,a&&a({action:l,location:T.location,delta:L})}function d(R,L){l=Se.Push;let q=hi(T.location,R,L);n&&n(q,R),u=c()+1;let z=Qu(q,u),g=T.createHref(q);try{o.pushState(z,"",g)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(g)}s&&a&&a({action:l,location:T.location,delta:1})}function m(R,L){l=Se.Replace;let q=hi(T.location,R,L);n&&n(q,R),u=c();let z=Qu(q,u),g=T.createHref(q);o.replaceState(z,"",g),s&&a&&a({action:l,location:T.location,delta:0})}function v(R){let L=i.location.origin!=="null"?i.location.origin:i.location.href,q=typeof R=="string"?R:On(R);return le(L,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,L)}let T={get action(){return l},get location(){return t(i,o)},listen(R){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Gu,h),a=R,()=>{i.removeEventListener(Gu,h),a=null}},createHref(R){return e(i,R)},createURL:v,encodeLocation(R){let L=v(R);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:d,replace:m,go(R){return o.go(R)}};return T}var Ce;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ce||(Ce={}));const Ag=new Set(["lazy","caseSensitive","path","id","index","children"]);function Pg(t){return t.index===!0}function Ca(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],l=typeof i.id=="string"?i.id:o.join("-");if(le(i.index!==!0||!i.children,"Cannot specify children on an index route"),le(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Pg(i)){let a=we({},i,e(i),{id:l});return r[l]=a,a}else{let a=we({},i,e(i),{id:l,children:void 0});return r[l]=a,i.children&&(a.children=Ca(i.children,e,o,r)),a}})}function Zn(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Yt(e):e,i=Tr(r.pathname||"/",n);if(i==null)return null;let s=rd(t);Sg(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=Vg(s[l],Fg(i));return o}function rd(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(le(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Ht([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rd(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Mg(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of id(s.path))i(s,o,a)}),e}function id(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=id(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Sg(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Lg(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bg=/^:\w+$/,Cg=3,Dg=2,Og=1,kg=10,Ng=-2,Ju=t=>t==="*";function Mg(t,e){let n=t.split("/"),r=n.length;return n.some(Ju)&&(r+=Ng),e&&(r+=Dg),n.filter(i=>!Ju(i)).reduce((i,s)=>i+(bg.test(s)?Cg:s===""?Og:kg),r)}function Lg(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Vg(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=xg({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let h=l.route;s.push({params:r,pathname:Ht([i,c.pathname]),pathnameBase:Hg(Ht([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Ht([i,c.pathnameBase]))}return s}function xg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ug(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=l[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=jg(l[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ug(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Fg(t){try{return decodeURI(t)}catch(e){return hr(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jg(t,e){try{return decodeURIComponent(t)}catch(n){return hr(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Tr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Bg(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yt(t):t;return{pathname:n?n.startsWith("/")?n:$g(n,e):e,search:qg(r),hash:zg(i)}}function $g(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yo(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uo(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _l(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yt(t):(i=we({},t),le(!i.pathname||!i.pathname.includes("?"),Yo("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),Yo("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),Yo("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}l=h>=0?e[h]:"/"}let a=Bg(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const Ht=t=>t.join("/").replace(/\/\/+/g,"/"),Hg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class vl{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function sd(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const od=["post","put","patch","delete"],Wg=new Set(od),Kg=["get",...od],Gg=new Set(Kg),Qg=new Set([301,302,303,307,308]),Jg=new Set([307,308]),Xo={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ad=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xg=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function Zg(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;le(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let _=t.detectErrorBoundary;i=E=>({hasErrorBoundary:_(E)})}else i=Xg;let s={},o=Ca(t.routes,i,void 0,s),l,a=t.basename||"/",u=we({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,m=null,v=null,T=t.hydrationData!=null,R=Zn(o,t.history.location,a),L=null;if(R==null){let _=pt(404,{pathname:t.history.location.pathname}),{matches:E,route:N}=ic(o);R=E,L={[N.id]:_}}let q=!R.some(_=>_.route.lazy)&&(!R.some(_=>_.route.loader)||t.hydrationData!=null),z,g={historyAction:t.history.action,location:t.history.location,matches:R,initialized:q,navigation:Xo,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||L,fetchers:new Map,blockers:new Map},P=Se.Pop,k=!1,y,O=!1,p=!1,f=[],S=[],A=new Map,x=0,b=-1,j=new Map,G=new Set,$=new Map,w=new Map,C=new Map,U=!1;function B(){return c=t.history.listen(_=>{let{action:E,location:N,delta:H}=_;if(U){U=!1;return}hr(C.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let se=$u({currentLocation:g.location,nextLocation:N,historyAction:E});if(se&&H!=null){U=!0,t.history.go(H*-1),as(se,{state:"blocked",location:N,proceed(){as(se,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),t.history.go(H)},reset(){let ee=new Map(g.blockers);ee.set(se,Fr),ce({blockers:ee})}});return}return at(E,N)}),g.initialized||at(Se.Pop,g.location),z}function J(){c&&c(),h.clear(),y&&y.abort(),g.fetchers.forEach((_,E)=>Vr(E)),g.blockers.forEach((_,E)=>os(E))}function ke(_){return h.add(_),()=>h.delete(_)}function ce(_){g=we({},g,_),h.forEach(E=>E(g))}function ge(_,E){var N,H;let se=g.actionData!=null&&g.navigation.formMethod!=null&&vt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((N=_.state)==null?void 0:N._isRedirect)!==!0,ee;E.actionData?Object.keys(E.actionData).length>0?ee=E.actionData:ee=null:se?ee=g.actionData:ee=null;let re=E.loaderData?rc(g.loaderData,E.loaderData,E.matches||[],E.errors):g.loaderData,Y=g.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((ye,de)=>Y.set(de,Fr)));let K=k===!0||g.navigation.formMethod!=null&&vt(g.navigation.formMethod)&&((H=_.state)==null?void 0:H._isRedirect)!==!0;l&&(o=l,l=void 0),O||P===Se.Pop||(P===Se.Push?t.history.push(_,_.state):P===Se.Replace&&t.history.replace(_,_.state)),ce(we({},E,{actionData:ee,loaderData:re,historyAction:P,location:_,initialized:!0,navigation:Xo,revalidation:"idle",restoreScrollPosition:qu(_,E.matches||g.matches),preventScrollReset:K,blockers:Y})),P=Se.Pop,k=!1,O=!1,p=!1,f=[],S=[]}async function tt(_,E){if(typeof _=="number"){t.history.go(_);return}let N=Da(g.location,g.matches,a,u.v7_prependBasename,_,E?.fromRouteId,E?.relative),{path:H,submission:se,error:ee}=Yu(u.v7_normalizeFormMethod,!1,N,E),re=g.location,Y=hi(g.location,H,E&&E.state);Y=we({},Y,t.history.encodeLocation(Y));let K=E&&E.replace!=null?E.replace:void 0,ye=Se.Push;K===!0?ye=Se.Replace:K===!1||se!=null&&vt(se.formMethod)&&se.formAction===g.location.pathname+g.location.search&&(ye=Se.Replace);let de=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,ct=$u({currentLocation:re,nextLocation:Y,historyAction:ye});if(ct){as(ct,{state:"blocked",location:Y,proceed(){as(ct,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),tt(_,E)},reset(){let Ne=new Map(g.blockers);Ne.set(ct,Fr),ce({blockers:Ne})}});return}return await at(ye,Y,{submission:se,pendingError:ee,preventScrollReset:de,replace:E&&E.replace})}function ot(){if(en(),ce({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){at(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}at(P||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function at(_,E,N){y&&y.abort(),y=null,P=_,O=(N&&N.startUninterruptedRevalidation)===!0,eg(g.location,g.matches),k=(N&&N.preventScrollReset)===!0;let H=l||o,se=N&&N.overrideNavigation,ee=Zn(H,E,a);if(!ee){let Ne=pt(404,{pathname:E.pathname}),{matches:lt,route:bt}=ic(H);zo(),ge(E,{matches:lt,loaderData:{},errors:{[bt.id]:Ne}});return}if(g.initialized&&!p&&iy(g.location,E)&&!(N&&N.submission&&vt(N.submission.formMethod))){ge(E,{matches:ee});return}y=new AbortController;let re=Br(t.history,E,y.signal,N&&N.submission),Y,K;if(N&&N.pendingError)K={[er(ee).route.id]:N.pendingError};else if(N&&N.submission&&vt(N.submission.formMethod)){let Ne=await _n(re,E,N.submission,ee,{replace:N.replace});if(Ne.shortCircuited)return;Y=Ne.pendingActionData,K=Ne.pendingActionError,se=ds(E,N.submission),re=new Request(re.url,{signal:re.signal})}let{shortCircuited:ye,loaderData:de,errors:ct}=await vn(re,E,ee,se,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,Y,K);ye||(y=null,ge(E,we({matches:ee},Y?{actionData:Y}:{},{loaderData:de,errors:ct})))}async function _n(_,E,N,H,se){se===void 0&&(se={}),en();let ee=uy(E,N);ce({navigation:ee});let re,Y=ka(H,E);if(!Y.route.action&&!Y.route.lazy)re={type:Ce.error,error:pt(405,{method:_.method,pathname:E.pathname,routeId:Y.route.id})};else if(re=await jr("action",_,Y,H,s,i,a),_.signal.aborted)return{shortCircuited:!0};if(rr(re)){let K;return se&&se.replace!=null?K=se.replace:K=re.location===g.location.pathname+g.location.search,await _t(g,re,{submission:N,replace:K}),{shortCircuited:!0}}if(ni(re)){let K=er(H,Y.route.id);return(se&&se.replace)!==!0&&(P=Se.Push),{pendingActionData:{},pendingActionError:{[K.route.id]:re.error}}}if(An(re))throw pt(400,{type:"defer-action"});return{pendingActionData:{[Y.route.id]:re.data}}}async function vn(_,E,N,H,se,ee,re,Y,K){let ye=H||ds(E,se),de=se||ee||ac(ye),ct=l||o,[Ne,lt]=Xu(t.history,g,N,de,E,p,f,S,$,G,ct,a,Y,K);if(zo(Ee=>!(N&&N.some(dt=>dt.route.id===Ee))||Ne&&Ne.some(dt=>dt.route.id===Ee)),Ne.length===0&&lt.length===0){let Ee=is();return ge(E,we({matches:N,loaderData:{},errors:K||null},Y?{actionData:Y}:{},Ee?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!O){lt.forEach(dt=>{let Wn=g.fetchers.get(dt.key),Fe=$r(void 0,Wn?Wn.data:void 0);g.fetchers.set(dt.key,Fe)});let Ee=Y||g.actionData;ce(we({navigation:ye},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},lt.length>0?{fetchers:new Map(g.fetchers)}:{}))}b=++x,lt.forEach(Ee=>{A.has(Ee.key)&&St(Ee.key),Ee.controller&&A.set(Ee.key,Ee.controller)});let bt=()=>lt.forEach(Ee=>St(Ee.key));y&&y.signal.addEventListener("abort",bt);let{results:xr,loaderResults:Wo,fetcherResults:ls}=await Ut(g.matches,N,Ne,lt,_);if(_.signal.aborted)return{shortCircuited:!0};y&&y.signal.removeEventListener("abort",bt),lt.forEach(Ee=>A.delete(Ee.key));let Ft=sc(xr);if(Ft)return await _t(g,Ft,{replace:re}),{shortCircuited:!0};let{loaderData:us,errors:Ko}=nc(g,N,Ne,Wo,K,lt,ls,w);w.forEach((Ee,dt)=>{Ee.subscribe(Wn=>{(Wn||Ee.done)&&w.delete(dt)})});let Go=is(),Qo=ss(b),cs=Go||Qo||lt.length>0;return we({loaderData:us,errors:Ko},cs?{fetchers:new Map(g.fetchers)}:{})}function xt(_){return g.fetchers.get(_)||Yg}function qn(_,E,N,H){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");A.has(_)&&St(_);let se=l||o,ee=Da(g.location,g.matches,a,u.v7_prependBasename,N,E,H?.relative),re=Zn(se,ee,a);if(!re){nt(_,E,pt(404,{pathname:ee}));return}let{path:Y,submission:K,error:ye}=Yu(u.v7_normalizeFormMethod,!0,ee,H);if(ye){nt(_,E,ye);return}let de=ka(re,Y);if(k=(H&&H.preventScrollReset)===!0,K&&vt(K.formMethod)){En(_,E,Y,de,re,K);return}$.set(_,{routeId:E,path:Y}),zn(_,E,Y,de,re,K)}async function En(_,E,N,H,se,ee){if(en(),$.delete(_),!H.route.action&&!H.route.lazy){let Fe=pt(405,{method:ee.formMethod,pathname:N,routeId:E});nt(_,E,Fe);return}let re=g.fetchers.get(_),Y=cy(ee,re);g.fetchers.set(_,Y),ce({fetchers:new Map(g.fetchers)});let K=new AbortController,ye=Br(t.history,N,K.signal,ee);A.set(_,K);let de=await jr("action",ye,H,se,s,i,a);if(ye.signal.aborted){A.get(_)===K&&A.delete(_);return}if(rr(de)){A.delete(_),G.add(_);let Fe=$r(ee);return g.fetchers.set(_,Fe),ce({fetchers:new Map(g.fetchers)}),_t(g,de,{submission:ee,isFetchActionRedirect:!0})}if(ni(de)){nt(_,E,de.error);return}if(An(de))throw pt(400,{type:"defer-action"});let ct=g.navigation.location||g.location,Ne=Br(t.history,ct,K.signal),lt=l||o,bt=g.navigation.state!=="idle"?Zn(lt,g.navigation.location,a):g.matches;le(bt,"Didn't find any matches after fetcher action");let xr=++x;j.set(_,xr);let Wo=$r(ee,de.data);g.fetchers.set(_,Wo);let[ls,Ft]=Xu(t.history,g,bt,ee,ct,p,f,S,$,G,lt,a,{[H.route.id]:de.data},void 0);Ft.filter(Fe=>Fe.key!==_).forEach(Fe=>{let Ur=Fe.key,zu=g.fetchers.get(Ur),ng=$r(void 0,zu?zu.data:void 0);g.fetchers.set(Ur,ng),A.has(Ur)&&St(Ur),Fe.controller&&A.set(Ur,Fe.controller)}),ce({fetchers:new Map(g.fetchers)});let us=()=>Ft.forEach(Fe=>St(Fe.key));K.signal.addEventListener("abort",us);let{results:Ko,loaderResults:Go,fetcherResults:Qo}=await Ut(g.matches,bt,ls,Ft,Ne);if(K.signal.aborted)return;K.signal.removeEventListener("abort",us),j.delete(_),A.delete(_),Ft.forEach(Fe=>A.delete(Fe.key));let cs=sc(Ko);if(cs)return _t(g,cs);let{loaderData:Ee,errors:dt}=nc(g,g.matches,ls,Go,void 0,Ft,Qo,w);if(g.fetchers.has(_)){let Fe=Rs(de.data);g.fetchers.set(_,Fe)}let Wn=ss(xr);g.navigation.state==="loading"&&xr>b?(le(P,"Expected pending action"),y&&y.abort(),ge(g.navigation.location,{matches:bt,loaderData:Ee,errors:dt,fetchers:new Map(g.fetchers)})):(ce(we({errors:dt,loaderData:rc(g.loaderData,Ee,bt,dt)},Wn||Ft.length>0?{fetchers:new Map(g.fetchers)}:{})),p=!1)}async function zn(_,E,N,H,se,ee){let re=g.fetchers.get(_),Y=$r(ee,re?re.data:void 0);g.fetchers.set(_,Y),ce({fetchers:new Map(g.fetchers)});let K=new AbortController,ye=Br(t.history,N,K.signal);A.set(_,K);let de=await jr("loader",ye,H,se,s,i,a);if(An(de)&&(de=await cd(de,ye.signal,!0)||de),A.get(_)===K&&A.delete(_),ye.signal.aborted)return;if(rr(de)){G.add(_),await _t(g,de);return}if(ni(de)){let Ne=er(g.matches,E);g.fetchers.delete(_),ce({fetchers:new Map(g.fetchers),errors:{[Ne.route.id]:de.error}});return}le(!An(de),"Unhandled fetcher deferred data");let ct=Rs(de.data);g.fetchers.set(_,ct),ce({fetchers:new Map(g.fetchers)})}async function _t(_,E,N){let{submission:H,replace:se,isFetchActionRedirect:ee}=N===void 0?{}:N;E.revalidate&&(p=!0);let re=hi(_.location,E.location,we({_isRedirect:!0},ee?{_isFetchActionRedirect:!0}:{}));if(le(re,"Expected a location on the redirect navigation"),ad.test(E.location)&&n){let ye=t.history.createURL(E.location),de=Tr(ye.pathname,a)==null;if(e.location.origin!==ye.origin||de){se?e.location.replace(E.location):e.location.assign(E.location);return}}y=null;let Y=se===!0?Se.Replace:Se.Push,K=H||ac(_.navigation);if(Jg.has(E.status)&&K&&vt(K.formMethod))await at(Y,re,{submission:we({},K,{formAction:E.location}),preventScrollReset:k});else if(ee)await at(Y,re,{overrideNavigation:ds(re),fetcherSubmission:K,preventScrollReset:k});else{let ye=ds(re,K);await at(Y,re,{overrideNavigation:ye,preventScrollReset:k})}}async function Ut(_,E,N,H,se){let ee=await Promise.all([...N.map(K=>jr("loader",se,K,E,s,i,a)),...H.map(K=>K.matches&&K.match&&K.controller?jr("loader",Br(t.history,K.path,K.controller.signal),K.match,K.matches,s,i,a):{type:Ce.error,error:pt(404,{pathname:K.path})})]),re=ee.slice(0,N.length),Y=ee.slice(N.length);return await Promise.all([oc(_,N,re,re.map(()=>se.signal),!1,g.loaderData),oc(_,H.map(K=>K.match),Y,H.map(K=>K.controller?K.controller.signal:null),!0)]),{results:ee,loaderResults:re,fetcherResults:Y}}function en(){p=!0,f.push(...zo()),$.forEach((_,E)=>{A.has(E)&&(S.push(E),St(E))})}function nt(_,E,N){let H=er(g.matches,E);Vr(_),ce({errors:{[H.route.id]:N},fetchers:new Map(g.fetchers)})}function Vr(_){let E=g.fetchers.get(_);A.has(_)&&!(E&&E.state==="loading"&&j.has(_))&&St(_),$.delete(_),j.delete(_),G.delete(_),g.fetchers.delete(_)}function St(_){let E=A.get(_);le(E,"Expected fetch controller: "+_),E.abort(),A.delete(_)}function rs(_){for(let E of _){let N=xt(E),H=Rs(N.data);g.fetchers.set(E,H)}}function is(){let _=[],E=!1;for(let N of G){let H=g.fetchers.get(N);le(H,"Expected fetcher: "+N),H.state==="loading"&&(G.delete(N),_.push(N),E=!0)}return rs(_),E}function ss(_){let E=[];for(let[N,H]of j)if(H<_){let se=g.fetchers.get(N);le(se,"Expected fetcher: "+N),se.state==="loading"&&(St(N),j.delete(N),E.push(N))}return rs(E),E.length>0}function qo(_,E){let N=g.blockers.get(_)||Fr;return C.get(_)!==E&&C.set(_,E),N}function os(_){g.blockers.delete(_),C.delete(_)}function as(_,E){let N=g.blockers.get(_)||Fr;le(N.state==="unblocked"&&E.state==="blocked"||N.state==="blocked"&&E.state==="blocked"||N.state==="blocked"&&E.state==="proceeding"||N.state==="blocked"&&E.state==="unblocked"||N.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+E.state);let H=new Map(g.blockers);H.set(_,E),ce({blockers:H})}function $u(_){let{currentLocation:E,nextLocation:N,historyAction:H}=_;if(C.size===0)return;C.size>1&&hr(!1,"A router only supports one blocker at a time");let se=Array.from(C.entries()),[ee,re]=se[se.length-1],Y=g.blockers.get(ee);if(!(Y&&Y.state==="proceeding")&&re({currentLocation:E,nextLocation:N,historyAction:H}))return ee}function zo(_){let E=[];return w.forEach((N,H)=>{(!_||_(H))&&(N.cancel(),E.push(H),w.delete(H))}),E}function Zm(_,E,N){if(d=_,v=E,m=N||null,!T&&g.navigation===Xo){T=!0;let H=qu(g.location,g.matches);H!=null&&ce({restoreScrollPosition:H})}return()=>{d=null,v=null,m=null}}function Hu(_,E){return m&&m(_,E.map(H=>ly(H,g.loaderData)))||_.key}function eg(_,E){if(d&&v){let N=Hu(_,E);d[N]=v()}}function qu(_,E){if(d){let N=Hu(_,E),H=d[N];if(typeof H=="number")return H}return null}function tg(_){s={},l=Ca(_,i,void 0,s)}return z={get basename(){return a},get state(){return g},get routes(){return o},initialize:B,subscribe:ke,enableScrollRestoration:Zm,navigate:tt,fetch:qn,revalidate:ot,createHref:_=>t.history.createHref(_),encodeLocation:_=>t.history.encodeLocation(_),getFetcher:xt,deleteFetcher:Vr,dispose:J,getBlocker:qo,deleteBlocker:os,_internalFetchControllers:A,_internalActiveDeferreds:w,_internalSetRoutes:tg},z}function ey(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Da(t,e,n,r,i,s,o){let l,a;if(s!=null&&o!=="path"){l=[];for(let c of e)if(l.push(c),c.route.id===s){a=c;break}}else l=e,a=e[e.length-1];let u=_l(i||".",uo(l).map(c=>c.pathnameBase),Tr(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&a&&a.route.index&&!El(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Ht([n,u.pathname])),On(u)}function Yu(t,e,n,r){if(!r||!ey(r))return{path:n};if(r.formMethod&&!ay(r.formMethod))return{path:n,error:pt(405,{method:r.formMethod})};let i=()=>({path:n,error:pt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=ud(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vt(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,v)=>{let[T,R]=v;return""+m+T+"="+R+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!vt(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}le(typeof FormData=="function","FormData is not available in this environment");let a,u;if(r.formData)a=Oa(r.formData),u=r.formData;else if(r.body instanceof FormData)a=Oa(r.body),u=r.body;else if(r.body instanceof URLSearchParams)a=r.body,u=tc(a);else if(r.body==null)a=new URLSearchParams,u=new FormData;else try{a=new URLSearchParams(r.body),u=tc(a)}catch{return i()}let c={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(vt(c.formMethod))return{path:n,submission:c};let h=Yt(n);return e&&h.search&&El(h.search)&&a.append("index",""),h.search="?"+a,{path:On(h),submission:c}}function ty(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Xu(t,e,n,r,i,s,o,l,a,u,c,h,d,m){let v=m?Object.values(m)[0]:d?Object.values(d)[0]:void 0,T=t.createURL(e.location),R=t.createURL(i),L=m?Object.keys(m)[0]:void 0,z=ty(n,L).filter((P,k)=>{if(P.route.lazy)return!0;if(P.route.loader==null)return!1;if(ny(e.loaderData,e.matches[k],P)||o.some(p=>p===P.route.id))return!0;let y=e.matches[k],O=P;return Zu(P,we({currentUrl:T,currentParams:y.params,nextUrl:R,nextParams:O.params},r,{actionResult:v,defaultShouldRevalidate:s||T.pathname+T.search===R.pathname+R.search||T.search!==R.search||ld(y,O)}))}),g=[];return a.forEach((P,k)=>{if(!n.some(A=>A.route.id===P.routeId))return;let y=Zn(c,P.path,h);if(!y){g.push({key:k,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let O=e.fetchers.get(k),p=O&&O.state!=="idle"&&O.data===void 0&&!u.has(k),f=ka(y,P.path);(l.includes(k)||p||Zu(f,we({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:R,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})))&&g.push({key:k,routeId:P.routeId,path:P.path,matches:y,match:f,controller:new AbortController})}),[z,g]}function ny(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function ld(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Zu(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function ec(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];le(i,"No route found in manifest");let s={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";hr(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!Ag.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,we({},e(i),{lazy:void 0}))}async function jr(t,e,n,r,i,s,o,l){l===void 0&&(l={});let a,u,c,h=v=>{let T,R=new Promise((L,q)=>T=q);return c=()=>T(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:l.requestContext}),R])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),ec(n.route,s,i)]))[0];else if(await ec(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let T=new URL(e.url),R=T.pathname+T.search;throw pt(405,{method:e.method,pathname:R,routeId:n.route.id})}else return{type:Ce.data,data:void 0};else if(v)u=await h(v);else{let T=new URL(e.url),R=T.pathname+T.search;throw pt(404,{pathname:R})}le(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){a=Ce.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(oy(u)){let v=u.status;if(Qg.has(v)){let L=u.headers.get("Location");if(le(L,"Redirects returned/thrown from loaders/actions must have a Location header"),!ad.test(L))L=Da(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,L);else if(!l.isStaticRequest){let q=new URL(e.url),z=L.startsWith("//")?new URL(q.protocol+L):new URL(L),g=Tr(z.pathname,o)!=null;z.origin===q.origin&&g&&(L=z.pathname+z.search+z.hash)}if(l.isStaticRequest)throw u.headers.set("Location",L),u;return{type:Ce.redirect,status:v,location:L,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(l.isRouteRequest)throw{type:a||Ce.data,response:u};let T,R=u.headers.get("Content-Type");return R&&/\bapplication\/json\b/.test(R)?T=await u.json():T=await u.text(),a===Ce.error?{type:a,error:new vl(v,u.statusText,T),headers:u.headers}:{type:Ce.data,data:T,statusCode:u.status,headers:u.headers}}if(a===Ce.error)return{type:a,error:u};if(sy(u)){var d,m;return{type:Ce.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Ce.data,data:u}}function Br(t,e,n,r){let i=t.createURL(ud(e)).toString(),s={signal:n};if(r&&vt(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Oa(r.formData):s.body=r.formData}return new Request(i,s)}function Oa(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function tc(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ry(t,e,n,r,i){let s={},o=null,l,a=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(le(!rr(c),"Cannot handle redirect results in processLoaderData"),ni(c)){let m=er(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=v),s[d]=void 0,a||(a=!0,l=sd(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else An(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!a&&(l=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:u}}function nc(t,e,n,r,i,s,o,l){let{loaderData:a,errors:u}=ry(e,n,r,i,l);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:m}=s[c];le(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(m&&m.signal.aborted))if(ni(v)){let T=er(t.matches,d?.route.id);u&&u[T.route.id]||(u=we({},u,{[T.route.id]:v.error})),t.fetchers.delete(h)}else if(rr(v))le(!1,"Unhandled fetcher revalidation redirect");else if(An(v))le(!1,"Unhandled fetcher deferred data");else{let T=Rs(v.data);t.fetchers.set(h,T)}}return{loaderData:a,errors:u}}function rc(t,e,n,r){let i=we({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function er(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ic(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function pt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):t===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",l='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new vl(t||500,o,new Error(l),!0)}function sc(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(rr(n))return n}}function ud(t){let e=typeof t=="string"?Yt(t):t;return On(we({},e,{hash:""}))}function iy(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function An(t){return t.type===Ce.deferred}function ni(t){return t.type===Ce.error}function rr(t){return(t&&t.type)===Ce.redirect}function sy(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function oy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function ay(t){return Gg.has(t.toLowerCase())}function vt(t){return Wg.has(t.toLowerCase())}async function oc(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],a=e[o];if(!a)continue;let u=t.find(h=>h.route.id===a.route.id),c=u!=null&&!ld(u,a)&&(s&&s[a.route.id])!==void 0;if(An(l)&&(i||c)){let h=r[o];le(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await cd(l,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function cd(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ce.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ce.error,error:i}}return{type:Ce.data,data:t.deferredData.data}}}function El(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ly(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function ka(t,e){let n=typeof e=="string"?Yt(e).search:e.search;if(t[t.length-1].route.index&&El(n||""))return t[t.length-1];let r=uo(t);return r[r.length-1]}function ac(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function ds(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function uy(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function $r(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function cy(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Rs(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ls(){return Ls=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ls.apply(this,arguments)}const co=D.createContext(null),hd=D.createContext(null),Ir=D.createContext(null),ho=D.createContext(null),mn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),dd=D.createContext(null);function hy(t,e){let{relative:n}=e===void 0?{}:e;Li()||le(!1);let{basename:r,navigator:i}=D.useContext(Ir),{hash:s,pathname:o,search:l}=md(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Ht([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Li(){return D.useContext(ho)!=null}function fo(){return Li()||le(!1),D.useContext(ho).location}function fd(t){D.useContext(Ir).static||D.useLayoutEffect(t)}function pd(){let{isDataRoute:t}=D.useContext(mn);return t?Iy():dy()}function dy(){Li()||le(!1);let t=D.useContext(co),{basename:e,navigator:n}=D.useContext(Ir),{matches:r}=D.useContext(mn),{pathname:i}=fo(),s=JSON.stringify(uo(r).map(a=>a.pathnameBase)),o=D.useRef(!1);return fd(()=>{o.current=!0}),D.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=_l(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ht([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const fy=D.createContext(null);function py(t){let e=D.useContext(mn).outlet;return e&&D.createElement(fy.Provider,{value:t},e)}function md(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=D.useContext(mn),{pathname:i}=fo(),s=JSON.stringify(uo(r).map(o=>o.pathnameBase));return D.useMemo(()=>_l(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function my(t,e,n){Li()||le(!1);let{navigator:r}=D.useContext(Ir),{matches:i}=D.useContext(mn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=fo(),u;if(e){var c;let T=typeof e=="string"?Yt(e):e;l==="/"||(c=T.pathname)!=null&&c.startsWith(l)||le(!1),u=T}else u=a;let h=u.pathname||"/",d=l==="/"?h:h.slice(l.length)||"/",m=Zn(t,{pathname:d}),v=Ey(m&&m.map(T=>Object.assign({},T,{params:Object.assign({},o,T.params),pathname:Ht([l,r.encodeLocation?r.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:Ht([l,r.encodeLocation?r.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),i,n);return e&&v?D.createElement(ho.Provider,{value:{location:Ls({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Se.Pop}},v):v}function gy(){let t=_d(),e=sd(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const yy=D.createElement(gy,null);class _y extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?D.createElement(mn.Provider,{value:this.props.routeContext},D.createElement(dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vy(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(co);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(mn.Provider,{value:e},r)}function Ey(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&o?.[a.route.id]);l>=0||le(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o?.[a.route.id]:null,h=null;n&&(h=a.route.errorElement||yy);let d=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:a.route.Component?v=D.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,D.createElement(vy,{match:a,routeContext:{outlet:l,matches:d,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?D.createElement(_y,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var Na;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Na||(Na={}));var kn;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(kn||(kn={}));function wy(t){let e=D.useContext(co);return e||le(!1),e}function gd(t){let e=D.useContext(hd);return e||le(!1),e}function Ty(t){let e=D.useContext(mn);return e||le(!1),e}function wl(t){let e=Ty(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function yd(){let t=gd(kn.UseLoaderData),e=wl(kn.UseLoaderData);if(t.errors&&t.errors[e]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+e+")");return}return t.loaderData[e]}function _d(){var t;let e=D.useContext(dd),n=gd(kn.UseRouteError),r=wl(kn.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Iy(){let{router:t}=wy(Na.UseNavigateStable),e=wl(kn.UseNavigateStable),n=D.useRef(!1);return fd(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ls({fromRouteId:e},s)))},[t,e])}const Ry="startTransition",lc=ig[Ry];function Ay(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=D.useState(n.state),{v7_startTransition:o}=r||{},l=D.useCallback(h=>{o&&lc?lc(()=>s(h)):s(h)},[s,o]);D.useLayoutEffect(()=>n.subscribe(l),[n,l]);let a=D.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,m)=>n.navigate(h,{state:d,preventScrollReset:m?.preventScrollReset}),replace:(h,d,m)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:m?.preventScrollReset})}),[n]),u=n.basename||"/",c=D.useMemo(()=>({router:n,navigator:a,static:!1,basename:u}),[n,a,u]);return D.createElement(D.Fragment,null,D.createElement(co.Provider,{value:c},D.createElement(hd.Provider,{value:i},D.createElement(Sy,{basename:u,location:i.location,navigationType:i.historyAction,navigator:a},i.initialized?D.createElement(Py,{routes:n.routes,state:i}):e))),null)}function Py(t){let{routes:e,state:n}=t;return my(e,void 0,n)}function Tl(t){return py(t.context)}function Tn(t){le(!1)}function Sy(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Se.Pop,navigator:s,static:o=!1}=t;Li()&&le(!1);let l=e.replace(/^\/*/,"/"),a=D.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Yt(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=D.useMemo(()=>{let T=Tr(u,l);return T==null?null:{location:{pathname:T,search:c,hash:h,state:d,key:m},navigationType:i}},[l,u,c,h,d,m,i]);return v==null?null:D.createElement(Ir.Provider,{value:a},D.createElement(ho.Provider,{children:n,value:v}))}var uc;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(uc||(uc={}));new Promise(()=>{});function Ma(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Ma(r.props.children,s));return}r.type!==Tn&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ma(r.props.children,s)),n.push(o)}),n}function by(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:D.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:D.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},di.apply(this,arguments)}function Cy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Dy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Oy(t,e){return t.button===0&&(!e||e==="_self")&&!Dy(t)}const ky=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ny(t,e){return Zg({basename:e?.basename,future:di({},e?.future,{v7_prependBasename:!0}),history:Tg({window:e?.window}),hydrationData:e?.hydrationData||My(),routes:t,mapRouteProperties:by}).initialize()}function My(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=di({},e,{errors:Ly(e.errors)})),e}function Ly(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new vl(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const Vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,As=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,h=Cy(e,ky),{basename:d}=D.useContext(Ir),m,v=!1;if(typeof u=="string"&&xy.test(u)&&(m=u,Vy))try{let q=new URL(window.location.href),z=u.startsWith("//")?new URL(q.protocol+u):new URL(u),g=Tr(z.pathname,d);z.origin===q.origin&&g!=null?u=g+z.search+z.hash:v=!0}catch{}let T=hy(u,{relative:i}),R=Uy(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function L(q){r&&r(q),q.defaultPrevented||R(q)}return D.createElement("a",di({},h,{href:m||T,onClick:v||s?r:L,ref:n,target:a}))});var cc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(cc||(cc={}));var hc;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hc||(hc={}));function Uy(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=pd(),a=fo(),u=md(t,{relative:o});return D.useCallback(c=>{if(Oy(c,n)){c.preventDefault();let h=r!==void 0?r:On(a)===On(u);l(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}let Fy=0;function Il(t,e){const n=`atom${++Fy}`,r={toString:()=>n};return typeof t=="function"?r.read=t:(r.init=t,r.read=i=>i(r),r.write=(i,s,o)=>s(r,typeof o=="function"?o(i(r)):o)),e&&(r.write=e),r}const dc=t=>"init"in t,fc=t=>!!t.write,Vs=new WeakMap,jy=(t,e)=>{Vs.set(t,e),t.catch(()=>{}).finally(()=>Vs.delete(t))},pc=(t,e)=>{const n=Vs.get(t);n&&(Vs.delete(t),n(e))},mc=(t,e)=>{t.status="fulfilled",t.value=e},gc=(t,e)=>{t.status="rejected",t.reason=e},By=t=>typeof t?.then=="function",Hr=(t,e)=>"v"in t&&"v"in e&&Object.is(t.v,e.v),yc=(t,e)=>"e"in t&&"e"in e&&Object.is(t.e,e.e),Kn=t=>"v"in t&&t.v instanceof Promise,$y=(t,e)=>"v"in t&&"v"in e&&t.v.orig&&t.v.orig===e.v.orig,fs=t=>{if("e"in t)throw t.e;return t.v},Hy=()=>{const t=new WeakMap,e=new WeakMap,n=new Map;let r,i,s;const o=p=>t.get(p),l=(p,f)=>{const S=t.get(p);if(t.set(p,f),n.has(p)||n.set(p,S),S&&Kn(S)){const A="v"in f?f.v instanceof Promise?f.v:Promise.resolve(f.v):Promise.reject(f.e);pc(S.v,A)}},a=(p,f,S)=>{const A=new Map;let x=!1;S.forEach((b,j)=>{!b&&j===p&&(b=f),b&&(A.set(j,b),f.d.get(j)!==b&&(x=!0))}),(x||f.d.size!==A.size)&&(f.d=A)},u=(p,f,S)=>{const A=o(p),x={d:A?.d||new Map,v:f};if(S&&a(p,x,S),A&&Hr(A,x)&&A.d===x.d)return A;if(A&&Kn(A)&&Kn(x)&&$y(A,x)){if(A.d===x.d)return A;x.v=A.v}return l(p,x),x},c=(p,f,S,A)=>{if(By(f)){let x;const b=new Promise((j,G)=>{let $=!1;f.then(w=>{if(!$){$=!0;const C=o(p),U=u(p,b,S);mc(b,w),j(w),C?.d!==U.d&&k(p,U,C?.d)}},w=>{if(!$){$=!0;const C=o(p),U=u(p,b,S);gc(b,w),G(w),C?.d!==U.d&&k(p,U,C?.d)}}),x=w=>{$||($=!0,w.then(C=>mc(b,C),C=>gc(b,C)),j(w))}});return b.orig=f,b.status="pending",jy(b,j=>{j&&x(j),A?.()}),u(p,b,S)}return u(p,f,S)},h=(p,f,S)=>{const A=o(p),x={d:A?.d||new Map,e:f};return S&&a(p,x,S),A&&yc(A,x)&&A.d===x.d?A:(l(p,x),x)},d=p=>{const f=o(p);if(f&&(f.d.forEach(($,w)=>{w!==p&&!e.has(w)&&d(w)}),Array.from(f.d).every(([$,w])=>{const C=o($);return $===p||C===w||C&&!Kn(C)&&Hr(C,w)})))return f;const S=new Map;let A=!0;const x=$=>{if($===p){const C=o($);if(C)return S.set($,C),fs(C);if(dc($))return S.set($,void 0),$.init;throw new Error("no atom init")}const w=d($);return S.set($,w),fs(w)};let b,j;const G={get signal(){return b||(b=new AbortController),b.signal},get setSelf(){return!j&&fc(p)&&(j=(...$)=>{if(!A)return z(p,...$)}),j}};try{const $=p.read(x,G);return c(p,$,S,()=>b?.abort())}catch($){return h(p,$,S)}finally{A=!1}},m=p=>fs(d(p)),v=p=>{let f=e.get(p);return f||(f=g(p)),f},T=(p,f)=>!f.l.size&&(!f.t.size||f.t.size===1&&f.t.has(p)),R=p=>{const f=e.get(p);f&&T(p,f)&&P(p)},L=p=>{const f=new Map,S=new WeakMap,A=b=>{const j=e.get(b);j?.t.forEach(G=>{G!==b&&(f.set(G,(f.get(G)||new Set).add(b)),S.set(G,(S.get(G)||0)+1),A(G))})};A(p);const x=b=>{const j=e.get(b);j?.t.forEach(G=>{var $;if(G!==b){let w=S.get(G);if(w&&S.set(G,--w),!w){let C=!!(($=f.get(G))!=null&&$.size);if(C){const U=o(G),B=d(G);C=!U||!Hr(U,B)}C||f.forEach(U=>U.delete(G))}x(G)}})};x(p)},q=(p,...f)=>{let S=!0;const A=j=>fs(d(j)),x=(j,...G)=>{let $;if(j===p){if(!dc(j))throw new Error("atom not writable");const w=o(j),C=c(j,G[0]);(!w||!Hr(w,C))&&L(j)}else $=q(j,...G);if(!S){const w=y()}return $},b=p.write(A,x,...f);return S=!1,b},z=(p,...f)=>{const S=q(p,...f),A=y();return S},g=(p,f)=>{const S={t:new Set(f&&[f]),l:new Set};if(e.set(p,S),d(p).d.forEach((A,x)=>{const b=e.get(x);b?b.t.add(p):x!==p&&g(x,p)}),d(p),fc(p)&&p.onMount){const A=p.onMount((...x)=>z(p,...x));A&&(S.u=A)}return S},P=p=>{var f;const S=(f=e.get(p))==null?void 0:f.u;S&&S(),e.delete(p);const A=o(p);A&&(Kn(A)&&pc(A.v),A.d.forEach((x,b)=>{if(b!==p){const j=e.get(b);j&&(j.t.delete(p),T(b,j)&&P(b))}}))},k=(p,f,S)=>{const A=new Set(f.d.keys());S?.forEach((x,b)=>{if(A.has(b)){A.delete(b);return}const j=e.get(b);j&&(j.t.delete(p),T(b,j)&&P(b))}),A.forEach(x=>{const b=e.get(x);b?b.t.add(p):e.has(p)&&g(x,p)})},y=()=>{let p;for(;n.size;){const f=Array.from(n);n.clear(),f.forEach(([S,A])=>{const x=o(S);if(x){x.d!==A?.d&&k(S,x,A?.d);const b=e.get(S);b&&!(A&&!Kn(A)&&(Hr(A,x)||yc(A,x)))&&b.l.forEach(j=>j())}})}};return{get:m,set:z,sub:(p,f)=>{const S=v(p),A=y(),x=S.l;return x.add(f),()=>{x.delete(f),R(p)}}}};let Zo;const qy=()=>(Zo||(Zo=Hy()),Zo),zy=D.createContext(void 0),vd=t=>{const e=D.useContext(zy);return t?.store||e||qy()},Wy=t=>typeof t?.then=="function",Ky=sg.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)});function Gy(t,e){const n=vd(e),[[r,i,s],o]=D.useReducer(u=>{const c=n.get(t);return Object.is(u[0],c)&&u[1]===n&&u[2]===t?u:[c,n,t]},void 0,()=>[n.get(t),n,t]);let l=r;(i!==n||s!==t)&&(o(),l=n.get(t));const a=e?.delay;return D.useEffect(()=>{const u=n.sub(t,()=>{if(typeof a=="number"){setTimeout(o,a);return}o()});return o(),u},[n,t,a]),D.useDebugValue(l),Wy(l)?Ky(l):l}function Qy(t,e){const n=vd(e);return D.useCallback((...i)=>n.set(t,...i),[n,t])}function It(t,e){return[Gy(t,e),Qy(t,e)]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ed(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw new Yy;const d=s<<2|l>>4;if(r.push(d),u!==64){const m=l<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xy=function(t){const e=Ed(t);return wd.encodeByteArray(e,!0)},xs=function(t){return Xy(t).replace(/\./g,"")},Td=function(t){try{return wd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=()=>Zy().__FIREBASE_DEFAULTS__,t_=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},n_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Td(t[1]);return e&&JSON.parse(e)},Rl=()=>{try{return e_()||t_()||n_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Id=t=>{var e,n;return(n=(e=Rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},r_=t=>{const e=Id(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rd=()=>{var t;return(t=Rl())===null||t===void 0?void 0:t.config},Ad=t=>{var e;return(e=Rl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[xs(JSON.stringify(n)),xs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function o_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function a_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function l_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u_(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function h_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d_,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?f_(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,l,r)}}function f_(t,e){return t.replace(p_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p_=/\{\$([^}]+)}/g;function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_c(s)&&_c(o)){if(!Us(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _c(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Jr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function g_(t,e){const n=new y_(t,e);return n.subscribe.bind(n)}class y_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");__(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ea),i.error===void 0&&(i.error=ea),i.complete===void 0&&(i.complete=ea);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function __(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(w_(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(t){return t===In?void 0:t}function w_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const I_={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},R_=fe.INFO,A_={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},P_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Al{constructor(e){this.name=e,this._logLevel=R_,this._logHandler=P_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const S_=(t,e)=>e.some(n=>t instanceof n);let vc,Ec;function b_(){return vc||(vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C_(){return Ec||(Ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pd=new WeakMap,La=new WeakMap,Sd=new WeakMap,ta=new WeakMap,Pl=new WeakMap;function D_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pd.set(n,t)}).catch(()=>{}),Pl.set(e,t),e}function O_(t){if(La.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});La.set(t,e)}let Va={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return La.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function k_(t){Va=t(Va)}function N_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(na(this),e,...n);return Sd.set(r,e.sort?e.sort():[e]),ln(r)}:C_().includes(t)?function(...e){return t.apply(na(this),e),ln(Pd.get(this))}:function(...e){return ln(t.apply(na(this),e))}}function M_(t){return typeof t=="function"?N_(t):(t instanceof IDBTransaction&&O_(t),S_(t,b_())?new Proxy(t,Va):t)}function ln(t){if(t instanceof IDBRequest)return D_(t);if(ta.has(t))return ta.get(t);const e=M_(t);return e!==t&&(ta.set(t,e),Pl.set(e,t)),e}const na=t=>Pl.get(t);function L_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ln(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ln(o.result),a.oldVersion,a.newVersion,ln(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const V_=["get","getKey","getAll","getAllKeys","count"],x_=["put","add","delete","clear"],ra=new Map;function wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ra.get(e))return ra.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=x_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V_.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ra.set(e,s),s}k_(t=>({...t,get:(e,n,r)=>wc(e,n)||t.get(e,n,r),has:(e,n)=>!!wc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(F_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function F_(t){const e=t.getComponent();return e?.type==="VERSION"}const xa="@firebase/app",Tc="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Al("@firebase/app"),j_="@firebase/app-compat",B_="@firebase/analytics-compat",$_="@firebase/analytics",H_="@firebase/app-check-compat",q_="@firebase/app-check",z_="@firebase/auth",W_="@firebase/auth-compat",K_="@firebase/database",G_="@firebase/database-compat",Q_="@firebase/functions",J_="@firebase/functions-compat",Y_="@firebase/installations",X_="@firebase/installations-compat",Z_="@firebase/messaging",ev="@firebase/messaging-compat",tv="@firebase/performance",nv="@firebase/performance-compat",rv="@firebase/remote-config",iv="@firebase/remote-config-compat",sv="@firebase/storage",ov="@firebase/storage-compat",av="@firebase/firestore",lv="@firebase/firestore-compat",uv="firebase",cv="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="[DEFAULT]",hv={[xa]:"fire-core",[j_]:"fire-core-compat",[$_]:"fire-analytics",[B_]:"fire-analytics-compat",[q_]:"fire-app-check",[H_]:"fire-app-check-compat",[z_]:"fire-auth",[W_]:"fire-auth-compat",[K_]:"fire-rtdb",[G_]:"fire-rtdb-compat",[Q_]:"fire-fn",[J_]:"fire-fn-compat",[Y_]:"fire-iid",[X_]:"fire-iid-compat",[Z_]:"fire-fcm",[ev]:"fire-fcm-compat",[tv]:"fire-perf",[nv]:"fire-perf-compat",[rv]:"fire-rc",[iv]:"fire-rc-compat",[sv]:"fire-gcs",[ov]:"fire-gcs-compat",[av]:"fire-fst",[lv]:"fire-fst-compat","fire-js":"fire-js",[uv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,Fa=new Map;function dv(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dr(t){const e=t.name;if(Fa.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,t);for(const n of Fs.values())dv(n,t);return!0}function Sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new Vi("app","Firebase",fv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=cv;function bd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ua,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=Rd()),!n)throw un.create("no-options");const s=Fs.get(i);if(s){if(Us(n,s.options)&&Us(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new T_(i);for(const a of Fa.values())o.addComponent(a);const l=new pv(n,r,o);return Fs.set(i,l),l}function Cd(t=Ua){const e=Fs.get(t);if(!e&&t===Ua&&Rd())return bd();if(!e)throw un.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=hv[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(l.join(" "));return}dr(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="firebase-heartbeat-database",gv=1,fi="firebase-heartbeat-store";let ia=null;function Dd(){return ia||(ia=L_(mv,gv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),ia}async function yv(t){try{return await(await Dd()).transaction(fi).objectStore(fi).get(Od(t))}catch(e){if(e instanceof Xt)Mn.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e?.message});Mn.warn(n.message)}}}async function Ic(t,e){try{const r=(await Dd()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,Od(t)),await r.done}catch(n){if(n instanceof Xt)Mn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n?.message});Mn.warn(r.message)}}}function Od(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=1024,vv=30*24*60*60*1e3;class Ev{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rc(),{heartbeatsToSend:n,unsentEntries:r}=wv(this._heartbeatsCache.heartbeats),i=xs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rc(){return new Date().toISOString().substring(0,10)}function wv(t,e=_v){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ac(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ac(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?h_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ac(t){return xs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){dr(new Nn("platform-logger",e=>new U_(e),"PRIVATE")),dr(new Nn("heartbeat",e=>new Ev(e),"PRIVATE")),cn(xa,Tc,t),cn(xa,Tc,"esm2017"),cn("fire-js","")}Iv("");var Rv="firebase",Av="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(Rv,Av,"app");const Pv=()=>I.jsxs("footer",{children:[I.jsx("a",{href:"https://www.theodinproject.com",children:I.jsx("h1",{children:"The Odin Project"})}),I.jsx("a",{href:"https://www.github.com/lippiece",children:I.jsx("h1",{children:"GitHub"})})]});const Sv=localStorage.getItem("user"),bl=Il(Sv||""),Pc=localStorage.getItem("searchResults"),bv=Pc?JSON.parse(Pc):[],kd=Il(bv),Ar=Il(null);function Nd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cv=Nd,Md=new Vi("auth","Firebase",Nd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Al("@firebase/auth");function Dv(t,...e){js.logLevel<=fe.WARN&&js.warn(`Auth (${Rr}): ${t}`,...e)}function Ps(t,...e){js.logLevel<=fe.ERROR&&js.error(`Auth (${Rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw Cl(t,...e)}function kt(t,...e){return Cl(t,...e)}function Ov(t,e,n){const r=Object.assign(Object.assign({},Cv()),{[e]:n});return new Vi("auth","Firebase",r).create(e,{appName:t.name})}function Cl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Md.create(t,...e)}function Z(t,e,...n){if(!t)throw Cl(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ps(e),new Error(e)}function zt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kv(){return Sc()==="http:"||Sc()==="https:"}function Sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kv()||a_()||"connection"in navigator)?navigator.onLine:!0}function Mv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=o_()||l_()}get(){return Nv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new Ui(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,i={}){return Vd(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ld.fetch()(xd(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Vd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lv),e);try{const i=new xv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ps(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ps(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ps(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ps(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ov(t,c,u);At(t,c)}}catch(i){if(i instanceof Xt)throw i;At(t,"network-request-failed",{message:String(i)})}}async function Fi(t,e,n,r,i={}){const s=await Sr(t,e,n,r,i);return"mfaPendingCredential"in s&&At(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xd(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dl(t.config,i):`${t.config.apiScheme}://${i}`}class xv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),Vv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ps(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function Fv(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jv(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=Ol(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:ri(sa(i.auth_time)),issuedAtTime:ri(sa(i.iat)),expirationTime:ri(sa(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function sa(t){return Number(t)*1e3}function Ol(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const i=Td(n);return i?JSON.parse(i):(Ps("Failed to decode base64 JWT payload"),null)}catch(i){return Ps("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Bv(t){const e=Ol(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&$v(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $v({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pi(t,Fv(n,{idToken:r}));Z(i?.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Wv(s.providerUserInfo):[],l=zv(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!l?.length,c=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function qv(t){const e=Rt(t);await Bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wv(t){return t.map(e=>{var{providerId:n}=e,r=yl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(t,e){const n=await Vd(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xd(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ld.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Kv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ud(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jv(this,e)}reload(){return qv(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pi(this,Uv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,q=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:z,emailVerified:g,isAnonymous:P,providerData:k,stsTokenManager:y}=n;Z(z&&y,e,"internal-error");const O=mi.fromJSON(this.name,y);Z(typeof z=="string",e,"internal-error"),tn(h,e.name),tn(d,e.name),Z(typeof g=="boolean",e,"internal-error"),Z(typeof P=="boolean",e,"internal-error"),tn(m,e.name),tn(v,e.name),tn(T,e.name),tn(R,e.name),tn(L,e.name),tn(q,e.name);const p=new Cn({uid:z,auth:e,email:d,emailVerified:g,displayName:h,isAnonymous:P,photoURL:v,phoneNumber:m,tenantId:T,stsTokenManager:O,createdAt:L,lastLoginAt:q});return k&&Array.isArray(k)&&(p.providerData=k.map(f=>Object.assign({},f))),R&&(p._redirectEventId=R),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new mi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bs(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;function Bt(t){zt(t instanceof Function,"Expected a class definition");let e=bc.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fd.type="NONE";const Cc=Fd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t,e,n){return`firebase:${t}:${e}:${n}`}class ir{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ss("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ir(Bt(Cc),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bt(Cc);const o=Ss(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Cn._fromJSON(e,c);u!==s&&(l=h),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ir(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ir(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(zd(e))return"Webos";if(kl(e))return"Safari";if((e.includes("chrome/")||Bd(e))&&!e.includes("edge/"))return"Chrome";if(Hd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function jd(t=Xe()){return/firefox\//i.test(t)}function kl(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bd(t=Xe()){return/crios\//i.test(t)}function $d(t=Xe()){return/iemobile/i.test(t)}function Hd(t=Xe()){return/android/i.test(t)}function qd(t=Xe()){return/blackberry/i.test(t)}function zd(t=Xe()){return/webos/i.test(t)}function po(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gv(t=Xe()){var e;return po(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qv(){return u_()&&document.documentMode===10}function Wd(t=Xe()){return po(t)||Hd(t)||zd(t)||qd(t)||/windows phone/i.test(t)||$d(t)}function Jv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t,e=[]){let n;switch(t){case"Browser":n=Dc(Xe());break;case"Worker":n=`${Dc(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}async function Gd(t,e){return Sr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}function Oc(t){return t!==void 0&&t.enterprise!==void 0}class Qd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Jd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Yv().appendChild(r)})}function Xv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Zv="https://www.google.com/recaptcha/enterprise.js?render=",eE="recaptcha-enterprise",tE="NO_RECAPTCHA";class Yd{constructor(e){this.type=eE,this.auth=br(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Gd(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Qd(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Oc(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(tE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Oc(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Jd(Zv+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function $s(t,e,n,r=!1){const i=new Yd(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kc(this),this.idTokenSubscription=new kc(this),this.beforeStateQueue=new nE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Md,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i?._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&a?.user&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bs(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}async initializeRecaptchaConfig(){const e=await Gd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Qd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Yd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ir.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&Dv(`Error while retrieving App Check token: ${n.error}`),n?.token}}function br(t){return Rt(t)}class kc{constructor(e){this.auth=e,this.observer=null,this.addObserver=g_(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t,e){const n=Sl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Us(s,e??{}))return i;At(i,"already-initialized")}return n.initialize({options:e})}function sE(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Bt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function oE(t,e,n){const r=br(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=Xd(e),{host:o,port:l}=aE(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lE()}function Xd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aE(t){const e=Xd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nc(o)}}}function Nc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function uE(t,e){return Sr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t,e){return Fi(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t,e){return Fi(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function hE(t,e){return Fi(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Nl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await $s(e,r,"signInWithPassword");return oa(e,i)}else return oa(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await $s(e,r,"signInWithPassword");return oa(e,s)}else return Promise.reject(i)});case"emailLink":return cE(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hE(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e){return Fi(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="http://localhost";class Ln extends Nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:dE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pE(t){const e=Qr(Jr(t)).link,n=e?Qr(Jr(e)).deep_link_id:null,r=Qr(Jr(t)).deep_link_id;return(r?Qr(Jr(r)).link:null)||r||n||e||t}class Ml{constructor(e){var n,r,i,s,o,l;const a=Qr(Jr(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,h=fE((i=a.mode)!==null&&i!==void 0?i:null);Z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=pE(e);try{return new Ml(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.providerId=Cr.PROVIDER_ID}static credential(e,n){return gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ml.parseLink(n);return Z(r,"argument-error"),gi._fromEmailAndCode(e,r.code,r.tenantId)}}Cr.PROVIDER_ID="password";Cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ji{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends ji{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends ji{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e){return Fi(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=Mc(r);return new Vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mc(r);return new Vn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hs(e,n,r,i)}}function ef(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hs._fromErrorAndOperation(t,s,e,r):s})}async function mE(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await pi(t,ef(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Ol(s.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),Vn._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&At(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(t,e,n=!1){const r="signIn",i=await ef(t,r,e),s=await Vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yE(t,e){return tf(br(t),e)}async function _E(t,e,n){var r;const i=br(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await $s(i,s,"signUpPassword");o=aa(i,u)}else o=aa(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await $s(i,s,"signUpPassword");return aa(i,c)}else return Promise.reject(u)});const l=await o.catch(u=>Promise.reject(u)),a=await Vn._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(a.user),a}function vE(t,e,n){return yE(Rt(t),Cr.credential(e,n))}function EE(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function wE(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}const qs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qs,"1"),this.storage.removeItem(qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){const t=Xe();return kl(t)||po(t)}const IE=1e3,RE=10;class rf extends nf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TE()&&Jv(),this.fallbackToPolling=Wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Qv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rf.type="LOCAL";const AE=rf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends nf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sf.type="SESSION";const of=sf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await PE(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ll("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function bE(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function CE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DE(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OE(){return af()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="firebaseLocalStorageDb",kE=1,zs="firebaseLocalStorage",uf="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function go(t,e){return t.transaction([zs],e?"readwrite":"readonly").objectStore(zs)}function NE(){const t=indexedDB.deleteDatabase(lf);return new Bi(t).toPromise()}function Ba(){const t=indexedDB.open(lf,kE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zs,{keyPath:uf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zs)?e(r):(r.close(),await NE(),e(await Ba()))})})}async function Lc(t,e,n){const r=go(t,!0).put({[uf]:e,value:n});return new Bi(r).toPromise()}async function ME(t,e){const n=go(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function Vc(t,e){const n=go(t,!0).delete(e);return new Bi(n).toPromise()}const LE=800,VE=3;class cf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return af()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mo._getInstance(OE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CE(),!this.activeServiceWorker)return;this.sender=new SE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ba();return await Lc(e,qs,"1"),await Vc(e,qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ME(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=go(i,!1).getAll();return new Bi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cf.type="LOCAL";const xE=cf;new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){return e?Bt(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FE(t){return tf(t.auth,new Vl(t),t.bypassAuthState)}function jE(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),gE(n,new Vl(t),t.bypassAuthState)}async function BE(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),mE(n,new Vl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FE;case"linkViaPopup":case"linkViaRedirect":return BE;case"reauthViaPopup":case"reauthViaRedirect":return jE;default:At(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=new Ui(2e3,1e4);class tr extends hf{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$E.get())};e()}}tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="pendingRedirect",bs=new Map;class qE extends hf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bs.get(this.auth._key());if(!e){try{const r=await zE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bs.set(this.auth._key(),e)}return this.bypassAuthState||bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zE(t,e){const n=GE(e),r=KE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WE(t,e){bs.set(t._key(),e)}function KE(t){return Bt(t._redirectPersistence)}function GE(t){return Ss(HE,t.config.apiKey,t.name)}async function QE(t,e,n=!1){const r=br(t),i=UE(r,e),o=await new qE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=10*60*1e3;class YE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!df(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JE&&this.cachedEventUids.clear(),this.cachedEventUids.has(xc(e))}saveEventToCache(e){this.cachedEventUids.add(xc(e)),this.lastProcessedEventTime=Date.now()}}function xc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function df({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function XE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return df(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tw=/^https?/;async function nw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZE(t);for(const n of e)try{if(rw(n))return}catch{}At(t,"unauthorized-domain")}function rw(t){const e=ja(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tw.test(n))return!1;if(ew.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Ui(3e4,6e4);function Uc(){const t=Nt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sw(t){return new Promise((e,n)=>{var r,i,s;function o(){Uc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uc(),n(kt(t,"network-request-failed"))},timeout:iw.get()})}if(!((i=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nt().gapi)===null||s===void 0)&&s.load)o();else{const l=Xv("iframefcb");return Nt()[l]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},Jd(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Cs=null,e})}let Cs=null;function ow(t){return Cs=Cs||sw(t),Cs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=new Ui(5e3,15e3),lw="__/auth/iframe",uw="emulator/auth/iframe",cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dw(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dl(e,uw):`https://${t.config.authDomain}/${lw}`,r={apiKey:e.apiKey,appName:t.name,v:Rr},i=hw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function fw(t){const e=await ow(t),n=Nt().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:dw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),l=Nt().setTimeout(()=>{s(o)},aw.get());function a(){Nt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mw=500,gw=600,yw="_blank",_w="http://localhost";class Fc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vw(t,e,n,r=mw,i=gw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},pw),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(l=Bd(u)?yw:n),jd(u)&&(e=e||_w,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(Gv(u)&&l!=="_self")return Ew(e||"",l),new Fc(null);const h=window.open(e||"",l,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Fc(h)}function Ew(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="__/auth/handler",Tw="emulator/auth/handler",Iw=encodeURIComponent("fac");async function jc(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rr,eventId:i};if(e instanceof Zd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ji){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${Iw}=${encodeURIComponent(a)}`:"";return`${Rw(t)}?${xi(l).slice(1)}${u}`}function Rw({config:t}){return t.emulator?Dl(t,Tw):`https://${t.authDomain}/${ww}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="webStorageSupport";class Aw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=of,this._completeRedirectFn=QE,this._overrideRedirectResult=WE}async _openPopup(e,n,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jc(e,n,r,ja(),i);return vw(e,o,Ll())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jc(e,n,r,ja(),i);return bE(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fw(e),r=new YE(e);return n.register("authEvent",i=>(Z(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(la,{type:la},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[la];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wd()||kl()||po()}}const Pw=Aw;var Bc="@firebase/auth",$c="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cw(t){dr(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kd(t)},u=new rE(r,i,s,a);return sE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dr(new Nn("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new Sw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Bc,$c,bw(t)),cn(Bc,$c,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=5*60,Ow=Ad("authIdTokenMaxAge")||Dw;let Hc=null;const kw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ow)return;const i=n?.token;Hc!==i&&(Hc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nw(t=Cd()){const e=Sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iE(t,{popupRedirectResolver:Pw,persistence:[xE,AE,of]}),r=Ad("authTokenSyncURL");if(r){const s=kw(r);wE(n,s,()=>s(n.currentUser)),EE(n,o=>s(o))}const i=Id("auth");return i&&oE(n,`http://${i}`),n}Cw("Browser");const Mw=async(t,e)=>{try{const n=Nw(window.firebase),r=await vE(n,t,e);return n.currentUser.email}catch(n){if(n.code==="auth/user-not-found")try{const{user:r}=await _E(auth,t,e);return auth.currentUser.email}catch(r){return r}else return n}},yi=t=>e=>{console.error(e),t(e)},Lw=()=>{const[t,e]=It(bl),[,n]=D.useState(null),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,a]=D.useState(""),[u,c]=D.useState(!1),h=D.useCallback(()=>c(!u),[]),d=D.useCallback(()=>c(!1),[]),m=async T=>{T.preventDefault(),a("Signing in");const R=await Mw(r,s);if(R?.message)return yi(R)(n);a("Remembering credentials"),e(R),a("Signed in")},v=T=>{T.target.type==="password"?o(T.currentTarget.value):i(T.currentTarget.value),T.target.checkValidity()?a(""):a(T.target.validationMessage)};return D.useEffect(()=>{localStorage.setItem("user",t)},[t]),I.jsxs(I.Fragment,{children:[I.jsx(ci,{onClick:h,text:"Sign in",className:Pa}),I.jsx(lg,{isOpen:u,onClose:d,children:I.jsx(ug,{children:I.jsxs("form",{onSubmit:m,children:[I.jsx("p",{children:l}),I.jsx(Wu,{htmlFor:"mailInput",children:"E-Mail"}),I.jsx(Ns,{id:"mailInput",onInput:v,pattern:"[^@]+@[^@]+\\.[^@]+",minLength:10,required:!0,placeholder:"mail@domain.com"}),I.jsx(Wu,{htmlFor:"passwordInput",children:"Password"}),I.jsx(Ns,{id:"passwordInput",onInput:v,type:"password",minLength:6,required:!0}),I.jsx(ci,{type:"submit",children:"Login"})]})})})]})},Vw=()=>{const[t]=It(bl),[e,n]=D.useState(!1);return D.useEffect(()=>{n(!!t)},[t]),D.useEffect(()=>{localStorage.setItem("user",t)},[t]),I.jsxs(I.Fragment,{children:[I.jsx(wn.Heading,{children:`Hi, ${e?t:"Anonymous"}`}),!e&&I.jsx(Lw,{})]})},or={of(t){return Et(t)},empty(){return Ve},zero(){return Ve},fromNullable(t){return t==null?Ve:Et(t)},fromFalsy(t){return t?Et(t):Ve},fromPredicate(t,e){switch(arguments.length){case 1:return n=>or.fromPredicate(t,n);default:return t(e)?Et(e):Ve}},mapMaybe(t,e){switch(arguments.length){case 1:return n=>or.mapMaybe(t,n);default:return or.catMaybes(e.map(t))}},catMaybes(t){let e=[];for(const n of t)n.isJust()&&e.push(n.extract());return e},encase(t){try{return Et(t())}catch{return Ve}},isMaybe(t){return t instanceof xl||t instanceof Ul},sequence(t){let e=[];for(const n of t)if(n.isJust())e.push(n.extract());else return Ve;return Et(e)},"fantasy-land/of"(t){return this.of(t)},"fantasy-land/empty"(){return this.empty()},"fantasy-land/zero"(){return this.zero()}};class xl{constructor(e){this.__value=e,this["fantasy-land/equals"]=this.equals,this["fantasy-land/map"]=this.map,this["fantasy-land/ap"]=this.ap,this["fantasy-land/alt"]=this.alt,this["fantasy-land/chain"]=this.chain,this["fantasy-land/reduce"]=this.reduce,this["fantasy-land/extend"]=this.extend,this["fantasy-land/filter"]=this.filter}isJust(){return!0}isNothing(){return!1}inspect(){return`Just(${this.__value})`}toString(){return this.inspect()}toJSON(){const e=this.__value;return e instanceof Date?e.toJSON():e}equals(e){return this.extract()===e.extract()}map(e){return Et(e(this.__value))}ap(e){return e.isJust()?this.map(e.extract()):Ve}alt(e){return this}altLazy(e){return this}chain(e){return e(this.__value)}chainNullable(e){return or.fromNullable(e(this.__value))}join(){return this.__value}reduce(e,n){return e(n,this.__value)}extend(e){return Et(e(this))}unsafeCoerce(){return this.__value}caseOf(e){return"_"in e?e._():e.Just(this.__value)}orDefault(e){return this.__value}orDefaultLazy(e){return this.__value}toList(){return[this.__value]}mapOrDefault(e,n){return e(this.__value)}extract(){return this.__value}extractNullable(){return this.__value}toEither(e){return Tt(this.__value)}ifJust(e){return e(this.__value),this}ifNothing(e){return this}filter(e){return e(this.__value)?Et(this.__value):Ve}}xl.prototype.constructor=or;class Ul{constructor(){this["fantasy-land/equals"]=this.equals,this["fantasy-land/map"]=this.map,this["fantasy-land/ap"]=this.ap,this["fantasy-land/alt"]=this.alt,this["fantasy-land/chain"]=this.chain,this["fantasy-land/reduce"]=this.reduce,this["fantasy-land/extend"]=this.extend,this["fantasy-land/filter"]=this.filter}isJust(){return!1}isNothing(){return!0}inspect(){return"Nothing"}toString(){return this.inspect()}toJSON(){return this.__value}equals(e){return this.extract()===e.extract()}map(e){return Ve}ap(e){return Ve}alt(e){return e}altLazy(e){return e()}chain(e){return Ve}chainNullable(e){return Ve}join(){return Ve}reduce(e,n){return n}extend(e){return Ve}unsafeCoerce(){throw new Error("Maybe#unsafeCoerce was ran on a Nothing")}caseOf(e){return"_"in e?e._():e.Nothing()}orDefault(e){return e}orDefaultLazy(e){return e()}toList(){return[]}mapOrDefault(e,n){return n}extract(){}extractNullable(){return null}toEither(e){return Wt(e)}ifJust(e){return this}ifNothing(e){return e(),this}filter(e){return Ve}}Ul.prototype.constructor=or;const Et=t=>new xl(t),Ve=new Ul,Fl={of(t){return Tt(t)},lefts(t){let e=[];for(const n of t)n.isLeft()&&e.push(n.extract());return e},rights(t){let e=[];for(const n of t)n.isRight()&&e.push(n.extract());return e},encase(t){try{return Tt(t())}catch(e){return Wt(e)}},sequence(t){let e=[];for(const n of t){if(n.isLeft())return n;e.push(n.extract())}return Tt(e)},isEither(t){return t instanceof Bl||t instanceof jl},"fantasy-land/of"(t){return Fl.of(t)}};class jl{constructor(e){this.__value=e,this._="R",this["fantasy-land/bimap"]=this.bimap,this["fantasy-land/map"]=this.map,this["fantasy-land/ap"]=this.ap,this["fantasy-land/equals"]=this.equals,this["fantasy-land/chain"]=this.chain,this["fantasy-land/alt"]=this.alt,this["fantasy-land/reduce"]=this.reduce,this["fantasy-land/extend"]=this.extend}isLeft(){return!1}isRight(){return!0}toJSON(){return this.__value}inspect(){return`Right(${this.__value})`}toString(){return this.inspect()}bimap(e,n){return Tt(n(this.__value))}map(e){return Tt(e(this.__value))}mapLeft(e){return this}ap(e){return e.isRight()?this.map(e.extract()):e}equals(e){return e.isRight()?this.__value===e.extract():!1}chain(e){return e(this.__value)}chainLeft(e){return this}join(){return this.__value}alt(e){return this}altLazy(e){return this}reduce(e,n){return e(n,this.__value)}extend(e){return Tt(e(this))}unsafeCoerce(){return this.__value}caseOf(e){return"_"in e?e._():e.Right(this.__value)}leftOrDefault(e){return e}orDefault(e){return this.__value}orDefaultLazy(e){return this.__value}leftOrDefaultLazy(e){return e()}ifLeft(e){return this}ifRight(e){return e(this.__value),this}toMaybe(){return Et(this.__value)}leftToMaybe(){return Ve}extract(){return this.__value}swap(){return Wt(this.__value)}}jl.prototype.constructor=Fl;class Bl{constructor(e){this.__value=e,this._="L",this["fantasy-land/bimap"]=this.bimap,this["fantasy-land/map"]=this.map,this["fantasy-land/ap"]=this.ap,this["fantasy-land/equals"]=this.equals,this["fantasy-land/chain"]=this.chain,this["fantasy-land/alt"]=this.alt,this["fantasy-land/reduce"]=this.reduce,this["fantasy-land/extend"]=this.extend}isLeft(){return!0}isRight(){return!1}toJSON(){return this.__value}inspect(){return`Left(${JSON.stringify(this.__value)})`}toString(){return this.inspect()}bimap(e,n){return Wt(e(this.__value))}map(e){return this}mapLeft(e){return Wt(e(this.__value))}ap(e){return e.isLeft()?e:this}equals(e){return e.isLeft()?e.extract()===this.__value:!1}chain(e){return this}chainLeft(e){return e(this.__value)}join(){return this}alt(e){return e}altLazy(e){return e()}reduce(e,n){return n}extend(e){return this}unsafeCoerce(){throw this.__value instanceof Error?this.__value:new Error("Either#unsafeCoerce was ran on a Left")}caseOf(e){return"_"in e?e._():e.Left(this.__value)}leftOrDefault(e){return this.__value}orDefault(e){return e}orDefaultLazy(e){return e()}leftOrDefaultLazy(e){return this.__value}ifLeft(e){return e(this.__value),this}ifRight(e){return this}toMaybe(){return Ve}leftToMaybe(){return Et(this.__value)}extract(){return this.__value}swap(){return Tt(this.__value)}}Bl.prototype.constructor=Fl;const Wt=t=>new Bl(t),Tt=t=>new jl(t),ff=async()=>{try{const e=await(await fetch("https://piped-instances.kavin.rocks",{mode:"cors"})).json();return Tt(e.filter(n=>n.up_to_date))}catch(t){return console.error(t),Wt(t)}},xw=()=>{const[,t]=It(Ar),[,e]=It(kd),n=pd(),[r,i]=D.useState(""),[s,o]=D.useState(""),l=async()=>{if(s||!r)return;o("fetching");const a=async h=>fetch(`${h.api_url}/search?q=${r}&filter=all`).then(async d=>await d.json());(await ff()).map(async h=>await Promise.any(h.map(a))).bimap(yi(t),async h=>{const d=await h;return e(d.items),d.items}),o(""),n("/odin-invidious/main")};return I.jsx(Ns,{type:"text",value:r,placeholder:"Search",onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&l(),disabled:!!s,leftIcon:s==="fetching"?"dot":"search"})},Uw=()=>I.jsxs(wn,{className:"nav",children:[I.jsxs(wn.Group,{children:[I.jsx(As,{to:"/odin-invidious/",children:I.jsx(wn.Heading,{children:"Logos"})}),I.jsx(xw,{})]}),I.jsxs(wn.Group,{children:[I.jsx(As,{to:"/odin-invidious/main",children:I.jsx(ci,{text:"Main",large:!0,className:Pa})}),I.jsx(As,{to:"/odin-invidious/profile",children:I.jsx(ci,{text:"Profile",large:!0,className:Pa})}),I.jsx(wn.Divider,{})]}),I.jsx(wn.Group,{children:I.jsx(Vw,{})})]});const Fw={apiKey:{}.VITE_API_KEY,authDomain:"invidious-530a1.firebaseapp.com",projectId:"invidious-530a1",storageBucket:"invidious-530a1.appspot.com",messagingSenderId:"1060599399250",appId:"1:1060599399250:web:ad52deb2120f6671d5b08b"};window.firebaseApp=bd(Fw);const jw=()=>{const[t]=It(Ar),e=D.useRef(null),n=r=>{r.timeout=5e3,e.current?.show(r)};return D.useEffect(()=>{t&&n({intent:cg.DANGER,message:`Error: ${t?.message}`,icon:"error"})},[t]),I.jsxs(I.Fragment,{children:[I.jsx(Uw,{}),I.jsx("main",{children:I.jsx(D.Suspense,{fallback:I.jsx("div",{children:"Loading..."}),children:I.jsx(Tl,{})})}),I.jsx(Pv,{}),I.jsx(hg,{ref:e})]})};const Bw=()=>{const[,t]=It(Ar),e=yd().bimap(yi(t),a=>a).join(),{name:n,description:r,bannerUrl:i,verified:s,subscriberCount:o,avatarUrl:l}=e;return I.jsxs(Sa,{compact:!0,title:"Channel",className:"channel",children:[I.jsx("img",{src:i,alt:n}),I.jsxs("div",{className:"info",children:[I.jsx("img",{src:l,alt:n,className:"avatar"}),I.jsxs("div",{children:[I.jsxs("h2",{children:[n," ",s&&I.jsx("span",{children:"✓"})]}),I.jsx("p",{children:r}),I.jsxs("p",{children:[o," subscribers"]})]})]})]})};var yo={},$w=function(e){return Hw(e)&&!qw(e)};function Hw(t){return!!t&&typeof t=="object"}function qw(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Kw(t)}var zw=typeof Symbol=="function"&&Symbol.for,Ww=zw?Symbol.for("react.element"):60103;function Kw(t){return t.$$typeof===Ww}function Gw(t){return Array.isArray(t)?[]:{}}function _i(t,e){return e.clone!==!1&&e.isMergeableObject(t)?fr(Gw(t),t,e):t}function Qw(t,e,n){return t.concat(e).map(function(r){return _i(r,n)})}function Jw(t,e){if(!e.customMerge)return fr;var n=e.customMerge(t);return typeof n=="function"?n:fr}function Yw(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function qc(t){return Object.keys(t).concat(Yw(t))}function pf(t,e){try{return e in t}catch{return!1}}function Xw(t,e){return pf(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function Zw(t,e,n){var r={};return n.isMergeableObject(t)&&qc(t).forEach(function(i){r[i]=_i(t[i],n)}),qc(e).forEach(function(i){Xw(t,i)||(pf(t,i)&&n.isMergeableObject(e[i])?r[i]=Jw(i,n)(t[i],e[i],n):r[i]=_i(e[i],n))}),r}function fr(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||Qw,n.isMergeableObject=n.isMergeableObject||$w,n.cloneUnlessOtherwiseSpecified=_i;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):Zw(t,e,n):_i(e,n)}fr.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return fr(r,i,n)},{})};var eT=fr,mf=eT,zc=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function tT(t,e){return!!(t===e||zc(t)&&zc(e))}function nT(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!tT(t[n],e[n]))return!1;return!0}function rT(t,e){e===void 0&&(e=nT);var n,r=[],i,s=!1;function o(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return s&&n===this&&e(l,r)||(i=t.apply(this,l),s=!0,n=this,r=l),i}return o}const iT=Object.freeze(Object.defineProperty({__proto__:null,default:rT},Symbol.toStringTag,{value:"Module"})),sT=og(iT);var xn={};Object.defineProperty(xn,"__esModule",{value:!0});xn.defaultProps=xn.propTypes=void 0;var Zt=oT(dg);function oT(t){return t&&t.__esModule?t:{default:t}}var rt=Zt.default.string,ut=Zt.default.bool,Gn=Zt.default.number,ua=Zt.default.array,qr=Zt.default.oneOfType,ft=Zt.default.shape,it=Zt.default.object,Me=Zt.default.func,Wc=Zt.default.node,aT={url:qr([rt,ua,it]),playing:ut,loop:ut,controls:ut,volume:Gn,muted:ut,playbackRate:Gn,width:qr([rt,Gn]),height:qr([rt,Gn]),style:it,progressInterval:Gn,playsinline:ut,pip:ut,stopOnUnmount:ut,light:qr([ut,rt,it]),playIcon:Wc,previewTabIndex:Gn,fallback:Wc,oEmbedUrl:rt,wrapper:qr([rt,Me,ft({render:Me.isRequired})]),config:ft({soundcloud:ft({options:it}),youtube:ft({playerVars:it,embedOptions:it,onUnstarted:Me}),facebook:ft({appId:rt,version:rt,playerId:rt,attributes:it}),dailymotion:ft({params:it}),vimeo:ft({playerOptions:it,title:rt}),file:ft({attributes:it,tracks:ua,forceVideo:ut,forceAudio:ut,forceHLS:ut,forceSafariHLS:ut,forceDASH:ut,forceFLV:ut,hlsOptions:it,hlsVersion:rt,dashVersion:rt,flvVersion:rt}),wistia:ft({options:it,playerId:rt,customControls:ua}),mixcloud:ft({options:it}),twitch:ft({options:it,playerId:rt}),vidyard:ft({options:it})}),onReady:Me,onStart:Me,onPlay:Me,onPause:Me,onBuffer:Me,onBufferEnd:Me,onEnded:Me,onError:Me,onDuration:Me,onSeek:Me,onPlaybackRateChange:Me,onProgress:Me,onClickPreview:Me,onEnablePIP:Me,onDisablePIP:Me};xn.propTypes=aT;var He=function(){},lT={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:He},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0"},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:He,onStart:He,onPlay:He,onPause:He,onBuffer:He,onBufferEnd:He,onEnded:He,onError:He,onDuration:He,onSeek:He,onPlaybackRateChange:He,onProgress:He,onClickPreview:He,onEnablePIP:He,onDisablePIP:He};xn.defaultProps=lT;var et={},uT=function(e,n,r){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async="async"in n?!!n.async:!0,s.src=e,n.attrs&&cT(s,n.attrs),n.text&&(s.text=""+n.text);var o="onload"in s?Kc:hT;o(s,r),s.onload||Kc(s,r),i.appendChild(s)};function cT(t,e){for(var n in e)t.setAttribute(n,e[n])}function Kc(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function hT(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}Object.defineProperty(et,"__esModule",{value:!0});et.parseStartTime=IT;et.parseEndTime=RT;et.randomString=AT;et.queryString=PT;et.getSDK=ST;et.getConfig=bT;et.omit=CT;et.callPlayer=DT;et.isMediaStream=OT;et.isBlobUrl=kT;et.supportsWebKitPresentationMode=NT;var dT=gf(uT),fT=gf(mf);function gf(t){return t&&t.__esModule?t:{default:t}}function pT(t,e){return _T(t)||yT(t,e)||gT(t,e)||mT()}function mT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gT(t,e){if(t){if(typeof t=="string")return Gc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gc(t,e)}}function Gc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yT(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,i=!1,s=void 0;try{for(var o=t[Symbol.iterator](),l;!(r=(l=o.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(a){i=!0,s=a}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}}function _T(t){if(Array.isArray(t))return t}var vT=/[?&#](?:start|t)=([0-9hms]+)/,ET=/[?&#]end=([0-9hms]+)/,$a=/(\d+)(h|m|s)/g,wT=/^\d+$/;function yf(t,e){if(!(t instanceof Array)){var n=t.match(e);if(n){var r=n[1];if(r.match($a))return TT(r);if(wT.test(r))return parseInt(r)}}}function TT(t){for(var e=0,n=$a.exec(t);n!==null;){var r=n,i=pT(r,3),s=i[1],o=i[2];o==="h"&&(e+=parseInt(s,10)*60*60),o==="m"&&(e+=parseInt(s,10)*60),o==="s"&&(e+=parseInt(s,10)),n=$a.exec(t)}return e}function IT(t){return yf(t,vT)}function RT(t){return yf(t,ET)}function AT(){return Math.random().toString(36).substr(2,5)}function PT(t){return Object.keys(t).map(function(e){return"".concat(e,"=").concat(t[e])}).join("&")}function ca(t){return window[t]?window[t]:window.exports&&window.exports[t]?window.exports[t]:window.module&&window.module.exports&&window.module.exports[t]?window.module.exports[t]:null}var Qn={};function ST(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(){return!0},i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:dT.default,s=ca(e);return s&&r(s)?Promise.resolve(s):new Promise(function(o,l){if(Qn[t]){Qn[t].push({resolve:o,reject:l});return}Qn[t]=[{resolve:o,reject:l}];var a=function(h){Qn[t].forEach(function(d){return d.resolve(h)})};if(n){var u=window[n];window[n]=function(){u&&u(),a(ca(e))}}i(t,function(c){c?(Qn[t].forEach(function(h){return h.reject(c)}),Qn[t]=null):n||a(ca(e))})})}function bT(t,e){return(0,fT.default)(e.config,t.config)}function CT(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var s=(e=[]).concat.apply(e,r),o={},l=Object.keys(t),a=0,u=l;a<u.length;a++){var c=u[a];s.indexOf(c)===-1&&(o[c]=t[c])}return o}function DT(t){var e;if(!this.player||!this.player[t]){var n="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(t,"%c – ");return this.player?this.player[t]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return(e=this.player)[t].apply(e,i)}function OT(t){return typeof window<"u"&&typeof window.MediaStream<"u"&&t instanceof window.MediaStream}function kT(t){return/^blob:/.test(t)}function NT(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.createElement("video"),e=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&e}var _f={};(function(t){function e(y){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(p){return typeof p}:e=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},e(y)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(D),r=o(Zh),i=xn,s=et;function o(y){return y&&y.__esModule?y:{default:y}}function l(){if(typeof WeakMap!="function")return null;var y=new WeakMap;return l=function(){return y},y}function a(y){if(y&&y.__esModule)return y;if(y===null||e(y)!=="object"&&typeof y!="function")return{default:y};var O=l();if(O&&O.has(y))return O.get(y);var p={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in y)if(Object.prototype.hasOwnProperty.call(y,S)){var A=f?Object.getOwnPropertyDescriptor(y,S):null;A&&(A.get||A.set)?Object.defineProperty(p,S,A):p[S]=y[S]}return p.default=y,O&&O.set(y,p),p}function u(){return u=Object.assign||function(y){for(var O=1;O<arguments.length;O++){var p=arguments[O];for(var f in p)Object.prototype.hasOwnProperty.call(p,f)&&(y[f]=p[f])}return y},u.apply(this,arguments)}function c(y,O){if(!(y instanceof O))throw new TypeError("Cannot call a class as a function")}function h(y,O){for(var p=0;p<O.length;p++){var f=O[p];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(y,f.key,f)}}function d(y,O,p){return O&&h(y.prototype,O),p&&h(y,p),y}function m(y,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(O&&O.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),O&&v(y,O)}function v(y,O){return v=Object.setPrototypeOf||function(f,S){return f.__proto__=S,f},v(y,O)}function T(y){var O=q();return function(){var f=z(y),S;if(O){var A=z(this).constructor;S=Reflect.construct(f,arguments,A)}else S=f.apply(this,arguments);return R(this,S)}}function R(y,O){return O&&(e(O)==="object"||typeof O=="function")?O:L(y)}function L(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function z(y){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},z(y)}function g(y,O,p){return O in y?Object.defineProperty(y,O,{value:p,enumerable:!0,configurable:!0,writable:!0}):y[O]=p,y}var P=5e3,k=function(y){m(p,y);var O=T(p);function p(){var f;c(this,p);for(var S=arguments.length,A=new Array(S),x=0;x<S;x++)A[x]=arguments[x];return f=O.call.apply(O,[this].concat(A)),g(L(f),"mounted",!1),g(L(f),"isReady",!1),g(L(f),"isPlaying",!1),g(L(f),"isLoading",!0),g(L(f),"loadOnReady",null),g(L(f),"startOnPlay",!0),g(L(f),"seekOnPlay",null),g(L(f),"onDurationCalled",!1),g(L(f),"handlePlayerMount",function(b){if(f.player){f.progress();return}f.player=b,f.player.load(f.props.url),f.progress()}),g(L(f),"getInternalPlayer",function(b){return f.player?f.player[b]:null}),g(L(f),"progress",function(){if(f.props.url&&f.player&&f.isReady){var b=f.getCurrentTime()||0,j=f.getSecondsLoaded(),G=f.getDuration();if(G){var $={playedSeconds:b,played:b/G};j!==null&&($.loadedSeconds=j,$.loaded=j/G),($.playedSeconds!==f.prevPlayed||$.loadedSeconds!==f.prevLoaded)&&f.props.onProgress($),f.prevPlayed=$.playedSeconds,f.prevLoaded=$.loadedSeconds}}f.progressTimeout=setTimeout(f.progress,f.props.progressFrequency||f.props.progressInterval)}),g(L(f),"handleReady",function(){if(f.mounted){f.isReady=!0,f.isLoading=!1;var b=f.props,j=b.onReady,G=b.playing,$=b.volume,w=b.muted;j(),!w&&$!==null&&f.player.setVolume($),f.loadOnReady?(f.player.load(f.loadOnReady,!0),f.loadOnReady=null):G&&f.player.play(),f.handleDurationCheck()}}),g(L(f),"handlePlay",function(){f.isPlaying=!0,f.isLoading=!1;var b=f.props,j=b.onStart,G=b.onPlay,$=b.playbackRate;f.startOnPlay&&(f.player.setPlaybackRate&&$!==1&&f.player.setPlaybackRate($),j(),f.startOnPlay=!1),G(),f.seekOnPlay&&(f.seekTo(f.seekOnPlay),f.seekOnPlay=null),f.handleDurationCheck()}),g(L(f),"handlePause",function(b){f.isPlaying=!1,f.isLoading||f.props.onPause(b)}),g(L(f),"handleEnded",function(){var b=f.props,j=b.activePlayer,G=b.loop,$=b.onEnded;j.loopOnEnded&&G&&f.seekTo(0),G||(f.isPlaying=!1,$())}),g(L(f),"handleError",function(){var b;f.isLoading=!1,(b=f.props).onError.apply(b,arguments)}),g(L(f),"handleDurationCheck",function(){clearTimeout(f.durationCheckTimeout);var b=f.getDuration();b?f.onDurationCalled||(f.props.onDuration(b),f.onDurationCalled=!0):f.durationCheckTimeout=setTimeout(f.handleDurationCheck,100)}),g(L(f),"handleLoaded",function(){f.isLoading=!1}),f}return d(p,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}},{key:"componentDidUpdate",value:function(S){var A=this;if(this.player){var x=this.props,b=x.url,j=x.playing,G=x.volume,$=x.muted,w=x.playbackRate,C=x.pip,U=x.loop,B=x.activePlayer,J=x.disableDeferredLoading;if(!(0,r.default)(S.url,b)){if(this.isLoading&&!B.forceLoad&&!J&&!(0,s.isMediaStream)(b)){console.warn("ReactPlayer: the attempt to load ".concat(b," is being deferred until the player has loaded")),this.loadOnReady=b;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(b,this.isReady)}!S.playing&&j&&!this.isPlaying&&this.player.play(),S.playing&&!j&&this.isPlaying&&this.player.pause(),!S.pip&&C&&this.player.enablePIP&&this.player.enablePIP(),S.pip&&!C&&this.player.disablePIP&&this.player.disablePIP(),S.volume!==G&&G!==null&&this.player.setVolume(G),S.muted!==$&&($?this.player.mute():(this.player.unmute(),G!==null&&setTimeout(function(){return A.player.setVolume(G)}))),S.playbackRate!==w&&this.player.setPlaybackRate&&this.player.setPlaybackRate(w),S.loop!==U&&this.player.setLoop&&this.player.setLoop(U)}}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(S,A){var x=this;if(!this.isReady){S!==0&&(this.seekOnPlay=S,setTimeout(function(){x.seekOnPlay=null},P));return}var b=A?A==="fraction":S>0&&S<1;if(b){var j=this.player.getDuration();if(!j){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(j*S);return}this.player.seekTo(S)}},{key:"render",value:function(){var S=this.props.activePlayer;return S?n.default.createElement(S,u({},this.props,{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}]),p}(n.Component);t.default=k,g(k,"displayName","Player"),g(k,"propTypes",i.propTypes),g(k,"defaultProps",i.defaultProps)})(_f);var ha={},Qc;function MT(){return Qc||(Qc=1,function(t){function e(P){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(y){return typeof y}:e=function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},e(P)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(D);function r(){if(typeof WeakMap!="function")return null;var P=new WeakMap;return r=function(){return P},P}function i(P){if(P&&P.__esModule)return P;if(P===null||e(P)!=="object"&&typeof P!="function")return{default:P};var k=r();if(k&&k.has(P))return k.get(P);var y={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in P)if(Object.prototype.hasOwnProperty.call(P,p)){var f=O?Object.getOwnPropertyDescriptor(P,p):null;f&&(f.get||f.set)?Object.defineProperty(y,p,f):y[p]=P[p]}return y.default=P,k&&k.set(P,y),y}function s(P,k){var y=Object.keys(P);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(P);k&&(O=O.filter(function(p){return Object.getOwnPropertyDescriptor(P,p).enumerable})),y.push.apply(y,O)}return y}function o(P){for(var k=1;k<arguments.length;k++){var y=arguments[k]!=null?arguments[k]:{};k%2?s(Object(y),!0).forEach(function(O){L(P,O,y[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(y)):s(Object(y)).forEach(function(O){Object.defineProperty(P,O,Object.getOwnPropertyDescriptor(y,O))})}return P}function l(P,k){if(!(P instanceof k))throw new TypeError("Cannot call a class as a function")}function a(P,k){for(var y=0;y<k.length;y++){var O=k[y];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(P,O.key,O)}}function u(P,k,y){return k&&a(P.prototype,k),y&&a(P,y),P}function c(P,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(k&&k.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),k&&h(P,k)}function h(P,k){return h=Object.setPrototypeOf||function(O,p){return O.__proto__=p,O},h(P,k)}function d(P){var k=T();return function(){var O=R(P),p;if(k){var f=R(this).constructor;p=Reflect.construct(O,arguments,f)}else p=O.apply(this,arguments);return m(this,p)}}function m(P,k){return k&&(e(k)==="object"||typeof k=="function")?k:v(P)}function v(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function T(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function R(P){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)},R(P)}function L(P,k,y){return k in P?Object.defineProperty(P,k,{value:y,enumerable:!0,configurable:!0,writable:!0}):P[k]=y,P}var q="64px",z={},g=function(P){c(y,P);var k=d(y);function y(){var O;l(this,y);for(var p=arguments.length,f=new Array(p),S=0;S<p;S++)f[S]=arguments[S];return O=k.call.apply(k,[this].concat(f)),L(v(O),"mounted",!1),L(v(O),"state",{image:null}),L(v(O),"handleKeyPress",function(A){(A.key==="Enter"||A.key===" ")&&O.props.onClick()}),O}return u(y,[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function(p){var f=this.props,S=f.url,A=f.light;(p.url!==S||p.light!==A)&&this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchImage",value:function(p){var f=this,S=p.url,A=p.light,x=p.oEmbedUrl;if(!n.default.isValidElement(A)){if(typeof A=="string"){this.setState({image:A});return}if(z[S]){this.setState({image:z[S]});return}return this.setState({image:null}),window.fetch(x.replace("{url}",S)).then(function(b){return b.json()}).then(function(b){if(b.thumbnail_url&&f.mounted){var j=b.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");f.setState({image:j}),z[S]=j}})}}},{key:"render",value:function(){var p=this.props,f=p.light,S=p.onClick,A=p.playIcon,x=p.previewTabIndex,b=this.state.image,j=n.default.isValidElement(f),G={display:"flex",alignItems:"center",justifyContent:"center"},$={preview:o({width:"100%",height:"100%",backgroundImage:b&&!j?"url(".concat(b,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},G),shadow:o({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:q,width:q,height:q,position:j?"absolute":void 0},G),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},w=n.default.createElement("div",{style:$.shadow,className:"react-player__shadow"},n.default.createElement("div",{style:$.playIcon,className:"react-player__play-icon"}));return n.default.createElement("div",{style:$.preview,className:"react-player__preview",onClick:S,tabIndex:x,onKeyPress:this.handleKeyPress},j?f:null,A||w)}}]),y}(n.Component);t.default=g}(ha)),ha}Object.defineProperty(yo,"__esModule",{value:!0});yo.createReactPlayer=void 0;var Rn=Ef(D),LT=_o(mf),da=_o(sT),Jc=_o(Zh),Yr=xn,VT=et,xT=_o(_f);function _o(t){return t&&t.__esModule?t:{default:t}}function ii(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ii=function(n){return typeof n}:ii=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ii(t)}function Yc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yc(Object(n),!0).forEach(function(r){Ie(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ws(){return Ws=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ws.apply(this,arguments)}function fa(t){return BT(t)||jT(t)||FT(t)||UT()}function UT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FT(t,e){if(t){if(typeof t=="string")return Ha(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ha(t,e)}}function jT(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function BT(t){if(Array.isArray(t))return Ha(t)}function Ha(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function HT(t,e,n){return e&&Zc(t.prototype,e),n&&Zc(t,n),t}function qT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qa(t,e)}function qa(t,e){return qa=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},qa(t,e)}function zT(t){var e=KT();return function(){var r=Ks(t),i;if(e){var s=Ks(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return WT(this,i)}}function WT(t,e){return e&&(ii(e)==="object"||typeof e=="function")?e:ze(t)}function ze(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function KT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ks(t){return Ks=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ks(t)}function Ie(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vf(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return vf=function(){return t},t}function Ef(t){if(t&&t.__esModule)return t;if(t===null||ii(t)!=="object"&&typeof t!="function")return{default:t};var e=vf();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=r?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}var GT=(0,Rn.lazy)(function(){return Promise.resolve().then(function(){return Ef(MT())})}),QT=typeof window<"u"&&window.document,JT=typeof Jo<"u"&&Jo.window&&Jo.window.document,YT=Object.keys(Yr.propTypes),XT=QT||JT?Rn.Suspense:function(){return null},zr=[],ZT=function(e,n){var r,i;return i=r=function(s){qT(l,s);var o=zT(l);function l(){var a;$T(this,l);for(var u=arguments.length,c=new Array(u),h=0;h<u;h++)c[h]=arguments[h];return a=o.call.apply(o,[this].concat(c)),Ie(ze(a),"state",{showPreview:!!a.props.light}),Ie(ze(a),"references",{wrapper:function(m){a.wrapper=m},player:function(m){a.player=m}}),Ie(ze(a),"handleClickPreview",function(d){a.setState({showPreview:!1}),a.props.onClickPreview(d)}),Ie(ze(a),"showPreview",function(){a.setState({showPreview:!0})}),Ie(ze(a),"getDuration",function(){return a.player?a.player.getDuration():null}),Ie(ze(a),"getCurrentTime",function(){return a.player?a.player.getCurrentTime():null}),Ie(ze(a),"getSecondsLoaded",function(){return a.player?a.player.getSecondsLoaded():null}),Ie(ze(a),"getInternalPlayer",function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"player";return a.player?a.player.getInternalPlayer(d):null}),Ie(ze(a),"seekTo",function(d,m){if(!a.player)return null;a.player.seekTo(d,m)}),Ie(ze(a),"handleReady",function(){a.props.onReady(ze(a))}),Ie(ze(a),"getActivePlayer",(0,da.default)(function(d){for(var m=0,v=[].concat(zr,fa(e));m<v.length;m++){var T=v[m];if(T.canPlay(d))return T}return n||null})),Ie(ze(a),"getConfig",(0,da.default)(function(d,m){var v=a.props.config;return LT.default.all([Yr.defaultProps.config,Yr.defaultProps.config[m]||{},v,v[m]||{}])})),Ie(ze(a),"getAttributes",(0,da.default)(function(d){return(0,VT.omit)(a.props,YT)})),Ie(ze(a),"renderActivePlayer",function(d){if(!d)return null;var m=a.getActivePlayer(d);if(!m)return null;var v=a.getConfig(d,m.key);return Rn.default.createElement(xT.default,Ws({},a.props,{key:m.key,ref:a.references.player,config:v,activePlayer:m.lazyPlayer||m,onReady:a.handleReady}))}),a}return HT(l,[{key:"shouldComponentUpdate",value:function(u,c){return!(0,Jc.default)(this.props,u)||!(0,Jc.default)(this.state,c)}},{key:"componentDidUpdate",value:function(u){var c=this.props.light;!u.light&&c&&this.setState({showPreview:!0}),u.light&&!c&&this.setState({showPreview:!1})}},{key:"renderPreview",value:function(u){if(!u)return null;var c=this.props,h=c.light,d=c.playIcon,m=c.previewTabIndex,v=c.oEmbedUrl;return Rn.default.createElement(GT,{url:u,light:h,playIcon:d,previewTabIndex:m,oEmbedUrl:v,onClick:this.handleClickPreview})}},{key:"render",value:function(){var u=this.props,c=u.url,h=u.style,d=u.width,m=u.height,v=u.fallback,T=u.wrapper,R=this.state.showPreview,L=this.getAttributes(c),q=typeof T=="string"?this.references.wrapper:void 0;return Rn.default.createElement(T,Ws({ref:q,style:Xc(Xc({},h),{},{width:d,height:m})},L),Rn.default.createElement(XT,{fallback:v},R?this.renderPreview(c):this.renderActivePlayer(c)))}}]),l}(Rn.Component),Ie(r,"displayName","ReactPlayer"),Ie(r,"propTypes",Yr.propTypes),Ie(r,"defaultProps",Yr.defaultProps),Ie(r,"addCustomPlayer",function(s){zr.push(s)}),Ie(r,"removeCustomPlayers",function(){zr.length=0}),Ie(r,"canPlay",function(s){for(var o=0,l=[].concat(zr,fa(e));o<l.length;o++){var a=l[o];if(a.canPlay(s))return!0}return!1}),Ie(r,"canEnablePIP",function(s){for(var o=0,l=[].concat(zr,fa(e));o<l.length;o++){var a=l[o];if(a.canEnablePIP&&a.canEnablePIP(s))return!0}return!1}),i};yo.createReactPlayer=ZT;var wf={},ae={};Object.defineProperty(ae,"__esModule",{value:!0});ae.canPlay=ae.FLV_EXTENSIONS=ae.DASH_EXTENSIONS=ae.HLS_EXTENSIONS=ae.VIDEO_EXTENSIONS=ae.AUDIO_EXTENSIONS=ae.MATCH_URL_KALTURA=ae.MATCH_URL_VIDYARD=ae.MATCH_URL_MIXCLOUD=ae.MATCH_URL_DAILYMOTION=ae.MATCH_URL_TWITCH_CHANNEL=ae.MATCH_URL_TWITCH_VIDEO=ae.MATCH_URL_WISTIA=ae.MATCH_URL_STREAMABLE=ae.MATCH_URL_FACEBOOK_WATCH=ae.MATCH_URL_FACEBOOK=ae.MATCH_URL_VIMEO=ae.MATCH_URL_SOUNDCLOUD=ae.MATCH_URL_YOUTUBE=void 0;var eh=et;function eI(t,e){var n;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=tI(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,l;return{s:function(){n=t[Symbol.iterator]()},n:function(){var u=n.next();return s=u.done,u},e:function(u){o=!0,l=u},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw l}}}}function tI(t,e){if(t){if(typeof t=="string")return th(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return th(t,e)}}function th(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var za=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;ae.MATCH_URL_YOUTUBE=za;var Tf=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/;ae.MATCH_URL_SOUNDCLOUD=Tf;var If=/vimeo\.com\/(?!progressive_redirect).+/;ae.MATCH_URL_VIMEO=If;var Rf=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;ae.MATCH_URL_FACEBOOK=Rf;var Af=/^https?:\/\/fb\.watch\/.+$/;ae.MATCH_URL_FACEBOOK_WATCH=Af;var Pf=/streamable\.com\/([a-z0-9]+)$/;ae.MATCH_URL_STREAMABLE=Pf;var Sf=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;ae.MATCH_URL_WISTIA=Sf;var bf=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;ae.MATCH_URL_TWITCH_VIDEO=bf;var Cf=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;ae.MATCH_URL_TWITCH_CHANNEL=Cf;var Df=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;ae.MATCH_URL_DAILYMOTION=Df;var Of=/mixcloud\.com\/([^/]+\/[^/]+)/;ae.MATCH_URL_MIXCLOUD=Of;var kf=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;ae.MATCH_URL_VIDYARD=kf;var Nf=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;ae.MATCH_URL_KALTURA=Nf;var $l=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;ae.AUDIO_EXTENSIONS=$l;var Hl=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;ae.VIDEO_EXTENSIONS=Hl;var ql=/\.(m3u8)($|\?)/i;ae.HLS_EXTENSIONS=ql;var Mf=/\.(mpd)($|\?)/i;ae.DASH_EXTENSIONS=Mf;var Lf=/\.(flv)($|\?)/i;ae.FLV_EXTENSIONS=Lf;var nI=function t(e){if(e instanceof Array){var n=eI(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(typeof i=="string"&&t(i)||t(i.src))return!0}}catch(s){n.e(s)}finally{n.f()}return!1}return(0,eh.isMediaStream)(e)||(0,eh.isBlobUrl)(e)?!0:$l.test(e)||Hl.test(e)||ql.test(e)||Mf.test(e)||Lf.test(e)},rI={youtube:function(e){return e instanceof Array?e.every(function(n){return za.test(n)}):za.test(e)},soundcloud:function(e){return Tf.test(e)&&!$l.test(e)},vimeo:function(e){return If.test(e)&&!Hl.test(e)&&!ql.test(e)},facebook:function(e){return Rf.test(e)||Af.test(e)},streamable:function(e){return Pf.test(e)},wistia:function(e){return Sf.test(e)},twitch:function(e){return bf.test(e)||Cf.test(e)},dailymotion:function(e){return Df.test(e)},mixcloud:function(e){return Of.test(e)},vidyard:function(e){return kf.test(e)},kaltura:function(e){return Nf.test(e)},file:nI};ae.canPlay=rI;(function(t){function e(w){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(U){return typeof U}:e=function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},e(w)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(D),r=et,i=ae;function s(){if(typeof WeakMap!="function")return null;var w=new WeakMap;return s=function(){return w},w}function o(w){if(w&&w.__esModule)return w;if(w===null||e(w)!=="object"&&typeof w!="function")return{default:w};var C=s();if(C&&C.has(w))return C.get(w);var U={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var J in w)if(Object.prototype.hasOwnProperty.call(w,J)){var ke=B?Object.getOwnPropertyDescriptor(w,J):null;ke&&(ke.get||ke.set)?Object.defineProperty(U,J,ke):U[J]=w[J]}return U.default=w,C&&C.set(w,U),U}function l(w,C){var U=Object.keys(w);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(w);C&&(B=B.filter(function(J){return Object.getOwnPropertyDescriptor(w,J).enumerable})),U.push.apply(U,B)}return U}function a(w){for(var C=1;C<arguments.length;C++){var U=arguments[C]!=null?arguments[C]:{};C%2?l(Object(U),!0).forEach(function(B){p(w,B,U[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(U)):l(Object(U)).forEach(function(B){Object.defineProperty(w,B,Object.getOwnPropertyDescriptor(U,B))})}return w}function u(w,C){return v(w)||m(w,C)||h(w,C)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(w,C){if(w){if(typeof w=="string")return d(w,C);var U=Object.prototype.toString.call(w).slice(8,-1);if(U==="Object"&&w.constructor&&(U=w.constructor.name),U==="Map"||U==="Set")return Array.from(w);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return d(w,C)}}function d(w,C){(C==null||C>w.length)&&(C=w.length);for(var U=0,B=new Array(C);U<C;U++)B[U]=w[U];return B}function m(w,C){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(w)))){var U=[],B=!0,J=!1,ke=void 0;try{for(var ce=w[Symbol.iterator](),ge;!(B=(ge=ce.next()).done)&&(U.push(ge.value),!(C&&U.length===C));B=!0);}catch(tt){J=!0,ke=tt}finally{try{!B&&ce.return!=null&&ce.return()}finally{if(J)throw ke}}return U}}function v(w){if(Array.isArray(w))return w}function T(w,C){if(!(w instanceof C))throw new TypeError("Cannot call a class as a function")}function R(w,C){for(var U=0;U<C.length;U++){var B=C[U];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(w,B.key,B)}}function L(w,C,U){return C&&R(w.prototype,C),U&&R(w,U),w}function q(w,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(C&&C.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),C&&z(w,C)}function z(w,C){return z=Object.setPrototypeOf||function(B,J){return B.__proto__=J,B},z(w,C)}function g(w){var C=y();return function(){var B=O(w),J;if(C){var ke=O(this).constructor;J=Reflect.construct(B,arguments,ke)}else J=B.apply(this,arguments);return P(this,J)}}function P(w,C){return C&&(e(C)==="object"||typeof C=="function")?C:k(w)}function k(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function y(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function O(w){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(U){return U.__proto__||Object.getPrototypeOf(U)},O(w)}function p(w,C,U){return C in w?Object.defineProperty(w,C,{value:U,enumerable:!0,configurable:!0,writable:!0}):w[C]=U,w}var f="https://www.youtube.com/iframe_api",S="YT",A="onYouTubeIframeAPIReady",x=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,b=/user\/([a-zA-Z0-9_-]+)\/?/,j=/youtube-nocookie\.com/,G="https://www.youtube-nocookie.com",$=function(w){q(U,w);var C=g(U);function U(){var B;T(this,U);for(var J=arguments.length,ke=new Array(J),ce=0;ce<J;ce++)ke[ce]=arguments[ce];return B=C.call.apply(C,[this].concat(ke)),p(k(B),"callPlayer",r.callPlayer),p(k(B),"parsePlaylist",function(ge){if(ge instanceof Array)return{listType:"playlist",playlist:ge.map(B.getID).join(",")};if(x.test(ge)){var tt=ge.match(x),ot=u(tt,2),at=ot[1];return{listType:"playlist",list:at.replace(/^UC/,"UU")}}if(b.test(ge)){var _n=ge.match(b),vn=u(_n,2),xt=vn[1];return{listType:"user_uploads",list:xt}}return{}}),p(k(B),"onStateChange",function(ge){var tt=ge.data,ot=B.props,at=ot.onPlay,_n=ot.onPause,vn=ot.onBuffer,xt=ot.onBufferEnd,qn=ot.onEnded,En=ot.onReady,zn=ot.loop,_t=ot.config,Ut=_t.playerVars,en=_t.onUnstarted,nt=window[S].PlayerState,Vr=nt.UNSTARTED,St=nt.PLAYING,rs=nt.PAUSED,is=nt.BUFFERING,ss=nt.ENDED,qo=nt.CUED;if(tt===Vr&&en(),tt===St&&(at(),xt()),tt===rs&&_n(),tt===is&&vn(),tt===ss){var os=!!B.callPlayer("getPlaylist");zn&&!os&&(Ut.start?B.seekTo(Ut.start):B.play()),qn()}tt===qo&&En()}),p(k(B),"mute",function(){B.callPlayer("mute")}),p(k(B),"unmute",function(){B.callPlayer("unMute")}),p(k(B),"ref",function(ge){B.container=ge}),B}return L(U,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(J){return!J||J instanceof Array||x.test(J)?null:J.match(i.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(J,ke){var ce=this,ge=this.props,tt=ge.playing,ot=ge.muted,at=ge.playsinline,_n=ge.controls,vn=ge.loop,xt=ge.config,qn=ge.onError,En=xt.playerVars,zn=xt.embedOptions,_t=this.getID(J);if(ke){if(x.test(J)||b.test(J)||J instanceof Array){this.player.loadPlaylist(this.parsePlaylist(J));return}this.player.cueVideoById({videoId:_t,startSeconds:(0,r.parseStartTime)(J)||En.start,endSeconds:(0,r.parseEndTime)(J)||En.end});return}(0,r.getSDK)(f,S,A,function(Ut){return Ut.loaded}).then(function(Ut){ce.container&&(ce.player=new Ut.Player(ce.container,a({width:"100%",height:"100%",videoId:_t,playerVars:a(a({autoplay:tt?1:0,mute:ot?1:0,controls:_n?1:0,start:(0,r.parseStartTime)(J),end:(0,r.parseEndTime)(J),origin:window.location.origin,playsinline:at?1:0},ce.parsePlaylist(J)),En),events:{onReady:function(){vn&&ce.player.setLoop(!0),ce.props.onReady()},onPlaybackRateChange:function(nt){return ce.props.onPlaybackRateChange(nt.data)},onStateChange:ce.onStateChange,onError:function(nt){return qn(nt.data)}},host:j.test(J)?G:void 0},zn)))},qn),zn.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(J){this.callPlayer("seekTo",J),this.props.playing||this.pause()}},{key:"setVolume",value:function(J){this.callPlayer("setVolume",J*100)}},{key:"setPlaybackRate",value:function(J){this.callPlayer("setPlaybackRate",J)}},{key:"setLoop",value:function(J){this.callPlayer("setLoop",J)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var J=this.props.display,ke={width:"100%",height:"100%",display:J};return n.default.createElement("div",{style:ke},n.default.createElement("div",{ref:this.ref}))}}]),U}(n.Component);t.default=$,p($,"displayName","YouTube"),p($,"canPlay",i.canPlay.youtube)})(wf);var iI=yo.createReactPlayer,nh=wf.default,sI=iI([{key:"youtube",canPlay:nh.canPlay,lazyPlayer:nh}]);const Vf=ag(sI);var oI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,zl=zl||{},te=oI||self;function vo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $i(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aI(t){return Object.prototype.hasOwnProperty.call(t,pa)&&t[pa]||(t[pa]=++lI)}var pa="closure_uid_"+(1e9*Math.random()>>>0),lI=0;function uI(t,e,n){return t.call.apply(t.bind,arguments)}function cI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=uI:Qe=cI,Qe.apply(null,arguments)}function ms(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function gn(){this.s=this.s,this.o=this.o}var hI=0;gn.prototype.s=!1;gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),hI!=0)&&aI(this)};gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function rh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(vo(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var dI=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function vi(t){return/^[\s\xa0]*$/.test(t)}function Eo(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Ct(t){return Eo().indexOf(t)!=-1}function Kl(t){return Kl[" "](t),t}Kl[" "]=function(){};function fI(t,e){var n=sR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var pI=Ct("Opera"),pr=Ct("Trident")||Ct("MSIE"),Uf=Ct("Edge"),Wa=Uf||pr,Ff=Ct("Gecko")&&!(Eo().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),mI=Eo().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function jf(){var t=te.document;return t?t.documentMode:void 0}var Ka;e:{var ma="",ga=function(){var t=Eo();if(Ff)return/rv:([^\);]+)(\)|;)/.exec(t);if(Uf)return/Edge\/([\d\.]+)/.exec(t);if(pr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mI)return/WebKit\/(\S+)/.exec(t);if(pI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ga&&(ma=ga?ga[1]:""),pr){var ya=jf();if(ya!=null&&ya>parseFloat(ma)){Ka=String(ya);break e}}Ka=ma}var Ga;if(te.document&&pr){var ih=jf();Ga=ih||parseInt(Ka,10)||void 0}else Ga=void 0;var gI=Ga;function Ei(t,e){if(Je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ff){e:{try{Kl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ei.$.h.call(this)}}Ue(Ei,Je);var yI={2:"touch",3:"pen",4:"mouse"};Ei.prototype.h=function(){Ei.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),_I=0;function vI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++_I,this.fa=this.ia=!1}function wo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function EI(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Bf(t){const e={};for(const n in t)e[n]=t[n];return e}const sh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $f(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<sh.length;s++)n=sh[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function To(t){this.src=t,this.g={},this.h=0}To.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ja(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new vI(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Qa(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=xf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(wo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ja(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ql="closure_lm_"+(1e6*Math.random()|0),_a={};function Hf(t,e,n,r,i){if(r&&r.once)return zf(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hf(t,e[s],n,r,i);return null}return n=Xl(n),t&&t[Hi]?t.O(e,n,$i(r)?!!r.capture:!!r,i):qf(t,e,n,!1,r,i)}function qf(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=$i(i)?!!i.capture:!!i,l=Yl(t);if(l||(t[Ql]=l=new To(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=wI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Kf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wI(){function t(n){return e.call(t.src,t.listener,n)}const e=TI;return t}function zf(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zf(t,e[s],n,r,i);return null}return n=Xl(n),t&&t[Hi]?t.P(e,n,$i(r)?!!r.capture:!!r,i):qf(t,e,n,!0,r,i)}function Wf(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Wf(t,e[s],n,r,i);else r=$i(r)?!!r.capture:!!r,n=Xl(n),t&&t[Hi]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ja(s,n,r,i),-1<n&&(wo(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ja(e,n,r,i)),(n=-1<t?e[t]:null)&&Jl(n))}function Jl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Hi])Qa(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Kf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Yl(e))?(Qa(n,t),n.h==0&&(n.src=null,e[Ql]=null)):wo(t)}}}function Kf(t){return t in _a?_a[t]:_a[t]="on"+t}function TI(t,e){if(t.fa)t=!0;else{e=new Ei(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Jl(t),t=n.call(r,e)}return t}function Yl(t){return t=t[Ql],t instanceof To?t:null}var va="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(t){return typeof t=="function"?t:(t[va]||(t[va]=function(e){return t.handleEvent(e)}),t[va])}function xe(){gn.call(this),this.i=new To(this),this.S=this,this.J=null}Ue(xe,gn);xe.prototype[Hi]=!0;xe.prototype.removeEventListener=function(t,e,n,r){Wf(this,t,e,n,r)};function $e(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Je(e,t);else if(e instanceof Je)e.target=e.target||t;else{var i=e;e=new Je(r,t),$f(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=gs(o,r,!0,e)&&i}if(o=e.g=t,i=gs(o,r,!0,e)&&i,i=gs(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=gs(o,r,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wo(n[r]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function gs(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Qa(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zl=te.JSON.stringify;class II{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function RI(){var t=eu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AI{constructor(){this.h=this.g=null}add(e,n){const r=Gf.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Gf=new II(()=>new PI,t=>t.reset());class PI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SI(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function bI(t){te.setTimeout(()=>{throw t},0)}let wi,Ti=!1,eu=new AI,Qf=()=>{const t=te.Promise.resolve(void 0);wi=()=>{t.then(CI)}};var CI=()=>{for(var t;t=RI();){try{t.h.call(t.g)}catch(n){bI(n)}var e=Gf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ti=!1};function Io(t,e){xe.call(this),this.h=t||1,this.g=e||te,this.j=Qe(this.qb,this),this.l=Date.now()}Ue(Io,xe);F=Io.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$e(this,"tick"),this.ga&&(tu(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){Io.$.N.call(this),tu(this),delete this.g};function nu(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Jf(t){t.g=nu(()=>{t.g=null,t.i&&(t.i=!1,Jf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DI extends gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jf(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(t){gn.call(this),this.h=t,this.g={}}Ue(Ii,gn);var oh=[];function Yf(t,e,n,r){Array.isArray(n)||(n&&(oh[0]=n.toString()),n=oh);for(var i=0;i<n.length;i++){var s=Hf(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xf(t){Gl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jl(e)},t),t.g={}}Ii.prototype.N=function(){Ii.$.N.call(this),Xf(this)};Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ro(){this.g=!0}Ro.prototype.Ea=function(){this.g=!1};function OI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function nr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MI(t,n)+(r?" "+r:"")})}function NI(t,e){t.info(function(){return"TIMEOUT: "+e})}Ro.prototype.info=function(){};function MI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zl(n)}catch{return e}}var Bn={},ah=null;function Ao(){return ah=ah||new xe}Bn.Ta="serverreachability";function Zf(t){Je.call(this,Bn.Ta,t)}Ue(Zf,Je);function Ri(t){const e=Ao();$e(e,new Zf(e))}Bn.STAT_EVENT="statevent";function ep(t,e){Je.call(this,Bn.STAT_EVENT,t),this.stat=e}Ue(ep,Je);function st(t){const e=Ao();$e(e,new ep(e,t))}Bn.Ua="timingevent";function tp(t,e){Je.call(this,Bn.Ua,t),this.size=e}Ue(tp,Je);function qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Po={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},np={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ru(){}ru.prototype.h=null;function lh(t){return t.h||(t.h=t.i())}function rp(){}var zi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function iu(){Je.call(this,"d")}Ue(iu,Je);function su(){Je.call(this,"c")}Ue(su,Je);var Ya;function So(){}Ue(So,ru);So.prototype.g=function(){return new XMLHttpRequest};So.prototype.i=function(){return{}};Ya=new So;function Wi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ii(this),this.P=LI,t=Wa?125:void 0,this.V=new Io(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var LI=45e3,Xa={},Gs={};F=Wi.prototype;F.setTimeout=function(t){this.P=t};function Za(t,e,n){t.L=1,t.v=Co(Kt(e)),t.s=n,t.S=!0,sp(t,null)}function sp(t,e){t.G=Date.now(),Ki(t),t.A=Kt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),fp(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ip,t.g=Mp(t.l,n?e:null,!t.s),0<t.O&&(t.M=new DI(Qe(t.Pa,t,t.g),t.O)),Yf(t.U,t.g,"readystatechange",t.nb),e=t.I?Bf(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ri(),OI(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&Dt(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=Dt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Wa||this.g&&(this.h.h||this.g.ja()||dh(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ri(3):Ri(2)),bo(this);var n=this.g.da();this.ca=n;t:if(op(this)){var r=dh(this.g);t="";var i=r.length,s=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),si(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kI(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vi(l)){var u=l;break t}}u=null}if(n=u)nr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,n);else{this.i=!1,this.o=3,st(12),Pn(this),si(this);break e}}this.S?(ap(this,c,o),Wa&&this.i&&c==3&&(Yf(this.U,this.V,"tick",this.mb),this.V.start())):(nr(this.j,this.m,o,null),el(this,o)),c==4&&Pn(this),this.i&&!this.J&&(c==4?Dp(this.l,this):(this.i=!1,Ki(this)))}else nR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Pn(this),si(this)}}}catch{}finally{}};function op(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ap(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=VI(t,n),i==Gs){e==4&&(t.o=4,st(14),r=!1),nr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xa){t.o=4,st(15),nr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else nr(t.j,t.m,i,null),el(t,i);op(t)&&i!=Gs&&i!=Xa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,st(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hu(e),e.M=!0,st(11))):(nr(t.j,t.m,n,"[Invalid Chunked Response]"),Pn(t),si(t))}F.mb=function(){if(this.g){var t=Dt(this.g),e=this.g.ja();this.C<e.length&&(bo(this),ap(this,t,e),this.i&&t!=4&&Ki(this))}};function VI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gs:(n=Number(e.substring(n,r)),isNaN(n)?Xa:(r+=1,r+n>e.length?Gs:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,Pn(this)};function Ki(t){t.Y=Date.now()+t.P,lp(t,t.P)}function lp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qi(Qe(t.lb,t),e)}function bo(t){t.B&&(te.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(NI(this.j,this.A),this.L!=2&&(Ri(),st(17)),Pn(this),this.o=2,si(this)):lp(this,this.Y-t)};function si(t){t.l.H==0||t.J||Dp(t.l,t)}function Pn(t){bo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tu(t.V),Xf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function el(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||tl(n.i,t))){if(!t.K&&tl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ys(n),ko(n);else break e;cu(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=qi(Qe(n.ib,n),6e3));if(1>=gp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Sn(n,11)}else if((t.K||n.g==t)&&Ys(n),!vi(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ou(s,s.h),s.h=null))}if(r.F){const T=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,_e(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Np(r,r.J?r.pa:null,r.Y),o.K){yp(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(bo(l),Ki(l)),r.g=o}else bp(r);0<n.j.length&&No(n)}else u[0]!="stop"&&u[0]!="close"||Sn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Sn(n,7):uu(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ri(4)}catch{}}function xI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function UI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function up(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=UI(t),r=xI(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Dn){this.h=t.h,Qs(this,t.j),this.s=t.s,this.g=t.g,Js(this,t.m),this.l=t.l;var e=t.i,n=new Ai;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),uh(this,n),this.o=t.o}else t&&(e=String(t).match(cp))?(this.h=!1,Qs(this,e[1]||"",!0),this.s=Xr(e[2]||""),this.g=Xr(e[3]||"",!0),Js(this,e[4]),this.l=Xr(e[5]||"",!0),uh(this,e[6]||"",!0),this.o=Xr(e[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}Dn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zr(e,ch,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zr(e,ch,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zr(n,n.charAt(0)=="/"?$I:BI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zr(n,qI)),t.join("")};function Kt(t){return new Dn(t)}function Qs(t,e,n){t.j=n?Xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Js(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function uh(t,e,n){e instanceof Ai?(t.i=e,zI(t.i,t.h)):(n||(e=Zr(e,HI)),t.i=new Ai(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Co(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,jI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ch=/[#\/\?@]/g,BI=/[#\?:]/g,$I=/[#\?]/g,HI=/[#\?@]/g,qI=/#/g;function Ai(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yn(t){t.g||(t.g=new Map,t.h=0,t.i&&FI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Ai.prototype;F.add=function(t,e){yn(this),this.i=null,t=Dr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hp(t,e){yn(t),e=Dr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dp(t,e){return yn(t),e=Dr(t,e),t.g.has(e)}F.forEach=function(t,e){yn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){yn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){yn(this);let e=[];if(typeof t=="string")dp(this,t)&&(e=e.concat(this.g.get(Dr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return yn(this),this.i=null,t=Dr(this,t),dp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function fp(t,e,n){hp(t,e),0<n.length&&(t.i=null,t.g.set(Dr(t,e),Wl(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Dr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zI(t,e){e&&!t.j&&(yn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hp(this,r),fp(this,i,n))},t)),t.j=e}var WI=class{constructor(t,e){this.g=t,this.map=e}};function pp(t){this.l=t||KI,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KI=10;function mp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gp(t){return t.h?1:t.g?t.g.size:0}function tl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ou(t,e){t.g?t.g.add(e):t.h=e}function yp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pp.prototype.cancel=function(){if(this.i=_p(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _p(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Wl(t.i)}var GI=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function QI(){this.g=new GI}function JI(t,e,n){const r=n||"";try{up(t,function(i,s){let o=i;$i(i)&&(o=Zl(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function YI(t,e){const n=new Ro;if(te.Image){const r=new Image;r.onload=ms(ys,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ms(ys,n,r,"TestLoadImage: error",!1,e),r.onabort=ms(ys,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ms(ys,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ys(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Gi(t){this.l=t.fc||null,this.j=t.ob||!1}Ue(Gi,ru);Gi.prototype.g=function(){return new Do(this.l,this.j)};Gi.prototype.i=function(t){return function(){return t}}({});function Do(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=au,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Do,xe);var au=0;F=Do.prototype;F.open=function(t,e){if(this.readyState!=au)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pi(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=au};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vp(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vp(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qi(this):Pi(this),this.readyState==3&&vp(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,Qi(this))};F.Ya=function(t){this.g&&(this.response=t,Qi(this))};F.ka=function(){this.g&&Qi(this)};function Qi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pi(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Do.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XI=te.JSON.parse;function Ae(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ep,this.L=this.M=!1}Ue(Ae,xe);var Ep="",ZI=/^https?$/i,eR=["POST","PUT"];F=Ae.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ya.g(),this.C=this.u?lh(this.u):lh(Ya),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){hh(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=xf(eR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ip(this),0<this.B&&((this.L=tR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=nu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){hh(this,s)}};function tR(t){return pr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof zl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function hh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wp(t),Oo(t)}function wp(t){t.F||(t.F=!0,$e(t,"complete"),$e(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),Oo(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oo(this,!0)),Ae.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?Tp(this):this.kb())};F.kb=function(){Tp(this)};function Tp(t){if(t.h&&typeof zl<"u"&&(!t.C[1]||Dt(t)!=4||t.da()!=2)){if(t.v&&Dt(t)==4)nu(t.La,0,t);else if($e(t,"readystatechange"),Dt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(cp)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!ZI.test(i?i.toLowerCase():"")}n=r}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var s=2<Dt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",wp(t)}}finally{Oo(t)}}}}function Oo(t,e){if(t.g){Ip(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ip(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function Dt(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XI(e)}};function dh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ep:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function nR(t){const e={};t=(t.g&&2<=Dt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(vi(t[r]))continue;var n=SI(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}EI(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rp(t){let e="";return Gl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Wr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ap(t){this.Ga=0,this.j=[],this.l=new Ro,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wr("baseRetryDelayMs",5e3,t),this.hb=Wr("retryDelaySeedMs",1e4,t),this.eb=Wr("forwardChannelMaxRetries",2,t),this.xa=Wr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new pp(t&&t.concurrentRequestLimit),this.Ja=new QI,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=Ap.prototype;F.ra=8;F.H=1;function uu(t){if(Pp(t),t.H==3){var e=t.W++,n=Kt(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),Ji(t,n),e=new Wi(t,t.l,e),e.L=2,e.v=Co(Kt(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ki(e)}kp(t)}function ko(t){t.g&&(hu(t),t.g.cancel(),t.g=null)}function Pp(t){ko(t),t.u&&(te.clearTimeout(t.u),t.u=null),Ys(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function No(t){if(!mp(t.i)&&!t.m){t.m=!0;var e=t.Na;wi||Qf(),Ti||(wi(),Ti=!0),eu.add(e,t),t.C=0}}function rR(t,e){return gp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qi(Qe(t.Na,t,e),Op(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Wi(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Bf(s),$f(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Sp(this,i,e),n=Kt(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),Ji(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Rp(s)))+"&"+e:this.o&&lu(n,this.o,s)),ou(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,Za(i,n,null)):Za(i,n,e),this.H=2}}else this.H==3&&(t?fh(this,t):this.j.length==0||mp(this.i)||fh(this))};function fh(t,e){var n;e?n=e.m:n=t.W++;const r=Kt(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),Ji(t,r),t.o&&t.s&&lu(r,t.o,t.s),n=new Wi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Sp(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ou(t.i,n),Za(n,r,e)}function Ji(t,e){t.na&&Gl(t.na,function(n,r){_e(e,r,n)}),t.h&&up({},function(n,r){_e(e,r,n)})}function Sp(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const c=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{JI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function bp(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wi||Qf(),Ti||(wi(),Ti=!0),eu.add(e,t),t.A=0}}function cu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qi(Qe(t.Ma,t),Op(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,Cp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qi(Qe(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),ko(this),Cp(this))};function hu(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function Cp(t){t.g=new Wi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kt(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),Ji(t,e),t.o&&t.s&&lu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Co(Kt(e)),n.s=null,n.S=!0,sp(n,t)}F.ib=function(){this.v!=null&&(this.v=null,ko(this),cu(this),st(19))};function Ys(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Dp(t,e){var n=null;if(t.g==e){Ys(t),hu(t),t.g=null;var r=2}else if(tl(t.i,e))n=e.F,yp(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Ao(),$e(r,new tp(r,n)),No(t)}else bp(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&rR(t,e)||r==2&&cu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Sn(t,5);break;case 4:Sn(t,10);break;case 3:Sn(t,6);break;default:Sn(t,2)}}}function Op(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Sn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Qe(t.pb,t);n||(n=new Dn("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Qs(n,"https"),Co(n)),YI(n.toString(),r)}else st(2);t.H=0,t.h&&t.h.za(e),kp(t),Pp(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function kp(t){if(t.H=0,t.ma=[],t.h){const e=_p(t.i);(e.length!=0||t.j.length!=0)&&(rh(t.ma,e),rh(t.ma,t.j),t.i.i.length=0,Wl(t.j),t.j.length=0),t.h.ya()}}function Np(t,e,n){var r=n instanceof Dn?Kt(n):new Dn(n);if(r.g!="")e&&(r.g=e+"."+r.g),Js(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Dn(null);r&&Qs(s,r),e&&(s.g=e),i&&Js(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),Ji(t,r),r}function Mp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ae(new Gi({ob:!0})):new Ae(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function Lp(){}F=Lp.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function Xs(){if(pr&&!(10<=Number(gI)))throw Error("Environmental error: no available transport.")}Xs.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){xe.call(this),this.g=new Ap(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}Ue(ht,xe);ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;st(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Np(t,null,t.Y),No(t)};ht.prototype.close=function(){uu(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zl(t),t=n);e.j.push(new WI(e.fb++,t)),e.H==3&&No(e)};ht.prototype.N=function(){this.g.h=null,delete this.j,uu(this.g),delete this.g,ht.$.N.call(this)};function Vp(t){iu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(Vp,iu);function xp(){su.call(this),this.status=1}Ue(xp,su);function Or(t){this.g=t}Ue(Or,Lp);Or.prototype.Ba=function(){$e(this.g,"a")};Or.prototype.Aa=function(t){$e(this.g,new Vp(t))};Or.prototype.za=function(t){$e(this.g,new xp)};Or.prototype.ya=function(){$e(this.g,"b")};function iR(){this.blockSize=-1}function Pt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(Pt,iR);Pt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ea(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Pt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ea(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ea(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ea(this,r),i=0;break}}this.h=i,this.i+=e};Pt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var sR={};function du(t){return-128<=t&&128>t?fI(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Ot(t){if(isNaN(t)||!isFinite(t))return ar;if(0>t)return Be(Ot(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=nl;return new me(e,0)}function Up(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(Up(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ot(Math.pow(e,8)),r=ar,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ot(Math.pow(e,s)),r=r.R(s).add(Ot(o))):(r=r.R(n),r=r.add(Ot(o)))}return r}var nl=4294967296,ar=du(0),rl=du(1),ph=du(16777216);F=me.prototype;F.ea=function(){if(mt(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:nl+r)*e,e*=nl}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if($t(this))return"0";if(mt(this))return"-"+Be(this).toString(t);for(var e=Ot(Math.pow(t,6)),n=this,r="";;){var i=eo(n,e).g;n=Zs(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,$t(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function $t(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mt(t){return t.h==-1}F.X=function(t){return t=Zs(this,t),mt(t)?-1:$t(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(rl)}F.abs=function(){return mt(this)?Be(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Zs(t,e){return t.add(Be(e))}F.R=function(t){if($t(this)||$t(t))return ar;if(mt(this))return mt(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if(mt(t))return Be(this.R(Be(t)));if(0>this.X(ph)&&0>t.X(ph))return Ot(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(i)>>>16,a=t.D(i)&65535;n[2*r+2*i]+=o*a,_s(n,2*r+2*i),n[2*r+2*i+1]+=s*a,_s(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,_s(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,_s(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function _s(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Kr(t,e){this.g=t,this.h=e}function eo(t,e){if($t(e))throw Error("division by zero");if($t(t))return new Kr(ar,ar);if(mt(t))return e=eo(Be(t),e),new Kr(Be(e.g),Be(e.h));if(mt(e))return e=eo(t,Be(e)),new Kr(Be(e.g),e.h);if(30<t.g.length){if(mt(t)||mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=rl,r=e;0>=r.X(t);)n=mh(n),r=mh(r);var i=Jn(n,1),s=Jn(r,1);for(r=Jn(r,2),n=Jn(n,2);!$t(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Jn(r,1),n=Jn(n,1)}return e=Zs(t,i.R(e)),new Kr(i,e)}for(i=ar;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ot(n),o=s.R(e);mt(o)||0<o.X(t);)n-=r,s=Ot(n),o=s.R(e);$t(s)&&(s=rl),i=i.add(s),t=Zs(t,o)}return new Kr(i,t)}F.gb=function(t){return eo(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function mh(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Jn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new me(i,t.h)}Xs.prototype.createWebChannel=Xs.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Po.NO_ERROR=0;Po.TIMEOUT=8;Po.HTTP_ERROR=6;np.COMPLETE="complete";rp.EventType=zi;zi.OPEN="a";zi.CLOSE="b";zi.ERROR="c";zi.MESSAGE="d";xe.prototype.listen=xe.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;Pt.prototype.digest=Pt.prototype.l;Pt.prototype.reset=Pt.prototype.reset;Pt.prototype.update=Pt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Ot;me.fromString=Up;var oR=function(){return new Xs},aR=function(){return Ao()},wa=Po,lR=np,uR=Bn,gh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cR=Gi,vs=rp,hR=Ae,dR=Pt,lr=me;const yh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Al("@firebase/firestore");function _h(){return Un.logLevel}function W(t,...e){if(Un.logLevel<=fe.DEBUG){const n=e.map(fu);Un.debug(`Firestore (${kr}): ${t}`,...n)}}function Gt(t,...e){if(Un.logLevel<=fe.ERROR){const n=e.map(fu);Un.error(`Firestore (${kr}): ${t}`,...n)}}function mr(t,...e){if(Un.logLevel<=fe.WARN){const n=e.map(fu);Un.warn(`Firestore (${kr}): ${t}`,...n)}}function fu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+t;throw Gt(e),new Error(e)}function ve(t,e){t||ne()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class pR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mR{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new Fp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new We(e)}}class gR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new _R(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ER(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function gr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Oe(0,0))}static max(){return new ie(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Si?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Si{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const wR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Si{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return wR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Re.fromString(e))}static fromName(e){return new Q(Re.fromString(e).popFirst(5))}static empty(){return new Q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Re(e.slice()))}}function TR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new dn(i,Q.empty(),e)}function IR(t){return new dn(t.readTime,t.key,-1)}class dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dn(ie.min(),Q.empty(),-1)}static max(){return new dn(ie.max(),Q.empty(),-1)}}function RR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==AR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},a=>r(a))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let a=0;a<s;a++){const u=a;n(e[u]).next(c=>{o[u]=c,++l,l===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}pu.ae=-1;function Mo(t){return t==null}function to(t){return t===0&&1/t==-1/0}function SR(t){return typeof t=="number"&&Number.isInteger(t)&&!to(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Es(this.root,e,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Es(this.root,e,this.comparator,!0)}}class Es{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eh(this.data.getIterator())}getIteratorFrom(e){return new Eh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Eh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new wt([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $p("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const bR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=bR.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fn(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gu(t){const e=t.mapValue.fields.__previous_value__;return mu(e)?gu(e):e}function bi(t){const e=fn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,i,s,o,l,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class Ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ci&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mu(t)?4:DR(t)?9007199254740991:10:ne()}function Lt(t,e){if(t===e)return!0;const n=jn(t);if(n!==jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fn(i.timestampValue),l=fn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fn(i.bytesValue).isEqual(Fn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?to(o)===to(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return gr(t.arrayValue.values||[],e.arrayValue.values||[],Lt);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vh(o)!==vh(l))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(l[a]===void 0||!Lt(o[a],l[a])))return!1;return!0}(t,e);default:return ne()}}function Di(t,e){return(t.values||[]).find(n=>Lt(n,e))!==void 0}function yr(t,e){if(t===e)return 0;const n=jn(t),r=jn(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),a=be(o.integerValue||o.doubleValue);return l<a?-1:l>a?1:l===a?0:isNaN(l)?isNaN(a)?0:-1:1}(t,e);case 3:return wh(t.timestampValue,e.timestampValue);case 4:return wh(bi(t),bi(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fn(s),a=Fn(o);return l.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),a=o.split("/");for(let u=0;u<l.length&&u<a.length;u++){const c=pe(l[u],a[u]);if(c!==0)return c}return pe(l.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=pe(be(s.latitude),be(o.latitude));return l!==0?l:pe(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],a=o.values||[];for(let u=0;u<l.length&&u<a.length;++u){const c=yr(l[u],a[u]);if(c)return c}return pe(l.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ws.mapValue&&o===ws.mapValue)return 0;if(s===ws.mapValue)return 1;if(o===ws.mapValue)return-1;const l=s.fields||{},a=Object.keys(l),u=o.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const d=pe(a[h],c[h]);if(d!==0)return d;const m=yr(l[a[h]],u[c[h]]);if(m!==0)return m}return pe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ne()}}function wh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=fn(t),r=fn(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function _r(t){return il(t)}function il(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=il(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${il(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function sl(t){return!!t&&"integerValue"in t}function yu(t){return!!t&&"arrayValue"in t}function Th(t){return!!t&&"nullValue"in t}function Ih(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ds(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ds(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=oi(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ds(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ds(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Nr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(oi(this.value))}}function Hp(t){const e=[];return Nr(t.fields,(n,r)=>{const i=new Ge([n]);if(Ds(r)){const s=Hp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ke(e,0,ie.min(),ie.min(),ie.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ke(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Ke(e,2,n,ie.min(),ie.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,ie.min(),ie.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.position=e,this.inclusive=n}}function Rh(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=yr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ah(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n="asc"){this.field=e,this.dir=n}}function OR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{}class De extends qp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NR(e,n,r):n==="array-contains"?new VR(e,r):n==="in"?new xR(e,r):n==="not-in"?new UR(e,r):n==="array-contains-any"?new FR(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MR(e,r):new LR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yr(n,this.value)):n!==null&&jn(this.value)===jn(n)&&this.matchesComparison(yr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vt extends qp{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Vt(e,n)}matches(e){return zp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zp(t){return t.op==="and"}function Wp(t){return kR(t)&&zp(t)}function kR(t){for(const e of t.filters)if(e instanceof Vt)return!1;return!0}function ol(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+_r(t.value);if(Wp(t))return t.filters.map(e=>ol(e)).join(",");{const e=t.filters.map(n=>ol(n)).join(",");return`${t.op}(${e})`}}function Kp(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&Lt(r.value,i.value)}(t,e):t instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Kp(o,i.filters[l]),!0):!1}(t,e):void ne()}function Gp(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${_r(n.value)}`}(t):t instanceof Vt?function(n){return n.op.toString()+" {"+n.getFilters().map(Gp).join(" ,")+"}"}(t):"Filter"}class NR extends De{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class MR extends De{constructor(e,n){super(e,"in",n),this.keys=Qp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LR extends De{constructor(e,n){super(e,"not-in",n),this.keys=Qp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class VR extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yu(n)&&Di(n.arrayValue,this.value)}}class xR extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class UR extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Di(this.value.arrayValue,n)}}class FR extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Di(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.he=null}}function Ph(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jR(t,e,n,r,i,s,o)}function _u(t){const e=oe(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ol(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_r(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_r(r)).join(",")),e.he=n}return e.he}function vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ah(t.startAt,e.startAt)&&Ah(t.endAt,e.endAt)}function al(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function BR(t,e,n,r,i,s,o,l){return new Lo(t,e,n,r,i,s,o,l)}function Eu(t){return new Lo(t)}function Sh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $R(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function HR(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qR(t){return t.collectionGroup!==null}function ur(t){const e=oe(t);if(e.Pe===null){e.Pe=[];const n=HR(e),r=$R(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ai(n)),e.Pe.push(new ai(Ge.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ai(Ge.keyField(),s))}}}return e.Pe}function Qt(t){const e=oe(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Ph(e.path,e.collectionGroup,ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ur(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ai(s.field,o))}const r=e.endAt?new no(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new no(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ph(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function ll(t,e,n){return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vo(t,e){return vu(Qt(t),Qt(e))&&t.limitType===e.limitType}function Jp(t){return`${_u(Qt(t))}|lt:${t.limitType}`}function ul(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Gp(i)).join(", ")}]`),Mo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_r(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_r(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function xo(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ur(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,a){const u=Rh(o,l,a);return o.inclusive?u<=0:u<0}(r.startAt,ur(r),i)||r.endAt&&!function(o,l,a){const u=Rh(o,l,a);return o.inclusive?u>=0:u>0}(r.endAt,ur(r),i))}(t,e)}function zR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yp(t){return(e,n)=>{let r=!1;for(const i of ur(t)){const s=WR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const a=o.data.field(s),u=l.data.field(s);return a!==null&&u!==null?yr(a,u):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Nr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Bp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=new Te(Q.comparator);function Jt(){return KR}const Xp=new Te(Q.comparator);function ei(...t){let e=Xp;for(const n of t)e=e.insert(n.key,n);return e}function Zp(t){let e=Xp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bn(){return li()}function em(){return li()}function li(){return new Mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const GR=new Te(Q.comparator),QR=new Ye(Q.comparator);function ue(...t){let e=QR;for(const n of t)e=e.add(n);return e}const JR=new Ye(pe);function YR(){return JR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(e)?"-0":e}}function nm(t){return{integerValue:""+t}}function XR(t,e){return SR(e)?nm(e):tm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this._=void 0}}function ZR(t,e,n){return t instanceof ro?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mu(s)&&(s=gu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Oi?im(t,e):t instanceof ki?sm(t,e):function(i,s){const o=rm(i,s),l=bh(o)+bh(i.Te);return sl(o)&&sl(i.Te)?nm(l):tm(i.serializer,l)}(t,e)}function eA(t,e,n){return t instanceof Oi?im(t,e):t instanceof ki?sm(t,e):n}function rm(t,e){return t instanceof io?function(r){return sl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ro extends Uo{}class Oi extends Uo{constructor(e){super(),this.elements=e}}function im(t,e){const n=om(e);for(const r of t.elements)n.some(i=>Lt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ki extends Uo{constructor(e){super(),this.elements=e}}function sm(t,e){let n=om(e);for(const r of t.elements)n=n.filter(i=>!Lt(i,r));return{arrayValue:{values:n}}}class io extends Uo{constructor(e,n){super(),this.serializer=e,this.Te=n}}function bh(t){return be(t.integerValue||t.doubleValue)}function om(t){return yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Oi&&i instanceof Oi||r instanceof ki&&i instanceof ki?gr(r.elements,i.elements,Lt):r instanceof io&&i instanceof io?Lt(r.Te,i.Te):r instanceof ro&&i instanceof ro}(t.transform,e.transform)}class nA{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Os(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fo{}function am(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new um(t.key,qt.none()):new Zi(t.key,t.data,qt.none());{const n=t.data,r=gt.empty();let i=new Ye(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $n(t.key,r,new wt(i.toArray()),qt.none())}}function rA(t,e,n){t instanceof Zi?function(i,s,o){const l=i.value.clone(),a=Dh(i.fieldTransforms,s,o.transformResults);l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $n?function(i,s,o){if(!Os(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Dh(i.fieldTransforms,s,o.transformResults),a=s.data;a.setAll(lm(i)),a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ui(t,e,n,r){return t instanceof Zi?function(s,o,l,a){if(!Os(s.precondition,o))return l;const u=s.value.clone(),c=Oh(s.fieldTransforms,a,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof $n?function(s,o,l,a){if(!Os(s.precondition,o))return l;const u=Oh(s.fieldTransforms,a,o),c=o.data;return c.setAll(lm(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,l){return Os(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function iA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=rm(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function Ch(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gr(r,i,(s,o)=>tA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends Fo{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $n extends Fo{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dh(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,eA(o,l,n[i]))}return r}function Oh(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZR(s,o,e))}return r}class um extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sA extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=em();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const a=am(o,l);a!==null&&r.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&gr(this.mutations,e.mutations,(n,r)=>Ch(n,r))&&gr(this.baseMutations,e.baseMutations,(n,r)=>Ch(n,r))}}class wu{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return GR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wu(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,he;function uA(t){switch(t){default:return ne();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function cm(t){if(t===void 0)return Gt("GRPC error has no .code"),M.UNKNOWN;switch(t){case Pe.OK:return M.OK;case Pe.CANCELLED:return M.CANCELLED;case Pe.UNKNOWN:return M.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return M.INTERNAL;case Pe.UNAVAILABLE:return M.UNAVAILABLE;case Pe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Pe.NOT_FOUND:return M.NOT_FOUND;case Pe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Pe.ABORTED:return M.ABORTED;case Pe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Pe.DATA_LOSS:return M.DATA_LOSS;default:return ne()}}(he=Pe||(Pe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ts}static getOrCreateInstance(){return Ts===null&&(Ts=new Tu),Ts}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ts=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new lr([4294967295,4294967295],0);function kh(t){const e=cA().encode(t),n=new dR;return n.update(e),new Uint8Array(n.digest())}function Nh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new lr([n,r],0),new lr([i,s],0)]}class Iu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=lr.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(lr.fromNumber(r)));return i.compare(hA)===1&&(i=new lr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=kh(e),[r,i]=Nh(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Iu(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.de===0)return;const n=kh(e),[r,i]=Nh(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,es.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jo(ie.min(),i,new Te(pe),Jt(),ue())}}class es{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new es(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class hm{constructor(e,n){this.targetId=e,this.pe=n}}class dm{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Mh{constructor(){this.ye=0,this.we=Vh(),this.Se=Ze.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ue(),n=ue(),r=ue();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new es(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Vh()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class dA{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Jt(),this.$e=Lh(),this.Ue=new Te(pe)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const l=o.target;if(al(l))if(s===0){const a=new Q(l.path);this.ze(i,a,Ke.newNoDocument(a,ie.min()))}else ve(s===1);else{const a=this.et(i);if(a!==s){const u=this.tt(e,a);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Tu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,v){var T,R,L,q,z,g;const P={localCacheCount:m,existenceFilterCount:v.count},k=v.unchangedNames;return k&&(P.bloomFilter={applied:h===0,hashCount:(T=k?.hashCount)!==null&&T!==void 0?T:0,bitmapLength:(q=(L=(R=k?.bits)===null||R===void 0?void 0:R.bitmap)===null||L===void 0?void 0:L.length)!==null&&q!==void 0?q:0,padding:(g=(z=k?.bits)===null||z===void 0?void 0:z.padding)!==null&&g!==void 0?g:0},d&&(P.bloomFilter.mightContain=d)),P}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,a,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=r;let a,u;try{a=Fn(s).toUint8Array()}catch(h){if(h instanceof $p)return mr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Iu(a,o,l)}catch(h){return mr(h instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const l=this.Xe(o);if(l){if(s.current&&al(l.target)){const a=new Q(l.target.path);this.Ke.get(a)!==null||this.ot(o,a)||this.ze(o,a,Ke.newNoDocument(a,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ue();this.$e.forEach((s,o)=>{let l=!0;o.forEachWhile(a=>{const u=this.Xe(a);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new jo(e,n,this.Ue,this.Ke,r);return this.Ke=Jt(),this.$e=Lh(),this.Ue=new Te(pe),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Mh,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ye(pe),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Mh),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Lh(){return new Te(Q.comparator)}function Vh(){return new Te(Q.comparator)}const fA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mA=(()=>({and:"AND",or:"OR"}))();class gA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cl(t,e){return t.useProto3Json||Mo(e)?e:{value:e}}function so(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yA(t,e){return so(t,e.toTimestamp())}function Mt(t){return ve(!!t),ie.fromTimestamp(function(n){const r=fn(n);return new Oe(r.seconds,r.nanos)}(t))}function Ru(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function pm(t){const e=Re.fromString(t);return ve(_m(e)),e}function hl(t,e){return Ru(t.databaseId,e.path)}function Ta(t,e){const n=pm(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(mm(n))}function dl(t,e){return Ru(t.databaseId,e)}function _A(t){const e=pm(t);return e.length===4?Re.emptyPath():mm(e)}function fl(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xh(t,e,n){return{name:hl(t,e),fields:n.value.mapValue.fields}}function vA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ve(c===void 0||typeof c=="string"),Ze.fromBase64String(c||"")):(ve(c===void 0||c instanceof Uint8Array),Ze.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const c=u.code===void 0?M.UNKNOWN:cm(u.code);return new X(c,u.message||"")}(o);n=new dm(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ta(t,r.document.name),s=Mt(r.document.updateTime),o=r.document.createTime?Mt(r.document.createTime):ie.min(),l=new gt({mapValue:{fields:r.document.fields}}),a=Ke.newFoundDocument(i,s,o,l),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ks(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ta(t,r.document),s=r.readTime?Mt(r.readTime):ie.min(),o=Ke.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ks([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ta(t,r.document),s=r.removedTargetIds||[];n=new ks([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lA(i,s),l=r.targetId;n=new hm(l,o)}}return n}function EA(t,e){let n;if(e instanceof Zi)n={update:xh(t,e.key,e.value)};else if(e instanceof um)n={delete:hl(t,e.key)};else if(e instanceof $n)n={update:xh(t,e.key,e.data),updateMask:CA(e.fieldMask)};else{if(!(e instanceof sA))return ne();n={verify:hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ro)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof io)return{fieldPath:o.field.canonicalString(),increment:l.Te};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function wA(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Mt(i.updateTime):Mt(s);return o.isEqual(ie.min())&&(o=Mt(s)),new nA(o,i.transformResults||[])}(n,e))):[]}function TA(t,e){return{documents:[dl(t,e.path)]}}function IA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=dl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length!==0)return ym(Vt.create(a,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(h){return{field:Yn(h.field),direction:PA(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=cl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(a){return{before:a.inclusive,values:a.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(e.endAt)),n}function RA(t){let e=_A(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=gm(h);return d instanceof Vt&&Wp(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new ai(Xn(v.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let l=null;n.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,Mo(d)?null:d}(n.limit));let a=null;n.startAt&&(a=function(h){const d=!!h.before,m=h.values||[];return new no(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new no(m,d)}(n.endAt)),BR(e,i,o,s,l,"F",a,u)}function AA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xn(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xn(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xn(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xn(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Xn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vt.create(n.compositeFilter.filters.map(r=>gm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function PA(t){return fA[t]}function SA(t){return pA[t]}function bA(t){return mA[t]}function Yn(t){return{fieldPath:t.canonicalString()}}function Xn(t){return Ge.fromServerFormat(t.fieldPath)}function ym(t){return t instanceof De?function(n){if(n.op==="=="){if(Ih(n.value))return{unaryFilter:{field:Yn(n.field),op:"IS_NAN"}};if(Th(n.value))return{unaryFilter:{field:Yn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ih(n.value))return{unaryFilter:{field:Yn(n.field),op:"IS_NOT_NAN"}};if(Th(n.value))return{unaryFilter:{field:Yn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(n.field),op:SA(n.op),value:n.value}}}(t):t instanceof Vt?function(n){const r=n.getFilters().map(i=>ym(i));return r.length===1?r[0]:{compositeFilter:{op:bA(n.op),filters:r}}}(t):ne()}function CA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _m(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,r,i,s=ie.min(),o=ie.min(),l=Ze.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=a}withSequenceNumber(e){return new an(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.ct=e}}function OA(t){const e=RA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ll(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.sn=new NA}addToCollectionParentIndex(e,n){return this.sn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(dn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class NA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new vr(0)}static On(){return new vr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.changes=new Mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ui(r.mutation,i,wt.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=bn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ei();return s.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Jt();const o=li(),l=function(){return li()}();return n.forEach((a,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof $n)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ui(c.mutation,u,c.mutation.getFieldMask(),Oe.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(a=>(a.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return l.set(u,new LA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(e,n){const r=li();let i=new Te((o,l)=>o-l),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(a=>{const u=n.get(a);if(u===null)return;let c=r.get(a)||wt.empty();c=l.applyToLocalView(u,c),r.set(a,c);const h=(i.get(l.batchId)||ue()).add(a);i=i.insert(l.batchId,h)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),u=a.key,c=a.value,h=em();c.forEach(d=>{if(!s.has(d)){const m=am(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return Q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(bn());let l=-1,a=s;return o.next(u=>V.forEach(u,(c,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),s.get(c)?V.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{a=a.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,a,u,ue())).next(c=>({batchId:l,changes:Zp(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=ei();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ei();return this.indexManager.getCollectionParents(e,i).next(o=>V.forEach(o,l=>{const a=function(c,h){return new Lo(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((l,a)=>{const u=a.getKey();s.get(u)===null&&(s=s.insert(u,Ke.newInvalidDocument(u)))});let o=ei();return s.forEach((l,a)=>{const u=i.get(l);u!==void 0&&ui(u.mutation,a,wt.empty(),Oe.now()),xo(n,a)&&(o=o.insert(l,a))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return V.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mt(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:OA(i.bundledQuery),readTime:Mt(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.overlays=new Te(Q.comparator),this.cr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bn();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=bn(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,u=a.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&a.largestBatchId>r&&i.set(a.getKey(),a)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=bn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const l=bn(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,c)=>l.set(u,c)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aA(n,r));let s=this.cr.get(n);s===void 0&&(s=ue(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.lr=new Ye(Le.hr),this.Pr=new Ye(Le.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Le(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new Q(new Re([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new Q(new Re([])),r=new Le(n,e),i=new Le(n,e+1);let s=ue();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return Q.comparator(e.key,n.key)||pe(e.mr,n.mr)}static Ir(e,n){return pe(e.mr,n.mr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Ye(Le.hr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.pr=this.pr.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const l=this.yr(o.mr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(pe);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],l=>{r=r.add(l.mr)})}),V.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Le(new Q(s),0);let l=new Ye(pe);return this.pr.forEachWhile(a=>{const u=a.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(a.mr)),!0)},o),V.resolve(this.Sr(l))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return V.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Le(n,0),i=this.pr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.Dr=e,this.docs=function(){return new Te(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=Jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ke.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jt();const o=n.path,l=new Q(o.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:u,value:{document:c}}=a.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||RR(IR(c),r)<=0||(i.has(c.key)||xo(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}vr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BA(this)}getSize(e){return V.resolve(this.size)}}class BA extends MA{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.persistence=e,this.Cr=new Mr(n=>_u(n),vu),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Au,this.targetCount=0,this.Or=vr.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),V.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new vr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Ln(n),V.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.Nr={},this.overlays={},this.Br=new pu(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new $A(this),this.indexManager=new kA,this.remoteDocumentCache=function(i){return new jA(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new DA(n),this.Qr=new xA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new FA(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new qA(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return V.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class qA extends PR{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.Wr=new Au,this.Gr=null}static zr(e){return new Pu(e)}get jr(){if(this.Gr)return this.Gr;throw ne()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.jr,r=>{const i=Q.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return V.or([()=>V.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Su(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(Sh(n))return V.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ll(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ki.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(a=>{const u=this.Gi(n,l);return this.zi(n,u,o,a.readTime)?this.$i(e,ll(n,null,"F")):this.ji(e,u,n,a)}))})))}Ui(e,n,r,i){return Sh(n)||i.isEqual(ie.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(_h()<=fe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ul(n)),this.ji(e,o,n,TR(i,-1)))})}Gi(e,n){let r=new Ye(Yp(e));return n.forEach((i,s)=>{xo(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return _h()<=fe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ul(n)),this.Ki.getDocumentsMatchingQuery(e,n,dn.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Te(pe),this.Yi=new Mr(s=>_u(s),vu),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VA(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function KA(t,e,n,r){return new WA(t,e,n,r)}async function vm(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let a=ue();for(const u of i){o.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}for(const u of s){l.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}return n.localDocuments.getDocuments(r,a).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function GA(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(l,a,u,c){const h=u.batch,d=h.keys();let m=V.resolve();return d.forEach(v=>{m=m.next(()=>c.getEntry(a,v)).next(T=>{const R=u.docVersions.get(v);ve(R!==null),T.version.compareTo(R)<0&&(h.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),c.addEntry(T)))})}),m.next(()=>l.mutationQueue.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let a=ue();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(a=a.add(l.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Em(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function QA(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const l=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;l.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ze.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(T,R,L){return T.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(d,m,c)&&l.push(n.kr.updateTargetData(s,m))});let a=Jt(),u=ue();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),l.push(JA(s,o,e.documentUpdates).next(c=>{a=c.ns,u=c.rs})),!r.isEqual(ie.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(c)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,a,u)).next(()=>a)}).then(s=>(n.Ji=i,s))}function JA(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jt();return n.forEach((l,a)=>{const u=s.get(l);a.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),a.isNoDocument()&&a.version.isEqual(ie.min())?(e.removeEntry(l,a.readTime),o=o.insert(l,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),o=o.insert(l,a)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",a.version)}),{ns:o,rs:i}})}function YA(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XA(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new an(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function pl(t,e,n){const r=oe(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xi(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Uh(t,e,n){const r=oe(t);let i=ie.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=oe(a),d=h.Yi.get(c);return d!==void 0?V.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,Qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,l.targetId).next(a=>{s=a})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:ue())).next(l=>(ZA(r,zR(e),l),{documents:l,ss:s})))}function ZA(t,e,n){let r=t.Zi.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class Fh{constructor(){this.activeTargetIds=YR()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class e0{constructor(){this.Hs=new Fh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Fh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is=null;function Ia(){return Is===null?Is=function(){return 268435456+Math.round(2147483648*Math.random())}():Is++,"0x"+Is.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class i0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,i,s,o){const l=Ia(),a=this.Vo(n,r);W("RestConnection",`Sending RPC '${n}' ${l}:`,a,i);const u={};return this.mo(u,s,o),this.fo(n,a,u,i).then(c=>(W("RestConnection",`Received RPC '${n}' ${l}: `,c),c),c=>{throw mr("RestConnection",`RPC '${n}' ${l} failed with error: `,c,"url: ",a,"request:",i),c})}po(n,r,i,s,o,l){return this.Ro(n,r,i,s,o)}mo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Vo(n,r){const i=n0[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,n,r,i){const s=Ia();return new Promise((o,l)=>{const a=new hR;a.setWithCredentials(!0),a.listenOnce(lR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case wa.NO_ERROR:const c=a.getResponseJson();W(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case wa.TIMEOUT:W(qe,`RPC '${e}' ${s} timed out`),l(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case wa.HTTP_ERROR:const h=a.getStatus();if(W(qe,`RPC '${e}' ${s} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d?.error;if(m&&m.status&&m.message){const v=function(R){const L=R.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(L)>=0?L:M.UNKNOWN}(m.status);l(new X(v,m.message))}else l(new X(M.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new X(M.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{W(qe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);W(qe,`RPC '${e}' ${s} sending request:`,i),a.send(n,"POST",u,r,15)})}yo(e,n,r){const i=Ia(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oR(),l=aR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new cR({})),this.mo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");W(qe,`Creating RPC '${e}' stream ${i}: ${c}`,a);const h=o.createWebChannel(c,a);let d=!1,m=!1;const v=new r0({so:R=>{m?W(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(d||(W(qe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),W(qe,`RPC '${e}' stream ${i} sending:`,R),h.send(R))},oo:()=>h.close()}),T=(R,L,q)=>{R.listen(L,z=>{try{q(z)}catch(g){setTimeout(()=>{throw g},0)}})};return T(h,vs.EventType.OPEN,()=>{m||W(qe,`RPC '${e}' stream ${i} transport opened.`)}),T(h,vs.EventType.CLOSE,()=>{m||(m=!0,W(qe,`RPC '${e}' stream ${i} transport closed`),v.Po())}),T(h,vs.EventType.ERROR,R=>{m||(m=!0,mr(qe,`RPC '${e}' stream ${i} transport errored:`,R),v.Po(new X(M.UNAVAILABLE,"The operation could not be completed")))}),T(h,vs.EventType.MESSAGE,R=>{var L;if(!m){const q=R.data[0];ve(!!q);const z=q,g=z.error||((L=z[0])===null||L===void 0?void 0:L.error);if(g){W(qe,`RPC '${e}' stream ${i} received error:`,g);const P=g.status;let k=function(p){const f=Pe[p];if(f!==void 0)return cm(f)}(P),y=g.message;k===void 0&&(k=M.INTERNAL,y="Unknown error status: "+P+" with message "+g.message),m=!0,v.Po(new X(k,y)),h.close()}else W(qe,`RPC '${e}' stream ${i} received:`,q),v.Io(q)}}),T(l,uR.STAT_EVENT,R=>{R.stat===gh.PROXY?W(qe,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===gh.NOPROXY&&W(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function Ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){return new gA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,i,s,o,l,a){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new wm(e,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Gt(n.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===n&&this.Xo(r,i)},r=>{e(()=>{const i=new X(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,n){const r=this.Zo(this.Lo);this.stream=this.t_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return n=>{this.ii.enqueueAndForget(()=>this.Lo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s0 extends Tm{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}t_(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.Qo.reset();const n=vA(this.serializer,e),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Mt(o.readTime):ie.min()}(e);return this.listener.n_(n,r)}r_(e){const n={};n.database=fl(this.serializer),n.addTarget=function(s,o){let l;const a=o.target;if(l=al(a)?{documents:TA(s,a)}:{query:IA(s,a)},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fm(s,o.resumeToken);const u=cl(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ie.min())>0){l.readTime=so(s,o.snapshotVersion.toTimestamp());const u=cl(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=AA(this.serializer,e);r&&(n.labels=r),this.jo(n)}i_(e){const n={};n.database=fl(this.serializer),n.removeTarget=e,this.jo(n)}}class o0 extends Tm{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const n=wA(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.a_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=fl(this.serializer),this.jo(e)}__(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>EA(this.serializer,r))};this.jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(M.UNKNOWN,i.toString())})}po(e,n,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(M.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class l0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(Gt(n),this.E_=!1):W("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{Hn(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=oe(a);u.p_.add(4),await ts(u),u.S_.set("Unknown"),u.p_.delete(4),await $o(u)}(this))})}),this.S_=new l0(r,i)}}async function $o(t){if(Hn(t))for(const e of t.y_)await e(!0)}async function ts(t){for(const e of t.y_)await e(!1)}function Im(t,e){const n=oe(t);n.g_.has(e.targetId)||(n.g_.set(e.targetId,e),Du(n)?Cu(n):Lr(n).$o()&&bu(n,e))}function Rm(t,e){const n=oe(t),r=Lr(n);n.g_.delete(e),r.$o()&&Am(n,e),n.g_.size===0&&(r.$o()?r.Go():Hn(n)&&n.S_.set("Unknown"))}function bu(t,e){if(t.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Lr(t).r_(e)}function Am(t,e){t.b_.Be(e),Lr(t).i_(e)}function Cu(t){t.b_=new dA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.g_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Lr(t).start(),t.S_.d_()}function Du(t){return Hn(t)&&!Lr(t).Ko()&&t.g_.size>0}function Hn(t){return oe(t).p_.size===0}function Pm(t){t.b_=void 0}async function c0(t){t.g_.forEach((e,n)=>{bu(t,e)})}async function h0(t,e){Pm(t),Du(t)?(t.S_.V_(e),Cu(t)):t.S_.set("Unknown")}async function d0(t,e,n){if(t.S_.set("Online"),e instanceof dm&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.g_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.g_.delete(l),i.b_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oo(t,r)}else if(e instanceof ks?t.b_.We(e):e instanceof hm?t.b_.Ze(e):t.b_.je(e),!n.isEqual(ie.min()))try{const r=await Em(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.b_.st(o);return l.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.g_.get(u);c&&s.g_.set(u,c.withResumeToken(a.resumeToken,o))}}),l.targetMismatches.forEach((a,u)=>{const c=s.g_.get(a);if(!c)return;s.g_.set(a,c.withResumeToken(Ze.EMPTY_BYTE_STRING,c.snapshotVersion)),Am(s,a);const h=new an(c.target,a,u,c.sequenceNumber);bu(s,h)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await oo(t,r)}}async function oo(t,e,n){if(!Xi(e))throw e;t.p_.add(1),await ts(t),t.S_.set("Offline"),n||(n=()=>Em(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.p_.delete(1),await $o(t)})}function Sm(t,e){return e().catch(n=>oo(t,n,e))}async function Ho(t){const e=oe(t),n=pn(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;f0(e);)try{const i=await YA(e.localStore,r);if(i===null){e.f_.length===0&&n.Go();break}r=i.batchId,p0(e,i)}catch(i){await oo(e,i)}bm(e)&&Cm(e)}function f0(t){return Hn(t)&&t.f_.length<10}function p0(t,e){t.f_.push(e);const n=pn(t);n.$o()&&n.o_&&n.__(e.mutations)}function bm(t){return Hn(t)&&!pn(t).Ko()&&t.f_.length>0}function Cm(t){pn(t).start()}async function m0(t){pn(t).c_()}async function g0(t){const e=pn(t);for(const n of t.f_)e.__(n.mutations)}async function y0(t,e,n){const r=t.f_.shift(),i=wu.from(r,e,n);await Sm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ho(t)}async function _0(t,e){e&&pn(t).o_&&await async function(r,i){if(function(o){return uA(o)&&o!==M.ABORTED}(i.code)){const s=r.f_.shift();pn(r).Wo(),await Sm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ho(r)}}(t,e),bm(t)&&Cm(t)}async function Bh(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Hn(n);n.p_.add(3),await ts(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.p_.delete(3),await $o(n)}async function v0(t,e){const n=oe(t);e?(n.p_.delete(2),await $o(n)):e||(n.p_.add(2),await ts(n),n.S_.set("Unknown"))}function Lr(t){return t.D_||(t.D_=function(n,r,i){const s=oe(n);return s.h_(),new s0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:c0.bind(null,t),uo:h0.bind(null,t),n_:d0.bind(null,t)}),t.y_.push(async e=>{e?(t.D_.Wo(),Du(t)?Cu(t):t.S_.set("Unknown")):(await t.D_.stop(),Pm(t))})),t.D_}function pn(t){return t.v_||(t.v_=function(n,r,i){const s=oe(n);return s.h_(),new o0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:m0.bind(null,t),uo:_0.bind(null,t),u_:g0.bind(null,t),a_:y0.bind(null,t)}),t.y_.push(async e=>{e?(t.v_.Wo(),await Ho(t)):(await t.v_.stop(),t.f_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.f_.length} pending writes`),t.f_=[]))})),t.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ou(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ku(t,e){if(Gt("AsyncQueue",`${e}: ${t}`),Xi(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ei(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new cr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.C_=new Te(Q.comparator)}track(e){const n=e.doc.key,r=this.C_.get(n);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(n,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(n):e.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):ne():this.C_=this.C_.insert(n,e)}F_(){const e=[];return this.C_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Er{constructor(e,n,r,i,s,o,l,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Er(e,n,cr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.M_=void 0,this.listeners=[]}}class w0{constructor(){this.queries=new Mr(e=>Jp(e),Vo),this.onlineState="Unknown",this.x_=new Set}}async function T0(t,e){const n=oe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new E0),i)try{s.M_=await n.onListen(r)}catch(o){const l=ku(o,`Initialization of query '${ul(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,s),s.listeners.push(e),e.O_(n.onlineState),s.M_&&e.N_(s.M_)&&Nu(n)}async function I0(t,e){const n=oe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function R0(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.listeners)l.N_(i)&&(r=!0);o.M_=i}}r&&Nu(n)}function A0(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Nu(t){t.x_.forEach(e=>{e.next()})}class P0{constructor(e,n,r){this.query=e,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.L_?this.q_(e)&&(this.B_.next(e),n=!0):this.Q_(e,this.onlineState)&&(this.K_(e),n=!0),this.k_=e,n}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),n=!0),n}Q_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.key=e}}class Om{constructor(e){this.key=e}}class S0{constructor(e,n){this.query=e,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=ue(),this.mutatedKeys=ue(),this.ta=Yp(e),this.na=new cr(this.ta)}get ra(){return this.Z_}ia(e,n){const r=n?n.sa:new $h,i=n?n.na:this.na;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const a=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=xo(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),T=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let R=!1;d&&m?d.data.isEqual(m.data)?v!==T&&(r.track({type:3,doc:m}),R=!0):this.oa(d,m)||(r.track({type:2,doc:m}),R=!0,(a&&this.ta(m,a)>0||u&&this.ta(m,u)<0)&&(l=!0)):!d&&m?(r.track({type:0,doc:m}),R=!0):d&&!m&&(r.track({type:1,doc:d}),R=!0,(a||u)&&(l=!0)),R&&(m?(o=o.add(m),s=T?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:l,mutatedKeys:s}}oa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((u,c)=>function(d,m){const v=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return v(d)-v(m)}(u.type,c.type)||this.ta(u.doc,c.doc)),this._a(r);const o=n?this.aa():[],l=this.ea.size===0&&this.current?1:0,a=l!==this.X_;return this.X_=l,s.length!==0||a?{snapshot:new Er(this.query,e.na,i,s,e.mutatedKeys,l===0,a,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new $h,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=ue(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return e.forEach(r=>{this.ea.has(r)||n.push(new Om(r))}),this.ea.forEach(r=>{e.has(r)||n.push(new Dm(r))}),n}la(e){this.Z_=e.ss,this.ea=ue();const n=this.ia(e.documents);return this.applyChanges(n,!0)}ha(){return Er.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class b0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class C0{constructor(e){this.key=e,this.Pa=!1}}class D0{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new Mr(l=>Jp(l),Vo),this.Ea=new Map,this.da=new Set,this.Aa=new Te(Q.comparator),this.Ra=new Map,this.Va=new Au,this.ma={},this.fa=new Map,this.ga=vr.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function O0(t,e){const n=B0(t);let r,i;const s=n.Ta.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await XA(n.localStore,Qt(e)),l=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await k0(n,e,r,l==="current",o.resumeToken),n.isPrimaryClient&&Im(n.remoteStore,o)}return i}async function k0(t,e,n,r,i){t.ya=(h,d,m)=>async function(T,R,L,q){let z=R.view.ia(L);z.zi&&(z=await Uh(T.localStore,R.query,!1).then(({documents:k})=>R.view.ia(k,z)));const g=q&&q.targetChanges.get(R.targetId),P=R.view.applyChanges(z,T.isPrimaryClient,g);return qh(T,R.targetId,P.ua),P.snapshot}(t,h,d,m);const s=await Uh(t.localStore,e,!0),o=new S0(e,s.ss),l=o.ia(s.documents),a=es.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,a);qh(t,n,u.ua);const c=new b0(e,n,o);return t.Ta.set(e,c),t.Ea.has(n)?t.Ea.get(n).push(e):t.Ea.set(n,[e]),u.snapshot}async function N0(t,e){const n=oe(t),r=n.Ta.get(e),i=n.Ea.get(r.targetId);if(i.length>1)return n.Ea.set(r.targetId,i.filter(s=>!Vo(s,e))),void n.Ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await pl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Rm(n.remoteStore,r.targetId),ml(n,r.targetId)}).catch(Yi)):(ml(n,r.targetId),await pl(n.localStore,r.targetId,!0))}async function M0(t,e,n){const r=$0(t);try{const i=await function(o,l){const a=oe(o),u=Oe.now(),c=l.reduce((m,v)=>m.add(v.key),ue());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=Jt(),T=ue();return a.Xi.getEntries(m,c).next(R=>{v=R,v.forEach((L,q)=>{q.isValidDocument()||(T=T.add(L))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,v)).next(R=>{h=R;const L=[];for(const q of l){const z=iA(q,h.get(q.key).overlayedDocument);z!=null&&L.push(new $n(q.key,z,Hp(z.value.mapValue),qt.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,L,l)}).next(R=>{d=R;const L=R.applyToLocalDocumentSet(h,T);return a.documentOverlayCache.saveOverlays(m,R.batchId,L)})}).then(()=>({batchId:d.batchId,changes:Zp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,a){let u=o.ma[o.currentUser.toKey()];u||(u=new Te(pe)),u=u.insert(l,a),o.ma[o.currentUser.toKey()]=u}(r,i.batchId,n),await ns(r,i.changes),await Ho(r.remoteStore)}catch(i){const s=ku(i,"Failed to persist write");n.reject(s)}}async function km(t,e){const n=oe(t);try{const r=await QA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ra.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?ve(o.Pa):i.removedDocuments.size>0&&(ve(o.Pa),o.Pa=!1))}),await ns(n,r,e)}catch(r){await Yi(r)}}function Hh(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ta.forEach((s,o)=>{const l=o.view.O_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const a=oe(o);a.onlineState=l;let u=!1;a.queries.forEach((c,h)=>{for(const d of h.listeners)d.O_(l)&&(u=!0)}),u&&Nu(a)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function L0(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new Te(Q.comparator);o=o.insert(s,Ke.newNoDocument(s,ie.min()));const l=ue().add(s),a=new jo(ie.min(),new Map,new Te(pe),o,l);await km(r,a),r.Aa=r.Aa.remove(s),r.Ra.delete(e),Mu(r)}else await pl(r.localStore,e,!1).then(()=>ml(r,e,n)).catch(Yi)}async function V0(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await GA(n.localStore,e);Mm(n,r,null),Nm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ns(n,i)}catch(i){await Yi(i)}}async function x0(t,e,n){const r=oe(t);try{const i=await function(o,l){const a=oe(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,l).next(h=>(ve(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,l)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,e);Mm(r,e,n),Nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ns(r,i)}catch(i){await Yi(i)}}function Nm(t,e){(t.fa.get(e)||[]).forEach(n=>{n.resolve()}),t.fa.delete(e)}function Mm(t,e,n){const r=oe(t);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ea.get(e))t.Ta.delete(r),n&&t.Ia.wa(r,n);t.Ea.delete(e),t.isPrimaryClient&&t.Va.Ar(e).forEach(r=>{t.Va.containsKey(r)||Lm(t,r)})}function Lm(t,e){t.da.delete(e.path.canonicalString());const n=t.Aa.get(e);n!==null&&(Rm(t.remoteStore,n),t.Aa=t.Aa.remove(e),t.Ra.delete(n),Mu(t))}function qh(t,e,n){for(const r of n)r instanceof Dm?(t.Va.addReference(r.key,e),U0(t,r)):r instanceof Om?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Va.removeReference(r.key,e),t.Va.containsKey(r.key)||Lm(t,r.key)):ne()}function U0(t,e){const n=e.key,r=n.path.canonicalString();t.Aa.get(n)||t.da.has(r)||(W("SyncEngine","New document in limbo: "+n),t.da.add(r),Mu(t))}function Mu(t){for(;t.da.size>0&&t.Aa.size<t.maxConcurrentLimboResolutions;){const e=t.da.values().next().value;t.da.delete(e);const n=new Q(Re.fromString(e)),r=t.ga.next();t.Ra.set(r,new C0(n)),t.Aa=t.Aa.insert(n,r),Im(t.remoteStore,new an(Qt(Eu(n.path)),r,"TargetPurposeLimboResolution",pu.ae))}}async function ns(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((l,a)=>{o.push(r.ya(a,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,u?.fromCache?"not-current":"current"),u){i.push(u);const c=Su.qi(a.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(a,u){const c=oe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>V.forEach(u,d=>V.forEach(d.Li,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>V.forEach(d.ki,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Xi(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.Ji.get(d),v=m.snapshotVersion,T=m.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,T)}}}(r.localStore,s))}async function F0(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await vm(n.localStore,e);n.currentUser=e,function(s,o){s.fa.forEach(l=>{l.forEach(a=>{a.reject(new X(M.CANCELLED,o))})}),s.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ns(n,r.ts)}}function j0(t,e){const n=oe(t),r=n.Ra.get(e);if(r&&r.Pa)return ue().add(r.key);{let i=ue();const s=n.Ea.get(e);if(!s)return i;for(const o of s){const l=n.Ta.get(o);i=i.unionWith(l.view.ra)}return i}}function B0(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=km.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=j0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=L0.bind(null,e),e.Ia.n_=R0.bind(null,e.eventManager),e.Ia.wa=A0.bind(null,e.eventManager),e}function $0(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=V0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x0.bind(null,e),e}class zh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return KA(this.persistence,new zA,e.initialUser,this.serializer)}createPersistence(e){return new HA(Pu.zr,this.serializer)}createSharedClientState(e){return new e0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class H0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F0.bind(null,this.syncEngine),await v0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new w0}()}createDatastore(e){const n=Bo(e.databaseInfo.databaseId),r=function(s){return new i0(s)}(e.databaseInfo);return function(s,o,l,a){return new a0(s,o,l,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new u0(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hh(this.syncEngine,n,0),function(){return jh.v()?new jh:new t0}())}createSyncEngine(e,n){return function(i,s,o,l,a,u,c){const h=new D0(i,s,o,l,a,u);return c&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=oe(n);W("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await ts(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):Gt("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=jp.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ku(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Aa(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await K0(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Bh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Bh(e.remoteStore,s)),t._onlineComponents=e}function W0(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function K0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Aa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!W0(n))throw n;mr("Error using user provided cache. Falling back to memory cache: "+n),await Aa(t,new zh)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Aa(t,new zh);return t._offlineComponents}async function Vm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Wh(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Wh(t,new H0))),t._onlineComponents}function G0(t){return Vm(t).then(e=>e.syncEngine)}async function Q0(t){const e=await Vm(t),n=e.eventManager;return n.onListen=O0.bind(null,e.syncEngine),n.onUnlisten=N0.bind(null,e.syncEngine),n}function J0(t,e,n={}){const r=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,a,u){const c=new q0({next:d=>{o.enqueueAndForget(()=>I0(s,h));const m=d.docs.has(l);!m&&d.fromCache?u.reject(new X(M.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&a&&a.source==="server"?u.reject(new X(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new P0(Eu(l.path),c,{includeMetadataChanges:!0,U_:!0});return T0(s,h)}(await Q0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function X0(t,e,n,r){if(e===!0&&r===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gh(t){if(!Q.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lu(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fR;switch(r.type){case"firstParty":return new yR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kh.get(n);r&&(W("ComponentProvider","Removing Datastore"),Kh.delete(n),r.terminate())}(this),Promise.resolve()}}function Z0(t,e,n,r={}){var i;const s=(t=Ni(t,Vu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=We.MOCK_USER;else{l=s_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new We(u)}t._authCredentials=new pR(new Fp(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xu(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Mi extends xu{constructor(e,n,r){super(e,n,Eu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new Q(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function gl(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=jp.V()),Y0("doc","path",e),t instanceof Vu){const r=Re.fromString(e,...n);return Gh(r),new yt(t,null,new Q(r))}{if(!(t instanceof yt||t instanceof Mi))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Gh(r),new yt(t.firestore,t instanceof Mi?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new wm(this,"async_queue_retry"),this.Za=()=>{const n=Ra();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=Ra();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=Ra();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new hn;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Xi(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Gt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(e,n,r){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const i=Ou.createAndSchedule(this,e,n,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&ne()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}class Uu extends Vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new eP}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||jm(this),this._firestoreClient.terminate()}}function Um(t,e){const n=typeof t=="object"?t:Cd(),r=typeof t=="string"?t:e||"(default)",i=Sl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=r_("firestore");s&&Z0(i,...s)}return i}function Fm(t){return t._firestoreClient||jm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jm(t){var e,n,r;const i=t._freezeSettings(),s=function(l,a,u,c){return new CR(l,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,xm(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new z0(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(Ze.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wr(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=/^__.*__$/;class nP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $n(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}function $m(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Bu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new Bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return ao(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if($m(this.au)&&tP.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class rP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bo(e)}Au(e,n,r,i=!1){return new Bu({au:e,methodName:n,du:r,path:Ge.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iP(t){const e=t._freezeSettings(),n=Bo(t._databaseId);return new rP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sP(t,e,n,r,i,s={}){const o=t.Au(s.merge||s.mergeFields?2:0,e,n,i);Wm("Data must be an object, but it was:",o,r);const l=qm(r,o);let a,u;if(s.merge)a=new wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=oP(e,h,n);if(!o.contains(d))throw new X(M.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lP(c,d)||c.push(d)}a=new wt(c),u=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,u=o.fieldTransforms;return new nP(new gt(l),a,u)}function Hm(t,e){if(zm(t=Rt(t)))return Wm("Unsupported field value:",e,t),qm(t,e);if(t instanceof Bm)return function(r,i){if(!$m(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let a=Hm(l,i.Iu(o));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:so(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:so(i.serializer,s)}}if(r instanceof ju)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wr)return{bytesValue:fm(i.serializer,r._byteString)};if(r instanceof yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ru(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${Lu(r)}`)}(t,e)}function qm(t,e){const n={};return Bp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nr(t,(r,i)=>{const s=Hm(i,e.cu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof ju||t instanceof wr||t instanceof yt||t instanceof Bm)}function Wm(t,e,n){if(!zm(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Lu(n);throw r==="an object"?e.Tu(t+" a custom object"):e.Tu(t+" "+r)}}function oP(t,e,n){if((e=Rt(e))instanceof Fu)return e._internalPath;if(typeof e=="string")return Km(t,e);throw ao("Field path arguments must be of type string or ",t,!1,void 0,n)}const aP=new RegExp("[~\\*/\\[\\]]");function Km(t,e,n){if(e.search(aP)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fu(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ao(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new X(M.INVALID_ARGUMENT,l+t+a)}function lP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uP extends Gm{data(){return super.data()}}function Qm(t,e){return typeof e=="string"?Km(t,e):e instanceof Fu?e._internalPath:e._delegate._internalPath}class cP{convertValue(e,n="none"){switch(jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Nr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ju(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=fn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);ve(_m(r));const i=new Ci(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Gt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jm extends Gm{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fP extends Jm{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){t=Ni(t,yt);const e=Ni(t.firestore,Uu);return J0(Fm(e),t._key).then(n=>yP(e,t,n))}class pP extends cP{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function mP(t,e,n){t=Ni(t,yt);const r=Ni(t.firestore,Uu),i=hP(t.converter,e,n);return gP(r,[sP(iP(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function gP(t,e){return function(r,i){const s=new hn;return r.asyncQueue.enqueueAndForget(async()=>M0(await G0(r),i,s)),s.promise}(Fm(t),e)}function yP(t,e,n){const r=n.docs.get(e._key),i=new pP(t);return new Jm(t,i,e._key,r,new dP(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){kr=i})(Rr),dr(new Nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Uu(new mR(r.getProvider("auth-internal")),new vR(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ci(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),cn(yh,"4.0.0",e),cn(yh,"4.0.0","esm2017")})();const _P=async(t,e)=>{const n=Um(window.firebaseApp),r=gl(n,"comments",t),s=(await Ym(r)).data(),o=Object.keys(s||{}).length;await mP(gl(n,"comments",t),{...s,[o]:e})},vP=async t=>{const e=Um(window.firebaseApp),n=gl(e,"comments",t);return(await Ym(n)).data()},EP=t=>{const e=new Date(t),n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZone:"UTC"};return e.toLocaleDateString("en-US",n)},Xm=({videoId:t})=>{const e=()=>{const[,n]=It(Ar),[r]=It(bl),[i,s]=D.useState({}),[o,l]=D.useState("");D.useEffect(()=>{a()},[]);const a=()=>{vP(t).then(s).catch(c=>yi(n)(c))},u=()=>{const c={[r||"Anonymous"]:[o,Date.now()]};_P(t,c).then(a).catch(yi(n)),l("")};return I.jsxs(Sa,{title:"Comments",children:[Object.keys(i||{}).length>0&&I.jsx(hs,{children:I.jsx("ul",{children:Object.keys(i||{}).map((c,h)=>Object.entries(i[c]||{}).map(([d,[m,v]])=>I.jsxs("li",{children:[I.jsx(fg,{children:d}),I.jsx(pg,{children:EP(v)}),I.jsx(Ms,{children:m})]},h)))})}),I.jsx(hs,{children:I.jsx(Ns,{leftIcon:"comment",type:"text",value:o,placeholder:"Add a comment...",onChange:c=>l(c.target.value),rightElement:I.jsx(ci,{icon:"add",text:"Add Comment",onClick:u})})})]})};return I.jsxs(Sa,{compact:!0,className:"video",children:[I.jsx(hs,{children:I.jsx(Vf,{url:`https://www.youtube.com/watch?v=${t}`,controls:!0,width:"100%",height:"50vh"})}),I.jsx(hs,{className:"comments",children:I.jsx(e,{})})]})},wP=async(t,e)=>{try{const n=async i=>fetch(`${i.api_url}/channel/${e}`).then(async s=>await s.json()).catch(s=>Wt(s)),r=await Promise.any(t.map(n));return Tt(r)}catch(n){return Wt(n)}},TP=async t=>{const e=async n=>(await fetch(`${n.api_url}/trending?region=US`)).json();try{const n=await Promise.any(t.map(await e));return Tt(n)}catch(n){return Wt(n)}},IP=()=>{const[,t]=It(Ar),[e,n]=D.useState([]),r=yd();return console.debug("loaderData",r),console.debug("---------------------"),D.useEffect(()=>{r.bimap(t,async i=>(await i).bimap(t,n)),console.debug("videos",e)},[r]),I.jsxs(I.Fragment,{children:[I.jsx(D.Suspense,{fallback:I.jsx(Ms,{children:"Loading..."}),children:I.jsx(Tl,{})}),I.jsx("h1",{children:"Popular videos"}),I.jsx(D.Suspense,{fallback:I.jsx(Ms,{children:"Loading..."}),children:e?.length>0?I.jsx("ul",{children:e.map(({url:i})=>I.jsx("li",{children:I.jsx(Vf,{url:`https://youtube.com${i}`,controls:!0,light:!0})},i))}):I.jsx(ed,{icon:"search",title:"No results or the search failed."})})]})};const RP=({video:t})=>{const{title:e,thumbnail:n,uploaderName:r,uploaderUrl:i,uploaderAvatar:s,uploaded:o}=t;return I.jsxs("div",{className:"video-preview",children:[I.jsx("img",{src:n,alt:e}),I.jsxs("div",{className:"info",children:[I.jsx(Ms,{children:e}),I.jsx("p",{className:"uploader",children:I.jsxs(As,{to:i?.slice(1),children:[I.jsx("img",{className:"avatar",src:s,alt:r}),I.jsx("span",{children:r})]})}),I.jsx("p",{className:"uploaded",children:new Date(o).toLocaleDateString()})]})]})},AP=t=>t.substring(t.lastIndexOf("=")+1),PP=()=>{const[t]=It(kd);return I.jsxs(I.Fragment,{children:[I.jsx(Tl,{}),t?.length>0?I.jsx(Gr,{vertical:!0,renderActiveTabPanelOnly:!0,children:t.map((e,n)=>I.jsx(mg,{id:n,panel:I.jsx(Xm,{videoId:AP(e.url)}),children:I.jsx(RP,{video:e})},n))}):I.jsx(ed,{icon:"info-sign",title:"No results or the search has failed."})]})},SP=()=>I.jsxs(I.Fragment,{children:[I.jsxs(Gr,{id:"tabs",children:[I.jsx(Gr.Tab,{title:"Tab 1",id:"tab1"}),I.jsx(Gr.Tab,{title:"Tab 1",id:"tab2"}),I.jsx(Gr.Tab,{title:"Tab 1",id:"tab3"})]}),I.jsx("h1",{children:"Hello from Profile"})]}),Jh=()=>{const[,t]=It(Ar),e=_d();return t(e),I.jsx(I.Fragment,{})},Yh=await ff(),Xh={trending:()=>Yh.map(t=>TP(t)),channel:async({params:t})=>Yh.map(async e=>await wP(e,t.channelId))},bP=Ma(I.jsxs(Tn,{path:"/odin-invidious/",element:I.jsx(jw,{}),children:[I.jsx(Tn,{loader:Xh.trending,path:"/odin-invidious/",element:I.jsx(IP,{}),errorElement:I.jsx(Jh,{})}),I.jsx(Tn,{path:"/odin-invidious/profile",element:I.jsx(SP,{})}),I.jsxs(Tn,{path:"/odin-invidious/main",element:I.jsx(PP,{}),children:[I.jsx(Tn,{path:"video/:videoId",element:I.jsx(Xm,{})}),I.jsx(Tn,{path:"channel/:channelId",loader:Xh.channel,element:I.jsx(Bw,{}),errorElement:I.jsx(Jh,{})})]})]})),CP=Ny(bP),DP=ba.createRoot(document.querySelector("#root"));DP.render(I.jsx(D.StrictMode,{children:I.jsx(Ay,{router:CP})}));
