import{P as C,S as D,i as H,s as R,e as E,t as g,k,c as S,a as I,g as v,d as f,n as y,b as _,f as L,I as u,h as M,J as T,Q as j,R as q,A,T as J}from"../../chunks/vendor-b5747eef.js";const O=()=>{const a=C("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}},N={subscribe(a){return O().page.subscribe(a)}};function x(a){let o,s,r=a[0].title+"",t,n,e,p,d,b,c=(a[2]>1?"minutos":"minuto")+"",m,w;return{c(){o=E("div"),s=E("h1"),t=g(r),n=k(),e=E("span"),p=g("Por Jorge - "),d=g(a[2]),b=k(),m=g(c),w=g(" de lectura"),this.h()},l(i){o=S(i,"DIV",{class:!0});var l=I(o);s=S(l,"H1",{class:!0});var P=I(s);t=v(P,r),P.forEach(f),n=y(l),e=S(l,"SPAN",{class:!0});var h=I(e);p=v(h,"Por Jorge - "),d=v(h,a[2]),b=y(h),m=v(h,c),w=v(h," de lectura"),h.forEach(f),l.forEach(f),this.h()},h(){_(s,"class","text-2xl text-center"),_(e,"class","text-gray-700"),_(o,"class","flex items-center flex-col")},m(i,l){L(i,o,l),u(o,s),u(s,t),u(o,n),u(o,e),u(e,p),u(e,d),u(e,b),u(e,m),u(e,w)},p(i,l){l&1&&r!==(r=i[0].title+"")&&M(t,r),l&4&&M(d,i[2]),l&4&&c!==(c=(i[2]>1?"minutos":"minuto")+"")&&M(m,c)},d(i){i&&f(o)}}}function V(a){let o,s,r=a[0].content+"",t=a[1]&&x(a);return{c(){t&&t.c(),o=k(),s=E("div"),this.h()},l(n){t&&t.l(n),o=y(n),s=S(n,"DIV",{class:!0,id:!0});var e=I(s);e.forEach(f),this.h()},h(){_(s,"class","post-information"),_(s,"id","post-information")},m(n,e){t&&t.m(n,e),L(n,o,e),L(n,s,e),s.innerHTML=r},p(n,[e]){n[1]?t?t.p(n,e):(t=x(n),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null),e&1&&r!==(r=n[0].content+"")&&(s.innerHTML=r)},i:T,o:T,d(n){t&&t.d(n),n&&f(o),n&&f(s)}}}function B(a,o,s){let r;j(a,N,c=>s(3,r=c));const t=new q.Converter,n=r.params;let e={},p=!1,d=0;const b=c=>Math.round(c.split(/\s+/).length/225);return A(async()=>{const c=await fetch("/post-index.json").then(i=>i.json());s(0,e=c.find(i=>i.id===n.postId));const m=await fetch(e.contentRoute).then(i=>i.text());s(0,e.content=t.makeHtml(m),e),s(2,d=b(e.content)),new MutationObserver(i=>{document.querySelectorAll("pre code").forEach(l=>{J.highlightElement(l)})}).observe(document.querySelector("#post-information"),{childList:!0}),s(1,p=!0)}),[e,p,d]}class U extends D{constructor(o){super();H(this,o,B,V,R,{})}}export{U as default};
