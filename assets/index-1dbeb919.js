import{e as x,j as e,a as j,R as b,u as C}from"./index-a23edfff.js";import{W as p,I as r}from"./index-21f966cb.js";const c=i=>{const{value:d="",placeholder:g,className:N,maxLength:t,clearable:v,rows:f=5,showCount:l,disabled:h,onChange:a}=i,[n,m]=x.useState(""),[w,u]=x.useState(""),S=s=>{t&&s.target.value.length>t&&(s.target.value=s.target.value.slice(0,t)),m(s.target.value),a==null||a(s.target.value),l&&o()},y=()=>{m(""),a==null||a(""),l&&o("0")},o=s=>{u(t?`${s||n.length}/${t}`:`${s||n.length}`)};return x.useEffect(()=>{if(m(String(d)),l){const s=String(d).length;o(s.toString())}},[d]),e.jsxs("div",{className:j("cy-textarea",N,{disabled:h}),children:[e.jsx("textarea",{value:n,rows:f,disabled:h,placeholder:g,onChange:S}),e.jsx(p,{condition:!!v&&!!n.length,children:e.jsx(b,{name:"ri-close-circle-fill",color:"#a8a8a8",className:"cy-textarea__clear",onClick:y})}),e.jsx(p,{condition:!!l,children:e.jsx("div",{className:j({"cy-textarea__count":l}),children:w})})]})},E=()=>{const i=C();return e.jsxs("div",{children:[e.jsx(b,{name:"ri-arrow-left-line",size:24,color:"#333",onClick:()=>i(-1)}),e.jsx("h2",{className:"text-lg my-4",children:"Form"}),e.jsxs("div",{className:"mb-6 rounded-sm p-4 border border-solid border-gray-200",children:[e.jsx("h2",{className:"text-lg",children:"Input"}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"基本用法"}),e.jsx(r,{placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"disabled"}),e.jsx(r,{disabled:!0,placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"允许清除"}),e.jsx(r,{clearable:!0,placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"显示count"}),e.jsx(r,{clearable:!0,maxLength:20,showCount:!0,placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"password"}),e.jsx(r,{type:"password",placeholder:"input something"})]})]})]}),e.jsxs("div",{className:"mb-6 rounded-sm p-4 border border-solid border-gray-200",children:[e.jsx("h2",{className:"text-lg",children:"Textarea"}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"基本用法"}),e.jsx(c,{placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"disabled"}),e.jsx(c,{disabled:!0,placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"允许清除"}),e.jsx(c,{clearable:!0,placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"自定义行数 rows=2"}),e.jsx(c,{clearable:!0,rows:2,placeholder:"input something"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-2 text-md",children:"显示count"}),e.jsx(c,{clearable:!0,maxLength:20,showCount:!0,placeholder:"input something"})]})]})]})]})};export{E as default};
