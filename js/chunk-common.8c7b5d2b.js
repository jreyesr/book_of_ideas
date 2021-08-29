"use strict";(self["webpackChunkbook_of_ideas"]=self["webpackChunkbook_of_ideas"]||[]).push([[64],{4463:(e,l,i)=>{i.d(l,{E3:()=>$,iE:()=>Y,jt:()=>X,WT:()=>z,px:()=>G,fj:()=>M,MI:()=>B});i(246);var a=i(3673);const o=(0,a._)("div",{class:"text-h6"},"New list",-1);function n(e,l,i,n,t,r){const d=(0,a.up)("q-card-section"),s=(0,a.up)("q-input"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-card-actions"),p=(0,a.up)("q-card"),m=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(m,{ref:"dialogRef",onHide:n.onDialogHide},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"q-dialog-plugin wider-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(d,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"Name",ref:"nameRef",modelValue:n.name,"onUpdate:modelValue":l[0]||(l[0]=e=>n.name=e),autofocus:"",hint:"Required",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"]),(0,a.Wm)(s,{label:"Description",ref:"descriptionRef",type:"textarea",rows:"4",hint:"Required",modelValue:n.description,"onUpdate:modelValue":l[1]||(l[1]=e=>n.description=e),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])),_:1}),(0,a.Wm)(u,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"grey",label:"Cancel",onClick:n.onDialogCancel},null,8,["onClick"]),(0,a.Wm)(c,{color:"primary",label:"OK",onClick:n.onSubmit},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onHide"])}i(71);var t=i(1959),r=i(1701);const d={emits:[...r.Z.emits],props:{list:{type:Object,optional:!0}},setup(e){var l,i;const{dialogRef:a,onDialogHide:o,onDialogOK:n,onDialogCancel:d}=(0,r.Z)(),s=(0,t.Vh)(e,"list").value,c=(0,t.iH)(null!==(l=null===s||void 0===s?void 0:s.name)&&void 0!==l?l:""),u=(0,t.iH)(null),p=(0,t.iH)(null!==(i=null===s||void 0===s?void 0:s.description)&&void 0!==i?i:""),m=(0,t.iH)(null),g=()=>{const e={name:c.value,description:p.value,id:null===s||void 0===s?void 0:s.id,items:null===s||void 0===s?void 0:s.items};n(e)},f=()=>{u.value.validate(),m.value.validate(),u.value.hasError||m.value.hasError||g()};return{dialogRef:a,onDialogHide:o,onDialogCancel:d,onSubmit:f,name:c,nameRef:u,description:p,descriptionRef:m}}};var s=i(1477),c=i(151),u=i(2471),p=i(4027),m=i(5589),g=i(2426),f=i(9367),v=i(8240),w=i(7518),C=i.n(w);d.render=n;const q=d;C()(d,"components",{QDialog:s.Z,QCard:c.Z,QSlideTransition:u.Z,QImg:p.Z,QCardSection:m.Z,QInput:g.Z,QCardActions:f.Z,QBtn:v.Z});var h=i(8880);const b=(0,a._)("div",{class:"absolute-full flex flex-center bg-negative text-white"}," Cannot load image ",-1),k=(0,a._)("div",{class:"text-h6"},"New idea",-1);function D(e,l,i,o,n,t){const r=(0,a.up)("q-img"),d=(0,a.up)("q-slide-transition"),s=(0,a.up)("q-card-section"),c=(0,a.up)("q-input"),u=(0,a.up)("q-file"),p=(0,a.up)("q-btn"),m=(0,a.up)("q-card-actions"),g=(0,a.up)("q-card"),f=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(f,{ref:"dialogRef",onHide:o.onDialogHide},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"q-dialog-plugin wider-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(r,{src:o.picUrl,class:"short-image",fit:"cover"},{error:(0,a.w5)((()=>[b])),_:1},8,["src"]),[[h.F8,o.picUrl]])])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(s,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{label:"Name",ref:"nameRef",modelValue:o.name,"onUpdate:modelValue":l[0]||(l[0]=e=>o.name=e),autofocus:"",hint:"Required",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"]),(0,a.Wm)(c,{label:"Description",ref:"descriptionRef",type:"textarea",rows:"4",hint:"Required",modelValue:o.description,"onUpdate:modelValue":l[1]||(l[1]=e=>o.description=e),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"]),(0,a.Wm)(c,{label:"Idea URL",ref:"urlRef",hint:"Required",modelValue:o.url,"onUpdate:modelValue":l[2]||(l[2]=e=>o.url=e),type:"url",rules:[e=>!!e||"Field is required",e=>o.isValidUrl(e)||"Must be a valid URL"]},null,8,["modelValue","rules"]),(0,a.Wm)(c,{label:"Picture URL",ref:"picUrlRef",modelValue:o.picUrl,"onUpdate:modelValue":l[3]||(l[3]=e=>o.picUrl=e),clearable:"","clear-icon":"close"},null,8,["modelValue"]),(0,a.Wm)(u,{label:"Picture",ref:"picFileRef",modelValue:o.picFile,"onUpdate:modelValue":l[4]||(l[4]=e=>o.picFile=e),clearable:"","clear-icon":"close"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(m,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{color:"grey",label:"Cancel",onClick:o.onDialogCancel},null,8,["onClick"]),(0,a.Wm)(p,{color:"primary",label:"OK",onClick:o.onSubmit},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onHide"])}var Z=i(1325);const R={emits:[...r.Z.emits],setup(e){const{dialogRef:l,onDialogHide:i,onDialogOK:a,onDialogCancel:o}=(0,r.Z)(),n=(0,t.iH)(""),d=(0,t.iH)(null),s=(0,t.iH)(""),c=(0,t.iH)(null),u=(0,t.iH)(""),p=(0,t.iH)(null),m=(0,t.iH)(""),g=(0,t.iH)(null),f=(0,t.iH)(null),v=(0,t.iH)(null),w=()=>{const e={name:n.value,description:s.value,url:u.value,picUrl:m.value,picFile:f.value};a(e)},C=()=>{d.value.validate(),c.value.validate(),p.value.validate(),d.value.hasError||c.value.hasError||p.value.hasError||w()};return{dialogRef:l,onDialogHide:i,onDialogCancel:o,onSubmit:C,name:n,nameRef:d,description:s,descriptionRef:c,url:u,urlRef:p,picUrl:m,picUrlRef:g,picFile:f,picFileRef:v,isValidUrl:Z.j}}};var _=i(4816);R.render=D;const W=R;C()(R,"components",{QDialog:s.Z,QCard:c.Z,QSlideTransition:u.Z,QImg:p.Z,QCardSection:m.Z,QInput:g.Z,QFile:_.Z,QCardActions:f.Z,QBtn:v.Z});var H=i(2323);const Q=(0,a._)("div",{class:"absolute-full flex flex-center bg-negative text-white"}," Cannot load image ",-1),V={class:"text-h6"};function U(e,l,i,o,n,t){const r=(0,a.up)("q-img"),d=(0,a.up)("q-slide-transition"),s=(0,a.up)("q-icon"),c=(0,a.up)("q-card-section"),u=(0,a.up)("q-btn"),p=(0,a.up)("q-card-actions"),m=(0,a.up)("q-card"),g=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(g,{ref:"dialogRef",onHide:o.onDialogHide},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"q-dialog-plugin wider-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[""!=o.picUrl?((0,a.wg)(),(0,a.j4)(r,{key:0,src:o.picUrl,height:"250px",fit:"cover"},{error:(0,a.w5)((()=>[Q])),_:1},8,["src"])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a._)("div",V,[i.idea.starred?((0,a.wg)(),(0,a.j4)(s,{key:0,class:"q-pr-md align-baseline",name:"star",color:"amber"})):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,H.zw)(i.idea.name),1)])])),_:1}),(0,a.Wm)(c,{class:"q-pt-none"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.linesToArray(i.idea.description),(e=>((0,a.wg)(),(0,a.iD)("p",{key:e},(0,H.zw)(e),1)))),128))])),_:1}),(0,a.Wm)(p,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{color:"primary",label:"Go there!",icon:"launch",onClick:l[0]||(l[0]=e=>o.openURL(i.idea.url))})])),_:1})])),_:1})])),_:1},8,["onHide"])}var y=i(7874),I=i(3437);const O={props:{idea:Object},emits:[...r.Z.emits],setup(e){const{dialogRef:l,onDialogHide:i,onDialogOK:a,onDialogCancel:o}=(0,r.Z)(),n=(0,y.oR)(),d=(0,t.Vh)(e,"idea"),s=(0,t.Fl)((()=>n.getters["images/getImageSrc"](d.value.id)));return{dialogRef:l,onDialogHide:i,picUrl:s,onOKClick:a,openURL:I.Z,linesToArray:Z.X}}};var x=i(4554);O.render=U;const F=O;C()(O,"components",{QDialog:s.Z,QCard:c.Z,QSlideTransition:u.Z,QImg:p.Z,QCardSection:m.Z,QIcon:x.Z,QCardActions:f.Z,QBtn:v.Z});const S=(0,a._)("div",{class:"text-h6"},"Manage items",-1),j={class:"list-group-item"},K={class:"text-content"};function L(e,l,i,o,n,t){const r=(0,a.up)("q-card-section"),d=(0,a.up)("q-icon"),s=(0,a.up)("q-btn"),c=(0,a.up)("draggable"),u=(0,a.up)("q-card-actions"),p=(0,a.up)("q-card"),m=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(m,{ref:"dialogRef",onHide:o.onDialogHide},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"q-dialog-plugin wider-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(r,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,(0,a.dG)({class:"list-group",tag:"transition-group","component-data":{tag:"ul",type:"transition-group",name:o.drag?null:"flip-list"},modelValue:o.listItems,"onUpdate:modelValue":l[0]||(l[0]=e=>o.listItems=e)},o.dragOptions,{onStart:l[1]||(l[1]=e=>o.drag=!0),onEnd:l[2]||(l[2]=e=>o.drag=!1),"item-key":"id"}),{item:(0,a.w5)((({element:e})=>[(0,a._)("li",j,[(0,a.Wm)(d,{name:"drag_indicator",class:"handle"}),(0,a._)("span",K,(0,H.zw)(e.name),1),(0,a.Wm)(s,{flat:"",round:"",size:"xs",class:"close",onClick:l=>o.openIdeaDelete(e)},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{name:"close"})])),_:2},1032,["onClick"])])])),_:1},16,["component-data","modelValue"])])),_:1}),(0,a.Wm)(u,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{color:"grey",label:"Cancel",onClick:o.onCancelClick},null,8,["onClick"]),(0,a.Wm)(s,{color:"primary",label:"OK",onClick:o.onOKClick},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onHide"])}var E=i(8825),N=i(470),P=i.n(N);const A={props:{listId:String},emits:[...r.Z.emits],components:{draggable:P()},setup(e){const{dialogRef:l,onDialogHide:i,onDialogOK:a,onDialogCancel:o}=(0,r.Z)(),n=(0,E.Z)(),d=(0,y.oR)(),s=(0,t.Vh)(e,"listId").value,c=d.getters["main/findListById"](s),u=(0,t.iH)(c.items),p=()=>{a({newOrder:u.value})},m=e=>{$(n,s,e,d)},g=(0,t.Fl)((()=>({animation:200,group:"description",disabled:!1,ghostClass:"ghost"})));return{dialogRef:l,onDialogHide:i,onOKClick:p,onCancelClick:o,openIdeaDelete:m,listItems:u,dragOptions:g,drag:(0,t.iH)(!1)}}};A.render=L;const T=A;C()(A,"components",{QDialog:s.Z,QCard:c.Z,QCardSection:m.Z,QIcon:x.Z,QBtn:v.Z,QCardActions:f.Z});const B=(e,l)=>{e.dialog({component:q,persistent:!0}).onOk((e=>{l.dispatch("main/addNewList",{data:e})})).onDismiss((()=>{}))},z=(e,l,i)=>{e.dialog({component:q,componentProps:{list:i},persistent:!0}).onOk((e=>{l.dispatch("main/editList",{data:e})})).onDismiss((()=>{}))},M=(e,l,i,a=!1)=>{e.dialog({component:W,persistent:!0}).onOk((e=>{i.dispatch("main/addNewIdea",{listId:l,idea:e,refreshIndex:a})})).onDismiss((()=>{}))},Y=(e,l)=>{e.dialog({component:F,componentProps:{idea:l}}).onDismiss((()=>{}))},G=(e,l,i)=>{e.dialog({component:T,componentProps:{listId:l},persistent:!0}).onOk((({newOrder:e})=>{i.dispatch("main/changeListOrder",{listId:l,newOrder:e})})).onDismiss((()=>{}))},X=(e,l,i)=>new Promise((a=>{e.dialog({title:"Confirm deletion",message:"Do you really want to delete this list?",ok:{color:"negative",label:"Yes"},cancel:{color:"grey",label:"No"}}).onOk((()=>{i.dispatch("main/deleteList",{listId:l}),a(!0)})).onCancel((()=>a(!1)))})),$=(e,l,i,a)=>new Promise((o=>{e.dialog({title:"Confirm deletion",message:`Do you really want to delete ${i.name}?`,ok:{color:"negative",label:"Yes"},cancel:{color:"grey",label:"No"}}).onOk((()=>{a.dispatch("main/deleteIdea",{listId:l,ideaId:i.id}),o(!0)})).onCancel((()=>o(!1)))}))},1325:(e,l,i)=>{i.d(l,{X:()=>a,j:()=>o});i(7280),i(71),i(7965);const a=e=>e.split("\n"),o=e=>{let l;try{l=new URL(e)}catch(i){return!1}return"http:"===l.protocol||"https:"===l.protocol}}}]);