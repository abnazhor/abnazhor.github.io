import{S as L,i as j,s as M,D as F,e as v,c as p,a as g,d as _,b as $,E as G,f as w,F as J,G as K,H as z,x as A,u as N,t as D,g as V,I as h,k as x,j as H,n as y,m as S,o as q,v as C,A as R,J as T,K as B,L as O}from"../chunks/vendor-f5a5d7f4.js";function U(i){let e,t;const l=i[3].default,s=F(l,i,i[2],null);return{c(){e=v("a"),s&&s.c(),this.h()},l(a){e=p(a,"A",{class:!0,href:!0});var n=g(e);s&&s.l(n),n.forEach(_),this.h()},h(){$(e,"class","md:text-lg text-green-900 font-semibold svelte-epi15r"),$(e,"href",i[0]),G(e,"selected",i[1])},m(a,n){w(a,e,n),s&&s.m(e,null),t=!0},p(a,[n]){s&&s.p&&(!t||n&4)&&J(s,l,a,a[2],t?z(l,a[2],n,null):K(a[2]),null),(!t||n&1)&&$(e,"href",a[0]),n&2&&G(e,"selected",a[1])},i(a){t||(A(s,a),t=!0)},o(a){N(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function W(i,e,t){let{$$slots:l={},$$scope:s}=e,{href:a=""}=e,{selected:n=!1}=e;return i.$$set=f=>{"href"in f&&t(0,a=f.href),"selected"in f&&t(1,n=f.selected),"$$scope"in f&&t(2,s=f.$$scope)},[a,n,s,l]}class P extends L{constructor(e){super();j(this,e,W,U,M,{href:0,selected:1})}}function X(i){let e;return{c(){e=D("Inicio")},l(t){e=V(t,"Inicio")},m(t,l){w(t,e,l)},d(t){t&&_(e)}}}function Y(i){let e;return{c(){e=D("Acerca de")},l(t){e=V(t,"Acerca de")},m(t,l){w(t,e,l)},d(t){t&&_(e)}}}function Q(i){let e,t;return{c(){e=v("a"),t=D("Nueva publicaci\xF3n"),this.h()},l(l){e=p(l,"A",{href:!0,class:!0});var s=g(e);t=V(s,"Nueva publicaci\xF3n"),s.forEach(_),this.h()},h(){$(e,"href","/publisher"),$(e,"class","font-bold text-green-900 md:text-lg")},m(l,s){w(l,e,s),h(e,t)},d(l){l&&_(e)}}}function Z(i){let e,t,l,s,a,n,f,o,r,d,b;f=new P({props:{href:"/",$$slots:{default:[X]},$$scope:{ctx:i}}}),r=new P({props:{href:"/about",$$slots:{default:[Y]},$$scope:{ctx:i}}});let c=i[0]&&Q();return{c(){e=v("nav"),t=v("div"),l=v("h3"),s=D("Mi blog"),a=x(),n=v("div"),H(f.$$.fragment),o=x(),H(r.$$.fragment),d=x(),c&&c.c(),this.h()},l(u){e=p(u,"NAV",{class:!0});var m=g(e);t=p(m,"DIV",{});var E=g(t);l=p(E,"H3",{class:!0});var I=g(l);s=V(I,"Mi blog"),I.forEach(_),E.forEach(_),a=y(m),n=p(m,"DIV",{class:!0});var k=g(n);S(f.$$.fragment,k),o=y(k),S(r.$$.fragment,k),d=y(k),c&&c.l(k),k.forEach(_),m.forEach(_),this.h()},h(){$(l,"class","text-lg md:text-2xl"),$(n,"class","flex gap-6 items-center"),$(e,"class","flex items-center justify-between")},m(u,m){w(u,e,m),h(e,t),h(t,l),h(l,s),h(e,a),h(e,n),q(f,n,null),h(n,o),q(r,n,null),h(n,d),c&&c.m(n,null),b=!0},p(u,[m]){const E={};m&2&&(E.$$scope={dirty:m,ctx:u}),f.$set(E);const I={};m&2&&(I.$$scope={dirty:m,ctx:u}),r.$set(I),u[0]?c||(c=Q(),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},i(u){b||(A(f.$$.fragment,u),A(r.$$.fragment,u),b=!0)},o(u){N(f.$$.fragment,u),N(r.$$.fragment,u),b=!1},d(u){u&&_(e),C(f),C(r),c&&c.d()}}}function ee(i,e,t){let l=!1;return R(()=>{t(0,l=window.location.hostname==="localhost")}),[l]}class te extends L{constructor(e){super();j(this,e,ee,Z,M,{})}}function se(i){let e,t,l,s,a,n;t=new te({});const f=i[1].default,o=F(f,i,i[0],null);return{c(){e=v("div"),H(t.$$.fragment),l=x(),s=v("div"),o&&o.c(),this.h()},l(r){e=p(r,"DIV",{class:!0});var d=g(e);S(t.$$.fragment,d),l=y(d),s=p(d,"DIV",{});var b=g(s);o&&o.l(b),b.forEach(_),d.forEach(_),this.h()},h(){$(e,"class","w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 m-auto mt-10 flex flex-col gap-10 pb-10")},m(r,d){w(r,e,d),q(t,e,null),h(e,l),h(e,s),o&&o.m(s,null),n=!0},p(r,[d]){o&&o.p&&(!n||d&1)&&J(o,f,r,r[0],n?z(f,r[0],d,null):K(r[0]),null)},i(r){n||(A(t.$$.fragment,r),A(o,r),T(()=>{a||(a=B(s,O,{duration:50},!0)),a.run(1)}),n=!0)},o(r){N(t.$$.fragment,r),N(o,r),a||(a=B(s,O,{duration:50},!1)),a.run(0),n=!1},d(r){r&&_(e),C(t),o&&o.d(r),r&&a&&a.end()}}}function ae(i,e,t){let{$$slots:l={},$$scope:s}=e;return i.$$set=a=>{"$$scope"in a&&t(0,s=a.$$scope)},[s,l]}class ne extends L{constructor(e){super();j(this,e,ae,se,M,{})}}export{ne as default};
