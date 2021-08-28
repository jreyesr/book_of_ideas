"use strict";(self["webpackChunkbook_of_ideas"]=self["webpackChunkbook_of_ideas"]||[]).push([[202],{9423:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(3673);const o={class:"row"},r={class:"col-12 col-md-6 center-children-y"};function s(e,t,n,s,l,d){const i=(0,a.up)("list-of-ideas-card"),c=(0,a.up)("new-list-card"),u=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(u,{padding:""},{default:(0,a.w5)((()=>[(0,a._)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col-12 col-md-6",key:e.name},[(0,a.Wm)(i,{item:e},null,8,["item"])])))),128)),(0,a._)("div",r,[(0,a.Wm)(c,{style:{"flex-grow":"1"}})])])])),_:1})}var l=n(1959),d=n(7874),i=n(794),c=(n(246),n(2323)),u=n(8880);const m={class:"text-h5"},p={key:0};function w(e,t,n,o,r,s){const l=(0,a.up)("q-card-section"),d=(0,a.up)("q-separator"),i=(0,a.up)("q-btn"),w=(0,a.up)("q-space"),f=(0,a.up)("q-card-actions"),g=(0,a.up)("q-slide-transition"),_=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(_,{class:"q-ma-md",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a._)("div",m,(0,c.zw)(n.item.name),1),(0,a._)("div",{class:(0,c.C_)(["text-overline",o.elementColor()])},[(0,a.Uk)((0,c.zw)(n.item.items.length)+" items",1),o.starredCount>0?((0,a.wg)(),(0,a.iD)("span",p,", "+(0,c.zw)(o.starredCount)+" starred",1)):(0,a.kq)("",!0)],2)])),_:1}),(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,c.zw)(n.item.description),1)])),_:1}),(0,a.Wm)(d,{inset:""}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{flat:"",color:"dark",label:"Add new",onClick:o.openNewDialog},null,8,["onClick"]),(0,a.Wm)(w),(0,a.Wm)(i,{color:"grey",round:"",flat:"",dense:"",icon:"arrow_forward",to:{name:"list",params:{id:n.item.id}}},null,8,["to"])])),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(d),(0,a.Wm)(l,{class:"text-subtitle2 text-weight-regular"})],512),[[u.F8,o.expanded]])])),_:1})])),_:1})}var f=n(8825),g=n(4854);const _={props:["item"],setup(e){const t=(0,f.Z)(),n=(0,d.oR)(),a=(0,l.Vh)(e,"item"),o=()=>a.value.items.length>0?"text-green-9":"text-orange-9",r=(0,l.Fl)((()=>a.value.items.filter((e=>!0===e.starred)).length)),s=()=>(0,g.fj)(t,a.value.id,n);return{elementColor:o,starredCount:r,expanded:(0,l.iH)(!1),openNewDialog:s}}};var C=n(151),k=n(5589),v=n(5869),Z=n(9367),h=n(8240),q=n(2025),W=n(2471),x=n(7518),b=n.n(x);_.render=w;const Q=_;b()(_,"components",{QCard:C.Z,QCardSection:k.Z,QSeparator:v.Z,QCardActions:Z.Z,QBtn:h.Z,QSpace:q.Z,QSlideTransition:W.Z});const y=(0,a._)("div",{class:"text-h5 text-grey"},"Add new",-1);function D(e,t,n,o,r,s){const l=(0,a.up)("q-icon"),d=(0,a.up)("q-card-section"),i=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(i,{class:"q-ma-md dashed-border text-grey clickable",bordered:"",flat:"",onClick:o.openNewDialog},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"center-children"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{name:"add",size:"md"}),y])),_:1})])),_:1},8,["onClick"])}const z={setup(){const e=(0,f.Z)(),t=(0,d.oR)(),n=()=>(0,g.MI)(e,t);return{openNewDialog:n}}};var I=n(4554);z.render=D;const N=z;b()(z,"components",{QCard:C.Z,QCardSection:k.Z,QIcon:I.Z});const S=(0,a.aZ)({name:"PageIndex",components:{ListOfIdeasCard:Q,NewListCard:N},setup(){const e=(0,d.oR)(),t=(0,l.Fl)((()=>e.getters["search/filtered"]));return(0,i.Z)({title:"Book Of Ideas"}),{items:t}}});var j=n(4379);S.render=s;const A=S;b()(S,"components",{QPage:j.Z})}}]);