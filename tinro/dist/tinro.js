var N=Object.create,v=Object.defineProperty,P=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty,Z=Object.getOwnPropertyNames,B=Object.getOwnPropertyDescriptor;var H=e=>v(e,"__esModule",{value:!0});var G=(e,a)=>{for(var n in a)v(e,n,{get:a[n],enumerable:!0})},J=(e,a,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Z(a))!U.call(e,r)&&r!=="default"&&v(e,r,{get:()=>a[r],enumerable:!(n=B(a,r))||n.enumerable});return e},k=e=>e&&e.__esModule?e:J(H(v(e!=null?N(P(e)):{},"default",{value:e,enumerable:!0})),e);H(exports);G(exports,{Route:()=>D,active:()=>Y,meta:()=>y,router:()=>w});var c=k(require("svelte/internal"));var O=k(require("svelte")),C=k(require("svelte/store")),h=k(require("svelte")),E=k(require("svelte/store"));function x(e,a=!1){return e=e.slice(e.startsWith("/#")?2:0,e.endsWith("/*")?-2:void 0),e.startsWith("/")||(e="/"+e),e==="/"&&(e=""),a&&!e.endsWith("/")&&(e+="/"),e}function A(e,a){e=x(e,!0),a=x(a,!0);let n=[],r={},t=!0,i=e.split("/").map(o=>o.startsWith(":")?(n.push(o.slice(1)),"([^\\/]+)"):o).join("\\/"),l=a.match(new RegExp(`^${i}$`));return l||(t=!1,l=a.match(new RegExp(`^${i}`))),l?(n.forEach((o,b)=>r[o]=l[b+1]),{exact:t,params:r,part:l[0].slice(0,-1)}):null}function M(e,a,n){if(n==="")return e;if(n[0]==="/")return n;let r=l=>l.split("/").filter(o=>o!==""),t=r(e),i=a?r(a):[];return"/"+i.map((l,o)=>t[o]).join("/")+"/"+n}function _(e,a,n,r){let t=[a,"data-"+a].reduce((i,l)=>{let o=e.getAttribute(l);return n&&e.removeAttribute(l),o===null?i:o},!1);return!r&&t===""?!0:t||r||!1}function Q(e){let a=e.split("&").map(n=>n.split("=")).reduce((n,r)=>{let t=r[0];if(!t)return n;let i=r.length>1?r[r.length-1]:!0;return typeof i=="string"&&i.includes(",")&&(i=i.split(",")),n[t]===void 0?n[t]=[i]:n[t].push(i),n},{});return Object.entries(a).reduce((n,r)=>(n[r[0]]=r[1].length>1?r[1]:r[1][0],n),{})}function V(e){throw new Error("[Tinro] "+e)}var R=1,W=2,q=3,X=4;function $(e,a,n,r){return e===R?a&&a():e===W?n&&n():r&&r()}function tt(){return!window||window.location.pathname==="srcdoc"?q:R}var m={HISTORY:R,HASH:W,MEMORY:q,OFF:X,run:$,getDeafault:tt},z,S,d=et();function et(){let e=m.getDeafault(),a,n=i=>window.onhashchange=window.onpopstate=S=null,r=i=>a&&a(F(e));function t(i){i&&(e=i),n(),e!==m.OFF&&m.run(e,l=>window.onpopstate=r,l=>window.onhashchange=r)&&r()}return{mode:i=>t(i),get:i=>F(e),go(i,l){rt(e,i,l),r()},start(i){a=i,t()},stop(){a=null,t(m.OFF)}}}function rt(e,a,n){let r=t=>history[n?"replaceState":"pushState"]({},"",t);m.run(e,t=>r(a),t=>r(`#${a}`),t=>S=a)}function F(e){let a=z,n=z=m.run(e,t=>window.location.pathname+window.location.search,t=>String(window.location.hash.slice(1)||"/"),t=>S||"/"),r=n.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return{url:n,from:a,path:r[1]||"",query:Q(r[2]||""),hash:r[3]||""}}function j(e){let a=h.getContext("tinro");a&&(a.exact||a.fallback)&&V(`${e.fallback?"<Route fallback>":`<Route path="${e.path}">`}  can't be inside ${a.fallback?"<Route fallback>":`<Route path="${a.path||"/"}"> with exact path`}`);let n=e.fallback?"fallbacks":"childs",r=E.writable({}),t={router:{},exact:!1,pattern:null,meta:{},parent:a,fallback:e.fallback,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,update(i){t.exact=!i.path.endsWith("/*"),t.pattern=x(`${t.parent&&t.parent.pattern||""}${i.path}`),t.redirect=i.redirect,t.firstmatch=i.firstmatch,t.breadcrumb=i.breadcrumb,t.match()},register:()=>{if(t.parent)return t.parent[n].add(t),()=>{t.parent[n].delete(t),t.router.un&&t.router.un()}},show:()=>{e.onShow(),!t.fallback&&t.parent&&t.parent.activeChilds.add(t)},hide:()=>{e.onHide(),!t.fallback&&t.parent&&t.parent.activeChilds.delete(t)},match:async()=>{t.matched=!1;let{path:i,url:l,from:o,query:b}=t.router,u=A(t.pattern,i);if(!t.fallback&&u&&t.redirect&&(!t.exact||t.exact&&u.exact)){await h.tick();let f=M(i,t.parent&&t.parent.pattern,t.redirect);return w.goto(f,!0)}if(t.meta=u&&{from:o,url:l,query:b,match:u.part,pattern:t.pattern,breadcrumbs:t.parent&&t.parent.meta&&t.parent.meta.breadcrumbs.slice()||[],params:u.params,subscribe:r.subscribe},t.breadcrumb&&t.meta&&t.meta.breadcrumbs.push({name:t.breadcrumb,path:u.part}),r.set(t.meta),u&&!t.fallback&&(!t.exact||t.exact&&u.exact)&&(!t.parent||!t.parent.firstmatch||!t.parent.matched)?(e.onMeta(t.meta),t.parent&&(t.parent.matched=!0),t.show()):t.hide(),await h.tick(),u&&!t.fallback&&(t.childs.size>0&&t.activeChilds.size==0||t.childs.size==0&&t.fallbacks.size>0)){let f=t;for(;f.fallbacks.size==0;)if(f=f.parent,!f)return;f&&f.fallbacks.forEach(p=>{if(p.redirect){let g=M("/",p.parent&&p.parent.pattern,p.redirect);w.goto(g,!0)}else p.show()})}}};return h.setContext("tinro",t),h.onMount(()=>t.register()),t.router.un=w.subscribe(i=>{t.router.path=i.path,t.router.url=i.url,t.router.query=i.query,t.router.from=i.from,t.pattern!==null&&t.match()}),t}function y(){return h.getContext("tinro").meta}var w=at();function at(){let{subscribe:e}=C.writable(d.get(),a=>{d.start(a);let n=nt(d.go);return()=>{d.stop(),n()}});return{subscribe:e,goto:d.go,params:it,meta:y,useHashNavigation:a=>d.mode(a?m.HASH:m.HISTORY),mode:{hash:()=>d.mode(m.HASH),history:()=>d.mode(m.HISTORY),memory:()=>d.mode(m.MEMORY)}}}function Y(e){let a=_(e,"href"),n=_(e,"exact",!0),r=_(e,"active-class",!0,"active");return{destroy:w.subscribe(t=>{let i=A(a,t.path);i&&(i.exact&&n||!n)?e.classList.add(r):e.classList.remove(r)})}}function nt(e){let a=n=>{let r=n.target.closest("a[href]"),t=r&&_(r,"target",!1,"_self"),i=r&&_(r,"tinro-ignore"),l=n.ctrlKey||n.metaKey||n.altKey||n.shiftKey;if(t=="_self"&&!i&&!l&&r){let o=r.getAttribute("href").replace(/^\/#/,"");/^\/\/|^[a-zA-Z]+:/.test(o)||(n.preventDefault(),e(o.startsWith("/")?o:r.href.replace(window.location.origin,"")))}};return addEventListener("click",a),()=>removeEventListener("click",a)}function it(){return O.getContext("tinro").meta.params}var ct=e=>({params:e&2,meta:e&4}),K=e=>({params:e[1],meta:e[2]});function L(e){let a,n=e[9].default,r=c.create_slot(n,e,e[8],K);return{c(){r&&r.c()},m(t,i){r&&r.m(t,i),a=!0},p(t,i){r&&r.p&&i&262&&c.update_slot(r,n,t,t[8],i,ct,K)},i(t){a||(c.transition_in(r,t),a=!0)},o(t){c.transition_out(r,t),a=!1},d(t){r&&r.d(t)}}}function lt(e){let a,n,r=e[0]&&L(e);return{c(){r&&r.c(),a=c.empty()},m(t,i){r&&r.m(t,i),c.insert(t,a,i),n=!0},p(t,[i]){t[0]?r?(r.p(t,i),i&1&&c.transition_in(r,1)):(r=L(t),r.c(),c.transition_in(r,1),r.m(a.parentNode,a)):r&&(c.group_outros(),c.transition_out(r,1,1,()=>{r=null}),c.check_outros())},i(t){n||(c.transition_in(r),n=!0)},o(t){c.transition_out(r),n=!1},d(t){r&&r.d(t),t&&c.detach(a)}}}function ot(e,a,n){let{$$slots:r={},$$scope:t}=a,{path:i="/*"}=a,{fallback:l=!1}=a,{redirect:o=!1}=a,{firstmatch:b=!1}=a,{breadcrumb:u=null}=a,f=!1,p={},g={},I=j({fallback:l,onShow(){n(0,f=!0)},onHide(){n(0,f=!1)},onMeta(s){n(2,g=s),n(1,p=g.params)}});return e.$$set=s=>{"path"in s&&n(3,i=s.path),"fallback"in s&&n(4,l=s.fallback),"redirect"in s&&n(5,o=s.redirect),"firstmatch"in s&&n(6,b=s.firstmatch),"breadcrumb"in s&&n(7,u=s.breadcrumb),"$$scope"in s&&n(8,t=s.$$scope)},e.$$.update=()=>{if(e.$$.dirty&232){t:I.update({path:i,redirect:o,firstmatch:b,breadcrumb:u})}},[f,p,g,i,l,o,b,u,t,r]}var T=class extends c.SvelteComponent{constructor(a){super();c.init(this,a,ot,lt,c.safe_not_equal,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}},D=T;