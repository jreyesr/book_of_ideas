(()=>{"use strict";var e={2318:(e,t,r)=>{r(7280),r(5363),r(71);var n=r(8880),i=r(9592),o=r(3673);function s(e,t,r,n,i,s){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}const a=(0,o.aZ)({name:"App"});a.render=s;const l=a;var d=r(3381),c=r(7083),u=r(9582);const f=[{path:"/",component:()=>Promise.all([r.e(736),r.e(255)]).then(r.bind(r,8255)),children:[{path:"",name:"home",component:()=>Promise.all([r.e(736),r.e(64),r.e(202)]).then(r.bind(r,9423))},{path:"list/:id",name:"list",component:()=>Promise.all([r.e(736),r.e(64),r.e(88)]).then(r.bind(r,9143))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],m=f,h=(0,c.BC)((function({store:e}){const t=u.r5,r=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:t("")});return r.beforeEach((t=>{e.commit("search/clearSearchTerm"),"list"==t.name?e.commit("search/changeViewedList",e.getters["main/findListById"](t.params.id)):e.commit("search/changeViewedList",null)})),r}));async function p(e,t){const n="function"===typeof d.default?await(0,d.default)({}):d.default,{storeKey:o}=await Promise.resolve().then(r.bind(r,3381)),s="function"===typeof h?await h({store:n}):h;n.$router=s;const a=e(l);return a.use(i.Z,t),{app:a,store:n,storeKey:o,router:s}}var v=r(6417),g=r(1791),b=r(8229);const w={config:{},plugins:{Notify:v.Z,Dialog:g.Z,Meta:b.ZP}},y="";async function L({app:e,router:t,store:r,storeKey:n},i){let o=!1;const s=e=>{o=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,"");for(let d=0;!1===o&&d<i.length;d++)try{await i[d]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:a,publicPath:y})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.use(r,n),e.mount("#q-app"))}p(n.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,3731))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));L(e,r)}))))},3731:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d,fuseGeneral:()=>a,fuseList:()=>l});r(7280);var n=r(7083),i=r(7113);const o={shouldSort:!1,threshold:.4,keys:["name","description","items.name","items.description","items.url"]},s={shouldSort:!1,keys:["name","description","url"]},a=new i.Z([],o),l=new i.Z([],s),d=(0,n.xr)((({store:e})=>{var t;a.setCollection(e.state.main.lists),l.setCollection(null!==(t=e.state.search.currentList)&&void 0!==t?t:[])}))},3381:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var n={};r.r(n),r.d(n,{findListById:()=>f});var i={};r.r(i),r.d(i,{addNewIdea:()=>b,addNewList:()=>p,changeListOrder:()=>y,deleteIdea:()=>w,deleteList:()=>g,editList:()=>v,toggleStar:()=>L});var o={};r.r(o),r.d(o,{addNewIdea:()=>T,addNewList:()=>I,changeListOrder:()=>S,deleteIdea:()=>P,deleteList:()=>O,editList:()=>k});var s={};r.r(s),r.d(s,{filtered:()=>_,filteredIdeas:()=>x});var a={};r.r(a),r.d(a,{changeSearchTerm:()=>A,changeViewedList:()=>Z,clearSearchTerm:()=>E});var l={};r.r(l),r.d(l,{someAction:()=>B});var d=r(7083),c=r(7874);function u(){return{lists:[]}}function f(e){return t=>e.lists.find((e=>e.id==t))}var m=r(4259);const h=(e,t)=>e.lists.findIndex((e=>e.id==t));function p(e,{data:t}){t.id=(0,m.Z)(),t.items=[],e.lists.push(t)}function v(e,{data:t}){const r=h(e,t.id);e.lists[r]=t}function g(e,{listId:t}){e.lists.splice(h(e,t),1)}function b(e,{listId:t,idea:r}){const n=h(e,t);-1!=n?(r.id=(0,m.Z)(),r.starred=!1,e.lists[n].items.push(r)):console.error(`Couldn't find list with ID ${t}!`)}function w(e,{listId:t,ideaId:r}){const n=h(e,t);if(-1==n)return void console.error(`Couldn't find list with ID ${t}!`);const i=e.lists[n].items.findIndex((e=>e.id==r));e.lists[n].items.splice(i,1)}function y(e,{listId:t,newOrder:r}){const n=h(e,t);-1!=n?e.lists[n].items=r:console.error(`Couldn't find list with ID ${t}!`)}function L(e,{listId:t,itemIndex:r}){var n;const i=h(e,t);-1!=i?e.lists[i].items[r].starred=!(null!==(n=e.lists[i].items[r].starred)&&void 0!==n&&n):console.error(`Couldn't find list with ID ${t}!`)}var C=r(3731);function I({commit:e,state:t},r){e("addNewList",r),C.fuseGeneral.setCollection(t.lists)}function k({commit:e,state:t},r){e("editList",r),C.fuseGeneral.setCollection(t.lists)}function O({commit:e,state:t},r){e("deleteList",r),C.fuseGeneral.setCollection(t.lists)}function T({commit:e,state:t},r){e("addNewIdea",r),r.refreshIndex&&e("search/changeViewedList",f(t)(r.listId),{root:!0}),C.fuseGeneral.setCollection(t.lists)}function P({commit:e,state:t},r){e("deleteIdea",r),e("search/changeViewedList",f(t)(r.listId),{root:!0}),C.fuseGeneral.setCollection(t.lists)}function S({commit:e,state:t},r){e("changeListOrder",r),e("search/changeViewedList",f(t)(r.listId),{root:!0})}const j={namespaced:!0,getters:n,mutations:i,actions:o,state:u};function N(){return{searchTerm:"",currentList:null}}r(7280);function _(e,t,r){return""==e.searchTerm?r.main.lists:C.fuseGeneral.search(e.searchTerm).map((e=>e.item))}function x(e,t,r){return null!=e.currentList?""==e.searchTerm?e.currentList.items:C.fuseList.search(e.searchTerm).map((e=>e.item)):[]}function A(e,t){e.searchTerm=t}function E(e){A(e,"")}function Z(e,t){var r;C.fuseList.setCollection(null!==(r=null===t||void 0===t?void 0:t.items)&&void 0!==r?r:[]),e.currentList=t}function B(){}const D={namespaced:!0,getters:s,mutations:a,actions:l,state:N},G=(0,d.h)((function(){const e=(0,c.MT)({modules:{main:j,search:D},strict:!1});return e}))}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,i,o)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,i,o]=e[c],a=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"3a3f236e",88:"694496ef",193:"85d05a2c",202:"418bf379",255:"fb28276e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{88:"2eb1e1c0",202:"8074d24d",736:"80653f7a"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="book_of_ideas:";r.l=(n,i,o,s)=>{if(e[n])e[n].push(i);else{var a,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){a=u;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+o),a.src=n),e[n]=[i];var f=(t,r)=>{a.onerror=a.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(r))),t)return t(r)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=o=>{if(i.onerror=i.onload=null,"load"===o.type)r();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,i.parentNode.removeChild(i),n(l)}};return i.onerror=i.onload=o,i.href=t,document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=r[n],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){i=s[n],o=i.getAttribute("data-href");if(o===e||o===t)return i}},n=n=>new Promise(((i,o)=>{var s=r.miniCssF(n),a=r.p+s;if(t(s,a))return i();e(n,a,i,o)})),i={143:0};r.f.miniCss=(e,t)=>{var r={88:1,202:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((r,n)=>i=e[t]=[r,n]));n.push(i[2]=o);var s=r.p+r.u(t),a=new Error,l=n=>{if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}};r.l(s,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[s,a,l]=n,d=0;if(s.some((t=>0!==e[t]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(l)var c=l(r)}for(t&&t(n);d<s.length;d++)o=s[d],r.o(e,o)&&e[o]&&e[o][0](),e[s[d]]=0;return r.O(c)},n=self["webpackChunkbook_of_ideas"]=self["webpackChunkbook_of_ideas"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(2318)));n=r.O(n)})();