import{S as A,i as D,s as N,D as G,e as p,c as g,a as k,d as o,b as d,E as T,f as b,F as J,G as K,H as P,x as m,u as h,t as V,g as L,I as $,k as M,j,n as H,m as S,o as q,v as C,A as U,J as W,K as X,L as Y,l as z,r as Z,M as x,w as ee,N as B}from"../chunks/vendor-98b87ea9.js";function te(f){let e,l;const n=f[3].default,t=G(n,f,f[2],null);return{c(){e=p("a"),t&&t.c(),this.h()},l(a){e=g(a,"A",{class:!0,href:!0});var s=k(e);t&&t.l(s),s.forEach(o),this.h()},h(){d(e,"class","md:text-lg text-green-800 font-semibold svelte-sir4ul"),d(e,"href",f[0]),T(e,"selected",f[1])},m(a,s){b(a,e,s),t&&t.m(e,null),l=!0},p(a,[s]){t&&t.p&&(!l||s&4)&&J(t,n,a,a[2],l?P(n,a[2],s,null):K(a[2]),null),(!l||s&1)&&d(e,"href",a[0]),s&2&&T(e,"selected",a[1])},i(a){l||(m(t,a),l=!0)},o(a){h(t,a),l=!1},d(a){a&&o(e),t&&t.d(a)}}}function se(f,e,l){let{$$slots:n={},$$scope:t}=e,{href:a=""}=e,{selected:s=!1}=e;return f.$$set=r=>{"href"in r&&l(0,a=r.href),"selected"in r&&l(1,s=r.selected),"$$scope"in r&&l(2,t=r.$$scope)},[a,s,t,n]}class O extends A{constructor(e){super();D(this,e,se,te,N,{href:0,selected:1})}}function le(f){let e;return{c(){e=V("Inicio")},l(l){e=L(l,"Inicio")},m(l,n){b(l,e,n)},d(l){l&&o(e)}}}function ne(f){let e;return{c(){e=V("Acerca de")},l(l){e=L(l,"Acerca de")},m(l,n){b(l,e,n)},d(l){l&&o(e)}}}function Q(f){let e,l;return{c(){e=p("a"),l=V("Nueva publicaci\xF3n"),this.h()},l(n){e=g(n,"A",{href:!0,class:!0});var t=k(e);l=L(t,"Nueva publicaci\xF3n"),t.forEach(o),this.h()},h(){d(e,"href","/publisher"),d(e,"class","font-bold text-green-900 md:text-lg")},m(n,t){b(n,e,t),$(e,l)},d(n){n&&o(e)}}}function ae(f){let e,l,n,t,a,s,r,i,v,F,I;r=new O({props:{href:"/",$$slots:{default:[le]},$$scope:{ctx:f}}}),v=new O({props:{href:"/about",$$slots:{default:[ne]},$$scope:{ctx:f}}});let c=f[0]&&Q();return{c(){e=p("nav"),l=p("div"),n=p("h3"),t=V("Mi blog"),a=M(),s=p("div"),j(r.$$.fragment),i=M(),j(v.$$.fragment),F=M(),c&&c.c(),this.h()},l(u){e=g(u,"NAV",{class:!0});var _=k(e);l=g(_,"DIV",{});var y=k(l);n=g(y,"H3",{class:!0});var E=k(n);t=L(E,"Mi blog"),E.forEach(o),y.forEach(o),a=H(_),s=g(_,"DIV",{class:!0});var w=k(s);S(r.$$.fragment,w),i=H(w),S(v.$$.fragment,w),F=H(w),c&&c.l(w),w.forEach(o),_.forEach(o),this.h()},h(){d(n,"class","text-lg md:text-2xl"),d(s,"class","flex gap-6 items-center"),d(e,"class","flex items-center justify-between")},m(u,_){b(u,e,_),$(e,l),$(l,n),$(n,t),$(e,a),$(e,s),q(r,s,null),$(s,i),q(v,s,null),$(s,F),c&&c.m(s,null),I=!0},p(u,[_]){const y={};_&2&&(y.$$scope={dirty:_,ctx:u}),r.$set(y);const E={};_&2&&(E.$$scope={dirty:_,ctx:u}),v.$set(E),u[0]?c||(c=Q(),c.c(),c.m(s,null)):c&&(c.d(1),c=null)},i(u){I||(m(r.$$.fragment,u),m(v.$$.fragment,u),I=!0)},o(u){h(r.$$.fragment,u),h(v.$$.fragment,u),I=!1},d(u){u&&o(e),C(r),C(v),c&&c.d()}}}function re(f,e,l){let n=!1;return U(()=>{l(0,n=window.location.hostname==="localhost")}),[n]}class fe extends A{constructor(e){super();D(this,e,re,ae,N,{})}}function R(f){let e,l,n,t;const a=f[2].default,s=G(a,f,f[1],null);return{c(){e=p("div"),s&&s.c()},l(r){e=g(r,"DIV",{});var i=k(e);s&&s.l(i),i.forEach(o)},m(r,i){b(r,e,i),s&&s.m(e,null),t=!0},p(r,i){s&&s.p&&(!t||i&2)&&J(s,a,r,r[1],t?P(a,r[1],i,null):K(r[1]),null)},i(r){t||(m(s,r),W(()=>{n&&n.end(1),l=X(e,B,{duration:100,delay:150}),l.start()}),t=!0)},o(r){h(s,r),l&&l.invalidate(),n=Y(e,B,{duration:150}),t=!1},d(r){r&&o(e),s&&s.d(r),r&&n&&n.end()}}}function oe(f){let e=f[0],l,n,t=R(f);return{c(){t.c(),l=z()},l(a){t.l(a),l=z()},m(a,s){t.m(a,s),b(a,l,s),n=!0},p(a,[s]){s&1&&N(e,e=a[0])?(Z(),h(t,1,1,x),ee(),t=R(a),t.c(),m(t),t.m(l.parentNode,l)):t.p(a,s)},i(a){n||(m(t),n=!0)},o(a){h(t),n=!1},d(a){a&&o(l),t.d(a)}}}function ie(f,e,l){let{$$slots:n={},$$scope:t}=e,{refresh:a=""}=e;return f.$$set=s=>{"refresh"in s&&l(0,a=s.refresh),"$$scope"in s&&l(1,t=s.$$scope)},[a,t,n]}class ce extends A{constructor(e){super();D(this,e,ie,oe,N,{refresh:0})}}function ue(f){let e;const l=f[1].default,n=G(l,f,f[2],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,a){n&&n.m(t,a),e=!0},p(t,a){n&&n.p&&(!e||a&4)&&J(n,l,t,t[2],e?P(l,t[2],a,null):K(t[2]),null)},i(t){e||(m(n,t),e=!0)},o(t){h(n,t),e=!1},d(t){n&&n.d(t)}}}function _e(f){let e,l,n,t,a;return l=new fe({}),t=new ce({props:{refresh:f[0],$$slots:{default:[ue]},$$scope:{ctx:f}}}),{c(){e=p("div"),j(l.$$.fragment),n=M(),j(t.$$.fragment),this.h()},l(s){e=g(s,"DIV",{class:!0});var r=k(e);S(l.$$.fragment,r),n=H(r),S(t.$$.fragment,r),r.forEach(o),this.h()},h(){d(e,"class","w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 m-auto mt-10 flex flex-col gap-10 pb-10")},m(s,r){b(s,e,r),q(l,e,null),$(e,n),q(t,e,null),a=!0},p(s,[r]){const i={};r&1&&(i.refresh=s[0]),r&4&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){a||(m(l.$$.fragment,s),m(t.$$.fragment,s),a=!0)},o(s){h(l.$$.fragment,s),h(t.$$.fragment,s),a=!1},d(s){s&&o(e),C(l),C(t)}}}const he=async({page:f})=>({props:{key:f.path}});function de(f,e,l){let{$$slots:n={},$$scope:t}=e,{key:a}=e;return f.$$set=s=>{"key"in s&&l(0,a=s.key),"$$scope"in s&&l(2,t=s.$$scope)},[a,n,t]}class $e extends A{constructor(e){super();D(this,e,de,_e,N,{key:0})}}export{$e as default,he as load};