import{S as M,i as H,s as S,D as G,e as $,c as v,a as p,d as u,b as h,E as x,f as b,F as z,G as B,H as J,x as E,u as A,t as N,g as D,I as m,k as V,j as q,n as j,m as y,o as C,v as F,A as P}from"../chunks/vendor-b5747eef.js";function Q(f){let e,t;const n=f[3].default,l=G(n,f,f[2],null);return{c(){e=$("a"),l&&l.c(),this.h()},l(r){e=v(r,"A",{href:!0,class:!0});var s=p(e);l&&l.l(s),s.forEach(u),this.h()},h(){h(e,"href",f[0]),h(e,"class","svelte-epi15r"),x(e,"selected",f[1])},m(r,s){b(r,e,s),l&&l.m(e,null),t=!0},p(r,[s]){l&&l.p&&(!t||s&4)&&z(l,n,r,r[2],t?J(n,r[2],s,null):B(r[2]),null),(!t||s&1)&&h(e,"href",r[0]),s&2&&x(e,"selected",r[1])},i(r){t||(E(l,r),t=!0)},o(r){A(l,r),t=!1},d(r){r&&u(e),l&&l.d(r)}}}function R(f,e,t){let{$$slots:n={},$$scope:l}=e,{href:r=""}=e,{selected:s=!1}=e;return f.$$set=a=>{"href"in a&&t(0,r=a.href),"selected"in a&&t(1,s=a.selected),"$$scope"in a&&t(2,l=a.$$scope)},[r,s,l,n]}class K extends M{constructor(e){super();H(this,e,R,Q,S,{href:0,selected:1})}}function T(f){let e;return{c(){e=N("Inicio")},l(t){e=D(t,"Inicio")},m(t,n){b(t,e,n)},d(t){t&&u(e)}}}function U(f){let e;return{c(){e=N("Acerca de")},l(t){e=D(t,"Acerca de")},m(t,n){b(t,e,n)},d(t){t&&u(e)}}}function O(f){let e,t;return{c(){e=$("a"),t=N("Nueva publicaci\xF3n"),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var l=p(e);t=D(l,"Nueva publicaci\xF3n"),l.forEach(u),this.h()},h(){h(e,"href","/publisher"),h(e,"class","font-bold text-green-900")},m(n,l){b(n,e,l),m(e,t)},d(n){n&&u(e)}}}function W(f){let e,t,n,l,r,s,a,c,d,L,I;a=new K({props:{href:"/",$$slots:{default:[T]},$$scope:{ctx:f}}}),d=new K({props:{href:"/about",$$slots:{default:[U]},$$scope:{ctx:f}}});let i=f[0]&&O();return{c(){e=$("nav"),t=$("div"),n=$("h3"),l=N("Mi blog"),r=V(),s=$("div"),q(a.$$.fragment),c=V(),q(d.$$.fragment),L=V(),i&&i.c(),this.h()},l(o){e=v(o,"NAV",{class:!0});var _=p(e);t=v(_,"DIV",{});var k=p(t);n=v(k,"H3",{class:!0});var w=p(n);l=D(w,"Mi blog"),w.forEach(u),k.forEach(u),r=j(_),s=v(_,"DIV",{class:!0});var g=p(s);y(a.$$.fragment,g),c=j(g),y(d.$$.fragment,g),L=j(g),i&&i.l(g),g.forEach(u),_.forEach(u),this.h()},h(){h(n,"class","text-xl"),h(s,"class","flex gap-6 items-center"),h(e,"class","flex items-center justify-between")},m(o,_){b(o,e,_),m(e,t),m(t,n),m(n,l),m(e,r),m(e,s),C(a,s,null),m(s,c),C(d,s,null),m(s,L),i&&i.m(s,null),I=!0},p(o,[_]){const k={};_&2&&(k.$$scope={dirty:_,ctx:o}),a.$set(k);const w={};_&2&&(w.$$scope={dirty:_,ctx:o}),d.$set(w),o[0]?i||(i=O(),i.c(),i.m(s,null)):i&&(i.d(1),i=null)},i(o){I||(E(a.$$.fragment,o),E(d.$$.fragment,o),I=!0)},o(o){A(a.$$.fragment,o),A(d.$$.fragment,o),I=!1},d(o){o&&u(e),F(a),F(d),i&&i.d()}}}function X(f,e,t){let n=!1;return P(()=>{t(0,n=window.location.hostname==="localhost")}),[n]}class Y extends M{constructor(e){super();H(this,e,X,W,S,{})}}function Z(f){let e,t,n,l;t=new Y({});const r=f[1].default,s=G(r,f,f[0],null);return{c(){e=$("div"),q(t.$$.fragment),n=V(),s&&s.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var c=p(e);y(t.$$.fragment,c),n=j(c),s&&s.l(c),c.forEach(u),this.h()},h(){h(e,"class","w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 m-auto mt-10 flex flex-col gap-10 mb-24")},m(a,c){b(a,e,c),C(t,e,null),m(e,n),s&&s.m(e,null),l=!0},p(a,[c]){s&&s.p&&(!l||c&1)&&z(s,r,a,a[0],l?J(r,a[0],c,null):B(a[0]),null)},i(a){l||(E(t.$$.fragment,a),E(s,a),l=!0)},o(a){A(t.$$.fragment,a),A(s,a),l=!1},d(a){a&&u(e),F(t),s&&s.d(a)}}}function ee(f,e,t){let{$$slots:n={},$$scope:l}=e;return f.$$set=r=>{"$$scope"in r&&t(0,l=r.$$scope)},[l,n]}class se extends M{constructor(e){super();H(this,e,ee,Z,S,{})}}export{se as default};