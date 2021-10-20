import{S as U,i as z,s as O,D as K,e as $,c as b,a as k,d as f,b as h,E as q,f as x,F as Q,G as R,H as X,x as E,u as T,k as P,t as j,n as M,g as N,I as d,J as Y,h as ue,K as B,L as de,M as me,N as he,A as Z,O as _e,P as ge,j as C,m as W,o as F,r as le,w as ae,v as H,Q as pe,R as ve,T as $e,l as ne,U as oe}from"../chunks/vendor-ef0f9a2d.js";import{p as be}from"../chunks/stores-3c2ed975.js";var ee={updateThemeOnWeb:()=>{localStorage.theme||(localStorage.theme="light"),document.body.classList.add("min-h-screen"),localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.body.classList.add("dark"),document.body.classList.add("bg-gray-800")):(document.body.classList.remove("dark"),document.body.classList.remove("bg-gray-800"))},changeTheme:o=>{["light","dark"].includes(o)&&(localStorage.theme=o)},deleteThemePreferences:()=>{localStorage.removeItem("theme")}};function ke(o){let e,s;const t=o[3].default,r=K(t,o,o[2],null);return{c(){e=$("a"),r&&r.c(),this.h()},l(l){e=b(l,"A",{class:!0,href:!0});var a=k(e);r&&r.l(a),a.forEach(f),this.h()},h(){h(e,"class","md:text-xl text-green-800 font-semibold dark:text-green-400 svelte-sir4ul"),h(e,"href",o[0]),q(e,"selected",o[1])},m(l,a){x(l,e,a),r&&r.m(e,null),s=!0},p(l,[a]){r&&r.p&&(!s||a&4)&&Q(r,t,l,l[2],s?X(t,l[2],a,null):R(l[2]),null),(!s||a&1)&&h(e,"href",l[0]),a&2&&q(e,"selected",l[1])},i(l){s||(E(r,l),s=!0)},o(l){T(r,l),s=!1},d(l){l&&f(e),r&&r.d(l)}}}function ye(o,e,s){let{$$slots:t={},$$scope:r}=e,{href:l=""}=e,{selected:a=!1}=e;return o.$$set=n=>{"href"in n&&s(0,l=n.href),"selected"in n&&s(1,a=n.selected),"$$scope"in n&&s(2,r=n.$$scope)},[l,a,r,t]}class ce extends U{constructor(e){super();z(this,e,ye,ke,O,{href:0,selected:1})}}function we(o){let e,s,t,r,l,a,n,c,m,w,A,i,p,y,S,I,V=(o[0]==="dark"?"claro":"oscuro")+"",u,v,L;return{c(){e=$("div"),s=P(),t=$("div"),r=$("div"),l=$("div"),a=$("a"),n=j("Inicio"),c=P(),m=$("a"),w=j("Acerca de"),A=P(),i=$("a"),p=j("Preview: Publisher"),y=P(),S=$("button"),I=j("Cambiar a modo "),u=j(V),this.h()},l(_){e=b(_,"DIV",{id:!0,class:!0}),k(e).forEach(f),s=M(_),t=b(_,"DIV",{id:!0,class:!0});var g=k(t);r=b(g,"DIV",{class:!0});var D=k(r);l=b(D,"DIV",{class:!0});var G=k(l);a=b(G,"A",{class:!0,href:!0});var te=k(a);n=N(te,"Inicio"),te.forEach(f),c=M(G),m=b(G,"A",{class:!0,href:!0});var re=k(m);w=N(re,"Acerca de"),re.forEach(f),G.forEach(f),A=M(D),i=b(D,"A",{class:!0,href:!0});var se=k(i);p=N(se,"Preview: Publisher"),se.forEach(f),y=M(D),S=b(D,"BUTTON",{class:!0});var J=k(S);I=N(J,"Cambiar a modo "),u=N(J,V),J.forEach(f),D.forEach(f),g.forEach(f),this.h()},h(){h(e,"id","lottie-icon"),h(e,"class","w-10 h-10 hover:cursor-pointer"),h(a,"class","text-xl text-green-800 font-semibold dark:text-green-400"),h(a,"href","/"),h(m,"class","text-xl text-green-800 font-semibold dark:text-green-400"),h(m,"href","/about"),h(l,"class","flex flex-col md:hidden gap-5"),h(i,"class","text-xl text-green-800 font-semibold dark:text-green-400"),h(i,"href","/preview/publisher"),h(S,"class","dark:text-green-400 bg-transparent font-semibold text-green-800 text-xl text-left"),h(r,"class","flex flex-col gap-5 text-lg dark:bg-gray-700"),h(t,"id","menu"),h(t,"class","border px-5 py-4 rounded-md bg-white dark:bg-gray-700 dark:border-gray-800 shadow-sm fixed z-50"),q(t,"hidden",!o[1]),q(t,"block",o[1])},m(_,g){x(_,e,g),x(_,s,g),x(_,t,g),d(t,r),d(r,l),d(l,a),d(a,n),d(l,c),d(l,m),d(m,w),d(r,A),d(r,i),d(i,p),d(r,y),d(r,S),d(S,I),d(S,u),v||(L=[Y(e,"click",o[3]),Y(e,"blur",o[6]),Y(S,"click",o[7])],v=!0)},p(_,[g]){g&1&&V!==(V=(_[0]==="dark"?"claro":"oscuro")+"")&&ue(u,V),g&2&&q(t,"hidden",!_[1]),g&2&&q(t,"block",_[1])},i:B,o:B,d(_){_&&f(e),_&&f(s),_&&f(t),v=!1,de(L)}}}function Ee(o,e,s){let t;me(o,be,i=>s(5,t=i));let{theme:r="light"}=e;const l=he();let a=!1,n,c=t.path;Z(()=>{if(!n){console.log("Created a new menu"),n=_e.loadAnimation({container:document.querySelector("#lottie-icon"),renderer:"svg",path:r==="light"?"/icons/menu.json":"/icons/menu-dark.json",autoplay:!1,loop:!1}),n.setSpeed(1.5),n.addEventListener("enterFrame",y=>{(y.currentTime>y.totalTime/2&&y.currentTime<1+y.totalTime/2&&y.direction===1||y.currentTime===0&&y.direction===-1)&&n.pause()});const i=document.querySelector("#lottie-icon"),p=document.querySelector("#menu");ge(i,p,{placement:"bottom-end"})}});const m=()=>{s(1,a=!a),a?(n.setDirection(1),n.play()):(n.setDirection(-1),n.play())},w=()=>console.log("uwu"),A=()=>{ee.changeTheme(localStorage.theme==="dark"?"light":"dark"),ee.updateThemeOnWeb(),l("theme-change")};return o.$$set=i=>{"theme"in i&&s(0,r=i.theme)},o.$$.update=()=>{o.$$.dirty&50&&(a&&c!==t.path&&(m(),s(1,a=!1)),s(4,c=t.path))},[r,a,l,m,c,t,w,A]}class ie extends U{constructor(e){super();z(this,e,Ee,we,O,{theme:0})}}function Te(o){let e;return{c(){e=j("Inicio")},l(s){e=N(s,"Inicio")},m(s,t){x(s,e,t)},d(s){s&&f(e)}}}function Ie(o){let e;return{c(){e=j("Acerca de")},l(s){e=N(s,"Acerca de")},m(s,t){x(s,e,t)},d(s){s&&f(e)}}}function Se(o){let e,s;return e=new ie({props:{theme:"dark"}}),e.$on("theme-change",o[1]),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){F(e,t,r),s=!0},p:B,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function De(o){let e,s;return e=new ie({}),e.$on("theme-change",o[1]),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){F(e,t,r),s=!0},p:B,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function xe(o){let e,s,t,r,l,a,n,c,m,w,A,i,p,y;c=new ce({props:{href:"/",$$slots:{default:[Te]},$$scope:{ctx:o}}}),w=new ce({props:{href:"/about",$$slots:{default:[Ie]},$$scope:{ctx:o}}});const S=[De,Se],I=[];function V(u,v){return u[0]==="light"?0:1}return i=V(o),p=I[i]=S[i](o),{c(){e=$("nav"),s=$("div"),t=$("h3"),r=j("Mi blog"),l=P(),a=$("div"),n=$("div"),C(c.$$.fragment),m=P(),C(w.$$.fragment),A=P(),p.c(),this.h()},l(u){e=b(u,"NAV",{class:!0});var v=k(e);s=b(v,"DIV",{class:!0});var L=k(s);t=b(L,"H3",{class:!0});var _=k(t);r=N(_,"Mi blog"),_.forEach(f),L.forEach(f),l=M(v),a=b(v,"DIV",{class:!0});var g=k(a);n=b(g,"DIV",{class:!0});var D=k(n);W(c.$$.fragment,D),m=M(D),W(w.$$.fragment,D),D.forEach(f),A=M(g),p.l(g),g.forEach(f),v.forEach(f),this.h()},h(){h(t,"class","text-xl md:text-2xl"),h(s,"class","flex items-center"),h(n,"class","hidden md:flex items-center gap-6"),h(a,"class","gap-6 items-center flex"),h(e,"class","flex items-center justify-between dark:text-gray-100 mb-10")},m(u,v){x(u,e,v),d(e,s),d(s,t),d(t,r),d(e,l),d(e,a),d(a,n),F(c,n,null),d(n,m),F(w,n,null),d(a,A),I[i].m(a,null),y=!0},p(u,[v]){const L={};v&4&&(L.$$scope={dirty:v,ctx:u}),c.$set(L);const _={};v&4&&(_.$$scope={dirty:v,ctx:u}),w.$set(_);let g=i;i=V(u),i===g?I[i].p(u,v):(le(),T(I[g],1,1,()=>{I[g]=null}),ae(),p=I[i],p?p.p(u,v):(p=I[i]=S[i](u),p.c()),E(p,1),p.m(a,null))},i(u){y||(E(c.$$.fragment,u),E(w.$$.fragment,u),E(p),y=!0)},o(u){T(c.$$.fragment,u),T(w.$$.fragment,u),T(p),y=!1},d(u){u&&f(e),H(c),H(w),I[i].d()}}}function Ae(o,e,s){let t="light";const r=()=>s(0,t=localStorage.theme);return Z(r),[t,r]}class Ve extends U{constructor(e){super();z(this,e,Ae,xe,O,{})}}function fe(o){let e,s,t,r;const l=o[2].default,a=K(l,o,o[1],null);return{c(){e=$("div"),a&&a.c()},l(n){e=b(n,"DIV",{});var c=k(e);a&&a.l(c),c.forEach(f)},m(n,c){x(n,e,c),a&&a.m(e,null),r=!0},p(n,c){a&&a.p&&(!r||c&2)&&Q(a,l,n,n[1],r?X(l,n[1],c,null):R(n[1]),null)},i(n){r||(E(a,n),pe(()=>{t&&t.end(1),s=ve(e,oe,{duration:100,delay:150}),s.start()}),r=!0)},o(n){T(a,n),s&&s.invalidate(),t=$e(e,oe,{duration:150}),r=!1},d(n){n&&f(e),a&&a.d(n),n&&t&&t.end()}}}function Le(o){let e=o[0],s,t,r=fe(o);return{c(){r.c(),s=ne()},l(l){r.l(l),s=ne()},m(l,a){r.m(l,a),x(l,s,a),t=!0},p(l,[a]){a&1&&O(e,e=l[0])?(le(),T(r,1,1,B),ae(),r=fe(l),r.c(),E(r),r.m(s.parentNode,s)):r.p(l,a)},i(l){t||(E(r),t=!0)},o(l){T(r),t=!1},d(l){l&&f(s),r.d(l)}}}function Pe(o,e,s){let{$$slots:t={},$$scope:r}=e,{refresh:l=""}=e;return o.$$set=a=>{"refresh"in a&&s(0,l=a.refresh),"$$scope"in a&&s(1,r=a.$$scope)},[l,r,t]}class je extends U{constructor(e){super();z(this,e,Pe,Le,O,{refresh:0})}}function Me(o){let e;const s=o[1].default,t=K(s,o,o[2],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&4)&&Q(t,s,r,r[2],e?X(s,r[2],l,null):R(r[2]),null)},i(r){e||(E(t,r),e=!0)},o(r){T(t,r),e=!1},d(r){t&&t.d(r)}}}function Ne(o){let e,s,t,r,l,a;return t=new Ve({}),l=new je({props:{refresh:o[0],$$slots:{default:[Me]},$$scope:{ctx:o}}}),{c(){e=$("div"),s=$("div"),C(t.$$.fragment),r=P(),C(l.$$.fragment),this.h()},l(n){e=b(n,"DIV",{class:!0});var c=k(e);s=b(c,"DIV",{class:!0});var m=k(s);W(t.$$.fragment,m),r=M(m),W(l.$$.fragment,m),m.forEach(f),c.forEach(f),this.h()},h(){h(s,"class","mt-10 "),h(e,"class","w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 m-auto flex flex-col gap-10 pb-10")},m(n,c){x(n,e,c),d(e,s),F(t,s,null),d(s,r),F(l,s,null),a=!0},p(n,[c]){const m={};c&1&&(m.refresh=n[0]),c&4&&(m.$$scope={dirty:c,ctx:n}),l.$set(m)},i(n){a||(E(t.$$.fragment,n),E(l.$$.fragment,n),a=!0)},o(n){T(t.$$.fragment,n),T(l.$$.fragment,n),a=!1},d(n){n&&f(e),H(t),H(l)}}}const We=async({page:o})=>({props:{key:o.path}});function Oe(o,e,s){let{$$slots:t={},$$scope:r}=e,{key:l}=e;return Z(()=>{ee.updateThemeOnWeb()}),o.$$set=a=>{"key"in a&&s(0,l=a.key),"$$scope"in a&&s(2,r=a.$$scope)},[l,t,r]}class Fe extends U{constructor(e){super();z(this,e,Oe,Ne,O,{key:0})}}export{Fe as default,We as load};
