"use strict";(self.webpackChunkQuestify=self.webpackChunkQuestify||[]).push([[250],{5318:function(e,o,r){r.r(o),r.d(o,{default:function(){return A}});var n=r(9439),a=r(2791),t=r(9434),s=r(4164),i=r(9),d=r(9126),c="AddTaskBtn_addTaskBtn__tfpui",l="AddTaskBtn_addTaskBtn__icon__SfWSm",u=r(184),m=function(e){var o=e.onClick;return(0,u.jsx)("button",{type:"button",className:c,onClick:o,children:(0,u.jsx)(d.iTs,{className:l})})},_=r(6913),f="ModalWindowFormTask_modal__background__s2zQP",p="ModalWindowFormTask_modal__wrapper__Lt3VG",x="ModalWindowFormTask_modal__08Sl-",F="ModalWindowFormTask_modal__btnClose__CpYsr",h="ModalWindowFormTask_modal__title__3pLQ-",g=r(5880),b="CardForm_cardForm__difficultyBox__j3k6T",C="CardForm_cardForm__titleCategory__oGqAd",j="CardForm_cardForm__inputBox__fNtje",k="CardForm_cardForm__titleCenter__z1Gb+",Z="CardForm_cardForm__inputName__UiizQ",v="CardForm_cardForm__categoryBox__9Lr7f",y="CardForm_cardForm__require__-n3Ju",N="CardForm_cardForm__bottom__JEZmH",T="CardForm_cardForm__btnSubmit__L1z9X",w="CardForm_cardForm__datePickerBox__n8u6O",S="CardForm_cardForm__datepicker_toggle__ndjdJ",z="CardForm_cardForm__datepicker_toggle_button__-hY1H",M="CardForm_cardForm__datepicker_input__zTUf1",B=r(1669),W=r(1413),D={singleValue:function(e){return(0,W.Z)((0,W.Z)({},e),{},{color:"black",fontFamily:"HelveticaNeueCyr, sans-serif",fontSize:"16px",fontWeight:"400"})},valueContainer:function(e){return(0,W.Z)((0,W.Z)({},e),{},{padding:0,display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"18px"})},control:function(e){return(0,W.Z)((0,W.Z)({},e),{},{outline:"none",boxShadow:"none",border:"1px solid #00D7FF",borderRadius:"14px",transition:"0.2s",backgroundColor:"#fff",color:"#121417",width:"150px",height:"48px","&:hover":{border:"1px solid #0198b3"}})},dropdownIndicator:function(e,o){o.isFocused;return(0,W.Z)((0,W.Z)({},e),{},{transition:"500ms ease",color:"#00D7FF","&:hover":{color:"#0198b3",transform:"rotate(180deg)"}})},option:function(e,o){var r=o.isFocused;return(0,W.Z)((0,W.Z)({},e),{},{color:r?"#121417":"#838383",fontWeight:r?"400":"600",fontSize:"14px",backgroundColor:"transparent",fontFamily:"Manrope, sans-serif",cursor:"pointer",lineHeight:"18px",transition:"200ms ease","&:hover":{backgroundColor:"#dddbdb",color:"#121417",transform:"scale(1.05)"}})},menuList:function(e){return(0,W.Z)((0,W.Z)({},e),{},{height:"100%",marginBottom:"8px",backgroundColor:"#FFFFFF",borderRadius:"14px",padding:"14px",margin:"-1px",boxSizing:"content-box"})}},H={singleValue:function(e){return(0,W.Z)((0,W.Z)({},e),{},{color:"black",fontFamily:"HelveticaNeueCyr, sans-serif",fontSize:"16px",fontWeight:"400"})},valueContainer:function(e){return(0,W.Z)((0,W.Z)({},e),{},{padding:0,display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"18px"})},control:function(e){return(0,W.Z)((0,W.Z)({},e),{},{outline:"none",boxShadow:"none",border:"1px solid #00a3c2",borderRadius:"14px",transition:"0.2s",backgroundColor:"white",color:"#121417",width:"150px",height:"48px"})},dropdownIndicator:function(e,o){o.isFocused;return(0,W.Z)((0,W.Z)({},e),{},{transition:"500ms ease",color:"#00D7FF","&:hover":{color:"#0b44cd",transform:"rotate(180deg)"}})},option:function(e,o){var r=o.isFocused;return(0,W.Z)((0,W.Z)({},e),{},{color:r?"#121417":"#838383",fontSize:"14px",backgroundColor:"transparent",fontFamily:"Manrope, sans-serif",fontWeight:"400",cursor:"pointer",lineHeight:"18px",transition:"200ms ease","&:hover":{backgroundColor:"#dddbdb",color:"#121417",transform:"scale(1.05)"}})},menuList:function(e){return(0,W.Z)((0,W.Z)({},e),{},{height:"100%",marginBottom:"8px",backgroundColor:"#FFFFFF",borderRadius:"14px",padding:"14px",margin:"-1px",boxSizing:"content-box"})}},L=r(1117),I=r(3114),P=r(5763),Q=function(e){var o=e.sendTask,r=e.onClose,t=(0,a.useState)(""),s=(0,n.Z)(t,2),i=s[0],d=s[1],c=(0,a.useState)(""),l=(0,n.Z)(c,2),m=l[0],_=l[1],f=(0,a.useState)("YYYY-MM-DD"),p=(0,n.Z)(f,2),x=p[0],F=p[1],h=(0,a.useState)("HH:MM"),g=(0,n.Z)(h,2),W=g[0],Q=g[1],R=(0,a.useState)(""),Y=(0,n.Z)(R,2),V=Y[0],q=Y[1],A=(0,a.useState)(!1),E=(0,n.Z)(A,2),G=E[0],J=E[1];(0,a.useEffect)((function(){J(!(!V||!m))}),[V,m]);var U=function(e){if(void 0!==e.currentTarget){if(e.currentTarget){var o=e.currentTarget,r=o.name,n=o.value;switch(r){case"title":d(n);break;case"date":var a=n.split("T");F(a[0]),Q(a[1])}}}else switch(e.name){case"difficulty":_(e.value);break;case"category":q(e.value)}};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),o(m,i,x,V,W),r()},children:[(0,u.jsxs)("div",{className:b,children:[(0,u.jsx)("p",{className:C,children:"Difficulty:"}),(0,u.jsx)(B.ZP,{className:"basic-single",name:"difficulty",options:L,styles:D,defaultValue:L[1],onChange:U}),!G&&(0,u.jsx)(P.Zh5,{className:y})]}),(0,u.jsxs)("div",{className:j,children:[(0,u.jsx)("label",{htmlFor:"title",className:k,children:"Title:"}),(0,u.jsx)("input",{type:"text",className:Z,name:"title",onChange:U,required:!0})]}),(0,u.jsxs)("div",{className:w,children:[x?(0,u.jsxs)("p",{children:[x," ",W]}):(0,u.jsx)("label",{htmlFor:"date",children:"Date:"}),(0,u.jsxs)("span",{className:S,children:[(0,u.jsx)("span",{className:z}),(0,u.jsx)("input",{name:"date",type:"datetime-local",className:M,onChange:U,required:!0})]})]}),(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("p",{className:C,children:"Category:"}),(0,u.jsx)(B.ZP,{className:"basic-single",classNamePrefix:"select",name:"category",options:I,styles:H,onChange:U}),!G&&(0,u.jsx)(P.Zh5,{className:y})]}),(0,u.jsx)("div",{className:N,children:(0,u.jsx)("button",{disabled:!G,type:"submit",className:T,children:" START"})})]})})},R=function(e){var o=e.onClose,r=e.sendTask;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:f}),(0,u.jsx)("div",{className:p,children:(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)(g.Fk5,{className:F,onClick:o}),(0,u.jsx)("h2",{className:h,children:"Create New Quest"}),(0,u.jsx)(Q,{sendTask:r,onClose:o})]})})]})},Y=r(2639),V=r(6073),q=r(6010);function A(){var e=(0,a.useState)(!1),o=(0,n.Z)(e,2),r=o[0],d=o[1],c=(0,t.I0)(),l=(0,t.v9)(q.Vc);(0,a.useEffect)((function(){c((0,V.RI)())}),[c]);return(0,u.jsxs)("div",{children:[(0,u.jsx)(i.h,{}),l?(0,u.jsx)(Y.Z,{}):(0,u.jsx)(_.a,{}),(0,u.jsx)(m,{onClick:function(){d(!0),document.body.style.overflow="hidden"}}),r&&(0,s.createPortal)((0,u.jsx)(R,{onClose:function(){d(!1),document.body.style.overflow=""},sendTask:function(e,o,r,n,a){c((0,V.Z0)({title:o,difficulty:e,category:n,date:r,time:a,type:"Task"}))}}),document.body)]})}}}]);
//# sourceMappingURL=250.eabc18ff.chunk.js.map