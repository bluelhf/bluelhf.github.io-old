var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,s;function i(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function g(){return d(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){s=t}function b(){if(!s)throw new Error("Function called outside component initialization");return s}const v=[],w=[],$=[],k=[],x=Promise.resolve();let y=!1;function _(t){$.push(t)}let I=!1;const E=new Set;function j(){if(!I){I=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];m(e),C(e.$$)}for(m(null),v.length=0;w.length;)w.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];E.has(e)||(E.add(e),e())}$.length=0}while(v.length);for(;k.length;)k.pop()();y=!1,I=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const z=new Set;let S;function T(){S={r:0,c:[],p:S}}function A(){S.r||o(S.c),S=S.p}function W(t,e){t&&t.i&&(z.delete(t),t.i(e))}function N(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),S.c.push((()=>{z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function L(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let l=e.ctx;void 0!==r&&(l=l.slice(),l[r]=c);const s=t&&(e.current=t)(l);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(T(),N(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),A())})):e.block.d(1),s.c(),W(s,1),s.m(e.mount(),e.anchor),i=!0),e.block=s,e.blocks&&(e.blocks[o]=s),i&&j()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=b();if(t.then((t=>{m(n),o(e.then,1,e.value,t),m(null)}),(t=>{if(m(n),o(e.catch,2,e.error,t),m(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function M(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}function O(t,n,c,l){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,c),l||_((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(_)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(v.push(t),y||(y=!0,x.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,c,l,i,a,u,h=[-1]){const d=s;m(e);const g=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||d.$$.root};u&&u(g.root);let p=!1;if(g.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),p&&B(e,t)),n})):[],g.update(),p=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();r.intro&&W(e.$$.fragment),O(e,r.target,r.anchor,r.customElement),j()}m(d)}class P{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){return{c:t,m:t,p:t,d:t}}function F(t){let e,n,o,r,c,l;return{c(){e=h("div"),n=h("a"),o=h("img"),p(o,"alt",""),i(o.src,r=t[3].ogImage.url)||p(o,"src",r),p(o,"width",c=t[3].ogImage.width),p(o,"height",l=t[3].ogImage.height),p(o,"class","svelte-1cl675z"),p(n,"href",t[0]),p(e,"class","card svelte-1cl675z")},m(t,r){u(t,e,r),a(e,n),a(n,o)},p(t,e){2&e&&!i(o.src,r=t[3].ogImage.url)&&p(o,"src",r),2&e&&c!==(c=t[3].ogImage.width)&&p(o,"width",c),2&e&&l!==(l=t[3].ogImage.height)&&p(o,"height",l),1&e&&p(n,"href",t[0])},d(t){t&&f(e)}}}function G(e){return{c:t,m:t,p:t,d:t}}function H(e){let n,o,r,c,l={ctx:e,current:null,token:null,hasCatch:!1,pending:G,then:F,catch:R,value:3};return L(c=e[1],l),{c(){n=h("div"),o=h("div"),o.innerHTML='<img alt="" src="build/assets/template.webp" width="300" height="150" class="svelte-1cl675z"/>',r=g(),l.block.c(),p(o,"class","card-template svelte-1cl675z"),p(n,"class","card-wrapper svelte-1cl675z")},m(t,e){u(t,n,e),a(n,o),a(n,r),l.block.m(n,l.anchor=null),l.mount=()=>n,l.anchor=null},p(t,[n]){e=t,l.ctx=e,2&n&&c!==(c=e[1])&&L(c,l)||M(l,e,n)},i:t,o:t,d(t){t&&f(n),l.block.d(),l.token=null,l=null}}}function U(t,e,n){let{href:o}=e,r=Promise.resolve([]);return r=async function(){const t=await fetch("https://api.lhf.blue/preview?url="+encodeURIComponent(o),{method:"GET"});return await t.json()}(),t.$$set=t=>{"href"in t&&n(0,o=t.href)},[o,r]}class J extends P{constructor(t){super(),D(this,t,U,H,c,{href:0})}}function K(t,e,n){const o=t.slice();return o[4]=e[n],o}function Q(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function V(t){let e,n,o=t[3],r=[];for(let e=0;e<o.length;e+=1)r[e]=X(K(t,o,e));const c=t=>N(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=d("")},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);u(t,e,o),n=!0},p(t,n){if(4&n){let l;for(o=t[3],l=0;l<o.length;l+=1){const c=K(t,o,l);r[l]?(r[l].p(c,n),W(r[l],1)):(r[l]=X(c),r[l].c(),W(r[l],1),r[l].m(e.parentNode,e))}for(T(),l=o.length;l<r.length;l+=1)c(l);A()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)W(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)N(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&f(e)}}}function X(e){let n,o,r,c;return o=new J({props:{href:e[4].html_url}}),{c(){var t;n=h("div"),(t=o.$$.fragment)&&t.c(),r=g()},m(t,e){u(t,n,e),O(o,n,null),a(n,r),c=!0},p:t,i(t){c||(W(o.$$.fragment,t),c=!0)},o(t){N(o.$$.fragment,t),c=!1},d(t){t&&f(n),q(o)}}}function Y(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Z(t){let e,n,o,r,c,l,s,m,b,v,w,$,k,x,y,_,I,E,j,C,z,S,T,A,O,q,B,D,P,R,F=Math.floor((new Date-new Date("2005-12-21").getTime())/315576e5)+"",G={ctx:t,current:null,token:null,hasCatch:!1,pending:Y,then:V,catch:Q,value:3,blocks:[,,,]};return L(t[2],G),{c(){e=h("main"),n=h("img"),r=g(),c=h("div"),l=h("h1"),l.textContent="hey, i'm ilari 👨‍💻",s=g(),m=h("a"),b=h("i"),v=g(),w=h("a"),$=h("i"),k=g(),x=h("a"),y=h("i"),_=g(),I=h("a"),E=h("i"),j=g(),C=h("p"),z=d("i'm a "),S=d(F),T=d("-year-old programmer with a particular\n\t\tinterest in java ☕"),A=h("br"),O=h("br"),q=d(" i've messed around with all kinds of\n\t\tsoftware and written many projects of my own, too."),B=g(),D=h("h2"),D.textContent="some of my projects",P=g(),G.block.c(),p(n,"id","photo"),i(n.src,o=t[0])||p(n,"src",o),p(n,"alt","Ilari Suhonen"),p(n,"class","svelte-hxfgvd"),p(l,"class","svelte-hxfgvd"),p(b,"class","fab fa-discord svelte-hxfgvd"),p(b,"title","@Ilari"),p(m,"class","icon svelte-hxfgvd"),p(m,"target","_blank"),p(m,"href",t[1].discord),p($,"class","fab fa-github svelte-hxfgvd"),p($,"title","@bluelhf"),p(w,"class","icon svelte-hxfgvd"),p(w,"target","_blank"),p(w,"href",t[1].github),p(y,"class","fab fa-twitter svelte-hxfgvd"),p(y,"title","@IlariSuhonen"),p(x,"class","icon svelte-hxfgvd"),p(x,"target","_blank"),p(x,"href",t[1].twitter),p(E,"class","fas fa-th svelte-hxfgvd"),p(E,"title","@bluelhf"),p(I,"class","icon svelte-hxfgvd"),p(I,"target","_blank"),p(I,"href",t[1].polywork),p(c,"id","header"),p(c,"class","svelte-hxfgvd"),p(C,"id","text"),p(C,"class","svelte-hxfgvd"),p(e,"class","svelte-hxfgvd")},m(t,o){u(t,e,o),a(e,n),a(e,r),a(e,c),a(c,l),a(c,s),a(c,m),a(m,b),a(c,v),a(c,w),a(w,$),a(c,k),a(c,x),a(x,y),a(c,_),a(c,I),a(I,E),a(e,j),a(e,C),a(C,z),a(C,S),a(C,T),a(C,A),a(C,O),a(C,q),a(e,B),a(e,D),a(e,P),G.block.m(e,G.anchor=null),G.mount=()=>e,G.anchor=null,R=!0},p(e,[r]){t=e,(!R||1&r&&!i(n.src,o=t[0]))&&p(n,"src",o),M(G,t,r)},i(t){R||(W(G.block),R=!0)},o(t){for(let t=0;t<3;t+=1){N(G.blocks[t])}R=!1},d(t){t&&f(e),G.block.d(),G.token=null,G=null}}}function tt(t,e,n){let{src:o}=e,r=async function(){let t=await fetch("https://api.lhf.blue/projects/");return t=t.json(),t}();return t.$$set=t=>{"src"in t&&n(0,o=t.src)},[o,{discord:"https://discord.com/users/135726926886207488",twitter:"https://twitter.com/IlariSuhonen",github:"https://github.com/bluelhf/",polywork:"https://poly.work/bluelhf/"},r]}window.addEventListener("load",(function(){let t=0,e=0;[...document.querySelectorAll("[data-src]")].forEach((n=>{e++,console.log(e),n.onload=()=>t++,n.src=n.dataset.src})),setInterval((async()=>{t<e||document.body.classList.remove("js-loading")}),100)}));let et=[window.outerWidth,window.outerWidth];setInterval((()=>{window.outerWidth!=et[0]&&window.outerWidth==et[1]&&(console.log("The size of the viewport has changed without a reload.\nThis fucks with the vw unit on some browsers for some reason.\nReloading to accommodate."),location.reload()),et[0]=et[1],et[1]=window.outerWidth}),100);return new class extends P{constructor(t){super(),D(this,t,tt,Z,c,{src:0})}}({target:document.body,props:{src:"build/assets/picrew.webp"}})}();
//# sourceMappingURL=bundle.js.map