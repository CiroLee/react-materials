import{j as t,b as l,a as e,u as r,R as h}from"./index-31567a8d.js";const s=i=>{const a=i.resize.includes("horizontal")?{height:i.height||"16px"}:{width:i.width||"16px"},c=i.resize.includes("horizontal")?{width:i.width||"16px"}:{height:i.height||"16px"};return t("div",{className:l("resizable-box",i.className,i.resize),style:a,children:[e("div",{style:c,className:l("resize",i.resize)}),e("div",{className:l("resize-line")}),e("div",{className:l("resize-content"),children:i.children})]})},d=()=>{const i=r();return t("div",{children:[e(h,{name:"ri-arrow-left-line",size:24,color:"#333",onClick:()=>i(-1)}),e("h2",{className:"text-lg",children:"可调整大小盒子"}),t("div",{className:"mt-4 w-full bg-red-200 overflow-hidden flex flex-col",style:{height:"600px"},children:[e(s,{className:"bg-red-600",width:"100%",height:"64px",resize:"vertical-bottom",children:e("h1",{className:"flex h-full justify-center items-center",children:"header"})}),t("div",{className:"flex flex-1 overflow-hidden relative w-full",children:[e(s,{className:"bg-purple-700",width:"100px",height:"100%",resize:"horizontal-right",children:e("div",{className:"flex h-full justify-center items-center",children:"aside"})}),e("main",{className:"bg-orange-300  flex-1 flex justify-center items-center",children:"main"}),e(s,{className:"bg-pink-400 ",width:"100px",height:"100%",resize:"horizontal-left",children:e("div",{className:"flex h-full justify-center items-center",children:"aside"})})]}),e(s,{width:"100%",height:"66px",resize:"vertical-top",children:e("div",{className:"flex justify-center items-center h-full",children:"footer"})})]})]})};export{d as default};