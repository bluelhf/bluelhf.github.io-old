import{S as e,i as t,s,e as l,a as o,b as n,c as r,d as a,f as c,n as i,g as h,h as d,t as u,u as m,j as f,k as p,l as b,m as w,o as g,p as v,q as y,r as k,v as j}from"./index-a5bcfce5.js";function $(e){let t,s,d,u,m,f,p,b;return{c(){t=l("div"),s=l("div"),s.innerHTML='<img alt="" src="/dist/home/assets/template.webp" width="300" height="150" class="svelte-1cl675z"/>',d=o(),u=l("div"),m=l("a"),f=l("img"),n(s,"class","card-template svelte-1cl675z"),n(f,"alt",""),r(f.src,p=`https://opengraph.githubassets.com/1/${e[0].full_name}`)||n(f,"src",p),n(f,"class","svelte-1cl675z"),n(m,"href",b=e[0].html_url),n(u,"class","card svelte-1cl675z"),n(t,"class","card-wrapper svelte-1cl675z")},m(e,l){a(e,t,l),c(t,s),c(t,d),c(t,u),c(u,m),c(m,f)},p(e,[t]){1&t&&!r(f.src,p=`https://opengraph.githubassets.com/1/${e[0].full_name}`)&&n(f,"src",p),1&t&&b!==(b=e[0].html_url)&&n(m,"href",b)},i:i,o:i,d(e){e&&h(t)}}}function S(e,t,s){let{project:l}=t;return Promise.resolve([]),async function(){try{(await fetch(`https://opengraph.githubassets.com/1/${l.full_name}`,{method:"GET"})).body}catch(e){return{}}}(),e.$$set=e=>{"project"in e&&s(0,l=e.project)},[l]}class I extends e{constructor(e){super(),t(this,e,S,$,s,{project:0})}}function _(e,t,s){const l=e.slice();return l[6]=t[s],l}function x(e){return{c:i,m:i,p:i,i:i,o:i,d:i}}function E(e){let t,s,l,o;const n=[z,T],r=[];return t=function(e,t){return 0!=e[5].length?0:1}(e),s=r[t]=n[t](e),{c(){s.c(),l=b()},m(e,s){r[t].m(e,s),a(e,l,s),o=!0},p(e,t){s.p(e,t)},i(e){o||(f(s),o=!0)},o(e){p(s),o=!1},d(e){r[t].d(e),e&&h(l)}}}function T(e){let t;return{c(){t=l("p"),t.innerHTML='oh no!<br class="svelte-mld2b4"/>\n                it looks like my projects failed to load...<br class="svelte-mld2b4"/>\n                check the console for any errors!<br class="svelte-mld2b4"/>',n(t,"class","svelte-mld2b4")},m(e,s){a(e,t,s)},p:i,i:i,o:i,d(e){e&&h(t)}}}function z(e){let t,s,r,c,i=e[5],d=[];for(let t=0;t<i.length;t+=1)d[t]=D(_(e,i,t));const u=e=>p(d[e],1,1,(()=>{d[e]=null}));return{c(){t=l("h2"),t.textContent="some of my projects",s=o();for(let e=0;e<d.length;e+=1)d[e].c();r=b(),n(t,"class","svelte-mld2b4")},m(e,l){a(e,t,l),a(e,s,l);for(let t=0;t<d.length;t+=1)d[t].m(e,l);a(e,r,l),c=!0},p(e,t){if(4&t){let s;for(i=e[5],s=0;s<i.length;s+=1){const l=_(e,i,s);d[s]?(d[s].p(l,t),f(d[s],1)):(d[s]=D(l),d[s].c(),f(d[s],1),d[s].m(r.parentNode,r))}for(y(),s=i.length;s<d.length;s+=1)u(s);k()}},i(e){if(!c){for(let e=0;e<i.length;e+=1)f(d[e]);c=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)p(d[e]);c=!1},d(e){e&&h(t),e&&h(s),j(d,e),e&&h(r)}}}function D(e){let t,s,r,d;return s=new I({props:{project:e[6]}}),{c(){t=l("div"),w(s.$$.fragment),r=o(),n(t,"class","svelte-mld2b4")},m(e,l){a(e,t,l),g(s,t,null),c(t,r),d=!0},p:i,i(e){d||(f(s.$$.fragment,e),d=!0)},o(e){p(s.$$.fragment,e),d=!1},d(e){e&&h(t),v(s)}}}function L(e){return{c:i,m:i,p:i,i:i,o:i,d:i}}function W(e){let t,s,i,b,w,g,v,y,k,j,$,S,I,_,T,z,D,W,M,A,C,N,P,R,q,F,G,H,J=Math.floor((new Date-new Date("2005-12-21").getTime())/315576e5)+"",O={ctx:e,current:null,token:null,hasCatch:!1,pending:L,then:E,catch:x,value:5,blocks:[,,,]};return d(e[2],O),{c(){t=l("main"),s=l("img"),b=o(),w=l("div"),g=l("h1"),g.textContent="hey, i'm ilari 👨‍💻",v=o(),y=l("a"),k=l("i"),j=o(),$=l("a"),S=l("i"),I=o(),_=l("a"),T=l("i"),z=o(),D=l("a"),W=l("i"),M=o(),A=l("p"),C=u("i'm a "),N=u(J),P=u("-year-old programmer with a particular\n        interest in java ☕"),R=l("br"),q=l("br"),F=u(" i've messed around with all kinds of\n        software and written many projects of my own, too."),G=o(),O.block.c(),n(s,"id","photo"),r(s.src,i=e[0])||n(s,"src",i),n(s,"alt","Ilari Suhonen"),n(s,"class","svelte-mld2b4"),n(g,"class","svelte-mld2b4"),n(k,"class","fab fa-discord svelte-mld2b4"),n(k,"title","@Ilari"),n(y,"class","icon svelte-mld2b4"),n(y,"target","_blank"),n(y,"href",e[1].discord),n(S,"class","fab fa-github svelte-mld2b4"),n(S,"title","@bluelhf"),n($,"class","icon svelte-mld2b4"),n($,"target","_blank"),n($,"href",e[1].github),n(T,"class","fab fa-twitter svelte-mld2b4"),n(T,"title","@IlariSuhonen"),n(_,"class","icon svelte-mld2b4"),n(_,"target","_blank"),n(_,"href",e[1].twitter),n(W,"class","fas fa-th svelte-mld2b4"),n(W,"title","@bluelhf"),n(D,"class","icon svelte-mld2b4"),n(D,"target","_blank"),n(D,"href",e[1].polywork),n(w,"id","header"),n(w,"class","svelte-mld2b4"),n(R,"class","svelte-mld2b4"),n(q,"class","svelte-mld2b4"),n(A,"id","text"),n(A,"class","svelte-mld2b4"),n(t,"class","svelte-mld2b4")},m(e,l){a(e,t,l),c(t,s),c(t,b),c(t,w),c(w,g),c(w,v),c(w,y),c(y,k),c(w,j),c(w,$),c($,S),c(w,I),c(w,_),c(_,T),c(w,z),c(w,D),c(D,W),c(t,M),c(t,A),c(A,C),c(A,N),c(A,P),c(A,R),c(A,q),c(A,F),c(t,G),O.block.m(t,O.anchor=null),O.mount=()=>t,O.anchor=null,H=!0},p(t,[l]){e=t,(!H||1&l&&!r(s.src,i=e[0]))&&n(s,"src",i),m(O,e,l)},i(e){H||(f(O.block),H=!0)},o(e){for(let e=0;e<3;e+=1){const t=O.blocks[e];p(t)}H=!1},d(e){e&&h(t),O.block.d(),O.token=null,O=null}}}function M(e,t,s){let{src:l,user:o}=t;Array.prototype.asyncFilter=function(e){const t=this;return new Promise((function(s){const l=[];t.forEach((function(t){l.push(e(t))})),Promise.all(l).then((function(e){const l=t.filter((function(t,s){return e[s]}));s(l)}))}))};let n=async function(){let e=window.localStorage.getItem("project-cache-death");if(null!=e&&Date.now()<e)return JSON.parse(window.localStorage.getItem("project-cache"));try{let e=await fetch(`https://api.github.com/users/${o}/repos`,{method:"GET",referrer:document.URL});if(!e.ok)throw new Error((await e.json()).message);return e=await e.json(),e=await e.asyncFilter((async e=>(await fetch(`https://api.github.com/repos/${e.full_name}/contents/README.md`)).ok&&!e.fork&&!e.name.includes("bluelhf"))),e}catch(e){return console.log(`${e}\n\nThere would usually be a list of my projects on the site,\nbut something went wrong while fetching the projects,\nso they won't be shown.`),[]}}();return n.then((e=>{window.localStorage.setItem("project-cache",JSON.stringify(e)),window.localStorage.setItem("project-cache-death",Date.now()+72e5)})),e.$$set=e=>{"src"in e&&s(0,l=e.src),"user"in e&&s(3,o=e.user)},[l,{discord:"https://discord.com/users/135726926886207488",twitter:"https://twitter.com/IlariSuhonen",github:"https://github.com/bluelhf/",polywork:"https://poly.work/bluelhf/"},n,o]}window.addEventListener("load",(function(){let e=0,t=0;[...document.querySelectorAll("[data-src]")].forEach((s=>{t++,console.log(t),s.onload=()=>e++,s.src=s.dataset.src})),setInterval((async()=>{e<t||document.body.classList.remove("js-loading")}),100)}));let A=[window.outerWidth,window.outerWidth];setInterval((()=>{window.outerWidth!=A[0]&&window.outerWidth==A[1]&&(console.log("The size of the viewport has changed without a reload.\nThis fucks with the vw unit on some browsers for some reason.\nReloading to accommodate."),location.reload()),A[0]=A[1],A[1]=window.outerWidth}),100);const C=new class extends e{constructor(e){super(),t(this,e,M,W,s,{src:0,user:3})}}({target:document.body,props:{src:"/dist/home/assets/picrew.webp",user:"bluelhf"}});export{C as default};
//# sourceMappingURL=home.js.map
