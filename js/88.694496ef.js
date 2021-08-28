"use strict";(self["webpackChunkbook_of_ideas"]=self["webpackChunkbook_of_ideas"]||[]).push([[88],{9143:(e,l,t)=>{t.r(l),t.d(l,{default:()=>z});t(246);var i=t(3673),a=t(2323),n=t(8880);const s=(0,i._)("div",null,"Items",-1),r=(0,i._)("div",null,"Edit",-1),o=(0,i._)("div",null,"Delete",-1),d={class:"text-body1"},u=(0,i.Uk)("You have no ideas in this list. Add a new one now!"),m=["src"],c=(0,i._)("img",{class:"invisible"},null,-1);function p(e,l,t,p,w,v){const f=(0,i.up)("q-breadcrumbs-el"),k=(0,i.up)("q-breadcrumbs"),g=(0,i.up)("q-icon"),_=(0,i.up)("q-btn"),b=(0,i.up)("q-item-section"),y=(0,i.up)("q-item"),q=(0,i.up)("q-item-label"),W=(0,i.up)("q-list"),h=(0,i.up)("q-page"),C=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.j4)(h,{padding:""},{default:(0,i.w5)((()=>{var e,l;return[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>{var e;return[(0,i.Wm)(f,{label:"Home",to:{name:"home"}}),(0,i.Wm)(f,{label:null===(e=p.list)||void 0===e?void 0:e.name},null,8,["label"])]})),_:1}),(0,i._)("h4",null,[(0,i.Uk)((0,a.zw)(null===(e=p.list)||void 0===e?void 0:e.name)+" ",1),p.isListEmpty?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(_,{key:0,flat:"",size:"sm",color:"primary",class:"text-primary q-px-sm",onClick:p.openListReorder},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:"format_list_bulleted",class:"q-mr-xs"}),s])),_:1},8,["onClick"])),(0,i.Wm)(_,{flat:"",size:"sm",color:"primary",class:"q-px-sm",onClick:p.openListEdit},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:"edit",class:"q-mr-xs"}),r])),_:1},8,["onClick"]),(0,i.Wm)(_,{flat:"",size:"sm",color:"negative",class:"q-px-sm",onClick:p.openListDelete},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:"delete",class:"q-mr-xs"}),o])),_:1},8,["onClick"])]),(0,i._)("p",d,(0,a.zw)(null===(l=p.list)||void 0===l?void 0:l.description),1),(0,i.Wm)(W,{bordered:"",separator:""},{default:(0,i.w5)((()=>[p.isListEmpty?(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{key:0,clickable:"",onClick:p.addNew},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[u])),_:1})])),_:1},8,["onClick"])),[[C]]):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(p.filteredIdeas,((e,l)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{clickable:"",onClick:l=>p.openDetails(e),key:e.id},{default:(0,i.w5)((()=>[e.picUrl?((0,i.wg)(),(0,i.j4)(b,{key:0,thumbnail:""},{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.picUrl},null,8,m)])),_:2},1024)):((0,i.wg)(),(0,i.j4)(b,{key:1,thumbnail:""},{default:(0,i.w5)((()=>[c])),_:1})),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.name),1)])),_:2},1024),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.linesToArray(e.description),(e=>((0,i.wg)(),(0,i.j4)(q,{caption:"",lines:"1",key:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e),1)])),_:2},1024)))),128))])),_:2},1024),(0,i.Wm)(b,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{round:"",flat:"",color:"amber",onClick:(0,n.iM)((e=>p.toggleStar(l)),["stop"])},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:e.starred?"star":"star_outline"},null,8,["name"])])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["onClick"])),[[C]]))),128))])),_:1})]})),_:1})}t(7280),t(5363);var w=t(1959),v=t(9582),f=t(7874),k=t(8825),g=t(794),_=t(1325),b=t(4854);const y={setup(){const{params:e}=(0,v.yj)(),l=(0,v.tv)(),t=(0,f.oR)(),i=(0,k.Z)(),a=(0,w.Fl)((()=>t.getters["main/findListById"](e.id))),n=(0,w.Fl)((()=>{var e;return 0==(null===(e=a.value)||void 0===e?void 0:e.items.length)})),s=(0,w.Fl)((()=>{var e;return(null===(e=a.value)||void 0===e?void 0:e.items.length)>1})),r=(0,w.Fl)((()=>t.getters["search/filteredIdeas"])),o=e=>(0,b.iE)(i,e),d=()=>(0,b.fj)(i,e.id,t,!0),u=()=>(0,b.px)(i,e.id,t),m=()=>(0,b.WT)(i,t,a),c=()=>{(0,b.jt)(i,e.id,t).then((e=>{e&&l.replace({name:"home"})}))},p=e=>{const l=a.value.items[e],n=l.starred?"Unstarring":"Starring";i.notify({message:`${n} ${l.name}`,icon:"star_outline",group:"starring-group",timeout:750}),t.commit("main/toggleStar",{listId:a.value.id,itemIndex:e})};return(0,g.Z)((()=>{var e,l;return{title:null!==(e=null===(l=a.value)||void 0===l?void 0:l.name)&&void 0!==e?e:"<Deleted>"}})),{list:a,filteredIdeas:r,isListEmpty:n,hasMultipleElements:s,linesToArray:_.X,openDetails:o,addNew:d,openListReorder:u,openListEdit:m,openListDelete:c,toggleStar:p,store:t}}};var q=t(4379),W=t(1481),h=t(5926),C=t(8240),L=t(4554),Z=t(7011),I=t(3414),j=t(2035),x=t(2350),Q=t(6489),E=t(7518),D=t.n(E);y.render=p;const z=y;D()(y,"components",{QPage:q.Z,QBreadcrumbs:W.Z,QBreadcrumbsEl:h.Z,QBtn:C.Z,QIcon:L.Z,QList:Z.Z,QItem:I.Z,QItemSection:j.Z,QItemLabel:x.Z}),D()(y,"directives",{Ripple:Q.Z})}}]);